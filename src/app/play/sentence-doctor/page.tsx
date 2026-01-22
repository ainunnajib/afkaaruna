'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { SentenceDoctor, GameResults } from '@/components/games';
import { Button } from '@/components/ui';
import { getRandomQuestions } from '@/data/nahwu/sentence-doctor-questions';
import type { GameState } from '@/types';
import { ArrowLeft, Play } from 'lucide-react';
import Link from 'next/link';

type GamePhase = 'intro' | 'playing' | 'results';

export default function SentenceDoctorPage() {
  const { language, t } = useLanguage();
  const [phase, setPhase] = useState<GamePhase>('intro');
  const [questions, setQuestions] = useState(() => getRandomQuestions(10));
  const [gameState, setGameState] = useState<GameState | null>(null);

  const startGame = () => {
    setQuestions(getRandomQuestions(10));
    setPhase('playing');
  };

  const handleComplete = (state: GameState) => {
    setGameState(state);
    setPhase('results');
  };

  const handleRetry = () => {
    setQuestions(getRandomQuestions(10));
    setGameState(null);
    setPhase('playing');
  };

  const gameTitle = {
    id: 'Dokter Kalimat',
    ar: 'طبيب الجمل',
    en: 'Sentence Doctor',
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <Link href="/play" className="inline-flex items-center text-muted hover:text-foreground mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        {t('button.back')}
      </Link>

      {phase === 'intro' && (
        <div className="max-w-md mx-auto text-center">
          <div className="w-20 h-20 bg-error/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🩺</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">{gameTitle[language]}</h1>
          <p className="text-muted mb-8">
            {language === 'id' && 'Temukan dan perbaiki kesalahan i\'rab dalam kalimat Arab. Jadilah dokter kalimat yang handal!'}
            {language === 'ar' && 'اعثر على أخطاء الإعراب في الجمل العربية وصححها. كن طبيب جمل ماهر!'}
            {language === 'en' && 'Find and fix i\'rab errors in Arabic sentences. Become a skilled sentence doctor!'}
          </p>

          <div className="bg-accent rounded-xl p-4 mb-8 text-left">
            <h3 className="font-semibold mb-2">
              {language === 'id' && 'Cara Bermain:'}
              {language === 'ar' && 'طريقة اللعب:'}
              {language === 'en' && 'How to Play:'}
            </h3>
            <ol className="text-sm text-muted space-y-2">
              <li>
                {language === 'id' && '1. Perhatikan kata yang ditandai merah'}
                {language === 'ar' && '1. انتبه للكلمة المحددة باللون الأحمر'}
                {language === 'en' && '1. Notice the word highlighted in red'}
              </li>
              <li>
                {language === 'id' && '2. Pilih bentuk kata yang benar dari pilihan'}
                {language === 'ar' && '2. اختر الشكل الصحيح للكلمة من الخيارات'}
                {language === 'en' && '2. Choose the correct form from the options'}
              </li>
              <li>
                {language === 'id' && '3. Pelajari penjelasan untuk memahami aturannya'}
                {language === 'ar' && '3. اقرأ الشرح لفهم القاعدة'}
                {language === 'en' && '3. Read the explanation to understand the rule'}
              </li>
            </ol>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mb-6 text-left">
            <h3 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">
              {language === 'id' && 'Topik I\'rab:'}
              {language === 'ar' && 'موضوعات الإعراب:'}
              {language === 'en' && 'I\'rab Topics:'}
            </h3>
            <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
              <li>• {language === 'id' ? 'Mubtada-Khabar' : language === 'ar' ? 'المبتدأ والخبر' : 'Subject-Predicate'}</li>
              <li>• {language === 'id' ? 'Fa\'il dan Maf\'ul Bih' : language === 'ar' ? 'الفاعل والمفعول به' : 'Subject & Object of Verb'}</li>
              <li>• {language === 'id' ? 'Inna dan Kana' : language === 'ar' ? 'إنّ وكان' : 'Inna and Kana'}</li>
              <li>• {language === 'id' ? 'Idhafah dan Na\'t' : language === 'ar' ? 'الإضافة والنعت' : 'Possession & Adjectives'}</li>
            </ul>
          </div>

          <div className="text-sm text-muted mb-6">
            <span className="inline-flex items-center gap-1">
              📝 10 {language === 'id' ? 'soal' : language === 'ar' ? 'أسئلة' : 'questions'}
            </span>
          </div>

          <Button size="lg" onClick={startGame} className="w-full">
            <Play className="w-5 h-5 mr-2" />
            {t('game.start')}
          </Button>
        </div>
      )}

      {phase === 'playing' && (
        <SentenceDoctor questions={questions} onComplete={handleComplete} />
      )}

      {phase === 'results' && gameState && (
        <GameResults
          gameState={gameState}
          maxScore={questions.length * 10 * 5}
          onRetry={handleRetry}
          gameTitle={gameTitle[language]}
        />
      )}
    </div>
  );
}
