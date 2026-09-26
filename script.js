const QUESTIONS = [
  // BAGIAN A
  {
    id: 1,
    section: "A",
    category: "sejarah",
    question: "Siapa yang dikenal sebagai “Bapak Komputer”?",
    options: [
      "A. Alan Turing",
      "B. Bill Gates",
      "C. Charles Babbage",
      "D. John von Neumann",
    ],
    answer: "C",
    answerKey: "C. Charles Babbage",
    explanation:
      "Charles Babbage dikenal sebagai Bapak Komputer karena merancang Analytical Engine, salah satu konsep awal komputer mekanis.",
  },

  {
    id: 2,
    section: "A",
    category: "sejarah",
    question: "Komputer generasi pertama menggunakan media utama berupa...",
    options: [
      "A. Transistor",
      "B. IC (Integrated Circuit)",
      "C. Tabung Vakum",
      "D. Mikrokontroler",
    ],
    answer: "C",
    answerKey: "C. Tabung Vakum",
    explanation:
      "Komputer generasi pertama menggunakan tabung vakum sebagai komponen utama untuk memproses dan memperkuat sinyal.",
  },

  {
    id: 3,
    section: "A",
    category: "sejarah",
    question:
      "Sistem operasi yang dikembangkan pertama kali oleh Microsoft adalah...",
    options: ["A. Windows 95", "B. MS-DOS", "C. Unix", "D. Linux"],
    answer: "B",
    answerKey: "B. MS-DOS",
    explanation:
      "MS-DOS merupakan sistem operasi berbasis command-line yang menjadi salah satu sistem operasi awal yang dipasarkan Microsoft.",
  },

  {
    id: 4,
    section: "A",
    category: "TI",
    question:
      "Perangkat keras yang digunakan untuk menyimpan data secara permanen adalah...",
    options: ["A. RAM", "B. ROM", "C. Hard Disk", "D. Cache"],
    answer: "C",
    answerKey: "C. Hard Disk",
    explanation:
      "Hard Disk digunakan untuk menyimpan data secara permanen sehingga data tetap tersimpan setelah komputer dimatikan.",
  },

  {
    id: 5,
    section: "A",
    category: "TI",
    question: "Fungsi utama CPU dalam komputer adalah...",
    options: [
      "A. Menyimpan data",
      "B. Mengolah data",
      "C. Mencetak data",
      "D. Menghapus data",
    ],
    answer: "B",
    answerKey: "B. Mengolah data",
    explanation:
      "CPU bertugas menjalankan instruksi dan memproses atau mengolah data dalam komputer.",
  },

  {
    id: 6,
    section: "A",
    category: "sejarah",
    question: "Tokoh yang menciptakan bahasa pemrograman “C” adalah...",
    options: [
      "A. Dennis Ritchie",
      "B. James Gosling",
      "C. Linus Torvalds",
      "D. John McCarthy",
    ],
    answer: "A",
    answerKey: "A. Dennis Ritchie",
    explanation:
      "Dennis Ritchie menciptakan bahasa pemrograman C saat bekerja di Bell Labs pada awal 1970-an.",
  },

  {
    id: 7,
    section: "A",
    category: "komputer",
    question: "Dalam komputer, fungsi “router” adalah...",
    options: [
      "A. Menghubungkan komputer dengan printer",
      "B. Mengarahkan lalu lintas data antar jaringan",
      "C. Menyimpan data pengguna",
      "D. Menyediakan daya listrik ke komputer",
    ],
    answer: "B",
    answerKey: "B. Mengarahkan lalu lintas data antar jaringan",
    explanation:
      "Router meneruskan paket data dan menentukan jalur komunikasi dari satu jaringan ke jaringan lainnya.",
  },

  {
    id: 8,
    section: "A",
    category: "sejarah",
    question: "Internet pertama kali dikembangkan dari proyek...",
    options: ["A. DARPA", "B. NASA", "C. IBM", "D. Microsoft"],
    answer: "A",
    answerKey: "A. DARPA",
    explanation:
      "Perkembangan awal internet berawal dari ARPANET, proyek riset jaringan yang dikembangkan melalui lembaga ARPA yang kemudian dikenal sebagai DARPA.",
  },

  {
    id: 9,
    section: "A",
    category: "TI",
    question: "Istilah “bit” merupakan singkatan dari...",
    options: [
      "A. Binary Integer",
      "B. Binary Digit",
      "C. Basic Information Type",
      "D. Byte Information",
    ],
    answer: "B",
    answerKey: "B. Binary Digit",
    explanation:
      "Bit merupakan singkatan dari Binary Digit dan merupakan unit data terkecil yang memiliki nilai 0 atau 1.",
  },

  {
    id: 10,
    section: "A",
    category: "TI",
    question:
      "Perangkat lunak yang berfungsi sebagai jembatan antara pengguna dan perangkat keras disebut...",
    options: ["A. Driver", "B. Aplikasi", "C. Sistem Operasi", "D. Kompiler"],
    answer: "C",
    answerKey: "C. Sistem Operasi",
    explanation:
      "Sistem operasi mengatur perangkat keras dan menyediakan antarmuka agar pengguna dapat berinteraksi dengan komputer.",
  },

  {
    id: 11,
    section: "A",
    category: "sejarah",
    question: "Tokoh pencipta World Wide Web (WWW) adalah...",
    options: [
      "A. Tim Berners-Lee",
      "B. Bill Gates",
      "C. Steve Jobs",
      "D. Mark Zuckerberg",
    ],
    answer: "A",
    answerKey: "A. Tim Berners-Lee",
    explanation:
      "Tim Berners-Lee menciptakan konsep World Wide Web saat bekerja di CERN pada tahun 1989.",
  },

  {
    id: 12,
    section: "A",
    category: "TI",
    question:
      "Perangkat keras yang digunakan untuk menampilkan hasil keluaran komputer adalah...",
    options: ["A. Keyboard", "B. Monitor", "C. Scanner", "D. Mouse"],
    answer: "B",
    answerKey: "B. Monitor",
    explanation:
      "Monitor merupakan perangkat output yang digunakan untuk menampilkan informasi dalam bentuk visual.",
  },

  {
    id: 13,
    section: "A",
    category: "keamanan",
    question: "Fungsi utama firewall dalam komputer adalah...",
    options: [
      "A. Mempercepat transfer data",
      "B. Mengamankan jaringan dari akses tidak sah",
      "C. Menyimpan file sementara",
      "D. Mengatur IP Address",
    ],
    answer: "B",
    answerKey: "B. Mengamankan jaringan dari akses tidak sah",
    explanation:
      "Firewall menyaring lalu lintas jaringan berdasarkan aturan tertentu untuk membantu mencegah akses yang tidak diizinkan.",
  },

  {
    id: 14,
    section: "A",
    category: "TI",
    question: "Sistem operasi berbasis open source yang populer adalah...",
    options: ["A. macOS", "B. Windows", "C. Linux", "D. MS-DOS"],
    answer: "C",
    answerKey: "C. Linux",
    explanation:
      "Linux merupakan sistem operasi berbasis kernel open source yang digunakan dalam berbagai distribusi.",
  },

  {
    id: 15,
    section: "A",
    category: "sejarah",
    question: "Komputer generasi keempat menggunakan teknologi utama berupa...",
    options: [
      "A. Tabung vakum",
      "B. Transistor",
      "C. Mikroprosesor",
      "D. Chip kuantum",
    ],
    answer: "C",
    answerKey: "C. Mikroprosesor",
    explanation:
      "Komputer generasi keempat ditandai dengan penggunaan mikroprosesor yang mengintegrasikan CPU dalam sebuah chip.",
  },

  {
    id: 16,
    section: "A",
    category: "sejarah",
    question: "Siapa pendiri perusahaan Apple bersama Steve Jobs?",
    options: [
      "A. Tim Cook",
      "B. Steve Wozniak",
      "C. Bill Gates",
      "D. Elon Musk",
    ],
    answer: "B",
    answerKey: "B. Steve Wozniak",
    explanation:
      "Steve Wozniak merupakan salah satu pendiri Apple bersama Steve Jobs dan Ronald Wayne.",
  },

  {
    id: 17,
    section: "A",
    category: "TI",
    question:
      "Perangkat input yang digunakan untuk membaca kode batang adalah...",
    options: ["A. Joystick", "B. Barcode Scanner", "C. Plotter", "D. Touchpad"],
    answer: "B",
    answerKey: "B. Barcode Scanner",
    explanation:
      "Barcode Scanner membaca pola kode batang dan mengubahnya menjadi data yang dapat diproses komputer.",
  },

  {
    id: 18,
    section: "A",
    category: "TI",
    question:
      "Perangkat lunak untuk mengelola dan memproses data numerik adalah...",
    options: [
      "A. Microsoft Word",
      "B. Microsoft Excel",
      "C. PowerPoint",
      "D. Access",
    ],
    answer: "B",
    answerKey: "B. Microsoft Excel",
    explanation:
      "Microsoft Excel merupakan aplikasi spreadsheet yang digunakan untuk mengolah angka, tabel, rumus, dan data.",
  },

  {
    id: 19,
    section: "A",
    category: "keamanan",
    question: "Istilah “phishing” mengacu pada...",
    options: [
      "A. Mengambil data melalui serangan fisik",
      "B. Upaya mencuri data dengan berpura-pura menjadi pihak terpercaya",
      "C. Menghapus file tanpa izin",
      "D. Menyebarkan virus ke jaringan",
    ],
    answer: "B",
    answerKey:
      "B. Upaya mencuri data dengan berpura-pura menjadi pihak terpercaya",
    explanation:
      "Phishing adalah upaya penipuan yang menggunakan penyamaran sebagai pihak tepercaya untuk memperoleh data atau informasi sensitif.",
  },

  {
    id: 20,
    section: "A",
    category: "sejarah",
    question: "ARPANET pertama kali dikembangkan di negara...",
    options: ["A. Inggris", "B. Amerika Serikat", "C. Jerman", "D. Jepang"],
    answer: "B",
    answerKey: "B. Amerika Serikat",
    explanation:
      "ARPANET dikembangkan di Amerika Serikat melalui proyek riset jaringan yang didukung oleh ARPA.",
  },

  {
    id: 21,
    section: "A",
    category: "TI",
    question:
      "Perangkat keras yang digunakan untuk menyimpan data sementara saat komputer bekerja adalah...",
    options: ["A. ROM", "B. RAM", "C. Hard Disk", "D. SSD"],
    answer: "B",
    answerKey: "B. RAM",
    explanation:
      "RAM menyimpan data dan instruksi sementara yang sedang digunakan oleh komputer.",
  },

  {
    id: 22,
    section: "A",
    category: "komputer",
    question:
      "Perangkat keras jaringan yang berfungsi memperluas sinyal Wi-Fi adalah...",
    options: ["A. Router", "B. Repeater", "C. Switch", "D. Bridge"],
    answer: "B",
    answerKey: "B. Repeater",
    explanation:
      "Repeater menerima dan memancarkan kembali sinyal jaringan agar jangkauannya menjadi lebih luas.",
  },

  {
    id: 23,
    section: "A",
    category: "TI",
    question:
      "Komponen komputer yang bertugas untuk menampilkan gambar ke layar adalah...",
    options: [
      "A. Sound Card",
      "B. Video Card",
      "C. Network Card",
      "D. Motherboard",
    ],
    answer: "B",
    answerKey: "B. Video Card",
    explanation:
      "Video Card atau GPU memproses data grafis dan menghasilkan output gambar untuk ditampilkan pada layar.",
  },

  {
    id: 24,
    section: "A",
    category: "keamanan",
    question:
      "Teknologi yang digunakan untuk mengamankan data melalui penyandian disebut...",
    options: ["A. Kompresi", "B. Enkripsi", "C. Hashing", "D. Fragmentasi"],
    answer: "B",
    answerKey: "B. Enkripsi",
    explanation:
      "Enkripsi mengubah data asli menjadi bentuk tersandi sehingga sulit dibaca oleh pihak yang tidak memiliki akses.",
  },

  {
    id: 25,
    section: "A",
    category: "komputer",
    question: "Kepanjangan dari IP Address adalah...",
    options: [
      "A. Internet Point Address",
      "B. Internal Protocol Address",
      "C. Internet Protocol Address",
      "D. Interconnection Point Address",
    ],
    answer: "C",
    answerKey: "C. Internet Protocol Address",
    explanation:
      "IP Address adalah alamat yang digunakan untuk mengidentifikasi perangkat atau antarmuka dalam jaringan Internet Protocol.",
  },

  {
    id: 26,
    section: "A",
    category: "keamanan",
    question:
      "Proses mengubah data dari bentuk terenkripsi ke bentuk asli disebut...",
    options: ["A. Decryption", "B. Encoding", "C. Hashing", "D. Scrambling"],
    answer: "A",
    answerKey: "A. Decryption",
    explanation:
      "Decryption atau dekripsi adalah proses mengubah data terenkripsi kembali menjadi bentuk aslinya agar dapat dibaca.",
  },

  {
    id: 27,
    section: "A",
    category: "sejarah",
    question: "Sistem operasi pertama yang berbasis GUI adalah...",
    options: ["A. Windows 95", "B. Macintosh System 1", "C. UNIX", "D. MS-DOS"],
    answer: "B",
    answerKey: "B. Macintosh System 1",
    explanation:
      "Macintosh System 1 merupakan salah satu sistem operasi GUI awal yang populer dan digunakan pada komputer Macintosh.",
  },

  {
    id: 28,
    section: "A",
    category: "keamanan",
    question: "Fungsi utama dari antivirus adalah...",
    options: [
      "A. Menghapus file lama",
      "B. Mendeteksi dan menghapus program berbahaya",
      "C. Meningkatkan kecepatan komputer",
      "D. Mengelola koneksi jaringan",
    ],
    answer: "B",
    answerKey: "B. Mendeteksi dan menghapus program berbahaya",
    explanation:
      "Antivirus digunakan untuk mendeteksi, mencegah, serta menangani malware atau program berbahaya.",
  },

  {
    id: 29,
    section: "A",
    category: "komputer",
    question:
      "Dalam komputer, topologi yang berbentuk lingkaran disebut...",
    options: ["A. Star", "B. Bus", "C. Ring", "D. Mesh"],
    answer: "C",
    answerKey: "C. Ring",
    explanation:
      "Topologi Ring menghubungkan perangkat dalam bentuk lingkaran sehingga setiap perangkat terhubung membentuk sebuah cincin.",
  },

  {
    id: 30,
    section: "A",
    category: "sejarah",
    question: "Email pertama kali dikembangkan oleh...",
    options: [
      "A. Bill Gates",
      "B. Ray Tomlinson",
      "C. Vint Cerf",
      "D. Alan Kay",
    ],
    answer: "B",
    answerKey: "B. Ray Tomlinson",
    explanation:
      "Ray Tomlinson mengembangkan sistem email jaringan dan memperkenalkan penggunaan simbol @ dalam alamat email.",
  },

  {
    id: 31,
    section: "A",
    category: "komputer",
    question:
      "Perangkat keras yang digunakan untuk mengubah sinyal digital menjadi analog adalah...",
    options: ["A. Switch", "B. Modem", "C. Router", "D. Hub"],
    answer: "B",
    answerKey: "B. Modem",
    explanation:
      "Modem melakukan modulasi dan demodulasi untuk mengubah sinyal digital dan analog agar dapat dikirim melalui media komunikasi tertentu.",
  },

  {
    id: 32,
    section: "A",
    category: "komputer",
    question: "Istilah LAN berarti...",
    options: [
      "A. Large Area Network",
      "B. Local Access Node",
      "C. Local Area Network",
      "D. Linked Area Network",
    ],
    answer: "C",
    answerKey: "C. Local Area Network",
    explanation:
      "LAN adalah komputer yang mencakup area terbatas seperti rumah, sekolah, kantor, atau laboratorium.",
  },

  {
    id: 33,
    section: "A",
    category: "TI",
    question:
      "Perangkat lunak yang berfungsi untuk menelusuri situs web disebut...",
    options: ["A. Browser", "B. Compiler", "C. Editor", "D. Emulator"],
    answer: "A",
    answerKey: "A. Browser",
    explanation:
      "Browser digunakan untuk mengakses, menampilkan, dan berinteraksi dengan halaman web di internet.",
  },

  {
    id: 34,
    section: "A",
    category: "TI",
    question: "Komputer mini yang dirancang untuk satu pengguna disebut...",
    options: [
      "A. Mainframe",
      "B. Superkomputer",
      "C. Personal Computer",
      "D. Workstation",
    ],
    answer: "C",
    answerKey: "C. Personal Computer",
    explanation:
      "Personal Computer atau PC adalah komputer yang dirancang untuk digunakan oleh satu pengguna.",
  },

  {
    id: 35,
    section: "A",
    category: "komputer",
    question: "Fungsi “switch” dalam jaringan adalah...",
    options: [
      "A. Menghubungkan jaringan berbeda",
      "B. Menyimpan data sementara",
      "C. Mendistribusikan paket data ke perangkat tujuan",
      "D. Menyediakan koneksi internet langsung",
    ],
    answer: "C",
    answerKey: "C. Mendistribusikan paket data ke perangkat tujuan",
    explanation:
      "Switch meneruskan data ke perangkat tujuan yang tepat berdasarkan alamat MAC dalam jaringan lokal.",
  },

  {
    id: 36,
    section: "A",
    category: "TI",
    question:
      "Teknologi penyimpanan berbasis cloud memungkinkan pengguna untuk...",
    options: [
      "A. Menyimpan data di perangkat keras lokal",
      "B. Mengakses data melalui internet dari mana saja",
      "C. Memperbesar kapasitas RAM",
      "D. Mempercepat booting komputer",
    ],
    answer: "B",
    answerKey: "B. Mengakses data melalui internet dari mana saja",
    explanation:
      "Cloud storage memungkinkan data disimpan pada server jarak jauh dan diakses melalui internet sesuai hak akses pengguna.",
  },

  {
    id: 37,
    section: "A",
    category: "sejarah",
    question: "Bahasa pemrograman Python diciptakan oleh...",
    options: [
      "A. Guido van Rossum",
      "B. Dennis Ritchie",
      "C. James Gosling",
      "D. Bjarne Stroustrup",
    ],
    answer: "A",
    answerKey: "A. Guido van Rossum",
    explanation:
      "Guido van Rossum adalah pencipta bahasa pemrograman Python dan mulai mengembangkan Python pada akhir 1980-an.",
  },

  {
    id: 38,
    section: "A",
    category: "komputer",
    question: "Jaringan yang mencakup area sangat luas disebut...",
    options: ["A. LAN", "B. MAN", "C. WAN", "D. PAN"],
    answer: "C",
    answerKey: "C. WAN",
    explanation:
      "WAN atau Wide Area Network mencakup wilayah geografis yang luas seperti antarkota atau antarnegara.",
  },

  {
    id: 39,
    section: "A",
    category: "komputer",
    question: "Protokol yang digunakan untuk mentransfer halaman web adalah...",
    options: ["A. HTTP", "B. FTP", "C. SMTP", "D. SNMP"],
    answer: "A",
    answerKey: "A. HTTP",
    explanation:
      "HTTP merupakan protokol yang digunakan browser dan server untuk bertukar sumber daya pada web.",
  },

  {
    id: 40,
    section: "A",
    category: "komputer",
    question:
      "Teknologi yang memungkinkan dua perangkat berkomunikasi tanpa kabel jarak dekat adalah...",
    options: ["A. Infrared", "B. Bluetooth", "C. NFC", "D. Wi-Fi"],
    answer: "B",
    answerKey: "B. Bluetooth",
    explanation:
      "Bluetooth memungkinkan perangkat berkomunikasi secara nirkabel dalam jarak dekat menggunakan gelombang radio.",
  },

  {
    id: 41,
    section: "A",
    category: "sejarah",
    question: "Siapa penemu sistem operasi Linux?",
    options: [
      "A. Linus Torvalds",
      "B. Richard Stallman",
      "C. Bill Gates",
      "D. Mark Zuckerberg",
    ],
    answer: "A",
    answerKey: "A. Linus Torvalds",
    explanation:
      "Linus Torvalds memulai pengembangan kernel Linux pada tahun 1991.",
  },

  {
    id: 42,
    section: "A",
    category: "sejarah",
    question: "Komputer generasi kelima mengusung teknologi...",
    options: [
      "A. Kecerdasan Buatan (AI)",
      "B. IC",
      "C. Transistor",
      "D. Tabung Vakum",
    ],
    answer: "A",
    answerKey: "A. Kecerdasan Buatan (AI)",
    explanation:
      "Komputer generasi kelima sering dikaitkan dengan pengembangan kecerdasan buatan dan kemampuan pemrosesan yang semakin canggih.",
  },

  {
    id: 43,
    section: "A",
    category: "TI",
    question: "Bagian dari komputer yang berfungsi menyimpan BIOS adalah...",
    options: ["A. RAM", "B. ROM", "C. Hard Disk", "D. Cache"],
    answer: "B",
    answerKey: "B. ROM",
    explanation:
      "Secara umum BIOS secara historis disimpan pada ROM atau chip non-volatile agar tetap tersimpan saat komputer dimatikan.",
  },

  {
    id: 44,
    section: "A",
    category: "keamanan",
    question: "Virus komputer pertama yang dikenal luas bernama...",
    options: ["A. Creeper", "B. ILOVEYOU", "C. Melissa", "D. Michelangelo"],
    answer: "A",
    answerKey: "A. Creeper",
    explanation:
      "Creeper merupakan salah satu program worm komputer paling awal yang dikenal dalam sejarah komputer.",
  },

  {
    id: 45,
    section: "A",
    category: "komputer",
    question: "Fungsi utama dari DNS adalah...",
    options: [
      "A. Menerjemahkan nama domain menjadi alamat IP",
      "B. Mengirimkan email",
      "C. Menyimpan data pengguna",
      "D. Mengatur bandwidth jaringan",
    ],
    answer: "A",
    answerKey: "A. Menerjemahkan nama domain menjadi alamat IP",
    explanation:
      "DNS menerjemahkan nama domain seperti example.com menjadi alamat IP agar perangkat dapat menemukan server yang dituju.",
  },
];

