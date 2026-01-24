'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { IrabAnalyzer, GameResults } from '@/components/games';
import { Button } from '@/components/ui';
import { getRandomIrabQuestions } from '@/data/irab-analyzer-questions';
import type { GameState } from '@/types';
import { ArrowLeft, Play } from 'lucide-react';
import Link from 'next/link';

type GamePhase = 'intro' | 'playing' | 'results';

export default function IrabAnalyzerPage() {
  const { language, t } = useLanguage();
  const [phase, setPhase] = useState<GamePhase>('intro');
  const [questions, setQuestions] = useState(() => getRandomIrabQuestions(10));
  const [gameState, setGameState] = useState<GameState | null>(null);

  const startGame = () => {
    setQuestions(getRandomIrabQuestions(10));
    setPhase('playing');
  };

  const handleComplete = (state: GameState) => {
    setGameState(state);
    setPhase('results');
  };

  const handleRetry = () => {
    setQuestions(getRandomIrabQuestions(10));
    setGameState(null);
    setPhase('playing');
  };

  const gameTitle = {
    id: 'Pengurai I\'rab',
    ar: 'محلل الإعراب',
    en: 'I\'rab Analyzer',
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/play" className="inline-flex items-center text-muted hover:text-foreground mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        {t('button.back')}
      </Link>

      {phase === 'intro' && (
        <div className="max-w-md mx-auto text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🔍</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">{gameTitle[language]}</h1>
          <p className="text-muted mb-8">
            {language === 'id' && 'Tentukan kedudukan i\'rab setiap kata dalam kalimat. Pahami peran gramatikal setiap komponen.'}
            {language === 'ar' && 'حدد إعراب كل كلمة في الجملة. افهم الدور النحوي لكل مكون.'}
            {language === 'en' && 'Identify the i\'rab role of each word in the sentence. Understand the grammatical role of each component.'}
          </p>

          <div className="bg-accent rounded-xl p-4 mb-8 text-left">
            <h3 className="font-semibold mb-2">
              {language === 'id' && 'Cara Bermain:'}
              {language === 'ar' && 'طريقة اللعب:'}
              {language === 'en' && 'How to Play:'}
            </h3>
            <ol className="text-sm text-muted space-y-2">
              <li>
                {language === 'id' && '1. Baca kalimat dan perhatikan kata yang ditandai'}
                {language === 'ar' && '1. اقرأ الجملة ولاحظ الكلمة المميزة'}
                {language === 'en' && '1. Read the sentence and notice the highlighted word'}
              </li>
              <li>
                {language === 'id' && '2. Pilih kedudukan i\'rab yang tepat'}
                {language === 'ar' && '2. اختر الإعراب الصحيح'}
                {language === 'en' && '2. Choose the correct i\'rab role'}
              </li>
              <li>
                {language === 'id' && '3. Pelajari penjelasan untuk setiap jawaban'}
                {language === 'ar' && '3. تعلم الشرح لكل إجابة'}
                {language === 'en' && '3. Learn the explanation for each answer'}
              </li>
            </ol>
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
        <IrabAnalyzer questions={questions} onComplete={handleComplete} />
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
