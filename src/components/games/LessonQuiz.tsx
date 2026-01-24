'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { Button, Card, CardContent } from '@/components/ui';
import { cn } from '@/lib/utils';
import type { LessonQuizQuestion } from '@/data/lesson-quiz-questions';
import { Check, X, ArrowRight, Brain } from 'lucide-react';

interface LessonQuizProps {
  questions: LessonQuizQuestion[];
}

export function LessonQuiz({ questions }: LessonQuizProps) {
  const { language } = useLanguage();
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  if (questions.length === 0) return null;

  const handleStart = () => setStarted(true);

  const handleSelect = (option: string) => {
    if (isChecking) return;
    setSelectedAnswer(option);
  };

  const handleCheck = () => {
    if (!selectedAnswer || !currentQuestion) return;
    setIsChecking(true);
    const correct = selectedAnswer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    if (correct) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setIsChecking(false);
      setIsCorrect(null);
    } else {
      setFinished(true);
    }
  };

  if (!started) {
    return (
      <Card variant="game" className="border-primary/30">
        <CardContent className="pt-6 text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <Brain className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-bold text-lg mb-1">
            {language === 'id' && 'Kuis Singkat'}
            {language === 'ar' && 'اختبار سريع'}
            {language === 'en' && 'Quick Quiz'}
          </h3>
          <p className="text-sm text-muted mb-4">
            {language === 'id' && `${questions.length} soal untuk menguji pemahaman materi ini`}
            {language === 'ar' && `${questions.length} أسئلة لاختبار فهم هذا الدرس`}
            {language === 'en' && `${questions.length} questions to test your understanding`}
          </p>
          <Button onClick={handleStart} className="w-full">
            {language === 'id' && 'Mulai Kuis'}
            {language === 'ar' && 'ابدأ الاختبار'}
            {language === 'en' && 'Start Quiz'}
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <Card variant="game" className="border-primary/30">
        <CardContent className="pt-6 text-center">
          <div className={cn(
            'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3',
            percentage >= 70 ? 'bg-success/10' : 'bg-secondary/10'
          )}>
            <span className="text-2xl font-bold">
              {score}/{questions.length}
            </span>
          </div>
          <h3 className="font-bold text-lg mb-1">
            {percentage >= 70 ? (
              <>
                {language === 'id' && 'Bagus!'}
                {language === 'ar' && 'أحسنت!'}
                {language === 'en' && 'Well Done!'}
              </>
            ) : (
              <>
                {language === 'id' && 'Terus Belajar!'}
                {language === 'ar' && 'واصل التعلم!'}
                {language === 'en' && 'Keep Learning!'}
              </>
            )}
          </h3>
          <p className="text-sm text-muted mb-4">
            {language === 'id' && `Akurasi: ${percentage}%`}
            {language === 'ar' && `الدقة: ${percentage}%`}
            {language === 'en' && `Accuracy: ${percentage}%`}
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setStarted(false);
              setCurrentIndex(0);
              setScore(0);
              setFinished(false);
              setSelectedAnswer(null);
              setIsChecking(false);
              setIsCorrect(null);
            }}
            className="w-full"
          >
            {language === 'id' && 'Ulangi Kuis'}
            {language === 'ar' && 'أعد الاختبار'}
            {language === 'en' && 'Retry Quiz'}
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (!currentQuestion) return null;

  return (
    <Card variant="game" className="border-primary/30">
      <CardContent className="pt-6">
        {/* Question counter */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-muted">
            {currentIndex + 1}/{questions.length}
          </span>
          <span className="text-xs font-medium text-primary">
            {score} ✓
          </span>
        </div>

        {/* Question */}
        <p className="font-medium mb-4 text-sm">
          {currentQuestion.question[language]}
        </p>

        {/* Options */}
        <div className="space-y-2 mb-4">
          {currentQuestion.options.map((option, index) => (
            <motion.button
              key={option}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleSelect(option)}
              disabled={isChecking}
              className={cn(
                'w-full p-3 rounded-lg border text-left text-sm transition-all arabic-text',
                !isChecking && selectedAnswer === option && 'border-primary bg-primary/10',
                !isChecking && selectedAnswer !== option && 'border-zinc-200 hover:border-primary/50',
                isChecking && option === currentQuestion.correctAnswer && 'border-success bg-success/10',
                isChecking && selectedAnswer === option && option !== currentQuestion.correctAnswer && 'border-error bg-error/10',
                isChecking && 'cursor-default'
              )}
            >
              {option}
            </motion.button>
          ))}
        </div>

        {/* Feedback */}
        <AnimatePresence>
          {isCorrect !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={cn(
                'p-3 rounded-lg mb-4 text-sm',
                isCorrect ? 'bg-success/10' : 'bg-error/10'
              )}
            >
              <div className="flex items-center gap-1 mb-1">
                {isCorrect ? (
                  <Check className="w-4 h-4 text-success" />
                ) : (
                  <X className="w-4 h-4 text-error" />
                )}
                <span className={cn('font-medium text-xs', isCorrect ? 'text-success' : 'text-error')}>
                  {isCorrect ? (language === 'id' ? 'Benar!' : language === 'ar' ? 'صحيح!' : 'Correct!') : (language === 'id' ? 'Salah' : language === 'ar' ? 'خطأ' : 'Wrong')}
                </span>
              </div>
              <p className="text-xs text-muted">
                {currentQuestion.explanation[language]}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action */}
        {!isChecking ? (
          <Button
            size="sm"
            className="w-full"
            onClick={handleCheck}
            disabled={!selectedAnswer}
          >
            {language === 'id' && 'Periksa'}
            {language === 'ar' && 'تحقق'}
            {language === 'en' && 'Check'}
          </Button>
        ) : (
          <Button size="sm" className="w-full" onClick={handleNext}>
            {currentIndex < questions.length - 1 ? (
              <>
                {language === 'id' && 'Selanjutnya'}
                {language === 'ar' && 'التالي'}
                {language === 'en' && 'Next'}
                <ArrowRight className="w-3 h-3 ml-1" />
              </>
            ) : (
              <>
                {language === 'id' && 'Lihat Hasil'}
                {language === 'ar' && 'عرض النتائج'}
                {language === 'en' && 'See Results'}
              </>
            )}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
