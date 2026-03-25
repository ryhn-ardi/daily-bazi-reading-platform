// ══════════════════════════════════════════════════════════
//  TEN GOD READINGS — Universal, works for all Day Masters
//  10 Ten Gods × 4 sections = 40 full reading sets
// ══════════════════════════════════════════════════════════

export type Cell = {
  ico:string; lbl:string; txt:string
  accent:'gold'|'teal'|'red'|'dim'
  wide?:boolean; bar?:{pct:number;cls:string}; tag?:string
}
export type SectionContent = { intro:string; cells:Cell[] }
export type TGReading = {
  energy:string; harmony:string; conflict:string
  career:SectionContent; health:SectionContent
  finance:SectionContent; romance:SectionContent
}

export const TG_READINGS: Record<string,TGReading> = {

/* ────────────────── 比肩 Companion ──────────────────────── */
'比肩': {
energy:'Dua energi yang identik berdiri berdampingan hari ini — sejajar, setara, dan penuh dinamika persaingan sekaligus persahabatan yang tulus.',
harmony:'Hari ini kamu bisa menemukan jiwa-jiwa yang benar-benar satu gelombang. Kolaborasi dengan orang yang memiliki nilai dan cara pandang serupa akan terasa sangat produktif dan natural.',
conflict:'Dua energi yang identik di satu medan berarti saling berebut sumber daya. Waspada ego yang mengeras, kekakuan pendapat, dan keinginan untuk selalu menjadi yang paling benar.',

career:{
intro:'Hari kompetitif — performamu dinilai secara alami oleh lingkungan sekitarmu. Fokus pada eksekusi yang sudah berjalan, bukan memulai hal baru yang membutuhkan momentum segar.',
cells:[
  {ico:'⚔️',lbl:'Kompetisi Hari Ini',txt:'Energi hari ini menciptakan kompetisi yang tidak selalu terucap — orang-orang di sekitarmu secara natural membandingkan performa mereka denganmu. Ini bukan ancaman; ini momentum untuk menampilkan kualitas terbaikmu. Bukan untuk mengalahkan orang lain, tapi untuk membuktikan standar yang kamu pegang untuk dirimu sendiri.',accent:'gold'},
  {ico:'🤝',lbl:'Tipe Pekerjaan Cocok',txt:'Kolaborasi setara adalah mode terbaikmu hari ini — peer review, brainstorming bersama rekan se-level, atau proyek yang membutuhkan kontribusi seimbang dari dua pihak. Energi 比肩 berjalan paling lancar ketika dua pihak saling menghormati posisi yang sama tanpa ada yang mendominasi.',accent:'teal'},
  {ico:'👔',lbl:'Dinamika Atasan & Tim',txt:'Dengan atasan: jaga sikap dan pilih kata hati-hati — energi hari ini bisa membuatmu terkesan menantang meski tidak disengaja. Dengan tim: fasilitasi diskusi terbuka di mana semua punya kesempatan bicara yang setara. Kamu yang paling bisa menjaga keseimbangan dinamika tim hari ini.',accent:'dim',wide:true},
  {ico:'📋',lbl:'Fokus Aksi Terbaik',txt:'Pilih satu pekerjaan yang sudah 80% selesai dan tuntas-kan hari ini. Kepuasan dari menyelesaikan sesuatu secara sempurna di hari 比肩 memberikan momentum positif yang akan terbawa ke hari-hari berikutnya — jauh lebih berharga dari memulai sepuluh hal baru.',accent:'gold'},
  {ico:'🚫',lbl:'Yang Harus Dihindari',txt:'Deal atau negosiasi baru, keputusan impulsif karena melihat orang lain bergerak lebih cepat darimu, dan konfrontasi ego yang tidak perlu. Dua pohon bisa tumbuh berdampingan dengan indah — tidak harus ada yang ditebang.',accent:'red',tag:'warn'},
  {ico:'💡',lbl:'Insight Personal',txt:'Orang yang terasa "mirip banget" denganmu hari ini — atau justru yang membuat kamu iri tanpa alasan yang jelas — adalah cermin dari sisi dirimu yang sedang ingin berkembang. Apa yang kamu kagumi atau tidak suka dari mereka mencerminkan sesuatu yang sedang kamu proses dalam dirimu sendiri.',accent:'teal',wide:true},
]},

health:{
intro:'Organ yang dikelola elemenmu bekerja ekstra keras karena energi berlipat ganda hari ini. Jaga ritme dan hindari memaksakan diri melampaui batas yang biasa.',
cells:[
  {ico:'🫀',lbl:'Organ yang Perlu Perhatian',txt:'Organ utama yang dikelola elemenmu bekerja di kapasitas tertinggi hari ini karena energi berlipat. Perhatikan sinyal-sinyal kelelahan yang mungkin muncul lebih awal dari biasanya — tubuhmu sedang bekerja lebih keras dari yang terlihat.',accent:'gold',bar:{pct:62,cls:'gold'}},
  {ico:'⚡',lbl:'Level & Pola Energi',txt:'Tinggi dan penuh di pagi hari, tapi rentan drop mendadak di sore hari ketika dua sumber energi yang sama mulai saling menarik. Rencanakan semua pekerjaan terpenting di rentang pagi hingga tengah hari, dan sisakan aktivitas lebih ringan setelah jam 14:00.',accent:'teal',bar:{pct:60,cls:'teal'}},
  {ico:'🏃',lbl:'Aktivitas yang Dianjurkan',txt:'Olahraga yang melibatkan koordinasi dan gerakan — lari ringan, bersepeda, atau olahraga tim yang menyenangkan. Hindari latihan yang sangat kompetitif karena bisa memperburuk tegangan energi yang sudah ada. Tujuannya adalah melepas, bukan menang.',accent:'dim'},
  {ico:'🍽️',lbl:'Makanan & Minuman Hari Ini',txt:'Pilih makanan yang menetralisir dan menenangkan sistem tubuhmu — bukan yang terlalu stimulating. Sayuran segar, protein lean, dan hidrasi yang cukup adalah pilihan terbaik. Hindari makanan yang terlalu pedas, berlemak tinggi, atau kafein berlebihan yang akan memperburuk fluktuasi energi sore hari.',accent:'teal',wide:true},
  {ico:'🕐',lbl:'Chinese Body Clock',txt:'Energi puncak organmu ada di sepertiga pertama hari ini. Untuk memaksimalkan ini: bangun di rentang jam 05:00-07:00, lakukan aktivitas fisik ringan, dan sarapan bergizi sebelum jam 09:00. Nutrisi yang masuk di jam-jam awal hari ini akan diserap dengan efisiensi lebih tinggi dari biasanya.',accent:'gold'},
  {ico:'⚠️',lbl:'Pantangan Hari Ini',txt:'Begadang, melewatkan makan, dan kompetisi fisik yang terlalu memaksakan diri melampaui batas kemampuan tubuh. Tiga hal ini langsung melemahkan sistem organ yang sudah bekerja keras hari ini.',accent:'red',tag:'warn'},
]},

finance:{
intro:'Energi ini cenderung membelah rezeki — seperti satu sumber air yang harus mengalir ke dua pohon sekaligus. Tahan semua transaksi besar dan fokus pada proteksi.',
cells:[
  {ico:'📉',lbl:'Arus Rezeki',txt:'Rezeki yang kamu hasilkan hari ini berpotensi harus "dibagi" — baik secara literal (pengeluaran tak terduga) maupun figuratif (waktu dan energi yang harus dibagi dengan orang lain). Ini bukan kerugian permanen, tapi redistribusi yang perlu disadari dan dikelola.',accent:'gold',bar:{pct:38,cls:'red'}},
  {ico:'📊',lbl:'Tipe Investasi Sesuai',txt:'Bukan hari untuk membuka posisi baru atau eksekusi investasi fresh. Waktu yang jauh lebih baik adalah untuk review portofolio yang sudah ada — evaluasi kinerja masing-masing instrumen secara objektif sebelum menambah apapun yang baru.',accent:'dim'},
  {ico:'🔒',lbl:'Proteksi Finansial',txt:'Jangan meminjamkan uang dalam jumlah apapun hari ini. Yang paling berbahaya adalah pengeluaran kompetitif — membeli sesuatu karena melihat orang lain memilikinya, bukan karena kamu benar-benar membutuhkannya. Kesadaran tentang ini adalah perlindungan terbaik hari ini.',accent:'red',tag:'warn'},
  {ico:'🧭',lbl:'Arah & Angka Beruntung',txt:'Untuk urusan finansial yang tidak bisa dihindari hari ini, gunakan arah Sukses dari Kua numbermu saat posisi duduk atau pertemuan. Angka yang berasosiasi dengan elemen Lucky-mu lebih menguntungkan untuk transaksi yang mendesak.',accent:'teal',wide:true},
  {ico:'💡',lbl:'Insight Finansial',txt:'Pengeluaran yang terjadi hari ini kemungkinan besar adalah investasi relasi jangka panjang — mentraktir, membantu, atau menanggung biaya orang lain. Catat semuanya bukan untuk disesali, tapi untuk memahami pola: apakah ini pilihan sadar atau kebiasaan yang sudah terlalu sering terjadi tanpa disadari?',accent:'gold'},
  {ico:'✅',lbl:'Satu Aksi Terbaik',txt:'Lunasi satu kewajiban finansial yang sudah jatuh tempo atau hampir jatuh tempo. Membersihkan hutang di hari 比肩 memberikan ruang napas finansial yang akan sangat terasa di hari-hari berikutnya — seolah ada beban yang terangkat.',accent:'teal'},
]},

romance:{
intro:'Pertemuan dengan seseorang yang sangat mirip denganmu hari ini terasa intens — bisa menciptakan koneksi yang sangat dalam atau gesekan yang mengejutkan.',
cells:[
  {ico:'🔥',lbl:'Vibrasi Relasi',txt:'Energi yang intens, kompetitif, dan penuh daya tarik yang tidak terduga. Orang yang "mirip banget" denganmu hari ini terasa seperti menemukan cermin — sangat menarik sekaligus menantang karena kamu tidak bisa bersembunyi dari refleksi itu.',accent:'gold'},
  {ico:'💬',lbl:'Cara Komunikasi Terbaik',txt:'Tatap muka langsung adalah cara komunikasi yang jauh paling efektif hari ini — lebih baik dari chat, pesan suara, atau apapun yang tidak memungkinkan kamu melihat ekspresi lawan bicara secara langsung. Energi 比肩 butuh kehadiran fisik yang nyata untuk merasakan kesetaraan yang diinginkannya.',accent:'teal',wide:true},
  {ico:'💎',lbl:'Kekuatan Relasi',txt:'Jika bertemu seseorang yang benar-benar satu frekuensi denganmu, koneksi yang terbentuk hari ini bisa sangat kuat dan membekas lama. Kesamaan nilai dan cara pandang menciptakan chemistry yang tidak bisa dibuat-buat — atau hari ini kamu memperdalam koneksi yang sudah ada ke level baru.',accent:'gold',tag:'good'},
  {ico:'⚡',lbl:'Potensi Gesekan',txt:'Dua ego yang sama kuat dalam satu ruangan bisa sangat menginspirasi atau sangat menguras. Ketika kamu mulai merasa perlu untuk "selalu benar", tanya dirimu: apakah ini benar-benar penting untuk diperdebatkan sekarang, atau kamu sedang membela ego yang tidak perlu dibela?',accent:'red',tag:'warn'},
  {ico:'📍',lbl:'Lokasi & Aktivitas Ideal',txt:'Aktivitas yang melibatkan gerakan dan alam terbuka sangat dianjurkan — hiking ringan, bersepeda bersama, atau sekadar jalan sore di taman yang cukup luas. Energi Kompetitif ini butuh ruang fisik yang cukup agar tidak terasa sesak dan berubah menjadi tegangan.',accent:'teal',wide:true},
  {ico:'🕊️',lbl:'Insight untuk Relasi',txt:'Orang yang hadir dalam hidupmu hari ini — entah teman lama yang tiba-tiba muncul atau kenalan baru yang terasa familiar — membawa pesan tentang sisi dirimu yang perlu diakui dan dipeluk. Apa yang kamu kagumi atau tidak suka dari mereka adalah yang sedang kamu proses dalam perjalanan hidupmu sendiri.',accent:'dim'},
]},
},

/* ────────────────── 劫财 Rob Wealth ────────────────────── */
'劫财': {
energy:'Energi yang parasitik hadir hari ini — seperti tanaman merambat yang hidup dari sumber yang sama. Ada potensi pengurasan sumber daya yang perlu diwaspadai dengan sadar dan tanpa panik.',
harmony:'Sisi terang energi ini mendorongmu menjadi lebih berempati dan murah hati dari biasanya. Kebaikan hatimu hari ini terasa sangat genuine dan akan sangat dihargai oleh orang-orang di sekitarmu.',
conflict:'Potensi kebocoran energi, waktu, dan uang cukup tinggi. Ada orang yang mungkin meminta lebih dari yang seharusnya — baik dengan sadar maupun tanpa menyadarinya.',

career:{
intro:'Hari untuk bertahan dengan cerdas, bukan menyerang. Fokus pada koordinasi, penyelesaian, dan pekerjaan pendukung yang sudah berjalan.',
cells:[
  {ico:'🛡️',lbl:'Mode Hari Ini',txt:'Bertahan dan maintenance adalah strategi terbaik hari ini — bukan hari untuk inisiatif besar atau memulai sesuatu yang fresh yang membutuhkan momentum. Seperti seorang prajurit yang tahu persis kapan harus berlindung di balik perisai dan kapan harus menyerang.',accent:'dim'},
  {ico:'🔍',lbl:'Tipe Pekerjaan Cocok',txt:'Koordinasi, support, dan administrative task berjalan paling baik hari ini. Membantu rekan, menyelesaikan backlog, atau mengerjakan tugas-tugas yang selama ini tertunda karena tidak sempat. Kontribusi yang tidak terlihat besar hari ini justru punya nilai dan dampak tersendiri.',accent:'teal'},
  {ico:'👥',lbl:'Dinamika Atasan & Tim',txt:'Waspada rekan yang — tanpa sadar atau dengan sadar — menumpang pada hasil kerjamu hari ini. Tidak perlu konfrontasi langsung, tapi mulailah mendokumentasikan kontribusimu dengan lebih jelas dan eksplisit. Dengan atasan: ini bukan waktu yang tepat untuk meminta kenaikan, promosi, atau negosiasi apapun.',accent:'red',wide:true,tag:'warn'},
  {ico:'📁',lbl:'Fokus Aksi Terbaik',txt:'Pilih satu pekerjaan penting yang sudah hampir selesai dan tuntas-kan hari ini dengan penuh perhatian. Kepuasan dari menyelesaikan sesuatu secara tuntas jauh lebih berharga hari ini dari memulai sepuluh hal baru yang tidak akan selesai.',accent:'gold'},
  {ico:'🚫',lbl:'Yang Harus Dihindari',txt:'Memulai proyek baru, menyetujui komitmen tambahan yang menguras energimu, dan terlibat dalam diskusi panjang yang tidak ada kesimpulannya. Energimu hari ini adalah sumber daya terbatas — alokasikan dengan sangat bijak dan sadar.',accent:'red'},
  {ico:'💡',lbl:'Insight Personal',txt:'Hari 劫财 adalah pengingat keras bahwa tidak semua energi perlu diberikan ke dunia luar. Ada saatnya kamu perlu menjaga cadangan untuk dirimu sendiri. Batas yang kamu tegakkan hari ini bukan bentuk keegoisan — itu adalah bentuk self-respect yang paling dasar dan paling penting.',accent:'teal',wide:true},
]},

health:{
intro:'Sistem imun dan energi tubuh dalam kondisi fluktuatif dan rentan. Istirahat lebih awal dari biasanya adalah investasi terbaik yang bisa kamu berikan pada dirimu hari ini.',
cells:[
  {ico:'🌿',lbl:'Organ yang Perlu Perhatian',txt:'Organ pengatur elemenmu dan sistem imun keduanya dalam kondisi tertekan hari ini. Tanda-tanda yang mungkin muncul: rasa lelah yang tidak proporsional dengan aktivitas yang kamu lakukan, atau mood yang mudah berubah tanpa sebab yang jelas — keduanya adalah pesan tubuhmu yang perlu didengar.',accent:'gold',bar:{pct:42,cls:'red'}},
  {ico:'🔋',lbl:'Level & Pola Energi',txt:'Tidak stabil dan mudah terkuras terutama setelah interaksi sosial yang intense. Jika kamu tiba-tiba merasa kelelahan yang tidak wajar setelah berbicara atau berada di dekat seseorang tertentu hari ini — itu adalah sinyal bahwa orang tersebut sedang menarik energimu secara tidak disengaja.',accent:'red',bar:{pct:40,cls:'red'}},
  {ico:'🧘',lbl:'Aktivitas yang Dianjurkan',txt:'Yoga restoratif, meditasi 10–15 menit, atau sekadar berjalan kaki perlahan di alam terbuka tanpa tujuan. Tujuannya bukan membakar kalori atau mencapai target fitness — tapi mengisi ulang cadangan energi yang sedang dalam kondisi lebih rendah dari biasanya.',accent:'dim'},
  {ico:'🍵',lbl:'Makanan & Minuman Hari Ini',txt:'Fokus pada makanan yang memperkuat sistem imun dan menenangkan pencernaan yang mungkin terganggu: jahe hangat dengan madu, sup sayuran bening, dan makanan fermentasi seperti yogurt atau kimchi dalam porsi kecil. Hindari kopi berlebihan dan makanan cepat saji yang menguras energi yang sudah terbatas.',accent:'teal',wide:true},
  {ico:'🕐',lbl:'Chinese Body Clock',txt:'Jam 19:00–21:00 adalah waktu yang paling dikelola oleh organ proteksi dalam TCM. Di rentang waktu ini, tubuhmu paling butuh ketenangan dan kehangatan emosional. Habiskan jam-jam ini untuk hal yang benar-benar menenangkan: teh hangat, ngobrol ringan dengan seseorang yang kamu percaya, atau membaca buku.',accent:'gold'},
  {ico:'😴',lbl:'Pantangan Hari Ini',txt:'Begadang adalah pantangan nomor satu hari ini — tubuhmu membutuhkan recovery yang lebih panjang dari biasanya. Target masuk ke tempat tidur sebelum jam 22:30 untuk memberi sistem imunmu waktu regenerasi yang cukup untuk menghadapi hari berikutnya.',accent:'red',tag:'warn'},
]},

finance:{
intro:'Ini adalah hari dengan potensi kebocoran finansial tertinggi dalam siklus 10 hari. Tahan semua transaksi besar dan fokus pada proteksi apa yang sudah ada.',
cells:[
  {ico:'📉',lbl:'Arus Rezeki',txt:'Ada kecenderungan kuat untuk uang keluar lebih banyak dari yang masuk hari ini — seringkali melalui jalur yang sama sekali tidak kamu duga atau rencanakan sebelumnya. Bukan berarti kamu pasti rugi, tapi tingkat kewaspadaan yang lebih tinggi dari biasanya sangat diperlukan.',accent:'red',bar:{pct:22,cls:'red'}},
  {ico:'📊',lbl:'Tipe Investasi Sesuai',txt:'Tidak ada instrumen investasi yang ideal untuk dieksekusi hari ini. Namun jika ada posisi investasi yang sudah lama membuatmu tidak nyaman atau merugikan — hari ini bisa menjadi waktu untuk melakukan stop-loss dan menerima kerugian kecil sebelum berkembang menjadi kerugian yang jauh lebih besar.',accent:'dim'},
  {ico:'🛡️',lbl:'Proteksi Finansial',txt:'Jangan meminjamkan uang dalam jumlah apapun hari ini tanpa terkecuali. Jika ada yang meminta bantuan finansial, kamu bisa tetap berempati tanpa harus mengeluarkan uang — tawarkan bantuan dalam bentuk lain, atau tunda keputusan sampai hari yang energinya lebih kondusif.',accent:'red',tag:'warn'},
  {ico:'🧭',lbl:'Arah & Angka Beruntung',txt:'Hari ini gunakan arah Kesehatan dari Kua numbermu — bukan untuk ekspansi, tapi untuk perlindungan. Kalau ada masalah finansial yang harus dihadapi hari ini, hadapi dengan posisi menghadap arah ini untuk mendapatkan dukungan energi yang lebih stabil.',accent:'teal',wide:true},
  {ico:'💡',lbl:'Insight Finansial',txt:'Pengeluaran yang muncul hari ini kemungkinan besar adalah biaya relasi — mentraktir, membantu, atau menanggung sesuatu untuk orang lain. Catat semuanya secara detail, bukan untuk disesali, tapi untuk memahami pola yang berulang: apakah ini pilihan sadar yang kamu buat atau kebiasaan yang sudah terlalu sering terjadi?',accent:'gold'},
  {ico:'✅',lbl:'Satu Aksi Terbaik',txt:'Lakukan audit pengeluaran 30 hari terakhir — cukup 15 menit dengan membuka catatan bank atau aplikasi keuanganmu. Identifikasi satu kebocoran yang bisa kamu tutup mulai hari ini, sekecil apapun itu.',accent:'dim'},
]},

romance:{
intro:'Empatimu berada di level yang sangat tinggi hari ini — kamu bisa merasakan kondisi emosional orang lain bahkan sebelum mereka mengatakannya dengan kata-kata.',
cells:[
  {ico:'🌊',lbl:'Vibrasi Relasi',txt:'Kepekaan dan empatimu sangat tinggi hari ini — ini adalah anugerah yang indah, tapi juga bisa menjadi beban yang berat jika kamu tidak punya batasan yang jelas antara perasaanmu dan perasaan orang lain. Jaga dirimu agar tidak kehilangan dirimu sendiri dalam upaya memahami orang lain.',accent:'teal'},
  {ico:'💬',lbl:'Cara Komunikasi Terbaik',txt:'Tindakan kecil yang tulus jauh lebih berkesan dan berbicara lebih keras dari kata-kata yang panjang dan elaborate hari ini. Hadir sepenuhnya — meletakkan ponsel, menatap mata lawan bicara, dan benar-benar mendengarkan — adalah bentuk komunikasi cinta yang paling powerful yang bisa kamu berikan.',accent:'gold',wide:true},
  {ico:'💝',lbl:'Kekuatan Relasi',txt:'Kebaikan dan kepedulianmu yang genuine sangat terasa dan bersinar hari ini. Orang-orang di sekitarmu merasakan kehangatan yang kamu pancarkan bahkan tanpa kamu harus mengucapkan sepatah kata pun — kehadiranmu sendiri sudah menjadi hadiah.',accent:'gold',tag:'good'},
  {ico:'⚡',lbl:'Potensi Gesekan',txt:'Dinamika di mana satu pihak terus memberi dan pihak lain terus mengambil bisa muncul tanpa disadari. Jika kamu mulai merasa lelah, kosong, atau tidak dihargai setelah berinteraksi dengan seseorang hari ini — itu adalah sinyal penting yang perlu kamu perhatikan dan tindaklanjuti.',accent:'red',tag:'warn'},
  {ico:'📍',lbl:'Lokasi & Aktivitas Ideal',txt:'Tempat yang tenang, nyaman, dan akrab adalah lingkungan terbaik untuk relasimu hari ini — rumah yang hangat, kafe favorit yang sudah kamu kenal, atau taman kecil yang familiar. Ini bukan hari untuk eksplorasi tempat baru atau aktivitas yang penuh adrenalin dan kejutan.',accent:'dim',wide:true},
  {ico:'🤲',lbl:'Insight untuk Relasi',txt:'Belajar untuk menerima dengan sama mudahnya kamu memberi adalah salah satu pelajaran terdalam yang bisa kamu kuasai. Jika seseorang ingin melakukan sesuatu untukmu hari ini — biarkan mereka. Menolaknya bisa justru menyakiti mereka, karena itu adalah cara mereka mengekspresikan cinta mereka padamu.',accent:'gold'},
]},
},

/* ────────────────── 食神 Eating God ────────────────────── */
'食神': {
energy:'Energi Output terbaik mengalir bebas hari ini — kreativitas, ekspresi, dan talentamu bersinar dengan cara yang paling natural dan autentik tanpa perlu dipaksakan.',
harmony:'Segala bentuk ekspresi diri, kreativitas, dan interaksi sosial terasa effortless dan mengalir hari ini. Orang lain merasakan kehangatan dan ketulusan yang kamu pancarkan secara natural.',
conflict:'Energi yang terlalu mengalir bisa membuatmu sulit fokus pada satu hal. Banyak ide bagus datang sekaligus — tanpa filter yang baik, bisa berakhir tidak ada yang benar-benar tuntas.',

career:{
intro:'Hari TERBAIK untuk presentasi, pitching, wawancara, dan semua pekerjaan yang membutuhkan komunikasi verbal yang meyakinkan. Manfaatkan momentum langka ini.',
cells:[
  {ico:'🌟',lbl:'Momentum Hari Ini',txt:'Ini adalah hari di mana kata-katamu punya bobot dan daya tarik yang lebih besar dari biasanya — secara literal. Ide yang sama persis, jika kamu sampaikan hari ini versus hari biasa, akan terdengar jauh lebih meyakinkan, lebih inspiratif, dan lebih mudah diterima. Itu bukan kebetulan — itu energi 食神 yang bekerja untukmu.',accent:'gold',tag:'good'},
  {ico:'🎯',lbl:'Tipe Pekerjaan Cocok',txt:'Semua pekerjaan yang melibatkan komunikasi, kreasi, dan ekspresi diri: presentasi ke klien atau atasan, pitching ide baru, menulis proposal yang persuasif, membuat konten, mengajar, atau coaching. Jika pekerjaanmu hari ini melibatkan berbicara kepada orang lain dalam bentuk apapun — ini adalah harimu.',accent:'teal'},
  {ico:'👔',lbl:'Dinamika Atasan & Tim',txt:'Energimu yang hangat dan natural hari ini membuat orang merasa nyaman dan terinspirasi di sekitarmu tanpa kamu perlu berusaha. Atasan akan lebih mudah menyetujui ide yang kamu presentasikan. Tim akan termotivasi secara organik oleh cara kamu menyampaikan sesuatu. Gunakan momentum ini untuk hal-hal yang selama ini kamu tunda karena takut ditolak.',accent:'teal',wide:true},
  {ico:'💡',lbl:'Fokus Aksi Terbaik',txt:'Sampaikan ide terpentingmu hari ini — yang selama ini tersimpan karena menunggu "waktu yang tepat". Jadwalkan meeting atau call yang sudah lama tertunda. Kirimkan proposal yang sudah kamu siapkan berhari-hari. Momentum ini hanya hadir setiap 10 hari sekali dalam siklus — jangan biarkan berlalu sia-sia.',accent:'gold'},
  {ico:'⏰',lbl:'Yang Harus Dihindari',txt:'Menghabiskan hari ini untuk pekerjaan administratif, rutinitas, dan hal-hal yang bisa dikerjakan kapan saja. Energi 食神 yang terbuang untuk hal-hal rutin adalah pemborosan terbesar yang bisa kamu lakukan. Delegasikan jika memungkinkan, atau tunda untuk besok.',accent:'red'},
  {ico:'💡',lbl:'Insight Personal',txt:'食神 mengajarkan bahwa ekspresi diri yang autentik adalah bentuk produktivitas tertinggi. Hari ini bukan tentang kerja keras yang melelahkan — tapi tentang kerja yang mengalir natural dari dalam dirimu. Kalau sesuatu terasa sangat dipaksakan hari ini, mungkin itu memang bukan yang seharusnya kamu kerjakan.',accent:'teal',wide:true},
]},

health:{
intro:'Tubuhmu berada dalam kondisi prima hari ini — sistem kardiovaskular, energi, dan mood semuanya mendukung secara optimal.',
cells:[
  {ico:'❤️',lbl:'Organ yang Perlu Perhatian',txt:'Jantung dan sistem sirkulasi darah berada dalam kondisi prima hari ini — elemen Output mendukung dan memperkuat organ-organ ini secara langsung. Tubuhmu terasa lebih hidup, lebih ringan, dan lebih berenergi dari hari-hari biasa.',accent:'gold',bar:{pct:88,cls:'gold'}},
  {ico:'⚡',lbl:'Level & Pola Energi',txt:'Energi tinggi dan stabil sepanjang hari tanpa penurunan mendadak yang biasanya terjadi di sore hari. Manfaatkan ini dengan menjadwalkan aktivitas terpentingmu dalam rentang yang lebih lebar — pagi hingga petang semua kondusif untuk performa terbaik.',accent:'teal',bar:{pct:88,cls:'teal'}},
  {ico:'🏋️',lbl:'Aktivitas yang Dianjurkan',txt:'Ini adalah hari terbaik untuk olahraga intens yang selama ini kamu tunda-tunda. HIIT, lari jarak menengah, futsal bersama teman, atau berenang dengan pace yang lebih cepat dari biasanya. Tubuhmu siap — sistem kardiovaskularmu mendukung penuh dan kamu tidak akan merasa kepayahan seperti hari biasa.',accent:'dim'},
  {ico:'🍊',lbl:'Makanan & Minuman Hari Ini',txt:'Elemen Output yang kuat mendukung metabolisme yang lebih cepat dan efisien. Manfaatkan dengan konsumsi makanan bernutrisi tinggi yang menghasilkan energi berkelanjutan: nasi merah atau quinoa, protein lean, buah citrus segar, dan kacang-kacangan. Tubuhmu bisa memproses nutrisi dengan efisiensi lebih tinggi hari ini.',accent:'teal',wide:true},
  {ico:'🕐',lbl:'Chinese Body Clock',txt:'Jam 11:00–13:00 adalah rentang waktu dengan energi paling tinggi yang tersedia hari ini — jadwalkan aktivitas terpenting dan paling membutuhkan energi di sini. Ini adalah window of opportunity yang paling berharga di seluruh harimu hari ini.',accent:'gold'},
  {ico:'⚠️',lbl:'Pantangan Hari Ini',txt:'Jangan over-stimulasi dengan kafein berlebihan di atas energi yang sudah sangat tinggi — ini akan membuat tidurmu terganggu malam ini. Pastikan tetap terhidrasi dengan baik karena aktivitas yang tinggi meningkatkan kebutuhan cairan tubuh secara signifikan.',accent:'dim'},
]},

finance:{
intro:'Rezeki hari ini mengalir dari ekspresi dan kreativitasmu, bukan dari kerja keras fisik semata. Ini adalah hari untuk berbicara tentang nilai dirimu.',
cells:[
  {ico:'📈',lbl:'Arus Rezeki',txt:'Rezeki hari ini datang dari kemampuanmu berkomunikasi, meyakinkan, dan menunjukkan nilai nyata dirimu kepada orang yang tepat. Bukan dari kerja keras fisik yang melelahkan, tapi dari kata-kata, ide, dan ekspresi yang mengalir natural darimu.',accent:'teal',bar:{pct:82,cls:'teal'}},
  {ico:'💼',lbl:'Peluang Finansial Terbaik',txt:'Negosiasi gaji atau rate, pitching proyek freelance, closing sales, atau mempresentasikan proposal bisnis yang sudah kamu siapkan — semua ini sangat ideal dilakukan hari ini. Kemampuan persuasimu sedang berada di puncak, dan orang jauh lebih mudah mengatakan "ya" di hari 食神.',accent:'gold',tag:'good'},
  {ico:'⚠️',lbl:'Yang Perlu Diwaspadai',txt:'Mood yang sangat baik hari ini bisa menciptakan overconfidence finansial yang berbahaya — "hari bagus, ayo belanja" adalah jebakan. Nikmati momen ini tapi pertahankan kesadaran finansialmu. Rezeki yang masuk hari ini lebih baik diinvestasikan daripada langsung dihabiskan.',accent:'red'},
  {ico:'🧭',lbl:'Arah & Angka Beruntung',txt:'Untuk negosiasi atau presentasi finansial penting hari ini, posisikan dirimu menghadap arah Cinta atau Sukses dari Kua numbermu. Kedua arah ini mendukung kemampuan ekspresi dan persuasimu yang sedang optimal.',accent:'teal',wide:true},
  {ico:'💡',lbl:'Insight Finansial',txt:'Investasi terbaik yang bisa kamu lakukan hari ini adalah investasi pada kemampuan presentasi dan komunikasimu — beli buku yang relevan, ikuti webinar, atau minta feedback dari orang yang kamu percaya tentang cara kamu menyampaikan ide. Skill ini menghasilkan returns untuk seumur hidup.',accent:'gold'},
  {ico:'✅',lbl:'Satu Aksi Terbaik',txt:'Kirimkan satu proposal, penawaran harga, atau negosiasi yang selama ini kamu tunda karena takut ditolak. Hari ini kemungkinan mendapat respons positif jauh lebih tinggi dari hari biasa — ini adalah fakta energetis, bukan sekadar optimisme.',accent:'teal'},
]},

romance:{
intro:'Pesonamu alami dan hangat seperti sinar matahari hari ini — orang-orang naturally tertarik pada energimu tanpa kamu perlu berusaha keras.',
cells:[
  {ico:'☀️',lbl:'Vibrasi Relasi',txt:'Ada energi yang sangat hangat dan autentik darimu hari ini — bukan karena kamu berusaha menjadi lebih menarik, tapi karena itulah energi alami 食神 yang sedang mengalir penuh. Orang di sekitarmu merasakannya, dan itu membuat mereka naturally ingin terus berada di dekatmu.',accent:'gold'},
  {ico:'💬',lbl:'Cara Komunikasi Terbaik',txt:'Bicara langsung dan natural adalah cara terbaikmu hari ini — jangan terlalu banyak merencanakan apa yang ingin kamu katakan sebelumnya. Biarkan kata-kata mengalir begitu saja. Kejujuran spontan hari ini jauh lebih menarik dan berkesan dari kalimat yang sudah disiapkan berhari-hari sebelumnya.',accent:'teal',wide:true},
  {ico:'🌹',lbl:'Momen Terbaik',txt:'Jika kamu ingin mengungkapkan perasaan, meminta maaf dengan tulus, atau mempererat koneksi yang penting — lakukan hari ini tanpa menunda. Energi 食神 membuat ekspresi emosionalmu terdengar genuine, tulus, dan menyentuh. Kata yang sama persis akan terasa jauh lebih bermakna hari ini dibanding hari lain.',accent:'gold',tag:'good'},
  {ico:'🎭',lbl:'Potensi Gesekan',txt:'Satu-satunya potensi masalah hari ini adalah terlalu banyak berbicara dan kurang mendengarkan. Energi 食神 bisa membuatmu terlena mengekspresikan diri sendiri hingga lupa bahwa relasi yang benar-benar indah adalah percakapan dua arah yang setara.',accent:'red'},
  {ico:'📍',lbl:'Lokasi & Aktivitas Ideal',txt:'Tempat-tempat yang hidup, penuh energi positif, dan memungkinkan interaksi yang natural: kedai kopi yang cozy dan ramai, pasar seni lokal, konser akustik yang intimate, atau makan malam di tempat dengan suasana yang hangat dan menyenangkan. Energimu hari ini butuh ruang untuk diekspresikan secara penuh.',accent:'teal',wide:true},
  {ico:'💡',lbl:'Insight untuk Relasi',txt:'食神 mengajarkan bahwa cinta yang paling tahan lama bukan yang paling dramatis atau penuh momen besar, tapi yang paling autentik dan menyenangkan untuk dijalani setiap harinya. Hari ini adalah pengingat untuk tidak terlalu serius dalam relasi — tertawa bersama, berbagi kegembiraan, dan nikmati momennya sepenuhnya.',accent:'dim'},
]},
},

/* ────────────────── 伤官 Hurting Officer ───────────────── */
'伤官': {
energy:'Nyala api brilian berkobar hari ini — kecerdasan tertinggi, inovasi, dan ekspresi yang melampaui batas konvensi semuanya aktif dan siap digunakan.',
harmony:'甲+丁 seperti pohon raksasa yang terbakar menjadi senter — semua potensimu tersublimasi menjadi cahaya yang murni dan brilian. Hari terbaik dalam seluruh siklus 60 hari.',
conflict:'Energi yang terlalu brilian bisa membuatmu terlalu kritis, terlalu opinionated, atau terlalu berbeda bagi sebagian orang. Waspada menyinggung figur otoritas secara tidak perlu.',

career:{
intro:'Hari untuk terobosan nyata. Problem yang selama ini macet bisa tiba-tiba terpecahkan dengan cara yang sama sekali tidak terduga oleh siapapun.',
cells:[
  {ico:'💥',lbl:'Momentum Hari Ini',txt:'Ini bukan hari untuk bekerja dalam mode normal yang biasa. 伤官 adalah energi yang memaksa sistem untuk berevolusi dan berkembang. Jika kamu selama ini merasa ada yang salah dengan cara suatu hal dikerjakan — hari ini kamu punya kejelasan visi, keberanian untuk bersuara, dan kata-kata yang tepat untuk mengubahnya menjadi kenyataan.',accent:'gold',tag:'good'},
  {ico:'🧪',lbl:'Tipe Pekerjaan Cocok',txt:'Inovasi, problem-solving tidak konvensional, negosiasi yang membutuhkan kecerdasan tinggi, brainstorming untuk ide breakthrough, analisis kritis mendalam, atau pekerjaan kreatif yang membutuhkan genius spark. Ini adalah harimu yang paling potensial dalam seluruh siklus 60 hari — jangan sia-siakan.',accent:'teal'},
  {ico:'👔',lbl:'Dinamika Atasan & Tim',txt:'Dengan atasan: hati-hati karena 伤官 secara simbolis melukai otoritas — sampaikan ide brillianmu dengan framing yang menghargai dan mengakui peran mereka. Dengan tim: kamu akan menjadi katalis perubahan yang luar biasa — ide-idemu hari ini bisa menginspirasi dan menggerakkan seluruh kelompok ke level baru.',accent:'red',wide:true},
  {ico:'🚀',lbl:'Fokus Aksi Terbaik',txt:'Pecahkan satu masalah besar yang selama ini dianggap tidak bisa dipecahkan. Buat proposal yang sama sekali baru dan berbeda dari semua yang biasanya ada. Hari ini adalah hari untuk melakukan hal yang membuat orang berkata — bagaimana bisa kepikiran sampai sejauh itu?',accent:'gold'},
  {ico:'🎭',lbl:'Yang Harus Dihindari',txt:'Konfrontasi langsung dengan figur otoritas tanpa strategi yang matang. Energi 伤官 bisa membuat lidahmu terlalu tajam dan kata-katamu terlalu jujur — sehingga menyakiti dan menutup pintu yang seharusnya terbuka.',accent:'red',tag:'warn'},
  {ico:'💡',lbl:'Insight Personal',txt:'伤官 adalah anugerah yang sering disalahpahami oleh dunia. Orang dengan energi ini sering dianggap sulit diatur — padahal mereka hanya terlalu cerdas untuk menerima hal yang tidak masuk akal begitu saja. Hari ini adalah hari untuk merangkul sifat itu dengan penuh kebanggaan, bukan menyembunyikannya.',accent:'teal',wide:true},
]},

health:{
intro:'Sistem saraf dan jantung bekerja pada kapasitas tertinggi hari ini. Kenali tanda-tanda overstimulasi dan rencanakan wind-down yang lebih awal dari biasanya.',
cells:[
  {ico:'🧠',lbl:'Organ yang Perlu Perhatian',txt:'Sistem saraf dan jantung keduanya bekerja pada kapasitas tertinggi hari ini. Tanda-tanda bahwa kamu sedang overdrive: pikiran yang tidak bisa berhenti bahkan saat kamu ingin istirahat, sulit berkonsentrasi pada satu hal meski kamu sangat ingin, atau rasa gelisah dan restless tanpa sebab yang jelas.',accent:'gold',bar:{pct:82,cls:'gold'}},
  {ico:'⚡',lbl:'Level & Pola Energi',txt:'Energi mental sangat tinggi tapi bisa sangat tidak merata — kamu bisa masuk ke kondisi hyper-focus yang luar biasa produktif, tapi juga bisa crash mendadak setelah periode fokus intens itu. Kenali pola naik-turun ini dan rencanakan sesi istirahat aktif di antara setiap periode kerja intensmu.',accent:'teal',bar:{pct:80,cls:'teal'}},
  {ico:'🧘',lbl:'Aktivitas yang Dianjurkan',txt:'Aktivitas yang menyeimbangkan pikiran aktif dengan tubuh yang bergerak secara ritmis: yoga aliran (vinyasa), tai chi, atau berenang dengan kecepatan yang konstan dan teratur. Tujuannya bukan membakar kalori maksimal — tapi menurunkan aktivitas sistem saraf dari high alert ke rest-and-digest secara gradual.',accent:'dim'},
  {ico:'🫖',lbl:'Makanan & Minuman Hari Ini',txt:'Sistem saraf yang sangat aktif membutuhkan makanan yang menenangkan dan stabilizing: magnesium tinggi (dark chocolate 70%+, kacang almond, bayam segar), omega-3 (ikan salmon atau sarden), dan teh chamomile atau lavender hangat di malam hari. Jauhkan diri dari energy drink dan kafein berlebihan setelah jam 14:00 tanpa terkecuali.',accent:'teal',wide:true},
  {ico:'🕐',lbl:'Chinese Body Clock',txt:'Jam 11:00–13:00 adalah puncak aktivitas organ terkuat hari ini — energimu secara organik berada di titik tertinggi di sini. Tapi ingat: setelah puncak selalu ada lembah yang setimpal. Rencanakan aktivitas yang lebih santai dan tidak memerlukan konsentrasi tinggi setelah jam 15:00 untuk recovery alami.',accent:'gold'},
  {ico:'😴',lbl:'Pantangan Hari Ini',txt:'Layar HP dan semua notifikasi setelah jam 21:00 adalah musuh utama tidurmu malam ini. Percakapan yang emosional atau stimulating menjelang tidur juga perlu dihindari. Sistem sarafmu butuh runway yang lebih panjang untuk bisa benar-benar rileks — mulai ritual wind-down 2 jam sebelum target tidur.',accent:'red',tag:'warn'},
]},

finance:{
intro:'Intuisi finansialmu berada di level tertinggi hari ini — kamu bisa merasakan peluang dan risiko sebelum angka-angkanya bicara.',
cells:[
  {ico:'🔮',lbl:'Arus Rezeki',txt:'Intuisi finansialmu seperti radar ultra-sensitif hari ini — kamu bisa merasakan peluang dan risiko sebelum angka-angkanya bicara secara eksplisit. Percayai insting ini, tapi tetap verifikasi dengan data dan logika sebelum eksekusi apapun.',accent:'teal',bar:{pct:78,cls:'teal'}},
  {ico:'💡',lbl:'Tipe Peluang Finansial',txt:'Peluang yang tidak konvensional dan tidak terlihat jelas oleh kebanyakan orang — itulah spesialisasimu hari ini. Ide bisnis yang terlintas dan terasa gila hari ini layak dicatat dengan serius dan dievaluasi kembali ketika energimu lebih stabil. Banyak breakthrough finansial terbesar dimulai dari ide 伤官 yang awalnya dianggap terlalu berani.',accent:'gold',tag:'good'},
  {ico:'📊',lbl:'Tipe Investasi Sesuai',txt:'Jika ingin berinvestasi, 伤官 cocok untuk aset yang disruptive dan bersifat high-risk high-reward — bukan untuk instrumen konservatif yang membosankan. Tapi ingat dengan serius: kalkulasi dan analisis harus selalu lebih kuat dari intuisi, semenarik apapun intuisi itu terasa.',accent:'dim'},
  {ico:'🧭',lbl:'Arah & Angka Beruntung',txt:'Untuk eksekusi finansial penting hari ini, hadap arah Cinta dari Kua numbermu — ini mendukung kemampuan persuasi dan kreativitas finansialmu yang sedang di puncak. Hindari mengeksekusi deal besar di jam 15:00–19:00 yang merupakan jam elemen yang tidak bersahabat denganmu.',accent:'teal',wide:true},
  {ico:'💡',lbl:'Insight Finansial',txt:'Kemampuan berpikirmu yang tidak konvensional hari ini adalah aset finansial terbesar yang kamu miliki. Orang yang bisa melihat apa yang orang lain tidak lihat adalah orang yang paling mampu menciptakan nilai nyata di pasar yang kompetitif.',accent:'gold'},
  {ico:'✅',lbl:'Satu Aksi Terbaik',txt:'Buat dokumen catatan khusus untuk semua ide bisnis dan finansial yang terlintas hari ini — bahkan yang terdengar paling tidak masuk akal sekalipun. Revisit catatan ini dalam 3–5 hari ketika energimu lebih stabil dan lihat mana yang masih masuk akal dan layak ditindaklanjuti.',accent:'teal'},
]},

romance:{
intro:'Ada aura yang berbeda dan sangat menarik darimu hari ini — intens, mendalam, dan sedikit misterius yang sulit dijelaskan tapi sangat terasa.',
cells:[
  {ico:'🕯️',lbl:'Vibrasi Relasi',txt:'Ada aura yang sangat berbeda darimu hari ini — sesuatu yang intens, mendalam, dan sedikit misterius yang sulit dijelaskan dengan kata-kata tapi sangat terasa oleh semua orang yang berinteraksi denganmu. Ini bukan sesuatu yang kamu buat-buat; ini adalah energi 伤官 yang sedang aktif penuh.',accent:'gold'},
  {ico:'💬',lbl:'Cara Komunikasi Terbaik',txt:'Percakapan yang mendalam, jujur, dan berani membahas hal-hal yang penting adalah mode komunikasimu yang paling powerful hari ini. Bukan small talk atau basa-basi kosong — tapi diskusi tentang hal-hal yang benar-benar bermakna. Orang yang tepat akan sangat menghargai kedalaman ini.',accent:'teal',wide:true},
  {ico:'✨',lbl:'Kekuatan Relasi',txt:'Kecerdasan dan cara pandangmu yang unik adalah daya tarik terkuat yang kamu miliki hari ini. Percakapan yang kamu ciptakan bisa menjadi momen yang diingat oleh pasangan atau orang yang kamu dekati untuk waktu yang sangat lama — mungkin seumur hidup.',accent:'gold',tag:'good'},
  {ico:'🔪',lbl:'Potensi Gesekan',txt:'Kejujuranmu yang sangat tajam bisa menyakiti tanpa disengaja. Sebelum mengucapkan sesuatu yang terasa sangat jujur tapi pedas, tanya dirimu satu pertanyaan penting: apakah ini membangun dan mendekatkan, atau hanya memuaskan keinginanmu untuk dianggap benar? Pilih dengan bijak.',accent:'red',tag:'warn'},
  {ico:'📍',lbl:'Lokasi & Aktivitas Ideal',txt:'Tempat yang menstimulasi pikiran sekaligus menciptakan intimasi yang genuine: museum seni, pameran kontemporer, planetarium di malam hari, rooftop dengan pemandangan kota, atau kedai buku yang nyaman. Aktivitas yang memungkinkan percakapan mendalam jauh lebih berkesan hari ini dari aktivitas yang sekadar seru dan ramai.',accent:'teal',wide:true},
  {ico:'💡',lbl:'Insight untuk Relasi',txt:'伤官 mengajarkan bahwa cinta yang nyata dan tahan lama tidak membutuhkan topeng apapun. Orang yang benar-benar cocok denganmu adalah orang yang tidak membuat kamu menyembunyikan kecerdasanmu — tapi justru terinspirasi olehnya dan tumbuh bersamanya.',accent:'dim'},
]},
},

/* ────────────────── 偏财 Indirect Wealth ───────────────── */
'偏财': {
energy:'Energi magnet alami hari ini — orang-orang, peluang, dan koneksi gravitasi ke arahmu tanpa kamu perlu berusaha keras. Manfaatkan momentum langka ini.',
harmony:'Hari ini koneksi, peluang, dan pintu-pintu baru terbuka secara natural dan organik. Energi ini sangat selaras dengan sifat determined dan enterprising yang kamu miliki.',
conflict:'偏财 juga berarti uang yang datang cepat dan pergi sama cepatnya. Waspada overconfidence dan pengeluaran impulsif yang dipicu oleh mood yang sangat baik.',

career:{
intro:'Hari terbaik untuk networking, negosiasi deal, sales, dan membangun koneksi yang akan membuka pintu besar di masa depan.',
cells:[
  {ico:'🌐',lbl:'Momentum Hari Ini',txt:'Hari ini kamu adalah magnet alami yang kuat — orang-orang, peluang, dan koneksi bermakna gravitasi ke arahmu tanpa kamu perlu berusaha keras atau berpura-pura. Manfaatkan energi langka ini bukan hanya untuk kepentingan profesional jangka pendek, tapi untuk membangun jaringan yang akan sangat bermanfaat jauh ke masa depan.',accent:'gold',tag:'good'},
  {ico:'🤝',lbl:'Tipe Pekerjaan Cocok',txt:'Sales, business development, networking strategis, negosiasi deal yang sudah hampir close, pitching ke investor atau klien baru, atau membangun partnership yang sudah lama kamu inginkan. Semua pekerjaan yang melibatkan mempertemukan dua pihak untuk menciptakan nilai berjalan sangat baik hari ini.',accent:'teal'},
  {ico:'👥',lbl:'Dinamika Atasan & Tim',txt:'Hari yang sangat baik untuk menunjukkan inisiatif dan koneksi yang kamu miliki kepada atasan — bukan dengan cara yang memperlihatkan diri, tapi dengan cara yang genuine dan memberikan nilai nyata. Tim akan melihatmu sebagai connector yang sangat berharga. Kalau ada konflik dalam tim, kamu adalah mediator paling efektif hari ini.',accent:'teal',wide:true},
  {ico:'📞',lbl:'Fokus Aksi Terbaik',txt:'Hubungi minimal tiga kontak yang sudah lama tidak kamu sapa — bukan untuk kepentingan langsung, tapi untuk memperbarui relasi secara genuine. Koneksi yang kamu rawat hari ini bisa menjadi pintu yang sangat penting di saat yang paling tidak kamu duga.',accent:'gold'},
  {ico:'🚫',lbl:'Yang Harus Dihindari',txt:'Mengabaikan follow-up setelah interaksi yang menjanjikan hari ini. Peluang yang datang di hari 偏财 memiliki masa kadaluarsa yang pendek — kalau tidak ditindaklanjuti dalam 24–48 jam, momentumnya hilang begitu saja.',accent:'red'},
  {ico:'💡',lbl:'Insight Personal',txt:'偏财 mengajarkan bahwa kekayaan sejati bukan tentang berapa banyak yang kamu miliki sendiri, tapi tentang seberapa luas jaringan relasi yang ingin membantumu ketika kamu membutuhkan sesuatu. Hari ini adalah investasi dalam kekayaan jenis itu.',accent:'teal',wide:true},
]},

health:{
intro:'Tubuh dan energi dalam kondisi optimal dan stabil hari ini — sempurna untuk aktivitas sosial dan fisik yang penuh semangat.',
cells:[
  {ico:'💪',lbl:'Organ yang Perlu Perhatian',txt:'Lambung, limpa, dan sistem otot ketiganya dalam kondisi optimal hari ini — elemen Tanah yang kuat dari 偏财 mendukung dan memperkuat organ-organ ini secara langsung. Kamu mungkin merasa lebih kuat, lebih bertenaga, dan lebih grounded dari hari-hari biasanya.',accent:'gold',bar:{pct:82,cls:'gold'}},
  {ico:'⚡',lbl:'Level & Pola Energi',txt:'Energi stabil dan merata sepanjang hari tanpa puncak atau lembah yang ekstrem. Ini adalah jenis energi terbaik untuk aktivitas yang membutuhkan stamina dan konsistensi tinggi — bukan untuk sprint pendek yang intens tapi cepat habis.',accent:'teal',bar:{pct:80,cls:'teal'}},
  {ico:'🌳',lbl:'Aktivitas yang Dianjurkan',txt:'Aktivitas outdoor dan sosial adalah pilihan terbaik hari ini: hiking bersama kelompok, olahraga tim yang menyenangkan, atau aktivitas di alam terbuka. Elemen Tanah sangat terkoneksi dengan bumi — semakin dekat kakimu dengan tanah dan alam terbuka, semakin terisi energimu.',accent:'dim'},
  {ico:'🥗',lbl:'Makanan & Minuman Hari Ini',txt:'Elemen Tanah yang kuat hari ini mendukung pencernaan yang optimal dan efisien. Konsumsi makanan yang bergizi dan berwarna-warni beragam — sayuran dengan warna yang berbeda-beda, protein lengkap dari berbagai sumber, dan karbohidrat kompleks. Hindari makan berlebihan meski selera makan sedang sangat meningkat.',accent:'teal',wide:true},
  {ico:'🕐',lbl:'Chinese Body Clock',txt:'Jam 07:00–09:00 adalah jam Lambung yang paling aktif hari ini — sarapan bergizi di jam ini sangat penting dan nutrisi yang masuk di sini akan diserap dengan efisiensi tertinggi. Jangan lewatkan sarapan bergizi dan terencana di jam ini apapun yang terjadi.',accent:'gold'},
  {ico:'⚠️',lbl:'Pantangan Hari Ini',txt:'Makan berlebihan adalah pantangan utama di hari dengan elemen Tanah yang kuat. Selera makanmu mungkin meningkat signifikan, tapi tubuhmu tidak membutuhkan sebanyak itu. Makan perlahan, kunyah dengan baik, dan berhenti sebelum kenyang penuh.',accent:'dim'},
]},

finance:{
intro:'Hari terbaik dalam siklus untuk aktivitas finansial — peluang datang dari koneksi dan arah yang tidak terduga.',
cells:[
  {ico:'💰',lbl:'Arus Rezeki',txt:'Rezeki datang dari arah yang tidak kamu duga hari ini — bukan dari sumber utamamu, tapi dari koneksi, peluang sampingan, atau pertemuan tak terduga yang tiba-tiba membuka pintu yang selama ini tertutup. Tetap buka mata dan telinga penuh sepanjang hari ini.',accent:'gold',bar:{pct:85,cls:'gold'}},
  {ico:'📊',lbl:'Tipe Investasi Sesuai',txt:'偏财 adalah energi investasi yang paling aktif dan ekspansif dalam Bazi. Cocok untuk: saham pertumbuhan yang kamu sudah riset, bisnis sampingan yang sudah lama kamu pertimbangkan, atau apapun yang melibatkan ekspansi dan pengambilan risiko yang terkalkulasi dengan baik.',accent:'teal',tag:'good'},
  {ico:'⚡',lbl:'Yang Perlu Diwaspadai',txt:'Energi yang sangat baik hari ini bisa menciptakan overconfidence finansial yang berbahaya. "Hari ini saja" adalah kalimat paling mahal yang bisa kamu ucapkan — pengeluaran impulsif yang dijustifikasi dengan mood baik bisa menghapus semua rezeki yang masuk dalam sekejap.',accent:'red',tag:'warn'},
  {ico:'🧭',lbl:'Arah & Angka Beruntung',txt:'Arah Sukses dari Kua numbermu adalah arah terpenting untuk semua urusan finansial dan bisnis hari ini. Untuk meeting atau negosiasi penting, usahakan posisi duduk menghadap atau dengan pintu di arah tersebut. Warna yang selaras dengan Lucky element-mu juga mendukung energi hari ini.',accent:'teal',wide:true},
  {ico:'💡',lbl:'Insight Finansial',txt:'Orang yang kamu temui hari ini bisa lebih berharga dari jumlah uang apapun dalam rekeningmu. Satu koneksi yang tepat di hari 偏财 bisa membuka peluang yang nilainya jauh melampaui semua investasi finansial yang kamu miliki saat ini.',accent:'gold'},
  {ico:'✅',lbl:'Satu Aksi Terbaik',txt:'Kirimkan satu penawaran atau proposal kerjasama ke seseorang yang sudah lama kamu pertimbangkan untuk diajak berkolaborasi. Momentum hari ini secara signifikan mendukung respons yang positif.',accent:'teal'},
]},

romance:{
intro:'Magnetisme sosialmu sangat tinggi hari ini — orang tertarik pada energi percaya dirimu yang natural dan ekspansif.',
cells:[
  {ico:'🌟',lbl:'Vibrasi Relasi',txt:'Ada energi yang sangat ekspansif dan menarik darimu hari ini — kepercayaan dirimu natural, sikapmu terbuka dan welcoming, dan cara kamu hadir dalam percakapan membuat semua orang ingin terus berada di dekatmu. Ini bukan performance yang kamu buat-buat; ini adalah versi terbaikmu yang muncul secara organik.',accent:'gold'},
  {ico:'💬',lbl:'Cara Komunikasi Terbaik',txt:'Komunikasi yang proaktif dan generous adalah cara terbaikmu hari ini — jadilah orang yang memulai percakapan, yang pertama mengapresiasi dengan tulus, yang pertama mengajak beraktivitas bersama. Energi 偏财 berjalan paling indah ketika kamu menjadi pemberi yang genuine dalam setiap interaksi.',accent:'teal',wide:true},
  {ico:'💎',lbl:'Kekuatan Relasi',txt:'Pengalaman dan momen bermakna yang kamu ciptakan hari ini jauh lebih bernilai dari materi apapun. Membawa seseorang ke tempat yang tidak terduga, merencanakan kejutan kecil yang thoughtful, atau memberikan perhatian penuh dalam percakapan — hal-hal kecil ini punya dampak yang sangat besar hari ini.',accent:'gold',tag:'good'},
  {ico:'💸',lbl:'Potensi Gesekan',txt:'Jangan jadikan kemampuan finansial, status sosial, atau prestasi sebagai topik utama atau alat dalam interaksi romantis hari ini. Energi 偏财 bisa mengundang dinamika yang superfisial dan tidak nyaman kalau tidak dikelola dengan kesadaran yang baik.',accent:'red'},
  {ico:'📍',lbl:'Lokasi & Aktivitas Ideal',txt:'Tempat yang memiliki energi hidup, kemungkinan pertemuan tak terduga, dan nuansa petualangan kecil: pasar seni, festival kuliner, taman kota yang ramai di akhir pekan, atau event komunitas yang menarik. Energi 偏财 sangat menyukai kejutan dan spontanitas yang menyenangkan.',accent:'teal',wide:true},
  {ico:'💡',lbl:'Insight untuk Relasi',txt:'偏财 mengajarkan bahwa keberuntungan dalam cinta bukan tentang menemukan orang yang sempurna di tempat yang tepat dan waktu yang tepat. Tapi tentang menjadi versi dirimu yang paling siap dan paling terbuka ketika kesempatan itu datang. Hari ini kamu adalah versi itu.',accent:'dim'},
]},
},

/* ────────────────── 正财 Direct Wealth ─────────────────── */
'正财': {
energy:'Tanah yang lembut dan subur memberikan nutrisi stabil hari ini — rezeki dari kerja keras konsisten, ketekunan, dan integritas yang telah kamu bangun selama ini.',
harmony:'正财 sangat menghargai ketekunan, kejujuran, dan kerja yang nyata — nilai-nilai yang sudah melekat kuat dalam dirimu. Hari ini usaha-usaha sebelumnya mulai menghasilkan bukti nyata.',
conflict:'Energi ini cenderung lambat dan prosedural. Kalau kamu orang yang suka bergerak cepat dan spontan, hari ini mungkin terasa membosankan atau penuh birokrasi yang menguras kesabaran.',

career:{
intro:'Hari untuk menyelesaikan yang sudah berjalan dengan sempurna, bukan memulai yang baru. Ketekunan dan detail adalah kuncimu hari ini.',
cells:[
  {ico:'🏗️',lbl:'Momentum Hari Ini',txt:'Hari ini adalah tentang membangun dengan sabar dan penuh perhatian — setiap detail yang kamu perhatikan dan setiap tugas yang kamu selesaikan dengan baik adalah bata yang kamu letakkan untuk fondasi yang akan menopang pencapaian besar di masa depan. Tidak spektakuler dari luar, tapi sangat fundamental.',accent:'gold'},
  {ico:'📋',lbl:'Tipe Pekerjaan Cocok',txt:'Pekerjaan yang membutuhkan ketekunan, presisi, dan perhatian terhadap detail: laporan keuangan atau analisis data, dokumentasi proyek, review quality control, administrative task yang membutuhkan ketelitian tinggi. Energi 正财 menghargai hal-hal yang dikerjakan dengan teliti dan penuh tanggung jawab.',accent:'teal'},
  {ico:'👔',lbl:'Dinamika Atasan & Tim',txt:'Dengan atasan: hari yang sangat baik untuk menunjukkan track record dan konsistensimu melalui hasil kerja yang solid — bukan melalui kata-kata atau presentasi diri. Dengan tim: kamu adalah orang paling reliable dan dapat diandalkan hari ini — manfaatkan posisi ini untuk memperkuat kepercayaan yang sudah ada.',accent:'dim',wide:true},
  {ico:'📑',lbl:'Fokus Aksi Terbaik',txt:'Pilih satu pekerjaan penting yang sudah hampir selesai dan tuntas-kan hari ini dengan standar setinggi yang kamu bisa. Kepuasan dari menyelesaikan sesuatu secara sempurna memberikan momentum positif yang terasa kuat dan terbawa ke hari-hari berikutnya.',accent:'gold'},
  {ico:'⏩',lbl:'Yang Harus Dihindari',txt:'Terburu-buru dan melewatkan detail sekecil apapun. Energi 正财 sangat sensitif terhadap ketidaktepatan — kesalahan kecil di hari ini cenderung memiliki konsekuensi yang lebih besar dan lebih panjang dari yang biasanya.',accent:'red'},
  {ico:'💡',lbl:'Insight Personal',txt:'正财 mengajarkan nilai konsistensi yang invisible — pekerjaan yang tidak ada yang melihat secara langsung, tapi selalu ada yang merasakan hasilnya secara nyata. Orang-orang yang paling sukses dan bertahan lama adalah mereka yang bisa menghargai hari-hari seperti ini dengan sepenuh hati.',accent:'teal',wide:true},
]},

health:{
intro:'Tubuh meminta ritme yang stabil dan konsisten hari ini — makan teratur, tidur cukup, dan rutinitas yang terpelihara.',
cells:[
  {ico:'🫁',lbl:'Organ yang Perlu Perhatian',txt:'Lambung, limpa, dan pankreas adalah organ elemen Tanah yang paling responsif hari ini. Ini adalah hari yang sangat baik untuk menjaga ritme makan yang teratur dan konsisten — tubuhmu merespons sangat positif terhadap predictability dan konsistensi hari ini.',accent:'gold',bar:{pct:72,cls:'gold'}},
  {ico:'🔋',lbl:'Level & Pola Energi',txt:'Energi terasa stabil seperti lilin yang terbakar merata dan konsisten — bukan api unggun yang menyala besar tapi cepat habis. Manfaatkan ini untuk pekerjaan yang membutuhkan fokus panjang dan konsisten, bukan untuk sprint intens yang memerlukan ledakan energi besar sesaat.',accent:'teal',bar:{pct:70,cls:'teal'}},
  {ico:'🧘',lbl:'Aktivitas yang Dianjurkan',txt:'Olahraga dengan ritme yang stabil dan terukur: jalan kaki 30–45 menit dengan kecepatan konstan, bersepeda santai di pagi hari, atau renang dengan kecepatan yang terjaga. Stretching ringan selama 10 menit sebelum memulai aktivitas hari adalah ritual terbaik untuk hari 正财.',accent:'dim'},
  {ico:'🥙',lbl:'Makanan & Minuman Hari Ini',txt:'Makanan yang mudah dicerna, bergizi seimbang, dan tidak ekstrem dalam rasa atau porsi. Hindari makanan yang terlalu pedas, terlalu manis, atau terlalu berat dan berlemak tinggi. Nasi dengan lauk sederhana bergizi, sayur rebus, dan buah segar adalah pilihan paling ideal. Makan di jam yang sama setiap hari.',accent:'teal',wide:true},
  {ico:'🕐',lbl:'Chinese Body Clock',txt:'Jam 07:00–09:00 (Lambung) dan 09:00–11:00 (Limpa) adalah dua jam berturut-turut yang paling penting untuk tubuhmu hari ini. Sarapan bergizi sebelum jam 09:00 dan aktivitas ringan setelahnya akan membuat sistem pencernaanmu bekerja dengan efisiensi tertinggi sepanjang hari.',accent:'gold'},
  {ico:'⚠️',lbl:'Pantangan Hari Ini',txt:'Mengganti rutinitas secara mendadak tanpa persiapan, melewatkan makan di jam yang biasa, atau tidur di jam yang sangat berbeda dari biasanya. Tubuhmu hari ini sangat menyukai predictability — gangguan terhadap ritme regularmu akan terasa lebih berat dan lebih mengganggu dari biasanya.',accent:'red'},
]},

finance:{
intro:'Rezeki hari ini datang dari kerja keras konsisten dan integritas yang telah kamu bangun — bukan windfall, tapi earned income yang sangat memuaskan.',
cells:[
  {ico:'📊',lbl:'Arus Rezeki',txt:'Rezeki hari ini datang dari jalur yang sudah kamu kenal dengan baik — gaji, pembayaran proyek yang sudah selesai dengan tuntas, atau pengembalian nyata atas kerja keras yang sudah lama kamu lakukan dengan konsisten. Bukan windfall yang tiba-tiba, tapi penghasilan yang deserved dan sangat memuaskan.',accent:'teal',bar:{pct:72,cls:'teal'}},
  {ico:'🏦',lbl:'Tipe Investasi Sesuai',txt:'Hari terbaik untuk instrumen yang konservatif dan terstruktur dengan baik: deposito berjangka, reksa dana pendapatan tetap, obligasi pemerintah seri terbaru, atau menabung secara konsisten ke rekening yang sudah kamu dedikasikan. 正财 tidak menyukai spekulasi — ia menghargai keamanan dan pertumbuhan yang gradual tapi sangat pasti.',accent:'gold',tag:'good'},
  {ico:'🔒',lbl:'Proteksi Finansial',txt:'Buat atau review anggaran bulananmu dengan cermat. Identifikasi minimal satu kebocoran finansial yang bisa kamu tutup mulai hari ini. Kecil tapi sangat konsisten — itulah filosofi inti 正财 dalam pengelolaan keuangan pribadi.',accent:'dim'},
  {ico:'🧭',lbl:'Arah & Angka Beruntung',txt:'Untuk urusan finansial formal hari ini, gunakan arah Sukses dari Kua numbermu saat posisi duduk atau pertemuan. Dokumen finansial yang kamu tandatangani hari ini memiliki energi yang sangat mendukung kelancaran dan keuntungan jangka panjang.',accent:'teal',wide:true},
  {ico:'💡',lbl:'Insight Finansial',txt:'Kemakmuran yang dibangun dari energi 正财 mungkin tidak terlihat menarik atau glamor dari luar. Tapi ia adalah jenis kemakmuran yang paling tahan banting, paling sulit dihancurkan, dan paling memberikan ketenangan sejati. Proses ini layak dihargai dan dirayakan.',accent:'gold'},
  {ico:'✅',lbl:'Satu Aksi Terbaik',txt:'Set up autodebit untuk tabungan atau investasi rutin bulanan jika belum ada. Otomasi adalah cara terbaik untuk menghormati energi 正财 — bayar dirimu sendiri dulu sebelum semua pengeluaran lainnya, sekecil apapun jumlahnya.',accent:'teal'},
]},

romance:{
intro:'Energi yang stabil, hangat, dan dapat diandalkan hari ini menciptakan rasa aman yang sangat dihargai dalam relasi apapun.',
cells:[
  {ico:'🌱',lbl:'Vibrasi Relasi',txt:'Kamu memancarkan energi yang sangat aman dan dapat diandalkan hari ini — seperti pohon yang sudah berakar kuat dan memberikan naungan nyata bagi orang-orang di sekitarnya. Ini bukan daya tarik yang meledak-ledak dan dramatis, tapi jauh lebih bernilai: orang merasa bisa benar-benar mempercayai dan mengandalkanmu.',accent:'teal'},
  {ico:'💬',lbl:'Cara Komunikasi Terbaik',txt:'Komunikasi yang konsisten dan reliably ada — membalas pesan tepat waktu, menepati janji kecil yang mungkin terlihat sepele, hadir sepenuhnya ketika dibutuhkan tanpa menunggu diminta. Di hari 正财, tindakan konkret berbicara jauh lebih keras dari kata-kata seindah apapun.',accent:'gold',wide:true},
  {ico:'💝',lbl:'Kekuatan Relasi',txt:'Ketulusan dan kebaikan hatimu bersinar sangat natural dan tanpa paksaan hari ini. Orang-orang yang sudah mengenalmu akan merasakan betapa beruntungnya mereka memilikimu dalam kehidupan mereka — bahkan tanpa kamu harus mengucapkan atau melakukan sesuatu yang spesial.',accent:'gold',tag:'good'},
  {ico:'🐢',lbl:'Ritme yang Tepat',txt:'Hari ini bukan untuk grand gesture atau momen yang dramatis dan tidak terduga — lebih cocok untuk koneksi yang tenang, dalam, dan bermakna secara personal. Makan malam di rumah bersama, berbagi cerita tentang hari masing-masing, atau hanya duduk berdampingan tanpa perlu berbuat banyak.',accent:'dim'},
  {ico:'📍',lbl:'Lokasi & Aktivitas Ideal',txt:'Tempat yang familiar, nyaman, dan penuh memori positif yang sudah kamu bangun bersama — restoran langganan yang kamu berdua suka, taman yang sering kamu kunjungi, atau sekadar rumah yang hangat. Energi 正财 tidak butuh kebaruan yang memaksa; ia butuh kedalaman dan kenyamanan yang sudah terbangun.',accent:'teal',wide:true},
  {ico:'💡',lbl:'Insight untuk Relasi',txt:'正财 mengajarkan bahwa cinta yang paling bertahan adalah yang dibangun dari kepercayaan yang dikumpulkan sedikit demi sedikit, dari hari ke hari biasa yang mungkin tidak terasa istimewa — bukan dari momen-momen besar yang jarang terjadi. Hari-hari biasa seperti ini adalah fondasi dari hubungan yang luar biasa.',accent:'dim'},
]},
},

/* ────────────────── 七杀 7 Killings ────────────────────── */
'七杀': {
energy:'Tekanan dan tantangan hadir hari ini untuk menguji ketangguhan sejatimu. Seperti logam yang ditempa — semakin besar tekanan, semakin kuat hasilnya.',
harmony:'Ketangguhan dan determinasimu sangat dibutuhkan hari ini. Orang yang melihatmu menghadapi tekanan dengan kepala tegak akan sangat menghormati dan mengingat sikapmu.',
conflict:'Konfrontasi, konflik otoritas, dan situasi yang menguras tenaga bisa muncul bersamaan. Hari ini butuh kehati-hatian ekstra dalam setiap langkah dan setiap kata.',

career:{
intro:'Hari penuh tuntutan tinggi — tapi ini juga hari terbaik untuk membangun reputasi yang tidak bisa dibeli dengan cara lain.',
cells:[
  {ico:'⚔️',lbl:'Tekanan Hari Ini',txt:'Hari ini seperti ujian ketangguhan yang tidak diumumkan sebelumnya. Tekanan dari sistem, atasan, atau situasi yang tidak terduga akan menguji seberapa dalam akarmu benar-benar tertancap. Ini bukan hukuman — ini adalah proses pembentukan yang akan membuat versi selanjutnya darimu jauh lebih kuat.',accent:'gold'},
  {ico:'🎯',lbl:'Tipe Pekerjaan Cocok',txt:'Pekerjaan yang membutuhkan ketegasan di bawah tekanan, kepemimpinan di situasi krisis, dan problem-solving yang cepat namun terstruktur. Jika ada masalah besar yang sedang mengancam — hari ini kamu punya energi dan kejelasan untuk menghadapinya secara langsung dan tuntas.',accent:'teal'},
  {ico:'👔',lbl:'Dinamika Atasan & Tim',txt:'Tekanan dari atasan hari ini kemungkinan lebih tinggi dari biasanya — tapi ingat bahwa 七杀 yang terkontrol adalah simbol otoritas dan kekuasaan yang sejati. Tunjukkan bahwa kamu bisa diandalkan di situasi paling sulit sekalipun. Dengan tim: jaga nada bicaramu agar tekanan yang kamu rasakan tidak ikut tumpah ke rekan yang tidak bersalah.',accent:'red',wide:true,tag:'warn'},
  {ico:'🎯',lbl:'Fokus Aksi Terbaik',txt:'Pilih SATU prioritas terpenting dan fokuskan semua energimu padanya secara total dan tanpa distraksi. Energi 七杀 seperti laser yang sangat powerful — efektif luar biasa ketika difokuskan ke satu titik, tapi hampir tidak berguna ketika disebarkan ke banyak arah sekaligus.',accent:'gold'},
  {ico:'💣',lbl:'Yang Harus Dihindari',txt:'Konfrontasi frontal tanpa persiapan yang sangat matang, keputusan besar di bawah tekanan emosional yang tinggi, dan memaksakan diri secara fisik jauh di luar batas kemampuan normal. Hari ini butuh kehati-hatian ekstra di setiap langkah.',accent:'red',tag:'warn'},
  {ico:'💡',lbl:'Insight Personal',txt:'七杀 mengajarkan bahwa kekuatan sejati bukan tentang siapa yang paling keras suaranya atau paling banyak yang bisa dilakukan sekaligus. Tapi tentang siapa yang tetap tegak, jernih, dan purposeful ketika semua orang lain sudah goyah. Hari ini sedang mengukur kualitas itu dalam dirimu.',accent:'teal',wide:true},
]},

health:{
intro:'Stres fisik dan mental lebih tinggi dari biasanya hari ini. Manajemen energi adalah skill terpenting yang perlu kamu praktikkan.',
cells:[
  {ico:'🫀',lbl:'Organ yang Perlu Perhatian',txt:'Sistem pernapasan, kepala, dan area tenggorokan adalah zona yang paling rentan di hari clash elemen ini. Tanda-tanda fisik yang mungkin muncul sebagai manifestasi tekanan: sesak di dada, sakit kepala yang datang tiba-tiba, atau tenggorokan yang terasa kencang dan tertekan.',accent:'gold',bar:{pct:42,cls:'red'}},
  {ico:'😰',lbl:'Level & Pola Energi',txt:'Energi terasa seperti tali yang ditarik dari dua arah yang berlawanan — kamu butuh banyak tapi banyak pula yang menguras secara bersamaan. Manajemen energi adalah skill terpenting hari ini: ketahui dengan pasti kapan harus maju dan kapan harus mundur untuk mengisi ulang.',accent:'red',bar:{pct:40,cls:'red'}},
  {ico:'🌬️',lbl:'Aktivitas yang Dianjurkan',txt:'Teknik pernapasan 4-7-8 (hirup 4 detik, tahan 7 detik, keluarkan 8 detik) — lakukan 4-5 kali ketika merasa overwhelmed atau tegang. Meditasi body scan singkat selama 10 menit sebelum tidur untuk melepas ketegangan otot yang terakumulasi sepanjang hari yang berat ini.',accent:'dim'},
  {ico:'🍵',lbl:'Makanan & Minuman Hari Ini',txt:'Fokus pada makanan anti-inflamasi dan yang menenangkan sistem saraf: teh hijau atau chamomile hangat, dark chocolate 70%+, ikan berlemak (salmon atau sarden), dan sayuran hijau gelap yang kaya magnesium. Hindari kafein berlebihan, alkohol, dan makanan sangat pedas yang akan memperparah ketegangan yang sudah ada.',accent:'teal',wide:true},
  {ico:'🕐',lbl:'Chinese Body Clock',txt:'Jam 03:00–05:00 adalah jam organ pernapasan yang paling aktif dalam TCM — dan yang paling tertekan di hari 七杀. Jika kamu terbangun di jam ini tanpa sebab yang jelas, itu bisa jadi sinyal bahwa ada sesuatu yang belum terselesaikan secara emosional dan sedang coba diproses oleh tubuhmu.',accent:'gold'},
  {ico:'🔇',lbl:'Pantangan Hari Ini',txt:'Lingkungan yang sangat bising, stimulasi berlebihan dari berbagai sumber sekaligus, dan olahraga intens yang semakin memicu adrenalin tinggi. Semua ini akan memperburuk sistem saraf yang sudah berada dalam combat mode. Pilih ketenangan secara aktif kapanpun ada kesempatan.',accent:'red',tag:'warn'},
]},

finance:{
intro:'Hari untuk bertahan dan melindungi, bukan untuk ekspansi. Fokus pada proteksi apa yang sudah ada.',
cells:[
  {ico:'🛡️',lbl:'Arus Rezeki',txt:'Ini bukan hari untuk ekspansi finansial dalam bentuk apapun — ini adalah hari untuk melindungi dengan cerdas semua yang sudah ada. Seperti prajurit yang lebih bijak untuk bertahan di balik perisai yang kuat daripada menyerang di tengah badai yang tidak menguntungkan.',accent:'red',bar:{pct:35,cls:'red'}},
  {ico:'📊',lbl:'Tipe Investasi Sesuai',txt:'Tidak ada instrumen investasi yang ideal untuk dieksekusi hari ini. Jika ada posisi yang sudah lama membuatmu khawatir — ini bisa jadi waktu tepat untuk melakukan stop-loss dan menerima kerugian kecil yang terkontrol sebelum berkembang menjadi kerugian besar yang tidak terkontrol.',accent:'dim'},
  {ico:'⚡',lbl:'Risiko Utama',txt:'Pengeluaran mendadak akibat situasi darurat yang muncul tidak terduga — hal-hal mekanis, elektronik, atau kebutuhan yang sama sekali tidak terencana. Pastikan kamu punya akses mudah ke dana darurat yang mencukupi hari ini.',accent:'red',tag:'warn'},
  {ico:'🧭',lbl:'Arah & Angka Beruntung',txt:'Gunakan arah Sukses dari Kua numbermu sebagai perlindungan, bukan ekspansi. Untuk masalah finansial yang harus dihadapi hari ini, hadapi dengan posisi menghadap arah ini untuk mendapatkan dukungan energi yang lebih stabil dan mendukung.',accent:'teal',wide:true},
  {ico:'💡',lbl:'Insight Finansial',txt:'Kemampuan untuk bertahan dalam tekanan tanpa membuat keputusan buruk yang terburu-buru adalah skill finansial yang sangat langka dan sangat berharga. Banyak orang kehilangan uang bukan karena investasi yang salah, tapi karena panik dan bereaksi impulsif di momen yang paling tidak tepat.',accent:'gold'},
  {ico:'✅',lbl:'Satu Aksi Terbaik',txt:'Review dan pastikan dana darurat di rekeningmu mencukupi minimal 3 bulan pengeluaran rutin. Jika belum, buat rencana konkret yang realistis untuk mencapai angka itu — mulai dari berapa yang bisa kamu sisihkan minggu ini.',accent:'dim'},
]},

romance:{
intro:'Tegangan lebih tinggi dari biasanya dalam interaksi hari ini — kelola dengan sadar agar tidak melukai yang paling kamu sayangi.',
cells:[
  {ico:'🌋',lbl:'Vibrasi Relasi',txt:'Ada tegangan yang lebih tinggi dari biasanya dalam semua interaksi sosialmu hari ini — bukan karena ada yang salah secara fundamental, tapi karena energi 七杀 secara alami menciptakan dinamika yang lebih intens dan tajam. Ini bisa menjadi keintiman yang mendalam atau konflik yang tidak perlu, tergantung sepenuhnya bagaimana kamu memilih untuk mengelolanya.',accent:'red'},
  {ico:'💬',lbl:'Cara Komunikasi Terbaik',txt:'Komunikasi yang pendek, jelas, dan tidak ambigu adalah cara terbaik hari ini. Hindari percakapan panjang tentang isu-isu sensitif yang sudah lama tertunda — bukan hari yang tepat untuk membahasnya. Semakin singkat dan jelas komunikasimu, semakin kecil peluang terjadinya miskomunikasi yang memicu konflik.',accent:'teal',wide:true},
  {ico:'🗝️',lbl:'Kekuatan Relasi',txt:'Ketangguhan dan ketenangan yang kamu tunjukkan di bawah tekanan hari ini adalah daya tarik yang sangat powerful dan tahan lama — jauh lebih berkesan dari semua kata-kata romantis yang pernah kamu ucapkan. Pasanganmu melihatmu menghadapi hari yang berat dan tetap berdiri tegak — itu meninggalkan kesan yang mendalam.',accent:'gold',tag:'good'},
  {ico:'🌋',lbl:'Potensi Gesekan',txt:'Stres dari hari yang berat ini bisa terbawa tanpa sadar ke interaksi dengan orang yang paling kamu sayangi. Sebelum pulang atau bertemu pasangan, lakukan decompression ritual kecil: 5 menit sendiri, tarik napas dalam beberapa kali, dan sadarkan dirimu bahwa mereka bukan penyebab tekanan hari ini.',accent:'red',tag:'warn'},
  {ico:'📍',lbl:'Lokasi & Aktivitas Ideal',txt:'Tempat yang sunyi, natural, dan memberikan ruang yang cukup untuk bernapas dengan leluasa — taman yang sepi di sore hari, pantai yang tidak ramai, atau sekadar duduk di teras rumah di malam hari. Alam memiliki kemampuan yang unik untuk menetralisir energi 七杀 yang keras.',accent:'dim',wide:true},
  {ico:'💡',lbl:'Insight untuk Relasi',txt:'七杀 mengajarkan bahwa relasi yang benar-benar kuat dibangun bukan di momen yang indah dan mudah, tapi di saat-saat sulit dan penuh tekanan seperti ini. Bagaimana kamu dan pasanganmu melewati hari yang berat bersama — itulah ukuran sesungguhnya dari kekuatan hubungan kalian.',accent:'teal'},
]},
},

/* ────────────────── 正官 Direct Officer ────────────────── */
'正官': {
energy:'Logam presisi membentuk dan mengarahkan dengan tangan yang terlatih hari ini — energi struktur, tanggung jawab, dan pengakuan dari sistem bekerja untukmu.',
harmony:'Energi 正官 mengakui dan memberi penghargaan pada kerja keras yang konsisten dan berintegritas. Karaktermu yang straight-forward dan determined sangat dihargai oleh sistem hari ini.',
conflict:'Terlalu banyak aturan dan prosedur bisa terasa membatasi kebebasanmu. Waspada overthinking tentang cara yang benar hingga melupakan intuisi dan melupakan untuk bergerak maju.',

career:{
intro:'Hari terbaik untuk semua urusan resmi dan institusional — wawancara, promosi, kontrak, dan pertemuan formal dengan atasan atau klien penting.',
cells:[
  {ico:'🏛️',lbl:'Momentum Hari Ini',txt:'Hari ini sistem, institusi, dan otoritas formal bekerja untukmu — bukan melawanmu. Ini adalah hari di mana mengikuti prosedur yang benar dengan penuh integritas membuka pintu yang biasanya tertutup, dan track record yang selama ini kamu bangun mendapat pengakuan nyata yang layak.',accent:'gold',tag:'good'},
  {ico:'📜',lbl:'Tipe Pekerjaan Cocok',txt:'Semua urusan yang membutuhkan formalitas, kredibilitas, dan representasi profesional yang kuat: wawancara kerja, evaluasi kinerja tahunan, presentasi ke direksi atau investor, penandatanganan kontrak penting, atau pertemuan resmi dengan klien institusional. Hari ini kamu tampil dengan otoritas yang sangat natural.',accent:'teal'},
  {ico:'👔',lbl:'Dinamika Atasan & Tim',txt:'Dengan atasan: cara kamu bekerja dan berkomunikasi hari ini meninggalkan kesan profesional yang sangat kuat dan tahan lama — manfaatkan ini sepenuhnya. Dengan tim: kamu adalah figur yang paling reliable dan dapat dipercaya hari ini — ambil kepemimpinan di situasi yang membutuhkan kepastian dan kejelasan arah.',accent:'teal',wide:true},
  {ico:'📑',lbl:'Fokus Aksi Terbaik',txt:'Selesaikan semua urusan formal yang sudah terlalu lama tertunda: dokumen resmi, kontrak yang menunggu, proposal formal, atau komunikasi penting dengan instansi atau klien yang sudah menunggu. Energi hari ini mendukung penyelesaian hal-hal serius yang butuh presisi tinggi.',accent:'gold'},
  {ico:'🐌',lbl:'Yang Harus Dihindari',txt:'Perfeksionisme yang melumpuhkan — mencari kesempurnaan hingga tidak ada yang benar-benar selesai dan maju. 正官 menghargai standar tinggi tapi juga sangat menghargai progress yang nyata dan konsisten. Done is better than perfect berlaku sepenuhnya hari ini.',accent:'red'},
  {ico:'💡',lbl:'Insight Personal',txt:'Hari 正官 ini adalah cerminan langsung dari tema utama fase hidupmu saat ini. Setiap langkah yang kamu ambil dengan integritas penuh hari ini adalah investasi langsung yang terasa nyata ke versi dirimu 5 tahun ke depan. Konsistensi hari ini adalah fondasi reputasi masa depanmu.',accent:'teal',wide:true},
]},

health:{
intro:'Tubuh dalam kondisi stabil dan bersih hari ini — sistem pernapasan dan paru-paru mendapat dukungan khusus.',
cells:[
  {ico:'🫁',lbl:'Organ yang Perlu Perhatian',txt:'Paru-paru dan sistem pernapasan dalam kondisi yang sangat baik hari ini — elemen Metal mendukung dan memperkuat organ-organ ini secara langsung. Ini adalah hari yang ideal untuk memberikan perhatian khusus pada kualitas dan kedalaman pernapasanmu, terutama jika kamu biasanya bernapas dangkal karena stres.',accent:'gold',bar:{pct:65,cls:'gold'}},
  {ico:'🔋',lbl:'Level & Pola Energi',txt:'Energi stabil dan clean seperti udara dingin di pagi hari yang cerah — segar, jernih, dan memberikan kejelasan pikiran yang luar biasa. Tidak terlalu meledak-ledak, tapi sangat sustain dan dapat diandalkan dengan konsisten sepanjang hari.',accent:'teal',bar:{pct:63,cls:'teal'}},
  {ico:'🚴',lbl:'Aktivitas yang Dianjurkan',txt:'Olahraga aerobik yang mendukung kapasitas paru-paru dan daya tahan: bersepeda dengan pace yang nyaman, jalan cepat 30–45 menit, atau renang yang fokus pada teknik pernapasan. Pernapasan yang dalam, teratur, dan penuh adalah kunci utama hari ini.',accent:'dim'},
  {ico:'🍃',lbl:'Makanan & Minuman Hari Ini',txt:'Makanan yang mendukung sistem pernapasan dan paru-paru secara spesifik: pir matang (dalam TCM sangat baik untuk paru-paru), lobak putih, bawang putih segar, dan makanan berwarna putih atau bening secara umum. Minum air putih minimal 2 liter hari ini untuk menjaga mukosa saluran pernapasan tetap lembab dan sehat.',accent:'teal',wide:true},
  {ico:'🕐',lbl:'Chinese Body Clock',txt:'Jam 03:00–05:00 (Paru-paru) dan 05:00–07:00 (Usus Besar) adalah jam organ Metal yang paling aktif. Jika kamu biasanya bangun pagi, rentang waktu ini sangat ideal untuk pernapasan dalam yang mindful atau meditasi singkat — tubuhmu sedang dalam mode purifikasi alami yang sangat optimal.',accent:'gold'},
  {ico:'😤',lbl:'Pantangan Hari Ini',txt:'Udara berpolusi, asap rokok aktif maupun pasif, dan lingkungan yang pengap dengan sirkulasi udara yang buruk. Usahakan berada di ruangan dengan sirkulasi udara yang baik dan segar sepanjang hari ini — lebih penting dari hari-hari biasa.',accent:'dim'},
]},

finance:{
intro:'Hari terbaik untuk semua urusan finansial formal dan terstruktur — kontrak, kredit, negosiasi gaji, dan legalitas.',
cells:[
  {ico:'📋',lbl:'Arus Rezeki',txt:'Rezeki hari ini datang melalui jalur yang resmi dan terstruktur dengan baik — transfer gaji, pembayaran kontrak yang sudah selesai, atau pengakuan formal atas jasa yang sudah kamu berikan dengan konsisten. Bukan windfall yang tiba-tiba, tapi earned income yang sangat memuaskan dan bermartabat.',accent:'teal',bar:{pct:62,cls:'teal'}},
  {ico:'🖊️',lbl:'Tipe Investasi Sesuai',txt:'Instrumen yang formal, regulated, dan terlindungi secara hukum adalah pilihan terbaik hari ini: reksa dana dari manajer investasi terdaftar OJK, SBR atau ORI (Surat Berharga Negara Ritel), atau membuka rekening investasi di lembaga keuangan resmi yang sudah lama kamu pertimbangkan.',accent:'gold',tag:'good'},
  {ico:'📌',lbl:'Hal yang Perlu Diperhatikan',txt:'Pastikan semua dokumen finansial yang kamu tandatangani hari ini sudah dibaca dengan sangat teliti kata per kata. Energi hari ini mendukung kesepakatan yang fair dan saling menguntungkan — tapi kejujuran dan integritasmu sendiri adalah kondisi yang harus selalu kamu penuhi.',accent:'dim'},
  {ico:'🧭',lbl:'Arah & Angka Beruntung',txt:'Untuk urusan finansial formal yang penting hari ini, arahkan meja kerja atau posisi dudukmu menghadap arah Sukses dari Kua numbermu. Warna yang selaras dengan Lucky element-mu mendukung energi profesional dan finansialmu yang sedang optimal.',accent:'teal',wide:true},
  {ico:'💡',lbl:'Insight Finansial',txt:'Reputasi finansialmu — credit score, rekam jejak pembayaran yang bersih, dan integritas dalam setiap transaksi sekecil apapun — adalah aset yang jauh lebih berharga dan tahan lama dari jumlah uang yang kamu miliki saat ini. Cara kamu mengelola uang dengan jujur mencerminkan siapa kamu sebagai manusia.',accent:'gold'},
  {ico:'✅',lbl:'Satu Aksi Terbaik',txt:'Periksa dan perbarui semua dokumen finansial pentingmu hari ini: polis asuransi, akun investasi, dan rencana keuangan jangka panjang. Pastikan semua masih relevan dan sesuai dengan kondisi dan tujuan hidupmu saat ini.',accent:'teal'},
]},

romance:{
intro:'Stabilitas, komitmen, dan kepercayaan adalah energi dominan relasimu hari ini — orang-orang merasa sangat aman di dekatmu.',
cells:[
  {ico:'🏛️',lbl:'Vibrasi Relasi',txt:'Ada kualitas yang sangat dapat diandalkan dan terpercaya darimu hari ini — orang-orang merasa bahwa kamu adalah seseorang yang benar-benar ada secara penuh, bukan hanya hadir secara fisik. Kualitas yang langka ini sangat dihargai secara mendalam dan tidak mudah dilupakan.',accent:'teal'},
  {ico:'💬',lbl:'Cara Komunikasi Terbaik',txt:'Komunikasi yang jelas, jujur, dan langsung pada intinya tanpa drama atau manipulasi emosional apapun. 正官 tidak menyukai ketidakjelasan yang berlarut-larut. Jika ada sesuatu yang penting yang ingin kamu sampaikan, katakan dengan sopan namun tegas hari ini. Kejelasanmu justru membuat orang lain merasa benar-benar dihormati.',accent:'gold',wide:true},
  {ico:'💍',lbl:'Kekuatan Relasi',txt:'Komitmen dan konsistensimu sangat terasa dan diapresiasi secara mendalam hari ini. Ini adalah momen yang tepat untuk membuktikan bahwa kamu menepati kata — jika kamu berjanji sesuatu, lakukanlah. Jika sudah ada komitmen yang dibuat, perkuat dan perjelas komitmen itu.',accent:'gold',tag:'good'},
  {ico:'📐',lbl:'Potensi Gesekan',txt:'Terlalu formal atau terlalu transaksional dalam situasi yang seharusnya santai dan penuh spontanitas. Tidak semua interaksi perlu agenda, target, dan deliverables yang jelas — belajarlah untuk hadir tanpa tujuan di luar menikmati momen indah bersama.',accent:'red'},
  {ico:'📍',lbl:'Lokasi & Aktivitas Ideal',txt:'Tempat yang elegan, bersih, dan memiliki standar yang tinggi — restoran yang baik dengan pelayanan yang baik, museum atau galeri seni, pertunjukan musik klasik atau jazz, atau pengalaman yang benar-benar quality over quantity. 正官 menghargai hal-hal yang dilakukan dengan benar dan penuh martabat.',accent:'teal',wide:true},
  {ico:'💡',lbl:'Insight untuk Relasi',txt:'正官 mengajarkan bahwa cinta yang paling abadi adalah cinta yang dibangun di atas rasa hormat yang mutual dan tulus dari kedua pihak — bukan hanya perasaan yang menggebu-gebu, tapi juga pengakuan nyata atas nilai dan integritas masing-masing orang. Hargai dirimu sendiri terlebih dahulu sebelum mengharapkan dihargai.',accent:'dim'},
]},
},

/* ────────────────── 偏印 Indirect Resource ─────────────── */
'偏印': {
energy:'Otakmu bekerja seperti teleskop hari ini — mampu melihat hal-hal jauh yang tidak terlihat oleh orang lain. Energi visioner dan pemikir strategis.',
harmony:'Intuisi dan kepekaan batinmu sangat tajam. Hari excellent untuk refleksi mendalam, riset, dan perencanaan jangka panjang yang strategis.',
conflict:'Terlalu banyak Air membuat pohon tumbuh ranting ke segala arah tanpa fokus. Waspada prokrastinasi dan banyak ide brilian tapi sedikit eksekusi nyata.',

career:{
intro:'Hari untuk berpikir mendalam dan merencanakan dengan matang, bukan untuk eksekusi besar yang membutuhkan momentum dari luar.',
cells:[
  {ico:'🔭',lbl:'Momentum Hari Ini',txt:'Hari ini otakmu bekerja seperti teleskop yang sangat presisi — mampu melihat hal-hal yang jauh di cakrawala yang tidak terlihat oleh kebanyakan orang. Energi 偏印 adalah energi para visioner dan pemikir strategis yang genuinely mengubah dunia. Gunakan kekuatan ini untuk merencanakan masa depan, bukan untuk mengeksekusi masa sekarang.',accent:'dim'},
  {ico:'🧪',lbl:'Tipe Pekerjaan Cocok',txt:'Riset mendalam yang membutuhkan konsentrasi penuh, analisis kompetitor yang objektif, perencanaan strategi jangka panjang, mapping risiko yang komprehensif, atau belajar skill baru yang sudah lama kamu inginkan. Semua pekerjaan yang membutuhkan pemikiran mendalam tanpa gangguan berjalan sangat optimal hari ini.',accent:'teal'},
  {ico:'👥',lbl:'Dinamika Atasan & Tim',txt:'Kamu lebih efektif sebagai pemikir di balik layar hari ini daripada sebagai aktor utama di depan semua orang. Hindari meeting panjang yang menguras konsentrasi berhargamu. Kalau bisa, minta waktu untuk bekerja secara mandiri — kontribusimu dalam bentuk pemikiran dan riset hari ini jauh lebih berharga dari sekadar kehadiran fisik.',accent:'dim',wide:true},
  {ico:'📚',lbl:'Fokus Aksi Terbaik',txt:'Pilih satu topik kritis yang ingin kamu kuasai secara mendalam — dedikasikan 2–3 jam fokus untuk riset yang tidak terganggu tentang topik itu. Pemahaman yang kamu bangun hari ini akan menjadi senjata yang sangat berguna dan relevan di hari-hari mendatang.',accent:'gold'},
  {ico:'📢',lbl:'Yang Harus Dihindari',txt:'Presentasi atau pitching penting, keputusan yang butuh kepastian tinggi, dan komitmen jangka panjang yang tidak bisa diubah. Energi hari ini membuat semua hal terasa lebih kompleks dan lebih berlapis dari yang sebenarnya.',accent:'red',tag:'warn'},
  {ico:'💡',lbl:'Insight Personal',txt:'偏印 mengajarkan bahwa pemahaman yang dalam dan genuine jauh lebih berharga dari tindakan yang cepat tapi dangkal. Dunia mengagumi orang yang bergerak cepat dan terlihat sibuk — tapi dunia sesungguhnya diubah oleh orang yang meluangkan waktu untuk berpikir dengan benar-benar dalam. Hari ini adalah harimu untuk menjadi yang terakhir itu.',accent:'teal',wide:true},
]},

health:{
intro:'Energi mental tinggi tapi fisik cenderung lemah — dengarkan tubuh lebih dari pikiran aktifmu hari ini.',
cells:[
  {ico:'🧠',lbl:'Organ yang Perlu Perhatian',txt:'Ginjal dan sistem saraf adalah organ utama yang dikelola elemen Air dalam TCM. Ketika Air terlalu kuat seperti hari ini, ginjal bekerja overtime dan sistem saraf menjadi hypersensitive — kamu mungkin merasa lebih mudah terkejut, lebih reaktif terhadap stimulus eksternal, atau jauh lebih intuitif dari biasanya.',accent:'gold',bar:{pct:40,cls:'gold'}},
  {ico:'😵',lbl:'Level & Pola Energi',txt:'Energi mental sangat aktif dan terus berputar, tapi energi fisik terasa relatif lemah dan tidak setimpal. Ini adalah mismatch khas di hari 偏印 — pikiranmu terus berlari sangat cepat sementara tubuhmu menginginkan istirahat yang nyata. Hari ini, dengarkan tubuhmu lebih banyak dari pikiranmu yang aktif.',accent:'red',bar:{pct:36,cls:'red'}},
  {ico:'🧘',lbl:'Aktivitas yang Dianjurkan',txt:'Meditasi mindfulness yang fokus pada sensasi fisik dan napas (bukan pada konten pikiran), yin yoga dengan pose-pose berbaring yang restoratif, atau sekadar duduk tenang di alam terbuka tanpa gadget apapun selama 20–30 menit. Tujuannya adalah menenangkan noise mental yang tidak berhenti.',accent:'dim'},
  {ico:'🫚',lbl:'Makanan & Minuman Hari Ini',txt:'Makanan yang menghangatkan dan menguatkan ginjal untuk menyeimbangkan kelebihan Air hari ini: kacang hitam, wijen hitam, kentang, walnut, dan makanan berwarna hitam atau gelap secara umum. Minum air hangat atau teh hangat alih-alih dingin. Hindari makanan terlalu asin yang membebani ginjal dan minuman bersuhu sangat dingin.',accent:'teal',wide:true},
  {ico:'🕐',lbl:'Chinese Body Clock',txt:'Jam 17:00–19:00 (Ginjal) dan 15:00–17:00 (Kandung Kemih) adalah jam organ Air yang paling aktif hari ini. Di rentang waktu ini, hindari kerja berat dan jadikan ini waktu untuk peregangan ringan yang mindful, hidrasi yang cukup, atau sekadar berjalan-jalan santai.',accent:'gold'},
  {ico:'💭',lbl:'Pantangan Hari Ini',txt:'Overthinking yang berlanjut hingga larut malam, scrolling tanpa henti sebelum tidur, dan stimulasi mental yang berlebihan setelah jam 20:00. Sistem sarafmu sangat butuh digital detox yang nyata hari ini — matikan semua notifikasi lebih awal dari biasanya.',accent:'red',tag:'warn'},
]},

finance:{
intro:'Hari untuk belajar dan memahami, bukan untuk eksekusi. Pengetahuan yang kamu bangun hari ini nilainya jauh melebihi transaksi apapun.',
cells:[
  {ico:'🔍',lbl:'Arus Rezeki',txt:'Hari ini bukan tentang mendatangkan rezeki baru yang besar — tapi tentang memahami rezeki yang sudah ada secara jauh lebih mendalam. Ini adalah hari untuk analisis yang tajam, bukan aksi. Dan pemahaman yang benar-benar kamu bangun hari ini bisa secara fundamental mengubah cara kamu mengelola keuanganmu seterusnya.',accent:'dim',bar:{pct:40,cls:'teal'}},
  {ico:'📖',lbl:'Tipe Investasi Sesuai',txt:'Tidak ada eksekusi investasi yang ideal hari ini. Gunakan waktu berharga ini untuk sesuatu yang jauh lebih bernilai: membaca buku investasi yang sudah lama tertunda di rak, menonton video edukasi tentang strategi yang kamu pertimbangkan, atau mengikuti webinar dari praktisi yang kamu percaya dan hormati.',accent:'teal'},
  {ico:'🎲',lbl:'Yang Perlu Diwaspadai',txt:'Keputusan finansial yang terasa sangat brilian di hari 偏印 seringkali terlihat sangat berbeda dan lebih biasa keesokan harinya ketika energi sudah tidak sekuat ini. Tulis semua idenya dengan detail, tapi tunda eksekusi minimal 48–72 jam untuk validasi yang lebih jernih.',accent:'red',tag:'warn'},
  {ico:'🧭',lbl:'Arah & Angka Beruntung',txt:'Arah Pengembangan dari Kua numbermu adalah arah terbaik untuk aktivitas belajar dan refleksi mendalam hari ini. Atur meja belajarmu menghadap arah ini untuk memaksimalkan penyerapan informasi dan kualitas pemikiran strategis yang sangat dibutuhkan hari ini.',accent:'teal',wide:true},
  {ico:'💡',lbl:'Insight Finansial',txt:'Orang yang paling sukses secara finansial jangka panjang bukan yang paling sering bertransaksi atau paling aktif di pasar. Tapi yang paling sering meluangkan waktu untuk belajar, merefleksikan strategi mereka, dan terus memperbarui pemahaman mereka. Hari 偏印 adalah investasi dalam financial intelligence-mu.',accent:'gold'},
  {ico:'✅',lbl:'Satu Aksi Terbaik',txt:'Baca satu artikel mendalam atau tonton satu video tentang strategi finansial yang belum pernah kamu pertimbangkan sebelumnya. Catat satu insight yang paling relevan dengan situasimu dan buat rencana konkret kapan akan kamu implementasikan dengan kondisi yang lebih tepat.',accent:'teal'},
]},

romance:{
intro:'Energi yang sangat dalam dan reflektif hari ini — kamu lebih nyaman dengan kedalaman daripada dengan keramaian dan permukaan.',
cells:[
  {ico:'🌊',lbl:'Vibrasi Relasi',txt:'Ada kualitas yang sangat dalam dan sedikit misterius darimu hari ini — kamu mungkin tidak banyak bicara, tapi setiap kata yang kamu pilih untuk diucapkan terasa penuh makna dan dipikirkan dengan matang. Orang yang mengenalmu dengan baik akan merasakan ada sesuatu yang berbeda dan lebih dalam hari ini.',accent:'teal'},
  {ico:'💬',lbl:'Cara Komunikasi Terbaik',txt:'Percakapan satu lawan satu yang tenang dan benar-benar mendalam adalah mode komunikasi terbaikmu yang paling efektif hari ini — bukan grup chat yang ramai dan bising, bukan dinner sosial dengan banyak orang. Duduk berhadapan dengan satu orang yang benar-benar kamu percaya dan berbagi hal-hal yang biasanya kamu simpan sangat dalam.',accent:'gold',wide:true},
  {ico:'🔮',lbl:'Kekuatan Relasi',txt:'Intuisimu tentang kondisi emosional orang lain sangat tajam hari ini — kamu bisa membaca perasaan pasanganmu tanpa perlu kata-kata eksplisit. Gunakan kepekaan yang langka ini untuk hadir sepenuhnya dan merespons kebutuhannya, bukan untuk menganalisis berlebihan.',accent:'gold'},
  {ico:'🚪',lbl:'Kebutuhan Hari Ini',txt:'Kamu membutuhkan lebih banyak ruang pribadi dari biasanya hari ini — dan ini adalah kebutuhan yang sangat valid dan perlu dihormati, bukan penolakan terhadap pasangan. Komunikasikan dengan jelas kepada orang terdekatmu agar mereka tidak salah mengartikan kebutuhanmu akan kesendirian.',accent:'dim'},
  {ico:'📍',lbl:'Lokasi & Aktivitas Ideal',txt:'Tempat yang tenang, inspiratif, dan memungkinkan refleksi yang genuine: perpustakaan yang nyaman, kedai buku kecil yang intimate, atau rumah yang nyaman dengan lilin dan musik instrumental yang lembut. Aktivitas yang melibatkan kreasi bersama — memasak, menggambar, atau menulis — menciptakan koneksi yang sangat organik.',accent:'teal',wide:true},
  {ico:'📔',lbl:'Insight untuk Relasi',txt:'偏印 mengajarkan bahwa keintiman yang paling mendalam dan paling abadi adalah keintiman intelektual dan spiritual — ketika dua pikiran yang berbeda bisa bertemu di ruang yang sama dan menemukan bahwa mereka jauh lebih memahami satu sama lain dari yang pernah mereka duga sebelumnya.',accent:'gold'},
]},
},

/* ────────────────── 正印 Direct Resource ───────────────── */
'正印': {
energy:'Hujan lembut yang menyirami dengan kebijaksanaan dan dukungan tulus hari ini — energi perlindungan, bimbingan, dan nutrisi sejati bagi jiwa.',
harmony:'Ketulusan dan kebaikan hatimu menarik dukungan dan perlindungan dari orang-orang yang lebih berpengalaman. Energi ini sangat mendukung pembelajaran dan pertumbuhan yang genuine.',
conflict:'Ketergantungan berlebih pada validasi dari luar bisa menghambat kemandirianmu yang sesungguhnya kuat. Terima dukungan dengan tangan terbuka, tapi jangan tunggu restu untuk bergerak.',

career:{
intro:'Hari terbaik untuk mencari bimbingan, mentoring, dan dukungan dari yang lebih senior dan berpengalaman dalam bidangmu.',
cells:[
  {ico:'👨‍🏫',lbl:'Momentum Hari Ini',txt:'Hari ini semesta sedang mengirimkan dukungan nyata melalui orang-orang yang lebih berpengalaman dari kamu. Buka dirimu sepenuhnya untuk menerima bimbingan — entah dari mentor formal, senior yang kamu hormati, atasan yang peduli, atau bahkan orang asing yang secara kebetulan memberikan perspektif berharga yang kamu butuhkan.',accent:'teal',tag:'good'},
  {ico:'📚',lbl:'Tipe Pekerjaan Cocok',txt:'Pembelajaran formal yang terstruktur, penelitian mendalam yang membutuhkan referensi yang solid, pekerjaan yang membutuhkan wisdom dan konteks historis yang kaya, mentoring orang lain, atau mengerjakan proposal yang membutuhkan data dan referensi yang kuat dan terpercaya.',accent:'gold'},
  {ico:'👥',lbl:'Dinamika Atasan & Tim',txt:'Dengan atasan: hari yang sempurna untuk meminta feedback yang genuine, bimbingan yang jujur, atau membahas rencana karir jangka panjangmu. Energi 正印 membuat atasan lebih cenderung memberikan dukungan yang tulus. Dengan tim: posisikan dirimu sebagai learner yang terbuka — bertanya lebih banyak dari berbicara hari ini.',accent:'teal',wide:true},
  {ico:'📞',lbl:'Fokus Aksi Terbaik',txt:'Hubungi satu orang yang selama ini sangat ingin kamu minta nasihat atau mentorship-nya tapi selalu kamu tunda karena berbagai alasan. Satu percakapan yang tepat hari ini bisa mengubah arah perjalanan karirmu secara signifikan dan menghemat bertahun-tahun waktu dan energi.',accent:'gold'},
  {ico:'🦅',lbl:'Yang Harus Dihindari',txt:'Memaksakan kemandirian penuh dan menolak bantuan yang datang dengan alasan tidak mau merepotkan. 正印 hadir hari ini untuk memberimu dukungan yang layak kamu terima — menolaknya adalah melawan arus yang sedang mengalir untukmu.',accent:'dim'},
  {ico:'💡',lbl:'Insight Personal',txt:'正印 mengajarkan bahwa tidak ada seorang pun yang benar-benar self-made — semua orang berdiri di atas bahu mereka yang telah memandu dan mendukung perjalanannya. Hari ini adalah pengingat untuk bersyukur atas semua yang telah diajarkan, dan untuk terus membuka diri terhadap pelajaran-pelajaran baru.',accent:'teal',wide:true},
]},

health:{
intro:'Tubuh dalam mode regenerasi dan penguatan yang aktif hari ini — istirahat berkualitas adalah investasi terbaik yang bisa kamu berikan.',
cells:[
  {ico:'💧',lbl:'Organ yang Perlu Perhatian',txt:'Ginjal dan sistem limfatik adalah fokus utama hari ini — elemen Air yang lembut mendukung proses detoksifikasi alami tubuh yang sangat berharga. Ini adalah hari yang ideal untuk memberikan tubuhmu kondisi terbaik untuk membersihkan dirinya sendiri dari racun yang terakumulasi.',accent:'gold',bar:{pct:52,cls:'gold'}},
  {ico:'🔋',lbl:'Level & Pola Energi',txt:'Energi sedang dan cenderung ke dalam — bukan hari untuk tampil maksimal di hadapan banyak orang, tapi sangat baik untuk pekerjaan yang butuh konsentrasi mendalam dan ketenangan. Tubuhmu sedang dalam mode regenerasi aktif yang perlu dihormati.',accent:'teal',bar:{pct:50,cls:'teal'}},
  {ico:'🛁',lbl:'Aktivitas yang Dianjurkan',txt:'Mandi air hangat yang agak lama dengan garam Epsom, perendaman kaki dengan air hangat dan beberapa tetes minyak esensial, atau terapi panas ringan lainnya. Semua ini secara signifikan membantu sistem limfatik dan ginjal bekerja lebih optimal di hari 正印 ini.',accent:'dim'},
  {ico:'🍲',lbl:'Makanan & Minuman Hari Ini',txt:'Fokus pada makanan yang hidrasi, ringan, dan mudah dicerna sepenuhnya: buah dengan kandungan air tinggi (semangka, mentimun, jeruk), sup kaldu yang hangat dan ringan, dan makanan fermentasi yang baik untuk microbiome. Minum minimal 2.5 liter air putih hari ini — sistem limfatikmu membutuhkan hidrasi lebih dari biasanya.',accent:'teal',wide:true},
  {ico:'🕐',lbl:'Chinese Body Clock',txt:'Jam 17:00–19:00 (Ginjal) adalah jam yang paling relevan dan penting hari ini. Pada jam ini, lakukan sesuatu yang sangat menenangkan dan nurturing untuk dirimu sendiri: mandi hangat, pijat ringan di telapak kaki, atau sekadar duduk diam dalam ketenangan dan bersyukur atas hal-hal baik dalam hidupmu.',accent:'gold'},
  {ico:'🌧️',lbl:'Pantangan Hari Ini',txt:'Paparan hujan atau udara dingin yang terlalu lama (sistem imun sedang berkonsolidasi), makanan terlalu berat dan berlemak di malam hari, dan tidur terlalu larut. Istirahat lebih awal dari biasanya adalah bentuk self-care terpenting yang bisa kamu berikan pada dirimu sendiri hari ini.',accent:'red'},
]},

finance:{
intro:'Hari untuk menerima kebijaksanaan finansial, bukan untuk eksekusi besar. Investasi terbaik adalah dalam pengetahuan dan koneksi yang tepat.',
cells:[
  {ico:'📖',lbl:'Arus Rezeki',txt:'Rezeki hari ini bersifat indirect — bukan uang yang langsung masuk, tapi investasi dalam pengetahuan dan koneksi yang akan menghasilkan rezeki yang jauh lebih besar di masa depan. Belajar sesuatu yang benar-benar bernilai hari ini adalah tindakan finansial yang paling bijak yang bisa kamu ambil.',accent:'dim',bar:{pct:52,cls:'teal'}},
  {ico:'🎓',lbl:'Tipe Investasi Sesuai',txt:'Investasi dalam pendidikan dan pengembangan diri adalah prioritas hari ini: mendaftar kursus online yang relevan, membeli buku yang akan meningkatkan skill dengan nilai tinggi, atau berkonsultasi langsung dengan financial advisor profesional. Pengeluaran untuk pembelajaran hari ini adalah investasi dengan ROI tertinggi dalam jangka panjang.',accent:'teal',tag:'good'},
  {ico:'📌',lbl:'Aksi Finansial yang Tepat',txt:'Review rekening dan portofolio investasimu secara menyeluruh — bukan untuk diutak-atik impulsif, tapi untuk memahami kondisinya secara objektif. Catat semua hal yang perlu diperbaiki atau ditingkatkan untuk dieksekusi di hari yang lebih kondusif untuk aksi.',accent:'dim'},
  {ico:'🧭',lbl:'Arah & Angka Beruntung',txt:'Hari ini gunakan arah Kesehatan dari Kua numbermu untuk aktivitas belajar dan refleksi. Buat meja belajarmu menghadap arah ini untuk memaksimalkan kualitas penyerapan informasi finansial yang sangat berharga hari ini.',accent:'teal',wide:true},
  {ico:'🌱',lbl:'Insight Finansial',txt:'Ada konsep investasi yang sangat relevan hari ini: waktu terbaik untuk menanam pohon adalah 20 tahun yang lalu, dan waktu terbaik kedua adalah sekarang. 正印 mengundangmu untuk menanam pohon yang akan memberikan naungan bagi versi dirimu di masa depan — dalam bentuk skill berharga, pengetahuan mendalam, atau relasi yang tepat.',accent:'gold',wide:true},
  {ico:'✅',lbl:'Satu Aksi Terbaik',txt:'Buat janji dengan seorang financial advisor atau mentor finansial yang sudah terbukti mengelola keuangan dengan baik. Satu percakapan yang tepat hari ini bisa mengubah trajectory finansialmu secara dramatis dan permanen.',accent:'teal'},
]},

romance:{
intro:'Kelembutan, kehangatan, dan dukungan yang tulus mengalir dari dan menuju kamu hari ini — energi paling nurturing dalam seluruh siklus.',
cells:[
  {ico:'🌧️',lbl:'Vibrasi Relasi',txt:'Ada kelembutan dan kehangatan yang sangat genuine darimu hari ini — seperti hujan lembut yang menyirami tanaman dengan ketelatenan tanpa membanjirinya. Orang-orang di sekitarmu merasakan betapa sungguh-sungguhnya perhatian dan kepedulianmu terhadap mereka.',accent:'teal'},
  {ico:'💬',lbl:'Cara Komunikasi Terbaik',txt:'Mendengarkan dengan penuh perhatian dan kehadiran total adalah bentuk komunikasi terkuat hari ini — lebih kuat dari kata-kata terbaik yang bisa kamu susun dengan hati-hati. Berikan hadiah termahalmu hari ini: perhatian yang tidak terbagi kepada orang yang kamu sayangi. Letakkan ponsel, tatap matanya, dan benar-benar dengarkan setiap kata.',accent:'gold',wide:true},
  {ico:'🤗',lbl:'Kekuatan Relasi',txt:'Ketulusan dan kehangatan hatimu seperti magnet yang menarik orang untuk merasa aman, diterima, dan dipahami di dekatmu. Ini adalah saat di mana orang-orang yang hidupnya sedang sulit akan secara natural mencari kehadiranmu — bukan karena kamu punya solusi, tapi karena kamu benar-benar ada.',accent:'gold',tag:'good'},
  {ico:'🌿',lbl:'Kebutuhan Hari Ini',txt:'Kamu juga berhak menerima hari ini — bukan hanya terus memberi. Jika ada seseorang yang ingin melakukan sesuatu baik untukmu, biarkan mereka dengan hati terbuka. Belajar menerima dengan grace adalah salah satu pelajaran terdalam yang bisa kamu kuasai dalam perjalanan hidupmu.',accent:'dim'},
  {ico:'📍',lbl:'Lokasi & Aktivitas Ideal',txt:'Tempat yang tenang, hangat, dan benar-benar intimate — rumah dengan cahaya lilin yang lembut, taman kecil yang sepi di sore hari, atau makan malam masakan sendiri yang sederhana tapi penuh perhatian dan kasih. 正印 tidak butuh kemewahan materi — ia butuh ketulusan dan kehangatan yang tidak bisa dibeli dengan uang.',accent:'teal',wide:true},
  {ico:'🕯️',lbl:'Insight untuk Relasi',txt:'正印 mengajarkan bahwa cinta yang paling menyembuhkan adalah cinta yang tidak menuntut apapun sebagai balasannya — yang hadir bukan karena apa yang bisa didapat, tapi karena memang benar-benar ingin ada. Hari ini adalah undangan untuk mencintai dengan cara yang paling murni itu.',accent:'dim'},
]},
},

}
