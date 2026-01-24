'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Stars } from '@/components/ui';
import { Puzzle, Stethoscope, Link2, BookText, Timer, GitBranch } from 'lucide-react';

interface GameCard {
  id: string;
  href: string;
  icon: React.ElementType;
  title: { id: string; ar: string; en: string };
  description: { id: string; ar: string; en: string };
  category: 'shorof' | 'nahwu';
  difficulty: 1 | 2 | 3;
  available: boolean;
}

const games: GameCard[] = [
  {
    id: 'word-builder',
    href: '/play/word-builder',
    icon: Puzzle,
    title: {
      id: 'Pembangun Kata',
      ar: 'بناء الكلمات',
      en: 'Word Builder',
    },
    description: {
      id: 'Bangun kata dari akar huruf dan pola wazan',
      ar: 'ابنِ كلمات من جذور الحروف وأوزانها',
      en: 'Build words from root letters and wazan patterns',
    },
    category: 'shorof',
    difficulty: 1,
    available: true,
  },
  {
    id: 'sentence-doctor',
    href: '/play/sentence-doctor',
    icon: Stethoscope,
    title: {
      id: 'Dokter Kalimat',
      ar: 'طبيب الجمل',
      en: 'Sentence Doctor',
    },
    description: {
      id: 'Temukan dan perbaiki kesalahan i\'rab dalam kalimat',
      ar: 'اعثر على أخطاء الإعراب في الجمل وصححها',
      en: 'Find and fix i\'rab errors in sentences',
    },
    category: 'nahwu',
    difficulty: 2,
    available: true,
  },
  {
    id: 'grammar-match',
    href: '/play/grammar-match',
    icon: Link2,
    title: {
      id: 'Cocokkan Tata Bahasa',
      ar: 'مطابقة القواعد',
      en: 'Grammar Match',
    },
    description: {
      id: 'Cocokkan kata dengan peran tata bahasanya',
      ar: 'طابق الكلمات مع أدوارها النحوية',
      en: 'Match words with their grammatical roles',
    },
    category: 'nahwu',
    difficulty: 2,
    available: true,
  },
  {
    id: 'story-mode',
    href: '/play/story-mode',
    icon: BookText,
    title: {
      id: 'Mode Cerita',
      ar: 'وضع القصة',
      en: 'Story Mode',
    },
    description: {
      id: 'Baca cerita dan jawab pertanyaan tata bahasa',
      ar: 'اقرأ القصص وأجب على أسئلة القواعد',
      en: 'Read stories and answer grammar questions',
    },
    category: 'nahwu',
    difficulty: 3,
    available: true,
  },
  {
    id: 'conjugation-race',
    href: '/play/conjugation-race',
    icon: Timer,
    title: {
      id: 'Lomba Tashrif',
      ar: 'سباق التصريف',
      en: 'Conjugation Race',
    },
    description: {
      id: 'Tashrif kata kerja secepat mungkin',
      ar: 'صرّف الأفعال بأسرع ما يمكن',
      en: 'Conjugate verbs as fast as possible',
    },
    category: 'shorof',
    difficulty: 2,
    available: true,
  },
  {
    id: 'irab-analyzer',
    href: '/play/irab-analyzer',
    icon: GitBranch,
    title: {
      id: 'Pengurai I\'rab',
      ar: 'محلل الإعراب',
      en: 'I\'rab Analyzer',
    },
    description: {
      id: 'Urai komponen kalimat dan perannya',
      ar: 'حلل مكونات الجملة وأدوارها',
      en: 'Break down sentence components and their roles',
    },
    category: 'nahwu',
    difficulty: 3,
    available: true,
  },
];

export default function PlayPage() {
  const { language, t } = useLanguage();

  const categoryLabels = {
    nahwu: { id: 'Nahwu', ar: 'النحو', en: 'Nahwu' },
    shorof: { id: 'Shorof', ar: 'الصرف', en: 'Shorof' },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('nav.play')}</h1>
          <p className="text-muted">
            {language === 'id' && 'Pilih permainan untuk mulai belajar'}
            {language === 'ar' && 'اختر لعبة لبدء التعلم'}
            {language === 'en' && 'Choose a game to start learning'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {games.map((game) => {
            const Icon = game.icon;
            return (
              <Card
                key={game.id}
                variant="game"
                className={!game.available ? 'opacity-60' : ''}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        game.category === 'nahwu'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {categoryLabels[game.category][language]}
                      </span>
                      <Stars count={game.difficulty as 1 | 2 | 3} size="sm" />
                    </div>
                  </div>
                  <CardTitle className="mt-4">{game.title[language]}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{game.description[language]}</CardDescription>
                </CardContent>
                <CardFooter>
                  {game.available ? (
                    <Link href={game.href} className="w-full">
                      <Button className="w-full">{t('game.start')}</Button>
                    </Link>
                  ) : (
                    <Button className="w-full" disabled>
                      {language === 'id' && 'Segera Hadir'}
                      {language === 'ar' && 'قريباً'}
                      {language === 'en' && 'Coming Soon'}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
