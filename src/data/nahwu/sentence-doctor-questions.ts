import type { SentenceDoctorQuestion } from '@/types';

export const sentenceDoctorQuestions: SentenceDoctorQuestion[] = [
  // Mubtada-Khabar (Subject-Predicate) errors
  {
    id: 'sd-001',
    incorrectSentence: 'الطالبَ مجتهدٌ',
    correctSentence: 'الطالبُ مجتهدٌ',
    errorType: 'irab',
    errorPosition: 0,
    explanation: {
      ar: 'المبتدأ مرفوع دائماً، والصحيح: الطالبُ (بالضمة)',
      id: 'Mubtada selalu marfu\' (rafa\'). Yang benar: الطالبُ dengan dhammah',
      en: 'The subject (mubtada) is always in the nominative case (marfu\'). Correct: الطالبُ with damma',
    },
    options: ['الطالبُ', 'الطالبَ', 'الطالبِ'],
  },
  {
    id: 'sd-002',
    incorrectSentence: 'البيتُ كبيرٍ',
    correctSentence: 'البيتُ كبيرٌ',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'الخبر مرفوع مثل المبتدأ، والصحيح: كبيرٌ (بالضمة)',
      id: 'Khabar marfu\' seperti mubtada. Yang benar: كبيرٌ dengan dhammah',
      en: 'The predicate (khabar) is nominative like the subject. Correct: كبيرٌ with damma',
    },
    options: ['كبيرٌ', 'كبيرٍ', 'كبيرَ'],
  },
  {
    id: 'sd-003',
    incorrectSentence: 'المعلمُ نشيطَ',
    correctSentence: 'المعلمُ نشيطٌ',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'الخبر يجب أن يكون مرفوعاً: نشيطٌ',
      id: 'Khabar harus marfu\': نشيطٌ',
      en: 'The predicate must be nominative: نشيطٌ',
    },
    options: ['نشيطٌ', 'نشيطَ', 'نشيطِ'],
  },

  // Fa'il (Subject of verb) errors
  {
    id: 'sd-004',
    incorrectSentence: 'ذهبَ الولدَ إلى المدرسةِ',
    correctSentence: 'ذهبَ الولدُ إلى المدرسةِ',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'الفاعل مرفوع دائماً، والصحيح: الولدُ (بالضمة)',
      id: 'Fa\'il (pelaku) selalu marfu\'. Yang benar: الولدُ dengan dhammah',
      en: 'The subject of the verb (fa\'il) is always nominative. Correct: الولدُ with damma',
    },
    options: ['الولدُ', 'الولدَ', 'الولدِ'],
  },
  {
    id: 'sd-005',
    incorrectSentence: 'كتبَ الطالبِ الدرسَ',
    correctSentence: 'كتبَ الطالبُ الدرسَ',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'الفاعل مرفوع: الطالبُ',
      id: 'Fa\'il harus marfu\': الطالبُ',
      en: 'The subject must be nominative: الطالبُ',
    },
    options: ['الطالبُ', 'الطالبِ', 'الطالبَ'],
  },

  // Maf'ul bihi (Object) errors
  {
    id: 'sd-006',
    incorrectSentence: 'قرأَ المعلمُ الكتابُ',
    correctSentence: 'قرأَ المعلمُ الكتابَ',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'المفعول به منصوب دائماً، والصحيح: الكتابَ (بالفتحة)',
      id: 'Maf\'ul bih (objek) selalu manshub. Yang benar: الكتابَ dengan fathah',
      en: 'The object (maf\'ul bihi) is always in the accusative case. Correct: الكتابَ with fatha',
    },
    options: ['الكتابَ', 'الكتابُ', 'الكتابِ'],
  },
  {
    id: 'sd-007',
    incorrectSentence: 'شربَ الولدُ الماءُ',
    correctSentence: 'شربَ الولدُ الماءَ',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'المفعول به منصوب: الماءَ',
      id: 'Maf\'ul bih harus manshub: الماءَ',
      en: 'The object must be accusative: الماءَ',
    },
    options: ['الماءَ', 'الماءُ', 'الماءِ'],
  },

  // Jar-Majrur (Preposition + Noun) errors
  {
    id: 'sd-008',
    incorrectSentence: 'سافرَ إلى المدينةُ',
    correctSentence: 'سافرَ إلى المدينةِ',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'الاسم بعد حرف الجر مجرور، والصحيح: المدينةِ (بالكسرة)',
      id: 'Kata setelah huruf jar harus majrur. Yang benar: المدينةِ dengan kasrah',
      en: 'Nouns after prepositions are in the genitive case. Correct: المدينةِ with kasra',
    },
    options: ['المدينةِ', 'المدينةُ', 'المدينةَ'],
  },
  {
    id: 'sd-009',
    incorrectSentence: 'خرجَ منَ البيتُ',
    correctSentence: 'خرجَ منَ البيتِ',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'الاسم بعد حرف الجر مجرور: البيتِ',
      id: 'Kata setelah huruf jar harus majrur: البيتِ',
      en: 'Noun after preposition must be genitive: البيتِ',
    },
    options: ['البيتِ', 'البيتُ', 'البيتَ'],
  },

  // Inna and its sisters
  {
    id: 'sd-010',
    incorrectSentence: 'إنَّ الطالبُ مجتهدٌ',
    correctSentence: 'إنَّ الطالبَ مجتهدٌ',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'اسم إنَّ منصوب، والصحيح: الطالبَ (بالفتحة)',
      id: 'Isim inna selalu manshub. Yang benar: الطالبَ dengan fathah',
      en: 'The noun after inna is accusative. Correct: الطالبَ with fatha',
    },
    options: ['الطالبَ', 'الطالبُ', 'الطالبِ'],
  },
  {
    id: 'sd-011',
    incorrectSentence: 'إنَّ العلمُ نورٌ',
    correctSentence: 'إنَّ العلمَ نورٌ',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'اسم إنَّ منصوب: العلمَ',
      id: 'Isim inna harus manshub: العلمَ',
      en: 'Noun after inna must be accusative: العلمَ',
    },
    options: ['العلمَ', 'العلمُ', 'العلمِ'],
  },

  // Kana and its sisters
  {
    id: 'sd-012',
    incorrectSentence: 'كانَ الجوُّ جميلَ',
    correctSentence: 'كانَ الجوُّ جميلاً',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'خبر كان منصوب، والصحيح: جميلاً (بالفتحة)',
      id: 'Khabar kana selalu manshub. Yang benar: جميلاً dengan fathah',
      en: 'The predicate of kana is accusative. Correct: جميلاً with fatha',
    },
    options: ['جميلاً', 'جميلٌ', 'جميلٍ'],
  },

  // Mudaf-Mudaf ilaih
  {
    id: 'sd-013',
    incorrectSentence: 'كتابُ الطالبُ',
    correctSentence: 'كتابُ الطالبِ',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'المضاف إليه مجرور دائماً، والصحيح: الطالبِ (بالكسرة)',
      id: 'Mudhaf ilaih selalu majrur. Yang benar: الطالبِ dengan kasrah',
      en: 'The mudaf ilaihi is always genitive. Correct: الطالبِ with kasra',
    },
    options: ['الطالبِ', 'الطالبُ', 'الطالبَ'],
  },
  {
    id: 'sd-014',
    incorrectSentence: 'بابُ المسجدُ',
    correctSentence: 'بابُ المسجدِ',
    errorType: 'irab',
    errorPosition: 1,
    explanation: {
      ar: 'المضاف إليه مجرور: المسجدِ',
      id: 'Mudhaf ilaih harus majrur: المسجدِ',
      en: 'Mudaf ilaihi must be genitive: المسجدِ',
    },
    options: ['المسجدِ', 'المسجدُ', 'المسجدَ'],
  },

  // Na't (Adjective) agreement
  {
    id: 'sd-015',
    incorrectSentence: 'رأيتُ طالباً مجتهدٌ',
    correctSentence: 'رأيتُ طالباً مجتهداً',
    errorType: 'irab',
    errorPosition: 2,
    explanation: {
      ar: 'الصفة تتبع الموصوف في الإعراب. الموصوف منصوب فالصفة منصوبة: مجتهداً',
      id: 'Sifat mengikuti mausuf dalam i\'rab. Mausuf manshub maka sifat juga manshub: مجتهداً',
      en: 'The adjective follows the noun in case. The noun is accusative, so the adjective is too: مجتهداً',
    },
    options: ['مجتهداً', 'مجتهدٌ', 'مجتهدٍ'],
  },
];

// Get questions for a specific level
export function getQuestionsByLevel(level: number): SentenceDoctorQuestion[] {
  if (level === 1) {
    return sentenceDoctorQuestions.slice(0, 7);
  }
  return sentenceDoctorQuestions.slice(7);
}

// Get random questions
export function getRandomQuestions(count: number): SentenceDoctorQuestion[] {
  const shuffled = [...sentenceDoctorQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
