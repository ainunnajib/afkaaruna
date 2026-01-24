export interface IrabWord {
  word: string;
  role: string;
  roleLabel: { ar: string; id: string; en: string };
  explanation: { ar: string; id: string; en: string };
}

export interface IrabAnalyzerQuestion {
  id: string;
  sentence: string;
  translation: { id: string; en: string };
  words: IrabWord[];
  targetWordIndex: number; // which word the student needs to identify
  options: string[]; // role options to choose from
  correctRole: string;
}

export const irabAnalyzerQuestions: IrabAnalyzerQuestion[] = [
  {
    id: 'ia-001',
    sentence: 'ذَهَبَ الطَّالِبُ إِلَى المَدْرَسَةِ',
    translation: { id: 'Siswa pergi ke sekolah', en: 'The student went to school' },
    words: [
      { word: 'ذَهَبَ', role: 'fi\'il', roleLabel: { ar: 'فعل ماضٍ', id: 'Fi\'il madhi', en: 'Past verb' }, explanation: { ar: 'فعل ماضٍ مبني على الفتح', id: 'Fi\'il madhi mabni atas fathah', en: 'Past tense verb, built on fatha' } },
      { word: 'الطَّالِبُ', role: 'fa\'il', roleLabel: { ar: 'فاعل', id: 'Fa\'il', en: 'Subject' }, explanation: { ar: 'فاعل مرفوع بالضمة', id: 'Fa\'il marfu\' dengan dhammah', en: 'Subject, nominative with damma' } },
      { word: 'إِلَى', role: 'harf-jar', roleLabel: { ar: 'حرف جر', id: 'Huruf jar', en: 'Preposition' }, explanation: { ar: 'حرف جر', id: 'Huruf jar', en: 'Preposition' } },
      { word: 'المَدْرَسَةِ', role: 'majrur', roleLabel: { ar: 'مجرور', id: 'Majrur', en: 'Genitive' }, explanation: { ar: 'اسم مجرور بالكسرة', id: 'Isim majrur dengan kasrah', en: 'Noun in genitive case with kasra' } },
    ],
    targetWordIndex: 1,
    options: ['فاعل', 'مفعول به', 'مبتدأ', 'خبر'],
    correctRole: 'فاعل',
  },
  {
    id: 'ia-002',
    sentence: 'الطَّالِبُ مُجْتَهِدٌ',
    translation: { id: 'Siswa itu rajin', en: 'The student is diligent' },
    words: [
      { word: 'الطَّالِبُ', role: 'mubtada', roleLabel: { ar: 'مبتدأ', id: 'Mubtada', en: 'Subject' }, explanation: { ar: 'مبتدأ مرفوع بالضمة', id: 'Mubtada marfu\' dengan dhammah', en: 'Subject, nominative with damma' } },
      { word: 'مُجْتَهِدٌ', role: 'khabar', roleLabel: { ar: 'خبر', id: 'Khabar', en: 'Predicate' }, explanation: { ar: 'خبر مرفوع بالضمة', id: 'Khabar marfu\' dengan dhammah', en: 'Predicate, nominative with damma' } },
    ],
    targetWordIndex: 0,
    options: ['مبتدأ', 'فاعل', 'مفعول به', 'حال'],
    correctRole: 'مبتدأ',
  },
  {
    id: 'ia-003',
    sentence: 'الطَّالِبُ مُجْتَهِدٌ',
    translation: { id: 'Siswa itu rajin', en: 'The student is diligent' },
    words: [
      { word: 'الطَّالِبُ', role: 'mubtada', roleLabel: { ar: 'مبتدأ', id: 'Mubtada', en: 'Subject' }, explanation: { ar: 'مبتدأ مرفوع', id: 'Mubtada marfu\'', en: 'Subject, nominative' } },
      { word: 'مُجْتَهِدٌ', role: 'khabar', roleLabel: { ar: 'خبر', id: 'Khabar', en: 'Predicate' }, explanation: { ar: 'خبر مرفوع بالضمة', id: 'Khabar marfu\' dengan dhammah', en: 'Predicate, nominative with damma' } },
    ],
    targetWordIndex: 1,
    options: ['خبر', 'نعت', 'حال', 'مفعول به'],
    correctRole: 'خبر',
  },
  {
    id: 'ia-004',
    sentence: 'قَرَأَ المُعَلِّمُ الكِتَابَ',
    translation: { id: 'Guru membaca buku', en: 'The teacher read the book' },
    words: [
      { word: 'قَرَأَ', role: 'fi\'il', roleLabel: { ar: 'فعل ماضٍ', id: 'Fi\'il madhi', en: 'Past verb' }, explanation: { ar: 'فعل ماضٍ مبني على الفتح', id: 'Fi\'il madhi mabni atas fathah', en: 'Past verb, built on fatha' } },
      { word: 'المُعَلِّمُ', role: 'fa\'il', roleLabel: { ar: 'فاعل', id: 'Fa\'il', en: 'Subject' }, explanation: { ar: 'فاعل مرفوع بالضمة', id: 'Fa\'il marfu\' dengan dhammah', en: 'Subject, nominative with damma' } },
      { word: 'الكِتَابَ', role: 'maf\'ul-bih', roleLabel: { ar: 'مفعول به', id: 'Maf\'ul bih', en: 'Object' }, explanation: { ar: 'مفعول به منصوب بالفتحة', id: 'Maf\'ul bih manshub dengan fathah', en: 'Object, accusative with fatha' } },
    ],
    targetWordIndex: 2,
    options: ['مفعول به', 'فاعل', 'خبر', 'تمييز'],
    correctRole: 'مفعول به',
  },
  {
    id: 'ia-005',
    sentence: 'إِنَّ العِلْمَ نُورٌ',
    translation: { id: 'Sesungguhnya ilmu itu cahaya', en: 'Indeed, knowledge is light' },
    words: [
      { word: 'إِنَّ', role: 'harf-nasikh', roleLabel: { ar: 'حرف ناسخ', id: 'Huruf nasikh', en: 'Particle' }, explanation: { ar: 'حرف مشبه بالفعل', id: 'Huruf musyabbah bil fi\'il', en: 'Verb-like particle' } },
      { word: 'العِلْمَ', role: 'ism-inna', roleLabel: { ar: 'اسم إنّ', id: 'Isim inna', en: 'Noun of inna' }, explanation: { ar: 'اسم إنّ منصوب بالفتحة', id: 'Isim inna manshub dengan fathah', en: 'Noun of inna, accusative' } },
      { word: 'نُورٌ', role: 'khabar-inna', roleLabel: { ar: 'خبر إنّ', id: 'Khabar inna', en: 'Predicate of inna' }, explanation: { ar: 'خبر إنّ مرفوع بالضمة', id: 'Khabar inna marfu\' dengan dhammah', en: 'Predicate of inna, nominative' } },
    ],
    targetWordIndex: 1,
    options: ['اسم إنّ', 'مبتدأ', 'مفعول به', 'فاعل'],
    correctRole: 'اسم إنّ',
  },
  {
    id: 'ia-006',
    sentence: 'كَانَ الجَوُّ جَمِيلاً',
    translation: { id: 'Cuaca itu indah', en: 'The weather was beautiful' },
    words: [
      { word: 'كَانَ', role: 'fi\'il-naqis', roleLabel: { ar: 'فعل ناقص', id: 'Fi\'il naqish', en: 'Incomplete verb' }, explanation: { ar: 'فعل ماضٍ ناقص', id: 'Fi\'il madhi naqish', en: 'Incomplete past verb' } },
      { word: 'الجَوُّ', role: 'ism-kana', roleLabel: { ar: 'اسم كان', id: 'Isim kana', en: 'Noun of kana' }, explanation: { ar: 'اسم كان مرفوع بالضمة', id: 'Isim kana marfu\' dengan dhammah', en: 'Noun of kana, nominative' } },
      { word: 'جَمِيلاً', role: 'khabar-kana', roleLabel: { ar: 'خبر كان', id: 'Khabar kana', en: 'Predicate of kana' }, explanation: { ar: 'خبر كان منصوب بالفتحة', id: 'Khabar kana manshub dengan fathah', en: 'Predicate of kana, accusative' } },
    ],
    targetWordIndex: 2,
    options: ['خبر كان', 'خبر', 'حال', 'نعت'],
    correctRole: 'خبر كان',
  },
  {
    id: 'ia-007',
    sentence: 'جَاءَ الوَلَدُ مَسْرُوراً',
    translation: { id: 'Anak itu datang dengan gembira', en: 'The boy came happily' },
    words: [
      { word: 'جَاءَ', role: 'fi\'il', roleLabel: { ar: 'فعل ماضٍ', id: 'Fi\'il madhi', en: 'Past verb' }, explanation: { ar: 'فعل ماضٍ', id: 'Fi\'il madhi', en: 'Past verb' } },
      { word: 'الوَلَدُ', role: 'fa\'il', roleLabel: { ar: 'فاعل', id: 'Fa\'il', en: 'Subject' }, explanation: { ar: 'فاعل مرفوع', id: 'Fa\'il marfu\'', en: 'Subject, nominative' } },
      { word: 'مَسْرُوراً', role: 'hal', roleLabel: { ar: 'حال', id: 'Hal', en: 'Circumstantial' }, explanation: { ar: 'حال منصوب بالفتحة', id: 'Hal manshub dengan fathah', en: 'Circumstantial, accusative' } },
    ],
    targetWordIndex: 2,
    options: ['حال', 'مفعول به', 'نعت', 'تمييز'],
    correctRole: 'حال',
  },
  {
    id: 'ia-008',
    sentence: 'كِتَابُ الطَّالِبِ جَدِيدٌ',
    translation: { id: 'Buku siswa itu baru', en: 'The student\'s book is new' },
    words: [
      { word: 'كِتَابُ', role: 'mubtada-mudaf', roleLabel: { ar: 'مبتدأ (مضاف)', id: 'Mubtada (mudhaf)', en: 'Subject (possessive)' }, explanation: { ar: 'مبتدأ مرفوع وهو مضاف', id: 'Mubtada marfu\', sekaligus mudhaf', en: 'Subject, nominative, also a possessor' } },
      { word: 'الطَّالِبِ', role: 'mudaf-ilayh', roleLabel: { ar: 'مضاف إليه', id: 'Mudhaf ilaih', en: 'Possessive complement' }, explanation: { ar: 'مضاف إليه مجرور بالكسرة', id: 'Mudhaf ilaih majrur dengan kasrah', en: 'Possessive complement, genitive' } },
      { word: 'جَدِيدٌ', role: 'khabar', roleLabel: { ar: 'خبر', id: 'Khabar', en: 'Predicate' }, explanation: { ar: 'خبر مرفوع بالضمة', id: 'Khabar marfu\' dengan dhammah', en: 'Predicate, nominative' } },
    ],
    targetWordIndex: 1,
    options: ['مضاف إليه', 'مفعول به', 'فاعل', 'بدل'],
    correctRole: 'مضاف إليه',
  },
  {
    id: 'ia-009',
    sentence: 'يَقْرَأُ الطَّالِبُ كِتَاباً مُفِيداً',
    translation: { id: 'Siswa membaca buku yang bermanfaat', en: 'The student reads a useful book' },
    words: [
      { word: 'يَقْرَأُ', role: 'fi\'il-mudari', roleLabel: { ar: 'فعل مضارع', id: 'Fi\'il mudhari\'', en: 'Present verb' }, explanation: { ar: 'فعل مضارع مرفوع بالضمة', id: 'Fi\'il mudhari\' marfu\' dengan dhammah', en: 'Present verb, nominative' } },
      { word: 'الطَّالِبُ', role: 'fa\'il', roleLabel: { ar: 'فاعل', id: 'Fa\'il', en: 'Subject' }, explanation: { ar: 'فاعل مرفوع', id: 'Fa\'il marfu\'', en: 'Subject, nominative' } },
      { word: 'كِتَاباً', role: 'maf\'ul-bih', roleLabel: { ar: 'مفعول به', id: 'Maf\'ul bih', en: 'Object' }, explanation: { ar: 'مفعول به منصوب بالفتحة', id: 'Maf\'ul bih manshub dengan fathah', en: 'Object, accusative' } },
      { word: 'مُفِيداً', role: 'na\'t', roleLabel: { ar: 'نعت', id: 'Na\'t (sifat)', en: 'Adjective' }, explanation: { ar: 'نعت منصوب تابع لكتاباً', id: 'Na\'t manshub, mengikuti كتاباً', en: 'Adjective, accusative, following the noun' } },
    ],
    targetWordIndex: 3,
    options: ['نعت', 'حال', 'مفعول به', 'خبر'],
    correctRole: 'نعت',
  },
  {
    id: 'ia-010',
    sentence: 'فِي المَسْجِدِ رَجُلٌ',
    translation: { id: 'Di masjid ada seorang pria', en: 'In the mosque there is a man' },
    words: [
      { word: 'فِي', role: 'harf-jar', roleLabel: { ar: 'حرف جر', id: 'Huruf jar', en: 'Preposition' }, explanation: { ar: 'حرف جر', id: 'Huruf jar', en: 'Preposition' } },
      { word: 'المَسْجِدِ', role: 'majrur', roleLabel: { ar: 'اسم مجرور', id: 'Isim majrur', en: 'Genitive noun' }, explanation: { ar: 'اسم مجرور بالكسرة وهو خبر مقدم', id: 'Isim majrur, sekaligus khabar muqaddam', en: 'Genitive noun, also a fronted predicate' } },
      { word: 'رَجُلٌ', role: 'mubtada-muakhkhar', roleLabel: { ar: 'مبتدأ مؤخر', id: 'Mubtada muakhkhar', en: 'Delayed subject' }, explanation: { ar: 'مبتدأ مؤخر مرفوع بالضمة', id: 'Mubtada muakhkhar marfu\' dengan dhammah', en: 'Delayed subject, nominative' } },
    ],
    targetWordIndex: 2,
    options: ['مبتدأ مؤخر', 'فاعل', 'خبر', 'حال'],
    correctRole: 'مبتدأ مؤخر',
  },
  {
    id: 'ia-011',
    sentence: 'لَمْ يَكْتُبْ الدَّرْسَ',
    translation: { id: 'Dia tidak menulis pelajaran', en: 'He did not write the lesson' },
    words: [
      { word: 'لَمْ', role: 'harf-jazm', roleLabel: { ar: 'حرف جزم', id: 'Huruf jazm', en: 'Jussive particle' }, explanation: { ar: 'حرف نفي وجزم', id: 'Huruf nafi dan jazm', en: 'Negation and jussive particle' } },
      { word: 'يَكْتُبْ', role: 'fi\'il-majzum', roleLabel: { ar: 'فعل مجزوم', id: 'Fi\'il majzum', en: 'Jussive verb' }, explanation: { ar: 'فعل مضارع مجزوم بالسكون', id: 'Fi\'il mudhari\' majzum dengan sukun', en: 'Present verb, jussive with sukun' } },
      { word: 'الدَّرْسَ', role: 'maf\'ul-bih', roleLabel: { ar: 'مفعول به', id: 'Maf\'ul bih', en: 'Object' }, explanation: { ar: 'مفعول به منصوب بالفتحة', id: 'Maf\'ul bih manshub dengan fathah', en: 'Object, accusative' } },
    ],
    targetWordIndex: 1,
    options: ['فعل مجزوم', 'فعل مرفوع', 'فعل منصوب', 'فعل ماضٍ'],
    correctRole: 'فعل مجزوم',
  },
  {
    id: 'ia-012',
    sentence: 'أُرِيدُ أَنْ أَدْرُسَ العَرَبِيَّةَ',
    translation: { id: 'Saya ingin belajar bahasa Arab', en: 'I want to study Arabic' },
    words: [
      { word: 'أُرِيدُ', role: 'fi\'il-mudari', roleLabel: { ar: 'فعل مضارع', id: 'Fi\'il mudhari\'', en: 'Present verb' }, explanation: { ar: 'فعل مضارع مرفوع', id: 'Fi\'il mudhari\' marfu\'', en: 'Present verb, indicative' } },
      { word: 'أَنْ', role: 'harf-nasb', roleLabel: { ar: 'حرف نصب', id: 'Huruf nashab', en: 'Subjunctive particle' }, explanation: { ar: 'حرف مصدري ونصب', id: 'Huruf mashdari dan nashab', en: 'Infinitive and subjunctive particle' } },
      { word: 'أَدْرُسَ', role: 'fi\'il-manshub', roleLabel: { ar: 'فعل منصوب', id: 'Fi\'il manshub', en: 'Subjunctive verb' }, explanation: { ar: 'فعل مضارع منصوب بالفتحة', id: 'Fi\'il mudhari\' manshub dengan fathah', en: 'Present verb, subjunctive' } },
      { word: 'العَرَبِيَّةَ', role: 'maf\'ul-bih', roleLabel: { ar: 'مفعول به', id: 'Maf\'ul bih', en: 'Object' }, explanation: { ar: 'مفعول به منصوب', id: 'Maf\'ul bih manshub', en: 'Object, accusative' } },
    ],
    targetWordIndex: 2,
    options: ['فعل منصوب', 'فعل مجزوم', 'فعل مرفوع', 'مفعول به'],
    correctRole: 'فعل منصوب',
  },
  {
    id: 'ia-013',
    sentence: 'عِنْدِي عِشْرُونَ كِتَاباً',
    translation: { id: 'Saya punya dua puluh buku', en: 'I have twenty books' },
    words: [
      { word: 'عِنْدِي', role: 'khabar-muqaddam', roleLabel: { ar: 'خبر مقدم', id: 'Khabar muqaddam', en: 'Fronted predicate' }, explanation: { ar: 'شبه جملة في محل رفع خبر مقدم', id: 'Syibh jumlah sebagai khabar muqaddam', en: 'Semi-sentence as fronted predicate' } },
      { word: 'عِشْرُونَ', role: 'mubtada-muakhkhar', roleLabel: { ar: 'مبتدأ مؤخر', id: 'Mubtada muakhkhar', en: 'Delayed subject' }, explanation: { ar: 'مبتدأ مؤخر مرفوع بالواو', id: 'Mubtada muakhkhar marfu\' dengan waw', en: 'Delayed subject, nominative with waw' } },
      { word: 'كِتَاباً', role: 'tamyiz', roleLabel: { ar: 'تمييز', id: 'Tamyiz', en: 'Specification' }, explanation: { ar: 'تمييز منصوب بالفتحة', id: 'Tamyiz manshub dengan fathah', en: 'Specification, accusative' } },
    ],
    targetWordIndex: 2,
    options: ['تمييز', 'مفعول به', 'حال', 'نعت'],
    correctRole: 'تمييز',
  },
  {
    id: 'ia-014',
    sentence: 'يَا طَالِبُ اجْتَهِدْ',
    translation: { id: 'Wahai siswa, bersungguh-sungguhlah', en: 'O student, be diligent' },
    words: [
      { word: 'يَا', role: 'harf-nida', roleLabel: { ar: 'حرف نداء', id: 'Huruf nida\'', en: 'Vocative particle' }, explanation: { ar: 'حرف نداء', id: 'Huruf nida\'', en: 'Vocative particle' } },
      { word: 'طَالِبُ', role: 'munada', roleLabel: { ar: 'منادى', id: 'Munada', en: 'Vocative noun' }, explanation: { ar: 'منادى مفرد معرفة مبني على الضم', id: 'Munada mufrad ma\'rifah mabni atas dhamm', en: 'Vocative, definite singular, built on damma' } },
      { word: 'اجْتَهِدْ', role: 'fi\'il-amr', roleLabel: { ar: 'فعل أمر', id: 'Fi\'il amr', en: 'Command verb' }, explanation: { ar: 'فعل أمر مبني على السكون', id: 'Fi\'il amr mabni atas sukun', en: 'Command verb, built on sukun' } },
    ],
    targetWordIndex: 1,
    options: ['منادى', 'مبتدأ', 'فاعل', 'مفعول به'],
    correctRole: 'منادى',
  },
  {
    id: 'ia-015',
    sentence: 'رَأَيْتُ طَالِباً مُجْتَهِداً',
    translation: { id: 'Saya melihat siswa yang rajin', en: 'I saw a diligent student' },
    words: [
      { word: 'رَأَيْتُ', role: 'fi\'il-fail', roleLabel: { ar: 'فعل + فاعل', id: 'Fi\'il + fa\'il', en: 'Verb + subject' }, explanation: { ar: 'فعل ماضٍ والتاء فاعل', id: 'Fi\'il madhi, ta\' adalah fa\'il', en: 'Past verb, ta is the subject' } },
      { word: 'طَالِباً', role: 'maf\'ul-bih', roleLabel: { ar: 'مفعول به', id: 'Maf\'ul bih', en: 'Object' }, explanation: { ar: 'مفعول به منصوب بالفتحة', id: 'Maf\'ul bih manshub dengan fathah', en: 'Object, accusative' } },
      { word: 'مُجْتَهِداً', role: 'na\'t', roleLabel: { ar: 'نعت', id: 'Na\'t (sifat)', en: 'Adjective' }, explanation: { ar: 'نعت منصوب تابع لـ"طالباً"', id: 'Na\'t manshub mengikuti "طالباً"', en: 'Adjective, accusative, follows the noun' } },
    ],
    targetWordIndex: 1,
    options: ['مفعول به', 'فاعل', 'حال', 'تمييز'],
    correctRole: 'مفعول به',
  },
];

export function getRandomIrabQuestions(count: number): IrabAnalyzerQuestion[] {
  const shuffled = [...irabAnalyzerQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
