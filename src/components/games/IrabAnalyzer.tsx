'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { Button, Card, CardContent, Progress } from '@/components/ui';
import { cn } from '@/lib/utils';
import type { GameState, AnswerRecord } from '@/types';
import { IrabAnalyzerQuestion } from '@/data/irab-analyzer-questions';
import { Check, X, ArrowRight } from 'lucide-react';

interface IrabAnalyzerProps {
  questions: IrabAnalyzerQuestion[];
  onComplete: (state: GameState) => void;
}

export function IrabAnalyzer({ questions, onComplete }: IrabAnalyzerProps) {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [gameState, setGameState] = useState<GameState>({
    currentQuestion: 0,
    totalQuestions: questions.length,
    score: 0,
    streak: 0,
    answers: [],
    isComplete: false,
  });

  const currentQuestion = questions[currentIndex];
  const targetWord = currentQuestion?.words[currentQuestion.targetWordIndex];
  const sentenceWords = currentQuestion?.sentence.split(' ') || [];

  const handleOptionSelect = (option: string) => {
    if (isChecking) return;
    setSelectedAnswer(option);
  };

  const checkAnswer = useCallback(() => {
    if (!selectedAnswer || !currentQuestion) return;

    setIsChecking(true);
    const correct = selectedAnswer === currentQuestion.correctRole;
    setIsCorrect(correct);

    const points = correct ? 10 * (gameState.streak + 1) : 0;
    const newStreak = correct ? gameState.streak + 1 : 0;

    const answer: AnswerRecord = {
      questionId: currentQuestion.id,
      userAnswer: selectedAnswer,
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
  }, [selectedAnswer, currentQuestion, gameState.streak]);

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setIsChecking(false);
      setGameState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
      }));
    } else {
      const finalState: GameState = {
        ...gameState,
        currentQuestion: questions.length,
        isComplete: true,
      };
      setGameState(finalState);
      onComplete(finalState);
    }
  };

  if (!currentQuestion || !targetWord) return null;

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
                {gameState.streak}x
              </span>
            )}
          </div>
        </div>
        <Progress value={currentIndex + 1} max={questions.length} />
      </div>

      {/* Question Card */}
      <Card variant="elevated" className="mb-6">
        <CardContent className="pt-6">
          {/* Instruction */}
          <p className="text-center text-muted mb-6">
            {language === 'id' && 'Tentukan kedudukan i\'rab kata yang ditandai:'}
            {language === 'ar' && 'حدد إعراب الكلمة المميّزة:'}
            {language === 'en' && 'Identify the i\'rab role of the highlighted word:'}
          </p>

          {/* Sentence with highlighted target word */}
          <div className="bg-accent/50 rounded-xl p-6 mb-4">
            <p className="arabic-text text-2xl text-center leading-loose" dir="rtl">
              {sentenceWords.map((word, index) => (
                <span key={index}>
                  <span
                    className={cn(
                      'inline-block px-1 rounded transition-colors',
                      index === currentQuestion.targetWordIndex &&
                        'bg-primary/20 text-primary border-b-2 border-primary font-bold'
                    )}
                  >
                    {word}
                  </span>
                  {index < sentenceWords.length - 1 && ' '}
                </span>
              ))}
            </p>
          </div>

          {/* Translation */}
          <p className="text-center text-sm text-muted mb-6">
            {language === 'ar'
              ? currentQuestion.translation.en
              : currentQuestion.translation[language === 'id' ? 'id' : 'en']}
          </p>

          {/* Options */}
          <div className="mb-6">
            <p className="text-sm text-muted mb-3 text-center">
              {language === 'id' && 'Pilih kedudukan i\'rab yang tepat:'}
              {language === 'ar' && 'اختر الإعراب الصحيح:'}
              {language === 'en' && 'Choose the correct i\'rab role:'}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {currentQuestion.options.map((option, index) => (
                <motion.button
                  key={option}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleOptionSelect(option)}
                  disabled={isChecking}
                  className={cn(
                    'p-4 rounded-xl border-2 transition-all arabic-text text-lg',
                    !isChecking && selectedAnswer === option && 'border-primary bg-primary/10',
                    !isChecking && selectedAnswer !== option && 'border-zinc-200 hover:border-primary/50 bg-white',
                    isChecking && option === currentQuestion.correctRole && 'border-success bg-success/10 text-success',
                    isChecking && selectedAnswer === option && option !== currentQuestion.correctRole && 'border-error bg-error/10 text-error',
                    isChecking && 'cursor-default'
                  )}
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Feedback */}
          <AnimatePresence>
            {isCorrect !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={cn(
                  'p-4 rounded-xl mb-4',
                  isCorrect ? 'bg-success/10' : 'bg-error/10'
                )}
              >
                <div className="flex items-center gap-2 mb-2">
                  {isCorrect ? (
                    <>
                      <Check className="w-5 h-5 text-success" />
                      <span className="font-bold text-success">{t('game.correct')}</span>
                    </>
                  ) : (
                    <>
                      <X className="w-5 h-5 text-error" />
                      <span className="font-bold text-error">{t('game.incorrect')}</span>
                    </>
                  )}
                </div>

                {/* Correct role label */}
                <p className="text-sm font-medium mb-1">
                  {language === 'id' && `Jawaban: ${targetWord.roleLabel.id}`}
                  {language === 'ar' && `الإجابة: ${targetWord.roleLabel.ar}`}
                  {language === 'en' && `Answer: ${targetWord.roleLabel.en}`}
                </p>

                {/* Explanation */}
                <p className="text-sm text-muted">
                  {targetWord.explanation[language]}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actions */}
          <div className="flex gap-3">
            {!isChecking ? (
              <Button
                className="flex-1"
                onClick={checkAnswer}
                disabled={!selectedAnswer}
              >
                {t('button.check')}
              </Button>
            ) : (
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
