'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { GrammarMatch, GameResults } from '@/components/games';
import { Button } from '@/components/ui';
import { getRandomPairs } from '@/data/grammar-match-questions';
import type { GameState } from '@/types';
import { ArrowLeft, Play } from 'lucide-react';
import Link from 'next/link';

type GamePhase = 'intro' | 'playing' | 'results';

export default function GrammarMatchPage() {
  const { language, t } = useLanguage();
  const [phase, setPhase] = useState<GamePhase>('intro');
  const [pairs, setPairs] = useState(() => getRandomPairs(12));
  const [gameState, setGameState] = useState<GameState | null>(null);

  const startGame = () => {
    setPairs(getRandomPairs(12));
    setPhase('playing');
  };

  const handleComplete = (state: GameState) => {
    setGameState(state);
    setPhase('results');
  };

  const handleRetry = () => {
    setPairs(getRandomPairs(12));
    setGameState(null);
    setPhase('playing');
  };

  const gameTitle = {
    id: 'Cocokkan Tata Bahasa',
    ar: 'مطابقة القواعد',
    en: 'Grammar Match',
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
            <span className="text-4xl">🔗</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">{gameTitle[language]}</h1>
          <p className="text-muted mb-8">
            {language === 'id' && 'Cocokkan istilah tata bahasa Arab dengan definisinya. Pilih satu istilah dan satu definisi yang sesuai.'}
            {language === 'ar' && 'طابق المصطلحات النحوية بتعريفاتها. اختر مصطلحاً وتعريفاً متناسبين.'}
            {language === 'en' && 'Match Arabic grammar terms with their definitions. Select a term and its matching definition.'}
          </p>

          <div className="bg-accent rounded-xl p-4 mb-8 text-left">
            <h3 className="font-semibold mb-2">
              {language === 'id' && 'Cara Bermain:'}
              {language === 'ar' && 'طريقة اللعب:'}
              {language === 'en' && 'How to Play:'}
            </h3>
            <ol className="text-sm text-muted space-y-2">
              <li>
                {language === 'id' && '1. Klik istilah di kolom kiri'}
                {language === 'ar' && '1. انقر على المصطلح في العمود الأيسر'}
                {language === 'en' && '1. Click a term in the left column'}
              </li>
              <li>
                {language === 'id' && '2. Klik definisi yang cocok di kolom kanan'}
                {language === 'ar' && '2. انقر على التعريف المناسب في العمود الأيمن'}
                {language === 'en' && '2. Click the matching definition in the right column'}
              </li>
              <li>
                {language === 'id' && '3. Cocokkan semua pasangan untuk menyelesaikan babak'}
                {language === 'ar' && '3. طابق جميع الأزواج لإكمال الجولة'}
                {language === 'en' && '3. Match all pairs to complete the round'}
              </li>
            </ol>
          </div>

          <div className="text-sm text-muted mb-6">
            <span className="inline-flex items-center gap-1">
              🔗 12 {language === 'id' ? 'pasangan' : language === 'ar' ? 'زوج' : 'pairs'}
            </span>
          </div>

          <Button size="lg" onClick={startGame} className="w-full">
            <Play className="w-5 h-5 mr-2" />
            {t('game.start')}
          </Button>
        </div>
      )}

      {phase === 'playing' && (
        <GrammarMatch pairs={pairs} onComplete={handleComplete} />
      )}

      {phase === 'results' && gameState && (
        <GameResults
          gameState={gameState}
          maxScore={pairs.length * 10 * 5}
          onRetry={handleRetry}
          gameTitle={gameTitle[language]}
        />
      )}
    </div>
  );
}
