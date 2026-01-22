import type { WordBuilderQuestion } from '@/types';

export const wordBuilderQuestions: WordBuilderQuestion[] = [
  // Level 1 - Basic patterns with common roots
  {
    id: 'wb-001',
    root: 'ك-ت-ب',
    rootLetters: ['ك', 'ت', 'ب'],
    pattern: 'فَاعِل',
    targetWord: 'كَاتِب',
    meaning: {
      ar: 'كاتب - الشخص الذي يكتب',
      id: 'Penulis - orang yang menulis',
      en: 'Writer - one who writes',
    },
    hints: ['Ism fa\'il (kata pelaku)', 'اسم الفاعل'],
  },
  {
    id: 'wb-002',
    root: 'ك-ت-ب',
    rootLetters: ['ك', 'ت', 'ب'],
    pattern: 'مَفْعُول',
    targetWord: 'مَكْتُوب',
    meaning: {
      ar: 'مكتوب - الشيء الذي كُتِب',
      id: 'Tulisan / yang ditulis',
      en: 'Written - something that is written',
    },
    hints: ['Ism maf\'ul (kata objek)', 'اسم المفعول'],
  },
  {
    id: 'wb-003',
    root: 'ع-ل-م',
    rootLetters: ['ع', 'ل', 'م'],
    pattern: 'فَاعِل',
    targetWord: 'عَالِم',
    meaning: {
      ar: 'عالِم - الشخص الذي يعلم',
      id: 'Orang alim / ilmuwan',
      en: 'Scholar - one who knows',
    },
    hints: ['Ism fa\'il', 'اسم الفاعل'],
  },
  {
    id: 'wb-004',
    root: 'ع-ل-م',
    rootLetters: ['ع', 'ل', 'م'],
    pattern: 'مَفْعُول',
    targetWord: 'مَعْلُوم',
    meaning: {
      ar: 'معلوم - الشيء المعروف',
      id: 'Yang diketahui',
      en: 'Known - something that is known',
    },
  },
  {
    id: 'wb-005',
    root: 'د-ر-س',
    rootLetters: ['د', 'ر', 'س'],
    pattern: 'فَاعِل',
    targetWord: 'دَارِس',
    meaning: {
      ar: 'دارس - الشخص الذي يدرس',
      id: 'Pelajar - orang yang belajar',
      en: 'Student - one who studies',
    },
  },
  {
    id: 'wb-006',
    root: 'ج-ل-س',
    rootLetters: ['ج', 'ل', 'س'],
    pattern: 'فَاعِل',
    targetWord: 'جَالِس',
    meaning: {
      ar: 'جالس - الشخص الذي يجلس',
      id: 'Orang yang duduk',
      en: 'Sitting - one who sits',
    },
  },
  {
    id: 'wb-007',
    root: 'ق-ر-أ',
    rootLetters: ['ق', 'ر', 'أ'],
    pattern: 'فَاعِل',
    targetWord: 'قَارِئ',
    meaning: {
      ar: 'قارئ - الشخص الذي يقرأ',
      id: 'Pembaca - orang yang membaca',
      en: 'Reader - one who reads',
    },
  },
  {
    id: 'wb-008',
    root: 'س-م-ع',
    rootLetters: ['س', 'م', 'ع'],
    pattern: 'فَاعِل',
    targetWord: 'سَامِع',
    meaning: {
      ar: 'سامع - الشخص الذي يسمع',
      id: 'Pendengar - orang yang mendengar',
      en: 'Listener - one who listens',
    },
  },
  {
    id: 'wb-009',
    root: 'ن-ص-ر',
    rootLetters: ['ن', 'ص', 'ر'],
    pattern: 'فَاعِل',
    targetWord: 'نَاصِر',
    meaning: {
      ar: 'ناصر - الشخص الذي ينصر',
      id: 'Penolong - orang yang menolong',
      en: 'Helper - one who helps',
    },
  },
  {
    id: 'wb-010',
    root: 'ف-ت-ح',
    rootLetters: ['ف', 'ت', 'ح'],
    pattern: 'مَفْعُول',
    targetWord: 'مَفْتُوح',
    meaning: {
      ar: 'مفتوح - الشيء الذي فُتِح',
      id: 'Terbuka - yang dibuka',
      en: 'Opened - something that is opened',
    },
  },

  // Level 2 - More patterns
  {
    id: 'wb-011',
    root: 'ك-ت-ب',
    rootLetters: ['ك', 'ت', 'ب'],
    pattern: 'مَفْعَل',
    targetWord: 'مَكْتَب',
    meaning: {
      ar: 'مكتب - مكان الكتابة',
      id: 'Meja tulis / kantor',
      en: 'Office/desk - place of writing',
    },
    hints: ['Ism makan (kata tempat)', 'اسم المكان'],
  },
  {
    id: 'wb-012',
    root: 'د-ر-س',
    rootLetters: ['د', 'ر', 'س'],
    pattern: 'مَفْعَل',
    targetWord: 'مَدْرَسَة',
    meaning: {
      ar: 'مدرسة - مكان الدراسة',
      id: 'Sekolah - tempat belajar',
      en: 'School - place of study',
    },
  },
  {
    id: 'wb-013',
    root: 'ج-ل-س',
    rootLetters: ['ج', 'ل', 'س'],
    pattern: 'مَفْعِل',
    targetWord: 'مَجْلِس',
    meaning: {
      ar: 'مجلس - مكان الجلوس',
      id: 'Majelis - tempat duduk',
      en: 'Council/assembly - place of sitting',
    },
  },
  {
    id: 'wb-014',
    root: 'س-ج-د',
    rootLetters: ['س', 'ج', 'د'],
    pattern: 'مَفْعِل',
    targetWord: 'مَسْجِد',
    meaning: {
      ar: 'مسجد - مكان السجود',
      id: 'Masjid - tempat sujud',
      en: 'Mosque - place of prostration',
    },
  },
  {
    id: 'wb-015',
    root: 'ع-ب-د',
    rootLetters: ['ع', 'ب', 'د'],
    pattern: 'فَاعِل',
    targetWord: 'عَابِد',
    meaning: {
      ar: 'عابد - الشخص الذي يعبد',
      id: 'Ahli ibadah - orang yang beribadah',
      en: 'Worshipper - one who worships',
    },
  },
];

// Get questions for a specific level (difficulty)
export function getQuestionsByLevel(level: number): WordBuilderQuestion[] {
  if (level === 1) {
    return wordBuilderQuestions.slice(0, 10);
  }
  return wordBuilderQuestions.slice(10);
}

// Get random questions
export function getRandomQuestions(count: number): WordBuilderQuestion[] {
  const shuffled = [...wordBuilderQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