let activeSection = "ALL";
let showAllAnswer = false;
let userAnswers = {};

function initApp() {
  renderQuestions();
}
function applyFilters() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const selectedTopic = document.getElementById("topicSelect").value;

  const filtered = QUESTIONS.filter((q) => {
    // Section Filter
    if (activeSection === "KUNCI") {
      // Show all when viewing key mode
    } else if (activeSection !== "ALL" && q.section !== activeSection) {
      return false;
    }
    // Topic Filter
    if (selectedTopic !== "all" && q.category !== selectedTopic) {
      return false;
    }
    // Search Filter
    if (searchTerm) {
      const matchId = q.id.toString().includes(searchTerm);
      const matchQ = q.question.toLowerCase().includes(searchTerm);
      const matchCat = q.category.toLowerCase().includes(searchTerm);
      return matchId || matchQ || matchCat;
    }
    return true;
  });
  AllAnswers() {
    showAllAnswers = !showAllAnswers;
    const btn = document.getElementById("toggleAllBtn");
    btn.innerHTML = showAllAnswers ? "🙈 Sembunyikan Kunci" : "👁️ Buka Kunci";

    QUESTIONS.forEach((q) => {
      const ansElem = document.getElementById(`explanation-${q.id}`);
      if (ansElem) {
        if (showAllAnswers) {
          ansElem.classList.remove("hidden");
        } else {
          ansElem.classList.add("hidden");
        }
      }
    });
  }
  renderQuestions(filtered);
}
function toggleAllAnswers() {
  showAllAnswers = !showAllAnswers;
  const btn = document.getElementById("toggleAllBtn");
  btn.innerHTML = showAllAnswers ? "Sembunyikan Kunci" : "Buka Kunci";

  QUESTIONS.forEach((q) => {
    const ansElem = document.getElementById(`explanation-${q.id}`);
    if (ansElem) {
      if (showAllAnswers) {
        ansElem.classList.remove("hidden");
      } else {
        ansElem.classList.add("hidden");
      }
    }
  });
}
function toggleSingleAnswer(id) {
  const ansElem = document.getElementById(`explanation-${id}`);
  if (ansElem) {
    ansElem.classList.toggle("hidden");
  }
}
function checkUserAnswer(id) {
  const q = QUESTIONS.find((item) => item.id === id);
  if (!q) return;

  const feedbackElem = document.getElementById(`feedback-${id}`);
    const selectedOption = document.querySelector(
      `input[name="q-${id}"]:checked`,
    );
    if (!selectedOption) {
      feedbackElem.innerHTML = `<span class="text-amber-600 font-medium">Pilih salah satu opsi jawaban terlebih dahulu.</span>`;
      return;
    }
    if (selectedOption.value === q.answer) {
      feedbackElem.innerHTML = `<span class="text-emerald-600 font-bold flex items-center gap-1">✓ Jawaban Benar! (${q.answerKey})</span>`;
    } else {
      feedbackElem.innerHTML = `<span class="text-rose-600 font-bold flex items-center gap-1">✗ Jawaban Kurang Tepat. Kunci: ${q.answerKey}</span>`;
    }
  }

  // Reveal explanation after check
  const ansElem = document.getElementById(`explanation-${id}`);
  if (ansElem) ansElem.classList.remove("hidden");
}

