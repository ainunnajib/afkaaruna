'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Stars } from '@/components/ui';
import { Gamepad2, BookOpen, Trophy, Zap } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Gamepad2,
      title: {
        id: 'Mini-Game Seru',
        ar: 'ألعاب مصغرة ممتعة',
        en: 'Fun Mini-Games',
      },
      description: {
        id: 'Belajar sambil bermain dengan berbagai jenis permainan',
        ar: 'تعلم أثناء اللعب مع أنواع مختلفة من الألعاب',
        en: 'Learn while playing with various game types',
      },
    },
    {
      icon: BookOpen,
      title: {
        id: 'Nahwu & Shorof',
        ar: 'النحو والصرف',
        en: 'Nahwu & Shorof',
      },
      description: {
        id: 'Materi lengkap tata bahasa Arab tingkat dasar hingga lanjut',
        ar: 'مواد كاملة للقواعد العربية من المبتدئ إلى المتقدم',
        en: 'Complete Arabic grammar materials from basic to advanced',
      },
    },
    {
      icon: Trophy,
      title: {
        id: 'Pencapaian',
        ar: 'الإنجازات',
        en: 'Achievements',
      },
      description: {
        id: 'Kumpulkan bintang dan lencana untuk setiap pencapaian',
        ar: 'اجمع النجوم والشارات لكل إنجاز',
        en: 'Collect stars and badges for every achievement',
      },
    },
    {
      icon: Zap,
      title: {
        id: 'Tiga Bahasa',
        ar: 'ثلاث لغات',
        en: 'Trilingual',
      },
      description: {
        id: 'Tersedia dalam Bahasa Indonesia, Arab, dan Inggris',
        ar: 'متوفر بالإندونيسية والعربية والإنجليزية',
        en: 'Available in Indonesian, Arabic, and English',
      },
    },
  ];

  const { language } = useLanguage();

  return (
    <div className="pattern-bg min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="arabic-text text-base">بسم الله</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            {t('app.name')}
          </h1>

          <p className="text-xl md:text-2xl text-muted mb-8 max-w-2xl mx-auto">
            {t('app.tagline')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/play">
              <Button size="lg" className="w-full sm:w-auto">
                <Gamepad2 className="w-5 h-5 mr-2" />
                {t('game.start')}
              </Button>
            </Link>
            <Link href="/learn">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <BookOpen className="w-5 h-5 mr-2" />
                {t('nav.learn')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Arabic Sample */}
      <section className="container mx-auto px-4 py-8">
        <Card variant="elevated" className="max-w-2xl mx-auto text-center">
          <CardContent>
            <p className="arabic-text text-3xl mb-4 text-primary">
              ذَهَبَ الطَّالِبُ إِلَى المَدْرَسَةِ
            </p>
            <p className="text-muted">
              {language === 'id' && 'Murid itu pergi ke sekolah'}
              {language === 'ar' && 'ذهب الطالب إلى المدرسة'}
              {language === 'en' && 'The student went to school'}
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <Stars count={3} size="sm" />
              <span className="text-sm text-muted">
                {language === 'id' && 'Contoh kalimat fi\'liyyah'}
                {language === 'ar' && 'مثال على الجملة الفعلية'}
                {language === 'en' && 'Example of verbal sentence'}
              </span>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          {language === 'id' && 'Kenapa Afkaaruna?'}
          {language === 'ar' && 'لماذا أفكارنا؟'}
          {language === 'en' && 'Why Afkaaruna?'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} variant="game" className="text-center">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg">
                    {feature.title[language]}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {feature.description[language]}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card variant="elevated" className="max-w-3xl mx-auto bg-primary text-white text-center">
          <CardContent className="py-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {language === 'id' && 'Siap untuk Belajar?'}
              {language === 'ar' && 'هل أنت مستعد للتعلم؟'}
              {language === 'en' && 'Ready to Learn?'}
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              {language === 'id' && 'Mulai perjalanan belajar bahasa Arab kamu sekarang!'}
              {language === 'ar' && 'ابدأ رحلة تعلم اللغة العربية الآن!'}
              {language === 'en' && 'Start your Arabic learning journey now!'}
            </p>
            <Link href="/play">
              <Button variant="secondary" size="lg">
                {t('game.start')}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
