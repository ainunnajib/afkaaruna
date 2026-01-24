export interface GrammarMatchPair {
  id: string;
  term: string;
  definition: string;
  category: 'nahwu' | 'shorof';
}

export const grammarMatchPairs: GrammarMatchPair[] = [
  // Nahwu terms
  { id: 'gm-001', term: 'المبتدأ', definition: 'الاسم المرفوع في أول الجملة الاسمية', category: 'nahwu' },
  { id: 'gm-002', term: 'الخبر', definition: 'ما يُخبَر به عن المبتدأ', category: 'nahwu' },
  { id: 'gm-003', term: 'الفاعل', definition: 'الاسم المرفوع الذي يدل على من قام بالفعل', category: 'nahwu' },
  { id: 'gm-004', term: 'المفعول به', definition: 'الاسم المنصوب الذي وقع عليه فعل الفاعل', category: 'nahwu' },
  { id: 'gm-005', term: 'حرف الجر', definition: 'حرف يجر الاسم بعده (في، من، إلى، على، عن)', category: 'nahwu' },
  { id: 'gm-006', term: 'المضاف إليه', definition: 'الاسم المجرور الذي يأتي بعد المضاف', category: 'nahwu' },
  { id: 'gm-007', term: 'النعت', definition: 'التابع الذي يصف الموصوف ويتبعه في الإعراب', category: 'nahwu' },
  { id: 'gm-008', term: 'الحال', definition: 'الاسم المنصوب الذي يبين هيئة صاحبه', category: 'nahwu' },
  { id: 'gm-009', term: 'التمييز', definition: 'الاسم المنصوب الذي يزيل الإبهام', category: 'nahwu' },
  { id: 'gm-010', term: 'المرفوع', definition: 'الكلمة المضمومة الآخر (بالضمة)', category: 'nahwu' },
  { id: 'gm-011', term: 'المنصوب', definition: 'الكلمة المفتوحة الآخر (بالفتحة)', category: 'nahwu' },
  { id: 'gm-012', term: 'المجرور', definition: 'الكلمة المكسورة الآخر (بالكسرة)', category: 'nahwu' },
  { id: 'gm-013', term: 'إنَّ وأخواتها', definition: 'تنصب المبتدأ وترفع الخبر', category: 'nahwu' },
  { id: 'gm-014', term: 'كان وأخواتها', definition: 'ترفع المبتدأ وتنصب الخبر', category: 'nahwu' },
  { id: 'gm-015', term: 'المنادى', definition: 'الاسم المطلوب إقباله بحرف نداء (يا)', category: 'nahwu' },
  { id: 'gm-016', term: 'الجملة الاسمية', definition: 'جملة تبدأ باسم (مبتدأ وخبر)', category: 'nahwu' },
  { id: 'gm-017', term: 'الجملة الفعلية', definition: 'جملة تبدأ بفعل (فعل وفاعل)', category: 'nahwu' },
  { id: 'gm-018', term: 'المجزوم', definition: 'الفعل المضارع الساكن الآخر (بالسكون)', category: 'nahwu' },
  { id: 'gm-019', term: 'ظرف الزمان', definition: 'اسم منصوب يدل على زمان وقوع الفعل', category: 'nahwu' },
  { id: 'gm-020', term: 'ظرف المكان', definition: 'اسم منصوب يدل على مكان وقوع الفعل', category: 'nahwu' },

  // Shorof terms
  { id: 'gm-021', term: 'اسم الفاعل', definition: 'اسم مشتق يدل على من قام بالفعل (فَاعِل)', category: 'shorof' },
  { id: 'gm-022', term: 'اسم المفعول', definition: 'اسم مشتق يدل على من وقع عليه الفعل (مَفْعُول)', category: 'shorof' },
  { id: 'gm-023', term: 'اسم المكان', definition: 'اسم مشتق يدل على مكان الفعل (مَفْعَل)', category: 'shorof' },
  { id: 'gm-024', term: 'اسم الآلة', definition: 'اسم مشتق يدل على الأداة (مِفْعَال)', category: 'shorof' },
  { id: 'gm-025', term: 'المصدر', definition: 'اسم يدل على الحدث مجرداً من الزمان', category: 'shorof' },
  { id: 'gm-026', term: 'الفعل الماضي', definition: 'فعل يدل على حدث وقع قبل زمن التكلم', category: 'shorof' },
  { id: 'gm-027', term: 'الفعل المضارع', definition: 'فعل يدل على حدث في الحاضر أو المستقبل', category: 'shorof' },
  { id: 'gm-028', term: 'فعل الأمر', definition: 'فعل يطلب حدوث شيء في المستقبل', category: 'shorof' },
  { id: 'gm-029', term: 'الجذر الثلاثي', definition: 'أصل الكلمة المكون من ثلاثة حروف', category: 'shorof' },
  { id: 'gm-030', term: 'الوزن', definition: 'القالب الصرفي الذي تُبنى عليه الكلمات', category: 'shorof' },
  { id: 'gm-031', term: 'صيغة المبالغة', definition: 'اسم يدل على كثرة الفعل (فَعَّال، فَعُول)', category: 'shorof' },
  { id: 'gm-032', term: 'الصفة المشبهة', definition: 'صفة ثابتة في صاحبها (فَعِيل، فَعِل)', category: 'shorof' },
  { id: 'gm-033', term: 'التصريف', definition: 'تحويل الكلمة من صيغة إلى أخرى', category: 'shorof' },
  { id: 'gm-034', term: 'المزيد', definition: 'الفعل الذي زيد فيه حرف أو أكثر على أصله', category: 'shorof' },
  { id: 'gm-035', term: 'المجرد', definition: 'الفعل الذي جميع حروفه أصلية', category: 'shorof' },
  { id: 'gm-036', term: 'اسم التفضيل', definition: 'اسم مشتق على وزن أَفْعَل للمقارنة', category: 'shorof' },
  { id: 'gm-037', term: 'الجمع', definition: 'ما دلّ على أكثر من اثنين', category: 'shorof' },
  { id: 'gm-038', term: 'المثنى', definition: 'ما دلّ على اثنين بزيادة ان أو ين', category: 'shorof' },
  { id: 'gm-039', term: 'المذكر', definition: 'اسم يدل على ذكر من الناس أو الحيوان', category: 'shorof' },
  { id: 'gm-040', term: 'المؤنث', definition: 'اسم يدل على أنثى، وعلامته التاء المربوطة', category: 'shorof' },
];

