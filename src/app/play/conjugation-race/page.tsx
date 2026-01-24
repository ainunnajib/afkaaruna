'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { ConjugationRace, GameResults } from '@/components/games';
import { Button } from '@/components/ui';
import { getRandomConjugations } from '@/data/conjugation-questions';
import type { GameState } from '@/types';
import { ArrowLeft, Play } from 'lucide-react';
import Link from 'next/link';

type GamePhase = 'intro' | 'playing' | 'results';

export default function ConjugationRacePage() {
  const { language, t } = useLanguage();
  const [phase, setPhase] = useState<GamePhase>('intro');
  const [questions, setQuestions] = useState(() => getRandomConjugations(20));
  const [gameState, setGameState] = useState<GameState | null>(null);

  const startGame = () => {
    setQuestions(getRandomConjugations(20));
    setPhase('playing');
  };

  const handleComplete = (state: GameState) => {
    setGameState(state);
    setPhase('results');
  };

  const handleRetry = () => {
    setQuestions(getRandomConjugations(20));
    setGameState(null);
    setPhase('playing');
  };

  const gameTitle = {
    id: 'Lomba Tashrif',
    ar: 'سباق التصريف',
    en: 'Conjugation Race',
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
            <span className="text-4xl">⏱️</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">{gameTitle[language]}</h1>
          <p className="text-muted mb-8">
            {language === 'id' && 'Jawab soal tashrif sebanyak mungkin dalam 60 detik! Jawab cepat untuk mendapatkan poin bonus.'}
            {language === 'ar' && 'أجب على أكبر عدد من أسئلة التصريف في 60 ثانية! أجب بسرعة للحصول على نقاط إضافية.'}
            {language === 'en' && 'Answer as many conjugation questions as you can in 60 seconds! Answer faster for bonus points.'}
          </p>

          <div className="bg-accent rounded-xl p-4 mb-8 text-left">
            <h3 className="font-semibold mb-2">
              {language === 'id' && 'Cara Bermain:'}
              {language === 'ar' && 'طريقة اللعب:'}
              {language === 'en' && 'How to Play:'}
            </h3>
            <ol className="text-sm text-muted space-y-2">
              <li>
                {language === 'id' && '1. Lihat kata kerja, dhamir, dan waktu yang diminta'}
                {language === 'ar' && '1. انظر إلى الفعل والضمير والزمن المطلوب'}
                {language === 'en' && '1. See the verb, pronoun, and tense requested'}
              </li>
              <li>
                {language === 'id' && '2. Pilih bentuk tashrif yang benar'}
                {language === 'ar' && '2. اختر التصريف الصحيح'}
                {language === 'en' && '2. Choose the correct conjugation form'}
              </li>
              <li>
                {language === 'id' && '3. Jawab cepat untuk poin bonus!'}
                {language === 'ar' && '3. أجب بسرعة لنقاط إضافية!'}
                {language === 'en' && '3. Answer quickly for bonus points!'}
              </li>
            </ol>
          </div>

          <div className="text-sm text-muted mb-6">
            <span className="inline-flex items-center gap-1">
              ⏱️ 60 {language === 'id' ? 'detik' : language === 'ar' ? 'ثانية' : 'seconds'}
            </span>
          </div>

          <Button size="lg" onClick={startGame} className="w-full">
            <Play className="w-5 h-5 mr-2" />
            {t('game.start')}
          </Button>
        </div>
      )}

      {phase === 'playing' && (
        <ConjugationRace questions={questions} onComplete={handleComplete} />
      )}

      {phase === 'results' && gameState && (
        <GameResults
          gameState={gameState}
          maxScore={questions.length * 15 * 5}
          onRetry={handleRetry}
          gameTitle={gameTitle[language]}
        />
      )}
    </div>
  );
}
