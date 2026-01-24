'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { Button, Card, CardContent, Progress } from '@/components/ui';
import { cn, formatTime } from '@/lib/utils';
import type { GameState, AnswerRecord } from '@/types';
import type { ConjugationQuestion } from '@/data/conjugation-questions';
import { Timer, Zap, Check, X } from 'lucide-react';

interface ConjugationRaceProps {
  questions: ConjugationQuestion[];
  onComplete: (state: GameState) => void;
}

const GAME_DURATION = 60; // seconds

export function ConjugationRace({ questions, onComplete }: ConjugationRaceProps) {
  const { language } = useLanguage();
  const [gameStarted, setGameStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(GAME_DURATION);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [gameState, setGameState] = useState<GameState>({
    currentQuestion: 0,
    totalQuestions: questions.length,
    score: 0,
    streak: 0,
    timeRemaining: GAME_DURATION,
    answers: [],
    isComplete: false,
  });

  const questionStartTime = useRef<number>(Date.now());
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentQuestion = questions[currentIndex];

  // Tense labels
  const tenseLabels = {
    past: { id: 'Lampau', ar: 'الماضي', en: 'Past' },
    present: { id: 'Sekarang', ar: 'المضارع', en: 'Present' },
    command: { id: 'Perintah', ar: 'الأمر', en: 'Command' },
  };

  // End the game
  const endGame = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    const finalState: GameState = {
      ...gameState,
      timeRemaining: 0,
      isComplete: true,
    };
    setGameState(finalState);
    onComplete(finalState);
  }, [gameState, onComplete]);

  // Timer effect
  useEffect(() => {
    if (!gameStarted) return;

    timerRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameStarted]);

  // End game when timer hits 0
  useEffect(() => {
    if (gameStarted && timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, gameStarted, endGame]);

  // Start the game
  const startGame = () => {
    setGameStarted(true);
    questionStartTime.current = Date.now();
  };

  // Handle option selection
  const handleOptionSelect = (option: string) => {
    if (isChecking || gameState.isComplete) return;
    setSelectedAnswer(option);

    // Auto-check on selection for speed
    const secondsTaken = (Date.now() - questionStartTime.current) / 1000;
    const correct = option === currentQuestion.correctAnswer;
    const timeBonus = Math.max(0, Math.floor(5 - secondsTaken));
    const streakMultiplier = correct ? gameState.streak + 1 : 0;
    const points = correct ? (10 + timeBonus) * Math.max(1, streakMultiplier) : 0;

    setIsChecking(true);
    setIsCorrect(correct);

    const answer: AnswerRecord = {
      questionId: currentQuestion.id,
      userAnswer: option,
      isCorrect: correct,
      timeSpent: secondsTaken,
      points,
    };

    setGameState(prev => ({
      ...prev,
      score: prev.score + points,
      streak: correct ? prev.streak + 1 : 0,
      answers: [...prev.answers, answer],
      currentQuestion: prev.currentQuestion + 1,
    }));

    // Auto-advance after a brief delay
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setIsChecking(false);
        questionStartTime.current = Date.now();
      } else {
        // Ran out of questions
        endGame();
      }
    }, 800);
  };

  // Calculate results
  const correctCount = gameState.answers.filter(a => a.isCorrect).length;
  const totalAttempted = gameState.answers.length;

  // Pre-game start screen
  if (!gameStarted) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card variant="elevated">
          <CardContent className="pt-8 pb-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Timer className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2">
              {language === 'id' && 'Lomba Tashrif'}
              {language === 'ar' && 'سباق التصريف'}
              {language === 'en' && 'Conjugation Race'}
            </h2>
            <p className="text-muted mb-6">
              {language === 'id' && 'Jawab sebanyak mungkin soal tashrif dalam 60 detik! Jawab cepat untuk poin bonus.'}
              {language === 'ar' && 'أجب على أكبر عدد من أسئلة التصريف في 60 ثانية! أجب بسرعة للحصول على نقاط إضافية.'}
              {language === 'en' && 'Answer as many conjugation questions as you can in 60 seconds! Answer faster for bonus points.'}
            </p>
            <Button onClick={startGame} className="px-8">
              {language === 'id' && 'Mulai!'}
              {language === 'ar' && 'ابدأ!'}
              {language === 'en' && 'Start!'}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Game over screen
  if (gameState.isComplete) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card variant="elevated">
          <CardContent className="pt-8 pb-8 text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-2xl font-bold mb-2">
              {language === 'id' && 'Waktu Habis!'}
              {language === 'ar' && 'انتهى الوقت!'}
              {language === 'en' && 'Time\'s Up!'}
            </h2>
            <div className="my-6 space-y-3">
              <div className="text-4xl font-bold text-primary">
                {gameState.score}
              </div>
              <p className="text-sm text-muted">
                {language === 'id' && 'Poin Total'}
                {language === 'ar' && 'مجموع النقاط'}
                {language === 'en' && 'Total Points'}
              </p>
              <div className="flex justify-center gap-6 mt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">{correctCount}</div>
                  <p className="text-xs text-muted">
                    {language === 'id' && 'Benar'}
                    {language === 'ar' && 'صحيح'}
                    {language === 'en' && 'Correct'}
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-error">{totalAttempted - correctCount}</div>
                  <p className="text-xs text-muted">
                    {language === 'id' && 'Salah'}
                    {language === 'ar' && 'خطأ'}
                    {language === 'en' && 'Wrong'}
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{totalAttempted}</div>
                  <p className="text-xs text-muted">
                    {language === 'id' && 'Total Dijawab'}
                    {language === 'ar' && 'إجمالي الإجابات'}
                    {language === 'en' && 'Total Answered'}
                  </p>
                </div>
              </div>
              {totalAttempted > 0 && (
                <p className="text-sm text-muted mt-2">
                  {language === 'id' && `Akurasi: ${Math.round((correctCount / totalAttempted) * 100)}%`}
                  {language === 'ar' && `الدقة: ${Math.round((correctCount / totalAttempted) * 100)}%`}
                  {language === 'en' && `Accuracy: ${Math.round((correctCount / totalAttempted) * 100)}%`}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!currentQuestion) return null;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Timer and Score Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          {/* Timer */}
          <div className={cn(
            'flex items-center gap-2 text-lg font-bold',
            timeRemaining <= 10 ? 'text-error' : 'text-primary'
          )}>
            <Timer className="w-5 h-5" />
            <span>{formatTime(timeRemaining)}</span>
          </div>
          {/* Score and Streak */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">
              {language === 'id' && `Poin: ${gameState.score}`}
              {language === 'ar' && `النقاط: ${gameState.score}`}
              {language === 'en' && `Score: ${gameState.score}`}
            </span>
            {gameState.streak > 1 && (
              <motion.span
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                className="text-xs bg-secondary/20 text-secondary-dark px-2 py-1 rounded-full font-bold"
              >
                {gameState.streak}x
              </motion.span>
            )}
          </div>
        </div>
        <Progress
          value={GAME_DURATION - timeRemaining}
          max={GAME_DURATION}
          variant={timeRemaining <= 10 ? 'warning' : 'default'}
        />
      </div>

      {/* Stats Row */}
      <div className="flex items-center justify-between mb-4 text-sm text-muted">
        <span>
          {language === 'id' && `Dijawab: ${totalAttempted}`}
          {language === 'ar' && `الإجابات: ${totalAttempted}`}
          {language === 'en' && `Answered: ${totalAttempted}`}
        </span>
        <span>
          {language === 'id' && `Benar: ${correctCount}/${totalAttempted}`}
          {language === 'ar' && `صحيح: ${correctCount}/${totalAttempted}`}
          {language === 'en' && `Correct: ${correctCount}/${totalAttempted}`}
        </span>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.2 }}
        >
          <Card variant="elevated" className="mb-6">
            <CardContent className="pt-6">
              {/* Verb and Tense Info */}
              <div className="text-center mb-6">
                <p className="text-sm text-muted mb-1">
                  {language === 'id' && 'Tashrif-kan kata kerja:'}
                  {language === 'ar' && 'صرّف الفعل:'}
                  {language === 'en' && 'Conjugate the verb:'}
                </p>
                <p className="arabic-text text-3xl font-bold mb-2" dir="rtl">
                  {currentQuestion.verb}
                </p>
                <p className="text-sm text-muted mb-4">
                  {currentQuestion.meaning[language]}
                </p>

                {/* Target Pronoun and Tense */}
                <div className="flex items-center justify-center gap-4">
                  <div className="bg-primary/10 px-4 py-2 rounded-lg">
                    <p className="text-xs text-muted mb-0.5">
                      {language === 'id' && 'Dhamir'}
                      {language === 'ar' && 'الضمير'}
                      {language === 'en' && 'Pronoun'}
                    </p>
                    <p className="arabic-text text-xl font-bold text-primary" dir="rtl">
                      {currentQuestion.pronoun}
                    </p>
                    <p className="text-xs text-muted">
                      {currentQuestion.pronounLabel[language]}
                    </p>
                  </div>
                  <div className="bg-secondary/10 px-4 py-2 rounded-lg">
                    <p className="text-xs text-muted mb-0.5">
                      {language === 'id' && 'Waktu'}
                      {language === 'ar' && 'الزمن'}
                      {language === 'en' && 'Tense'}
                    </p>
                    <p className="text-lg font-bold text-secondary-dark">
                      {tenseLabels[currentQuestion.tense][language]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Options */}
              <div className="grid grid-cols-3 gap-3">
                {currentQuestion.options.map((option, index) => (
                  <motion.button
                    key={option}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleOptionSelect(option)}
                    disabled={isChecking}
                    className={cn(
                      'p-4 rounded-xl border-2 transition-all arabic-text text-xl',
                      !isChecking && selectedAnswer === option && 'border-primary bg-primary/10',
                      !isChecking && selectedAnswer !== option && 'border-zinc-200 hover:border-primary/50 bg-white',
                      isChecking && option === currentQuestion.correctAnswer && 'border-success bg-success/10 text-success',
                      isChecking && selectedAnswer === option && option !== currentQuestion.correctAnswer && 'border-error bg-error/10 text-error',
                      isChecking && 'cursor-default'
                    )}
                  >
                    {option}
                    {isChecking && option === currentQuestion.correctAnswer && (
                      <Check className="w-4 h-4 text-success mx-auto mt-1" />
                    )}
                    {isChecking && selectedAnswer === option && option !== currentQuestion.correctAnswer && (
                      <X className="w-4 h-4 text-error mx-auto mt-1" />
                    )}
                  </motion.button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