// Trilingual display names
export const grammarMatchTranslations: Record<string, { id: string; en: string }> = {
  'المبتدأ': { id: 'Mubtada (Subyek)', en: 'Subject (Mubtada)' },
  'الخبر': { id: 'Khabar (Predikat)', en: 'Predicate (Khabar)' },
  'الفاعل': { id: 'Fa\'il (Pelaku)', en: 'Subject of Verb (Fa\'il)' },
  'المفعول به': { id: 'Maf\'ul bih (Objek)', en: 'Object (Maf\'ul Bih)' },
  'حرف الجر': { id: 'Huruf Jar (Preposisi)', en: 'Preposition (Harf al-Jar)' },
  'المضاف إليه': { id: 'Mudhaf Ilaih', en: 'Possessive Complement' },
  'النعت': { id: 'Na\'t (Sifat)', en: 'Adjective (Na\'t)' },
  'الحال': { id: 'Hal (Keterangan keadaan)', en: 'Circumstantial (Hal)' },
  'التمييز': { id: 'Tamyiz (Penjelas)', en: 'Specification (Tamyiz)' },
  'المرفوع': { id: 'Marfu\' (Rafa\')', en: 'Nominative (Marfu\')' },
  'المنصوب': { id: 'Manshub (Nashab)', en: 'Accusative (Manshub)' },
  'المجرور': { id: 'Majrur (Jar)', en: 'Genitive (Majrur)' },
  'إنَّ وأخواتها': { id: 'Inna & Saudaranya', en: 'Inna and Sisters' },
  'كان وأخواتها': { id: 'Kana & Saudaranya', en: 'Kana and Sisters' },
  'اسم الفاعل': { id: 'Isim Fa\'il', en: 'Active Participle' },
  'اسم المفعول': { id: 'Isim Maf\'ul', en: 'Passive Participle' },
  'اسم المكان': { id: 'Isim Makan', en: 'Noun of Place' },
  'اسم الآلة': { id: 'Isim Alat', en: 'Noun of Instrument' },
  'المصدر': { id: 'Mashdar', en: 'Verbal Noun (Masdar)' },
  'الفعل الماضي': { id: 'Fi\'il Madhi', en: 'Past Tense Verb' },
  'الفعل المضارع': { id: 'Fi\'il Mudhari\'', en: 'Present Tense Verb' },
  'فعل الأمر': { id: 'Fi\'il Amr', en: 'Imperative Verb' },
  'الجذر الثلاثي': { id: 'Akar Tsulasi', en: 'Triliteral Root' },
  'الوزن': { id: 'Wazan (Pola)', en: 'Pattern (Wazn)' },
  'صيغة المبالغة': { id: 'Shighah Mubalaghah', en: 'Intensive Form' },
  'الصفة المشبهة': { id: 'Shifah Musyabbahah', en: 'Resembling Adjective' },
};

// Get random pairs for a game session
export function getRandomPairs(count: number, category?: 'nahwu' | 'shorof'): GrammarMatchPair[] {
  const pool = category
    ? grammarMatchPairs.filter(p => p.category === category)
    : grammarMatchPairs;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
