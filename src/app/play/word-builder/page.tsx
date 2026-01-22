'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { WordBuilder, GameResults } from '@/components/games';
import { Button } from '@/components/ui';
import { getRandomQuestions } from '@/data/shorof/word-builder-questions';
import type { GameState } from '@/types';
import { ArrowLeft, Play } from 'lucide-react';
import Link from 'next/link';

type GamePhase = 'intro' | 'playing' | 'results';

export default function WordBuilderPage() {
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
    id: 'Pembangun Kata',
    ar: 'بناء الكلمات',
    en: 'Word Builder',
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
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🧩</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">{gameTitle[language]}</h1>
          <p className="text-muted mb-8">
            {language === 'id' && 'Bangun kata dari akar huruf dan pola wazan. Susun huruf-huruf untuk membentuk kata yang benar.'}
            {language === 'ar' && 'ابنِ كلمات من جذور الحروف وأوزانها. رتّب الحروف لتكوين الكلمة الصحيحة.'}
            {language === 'en' && 'Build words from root letters and wazan patterns. Arrange the letters to form the correct word.'}
          </p>

          <div className="bg-accent rounded-xl p-4 mb-8 text-left">
            <h3 className="font-semibold mb-2">
              {language === 'id' && 'Cara Bermain:'}
              {language === 'ar' && 'طريقة اللعب:'}
              {language === 'en' && 'How to Play:'}
            </h3>
            <ol className="text-sm text-muted space-y-2">
              <li>
                {language === 'id' && '1. Lihat akar huruf dan pola yang diberikan'}
                {language === 'ar' && '1. انظر إلى جذر الحروف والوزن المعطى'}
                {language === 'en' && '1. Look at the root letters and pattern given'}
              </li>
              <li>
                {language === 'id' && '2. Ketuk huruf untuk menyusunnya'}
                {language === 'ar' && '2. اضغط على الحروف لترتيبها'}
                {language === 'en' && '2. Tap letters to arrange them'}
              </li>
              <li>
                {language === 'id' && '3. Periksa jawaban dan lanjutkan'}
                {language === 'ar' && '3. تحقق من إجابتك واستمر'}
                {language === 'en' && '3. Check your answer and continue'}
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
        <WordBuilder questions={questions} onComplete={handleComplete} />
      )}

      {phase === 'results' && gameState && (
        <GameResults
          gameState={gameState}
          maxScore={questions.length * 10 * 5} // max possible with streak
          onRetry={handleRetry}
          gameTitle={gameTitle[language]}
        />
      )}
    </div>
  );
}
