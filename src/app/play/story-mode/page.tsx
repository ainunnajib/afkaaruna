'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { StoryMode, GameResults } from '@/components/games';
import { Button } from '@/components/ui';
import { stories as allStories } from '@/data/story-mode-questions';
import { shuffleArray } from '@/lib/utils';
import type { GameState } from '@/types';
import { ArrowLeft, Play } from 'lucide-react';
import Link from 'next/link';

type GamePhase = 'intro' | 'playing' | 'results';

export default function StoryModePage() {
  const { language, t } = useLanguage();
  const [phase, setPhase] = useState<GamePhase>('intro');
  const [selectedStories, setSelectedStories] = useState(() => shuffleArray(allStories).slice(0, 3));
  const [gameState, setGameState] = useState<GameState | null>(null);

  const startGame = () => {
    setSelectedStories(shuffleArray(allStories).slice(0, 3));
    setPhase('playing');
  };

  const handleComplete = (state: GameState) => {
    setGameState(state);
    setPhase('results');
  };

  const handleRetry = () => {
    setSelectedStories(shuffleArray(allStories).slice(0, 3));
    setGameState(null);
    setPhase('playing');
  };

  const gameTitle = {
    id: 'Mode Cerita',
    ar: 'وضع القصة',
    en: 'Story Mode',
  };

  const totalQuestions = selectedStories.reduce((sum, s) => sum + s.questions.length, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/play" className="inline-flex items-center text-muted hover:text-foreground mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        {t('button.back')}
      </Link>

      {phase === 'intro' && (
        <div className="max-w-md mx-auto text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">📖</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">{gameTitle[language]}</h1>
          <p className="text-muted mb-8">
            {language === 'id' && 'Baca cerita pendek dalam bahasa Arab, pelajari kosakata baru, lalu jawab pertanyaan tata bahasa.'}
            {language === 'ar' && 'اقرأ قصصاً قصيرة بالعربية، وتعلم مفردات جديدة، ثم أجب على أسئلة القواعد.'}
            {language === 'en' && 'Read short stories in Arabic, learn new vocabulary, then answer grammar questions.'}
          </p>

          <div className="bg-accent rounded-xl p-4 mb-8 text-left">
            <h3 className="font-semibold mb-2">
              {language === 'id' && 'Cara Bermain:'}
              {language === 'ar' && 'طريقة اللعب:'}
              {language === 'en' && 'How to Play:'}
            </h3>
            <ol className="text-sm text-muted space-y-2">
              <li>
                {language === 'id' && '1. Baca cerita dan terjemahannya'}
                {language === 'ar' && '1. اقرأ القصة وترجمتها'}
                {language === 'en' && '1. Read the story and its translation'}
              </li>
              <li>
                {language === 'id' && '2. Pelajari kosakata yang ditampilkan'}
                {language === 'ar' && '2. تعلم المفردات المعروضة'}
                {language === 'en' && '2. Study the displayed vocabulary'}
              </li>
              <li>
                {language === 'id' && '3. Jawab pertanyaan tata bahasa tentang cerita'}
                {language === 'ar' && '3. أجب على أسئلة القواعد عن القصة'}
                {language === 'en' && '3. Answer grammar questions about the story'}
              </li>
            </ol>
          </div>

          <div className="text-sm text-muted mb-6">
            <span className="inline-flex items-center gap-1">
              📖 3 {language === 'id' ? 'cerita' : language === 'ar' ? 'قصص' : 'stories'} • {totalQuestions} {language === 'id' ? 'soal' : language === 'ar' ? 'أسئلة' : 'questions'}
            </span>
          </div>

          <Button size="lg" onClick={startGame} className="w-full">
            <Play className="w-5 h-5 mr-2" />
            {t('game.start')}
          </Button>
        </div>
      )}

      {phase === 'playing' && (
        <StoryMode stories={selectedStories} onComplete={handleComplete} />
      )}

      {phase === 'results' && gameState && (
        <GameResults
          gameState={gameState}
          maxScore={totalQuestions * 10 * 5}
          onRetry={handleRetry}
          gameTitle={gameTitle[language]}
        />
      )}
    </div>
  );
}
