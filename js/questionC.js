const QUESTIONS_C = [
  {
    id: 91,
    section: "C",
    category: "komputer",
    question:
      "Komponen utama yang melakukan perhitungan aritmetika dan logika pada CPU adalah...",
    options: ["A. Control Unit", "B. ALU", "C. Register", "D. Cache"],
    answer: "B",
    answerKey: "B. ALU",
    explanation:
      "ALU (Arithmetic Logic Unit) bertugas melakukan operasi aritmetika dan logika dalam CPU.",
  },

  {
    id: 92,
    section: "C",
    category: "TI",
    question: "Sistem operasi yang bersifat multiuser artinya...",
    options: [
      "A. Dapat digunakan oleh banyak orang dalam waktu berbeda",
      "B. Hanya bisa digunakan satu orang",
      "C. Mendukung banyak program sekaligus",
      "D. Dapat digunakan oleh banyak pengguna secara bersamaan",
    ],
    answer: "D",
    answerKey: "D. Dapat digunakan oleh banyak pengguna secara bersamaan",
    explanation:
      "Multiuser berarti sistem operasi dapat melayani dan mendukung beberapa pengguna secara bersamaan.",
  },

  {
    id: 93,
    section: "C",
    category: "TI",
    question: "Perintah dasar untuk menampilkan teks di Java adalah...",
    options: [
      "A. print();",
      "B. echo();",
      "C. System.out.println();",
      "D. display();",
    ],
    answer: "C",
    answerKey: "C. System.out.println();",
    explanation:
      "System.out.println() digunakan dalam Java untuk menampilkan teks atau nilai ke console dan berpindah ke baris berikutnya.",
  },

  {
    id: 94,
    section: "C",
    category: "komputer",
    question: "Dalam jaringan komputer, protokol TCP berfungsi untuk...",
    options: [
      "A. Mengatur pengiriman data agar andal dan berurutan",
      "B. Mengelola nama domain",
      "C. Mendeteksi perangkat keras",
      "D. Menampilkan data web",
    ],
    answer: "A",
    answerKey: "A. Mengatur pengiriman data agar andal dan berurutan",
    explanation:
      "TCP menyediakan komunikasi yang andal dengan memastikan data diterima dengan benar dan sesuai urutan.",
  },

  {
    id: 95,
    section: "C",
    category: "komputer",
    question: "Metode akses data pada memori utama disebut...",
    options: [
      "A. Sequential Access",
      "B. Random Access",
      "C. Serial Access",
      "D. Linear Access",
    ],
    answer: "B",
    answerKey: "B. Random Access",
    explanation:
      "RAM menggunakan random access, sehingga lokasi memori dapat diakses secara langsung tanpa harus melewati data sebelumnya.",
  },

  {
    id: 96,
    section: "C",
    category: "TI",
    question:
      "Dalam bahasa pemrograman, operator logika “AND” menghasilkan true jika...",
    options: [
      "A. Salah satu operand bernilai true",
      "B. Semua operand bernilai true",
      "C. Salah satu operand bernilai false",
      "D. Tidak ada operand",
    ],
    answer: "B",
    answerKey: "B. Semua operand bernilai true",
    explanation:
      "Operator AND hanya menghasilkan true apabila seluruh operand yang diperiksa bernilai true.",
  },

  {
    id: 97,
    section: "C",
    category: "komputer",
    question: "Model jaringan client-server ditandai dengan...",
    options: [
      "A. Semua komputer memiliki hak yang sama",
      "B. Satu komputer melayani permintaan dari komputer lain",
      "C. Tidak ada komputer pusat",
      "D. Semua komputer terhubung langsung tanpa server",
    ],
    answer: "B",
    answerKey: "B. Satu komputer melayani permintaan dari komputer lain",
    explanation:
      "Pada model client-server, server menyediakan layanan atau sumber daya yang diminta oleh client.",
  },

  {
    id: 98,
    section: "C",
    category: "TI",
    question: "Compiler memiliki fungsi utama untuk...",
    options: [
      "A. Menjalankan program",
      "B. Mengubah kode sumber menjadi kode mesin",
      "C. Menulis ulang program",
      "D. Menyimpan program ke disk",
    ],
    answer: "B",
    answerKey: "B. Mengubah kode sumber menjadi kode mesin",
    explanation:
      "Compiler menerjemahkan kode sumber menjadi bentuk yang dapat diproses atau dijalankan oleh komputer.",
  },

  {
    id: 99,
    section: "C",
    category: "TI",
    question: "Bahasa SQL digunakan untuk...",
    options: [
      "A. Membuat animasi web",
      "B. Mengatur basis data",
      "C. Membuat aplikasi mobile",
      "D. Menulis kode AI",
    ],
    answer: "B",
    answerKey: "B. Mengatur basis data",
    explanation:
      "SQL digunakan untuk membuat, membaca, mengubah, dan mengelola data dalam basis data relasional.",
  },

  {
    id: 100,
    section: "C",
    category: "komputer",
    question: "Manakah yang termasuk volatile memory?",
    options: ["A. Harddisk", "B. SSD", "C. RAM", "D. ROM"],
    answer: "C",
    answerKey: "C. RAM",
    explanation:
      "RAM bersifat volatile karena data di dalamnya akan hilang ketika daya listrik komputer dimatikan.",
  },

  {
    id: 101,
    section: "C",
    category: "TI",
    question: "Fungsi utama BIOS adalah...",
    options: [
      "A. Menyimpan file sistem",
      "B. Menginisialisasi perangkat keras saat booting",
      "C. Menghapus data",
      "D. Menjalankan sistem operasi",
    ],
    answer: "B",
    answerKey: "B. Menginisialisasi perangkat keras saat booting",
    explanation:
      "BIOS melakukan proses awal seperti memeriksa dan menginisialisasi perangkat keras sebelum sistem operasi dimuat.",
  },

  {
    id: 102,
    section: "C",
    category: "TI",
    question: "Dalam algoritma, istilah looping berarti...",
    options: [
      "A. Mengulang langkah tertentu",
      "B. Membandingkan dua nilai",
      "C. Menghapus data",
      "D. Menyimpan hasil",
    ],
    answer: "A",
    answerKey: "A. Mengulang langkah tertentu",
    explanation:
      "Looping adalah proses menjalankan sekumpulan instruksi berulang kali selama kondisi tertentu terpenuhi.",
  },

  {
    id: 103,
    section: "C",
    category: "TI",
    question: "Konsep dasar machine learning adalah...",
    options: [
      "A. Komputer dikendalikan manusia",
      "B. Komputer belajar dari data",
      "C. Komputer hanya menjalankan perintah tetap",
      "D. Komputer membuat perangkat keras baru",
    ],
    answer: "B",
    answerKey: "B. Komputer belajar dari data",
    explanation:
      "Machine learning memungkinkan sistem mempelajari pola dari data untuk menghasilkan prediksi atau keputusan.",
  },

  {
    id: 104,
    section: "C",
    category: "TI",
    question: "Suatu array memiliki indeks mulai dari...",
    options: ["A. 0", "B. 1", "C. -1", "D. Tergantung jenis data"],
    answer: "A",
    answerKey: "A. 0",
    explanation:
      "Banyak bahasa pemrograman seperti Java, C, JavaScript, dan Python menggunakan indeks array yang dimulai dari 0.",
  },

  {
    id: 105,
    section: "C",
    category: "TI",
    question: "Dalam sistem database, primary key berfungsi untuk...",
    options: [
      "A. Menyimpan data duplikat",
      "B. Mengidentifikasi data secara unik",
      "C. Menyimpan data sementara",
      "D. Menghapus data lama",
    ],
    answer: "B",
    answerKey: "B. Mengidentifikasi data secara unik",
    explanation:
      "Primary key digunakan untuk membedakan setiap record dalam tabel sehingga setiap nilai harus unik.",
  },

  {
    id: 106,
    section: "C",
    category: "TI",
    question: "Istilah firmware mengacu pada...",
    options: [
      "A. Program yang tertanam di perangkat keras",
      "B. Sistem operasi komputer",
      "C. Perangkat lunak sementara",
      "D. File backup",
    ],
    answer: "A",
    answerKey: "A. Program yang tertanam di perangkat keras",
    explanation:
      "Firmware adalah perangkat lunak yang tertanam pada perangkat keras untuk mengendalikan fungsi dasar perangkat tersebut.",
  },

  {
    id: 107,
    section: "C",
    category: "TI",
    question: "Konsep inheritance dalam OOP berarti...",
    options: [
      "A. Pengulangan kode",
      "B. Pewarisan atribut dan method dari satu class ke class lain",
      "C. Pembuatan objek baru dari variabel",
      "D. Penghapusan class turunan",
    ],
    answer: "B",
    answerKey: "B. Pewarisan atribut dan method dari satu class ke class lain",
    explanation:
      "Inheritance memungkinkan class turunan mewarisi atribut dan method dari class induknya.",
  },

  {
    id: 108,
    section: "C",
    category: "komputer",
    question: "Dalam jaringan, IP versi 6 memiliki panjang...",
    options: ["A. 32 bit", "B. 64 bit", "C. 128 bit", "D. 256 bit"],
    answer: "C",
    answerKey: "C. 128 bit",
    explanation:
      "IPv6 menggunakan alamat sepanjang 128 bit, jauh lebih besar dibandingkan IPv4 yang menggunakan 32 bit.",
  },

  {
    id: 109,
    section: "C",
    category: "komputer",
    question:
      "Perangkat jaringan yang berfungsi menentukan rute terbaik pengiriman data adalah...",
    options: ["A. Switch", "B. Router", "C. Bridge", "D. Repeater"],
    answer: "B",
    answerKey: "B. Router",
    explanation:
      "Router menentukan jalur yang sesuai untuk meneruskan paket data dari satu jaringan ke jaringan lainnya.",
  },

  {
    id: 110,
    section: "C",
    category: "TI",
    question: "Source code merupakan...",
    options: [
      "A. Kode hasil kompilasi",
      "B. Kode program dalam bahasa pemrograman",
      "C. Data biner",
      "D. Kode mesin",
    ],
    answer: "B",
    answerKey: "B. Kode program dalam bahasa pemrograman",
    explanation:
      "Source code adalah kode asli yang ditulis programmer menggunakan bahasa pemrograman tertentu.",
  },

  {
    id: 111,
    section: "C",
    category: "TI",
    question: "Dalam Java, keyword extends digunakan untuk...",
    options: [
      "A. Pewarisan class",
      "B. Menjalankan method",
      "C. Menghapus variabel",
      "D. Mengimpor paket",
    ],
    answer: "A",
    answerKey: "A. Pewarisan class",
    explanation:
      "Keyword extends digunakan untuk membuat sebuah class mewarisi atribut dan method dari class lain.",
  },

  {
    id: 112,
    section: "C",
    category: "komputer",
    question:
      "Dalam jaringan komputer, OSI layer yang bertanggung jawab terhadap transmisi fisik data adalah...",
    options: [
      "A. Session Layer",
      "B. Network Layer",
      "C. Data Link Layer",
      "D. Physical Layer",
    ],
    answer: "D",
    answerKey: "D. Physical Layer",
    explanation:
      "Physical Layer merupakan Layer 1 OSI yang menangani pengiriman bit melalui media fisik.",
  },

  {
    id: 113,
    section: "C",
    category: "TI",
    question: "Teknologi cloud computing memungkinkan pengguna...",
    options: [
      "A. Menyimpan dan mengakses data dari internet",
      "B. Menginstal sistem operasi baru",
      "C. Menghapus data lokal",
      "D. Mengubah jaringan kabel menjadi nirkabel",
    ],
    answer: "A",
    answerKey: "A. Menyimpan dan mengakses data dari internet",
    explanation:
      "Cloud computing memungkinkan pengguna memanfaatkan sumber daya komputasi seperti penyimpanan dan aplikasi melalui jaringan internet.",
  },

  {
    id: 114,
    section: "C",
    category: "TI",
    question: "Dalam struktur data, stack menggunakan prinsip...",
    options: ["A. FIFO", "B. LIFO", "C. Random Access", "D. Circular Queue"],
    answer: "B",
    answerKey: "B. LIFO",
    explanation:
      "Stack menggunakan prinsip LIFO (Last In, First Out), sehingga data yang terakhir masuk akan menjadi yang pertama keluar.",
  },

  {
    id: 115,
    section: "C",
    category: "TI",
    question: "Dalam bahasa pemrograman, variabel global berarti...",
    options: [
      "A. Hanya dapat diakses oleh satu fungsi",
      "B. Dapat diakses dari seluruh program",
      "C. Tidak memiliki nilai awal",
      "D. Tidak bisa diubah",
    ],
    answer: "B",
    answerKey: "B. Dapat diakses dari seluruh program",
    explanation:
      "Variabel global memiliki ruang lingkup yang luas sehingga dapat diakses dari berbagai bagian program sesuai aturan bahasa pemrograman.",
  },

  {
    id: 116,
    section: "C",
    category: "TI",
    question: "Tujuan dari algoritma sorting adalah...",
    options: [
      "A. Menghapus data",
      "B. Mengurutkan data",
      "C. Menyimpan data",
      "D. Mencari data",
    ],
    answer: "B",
    answerKey: "B. Mengurutkan data",
    explanation:
      "Sorting digunakan untuk menyusun data berdasarkan urutan tertentu, misalnya dari terkecil ke terbesar.",
  },

  {
    id: 117,
    section: "C",
    category: "TI",
    question: "Konsep Big Data mencakup volume, velocity, dan...",
    options: ["A. Variety", "B. Value", "C. Validation", "D. Visibility"],
    answer: "A",
    answerKey: "A. Variety",
    explanation:
      "Tiga karakteristik utama Big Data yang umum dikenal adalah Volume, Velocity, dan Variety.",
  },

  {
    id: 118,
    section: "C",
    category: "TI",
    question:
      "Aplikasi version control yang populer untuk kolaborasi kode adalah...",
    options: ["A. Visual Studio", "B. GitHub", "C. XAMPP", "D. Jupyter"],
    answer: "B",
    answerKey: "B. GitHub",
    explanation:
      "GitHub merupakan platform hosting repository Git yang banyak digunakan untuk menyimpan dan berkolaborasi pada kode.",
  },

  {
    id: 119,
    section: "C",
    category: "TI",
    question: "Dalam sistem operasi, proses multitasking berarti...",
    options: [
      "A. Menjalankan banyak program secara bersamaan",
      "B. Menghapus banyak file",
      "C. Menyimpan banyak data",
      "D. Menyambungkan banyak perangkat",
    ],
    answer: "A",
    answerKey: "A. Menjalankan banyak program secara bersamaan",
    explanation:
      "Multitasking memungkinkan sistem operasi menangani beberapa proses atau program sehingga tampak berjalan secara bersamaan.",
  },

  {
    id: 120,
    section: "C",
    category: "TI",
    question: "Format file “.csv” biasanya digunakan untuk...",
    options: [
      "A. Data tabel berbasis teks",
      "B. Gambar",
      "C. Program executable",
      "D. File kompresi",
    ],
    answer: "A",
    answerKey: "A. Data tabel berbasis teks",
    explanation:
      "CSV (Comma-Separated Values) digunakan untuk menyimpan data tabular dalam bentuk teks dengan pemisah antar nilai.",
  },

  {
    id: 121,
    section: "C",
    category: "TI",
    question: "Dalam pemrograman, if-else digunakan untuk...",
    options: [
      "A. Pengulangan",
      "B. Percabangan",
      "C. Penjumlahan",
      "D. Input data",
    ],
    answer: "B",
    answerKey: "B. Percabangan",
    explanation:
      "If-else digunakan untuk memilih blok kode yang dijalankan berdasarkan kondisi tertentu.",
  },

  {
    id: 122,
    section: "C",
    category: "keamanan",
    question: "Teknologi firewall berfungsi untuk...",
    options: [
      "A. Menyaring lalu lintas jaringan",
      "B. Mempercepat internet",
      "C. Menyimpan file sementara",
      "D. Menambah RAM",
    ],
    answer: "A",
    answerKey: "A. Menyaring lalu lintas jaringan",
    explanation:
      "Firewall menyaring lalu lintas jaringan berdasarkan aturan keamanan untuk membantu mencegah akses yang tidak diizinkan.",
  },

  {
    id: 123,
    section: "C",
    category: "TI",
    question:
      "Sistem operasi yang digunakan pada server berbasis open source adalah...",
    options: ["A. Linux", "B. Windows Server", "C. macOS", "D. Solaris"],
    answer: "A",
    answerKey: "A. Linux",
    explanation:
      "Linux merupakan sistem operasi open source yang banyak digunakan pada server karena fleksibel dan dapat dikustomisasi.",
  },

  {
    id: 124,
    section: "C",
    category: "TI",
    question: "Dalam pemrograman, fungsi return digunakan untuk...",
    options: [
      "A. Mengulang kode",
      "B. Mengirim nilai kembali ke pemanggil fungsi",
      "C. Menutup program",
      "D. Menampilkan hasil",
    ],
    answer: "B",
    answerKey: "B. Mengirim nilai kembali ke pemanggil fungsi",
    explanation:
      "Return digunakan untuk mengembalikan nilai dari sebuah fungsi kepada bagian program yang memanggilnya.",
  },

  {
    id: 125,
    section: "C",
    category: "TI",
    question:
      "Struktur data yang memiliki banyak cabang dari satu node disebut...",
    options: ["A. Stack", "B. Queue", "C. Tree", "D. Array"],
    answer: "C",
    answerKey: "C. Tree",
    explanation:
      "Tree adalah struktur data hierarkis yang terdiri dari node dan hubungan antarnode dengan bentuk bercabang.",
  },

  {
    id: 126,
    section: "C",
    category: "TI",
    question:
      "Perangkat lunak yang digunakan untuk mengelola basis data disebut...",
    options: ["A. DBMS", "B. OS", "C. Compiler", "D. Emulator"],
    answer: "A",
    answerKey: "A. DBMS",
    explanation:
      "DBMS (Database Management System) digunakan untuk membuat, mengelola, menyimpan, dan mengakses basis data.",
  },

  {
    id: 127,
    section: "C",
    category: "TI",
    question: "Dalam HTML, tag <img> digunakan untuk...",
    options: [
      "A. Menambahkan gambar",
      "B. Menampilkan tabel",
      "C. Membuat hyperlink",
      "D. Menambahkan teks",
    ],
    answer: "A",
    answerKey: "A. Menambahkan gambar",
    explanation:
      "Tag <img> digunakan untuk menampilkan gambar pada halaman HTML menggunakan atribut seperti src dan alt.",
  },

  {
    id: 128,
    section: "C",
    category: "TI",
    question: "Proses normalisasi dalam basis data bertujuan untuk...",
    options: [
      "A. Menambah kolom baru",
      "B. Menyimpan data duplikat",
      "C. Mengurangi redundansi data",
      "D. Menghapus tabel utama",
    ],
    answer: "C",
    answerKey: "C. Mengurangi redundansi data",
    explanation:
      "Normalisasi dilakukan untuk mengurangi pengulangan data dan memperbaiki struktur tabel agar lebih konsisten.",
  },

  {
    id: 129,
    section: "C",
    category: "TI",
    question: "Dalam AI, neural network terinspirasi dari...",
    options: [
      "A. Otak manusia",
      "B. Jaringan komputer",
      "C. Sistem operasi",
      "D. Struktur DNA",
    ],
    answer: "A",
    answerKey: "A. Otak manusia",
    explanation:
      "Neural network terinspirasi dari cara neuron saling terhubung dan memproses informasi dalam sistem saraf manusia.",
  },

  {
    id: 130,
    section: "C",
    category: "TI",
    question: "Bahasa pemrograman Python termasuk tipe...",
    options: [
      "A. Compiled language",
      "B. Interpreted language",
      "C. Markup language",
      "D. Assembly language",
    ],
    answer: "B",
    answerKey: "B. Interpreted language",
    explanation:
      "Python umum dikategorikan sebagai interpreted language karena program dijalankan melalui interpreter, meskipun implementasinya dapat menggunakan tahap kompilasi bytecode.",
  },

  {
    id: 131,
    section: "C",
    category: "keamanan",
    question: "Dalam keamanan jaringan, phishing berarti...",
    options: [
      "A. Menipu pengguna untuk memberikan data pribadi",
      "B. Menyebarkan virus komputer",
      "C. Meretas password dengan brute force",
      "D. Menyadap jaringan",
    ],
    answer: "A",
    answerKey: "A. Menipu pengguna untuk memberikan data pribadi",
    explanation:
      "Phishing adalah teknik penipuan yang menyamar sebagai pihak tepercaya untuk mendapatkan informasi pribadi atau sensitif.",
  },

  {
    id: 132,
    section: "C",
    category: "TI",
    question:
      "Perintah dasar untuk menampilkan isi direktori di sistem Linux adalah...",
    options: ["A. list", "B. show", "C. ls", "D. dir"],
    answer: "C",
    answerKey: "C. ls",
    explanation:
      "Perintah ls pada Linux digunakan untuk menampilkan daftar file dan direktori pada lokasi saat ini.",
  },

  {
    id: 133,
    section: "C",
    category: "TI",
    question:
      "Dalam algoritma pencarian, binary search hanya dapat digunakan jika...",
    options: [
      "A. Data sudah terurut",
      "B. Data acak",
      "C. Data tidak berulang",
      "D. Data kecil",
    ],
    answer: "A",
    answerKey: "A. Data sudah terurut",
    explanation:
      "Binary search bekerja dengan membagi ruang pencarian menjadi dua sehingga membutuhkan data yang sudah terurut.",
  },

  {
    id: 134,
    section: "C",
    category: "TI",
    question:
      "Dalam Java, public static void main(String[] args) berfungsi sebagai...",
    options: [
      "A. Method tambahan",
      "B. Method khusus untuk input",
      "C. Method penyimpanan",
      "D. Method utama yang dijalankan pertama kali",
    ],
    answer: "D",
    answerKey: "D. Method utama yang dijalankan pertama kali",
    explanation:
      "Method main() merupakan entry point standar program Java yang digunakan JVM untuk memulai eksekusi aplikasi.",
  },

  {
    id: 135,
    section: "C",
    category: "komputer",
    question:
      "Teknologi yang memungkinkan komunikasi antar perangkat IoT disebut...",
    options: ["A. MQTT", "B. HTTP", "C. SMTP", "D. FTP"],
    answer: "A",
    answerKey: "A. MQTT",
    explanation:
      "MQTT adalah protokol komunikasi ringan yang banyak digunakan untuk pertukaran pesan antara perangkat dalam sistem IoT.",
  },
];
