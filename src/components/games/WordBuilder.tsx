'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { Button, Card, CardContent, Progress, Stars } from '@/components/ui';
import { cn, calculateStars, shuffleArray } from '@/lib/utils';
import type { WordBuilderQuestion, GameState, AnswerRecord } from '@/types';
import { Check, X, Lightbulb, ArrowRight, RotateCcw } from 'lucide-react';

interface WordBuilderProps {
  questions: WordBuilderQuestion[];
  onComplete: (state: GameState) => void;
}

export function WordBuilder({ questions, onComplete }: WordBuilderProps) {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [availableLetters, setAvailableLetters] = useState<string[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [gameState, setGameState] = useState<GameState>({
    currentQuestion: 0,
    totalQuestions: questions.length,
    score: 0,
    streak: 0,
    answers: [],
    isComplete: false,
  });

  const currentQuestion = questions[currentIndex];

  // Initialize available letters when question changes
  useEffect(() => {
    if (currentQuestion) {
      // Create letters from root and add some extra letters for difficulty
      const extraLetters = ['ا', 'و', 'ي', 'م', 'ت', 'ن'];
      const allLetters = [...currentQuestion.rootLetters];

      // Add pattern-specific letters based on the pattern
      if (currentQuestion.pattern === 'فَاعِل') {
        allLetters.push('ا'); // alif for fa'il pattern
      } else if (currentQuestion.pattern === 'مَفْعُول') {
        allLetters.push('م', 'و'); // mim and waw for maf'ul pattern
      } else if (currentQuestion.pattern === 'مَفْعَل' || currentQuestion.pattern === 'مَفْعِل') {
        allLetters.push('م'); // mim for place noun pattern
      }

      // Add a couple random extra letters to make it challenging
      const randomExtras = shuffleArray(extraLetters).slice(0, 2);
      allLetters.push(...randomExtras);

      setAvailableLetters(shuffleArray(allLetters));
      setSelectedLetters([]);
      setIsCorrect(null);
      setIsChecking(false);
      setShowHint(false);
    }
  }, [currentQuestion, currentIndex]);

  const handleLetterClick = (letter: string, index: number) => {
    if (isChecking) return;

    setSelectedLetters([...selectedLetters, letter]);
    setAvailableLetters(availableLetters.filter((_, i) => i !== index));
  };

  const handleSelectedLetterClick = (letter: string, index: number) => {
    if (isChecking) return;

    setAvailableLetters([...availableLetters, letter]);
    setSelectedLetters(selectedLetters.filter((_, i) => i !== index));
  };

  const checkAnswer = useCallback(() => {
    setIsChecking(true);
    const userAnswer = selectedLetters.join('');
    // Remove diacritics for comparison
    const targetWithoutDiacritics = currentQuestion.targetWord.replace(/[\u064B-\u065F\u0670]/g, '');
    const correct = userAnswer === targetWithoutDiacritics;

    setIsCorrect(correct);

    const points = correct ? 10 * (gameState.streak + 1) : 0;
    const newStreak = correct ? gameState.streak + 1 : 0;

    const answer: AnswerRecord = {
      questionId: currentQuestion.id,
      userAnswer,
      isCorrect: correct,
      timeSpent: 0,
      points,
    };

    setGameState(prev => ({
      ...prev,
      score: prev.score + points,
      streak: newStreak,
      answers: [...prev.answers, answer],
    }));
  }, [selectedLetters, currentQuestion, gameState.streak]);

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setGameState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
      }));
    } else {
      // Game complete
      const finalState: GameState = {
        ...gameState,
        currentQuestion: questions.length,
        isComplete: true,
      };
      setGameState(finalState);
      onComplete(finalState);
    }
  };

  const resetCurrentQuestion = () => {
    setSelectedLetters([]);
    const extraLetters = ['ا', 'و', 'ي', 'م', 'ت', 'ن'];
    const allLetters = [...currentQuestion.rootLetters];

    if (currentQuestion.pattern === 'فَاعِل') {
      allLetters.push('ا');
    } else if (currentQuestion.pattern === 'مَفْعُول') {
      allLetters.push('م', 'و');
    } else if (currentQuestion.pattern === 'مَفْعَل' || currentQuestion.pattern === 'مَفْعِل') {
      allLetters.push('م');
    }

    const randomExtras = shuffleArray(extraLetters).slice(0, 2);
    allLetters.push(...randomExtras);

    setAvailableLetters(shuffleArray(allLetters));
    setIsCorrect(null);
    setIsChecking(false);
  };

  if (!currentQuestion) return null;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted">
            {language === 'id' && `Soal ${currentIndex + 1} dari ${questions.length}`}
            {language === 'ar' && `السؤال ${currentIndex + 1} من ${questions.length}`}
            {language === 'en' && `Question ${currentIndex + 1} of ${questions.length}`}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{t('game.score')}: {gameState.score}</span>
            {gameState.streak > 1 && (
              <span className="text-xs bg-secondary/20 text-secondary-dark px-2 py-1 rounded-full">
                🔥 {gameState.streak}x
              </span>
            )}
          </div>
        </div>
        <Progress value={currentIndex + 1} max={questions.length} />
      </div>

      {/* Question Card */}
      <Card variant="elevated" className="mb-6">
        <CardContent className="pt-6">
          {/* Root and Pattern */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="text-center">
                <p className="text-xs text-muted mb-1">
                  {language === 'id' && 'Akar'}
                  {language === 'ar' && 'الجذر'}
                  {language === 'en' && 'Root'}
                </p>
                <p className="arabic-text text-2xl text-primary font-bold">
                  {currentQuestion.root}
                </p>
              </div>
              <div className="text-2xl text-muted">+</div>
              <div className="text-center">
                <p className="text-xs text-muted mb-1">
                  {language === 'id' && 'Pola'}
                  {language === 'ar' && 'الوزن'}
                  {language === 'en' && 'Pattern'}
                </p>
                <p className="arabic-text text-2xl text-secondary font-bold">
                  {currentQuestion.pattern}
                </p>
              </div>
            </div>
            <p className="text-muted">
              {language === 'id' && 'Susun huruf untuk membentuk kata yang benar'}
              {language === 'ar' && 'رتّب الحروف لتكوين الكلمة الصحيحة'}
              {language === 'en' && 'Arrange letters to form the correct word'}
            </p>
          </div>

          {/* Selected Letters (Answer Area) */}
          <div className="min-h-[80px] bg-accent/50 rounded-xl p-4 mb-6 flex items-center justify-center">
            <div className="flex gap-2 flex-row-reverse">
              <AnimatePresence mode="popLayout">
                {selectedLetters.length === 0 ? (
                  <p className="text-muted text-sm">
                    {language === 'id' && 'Ketuk huruf di bawah'}
                    {language === 'ar' && 'اضغط على الحروف أدناه'}
                    {language === 'en' && 'Tap letters below'}
                  </p>
                ) : (
                  selectedLetters.map((letter, index) => (
                    <motion.button
                      key={`selected-${index}`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className={cn(
                        'w-12 h-12 rounded-xl text-2xl font-bold arabic-text flex items-center justify-center transition-colors',
                        isCorrect === null && 'bg-primary text-white hover:bg-primary-dark',
                        isCorrect === true && 'bg-success text-white',
                        isCorrect === false && 'bg-error text-white'
                      )}
                      onClick={() => !isChecking && handleSelectedLetterClick(letter, index)}
                      disabled={isChecking}
                    >
                      {letter}
                    </motion.button>
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Available Letters */}
          <div className="flex gap-2 flex-wrap justify-center mb-6">
            <AnimatePresence mode="popLayout">
              {availableLetters.map((letter, index) => (
                <motion.button
                  key={`available-${index}-${letter}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 text-2xl font-bold arabic-text flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-colors"
                  onClick={() => handleLetterClick(letter, index)}
                  disabled={isChecking}
                >
                  {letter}
                </motion.button>
              ))}
            </AnimatePresence>
          </div>

          {/* Hint */}
          {showHint && currentQuestion.hints && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-secondary/10 text-secondary-dark p-3 rounded-lg text-center text-sm mb-4"
            >
              💡 {currentQuestion.hints[language === 'ar' ? 1 : 0] || currentQuestion.hints[0]}
            </motion.div>
          )}

          {/* Feedback */}
          <AnimatePresence>
            {isCorrect !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={cn(
                  'p-4 rounded-xl text-center mb-4',
                  isCorrect ? 'bg-success/10 text-success' : 'bg-error/10 text-error'
                )}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  {isCorrect ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span className="font-bold">{t('game.correct')}</span>
                    </>
                  ) : (
                    <>
                      <X className="w-5 h-5" />
                      <span className="font-bold">{t('game.incorrect')}</span>
                    </>
                  )}
                </div>
                <p className="arabic-text text-xl">
                  {currentQuestion.targetWord}
                </p>
                <p className="text-sm mt-1 text-foreground/70">
                  {currentQuestion.meaning[language]}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actions */}
          <div className="flex gap-3">
            {!isChecking && (
              <>
                <Button
                  variant="ghost"
                  onClick={resetCurrentQuestion}
                  disabled={selectedLetters.length === 0}
                >
                  <RotateCcw className="w-4 h-4 mr-1" />
                  {language === 'id' && 'Ulang'}
                  {language === 'ar' && 'إعادة'}
                  {language === 'en' && 'Reset'}
                </Button>
                {!showHint && currentQuestion.hints && (
                  <Button
                    variant="ghost"
                    onClick={() => setShowHint(true)}
                  >
                    <Lightbulb className="w-4 h-4 mr-1" />
                    {t('button.hint')}
                  </Button>
                )}
                <Button
                  className="flex-1"
                  onClick={checkAnswer}
                  disabled={selectedLetters.length === 0}
                >
                  {t('button.check')}
                </Button>
              </>
            )}
            {isChecking && (
              <Button className="flex-1" onClick={nextQuestion}>
                {currentIndex < questions.length - 1 ? (
                  <>
                    {t('game.next')}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </>
                ) : (
                  t('game.finish')
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
