import type { Language } from '@/types';

export const translations = {
  // Navigation & Common
  'app.name': {
    id: 'Afkaaruna',
    ar: 'أفكارنا',
    en: 'Afkaaruna',
  },
  'app.tagline': {
    id: 'Belajar Nahwu & Shorof dengan Menyenangkan',
    ar: 'تعلم النحو والصرف بطريقة ممتعة',
    en: 'Learn Nahwu & Shorof the Fun Way',
  },
  'nav.home': {
    id: 'Beranda',
    ar: 'الرئيسية',
    en: 'Home',
  },
  'nav.play': {
    id: 'Bermain',
    ar: 'العب',
    en: 'Play',
  },
  'nav.learn': {
    id: 'Belajar',
    ar: 'تعلم',
    en: 'Learn',
  },
  'nav.profile': {
    id: 'Profil',
    ar: 'الملف الشخصي',
    en: 'Profile',
  },

  // Game UI
  'game.start': {
    id: 'Mulai',
    ar: 'ابدأ',
    en: 'Start',
  },
  'game.continue': {
    id: 'Lanjutkan',
    ar: 'استمر',
    en: 'Continue',
  },
  'game.retry': {
    id: 'Coba Lagi',
    ar: 'حاول مرة أخرى',
    en: 'Try Again',
  },
  'game.next': {
    id: 'Selanjutnya',
    ar: 'التالي',
    en: 'Next',
  },
  'game.finish': {
    id: 'Selesai',
    ar: 'انتهى',
    en: 'Finish',
  },
  'game.score': {
    id: 'Skor',
    ar: 'النتيجة',
    en: 'Score',
  },
  'game.time': {
    id: 'Waktu',
    ar: 'الوقت',
    en: 'Time',
  },
  'game.streak': {
    id: 'Beruntun',
    ar: 'متتالي',
    en: 'Streak',
  },
  'game.correct': {
    id: 'Benar!',
    ar: 'صحيح!',
    en: 'Correct!',
  },
  'game.incorrect': {
    id: 'Kurang Tepat',
    ar: 'غير صحيح',
    en: 'Incorrect',
  },
  'game.excellent': {
    id: 'Luar Biasa!',
    ar: 'ممتاز!',
    en: 'Excellent!',
  },
  'game.good': {
    id: 'Bagus!',
    ar: 'جيد!',
    en: 'Good!',
  },
  'game.keepTrying': {
    id: 'Terus Semangat!',
    ar: 'استمر في المحاولة!',
    en: 'Keep Trying!',
  },

  // Game Names
  'game.wordBuilder': {
    id: 'Pembangun Kata',
    ar: 'بناء الكلمات',
    en: 'Word Builder',
  },
  'game.wordBuilder.desc': {
    id: 'Bangun kata dari akar dan pola',
    ar: 'ابنِ كلمات من الجذور والأوزان',
    en: 'Build words from roots and patterns',
  },
  'game.sentenceDoctor': {
    id: 'Dokter Kalimat',
    ar: 'طبيب الجمل',
    en: 'Sentence Doctor',
  },
  'game.sentenceDoctor.desc': {
    id: 'Perbaiki kesalahan i\'rab dalam kalimat',
    ar: 'صحّح أخطاء الإعراب في الجمل',
    en: 'Fix i\'rab errors in sentences',
  },
  'game.grammarMatch': {
    id: 'Cocokkan Tata Bahasa',
    ar: 'مطابقة القواعد',
    en: 'Grammar Match',
  },
  'game.conjugationRace': {
    id: 'Lomba Tashrif',
    ar: 'سباق التصريف',
    en: 'Conjugation Race',
  },

  // Topics
  'topic.nahwu': {
    id: 'Nahwu',
    ar: 'النحو',
    en: 'Nahwu',
  },
  'topic.nahwu.desc': {
    id: 'Ilmu tentang susunan kalimat Arab',
    ar: 'علم تركيب الجمل العربية',
    en: 'The science of Arabic sentence structure',
  },
  'topic.shorof': {
    id: 'Shorof',
    ar: 'الصرف',
    en: 'Shorof',
  },
  'topic.shorof.desc': {
    id: 'Ilmu tentang perubahan bentuk kata',
    ar: 'علم تغيير صيغة الكلمات',
    en: 'The science of word morphology',
  },

  // Results
  'result.title': {
    id: 'Hasil Permainan',
    ar: 'نتيجة اللعبة',
    en: 'Game Results',
  },
  'result.score': {
    id: 'Skor Anda',
    ar: 'نتيجتك',
    en: 'Your Score',
  },
  'result.stars': {
    id: 'Bintang',
    ar: 'النجوم',
    en: 'Stars',
  },
  'result.xp': {
    id: 'XP Diperoleh',
    ar: 'نقاط الخبرة',
    en: 'XP Earned',
  },

  // Profile
  'profile.level': {
    id: 'Level',
    ar: 'المستوى',
    en: 'Level',
  },
  'profile.totalXP': {
    id: 'Total XP',
    ar: 'مجموع نقاط الخبرة',
    en: 'Total XP',
  },
  'profile.achievements': {
    id: 'Pencapaian',
    ar: 'الإنجازات',
    en: 'Achievements',
  },
  'profile.streak': {
    id: 'Hari Berturut',
    ar: 'أيام متتالية',
    en: 'Day Streak',
  },

  // Buttons & Actions
  'button.submit': {
    id: 'Kirim',
    ar: 'إرسال',
    en: 'Submit',
  },
  'button.check': {
    id: 'Periksa',
    ar: 'تحقق',
    en: 'Check',
  },
  'button.hint': {
    id: 'Petunjuk',
    ar: 'تلميح',
    en: 'Hint',
  },
  'button.skip': {
    id: 'Lewati',
    ar: 'تخطي',
    en: 'Skip',
  },
  'button.back': {
    id: 'Kembali',
    ar: 'رجوع',
    en: 'Back',
  },

  // Instructions
  'instruction.wordBuilder': {
    id: 'Susun huruf sesuai pola yang diberikan untuk membentuk kata',
    ar: 'رتّب الحروف حسب الوزن المعطى لتكوين الكلمة',
    en: 'Arrange the letters according to the pattern to form the word',
  },
  'instruction.sentenceDoctor': {
    id: 'Temukan dan perbaiki kesalahan dalam kalimat berikut',
    ar: 'اعثر على الخطأ في الجملة التالية وصححه',
    en: 'Find and fix the error in the following sentence',
  },

  // Misc
  'loading': {
    id: 'Memuat...',
    ar: 'جاري التحميل...',
    en: 'Loading...',
  },
  'error.generic': {
    id: 'Terjadi kesalahan',
    ar: 'حدث خطأ',
    en: 'An error occurred',
  },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, lang: Language): string {
  return translations[key]?.[lang] || translations[key]?.['en'] || key;
}
