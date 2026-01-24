import type { LessonContent } from '../nahwu/lessons';

export const shorofLessons: Record<string, LessonContent> = {
  'akar-kata': {
    id: 'akar-kata',
    title: { id: 'Akar Kata', ar: 'جذور الكلمات', en: 'Word Roots' },
    description: {
      id: 'Pelajari konsep dasar huruf asal (akar kata) dalam bahasa Arab',
      ar: 'تعلم مفهوم الحروف الأصلية (جذور الكلمات) في اللغة العربية',
      en: 'Learn the basic concept of root letters in Arabic',
    },
    sections: [
      {
        type: 'explanation',
        title: { id: 'Apa itu Akar Kata?', ar: 'ما هي جذور الكلمات؟', en: 'What are Word Roots?' },
        content: {
          id: 'Dalam bahasa Arab, kebanyakan kata berasal dari tiga huruf dasar yang disebut "akar kata" atau "huruf asli" (حروف أصلية). Dari akar ini, berbagai kata dengan makna terkait dapat dibentuk dengan menambahkan pola (wazan) tertentu.',
          ar: 'في اللغة العربية، معظم الكلمات تأتي من ثلاثة حروف أساسية تسمى "الجذر" أو "الحروف الأصلية". من هذا الجذر، يمكن تكوين كلمات مختلفة ذات معانٍ مرتبطة.',
          en: 'In Arabic, most words come from three basic letters called "root letters" (huruf asliyyah). From this root, various words with related meanings can be formed by applying patterns (wazan).',
        },
      },
      {
        type: 'example',
        title: { id: 'Contoh: Akar ك-ت-ب', ar: 'مثال: جذر ك-ت-ب', en: 'Example: Root ك-ت-ب' },
        content: {
          id: 'Akar ك-ت-ب (ka-ta-ba) berhubungan dengan makna "menulis". Perhatikan kata-kata yang terbentuk:',
          ar: 'جذر ك-ت-ب يتعلق بمعنى "الكتابة". انظر إلى الكلمات المشتقة:',
          en: 'The root ك-ت-ب (ka-ta-ba) relates to "writing". See the words formed:',
        },
        breakdown: [
          {
            word: 'كَتَبَ',
            role: 'Fi\'il',
            explanation: {
              id: 'Kata kerja: dia (lk) menulis',
              ar: 'فعل: هو كَتَبَ',
              en: 'Verb: he wrote',
            },
          },
          {
            word: 'كَاتِب',
            role: 'Isim Fa\'il',
            explanation: {
              id: 'Pelaku: penulis',
              ar: 'اسم الفاعل: كاتب',
              en: 'Doer: writer',
            },
          },
          {
            word: 'مَكْتُوب',
            role: 'Isim Maf\'ul',
            explanation: {
              id: 'Yang ditulis: tulisan/surat',
              ar: 'اسم المفعول: مكتوب',
              en: 'Written: letter/document',
            },
          },
          {
            word: 'مَكْتَب',
            role: 'Isim Makan',
            explanation: {
              id: 'Tempat menulis: meja/kantor',
              ar: 'اسم المكان: مكتب',
              en: 'Place of writing: desk/office',
            },
          },
          {
            word: 'كِتَاب',
            role: 'Isim',
            explanation: {
              id: 'Buku',
              ar: 'كتاب',
              en: 'Book',
            },
          },
          {
            word: 'مَكْتَبَة',
            role: 'Isim Makan',
            explanation: {
              id: 'Perpustakaan',
              ar: 'مكتبة',
              en: 'Library',
            },
          },
        ],
      },
      {
        type: 'rule',
        title: { id: 'Kaidah Penting', ar: 'قاعدة مهمة', en: 'Important Rule' },
        content: {
          id: '1. Kebanyakan akar kata terdiri dari 3 huruf (tsulatsi)\n2. Huruf asal tidak berubah, hanya ditambah huruf tambahan\n3. Memahami akar kata membantu menebak makna kata baru\n4. Huruf tambahan biasanya: ا، و، ي، م، ت، ن، س، ه',
          ar: '١. معظم الجذور تتكون من ٣ حروف (ثلاثي)\n٢. الحروف الأصلية لا تتغير، فقط تُضاف حروف زائدة\n٣. فهم الجذر يساعد على تخمين معنى الكلمات الجديدة\n٤. الحروف الزائدة عادة: ا، و، ي، م، ت، ن، س، ه',
          en: '1. Most roots consist of 3 letters (trilateral)\n2. Root letters don\'t change, only extra letters are added\n3. Understanding roots helps guess meanings of new words\n4. Extra letters are usually: ا، و، ي، م، ت، ن، س، ه',
        },
      },
      {
        type: 'practice',
        title: { id: 'Latihan', ar: 'تدريب', en: 'Practice' },
        content: {
          id: 'Mainkan Word Builder untuk berlatih membentuk kata dari akar dan pola!',
          ar: 'العب بناء الكلمات للتدرب على تكوين الكلمات من الجذور والأوزان!',
          en: 'Play Word Builder to practice forming words from roots and patterns!',
        },
      },
    ],
  },
  'wazan-fail': {
    id: 'wazan-fail',
    title: { id: 'Wazan Fa\'il', ar: 'وزن فاعل', en: 'Fa\'il Pattern' },
    description: {
      id: 'Pelajari pola fa\'il untuk membentuk isim fa\'il (kata pelaku)',
      ar: 'تعلم وزن فاعل لتكوين اسم الفاعل',
      en: 'Learn the fa\'il pattern to form active participles',
    },
    sections: [
      {
        type: 'explanation',
        title: { id: 'Apa itu Wazan Fa\'il?', ar: 'ما هو وزن فاعل؟', en: 'What is Wazan Fa\'il?' },
        content: {
          id: 'Wazan فَاعِل (fa\'il) adalah pola untuk membentuk isim fa\'il, yaitu kata benda yang menunjukkan pelaku perbuatan. Pola ini dibentuk dengan menambahkan alif setelah huruf pertama akar kata.',
          ar: 'وزن فاعل هو صيغة لتكوين اسم الفاعل، وهو اسم يدل على من قام بالفعل. يُشكَّل بإضافة ألف بعد الحرف الأول من الجذر.',
          en: 'The fa\'il pattern is used to form the active participle (isim fa\'il), a noun indicating the doer of an action. It\'s formed by adding alif after the first root letter.',
        },
      },
      {
        type: 'example',
        title: { id: 'Contoh Pembentukan', ar: 'أمثلة على التكوين', en: 'Formation Examples' },
        content: {
          id: 'Perhatikan bagaimana akar kata menjadi isim fa\'il:',
          ar: 'انظر كيف يصبح الجذر اسم فاعل:',
          en: 'See how roots become active participles:',
        },
        breakdown: [
          {
            word: 'كَاتِب',
            role: 'ك-ت-ب',
            explanation: {
              id: 'Penulis (dari akar ك-ت-ب = menulis)',
              ar: 'كاتب (من جذر ك-ت-ب = كتب)',
              en: 'Writer (from root ك-ت-ب = write)',
            },
          },
          {
            word: 'عَالِم',
            role: 'ع-ل-م',
            explanation: {
              id: 'Orang berilmu (dari akar ع-ل-م = mengetahui)',
              ar: 'عالم (من جذر ع-ل-م = علم)',
              en: 'Scholar (from root ع-ل-م = know)',
            },
          },
          {
            word: 'قَارِئ',
            role: 'ق-ر-أ',
            explanation: {
              id: 'Pembaca (dari akar ق-ر-أ = membaca)',
              ar: 'قارئ (من جذر ق-ر-أ = قرأ)',
              en: 'Reader (from root ق-ر-أ = read)',
            },
          },
          {
            word: 'سَامِع',
            role: 'س-م-ع',
            explanation: {
              id: 'Pendengar (dari akar س-م-ع = mendengar)',
              ar: 'سامع (من جذر س-م-ع = سمع)',
              en: 'Listener (from root س-م-ع = hear)',
            },
          },
        ],
      },
      {
        type: 'rule',
        title: { id: 'Rumus Pembentukan', ar: 'قاعدة التكوين', en: 'Formation Formula' },
        content: {
          id: 'Rumus: فَاعِل\n- ف = huruf pertama akar (dengan fathah)\n- ا = alif tambahan\n- ع = huruf kedua akar (dengan kasrah)\n- ل = huruf ketiga akar\n\nContoh: ك-ت-ب → كَـ + ا + تِـ + ب → كَاتِب',
          ar: 'الصيغة: فَاعِل\n- ف = الحرف الأول (مع فتحة)\n- ا = ألف زائدة\n- ع = الحرف الثاني (مع كسرة)\n- ل = الحرف الثالث\n\nمثال: ك-ت-ب → كَـ + ا + تِـ + ب → كَاتِب',
          en: 'Formula: فَاعِل\n- ف = first root letter (with fatha)\n- ا = added alif\n- ع = second root letter (with kasra)\n- ل = third root letter\n\nExample: ك-ت-ب → كَـ + ا + تِـ + ب → كَاتِب',
        },
      },
      {
        type: 'practice',
        title: { id: 'Latihan', ar: 'تدريب', en: 'Practice' },
        content: {
          id: 'Mainkan Word Builder untuk berlatih membentuk isim fa\'il dari berbagai akar kata!',
          ar: 'العب بناء الكلمات للتدرب على تكوين اسم الفاعل من جذور مختلفة!',
          en: 'Play Word Builder to practice forming active participles from various roots!',
        },
      },
    ],
  },
  'wazan-maful': {
    id: 'wazan-maful',
    title: { id: 'Wazan Maf\'ul', ar: 'وزن مفعول', en: 'Maf\'ul Pattern' },
    description: {
      id: 'Pelajari pola maf\'ul untuk membentuk isim maf\'ul (kata objek)',
      ar: 'تعلم وزن مفعول لتكوين اسم المفعول',
      en: 'Learn the maf\'ul pattern to form passive participles',
    },
    sections: [
      {
        type: 'explanation',
        title: { id: 'Apa itu Wazan Maf\'ul?', ar: 'ما هو وزن مفعول؟', en: 'What is Wazan Maf\'ul?' },
        content: {
          id: 'Wazan مَفْعُول (maf\'ul) adalah pola untuk membentuk isim maf\'ul, yaitu kata benda yang menunjukkan sesuatu yang dikenai perbuatan. Pola ini menambahkan mim di awal dan waw sebelum huruf terakhir.',
          ar: 'وزن مفعول هو صيغة لتكوين اسم المفعول، وهو اسم يدل على من وقع عليه الفعل. يُشكَّل بإضافة ميم في البداية وواو قبل الحرف الأخير.',
          en: 'The maf\'ul pattern forms the passive participle (isim maf\'ul), a noun indicating what receives the action. It adds mim at the start and waw before the last letter.',
        },
      },
      {
        type: 'example',
        title: { id: 'Contoh Pembentukan', ar: 'أمثلة على التكوين', en: 'Formation Examples' },
        content: {
          id: 'Perhatikan bagaimana akar kata menjadi isim maf\'ul:',
          ar: 'انظر كيف يصبح الجذر اسم مفعول:',
          en: 'See how roots become passive participles:',
        },
        breakdown: [
          {
            word: 'مَكْتُوب',
            role: 'ك-ت-ب',
            explanation: {
              id: 'Yang ditulis (dari akar ك-ت-ب)',
              ar: 'مكتوب (من جذر ك-ت-ب)',
              en: 'Written (from root ك-ت-ب)',
            },
          },
          {
            word: 'مَعْلُوم',
            role: 'ع-ل-م',
            explanation: {
              id: 'Yang diketahui (dari akar ع-ل-م)',
              ar: 'معلوم (من جذر ع-ل-م)',
              en: 'Known (from root ع-ل-م)',
            },
          },
          {
            word: 'مَفْتُوح',
            role: 'ف-ت-ح',
            explanation: {
              id: 'Yang dibuka (dari akar ف-ت-ح)',
              ar: 'مفتوح (من جذر ف-ت-ح)',
              en: 'Opened (from root ف-ت-ح)',
            },
          },
          {
            word: 'مَشْرُوب',
            role: 'ش-ر-ب',
            explanation: {
              id: 'Yang diminum / minuman (dari akar ش-ر-ب)',
              ar: 'مشروب (من جذر ش-ر-ب)',
              en: 'Drink/beverage (from root ش-ر-ب)',
            },
          },
        ],
      },
      {
        type: 'rule',
        title: { id: 'Rumus Pembentukan', ar: 'قاعدة التكوين', en: 'Formation Formula' },
        content: {
          id: 'Rumus: مَفْعُول\n- مَـ = mim dengan fathah (tambahan)\n- ف = huruf pertama akar (sukun)\n- ع = huruf kedua akar (dengan dhammah)\n- و = waw tambahan\n- ل = huruf ketiga akar\n\nContoh: ك-ت-ب → مَـ + كْـ + تُـ + و + ب → مَكْتُوب',
          ar: 'الصيغة: مَفْعُول\n- مَـ = ميم مفتوحة (زائدة)\n- ف = الحرف الأول (ساكن)\n- ع = الحرف الثاني (مع ضمة)\n- و = واو زائدة\n- ل = الحرف الثالث\n\nمثال: ك-ت-ب → مَـ + كْـ + تُـ + و + ب → مَكْتُوب',
          en: 'Formula: مَفْعُول\n- مَـ = mim with fatha (added)\n- ف = first root letter (sukun)\n- ع = second root letter (with damma)\n- و = added waw\n- ل = third root letter\n\nExample: ك-ت-ب → مَـ + كْـ + تُـ + و + ب → مَكْتُوب',
        },
      },
      {
        type: 'practice',
        title: { id: 'Latihan', ar: 'تدريب', en: 'Practice' },
        content: {
          id: 'Mainkan Word Builder untuk berlatih membentuk isim maf\'ul dari berbagai akar kata!',
          ar: 'العب بناء الكلمات للتدرب على تكوين اسم المفعول من جذور مختلفة!',
          en: 'Play Word Builder to practice forming passive participles from various roots!',
        },
      },
    ],
  },

  'isim-makan': {
    id: 'isim-makan',
    title: { id: 'Isim Makan', ar: 'اسم المكان', en: 'Noun of Place' },
    description: {
      id: 'Pelajari pola pembentukan isim makan (kata tempat) dalam bahasa Arab',
      ar: 'تعلم صيغ تكوين اسم المكان في اللغة العربية',
      en: 'Learn the patterns for forming nouns of place in Arabic',
    },
    sections: [
      {
        type: 'explanation',
        title: { id: 'Apa itu Isim Makan?', ar: 'ما هو اسم المكان؟', en: 'What is Isim Makan?' },
        content: {
          id: 'Isim Makan adalah kata benda yang menunjukkan tempat terjadinya suatu perbuatan. Dibentuk dari akar kata fi\'il dengan pola مَفْعَل (maf\'al) atau مَفْعِل (maf\'il).',
          ar: 'اسم المكان هو اسم مشتق يدل على مكان وقوع الفعل. يُشتق من الفعل على وزن مَفْعَل أو مَفْعِل.',
          en: 'Isim Makan is a derived noun indicating the place where an action occurs. It is derived from verbs using the pattern مَفْعَل (maf\'al) or مَفْعِل (maf\'il).',
        },
      },
      {
        type: 'explanation',
        title: { id: 'Kapan Pakai مَفْعَل dan مَفْعِل?', ar: 'متى نستخدم مَفْعَل ومَفْعِل؟', en: 'When to use مَفْعَل vs مَفْعِل?' },
        content: {
          id: 'Pola مَفْعَل digunakan jika fi\'il mudhari\'nya berharakat fathah atau dhammah pada \'ain fi\'il (huruf kedua). Pola مَفْعِل digunakan jika fi\'il mudhari\'nya berharakat kasrah pada \'ain fi\'il.',
          ar: 'يُستخدم وزن مَفْعَل إذا كان عين المضارع مفتوحاً أو مضموماً. يُستخدم وزن مَفْعِل إذا كان عين المضارع مكسوراً.',
          en: 'Pattern مَفْعَل is used when the present verb has fatha or damma on the middle letter. Pattern مَفْعِل is used when it has kasra.',
        },
      },
      {
        type: 'example',
        title: { id: 'Contoh Pola مَفْعَل', ar: 'أمثلة وزن مَفْعَل', en: 'Examples of مَفْعَل' },
        content: {
          id: 'Kata-kata tempat dengan pola مَفْعَل:',
          ar: 'كلمات المكان على وزن مَفْعَل:',
          en: 'Place nouns with pattern مَفْعَل:',
        },
        breakdown: [
          { word: 'مَكْتَب', role: 'ك-ت-ب', explanation: { id: 'Kantor/meja tulis (tempat menulis)', ar: 'مكان الكتابة', en: 'Office/desk (place of writing)' } },
          { word: 'مَدْرَسَة', role: 'د-ر-س', explanation: { id: 'Sekolah (tempat belajar)', ar: 'مكان الدراسة', en: 'School (place of study)' } },
          { word: 'مَلْعَب', role: 'ل-ع-ب', explanation: { id: 'Lapangan (tempat bermain)', ar: 'مكان اللعب', en: 'Playground (place of play)' } },
          { word: 'مَطْبَخ', role: 'ط-ب-خ', explanation: { id: 'Dapur (tempat memasak)', ar: 'مكان الطبخ', en: 'Kitchen (place of cooking)' } },
          { word: 'مَدْخَل', role: 'د-خ-ل', explanation: { id: 'Pintu masuk (tempat masuk)', ar: 'مكان الدخول', en: 'Entrance (place of entering)' } },
        ],
      },
      {
        type: 'example',
        title: { id: 'Contoh Pola مَفْعِل', ar: 'أمثلة وزن مَفْعِل', en: 'Examples of مَفْعِل' },
        content: {
          id: 'Kata-kata tempat dengan pola مَفْعِل:',
          ar: 'كلمات المكان على وزن مَفْعِل:',
          en: 'Place nouns with pattern مَفْعِل:',
        },
        breakdown: [
          { word: 'مَسْجِد', role: 'س-ج-د', explanation: { id: 'Masjid (tempat sujud)', ar: 'مكان السجود', en: 'Mosque (place of prostration)' } },
          { word: 'مَجْلِس', role: 'ج-ل-س', explanation: { id: 'Majelis (tempat duduk)', ar: 'مكان الجلوس', en: 'Council (place of sitting)' } },
          { word: 'مَعْرِض', role: 'ع-ر-ض', explanation: { id: 'Pameran (tempat memamerkan)', ar: 'مكان العرض', en: 'Exhibition (place of display)' } },
          { word: 'مَنْزِل', role: 'ن-ز-ل', explanation: { id: 'Rumah (tempat turun/singgah)', ar: 'مكان النزول', en: 'House (place of descending)' } },
        ],
      },
      {
        type: 'rule',
        title: { id: 'Kaidah Penting', ar: 'قاعدة مهمة', en: 'Important Rule' },
        content: {
          id: '1. Isim makan selalu dimulai dengan huruf mim berharakat fathah (مَـ)\n2. Pola مَفْعَل: jika mudhari\' ya-f\'alu atau ya-f\'ulu\n3. Pola مَفْعِل: jika mudhari\' ya-f\'ilu\n4. Beberapa isim makan mendapat ta\' marbuthah: مَدْرَسَة، مَكْتَبَة',
          ar: '١. اسم المكان يبدأ دائماً بميم مفتوحة (مَـ)\n٢. وزن مَفْعَل: إذا كان المضارع يَفْعَلُ أو يَفْعُلُ\n٣. وزن مَفْعِل: إذا كان المضارع يَفْعِلُ\n٤. بعض أسماء المكان تلحقها تاء مربوطة: مَدْرَسَة، مَكْتَبَة',
          en: '1. Isim makan always starts with mim with fatha (مَـ)\n2. Pattern مَفْعَل: when present is ya-f\'alu or ya-f\'ulu\n3. Pattern مَفْعِل: when present is ya-f\'ilu\n4. Some place nouns get ta marbuta: مَدْرَسَة، مَكْتَبَة',
        },
      },
      {
        type: 'practice',
        title: { id: 'Latihan', ar: 'تدريب', en: 'Practice' },
        content: {
          id: 'Mainkan Word Builder untuk berlatih membentuk isim makan dari berbagai akar kata!',
          ar: 'العب بناء الكلمات للتدرب على تكوين اسم المكان من جذور مختلفة!',
          en: 'Play Word Builder to practice forming place nouns from various roots!',
        },
      },
    ],
  },
  'tashrif-fiil': {
    id: 'tashrif-fiil',
    title: { id: 'Tashrif Fi\'il', ar: 'تصريف الفعل', en: 'Verb Conjugation' },
    description: {
      id: 'Pelajari cara mentashrif (mengkonjugasikan) fi\'il dalam berbagai dhamir',
      ar: 'تعلم كيفية تصريف الفعل مع الضمائر المختلفة',
      en: 'Learn how to conjugate verbs with different pronouns',
    },
    sections: [
      {
        type: 'explanation',
        title: { id: 'Apa itu Tashrif?', ar: 'ما هو التصريف؟', en: 'What is Tashrif?' },
        content: {
          id: 'Tashrif adalah perubahan bentuk kata kerja (fi\'il) berdasarkan pelaku (dhamir/kata ganti). Dalam bahasa Arab, fi\'il berubah untuk 14 bentuk dhamir. Kita akan fokus pada yang paling umum: هو، هي، أنا، أنتَ، أنتِ، نحن، هم.',
          ar: 'التصريف هو تغيير صيغة الفعل حسب الفاعل (الضمير). في العربية، يتغير الفعل لـ ١٤ ضميراً. سنركز على أهمها: هو، هي، أنا، أنتَ، أنتِ، نحن، هم.',
          en: 'Tashrif is changing the verb form based on the subject (pronoun). In Arabic, verbs change for 14 pronouns. We\'ll focus on the most common: هو، هي، أنا، أنتَ، أنتِ، نحن، هم.',
        },
      },
      {
        type: 'explanation',
        title: { id: 'Fi\'il Madhi (Lampau)', ar: 'الفعل الماضي', en: 'Past Tense' },
        content: {
          id: 'Fi\'il madhi diubah dengan menambahkan akhiran pada fi\'il dasar:\n- هو (dia lk): كَتَبَ (bentuk dasar)\n- هي (dia pr): كَتَبَتْ (+تْ)\n- أنا (saya): كَتَبْتُ (+تُ)\n- أنتَ (kamu lk): كَتَبْتَ (+تَ)\n- أنتِ (kamu pr): كَتَبْتِ (+تِ)\n- نحن (kami): كَتَبْنَا (+نَا)\n- هم (mereka lk): كَتَبُوا (+وا)',
          ar: 'يتغير الفعل الماضي بإضافة لواحق:\n- هو: كَتَبَ (الصيغة الأساسية)\n- هي: كَتَبَتْ (+تْ)\n- أنا: كَتَبْتُ (+تُ)\n- أنتَ: كَتَبْتَ (+تَ)\n- أنتِ: كَتَبْتِ (+تِ)\n- نحن: كَتَبْنَا (+نَا)\n- هم: كَتَبُوا (+وا)',
          en: 'Past tense changes by adding suffixes:\n- هو (he): كَتَبَ (base form)\n- هي (she): كَتَبَتْ (+تْ)\n- أنا (I): كَتَبْتُ (+تُ)\n- أنتَ (you m): كَتَبْتَ (+تَ)\n- أنتِ (you f): كَتَبْتِ (+تِ)\n- نحن (we): كَتَبْنَا (+نَا)\n- هم (they m): كَتَبُوا (+وا)',
        },
      },
      {
        type: 'explanation',
        title: { id: 'Fi\'il Mudhari\' (Sekarang)', ar: 'الفعل المضارع', en: 'Present Tense' },
        content: {
          id: 'Fi\'il mudhari\' diubah dengan menambahkan awalan (dan kadang akhiran):\n- هو: يَكْتُبُ (يـ)\n- هي: تَكْتُبُ (تـ)\n- أنا: أَكْتُبُ (أ)\n- أنتَ: تَكْتُبُ (تـ)\n- نحن: نَكْتُبُ (نـ)\n- هم: يَكْتُبُونَ (يـ...ونَ)',
          ar: 'يتغير المضارع بإضافة سوابق (وأحياناً لواحق):\n- هو: يَكْتُبُ (يـ)\n- هي: تَكْتُبُ (تـ)\n- أنا: أَكْتُبُ (أ)\n- أنتَ: تَكْتُبُ (تـ)\n- نحن: نَكْتُبُ (نـ)\n- هم: يَكْتُبُونَ (يـ...ونَ)',
          en: 'Present tense changes with prefixes (and sometimes suffixes):\n- هو (he): يَكْتُبُ (يـ)\n- هي (she): تَكْتُبُ (تـ)\n- أنا (I): أَكْتُبُ (أ)\n- أنتَ (you m): تَكْتُبُ (تـ)\n- نحن (we): نَكْتُبُ (نـ)\n- هم (they m): يَكْتُبُونَ (يـ...ونَ)',
        },
      },
      {
        type: 'example',
        title: { id: 'Contoh Lengkap: ذَهَبَ', ar: 'مثال كامل: ذَهَبَ', en: 'Full Example: ذَهَبَ' },
        content: {
          id: 'Tashrif kata kerja ذَهَبَ (pergi):',
          ar: 'تصريف فعل ذَهَبَ:',
          en: 'Conjugation of ذَهَبَ (to go):',
        },
        breakdown: [
          { word: 'ذَهَبَ / يَذْهَبُ', role: 'هو', explanation: { id: 'Dia (lk): pergi / sedang pergi', ar: 'هو ذهب / يذهب', en: 'He went / goes' } },
          { word: 'ذَهَبَتْ / تَذْهَبُ', role: 'هي', explanation: { id: 'Dia (pr): pergi / sedang pergi', ar: 'هي ذهبت / تذهب', en: 'She went / goes' } },
          { word: 'ذَهَبْتُ / أَذْهَبُ', role: 'أنا', explanation: { id: 'Saya: pergi / sedang pergi', ar: 'أنا ذهبت / أذهب', en: 'I went / go' } },
          { word: 'ذَهَبْنَا / نَذْهَبُ', role: 'نحن', explanation: { id: 'Kami: pergi / sedang pergi', ar: 'نحن ذهبنا / نذهب', en: 'We went / go' } },
          { word: 'ذَهَبُوا / يَذْهَبُونَ', role: 'هم', explanation: { id: 'Mereka (lk): pergi / sedang pergi', ar: 'هم ذهبوا / يذهبون', en: 'They went / go' } },
        ],
      },
      {
        type: 'rule',
        title: { id: 'Kaidah Penting', ar: 'قاعدة مهمة', en: 'Important Rule' },
        content: {
          id: '1. Huruf mudhari\' (awalan fi\'il mudhari\'): أ ن ت ي (disingkat أَنَيْتُ)\n2. Fi\'il madhi mabni (tetap), mudhari\' mu\'rab (bisa berubah)\n3. Harakat \'ain mudhari\' bisa fathah, dhammah, atau kasrah tergantung bab-nya\n4. Fi\'il amr dibentuk dari mudhari\' dengan membuang huruf mudhari\' dan menambah hamzah washl jika perlu',
          ar: '١. حروف المضارعة: أ ن ت ي (أنيت)\n٢. الماضي مبني والمضارع معرب\n٣. حركة عين المضارع تختلف حسب الباب (يَفْعُلُ، يَفْعَلُ، يَفْعِلُ)\n٤. فعل الأمر يُشتق من المضارع بحذف حرف المضارعة',
          en: '1. Present tense prefixes: أ ن ت ي (anitya)\n2. Past is indeclinable; present is declinable\n3. Middle vowel of present varies by verb class (fatha, damma, or kasra)\n4. Imperative is derived from present by removing the prefix letter',
        },
      },
      {
        type: 'practice',
        title: { id: 'Latihan', ar: 'تدريب', en: 'Practice' },
        content: {
          id: 'Mainkan Conjugation Race untuk berlatih mentashrif fi\'il dengan cepat!',
          ar: 'العب سباق التصريف للتدرب على تصريف الأفعال بسرعة!',
          en: 'Play Conjugation Race to practice conjugating verbs quickly!',
        },
      },
    ],
  },
};

export function getShorofLesson(topicId: string): LessonContent | undefined {
  return shorofLessons[topicId];
}
