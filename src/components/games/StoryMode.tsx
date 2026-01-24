'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { Button, Card, CardContent, Progress } from '@/components/ui';
import { cn } from '@/lib/utils';
import type { GameState, AnswerRecord } from '@/types';
import type { Story } from '@/data/story-mode-questions';
import { BookOpen, Check, X, ArrowRight } from 'lucide-react';

interface StoryModeProps {
  stories: Story[];
  onComplete: (state: GameState) => void;
}

type Phase = 'reading' | 'quiz';

const difficultyColors: Record<string, string> = {
  easy: 'bg-success/20 text-success',
  medium: 'bg-secondary/20 text-secondary-dark',
  hard: 'bg-error/20 text-error',
};

const difficultyLabels: Record<string, { id: string; ar: string; en: string }> = {
  easy: { id: 'Mudah', ar: 'سهل', en: 'Easy' },
  medium: { id: 'Sedang', ar: 'متوسط', en: 'Medium' },
  hard: { id: 'Sulit', ar: 'صعب', en: 'Hard' },
};

export function StoryMode({ stories, onComplete }: StoryModeProps) {
  const { language, t } = useLanguage();
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('reading');
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Calculate total questions across all stories
  const totalQuestions = stories.reduce((sum, s) => sum + s.questions.length, 0);

  const [gameState, setGameState] = useState<GameState>({
    currentQuestion: 0,
    totalQuestions,
    score: 0,
    streak: 0,
    answers: [],
    isComplete: false,
  });

  const currentStory = stories[currentStoryIndex];
  const currentQuestion = currentStory?.questions[currentQuestionIndex];

  // Calculate which overall question number we are on
  const overallQuestionIndex = stories
    .slice(0, currentStoryIndex)
    .reduce((sum, s) => sum + s.questions.length, 0) + currentQuestionIndex;

  const handleStartQuiz = () => {
    setPhase('quiz');
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsChecking(false);
    setIsCorrect(null);
  };

  const handleOptionSelect = (option: string) => {
    if (isChecking) return;
    setSelectedAnswer(option);
  };

  const checkAnswer = useCallback(() => {
    if (!selectedAnswer || !currentQuestion) return;

    setIsChecking(true);
    const correct = selectedAnswer === currentQuestion.correctAnswer;
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
      currentQuestion: overallQuestionIndex + 1,
    }));
  }, [selectedAnswer, currentQuestion, gameState.streak, overallQuestionIndex]);

  const nextQuestion = () => {
    if (currentQuestionIndex < currentStory.questions.length - 1) {
      // Move to next question in current story
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setIsChecking(false);
    } else if (currentStoryIndex < stories.length - 1) {
      // Move to next story
      setCurrentStoryIndex(currentStoryIndex + 1);
      setCurrentQuestionIndex(0);
      setPhase('reading');
      setSelectedAnswer(null);
      setIsCorrect(null);
      setIsChecking(false);
    } else {
      // Game complete
      const finalState: GameState = {
        ...gameState,
        currentQuestion: totalQuestions,
        isComplete: true,
      };
      setGameState(finalState);
      onComplete(finalState);
    }
  };

  const isLastQuestion =
    currentStoryIndex === stories.length - 1 &&
    currentQuestionIndex === currentStory.questions.length - 1;

  const isLastQuestionInStory =
    currentQuestionIndex === currentStory.questions.length - 1;

  if (!currentStory) return null;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted">
            {language === 'id' && `Cerita ${currentStoryIndex + 1} dari ${stories.length}`}
            {language === 'ar' && `القصة ${currentStoryIndex + 1} من ${stories.length}`}
            {language === 'en' && `Story ${currentStoryIndex + 1} of ${stories.length}`}
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
        <Progress value={overallQuestionIndex + (phase === 'quiz' ? 1 : 0)} max={totalQuestions} />
      </div>

      <AnimatePresence mode="wait">
        {phase === 'reading' ? (
          <motion.div
            key={`reading-${currentStory.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {/* Story Card */}
            <Card variant="elevated" className="mb-6">
              <CardContent className="pt-6">
                {/* Title and Difficulty */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-lg font-bold">
                      {currentStory.title[language]}
                    </h2>
                  </div>
                  <span className={cn(
                    'text-xs px-2 py-1 rounded-full font-medium',
                    difficultyColors[currentStory.difficulty]
                  )}>
                    {difficultyLabels[currentStory.difficulty][language]}
                  </span>
                </div>

                {/* Arabic Text */}
                <div className="bg-accent/50 rounded-xl p-6 mb-4">
                  <p className="arabic-text text-xl leading-[2.5] text-center" dir="rtl">
                    {currentStory.text}
                  </p>
                </div>

                {/* Translation */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-muted mb-1">
                    {language === 'id' && 'Terjemahan:'}
                    {language === 'ar' && 'الترجمة:'}
                    {language === 'en' && 'Translation:'}
                  </p>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {language === 'ar'
                      ? currentStory.translation.en
                      : currentStory.translation[language === 'id' ? 'id' : 'en']}
                  </p>
                </div>

                {/* Vocabulary */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-muted mb-2">
                    {language === 'id' && 'Kosakata:'}
                    {language === 'ar' && 'المفردات:'}
                    {language === 'en' && 'Vocabulary:'}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {currentStory.vocabulary.map((vocab, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-2"
                      >
                        <span className="arabic-text text-base font-bold text-primary">
                          {vocab.word}
                        </span>
                        <span className="text-xs text-muted">
                          {vocab.meaning[language === 'ar' ? 'en' : (language as 'id' | 'en')]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Start Quiz Button */}
                <Button className="w-full" onClick={handleStartQuiz}>
                  {language === 'id' && 'Mulai Kuis'}
                  {language === 'ar' && 'ابدأ الاختبار'}
                  {language === 'en' && 'Start Quiz'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            key={`quiz-${currentStory.id}-${currentQuestionIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {/* Quiz Card */}
            <Card variant="elevated" className="mb-6">
              <CardContent className="pt-6">
                {/* Question Counter within story */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-muted">
                    {language === 'id' && `Soal ${currentQuestionIndex + 1} dari ${currentStory.questions.length}`}
                    {language === 'ar' && `السؤال ${currentQuestionIndex + 1} من ${currentStory.questions.length}`}
                    {language === 'en' && `Question ${currentQuestionIndex + 1} of ${currentStory.questions.length}`}
                  </span>
                  <span className={cn(
                    'text-xs px-2 py-1 rounded-full font-medium',
                    difficultyColors[currentStory.difficulty]
                  )}>
                    {currentStory.title[language]}
                  </span>
                </div>

                {/* Question */}
                {currentQuestion && (
                  <>
                    <div className="bg-accent/50 rounded-xl p-4 mb-6">
                      <p className="arabic-text text-lg text-center leading-loose" dir="rtl">
                        {currentQuestion.question.ar}
                      </p>
                      {language !== 'ar' && (
                        <p className="text-sm text-muted text-center mt-2">
                          {currentQuestion.question[language]}
                        </p>
                      )}
                    </div>

                    {/* Options */}
                    <div className="space-y-3 mb-6">
                      {currentQuestion.options.map((option, index) => (
                        <motion.button
                          key={option}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => handleOptionSelect(option)}
                          disabled={isChecking}
                          className={cn(
                            'w-full p-4 rounded-xl border-2 transition-all arabic-text text-lg text-right',
                            !isChecking && selectedAnswer === option && 'border-primary bg-primary/10',
                            !isChecking && selectedAnswer !== option && 'border-zinc-200 hover:border-primary/50 bg-white dark:bg-zinc-800 dark:border-zinc-700',
                            isChecking && option === currentQuestion.correctAnswer && 'border-success bg-success/10',
                            isChecking && selectedAnswer === option && option !== currentQuestion.correctAnswer && 'border-error bg-error/10',
                            isChecking && 'cursor-default'
                          )}
                          dir="rtl"
                        >
                          <div className="flex items-center gap-3">
                            <span className={cn(
                              'w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0',
                              !isChecking && selectedAnswer === option && 'bg-primary text-white',
                              !isChecking && selectedAnswer !== option && 'bg-zinc-200 dark:bg-zinc-600 text-zinc-600 dark:text-zinc-300',
                              isChecking && option === currentQuestion.correctAnswer && 'bg-success text-white',
                              isChecking && selectedAnswer === option && option !== currentQuestion.correctAnswer && 'bg-error text-white',
                            )}>
                              {isChecking && option === currentQuestion.correctAnswer ? (
                                <Check className="w-3 h-3" />
                              ) : isChecking && selectedAnswer === option && option !== currentQuestion.correctAnswer ? (
                                <X className="w-3 h-3" />
                              ) : (
                                String.fromCharCode(1571 + index) // Arabic letters alif, ba, etc. as labels
                              )}
                            </span>
                            <span>{option}</span>
                          </div>
                        </motion.button>
                      ))}
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
                          {/* Explanation */}
                          <p className="text-sm text-foreground/80">
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
                          {isLastQuestion ? (
                            t('game.finish')
                          ) : isLastQuestionInStory ? (
                            <>
                              {language === 'id' && 'Cerita Berikutnya'}
                              {language === 'ar' && 'القصة التالية'}
                              {language === 'en' && 'Next Story'}
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </>
                          ) : (
                            <>
                              {t('game.next')}
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
