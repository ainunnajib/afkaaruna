export interface StoryQuestion {
  id: string;
  question: { ar: string; id: string; en: string };
  options: string[];
  correctAnswer: string;
  explanation: { ar: string; id: string; en: string };
}

export interface Story {
  id: string;
  title: { ar: string; id: string; en: string };
  text: string;
  translation: { id: string; en: string };
  vocabulary: Array<{ word: string; meaning: { id: string; en: string } }>;
  questions: StoryQuestion[];
  difficulty: 'easy' | 'medium' | 'hard';
}

export const stories: Story[] = [
  {
    id: 'story-001',
    title: { ar: 'في المدرسة', id: 'Di Sekolah', en: 'At School' },
    difficulty: 'easy',
    text: 'ذَهَبَ أحمدُ إلى المدرسةِ صباحاً. جَلَسَ على كرسيِّهِ وفَتَحَ كتابَهُ. قالَ المعلمُ: "اقرأوا الدرسَ". قرأَ أحمدُ الدرسَ بصوتٍ عالٍ.',
    translation: {
      id: 'Ahmad pergi ke sekolah di pagi hari. Dia duduk di kursinya dan membuka bukunya. Guru berkata: "Bacalah pelajarannya". Ahmad membaca pelajaran itu dengan suara keras.',
      en: 'Ahmad went to school in the morning. He sat on his chair and opened his book. The teacher said: "Read the lesson". Ahmad read the lesson in a loud voice.',
    },
    vocabulary: [
      { word: 'صباحاً', meaning: { id: 'di pagi hari', en: 'in the morning' } },
      { word: 'كرسيّ', meaning: { id: 'kursi', en: 'chair' } },
      { word: 'بصوتٍ عالٍ', meaning: { id: 'dengan suara keras', en: 'in a loud voice' } },
    ],
    questions: [
      {
        id: 'sq-001-1',
        question: { ar: 'ما إعراب "أحمدُ" في "ذهبَ أحمدُ"?', id: 'Apa i\'rab "أحمدُ" dalam "ذهبَ أحمدُ"?', en: 'What is the i\'rab of "أحمدُ" in "ذهبَ أحمدُ"?' },
        options: ['فاعل مرفوع', 'مبتدأ مرفوع', 'مفعول به منصوب', 'خبر مرفوع'],
        correctAnswer: 'فاعل مرفوع',
        explanation: { ar: 'أحمدُ فاعل مرفوع بالضمة لأنه وقع بعد الفعل', id: 'أحمدُ adalah fa\'il marfu\' dengan dhammah karena jatuh setelah fi\'il', en: 'أحمدُ is the subject (fa\'il), nominative with damma, coming after the verb' },
      },
      {
        id: 'sq-001-2',
        question: { ar: 'ما إعراب "كتابَهُ" في "فتحَ كتابَهُ"?', id: 'Apa i\'rab "كتابَهُ" dalam "فتحَ كتابَهُ"?', en: 'What is the i\'rab of "كتابَهُ" in "فتحَ كتابَهُ"?' },
        options: ['مفعول به منصوب', 'فاعل مرفوع', 'مضاف إليه مجرور', 'خبر مرفوع'],
        correctAnswer: 'مفعول به منصوب',
        explanation: { ar: 'كتابَهُ مفعول به منصوب لأنه وقع عليه فعل الفاعل', id: 'كتابَهُ adalah maf\'ul bih manshub karena perbuatan fa\'il jatuh padanya', en: 'كتابَهُ is the object, accusative, receiving the action' },
      },
      {
        id: 'sq-001-3',
        question: { ar: 'ما إعراب "المعلمُ" في "قالَ المعلمُ"?', id: 'Apa i\'rab "المعلمُ" dalam "قالَ المعلمُ"?', en: 'What is the i\'rab of "المعلمُ" in "قالَ المعلمُ"?' },
        options: ['فاعل مرفوع', 'مبتدأ', 'مفعول به', 'بدل'],
        correctAnswer: 'فاعل مرفوع',
        explanation: { ar: 'المعلمُ فاعل مرفوع بالضمة', id: 'المعلمُ adalah fa\'il marfu\' dengan dhammah', en: 'المعلمُ is the subject, nominative with damma' },
      },
    ],
  },
  {
    id: 'story-002',
    title: { ar: 'في السوق', id: 'Di Pasar', en: 'At the Market' },
    difficulty: 'easy',
    text: 'ذهبتْ فاطمةُ إلى السوقِ. اشترتْ تفاحاً أحمرَ وخبزاً طازجاً. كانَ البائعُ لطيفاً. قالتْ فاطمةُ: "شكراً لك".',
    translation: {
      id: 'Fatimah pergi ke pasar. Dia membeli apel merah dan roti segar. Penjualnya ramah. Fatimah berkata: "Terima kasih".',
      en: 'Fatima went to the market. She bought red apples and fresh bread. The seller was kind. Fatima said: "Thank you".',
    },
    vocabulary: [
      { word: 'تفاح', meaning: { id: 'apel', en: 'apples' } },
      { word: 'خبز', meaning: { id: 'roti', en: 'bread' } },
      { word: 'طازج', meaning: { id: 'segar', en: 'fresh' } },
      { word: 'البائع', meaning: { id: 'penjual', en: 'the seller' } },
    ],
    questions: [
      {
        id: 'sq-002-1',
        question: { ar: 'ما إعراب "أحمرَ" في "تفاحاً أحمرَ"?', id: 'Apa i\'rab "أحمرَ" dalam "تفاحاً أحمرَ"?', en: 'What is the i\'rab of "أحمرَ" in "تفاحاً أحمرَ"?' },
        options: ['نعت منصوب', 'حال منصوب', 'مفعول به', 'تمييز'],
        correctAnswer: 'نعت منصوب',
        explanation: { ar: 'أحمرَ نعت منصوب يتبع "تفاحاً" في الإعراب', id: 'أحمرَ adalah na\'t manshub mengikuti "تفاحاً" dalam i\'rab', en: '"أحمرَ" is an adjective (na\'t), accusative, following "تفاحاً"' },
      },
      {
        id: 'sq-002-2',
        question: { ar: 'ما إعراب "لطيفاً" في "كانَ البائعُ لطيفاً"?', id: 'Apa i\'rab "لطيفاً" dalam "كانَ البائعُ لطيفاً"?', en: 'What is the i\'rab of "لطيفاً" in "كانَ البائعُ لطيفاً"?' },
        options: ['خبر كان منصوب', 'حال', 'نعت', 'مفعول به'],
        correctAnswer: 'خبر كان منصوب',
        explanation: { ar: 'لطيفاً خبر كان منصوب بالفتحة', id: 'لطيفاً adalah khabar kana manshub dengan fathah', en: '"لطيفاً" is the predicate of kana, accusative' },
      },
      {
        id: 'sq-002-3',
        question: { ar: 'ما إعراب "السوقِ" في "إلى السوقِ"?', id: 'Apa i\'rab "السوقِ" dalam "إلى السوقِ"?', en: 'What is the i\'rab of "السوقِ" in "إلى السوقِ"?' },
        options: ['اسم مجرور', 'مفعول به', 'فاعل', 'مضاف إليه'],
        correctAnswer: 'اسم مجرور',
        explanation: { ar: 'السوقِ اسم مجرور بحرف الجر "إلى"', id: 'السوقِ adalah isim majrur oleh huruf jar "إلى"', en: '"السوقِ" is genitive, governed by preposition "إلى"' },
      },
    ],
  },
  {
    id: 'story-003',
    title: { ar: 'يوم الجمعة', id: 'Hari Jumat', en: 'Friday' },
    difficulty: 'medium',
    text: 'إنَّ يومَ الجمعةِ يومٌ مباركٌ. يذهبُ المسلمونَ إلى المساجدِ لأداءِ صلاةِ الجمعةِ. يستمعونَ إلى خطبةِ الإمامِ ثم يصلّونَ جماعةً.',
    translation: {
      id: 'Sesungguhnya hari Jumat adalah hari yang penuh berkah. Umat Muslim pergi ke masjid-masjid untuk menunaikan shalat Jumat. Mereka mendengarkan khutbah imam kemudian shalat berjamaah.',
      en: 'Indeed, Friday is a blessed day. Muslims go to mosques to perform Friday prayer. They listen to the imam\'s sermon then pray in congregation.',
    },
    vocabulary: [
      { word: 'مبارك', meaning: { id: 'penuh berkah', en: 'blessed' } },
      { word: 'المساجد', meaning: { id: 'masjid-masjid', en: 'mosques' } },
      { word: 'خطبة', meaning: { id: 'khutbah', en: 'sermon' } },
      { word: 'جماعة', meaning: { id: 'berjamaah', en: 'in congregation' } },
    ],
    questions: [
      {
        id: 'sq-003-1',
        question: { ar: 'ما إعراب "يومَ" في "إنَّ يومَ الجمعةِ"?', id: 'Apa i\'rab "يومَ" dalam "إنَّ يومَ الجمعةِ"?', en: 'What is the i\'rab of "يومَ" in "إنَّ يومَ الجمعةِ"?' },
        options: ['اسم إنّ منصوب', 'مبتدأ مرفوع', 'ظرف زمان', 'مفعول به'],
        correctAnswer: 'اسم إنّ منصوب',
        explanation: { ar: 'يومَ اسم إنّ منصوب بالفتحة', id: 'يومَ adalah isim inna manshub dengan fathah', en: '"يومَ" is the noun of inna, accusative' },
      },
      {
        id: 'sq-003-2',
        question: { ar: 'ما إعراب "جماعةً" في "يصلّون جماعةً"?', id: 'Apa i\'rab "جماعةً" dalam "يصلّون جماعةً"?', en: 'What is the i\'rab of "جماعةً" in "يصلّون جماعةً"?' },
        options: ['حال منصوب', 'مفعول به', 'تمييز', 'نعت'],
        correctAnswer: 'حال منصوب',
        explanation: { ar: 'جماعةً حال منصوب يبين هيئة الصلاة', id: 'جماعةً adalah hal manshub yang menjelaskan keadaan shalat', en: '"جماعةً" is a hal (circumstantial), accusative, describing how they pray' },
      },
      {
        id: 'sq-003-3',
        question: { ar: 'ما إعراب "الإمامِ" في "خطبةِ الإمامِ"?', id: 'Apa i\'rab "الإمامِ" dalam "خطبةِ الإمامِ"?', en: 'What is the i\'rab of "الإمامِ" in "خطبةِ الإمامِ"?' },
        options: ['مضاف إليه مجرور', 'فاعل', 'اسم مجرور', 'نعت'],
        correctAnswer: 'مضاف إليه مجرور',
        explanation: { ar: 'الإمامِ مضاف إليه مجرور بالكسرة', id: 'الإمامِ adalah mudhaf ilaih majrur dengan kasrah', en: '"الإمامِ" is mudaf ilayhi, genitive' },
      },
    ],
  },
  {
    id: 'story-004',
    title: { ar: 'الحديقة', id: 'Taman', en: 'The Garden' },
    difficulty: 'medium',
    text: 'ليسَ الجوُّ حاراً اليومَ. خرجَ الأطفالُ إلى الحديقةِ فرحينَ. لعبوا بالكرةِ ساعةً كاملةً. كانتِ الأشجارُ خضراءَ والزهورُ جميلةً.',
    translation: {
      id: 'Cuaca hari ini tidak panas. Anak-anak keluar ke taman dengan gembira. Mereka bermain bola selama satu jam penuh. Pohon-pohon hijau dan bunga-bunga indah.',
      en: 'The weather is not hot today. The children went out to the garden happily. They played with the ball for a full hour. The trees were green and the flowers were beautiful.',
    },
    vocabulary: [
      { word: 'حار', meaning: { id: 'panas', en: 'hot' } },
      { word: 'الحديقة', meaning: { id: 'taman', en: 'the garden' } },
      { word: 'الأشجار', meaning: { id: 'pohon-pohon', en: 'trees' } },
      { word: 'الزهور', meaning: { id: 'bunga-bunga', en: 'flowers' } },
    ],
    questions: [
      {
        id: 'sq-004-1',
        question: { ar: 'ما إعراب "حاراً" في "ليسَ الجوُّ حاراً"?', id: 'Apa i\'rab "حاراً" dalam "ليسَ الجوُّ حاراً"?', en: 'What is the i\'rab of "حاراً" in "ليسَ الجوُّ حاراً"?' },
        options: ['خبر ليس منصوب', 'حال', 'نعت', 'مفعول به'],
        correctAnswer: 'خبر ليس منصوب',
        explanation: { ar: 'حاراً خبر ليس منصوب بالفتحة', id: 'حاراً adalah khabar laisa manshub dengan fathah', en: '"حاراً" is the predicate of laisa, accusative' },
      },
      {
        id: 'sq-004-2',
        question: { ar: 'ما إعراب "فرحينَ" في "خرجَ الأطفالُ فرحينَ"?', id: 'Apa i\'rab "فرحينَ" dalam "خرجَ الأطفالُ فرحينَ"?', en: 'What is the i\'rab of "فرحينَ" in "خرجَ الأطفالُ فرحينَ"?' },
        options: ['حال منصوب', 'نعت', 'خبر', 'مفعول به'],
        correctAnswer: 'حال منصوب',
        explanation: { ar: 'فرحينَ حال منصوب بالياء لأنه جمع مذكر سالم', id: 'فرحينَ adalah hal manshub dengan ya\' karena jamak mudzakkar salim', en: '"فرحينَ" is hal (circumstantial), accusative with ya (masculine plural)' },
      },
      {
        id: 'sq-004-3',
        question: { ar: 'ما إعراب "ساعةً" في "لعبوا ساعةً"?', id: 'Apa i\'rab "ساعةً" dalam "لعبوا ساعةً"?', en: 'What is the i\'rab of "ساعةً" in "لعبوا ساعةً"?' },
        options: ['ظرف زمان منصوب', 'مفعول به', 'حال', 'تمييز'],
        correctAnswer: 'ظرف زمان منصوب',
        explanation: { ar: 'ساعةً ظرف زمان منصوب بالفتحة', id: 'ساعةً adalah zharaf zaman manshub dengan fathah', en: '"ساعةً" is an adverb of time, accusative' },
      },
    ],
  },
  {
    id: 'story-005',
    title: { ar: 'رسالة إلى صديق', id: 'Surat untuk Teman', en: 'A Letter to a Friend' },
    difficulty: 'hard',
    text: 'كتبَ خالدٌ رسالةً طويلةً إلى صديقِهِ. قالَ فيها: "لعلَّ الأيامَ تجمعُنا قريباً. إنَّ الصداقةَ كنزٌ لا يُقَدَّرُ بثمنٍ". أرسلَ الرسالةَ مسروراً.',
    translation: {
      id: 'Khalid menulis surat panjang kepada temannya. Dia berkata di dalamnya: "Semoga hari-hari akan mempertemukan kita segera. Sesungguhnya persahabatan adalah harta yang tidak ternilai". Dia mengirim surat itu dengan gembira.',
      en: 'Khalid wrote a long letter to his friend. He said in it: "Perhaps the days will bring us together soon. Indeed, friendship is a priceless treasure". He sent the letter happily.',
    },
    vocabulary: [
      { word: 'رسالة', meaning: { id: 'surat', en: 'letter' } },
      { word: 'الصداقة', meaning: { id: 'persahabatan', en: 'friendship' } },
      { word: 'كنز', meaning: { id: 'harta/kekayaan', en: 'treasure' } },
      { word: 'ثمن', meaning: { id: 'harga', en: 'price' } },
    ],
    questions: [
      {
        id: 'sq-005-1',
        question: { ar: 'ما إعراب "الأيامَ" في "لعلَّ الأيامَ"?', id: 'Apa i\'rab "الأيامَ" dalam "لعلَّ الأيامَ"?', en: 'What is the i\'rab of "الأيامَ" in "لعلَّ الأيامَ"?' },
        options: ['اسم لعلّ منصوب', 'مبتدأ', 'مفعول به', 'فاعل'],
        correctAnswer: 'اسم لعلّ منصوب',
        explanation: { ar: 'الأيامَ اسم لعلّ منصوب بالفتحة', id: 'الأيامَ adalah isim la\'alla manshub dengan fathah', en: '"الأيامَ" is the noun of la\'alla, accusative' },
      },
      {
        id: 'sq-005-2',
        question: { ar: 'ما إعراب "طويلةً" في "رسالةً طويلةً"?', id: 'Apa i\'rab "طويلةً" dalam "رسالةً طويلةً"?', en: 'What is the i\'rab of "طويلةً" in "رسالةً طويلةً"?' },
        options: ['نعت منصوب', 'حال', 'خبر', 'تمييز'],
        correctAnswer: 'نعت منصوب',
        explanation: { ar: 'طويلةً نعت منصوب يتبع "رسالةً"', id: 'طويلةً adalah na\'t manshub mengikuti "رسالةً"', en: '"طويلةً" is an adjective (na\'t), accusative, following "رسالةً"' },
      },
      {
        id: 'sq-005-3',
        question: { ar: 'ما إعراب "مسروراً" في "أرسلَ الرسالةَ مسروراً"?', id: 'Apa i\'rab "مسروراً" dalam "أرسلَ الرسالةَ مسروراً"?', en: 'What is the i\'rab of "مسروراً" in "أرسلَ الرسالةَ مسروراً"?' },
        options: ['حال منصوب', 'نعت', 'مفعول به ثانٍ', 'تمييز'],
        correctAnswer: 'حال منصوب',
        explanation: { ar: 'مسروراً حال منصوب يبين حالة الفاعل عند الإرسال', id: 'مسروراً adalah hal manshub yang menjelaskan keadaan fa\'il saat mengirim', en: '"مسروراً" is hal (circumstantial), describing the subject\'s state when sending' },
      },
    ],
  },
];

export function getRandomStories(count: number, difficulty?: 'easy' | 'medium' | 'hard'): Story[] {
  const pool = difficulty ? stories.filter(s => s.difficulty === difficulty) : stories;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
