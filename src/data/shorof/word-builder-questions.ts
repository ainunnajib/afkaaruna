import type { WordBuilderQuestion } from '@/types';

export const wordBuilderQuestions: WordBuilderQuestion[] = [
  // ============================================
  // Level 1 - Basic: فَاعِل and مَفْعُول patterns
  // ============================================
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
  {
    id: 'wb-011',
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
  {
    id: 'wb-012',
    root: 'ش-ر-ب',
    rootLetters: ['ش', 'ر', 'ب'],
    pattern: 'فَاعِل',
    targetWord: 'شَارِب',
    meaning: {
      ar: 'شارب - الشخص الذي يشرب',
      id: 'Peminum - orang yang minum',
      en: 'Drinker - one who drinks',
    },
  },
  {
    id: 'wb-013',
    root: 'ح-ف-ظ',
    rootLetters: ['ح', 'ف', 'ظ'],
    pattern: 'فَاعِل',
    targetWord: 'حَافِظ',
    meaning: {
      ar: 'حافظ - الشخص الذي يحفظ',
      id: 'Penghafal - orang yang menghafal',
      en: 'Memorizer - one who memorizes',
    },
  },
  {
    id: 'wb-014',
    root: 'ن-ص-ر',
    rootLetters: ['ن', 'ص', 'ر'],
    pattern: 'مَفْعُول',
    targetWord: 'مَنْصُور',
    meaning: {
      ar: 'منصور - الذي نُصِر',
      id: 'Yang ditolong',
      en: 'Helped - one who is helped',
    },
  },
  {
    id: 'wb-015',
    root: 'ح-م-د',
    rootLetters: ['ح', 'م', 'د'],
    pattern: 'مَفْعُول',
    targetWord: 'مَحْمُود',
    meaning: {
      ar: 'محمود - الذي حُمِد',
      id: 'Yang terpuji',
      en: 'Praised - one who is praised',
    },
  },
  {
    id: 'wb-016',
    root: 'ر-ز-ق',
    rootLetters: ['ر', 'ز', 'ق'],
    pattern: 'مَفْعُول',
    targetWord: 'مَرْزُوق',
    meaning: {
      ar: 'مرزوق - الذي رُزِق',
      id: 'Yang diberi rezeki',
      en: 'Provided for - one who is given sustenance',
    },
  },
  {
    id: 'wb-017',
    root: 'ش-ك-ر',
    rootLetters: ['ش', 'ك', 'ر'],
    pattern: 'فَاعِل',
    targetWord: 'شَاكِر',
    meaning: {
      ar: 'شاكر - الشخص الذي يشكر',
      id: 'Orang yang bersyukur',
      en: 'Grateful one - one who gives thanks',
    },
  },
  {
    id: 'wb-018',
    root: 'ش-ك-ر',
    rootLetters: ['ش', 'ك', 'ر'],
    pattern: 'مَفْعُول',
    targetWord: 'مَشْكُور',
    meaning: {
      ar: 'مشكور - الذي شُكِر',
      id: 'Yang disyukuri / diapresiasi',
      en: 'Thanked - one who is thanked',
    },
  },

  // ============================================
  // Level 2 - Intermediate: مَفْعَل، مَفْعِل، فَعِيل، فِعَال
  // ============================================
  {
    id: 'wb-019',
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
    id: 'wb-020',
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
    id: 'wb-021',
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
    id: 'wb-022',
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
    id: 'wb-023',
    root: 'ل-ع-ب',
    rootLetters: ['ل', 'ع', 'ب'],
    pattern: 'مَفْعَل',
    targetWord: 'مَلْعَب',
    meaning: {
      ar: 'ملعب - مكان اللعب',
      id: 'Lapangan - tempat bermain',
      en: 'Playground/field - place of play',
    },
  },
  {
    id: 'wb-024',
    root: 'ط-ب-خ',
    rootLetters: ['ط', 'ب', 'خ'],
    pattern: 'مَفْعَل',
    targetWord: 'مَطْبَخ',
    meaning: {
      ar: 'مطبخ - مكان الطبخ',
      id: 'Dapur - tempat memasak',
      en: 'Kitchen - place of cooking',
    },
  },
  {
    id: 'wb-025',
    root: 'ع-ر-ض',
    rootLetters: ['ع', 'ر', 'ض'],
    pattern: 'مَفْعِل',
    targetWord: 'مَعْرِض',
    meaning: {
      ar: 'معرض - مكان العرض',
      id: 'Pameran - tempat memamerkan',
      en: 'Exhibition - place of display',
    },
  },
  {
    id: 'wb-026',
    root: 'ك-ب-ر',
    rootLetters: ['ك', 'ب', 'ر'],
    pattern: 'فَعِيل',
    targetWord: 'كَبِير',
    meaning: {
      ar: 'كبير - صفة مشبهة بمعنى العظمة',
      id: 'Besar',
      en: 'Big/great',
    },
    hints: ['Shifah musyabbahah (kata sifat)', 'صفة مشبهة'],
  },
  {
    id: 'wb-027',
    root: 'ص-غ-ر',
    rootLetters: ['ص', 'غ', 'ر'],
    pattern: 'فَعِيل',
    targetWord: 'صَغِير',
    meaning: {
      ar: 'صغير - ضد الكبير',
      id: 'Kecil',
      en: 'Small/little',
    },
  },
  {
    id: 'wb-028',
    root: 'ج-م-ل',
    rootLetters: ['ج', 'م', 'ل'],
    pattern: 'فَعِيل',
    targetWord: 'جَمِيل',
    meaning: {
      ar: 'جميل - ذو جمال',
      id: 'Indah / tampan',
      en: 'Beautiful/handsome',
    },
  },
  {
    id: 'wb-029',
    root: 'ق-ر-ب',
    rootLetters: ['ق', 'ر', 'ب'],
    pattern: 'فَعِيل',
    targetWord: 'قَرِيب',
    meaning: {
      ar: 'قريب - ضد البعيد',
      id: 'Dekat',
      en: 'Near/close',
    },
  },
  {
    id: 'wb-030',
    root: 'ب-ع-د',
    rootLetters: ['ب', 'ع', 'د'],
    pattern: 'فَعِيل',
    targetWord: 'بَعِيد',
    meaning: {
      ar: 'بعيد - ضد القريب',
      id: 'Jauh',
      en: 'Far/distant',
    },
  },
  {
    id: 'wb-031',
    root: 'ع-ظ-م',
    rootLetters: ['ع', 'ظ', 'م'],
    pattern: 'فَعِيل',
    targetWord: 'عَظِيم',
    meaning: {
      ar: 'عظيم - ذو عظمة',
      id: 'Agung / besar',
      en: 'Great/mighty',
    },
  },
  {
    id: 'wb-032',
    root: 'ك-ت-ب',
    rootLetters: ['ك', 'ت', 'ب'],
    pattern: 'فِعَال',
    targetWord: 'كِتَاب',
    meaning: {
      ar: 'كتاب - ما يُكتب فيه',
      id: 'Buku / kitab',
      en: 'Book - something written in',
    },
    hints: ['Bentuk masdar/isim', 'مصدر أو اسم'],
  },
  {
    id: 'wb-033',
    root: 'ج-ه-د',
    rootLetters: ['ج', 'ه', 'د'],
    pattern: 'فِعَال',
    targetWord: 'جِهَاد',
    meaning: {
      ar: 'جهاد - بذل الجهد',
      id: 'Jihad - berjuang dengan sungguh-sungguh',
      en: 'Jihad - striving/effort',
    },
  },
  {
    id: 'wb-034',
    root: 'ح-س-ب',
    rootLetters: ['ح', 'س', 'ب'],
    pattern: 'فِعَال',
    targetWord: 'حِسَاب',
    meaning: {
      ar: 'حساب - العد والحسبة',
      id: 'Perhitungan / hisab',
      en: 'Calculation/account',
    },
  },
  {
    id: 'wb-035',
    root: 'ن-ك-ح',
    rootLetters: ['ن', 'ك', 'ح'],
    pattern: 'فِعَال',
    targetWord: 'نِكَاح',
    meaning: {
      ar: 'نكاح - الزواج',
      id: 'Pernikahan',
      en: 'Marriage',
    },
  },
  {
    id: 'wb-036',
    root: 'د-خ-ل',
    rootLetters: ['د', 'خ', 'ل'],
    pattern: 'مَفْعَل',
    targetWord: 'مَدْخَل',
    meaning: {
      ar: 'مدخل - مكان الدخول',
      id: 'Pintu masuk',
      en: 'Entrance - place of entering',
    },
  },
  {
    id: 'wb-037',
    root: 'خ-ر-ج',
    rootLetters: ['خ', 'ر', 'ج'],
    pattern: 'مَفْعَل',
    targetWord: 'مَخْرَج',
    meaning: {
      ar: 'مخرج - مكان الخروج',
      id: 'Pintu keluar',
      en: 'Exit - place of going out',
    },
  },

  // ============================================
  // Level 3 - Advanced: فَعَّال، تَفْعِيل، فُعُول، مِفْعَال، اِفْتِعَال
  // ============================================
  {
    id: 'wb-038',
    root: 'ن-ج-ر',
    rootLetters: ['ن', 'ج', 'ر'],
    pattern: 'فَعَّال',
    targetWord: 'نَجَّار',
    meaning: {
      ar: 'نجّار - صانع الأشياء من الخشب',
      id: 'Tukang kayu',
      en: 'Carpenter - one who works with wood',
    },
    hints: ['Shighah mubalaghah (penekanan)', 'صيغة المبالغة'],
  },
  {
    id: 'wb-039',
    root: 'خ-ب-ز',
    rootLetters: ['خ', 'ب', 'ز'],
    pattern: 'فَعَّال',
    targetWord: 'خَبَّاز',
    meaning: {
      ar: 'خبّاز - صانع الخبز',
      id: 'Tukang roti',
      en: 'Baker - one who makes bread',
    },
  },
  {
    id: 'wb-040',
    root: 'ح-د-د',
    rootLetters: ['ح', 'د', 'د'],
    pattern: 'فَعَّال',
    targetWord: 'حَدَّاد',
    meaning: {
      ar: 'حدّاد - صانع الحديد',
      id: 'Pandai besi',
      en: 'Blacksmith - one who works with iron',
    },
  },
  {
    id: 'wb-041',
    root: 'ر-س-م',
    rootLetters: ['ر', 'س', 'م'],
    pattern: 'فَعَّال',
    targetWord: 'رَسَّام',
    meaning: {
      ar: 'رسّام - من يرسم كثيراً',
      id: 'Pelukis',
      en: 'Painter/artist - one who draws a lot',
    },
  },
  {
    id: 'wb-042',
    root: 'ع-ل-م',
    rootLetters: ['ع', 'ل', 'م'],
    pattern: 'تَفْعِيل',
    targetWord: 'تَعْلِيم',
    meaning: {
      ar: 'تعليم - فعل التعليم',
      id: 'Pengajaran / pendidikan',
      en: 'Teaching/education',
    },
    hints: ['Masdar fi\'il tsulasi mazid', 'مصدر فعل ثلاثي مزيد'],
  },
  {
    id: 'wb-043',
    root: 'د-ر-ب',
    rootLetters: ['د', 'ر', 'ب'],
    pattern: 'تَفْعِيل',
    targetWord: 'تَدْرِيب',
    meaning: {
      ar: 'تدريب - التمرين والممارسة',
      id: 'Pelatihan / latihan',
      en: 'Training/practice',
    },
  },
  {
    id: 'wb-044',
    root: 'ن-ظ-م',
    rootLetters: ['ن', 'ظ', 'م'],
    pattern: 'تَفْعِيل',
    targetWord: 'تَنْظِيم',
    meaning: {
      ar: 'تنظيم - الترتيب والإدارة',
      id: 'Pengaturan / organisasi',
      en: 'Organization/arrangement',
    },
  },
  {
    id: 'wb-045',
    root: 'ص-م-م',
    rootLetters: ['ص', 'م', 'م'],
    pattern: 'تَفْعِيل',
    targetWord: 'تَصْمِيم',
    meaning: {
      ar: 'تصميم - وضع الخطة أو الشكل',
      id: 'Desain / rancangan',
      en: 'Design/planning',
    },
  },
  {
    id: 'wb-046',
    root: 'د-خ-ل',
    rootLetters: ['د', 'خ', 'ل'],
    pattern: 'فُعُول',
    targetWord: 'دُخُول',
    meaning: {
      ar: 'دخول - فعل الدخول',
      id: 'Masuk (kata benda)',
      en: 'Entering/entry',
    },
    hints: ['Masdar (kata benda verbal)', 'مصدر'],
  },
  {
    id: 'wb-047',
    root: 'خ-ر-ج',
    rootLetters: ['خ', 'ر', 'ج'],
    pattern: 'فُعُول',
    targetWord: 'خُرُوج',
    meaning: {
      ar: 'خروج - فعل الخروج',
      id: 'Keluar (kata benda)',
      en: 'Going out/exit',
    },
  },
  {
    id: 'wb-048',
    root: 'ج-ل-س',
    rootLetters: ['ج', 'ل', 'س'],
    pattern: 'فُعُول',
    targetWord: 'جُلُوس',
    meaning: {
      ar: 'جلوس - فعل الجلوس',
      id: 'Duduk (kata benda)',
      en: 'Sitting (noun)',
    },
  },
  {
    id: 'wb-049',
    root: 'ف-ت-ح',
    rootLetters: ['ف', 'ت', 'ح'],
    pattern: 'مِفْتَاح',
    targetWord: 'مِفْتَاح',
    meaning: {
      ar: 'مفتاح - آلة الفتح',
      id: 'Kunci',
      en: 'Key - instrument of opening',
    },
    hints: ['Ism alat (kata alat)', 'اسم الآلة'],
  },
  {
    id: 'wb-050',
    root: 'ق-ص-ص',
    rootLetters: ['ق', 'ص', 'ص'],
    pattern: 'مِفْعَال',
    targetWord: 'مِقْصَاص',
    meaning: {
      ar: 'مقصاص - آلة القص',
      id: 'Gunting',
      en: 'Scissors - instrument of cutting',
    },
  },
  {
    id: 'wb-051',
    root: 'ن-ش-ر',
    rootLetters: ['ن', 'ش', 'ر'],
    pattern: 'مِفْعَال',
    targetWord: 'مِنْشَار',
    meaning: {
      ar: 'منشار - آلة النشر',
      id: 'Gergaji',
      en: 'Saw - instrument of sawing',
    },
  },
  {
    id: 'wb-052',
    root: 'ج-م-ع',
    rootLetters: ['ج', 'م', 'ع'],
    pattern: 'اِفْتِعَال',
    targetWord: 'اِجْتِمَاع',
    meaning: {
      ar: 'اجتماع - التجمع',
      id: 'Pertemuan / rapat',
      en: 'Meeting/gathering',
    },
    hints: ['Masdar bab ifti\'al', 'مصدر باب الافتعال'],
  },
  {
    id: 'wb-053',
    root: 'ح-ت-ر',
    rootLetters: ['ح', 'ت', 'ر'],
    pattern: 'اِفْتِعَال',
    targetWord: 'اِحْتِرَام',
    meaning: {
      ar: 'احترام - التقدير',
      id: 'Penghormatan',
      en: 'Respect/honor',
    },
  },
  {
    id: 'wb-054',
    root: 'ف-ت-ق',
    rootLetters: ['ف', 'ت', 'ق'],
    pattern: 'اِفْتِعَال',
    targetWord: 'اِفْتِقَار',
    meaning: {
      ar: 'افتقار - الحاجة الشديدة',
      id: 'Kekurangan / kebutuhan',
      en: 'Need/lack',
    },
  },
  {
    id: 'wb-055',
    root: 'ح-ك-م',
    rootLetters: ['ح', 'ك', 'م'],
    pattern: 'فَعِيل',
    targetWord: 'حَكِيم',
    meaning: {
      ar: 'حكيم - ذو حكمة',
      id: 'Orang bijak',
      en: 'Wise person',
    },
  },
  {
    id: 'wb-056',
    root: 'ر-ح-م',
    rootLetters: ['ر', 'ح', 'م'],
    pattern: 'فَعِيل',
    targetWord: 'رَحِيم',
    meaning: {
      ar: 'رحيم - ذو رحمة',
      id: 'Yang maha penyayang',
      en: 'Merciful',
    },
  },
  {
    id: 'wb-057',
    root: 'ق-د-ر',
    rootLetters: ['ق', 'د', 'ر'],
    pattern: 'فَعِيل',
    targetWord: 'قَدِير',
    meaning: {
      ar: 'قدير - ذو قدرة',
      id: 'Yang maha kuasa',
      en: 'Powerful/capable',
    },
  },
  {
    id: 'wb-058',
    root: 'ع-ل-م',
    rootLetters: ['ع', 'ل', 'م'],
    pattern: 'فَعِيل',
    targetWord: 'عَلِيم',
    meaning: {
      ar: 'عليم - ذو علم واسع',
      id: 'Yang maha mengetahui',
      en: 'All-knowing',
    },
  },
];

// Difficulty levels
export type QuestionDifficulty = 'easy' | 'medium' | 'hard';

// Get questions by difficulty
export function getQuestionsByDifficulty(difficulty: QuestionDifficulty): WordBuilderQuestion[] {
  switch (difficulty) {
    case 'easy':
      return wordBuilderQuestions.slice(0, 18); // Level 1: فاعل and مفعول
    case 'medium':
      return wordBuilderQuestions.slice(18, 37); // Level 2: مفعل, فعيل, فعال
    case 'hard':
      return wordBuilderQuestions.slice(37); // Level 3: فعّال, تفعيل, افتعال
    default:
      return wordBuilderQuestions;
  }
}

// Get questions for a specific level (backward compatible)
export function getQuestionsByLevel(level: number): WordBuilderQuestion[] {
  switch (level) {
    case 1:
      return getQuestionsByDifficulty('easy');
    case 2:
      return getQuestionsByDifficulty('medium');
    case 3:
      return getQuestionsByDifficulty('hard');
    default:
      return wordBuilderQuestions;
  }
}

// Get random questions with difficulty mixing
export function getRandomQuestions(count: number, difficulty?: QuestionDifficulty): WordBuilderQuestion[] {
  const pool = difficulty ? getQuestionsByDifficulty(difficulty) : wordBuilderQuestions;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Get mixed difficulty questions (for standard game sessions)
export function getMixedQuestions(count: number): WordBuilderQuestion[] {
  const easy = getQuestionsByDifficulty('easy');
  const medium = getQuestionsByDifficulty('medium');
  const hard = getQuestionsByDifficulty('hard');

  // Mix: 40% easy, 35% medium, 25% hard
  const easyCount = Math.round(count * 0.4);
  const mediumCount = Math.round(count * 0.35);
  const hardCount = count - easyCount - mediumCount;

  const selected = [
    ...easy.sort(() => Math.random() - 0.5).slice(0, easyCount),
    ...medium.sort(() => Math.random() - 0.5).slice(0, mediumCount),
    ...hard.sort(() => Math.random() - 0.5).slice(0, hardCount),
  ];

  // Shuffle the final selection
  return selected.sort(() => Math.random() - 0.5);
}