function renderQuestions(items = QUESTIONS) {
  const container = document.getElementById("questionsContainer");
  const emptyState = document.getElementById("emptyState");
  if (items.length === 0) {
    container.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  } else {
    emptyState.classList.add("hidden");
  }
  let html = "";
  items.forEach((q) => {
    const isKunciMode = activeSection === "KUNCI";
    
    html += `
          <div>
              <!-- Top Metadata -->
              <div>
                  <div>
                      <span>
                          Soal #${q.id}
                      </span>
                      <span>
                          ${q.category}
                      </span>
                      <span>
                          Bagian ${q.section}
                      </span>
                  </div>
              </div>
              <!-- Question Body -->
              <div>
                  ${q.question}
              </div>
              <!-- Optional Code Snippet -->
              ${
                q.code
                  ? `
              <div>
                  <pre><code>${escapeHtml(q.code)}</code></pre>
              </div>
              `
                  : ""
              }
              <!-- pg -->
              ${
                !isKunciMode
                  ? `
              <div>
                  ${q.options
                    .map((opt, idx) => {
                      const optVal = String.fromCharCode(97 + idx); // a, b, c, d, e
                      return `
                      <label>
                          <input type="radio" name="q-${q.id}" value="${optVal}">
                          <span>${opt}</span>
                      </label>
                      `;
                    })
                    .join("")}
              </div>
              `
                  : ""
              }
              <!-- Action Buttons -->
              <div>
                  <div id="feedback-${q.id}"></div>
                  <div>
                      ${
                        !isKunciMode ? `
                      <button onclick="checkUserAnswer(${q.id})">
                          Cek Jawaban
                      </button>
                      `
                          : ""
                      }
                      <button onclick="toggleSingleAnswer(${q.id})">
                          💡 Kunci & Pembahasan
                      </button>
                  </div>
              </div>

              <!-- Explanation Box -->
              <div id="explanation-${q.id}">
                  <div>
                      Kunci Jawaban: <span>${q.answerKey}</span>
                  </div>
                  <div>
                      <strong>Langkah Pembahasan:</strong>
                      ${q.explanation}
                  </div>
              </div>

          </div>
          `;
  });

  container.innerHTML = html;
  renderMath();
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderMath() {
  if (window.renderMathInElement) {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: false,
    });
  }
}

window.onload = initApp;
