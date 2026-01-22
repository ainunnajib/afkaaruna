'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { Button, Card, CardContent, Progress } from '@/components/ui';
import { cn } from '@/lib/utils';
import type { SentenceDoctorQuestion, GameState, AnswerRecord } from '@/types';
import { Check, X, ArrowRight, Stethoscope } from 'lucide-react';

interface SentenceDoctorProps {
  questions: SentenceDoctorQuestion[];
  onComplete: (state: GameState) => void;
}

export function SentenceDoctor({ questions, onComplete }: SentenceDoctorProps) {
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

  // Split sentence into words for display
  const sentenceWords = currentQuestion.incorrectSentence.split(' ');
  const correctWord = currentQuestion.correctSentence.split(' ')[currentQuestion.errorPosition];

  const handleOptionSelect = (option: string) => {
    if (isChecking) return;
    setSelectedAnswer(option);
  };

  const checkAnswer = useCallback(() => {
    if (!selectedAnswer) return;

    setIsChecking(true);
    const correct = selectedAnswer === correctWord;
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
  }, [selectedAnswer, correctWord, currentQuestion, gameState.streak]);

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
          {/* Doctor Icon */}
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-error/10 rounded-full flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-error" />
            </div>
          </div>

          {/* Instruction */}
          <p className="text-center text-muted mb-6">
            {language === 'id' && 'Temukan dan perbaiki kesalahan i\'rab dalam kalimat:'}
            {language === 'ar' && 'اعثر على خطأ الإعراب في الجملة وصححه:'}
            {language === 'en' && 'Find and fix the i\'rab error in the sentence:'}
          </p>

          {/* Sentence with highlighted error */}
          <div className="bg-accent/50 rounded-xl p-6 mb-6">
            <p className="arabic-text text-2xl text-center leading-loose" dir="rtl">
              {sentenceWords.map((word, index) => (
                <span key={index}>
                  <span
                    className={cn(
                      'inline-block px-1 rounded transition-colors',
                      index === currentQuestion.errorPosition && 'bg-error/20 text-error border-b-2 border-error'
                    )}
                  >
                    {word}
                  </span>
                  {index < sentenceWords.length - 1 && ' '}
                </span>
              ))}
            </p>
          </div>

          {/* Options */}
          <div className="mb-6">
            <p className="text-sm text-muted mb-3 text-center">
              {language === 'id' && 'Pilih kata yang benar:'}
              {language === 'ar' && 'اختر الكلمة الصحيحة:'}
              {language === 'en' && 'Choose the correct word:'}
            </p>
            <div className="grid grid-cols-3 gap-3">
              {currentQuestion.options?.map((option, index) => (
                <motion.button
                  key={option}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleOptionSelect(option)}
                  disabled={isChecking}
                  className={cn(
                    'p-4 rounded-xl border-2 transition-all arabic-text text-xl',
                    !isChecking && selectedAnswer === option && 'border-primary bg-primary/10',
                    !isChecking && selectedAnswer !== option && 'border-zinc-200 hover:border-primary/50 bg-white',
                    isChecking && option === correctWord && 'border-success bg-success/10 text-success',
                    isChecking && selectedAnswer === option && option !== correctWord && 'border-error bg-error/10 text-error',
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

                {/* Correct sentence */}
                <p className="arabic-text text-lg text-center mb-2" dir="rtl">
                  {currentQuestion.correctSentence}
                </p>

                {/* Explanation */}
                <p className="text-sm text-muted">
                  {currentQuestion.explanation[language]}
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
