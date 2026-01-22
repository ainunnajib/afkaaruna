'use client';

import { useLanguage } from '@/lib/hooks/useLanguage';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Progress, Stars } from '@/components/ui';
import { BookOpen, ChevronRight, Lock } from 'lucide-react';
import Link from 'next/link';

interface TopicItem {
  id: string;
  title: { id: string; ar: string; en: string };
  description: { id: string; ar: string; en: string };
  progress: number;
  locked: boolean;
}

const nahwuTopics: TopicItem[] = [
  {
    id: 'mubtada-khabar',
    title: { id: 'Mubtada & Khabar', ar: 'المبتدأ والخبر', en: 'Subject & Predicate' },
    description: { id: 'Jumlah ismiyyah dasar', ar: 'الجملة الاسمية الأساسية', en: 'Basic nominal sentence' },
    progress: 0,
    locked: false,
  },
  {
    id: 'fiil-fail',
    title: { id: 'Fi\'il & Fa\'il', ar: 'الفعل والفاعل', en: 'Verb & Subject' },
    description: { id: 'Jumlah fi\'liyyah dasar', ar: 'الجملة الفعلية الأساسية', en: 'Basic verbal sentence' },
    progress: 0,
    locked: false,
  },
  {
    id: 'maful-bih',
    title: { id: 'Maf\'ul Bih', ar: 'المفعول به', en: 'Direct Object' },
    description: { id: 'Objek langsung dalam kalimat', ar: 'المفعول المباشر في الجملة', en: 'Direct object in sentence' },
    progress: 0,
    locked: false,
  },
  {
    id: 'huruf-jar',
    title: { id: 'Huruf Jar', ar: 'حروف الجر', en: 'Prepositions' },
    description: { id: 'Kata depan dan pengaruhnya', ar: 'حروف الجر وتأثيرها', en: 'Prepositions and their effects' },
    progress: 0,
    locked: true,
  },
  {
    id: 'inna-akhawat',
    title: { id: 'Inna & Saudaranya', ar: 'إنّ وأخواتها', en: 'Inna & Sisters' },
    description: { id: 'Huruf yang menashobkan mubtada', ar: 'الحروف الناسخة للمبتدأ', en: 'Particles affecting subject' },
    progress: 0,
    locked: true,
  },
];

const shorofTopics: TopicItem[] = [
  {
    id: 'akar-kata',
    title: { id: 'Akar Kata', ar: 'جذور الكلمات', en: 'Word Roots' },
    description: { id: 'Memahami huruf asli', ar: 'فهم الحروف الأصلية', en: 'Understanding root letters' },
    progress: 0,
    locked: false,
  },
  {
    id: 'wazan-fail',
    title: { id: 'Wazan Fa\'il', ar: 'وزن فاعل', en: 'Fa\'il Pattern' },
    description: { id: 'Pola isim fa\'il', ar: 'صيغة اسم الفاعل', en: 'Active participle pattern' },
    progress: 0,
    locked: false,
  },
  {
    id: 'wazan-maful',
    title: { id: 'Wazan Maf\'ul', ar: 'وزن مفعول', en: 'Maf\'ul Pattern' },
    description: { id: 'Pola isim maf\'ul', ar: 'صيغة اسم المفعول', en: 'Passive participle pattern' },
    progress: 0,
    locked: false,
  },
  {
    id: 'isim-makan',
    title: { id: 'Isim Makan', ar: 'اسم المكان', en: 'Place Noun' },
    description: { id: 'Kata benda tempat', ar: 'اسم يدل على المكان', en: 'Noun indicating place' },
    progress: 0,
    locked: true,
  },
  {
    id: 'tashrif-fiil',
    title: { id: 'Tashrif Fi\'il', ar: 'تصريف الفعل', en: 'Verb Conjugation' },
    description: { id: 'Perubahan bentuk kata kerja', ar: 'تغيير صيغة الفعل', en: 'Changing verb forms' },
    progress: 0,
    locked: true,
  },
];

export default function LearnPage() {
  const { language, t } = useLanguage();

  const renderTopicList = (topics: TopicItem[], category: 'nahwu' | 'shorof') => (
    <div className="space-y-3">
      {topics.map((topic, index) => (
        <Card
          key={topic.id}
          variant="game"
          className={topic.locked ? 'opacity-60' : ''}
        >
          <CardContent className="py-4">
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold ${
                category === 'nahwu' ? 'bg-blue-500' : 'bg-green-500'
              }`}>
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{topic.title[language]}</h3>
                <p className="text-sm text-muted">{topic.description[language]}</p>
                {!topic.locked && topic.progress > 0 && (
                  <Progress value={topic.progress} max={100} className="mt-2 h-1.5" />
                )}
              </div>
              <div className="flex items-center">
                {topic.locked ? (
                  <Lock className="w-5 h-5 text-muted" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-muted" />
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('nav.learn')}</h1>
          <p className="text-muted">
            {language === 'id' && 'Pelajari materi Nahwu dan Shorof secara bertahap'}
            {language === 'ar' && 'تعلم مواد النحو والصرف خطوة بخطوة'}
            {language === 'en' && 'Learn Nahwu and Shorof materials step by step'}
          </p>
        </div>

        {/* Nahwu Section */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-bold">{t('topic.nahwu')}</h2>
            <span className="text-sm text-muted">- {t('topic.nahwu.desc')}</span>
          </div>
          {renderTopicList(nahwuTopics, 'nahwu')}
        </section>

        {/* Shorof Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-bold">{t('topic.shorof')}</h2>
            <span className="text-sm text-muted">- {t('topic.shorof.desc')}</span>
          </div>
          {renderTopicList(shorofTopics, 'shorof')}
        </section>
      </div>
    </div>
  );
}
