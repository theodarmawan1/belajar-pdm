const learningModules = [
  {
    id: "mod-0",
    title: "Modul 0: Pengenalan PDM & SDLC",
    group: "Dasar Pemrograman Terstruktur",
    description: "Materi dasar mengenai perancangan program, pentingnya metodologi, dan siklus hidup pengembangan perangkat lunak (SDLC).",
    content: `
      <h2>1. Apa itu Program Design Methods (PDM)?</h2>
      <p>Dalam dunia rekayasa perangkat lunak, coding atau menulis kode hanyalah sebagian kecil dari pekerjaan. Sebelum menulis kode, kita harus merancang bagaimana program tersebut akan menerima input, memproses data, menghasilkan output, dan bagaimana struktur datanya akan disusun. <strong>Program Design Methods (PDM)</strong> adalah kumpulan metode, teknik, dan alat bantu terstruktur untuk merancang solusi pemrograman yang efisien, mudah dibaca, dan mudah dipelihara.</p>
      
      <p>PDM dibagi menjadi dua paradigma utama:</p>
      <ul>
        <li><strong>Fase I: Pemrograman Terstruktur (Structured Programming):</strong> Pendekatan pemrograman tradisional yang membagi logika program menjadi modul-modul kecil, fungsi, percabangan, dan perulangan.</li>
        <li><strong>Fase II: Pemrograman Berorientasi Objek (Object-Oriented Programming):</strong> Pendekatan modern yang memodelkan program sebagai kumpulan objek yang saling berinteraksi (menggunakan UML).</li>
      </ul>

      <h2>2. Siklus Hidup Pengembangan Perangkat Lunak (SDLC)</h2>
      <p>Setiap perangkat lunak berkualitas dibangun melalui proses bertahap yang disebut <strong>Software Development Life Cycle (SDLC)</strong>. Ada 4 tahapan utama:</p>
      <ol>
        <li><strong>Planning (Perencanaan):</strong> Menentukan alasan pembuatan sistem, menganalisis kelayakan ekonomi, teknis, dan organisasi, serta membuat jadwal kerja.</li>
        <li><strong>Analysis (Analisis):</strong> Mengumpulkan kebutuhan pengguna secara mendalam. Menjawab pertanyaan: <em>"Apa yang harus dilakukan oleh sistem?"</em></li>
        <li><strong>Design (Desain):</strong> Merancang arsitektur teknis, database, antarmuka pengguna (UI), dan struktur logika internal program. Menjawab pertanyaan: <em>"Bagaimana sistem akan dibangun?"</em></li>
        <li><strong>Implementation (Implementasi):</strong> Menulis kode program, melakukan testing (pengujian), instalasi ke server, dan pemeliharaan sistem.</li>
      </ol>

      <div class="tip-box">
        <strong>Analogi Sederhana:</strong><br>
        SAD & PDM seperti merancang jembatan layang. Arsitek menggambar konsep jembatan (Analisis & Desain), insinyur sipil menghitung beton dan pipa (Program Design), dan para pekerja bangunan mencor semen di lapangan (Implementasi/Coding).
      </div>
    `,
    quiz: [
      {
        questionText: "Manakah di bawah ini yang merupakan fokus utama dari tahap Analysis (Analisis) dalam SDLC?",
        options: [
          "Menulis kode program menggunakan Java atau Python.",
          "Menyelidiki kebutuhan bisnis pengguna untuk mengetahui 'apa' yang harus disediakan sistem.",
          "Merancang skema database fisik di MySQL.",
          "Menguji keamanan jaringan server."
        ],
        correctAnswerIndex: 1,
        explanation: "Tahap analisis berfokus untuk mengetahui 'apa' kebutuhan pengguna dan sistem (What), sedangkan desain berfokus pada 'bagaimana' aspek teknis konstruksinya (How)."
      }
    ]
  },
  {
    id: "mod-1",
    title: "Modul 1: Dasar Program: IPO & Pseudocode",
    group: "Dasar Pemrograman Terstruktur",
    description: "Mempelajari konsep Input-Process-Output (IPO) untuk merancang kebutuhan program, serta memodelkan logika menggunakan pseudocode.",
    content: `
      <h2>1. Konsep Input, Process, Output (IPO)</h2>
      <p>Setiap program komputer pada dasarnya adalah mesin pemroses data. Program menerima data dari luar, melakukan operasi logika atau aritmatika, lalu menghasilkan informasi baru. Siklus ini disebut <strong>Input, Process, Output (IPO)</strong>.</p>
      
      <ul>
        <li><strong>Input:</strong> Data mentah yang dimasukkan ke dalam program (misal: angka, teks, klik mouse, unggahan file, atau data dari database).</li>
        <li><strong>Process:</strong> Langkah-langkah logis atau perhitungan yang dilakukan sistem terhadap data input (misal: penjumlahan, pencarian data, perkalian pajak).</li>
        <li><strong>Output:</strong> Hasil akhir berupa informasi yang disajikan kepada pengguna (misal: laporan teks di layar, struk fisik, atau perubahan data di database).</li>
      </ul>

      <div class="tip-box">
        <strong>Contoh Analisis IPO: Program Menghitung Total Harga</strong><br>
        - <strong>Input:</strong> Harga barang, jumlah barang, tingkat pajak (%).<br>
        - <strong>Process:</strong> <br>
        &nbsp;&nbsp;1. Hitung subtotal = harga barang * jumlah barang.<br>
        &nbsp;&nbsp;2. Hitung nominal pajak = subtotal * (tingkat pajak / 100).<br>
        &nbsp;&nbsp;3. Hitung total akhir = subtotal + nominal pajak.<br>
        - <strong>Output:</strong> Total akhir yang harus dibayar pelanggan.
      </div>

      <h2>2. Apa itu Pseudocode?</h2>
      <p>Sebelum menulis program dalam bahasa pemrograman asli (seperti C++, Java, atau Python), analis atau programmer membuat rancangan logika menggunakan **Pseudocode**.</p>
      <p><strong>Pseudocode</strong> adalah deskripsi algoritma pemrograman yang menggunakan bahasa manusia (biasanya bahasa Inggris atau Indonesia) yang disederhanakan dan mengikuti standar struktur pemrograman komputer. Pseudocode tidak memiliki aturan sintaks kaku seperti compiler bahasa pemrograman asli, tetapi sangat mudah dipahami oleh manusia.</p>

      <h3>Aturan Umum Penulisan Pseudocode:</h3>
      <ul>
        <li>Gunakan huruf kapital untuk kata kunci perintah utama (misal: <code>READ</code>, <code>WRITE</code>, <code>IF</code>, <code>ELSE</code>, <code>WHILE</code>, <code>SET</code>).</li>
        <li>Gunakan indentasi (jorokan teks ke dalam) untuk menunjukkan blok kode logis (seperti di dalam loop atau kondisi).</li>
        <li>Tulis secara berurutan dari atas ke bawah.</li>
      </ul>

      <h3>Contoh Perbandingan Logika:</h3>
      
      <table>
        <thead>
          <tr>
            <th>Bahasa Alami (Manusia)</th>
            <th>Pseudocode Terstruktur</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mintalah pengguna untuk memasukkan harga barang. Jika harga barang tersebut lebih dari 100 ribu, berikan diskon 10 persen. Tampilkan total bayar setelah dipotong diskon.</td>
            <td>
              <pre style="margin:0; font-family:monospace; color:#a78bfa;">
READ hargaBarang
IF hargaBarang > 100000 THEN
    SET diskon = hargaBarang * 0.10
    SET totalBayar = hargaBarang - diskon
ELSE
    SET totalBayar = hargaBarang
ENDIF
WRITE totalBayar</pre>
            </td>
          </tr>
        </tbody>
      </table>
    `,
    quiz: [
      {
        questionText: "Mengapa kita menggunakan Pseudocode sebelum menulis kode program asli?",
        options: [
          "Agar program dapat langsung dijalankan di komputer tanpa perlu di-compile.",
          "Untuk mempermudah manusia memahami alur logika algoritma pemecahan masalah tanpa terganggu oleh detail sintaks bahasa pemrograman tertentu.",
          "Untuk mendesain tampilan antarmuka (GUI) secara visual.",
          "Agar file kode program menjadi lebih besar dan rumit."
        ],
        correctAnswerIndex: 1,
        explanation: "Pseudocode dirancang murni untuk membantu manusia memahami alur logika berpikir sistem sebelum diubah menjadi kode program nyata."
      }
    ]
  },
  {
    id: "mod-2",
    title: "Modul 2: Logika & Aliran: Percabangan & Perulangan",
    group: "Dasar Pemrograman Terstruktur",
    description: "Mempelajari struktur kontrol percabangan (Decision), logika Boolean, dan struktur perulangan (Repetition) untuk mengontrol alur program.",
    content: `
      <h2>1. Struktur Percabangan (Decision Structure)</h2>
      <p>Secara bawaan, komputer membaca kode secara berurutan baris demi baris dari atas ke bawah. Namun, terkadang kita ingin komputer mengambil keputusan dan melompati baris tertentu berdasarkan kondisi. Inilah fungsi **Percabangan (Decision Structure)**.</p>
      
      <h3>Tiga Jenis Struktur Percabangan:</h3>
      <ol>
        <li><strong>Single Alternative (IF-THEN):</strong> Perintah dijalankan HANYA JIKA kondisi terpenuhi.
          <pre class="code-box">
IF umur >= 17 THEN
    WRITE "Silakan buat KTP"
ENDIF</pre>
        </li>
        <li><strong>Dual Alternative (IF-THEN-ELSE):</strong> Perintah A dijalankan jika kondisi terpenuhi, perintah B dijalankan jika kondisi tidak terpenuhi.
          <pre class="code-box">
IF nilai >= 60 THEN
    WRITE "Lulus"
ELSE
    WRITE "Tidak Lulus"
ENDIF</pre>
        </li>
        <li><strong>Multiple Alternative (IF-ELSEIF-ELSE atau SWITCH-CASE):</strong> Digunakan jika ada banyak kondisi yang perlu diperiksa secara bertingkat.
          <pre class="code-box">
IF nilai >= 85 THEN
    SET grade = "A"
ELSEIF nilai >= 75 THEN
    SET grade = "B"
ELSE
    SET grade = "C"
ENDIF</pre>
        </li>
      </ol>

      <h2>2. Logika Boolean & Tabel Kebenaran</h2>
      <p>Kondisi di dalam percabangan dievaluasi menggunakan logika Boolean yang menghasilkan nilai <code>TRUE</code> atau <code>FALSE</code>. Untuk menggabungkan beberapa kondisi, kita menggunakan operator logika:</p>
      <ul>
        <li><strong>AND (Dan):</strong> Bernilai TRUE hanya jika <strong>semua</strong> kondisi bernilai TRUE.</li>
        <li><strong>OR (Atau):</strong> Bernilai TRUE jika <strong>salah satu atau kedua</strong> kondisi bernilai TRUE.</li>
        <li><strong>NOT (Negasi/Bukan):</strong> Membalik nilai logika (TRUE menjadi FALSE, dan sebaliknya).</li>
      </ul>

      <h2>3. Struktur Perulangan (Repetition Structure / Looping)</h2>
      <p>Perulangan memungkinkan kita menjalankan blok kode yang sama berulang kali tanpa harus menulis ulang kode tersebut. Terdapat dua jenis perulangan:</p>
      
      <ul>
        <li><strong>Condition-Controlled Loops (Perulangan berdasarkan Kondisi):</strong>
          <ul>
            <li><code>WHILE</code> (Pre-test Loop): Kondisi diperiksa di AWAL. Jika benar, jalankan blok kode. Bisa jadi kode tidak pernah berjalan sama sekali jika kondisi awal FALSE.</li>
            <li><code>DO-WHILE</code> / <code>REPEAT-UNTIL</code> (Post-test Loop): Blok kode dijalankan minimal SATU KALI terlebih dahulu, baru kondisi diperiksa di akhir.</li>
          </ul>
        </li>
        <li><strong>Count-Controlled Loops (Perulangan berdasarkan Hitungan):</strong>
          <ul>
            <li><code>FOR</code>: Menggunakan variabel pencacah (counter) untuk mengulang kode sebanyak angka yang sudah ditentukan di awal (misal: 10 kali).</li>
          </ul>
        </li>
      </ul>

      <div class="tip-box">
        <strong>Contoh Perulangan WHILE mencetak angka 1 sampai 5:</strong><br>
        <pre style="font-family:monospace; color:#a78bfa; margin-top:10px;">
SET counter = 1
WHILE counter <= 5
    WRITE counter
    SET counter = counter + 1
ENDWHILE</pre>
      </div>
    `,
    quiz: [
      {
        questionText: "Berapakah hasil evaluasi dari ekspresi Boolean berikut: (5 > 3) AND (10 < 8)?",
        options: [
          "TRUE",
          "FALSE",
          "Error",
          "Tidak Terhingga"
        ],
        correctAnswerIndex: 1,
        explanation: "(5 > 3) bernilai TRUE, tetapi (10 < 8) bernilai FALSE. Karena menggunakan operator AND, kedua kondisi harus TRUE agar hasilnya TRUE. Maka hasil akhirnya adalah FALSE."
      }
    ]
  },
  {
    id: "mod-3",
    title: "Modul 3: Modularitas: Modul, Fungsi & Validasi Input",
    group: "Dasar Pemrograman Terstruktur",
    description: "Membahas pembagian kode menjadi sub-program (modul/fungsi), pengiriman parameter, serta strategi mencegah kesalahan data lewat validasi input.",
    content: `
      <h2>1. Konsep Modularitas (Modularization)</h2>
      <p>Ketika sebuah program bertambah panjang hingga ribuan baris, kode tersebut akan sangat sulit dibaca dan didebug. Solusinya adalah menerapkan **Modularitas**—yaitu memecah kode program besar menjadi bagian-bagian kecil yang mandiri. Bagian kecil ini disebut **Modul**, **Sub-program**, **Prosedur**, atau **Fungsi**.</p>
      
      <h3>Keuntungan Modularitas:</h3>
      <ul>
        <li><strong>Reusability (Penggunaan Kembali):</strong> Tulis modul sekali, gunakan berkali-kali di bagian program manapun tanpa menulis ulang kode.</li>
        <li><strong>Readability (Keterbacaan):</strong> Mempermudah pembacaan alur program utama karena detail teknis disembunyikan di dalam modul.</li>
        <li><strong>Ease of Maintenance:</strong> Jika terjadi error pada fungsi tertentu, kita hanya perlu memperbaiki satu modul tersebut.</li>
      </ul>

      <h2>2. Perbedaan Prosedur dan Fungsi</h2>
      <ul>
        <li><strong>Prosedur:</strong> Menjalankan serangkaian instruksi tugas tertentu tanpa mengembalikan nilai hasil perhitungan kembali ke pemanggilnya.</li>
        <li><strong>Fungsi (Function):</strong> Menjalankan perhitungan dan wajib **mengembalikan nilai (Return Value)** ke kode pemanggilnya.</li>
      </ul>

      <pre class="code-box">
// Definisi Fungsi menghitung luas persegi panjang
FUNCTION hitungLuas(panjang, lebar)
    SET luas = panjang * lebar
    RETURN luas
ENDFUNCTION

// Pemanggilan Fungsi di program utama
SET hasil = hitungLuas(10, 5)
WRITE hasil // Mencetak angka 50</pre>

      <h2>3. Pengiriman Argumen dan Parameter</h2>
      <p>Modul berkomunikasi dengan menerima variabel input yang dikirimkan oleh pemanggilnya. Variabel ini disebut **Parameter** di definisi modul, dan disebut **Argumen** saat modul dipanggil.</p>
      <p>Metode pengiriman parameter:</p>
      <ul>
        <li><strong>Call by Value (Passing by Value):</strong> Modul hanya menerima salinan nilai variabel asli. Perubahan variabel di dalam modul tidak akan merubah nilai variabel asli di luar modul.</li>
        <li><strong>Call by Reference (Passing by Reference):</strong> Modul menerima alamat memori variabel asli. Perubahan variabel di dalam modul **akan mengubah** nilai variabel asli di luar modul secara permanen.</li>
      </ul>

      <h2>4. Validasi Input</h2>
      <p>Ada pepatah terkenal dalam dunia komputer: <strong>GIGO (Garbage In, Garbage Out)</strong>. Jika pengguna memasukkan data sampah (salah format/tipe), maka sistem akan menghasilkan data sampah atau mengalami crash. Oleh karena itu, kita harus memvalidasi data masukan sebelum diproses oleh sistem.</p>
      <p>Validasi input biasanya ditulis menggunakan perulangan kondisional untuk memaksa pengguna menginput data yang benar:</p>

      <pre class="code-box">
READ umur
WHILE umur < 0 OR umur > 120
    WRITE "Kesalahan: Umur tidak masuk akal. Masukkan lagi!"
    READ umur
ENDWHILE
WRITE "Umur valid disimpan: " + umur</pre>
    `,
    quiz: [
      {
        questionText: "Apakah perbedaan utama antara Fungsi (Function) dengan Prosedur?",
        options: [
          "Fungsi ditulis oleh programmer senior, prosedur ditulis oleh pemula.",
          "Fungsi selalu mengembalikan nilai hasil perhitungan menggunakan kata kunci RETURN, sedangkan prosedur hanya menjalankan perintah tanpa mengembalikan nilai.",
          "Prosedur hanya bisa berjalan di sistem operasi mobile.",
          "Fungsi tidak boleh menggunakan variabel lokal."
        ],
        correctAnswerIndex: 1,
        explanation: "Fungsi (Function) dirancang khusus untuk memproses input dan wajib mengembalikan satu nilai hasil (Return Value) ke kode pemanggil."
      }
    ]
  },
  {
    id: "mod-4",
    title: "Modul 4: Konstruksi: File & Event-driven GUI",
    group: "Dasar Pemrograman Terstruktur",
    description: "Mempelajari pemrosesan file teks (I/O), pemrograman berbasis menu (menu-driven), serta konsep antarmuka grafis (GUI) berbasis kejadian (event-driven).",
    content: `
      <h2>1. Pemrograman Berbasis File (File I/O)</h2>
      <p>Hingga saat ini, semua data yang kita masukkan ke dalam program hanya disimpan sementara di RAM (memori jangka pendek). Ketika program ditutup atau komputer dimatikan, semua data tersebut hilang. Untuk menyimpan data secara permanen, kita harus menulisnya ke dalam media penyimpanan fisik (seperti Harddisk/SSD) dalam bentuk **File**.</p>
      
      <h3>Tiga Langkah Utama Operasi File:</h3>
      <ol>
        <li><strong>Open File:</strong> Membuka file berdasarkan nama fisiknya dan menentukan mode operasinya:
          <ul>
            <li><em>Read Mode (R):</em> Membaca isi file yang sudah ada.</li>
            <li><em>Write Mode (W):</em> Membuat file baru atau menimpa isi file lama dari awal.</li>
            <li><em>Append Mode (A):</em> Menambahkan data baru di baris paling akhir file tanpa menghapus isi lama.</li>
          </ul>
        </li>
        <li><strong>Read / Write Data:</strong> Proses membaca baris data dari file atau menulis baris teks ke dalam file.</li>
        <li><strong>Close File:</strong> Menutup koneksi file untuk membebaskan sumber daya memori komputer dan memastikan data tertulis sempurna ke disk.</li>
      </ol>

      <h2>2. Pemrograman Berbasis Menu (Menu-Driven Programming)</h2>
      <p>Aplikasi konsol (Command Line Interface / CLI) yang interaktif biasanya dikendalikan oleh menu. Program menggunakan loop utama dan percabangan <code>SWITCH-CASE</code> atau <code>IF</code> untuk mengeksekusi fitur berdasarkan angka menu yang dipilih oleh pengguna.</p>
      <pre class="code-box">
SET pil = 0
WHILE pil != 3
    WRITE "=== MENU APLIKASI PERPUSTAKAAN ==="
    WRITE "1. Pinjam Buku"
    WRITE "2. Kembalikan Buku"
    WRITE "3. Keluar Aplikasi"
    WRITE "Pilih menu (1-3): "
    READ pil
    
    SWITCH pil
        CASE 1:
            CALL pinjamBuku()
        CASE 2:
            CALL kembalikanBuku()
        CASE 3:
            WRITE "Terima kasih telah menggunakan layanan kami."
        DEFAULT:
            WRITE "Pilihan salah! Masukkan angka 1 sampai 3."
    ENDSWITCH
ENDWHILE</pre>

      <h2>3. GUI dan Pemrograman Berbasis Kejadian (Event-Driven Programming)</h2>
      <p>Aplikasi modern umumnya menggunakan **Graphical User Interface (GUI)** yang memuat jendela (Window), tombol (Button), bidang teks (Text Field), dan gambar.</p>
      <p>Dalam aplikasi GUI, kita tidak lagi mengontrol alur program secara berurutan menggunakan baris kode CLI. Alur program sepenuhnya dikendalikan oleh tindakan pengguna. Pendekatan ini disebut **Event-Driven Programming (Pemrograman Berbasis Kejadian)**.</p>
      
      <ul>
        <li><strong>Event (Kejadian):</strong> Tindakan fisik yang dilakukan oleh pengguna terhadap antarmuka (misal: mengeklik tombol mouse, mengetik tombol keyboard, menggeser layar).</li>
        <li><strong>Event Listener / Handler:</strong> Fungsi atau modul khusus yang disiapkan untuk 'mendengarkan' event tertentu. Ketika event tersebut terjadi, sistem otomatis menjalankan kode di dalam handler tersebut.</li>
      </ul>

      <div class="tip-box">
        <strong>Contoh Sederhana:</strong><br>
        Anda membuat tombol GUI bernama "Simpan". Anda menulis fungsi <code>onSimpanClick()</code>. Ketika pengguna mengeklik tombol tersebut (Event Click terjadi), sistem akan memicu dan mengeksekusi isi fungsi <code>onSimpanClick()</code> (Event Handler).
      </div>
    `,
    quiz: [
      {
        questionText: "Apakah perbedaan antara Write Mode (W) dengan Append Mode (A) saat membuka sebuah berkas file?",
        options: [
          "Write mode hanya bisa digunakan untuk file gambar, append mode untuk file teks.",
          "Write mode menimpa dan menghapus seluruh isi file lama jika file sudah ada, sedangkan Append mode mempertahankan isi lama dan menuliskan data baru di baris paling bawah.",
          "Write mode menutup file secara otomatis, sedangkan append mode membiarkannya terbuka.",
          "Tidak ada perbedaan sama sekali."
        ],
        correctAnswerIndex: 1,
        explanation: "Write mode (W) menghapus konten lama file untuk ditulis ulang dari awal, sedangkan Append mode (A) menyisipkan data baru di bagian paling akhir file tanpa merusak data yang sudah ada sebelumnya."
      }
    ]
  },
  {
    id: "mod-5",
    title: "Modul 5: Penentuan Kebutuhan (Requirements)",
    group: "Dasar Pemrograman Terstruktur",
    description: "Mengidentifikasi, mendokumentasikan, dan memvalidasi kebutuhan fungsional dan non-fungsional dari sistem informasi.",
    content: `
      <h2>1. Mengapa Kita Harus Menentukan Kebutuhan?</h2>
      <p>Sebelum kita merancang cetak biru sistem perangkat lunak, kita harus melakukan investigasi mengenai apa saja kebutuhan sistem. Proses mengidentifikasi, mendokumentasikan, dan memvalidasi ini disebut <strong>Requirements Determination</strong>.</p>
      
      <h2>2. Perbedaan Kebutuhan Fungsional dan Non-Fungsional</h2>
      <p>Kebutuhan dibagi menjadi dua tipe utama:</p>
      <ul>
        <li><strong>Kebutuhan Fungsional (Functional Requirements):</strong> Pernyataan mengenai fungsi layanan apa saja yang harus bisa dilakukan oleh sistem perangkat lunak.
          <br><em>Contoh:</em> "Sistem harus bisa mencari data kamar hotel", "Sistem harus bisa mencetak struk transaksi pembayaran."
        </li>
        <li><strong>Kebutuhan Non-Fungsional (Non-functional Requirements):</strong> Karakteristik operasional atau batasan kualitas yang harus dimiliki sistem.
          <br><em>Contoh:</em> "Halaman harus dimuat kurang dari 2 detik (Kinerja)", "Aplikasi harus aktif 24 jam sehari (Ketersediaan)", "Data sandi harus dienkripsi (Keamanan)."
        </li>
      </ul>

      <h2>3. Strategi Analisis Kebutuhan</h2>
      <p>Beberapa strategi yang umum digunakan analis untuk menggali kebutuhan sistem:</p>
      <ul>
        <li><strong>Problem Analysis:</strong> Menganalisis masalah pada sistem saat ini untuk diperbaiki di sistem baru.</li>
        <li><strong>Root Cause Analysis:</strong> Melacak ke akar penyebab utama dari suatu masalah (bukan hanya gejalanya).</li>
        <li><strong>Duration Analysis & Activity-Based Costing:</strong> Menganalisis waktu dan biaya proses bisnis untuk mengefisiensikan alur kerja.</li>
        <li><strong>Technology Analysis:</strong> Meninjau bagaimana teknologi baru dapat memecahkan masalah bisnis perusahaan.</li>
        <li><strong>Activity Elimination:</strong> Menghapus langkah-langkah administratif yang tidak memberikan manfaat nyata.</li>
      </ul>

      <h2>4. Teknik Pengumpulan Kebutuhan</h2>
      <p>Beberapa metode pengumpulan kebutuhan yang sering digunakan oleh analis:</p>
      <ol>
        <li><strong>Wawancara (Interviews):</strong> Diskusi tatap muka langsung dengan pengguna utama.</li>
        <li><strong>Joint Application Development (JAD):</strong> Lokakarya intensif yang mempertemukan analis, manajer, dan pengguna untuk merancang kebutuhan bersama.</li>
        <li><strong>Kuesioner (Questionnaires):</strong> Kuesioner massal untuk mengumpulkan data kuantitatif dari banyak pengguna secara murah.</li>
        <li><strong>Analisis Dokumen (Document Analysis):</strong> Membaca formulir, SOP, dan berkas laporan sistem lama.</li>
        <li><strong>Observasi (Observation):</strong> Mengamati pengguna bekerja secara langsung di lapangan untuk memvalidasi fakta.</li>
      </ol>
    `,
    quiz: [
      {
        questionText: "Pernyataan 'Sistem harus mampu memproses pembayaran kartu kredit dalam waktu kurang dari 3 detik' termasuk dalam kategori kebutuhan apa?",
        options: [
          "Kebutuhan Fungsional",
          "Kebutuhan Non-Fungsional (Kinerja)",
          "Kebutuhan Antarmuka",
          "Bukan Kebutuhan Sistem"
        ],
        correctAnswerIndex: 1,
        explanation: "Pernyataan ini berkaitan dengan performa kecepatan sistem (Kinerja), sehingga dikategorikan sebagai Kebutuhan Non-Fungsional."
      }
    ]
  },
  {
    id: "mod-15",
    title: "Modul 15: Latihan Program Design (png2pdf)",
    group: "Latihan Mandiri (PDF)",
    description: "Analisis dan pembahasan terperinci untuk 15 halaman latihan algoritma, modul/fungsi, dan pengolah file (I/O) dari berkas PDF Anda.",
    content: `
      <h2>Latihan Soal dari Dokumen PDF (png2pdf)</h2>
      <p>Gunakan tab menu halaman di bawah ini untuk mempelajari dan menganalisis kode pseudocode dari 15 halaman berkas PDF Anda. Setiap halaman dilengkapi penjelasan mendalam dan pembahasannya.</p>

      <div class="pdf-viewer-container">
        <!-- Tab Buttons -->
        <div class="pdf-tabs">
          ${Array.from({length: 15}, (_, i) => i + 1).map(num => `
            <button class="pdf-tab-btn" id="pdf-btn-${num}" onclick="showPdfPage(${num})">Hal ${num}</button>
          `).join('')}
        </div>

        <!-- Tab Pages -->
        <!-- HALAMAN 1 -->
        <div class="pdf-page-block" id="pdf-page-1">
          <div class="pdf-page-header">
            <span>Validasi Input: Loop DO-WHILE vs DO-UNTIL</span>
            <span class="pdf-page-num-badge">Halaman 1</span>
          </div>
          <pre class="code-box">
Declare Integer nilai

Do
  Display "Masukkan nilai dari angka 1 s.d. 100: "
  Input nilai
While nilai < 1 OR nilai > 100

Do
  Display "Masukkan nilai dari angka 1 s.d. 100: "
  Input nilai
Until nilai >= 1 AND nilai <= 100</pre>
          <div class="pdf-page-explanation">
            <strong>Penjelasan Analisis:</strong><br>
            Kedua loop di atas berfungsi untuk <strong>memvalidasi input</strong> agar nilai yang dimasukkan berada dalam rentang 1 hingga 100.<br>
            - **Loop 1 (While):** Terus berulang selama nilai di luar rentang (kondisi bernilai **Benar/True**).<br>
            - **Loop 2 (Until):** Terus berulang sampai nilai masuk dalam rentang (berhenti ketika kondisi bernilai **Benar/True**). Logikanya berkebalikan dengan While.
          </div>
        </div>

        <!-- HALAMAN 2 -->
        <div class="pdf-page-block" id="pdf-page-2">
          <div class="pdf-page-header">
            <span>Validasi Input: Pre-Test vs Post-Test Loop</span>
            <span class="pdf-page-num-badge">Halaman 2</span>
          </div>
          <pre class="code-box">
// Metode A: Pre-Test (Pengecekan di Awal)
Display "Masukkan nilai dari angka 1 s.d. 100: "
Input nilai
While nilai < 1 OR nilai > 100
  Display "Masukkan nilai dari angka 1 s.d. 100: "
  Input nilai
End While

// Metode B: Post-Test (Pengecekan di Akhir)
Display "Masukkan nilai dari angka 1 s.d. 100: "
Input nilai
Do While nilai < 1 OR nilai > 100
  Display "Masukkan nilai dari angka 1 s.d. 100: "
  Input nilai
End Do</pre>
          <div class="pdf-page-explanation">
            <strong>Penjelasan Analisis:</strong><br>
            Halaman ini menunjukkan perbedaan penulisan loop pre-test dan post-test untuk tugas yang sama.<br>
            - Pada **Metode A (Pre-test)**, perintah <code>Display</code> dan <code>Input</code> harus ditulis sekali di luar loop agar kondisi <code>While</code> dapat mengevaluasi nilai pertama kali.<br>
            - Pada **Metode B (Post-test)**, loop <code>Do While</code> akan selalu mengeksekusi instruksi minimal satu kali sebelum memeriksa kondisi di akhir.
          </div>
        </div>

        <!-- HALAMAN 3 -->
        <div class="pdf-page-block" id="pdf-page-3">
          <div class="pdf-page-header">
            <span>Validasi Password (String Comparison)</span>
            <span class="pdf-page-num-badge">Halaman 3</span>
          </div>
          <pre class="code-box">
Declare String password

Do
  Display "Insert password: "
  Input password
While password != "BINUS"

// Catatan Implementasi Bahasa C:
// strcmp(password, "BINUS") -> membutuhkan library &lt;string.h&gt;</pre>
          <div class="pdf-page-explanation">
            <strong>Penjelasan Analisis:</strong><br>
            Latihan ini menguji pencocokan password string. Program akan terus mengulang permintaan password selama teks yang diinput <strong>tidak sama dengan ("BINUS")</strong>.<br>
            Dalam bahasa pemrograman tingkat rendah seperti C, pencocokan string tidak bisa langsung menggunakan operator <code>!=</code>. Kita wajib mengimpor pustaka <code>&lt;string.h&gt;</code> dan menggunakan fungsi <code>strcmp(str1, str2)</code>.
          </div>
        </div>

        <!-- HALAMAN 4 -->
        <div class="pdf-page-block" id="pdf-page-4">
          <div class="pdf-page-header">
            <span>Pemrograman Monolitik (Tanpa Modul / Fungsi)</span>
            <span class="pdf-page-num-badge">Halaman 4</span>
          </div>
          <pre class="code-box">
Declare Integer bil1, bil2, tambah, kali

Display "Bilangan 1 = "
Input bil1
Display "Bilangan 2 = "
Input bil2
tambah = bil1 + bil2
kali = bil1 * bil2
Display "Hasil penjumlahan = ", tambah
Display "Hasil perkalian = ", kali</pre>
          <div class="pdf-page-explanation">
            <strong>Penjelasan Analisis:</strong><br>
            - **Definisi Modul:** Blok kode yang dapat menerima input parameter, melakukan proses, dan mengembalikan beberapa nilai (atau tanpa mengembalikan nilai).<br>
            - **Definisi Fungsi:** Blok kode terstruktur yang memproses input dan <strong>wajib mengembalikan tepat satu nilai</strong> hasil perhitungan.<br>
            Halaman ini menunjukkan kode monolitik biasa yang tidak dipecah menjadi modul/fungsi. Semua variabel dideklarasikan dan diproses langsung di program utama.
          </div>
        </div>

        <!-- HALAMAN 5 -->
        <div class="pdf-page-block" id="pdf-page-5">
          <div class="pdf-page-header">
            <span>Implementasi Pemrograman dengan Fungsi (Function)</span>
            <span class="pdf-page-num-badge">Halaman 5</span>
          </div>
          <pre class="code-box">
Module main()
Declare Integer bil1, bil2, tambah, kali

Display "Bilangan 1 = "
Input bil1 // User menginput misal: 10
Display "Bilangan 2 = "
Input bil2 // User menginput misal: 5

Set tambah = penjumlahan(bil1, bil2)
Set kali = perkalian(tambah, tambah)

Display "Hasil penjumlahan = ", tambah
Display "Hasil perkalian = ", kali
End Module

Function Integer penjumlahan(Integer x, Integer y)
  Declare Integer z
  Set z = x + y
  Return z
End Function

Function Integer perkalian(Integer x, Integer y)
  Declare Integer z
  Set z = x * y
  Return z
End Function</pre>
          <div class="pdf-page-explanation">
            <strong>Penjelasan Analisis:</strong><br>
            Di sini program dipecah secara modular. Fungsi <code>penjumlahan</code> dan <code>perkalian</code> dideklarasikan secara terpisah di luar <code>Module main()</code>. Masing-masing mengembalikan nilai <code>z</code> yang bertipe Integer ke variabel pemanggil (<code>tambah</code> dan <code>kali</code>).
          </div>
        </div>

        <!-- HALAMAN 6 -->
        <div class="pdf-page-block" id="pdf-page-6">
          <div class="pdf-page-header">
            <span>Modul dengan Parameter Ref (Passing by Reference)</span>
            <span class="pdf-page-num-badge">Halaman 6</span>
          </div>
          <pre class="code-box">
Module hitung(Integer a, Integer b, Integer Ref c, Integer Ref d)
  Set c = a + b
  Set d = a * b
End Module</pre>
          <div class="pdf-page-explanation">
            <strong>Penjelasan Analisis:</strong><br>
            Halaman ini mengenalkan parameter bertipe <strong>Reference (Ref)</strong>. <br>
            - Parameter <code>a</code> dan <code>b</code> dikirim sebagai *Value* (hanya dibaca nilainya).<br>
            - Parameter <code>c</code> dan <code>d</code> dikirim sebagai *Reference* (alamat memori variabel asli dilewatkan). Ketika nilai <code>c</code> dan <code>d</code> diubah di dalam modul <code>hitung</code>, nilai variabel penampung asli di luar modul ikut berubah secara permanen. Ini memungkinkan modul mengembalikan lebih dari satu nilai sekaligus.
          </div>
        </div>

        <!-- HALAMAN 7 -->
        <div class="pdf-page-block" id="pdf-page-7">
          <div class="pdf-page-header">
            <span>Perbandingan Utuh: Fungsi vs Modul (Prosedur)</span>
            <span class="pdf-page-num-badge">Halaman 7</span>
          </div>
          <pre class="code-box">
// Definisi Fungsi
Function Integer penjumlahan(Integer x, Integer y)
  Declare Integer z
  Set z = x + y
  Return z
End Function

Function Integer perkalian(Integer x, Integer y)
  Declare Integer z
  Set z = x * y
  Return z
End Function

// Program Utama Menggunakan Call Module:
Module main()
Declare Integer bil1, bil2, tambah, kali

Display "Bilangan 1 = "
Input bil1 // misal: 10
Display "Bilangan 2 = "
Input bil2 // misal: 5

// Menggunakan modul dengan parameter reference
Call Module hitung(bil1, bil2, tambah, kali)

Display "Hasil penjumlahan = ", tambah
Display "Hasil perkalian = ", kali
End Module</pre>
          <div class="pdf-page-explanation">
            <strong>Penjelasan Analisis:</strong><br>
            Halaman ini menggabungkan konsep pemanggilan modul <code>hitung</code> menggunakan kata kunci <code>Call Module</code> di program utama. Dibandingkan dengan fungsi yang dipanggil di dalam ekspresi penugasan (<code>Set tambah = penjumlahan(...)</code>), modul dipanggil langsung sebagai satu baris perintah utuh.
          </div>
        </div>

        <!-- HALAMAN 8 -->
        <div class="pdf-page-block" id="pdf-page-8">
          <div class="pdf-page-header">
            <span>Program Modular Menghitung Rata-Rata Angka</span>
            <span class="pdf-page-num-badge">Halaman 8</span>
          </div>
          <pre class="code-box">
Module main()
  Declare Integer data, total=0
  Declare Real rata
  For i = 1 to 3
    Set data = input_data()
    Set total = hitung_total(data, total)
  End For
  Call hitung_rata(total, rata)
  Call tampil_hasil(rata)
End Module

Function Integer input_data()
  Declare Integer data
  Display "Masukkan data: "
  Input data
  Return data
End Function

Function Integer hitung_total(Integer data, Integer total)
  Set total = total + data
  Return total
End Function

Module hitung_rata(Integer total, Real Ref rata)
  Set rata = total / 3
End Module

Module tampil_hasil(Real rata)
  Display "Rata-rata dari ketiga data tersebut adalah ", rata
End Module</pre>
          <div class="pdf-page-explanation">
            <strong>Penjelasan Analisis:</strong><br>
            Ini adalah contoh aplikasi modular yang sangat lengkap dan rapi:<br>
            - Loop <code>For</code> mengulang input sebanyak 3 kali dibantu fungsi <code>input_data()</code> dan mengakumulasi jumlah di fungsi <code>hitung_total()</code>. <br>
            - Modul <code>hitung_rata</code> menerima input nilai total, lalu mengisi hasil pembagian ke parameter reference <code>rata</code>. <br>
            - Hasilnya dicetak ke layar oleh modul <code>tampil_hasil()</code>.
          </div>
        </div>

        <!-- HALAMAN 9 -->
        <div class="pdf-page-block" id="pdf-page-9">
          <div class="pdf-page-header">
            <span>Spesifikasi File "Covid.Txt"</span>
            <span class="pdf-page-num-badge">Halaman 9</span>
          </div>
          <pre class="code-box">
Spesifikasi File Data Covid:
------------------------------
Field Name      Data Type
------------------------------
Negara          String
Kasus_Baru      Integer
Meninggal       Integer
Sembuh          Integer
Aktif           Integer
------------------------------</pre>
          <div class="pdf-page-explanation">
            <strong>Penjelasan Analisis:</strong><br>
            Sebelum melakukan pemrograman file, analis harus menentukan struktur data fisik berkas terlebih dahulu. File <code>Covid.Txt</code> dirancang menggunakan format teks sekuensial yang memiliki 5 buah field data dengan tipe data teks (*String*) dan angka bulat (*Integer*).
          </div>
        </div>

        <!-- HALAMAN 10 -->
        <div class="pdf-page-block" id="pdf-page-10">
          <div class="pdf-page-header">
            <span>Menulis Data Baru ke Berkas File Covid.Txt (File Write)</span>
            <span class="pdf-page-num-badge">Halaman 10</span>
          </div>
          <pre class="code-box">
Declare String negara
Declare Integer kasus_baru, meninggal, sembuh, aktif, jml_negara, i
Declare Outputfile data_covid

Open data_covid "Covid.Txt"

Do
  Display "Masukkan Jumlah Negara: "
  Input jml_negara
While jml_negara < 1

For i = 1 to jml_negara
  Display "Masukkan Nama Negara: "
  Input negara
  Display "Jumlah Kasus Baru: "
  Input kasus_baru
  Display "Jumlah Meninggal: "
  Input meninggal
  Display "Jumlah Sembuh: "
  Input sembuh
  Display "Jumlah Aktif: "
  Input aktif
  Write data_covid negara, kasus_baru, meninggal, sembuh, aktif
End For

Close data_covid</pre>
          <div class="pdf-page-explanation">
            <strong>Penjelasan Analisis:</strong><br>
            - <code>Declare Outputfile data_covid</code> menandakan file dibuka untuk **ditulis** (*write mode*).<br>
            - Loop <code>For</code> berjalan sebanyak jumlah negara yang diinput oleh user. Perintah <code>Write data_covid ...</code> digunakan untuk memindahkan data dari variabel memori RAM ke dalam penyimpanan berkas permanen <code>Covid.Txt</code>.
          </div>
        </div>

        <!-- HALAMAN 11 -->
        <div class="pdf-page-block" id="pdf-page-11">
          <div class="pdf-page-header">
            <span>Membaca Berkas File Covid.Txt (File Read)</span>
            <span class="pdf-page-num-badge">Halaman 11</span>
          </div>
          <pre class="code-box">
Declare String negara
Declare Integer kasus_baru, meninggal, sembuh, aktif
Declare Inputfile data_covid
Declare Integer jml_data = 1

Open data_covid "Covid.Txt"

While NOT eof(data_covid)
  Call cetak_judul
  While NOT eof(data_covid) AND jml_data <= 30
    Read data_covid negara, kasus_baru, meninggal, sembuh, aktif
    Display negara, kasus_baru, meninggal, sembuh, aktif
    jml_data = jml_data + 1
  End While
  jml_data = 1
End While

Close data_covid</pre>
          <div class="pdf-page-explanation">
            <strong>Penjelasan Analisis:</strong><br>
            - <code>Declare Inputfile data_covid</code> membuka berkas untuk **dibaca** (*read mode*).<br>
            - Loop luar menggunakan kondisi <code>While NOT eof</code> (End of File) untuk terus membaca data selama berkas belum mencapai baris akhir.<br>
            - Loop dalam membatasi pembacaan maksimal 30 baris data per halaman (konsep *Pagination* sederhana pada CLI).
          </div>
        </div>

        <!-- HALAMAN 12 -->
        <div class="pdf-page-block" id="pdf-page-12">
          <div class="pdf-page-header">
            <span>Membaca File & Akumulasi Nilai Total</span>
            <span class="pdf-page-num-badge">Halaman 12</span>
          </div>
          <pre class="code-box">
Declare String negara
Declare Integer kasus_baru, meninggal, sembuh, aktif
Declare Inputfile data_covid
Declare Integer jml_data = 1
Declare Integer t_kasus_baru=0, t_meninggal=0, t_sembuh=0, t_aktif=0

Open data_covid "Covid.Txt"

While NOT eof(data_covid)
  Call cetak_judul
  While NOT eof(data_covid) AND jml_data <= 30
    Read data_covid negara, kasus_baru, meninggal, sembuh, aktif
    Display negara, kasus_baru, meninggal, sembuh, aktif
    Set jml_data = jml_data + 1
    Set t_kasus_baru = t_kasus_baru + kasus_baru
    Set t_meninggal = t_meninggal + meninggal
    Set t_sembuh = t_sembuh + sembuh
    Set t_aktif = t_aktif + aktif
  End While
  jml_data = 1
End While

Close data_covid

Module cetak_judul
  // Sub-program mencetak header kolom
End Module</pre>
          <div class="pdf-page-explanation">
            <strong>Penjelasan Analisis:</strong><br>
            Skenario ini mirip dengan halaman 11, namun ditambahkan akumulator penjumlahan: variabel <code>t_kasus_baru</code>, <code>t_meninggal</code>, <code>t_sembuh</code>, dan <code>t_aktif</code> bertindak sebagai variabel akumulasi yang terus bertambah nilainya setiap kali baris baru file dibaca oleh perintah <code>Read</code>.
          </div>
        </div>

        <!-- HALAMAN 13 -->
        <div class="pdf-page-block" id="pdf-page-13">
          <div class="pdf-page-header">
            <span>Menyalin Isi File (File Copy / Backup)</span>
            <span class="pdf-page-num-badge">Halaman 13</span>
          </div>
          <pre class="code-box">
Declare String negara
Declare Integer kasus_baru, meninggal, sembuh, aktif
Declare Inputfile data_covid
Declare Outputfile data_report

Open data_covid "Covid.Txt"
Open data_report "Temp.Txt"

While NOT eof(data_covid)
  Read data_covid negara, kasus_baru, meninggal, sembuh, aktif
  Write data_report negara, kasus_baru, meninggal, sembuh, aktif
End While

Close data_covid
Close data_report</pre>
          <div class="pdf-page-explanation">
            <strong>Penjelasan Analisis:</strong><br>
            Algoritma ini digunakan untuk menduplikasi atau membuat cadangan berkas (*backup*). Program membuka dua file sekaligus secara bersamaan: <code>data_covid</code> sebagai input (sumber data) dan <code>data_report</code> sebagai output (tujuan salinan). Data disalin baris demi baris menggunakan loop hingga akhir file (eof).
          </div>
        </div>

        <!-- HALAMAN 14 -->
        <div class="pdf-page-block" id="pdf-page-14">
          <div class="pdf-page-header">
            <span>Membaca Dua File Teks Secara Berurutan</span>
            <span class="pdf-page-num-badge">Halaman 14</span>
          </div>
          <pre class="code-box">
Declare Integer jml_siswa
Declare Inputfile data1
Declare Inputfile data2

Open data1 "Laki-laki.Txt"
Open data2 "Perempuan.Txt"

While NOT eof(data1)
  Read data1 jml_siswa
  Display jml_siswa
End While

While NOT eof(data2)
  Read data2 jml_siswa
  Display jml_siswa
End Update

Close data1
Close data2</pre>
          <div class="pdf-page-explanation">
            <strong>Penjelasan Analisis:</strong><br>
            Program ini menunjukkan bahwa satu aplikasi dapat membaca dua file teks berbeda secara berurutan. File pertama (<code>Laki-laki.Txt</code>) dibaca terlebih dahulu hingga habis (<code>eof</code>), disusul pembacaan file kedua (<code>Perempuan.Txt</code>) hingga selesai, kemudian kedua berkas ditutup.
          </div>
        </div>

        <!-- HALAMAN 15 -->
        <div class="pdf-page-block" id="pdf-page-15">
          <div class="pdf-page-header">
            <span>Menyisipkan Data Baru di Akhir File (Append File)</span>
            <span class="pdf-page-num-badge">Halaman 15</span>
          </div>
          <pre class="code-box">
Open data_covid "Covid.Txt"
Open data_report "Temp.Txt"

// Langkah 1: Salin semua data lama ke file Temp
While NOT eof(data_covid)
  Read data_covid negara, kasus_baru, meninggal, sembuh, aktif
  Write data_report negara, kasus_baru, meninggal, sembuh, aktif
End While

// Langkah 2: Tambahkan data baru hasil input user
Display "Masukkan Nama Negara: "
Input negara
Display "Jumlah Kasus Baru: "
Input kasus_baru
Display "Jumlah Meninggal: "
Input meninggal
Display "Jumlah Sembuh: "
Input sembuh
Display "Jumlah Aktif: "
Input aktif
Write data_report negara, kasus_baru, meninggal, sembuh, aktif

Close data_covid
Close data_report</pre>
          <div class="pdf-page-explanation">
            <strong>Penjelasan Analisis:</strong><br>
            Halaman terakhir ini memuat skenario **menambahkan data baru ke berkas**. Prosesnya dilakukan dengan menyalin seluruh isi lama <code>Covid.Txt</code> ke file sementara <code>Temp.Txt</code> terlebih dahulu, baru kemudian menginput data baru dari keyboard pengguna dan menulisnya ke akhir file <code>Temp.Txt</code>.
          </div>
        </div>

      </div>
    `,
    quiz: []
  },
  {
    id: "mod-6",
    title: "Modul 6: Konsep Berorientasi Objek & CRC Card",
    group: "Pemodelan UML & Objek",
    description: "Memahami konsep pemrograman berorientasi objek (OOP) dan menggunakan CRC Card untuk memodelkan struktur kelas.",
    content: `
      <h2>1. Konsep Dasar Pemrograman Berorientasi Objek (OOP)</h2>
      <p>Sebelum mempelajari UML secara mendalam, Anda harus memahami dasar berpikir **Object-Oriented**. Dalam pemrograman berorientasi objek, kita tidak memandang program sebagai baris perintah sekuensial biasa, melainkan sebagai kumpulan objek-objek mandiri yang saling berkolaborasi.</p>
      
      <h3>Prinsip Utama Berorientasi Objek:</h3>
      <ul>
        <li><strong>Class (Kelas):</strong> Cetak biru atau template untuk membuat objek. Kelas mendefinisikan atribut (data) dan metode (fungsi) yang dimiliki anak-anaknya. (Contoh: Kelas <code>Car</code>).</li>
        <li><strong>Object (Objek):</strong> Instansiasi atau wujud nyata dari kelas. (Contoh: Mobil Toyota merah Anda dengan plat B 1234 XY adalah objek dari kelas <code>Car</code>).</li>
        <li><strong>Encapsulation (Pembungkusan):</strong> Membungkus data (atribut) dan kode (metode) dalam satu unit kelas, serta membatasi akses langsung dari luar menggunakan visibilitas Private (<code>-</code>).</li>
        <li><strong>Inheritance (Pewarisan/Generalisasi):</strong> Kemampuan kelas anak (subclass) untuk mewarisi seluruh karakteristik (atribut/metode) dari kelas induk (superclass). (Contoh: Kelas <code>Truck</code> mewarisi sifat dari kelas <code>Vehicle</code>).</li>
        <li><strong>Polymorphism (Banyak Bentuk):</strong> Kemampuan objek yang berbeda untuk merespon pesan atau metode yang sama dengan cara yang berbeda. (Contoh: Metode <code>move()</code> pada kelas <code>Bird</code> akan mengepakkan sayap, sedangkan pada kelas <code>Fish</code> akan menggerakkan sirip).</li>
      </ul>

      <h2>2. CRC Card (Class-Responsibility-Collaboration)</h2>
      <p><strong>CRC Card</strong> adalah teknik desain berorientasi objek sederhana yang menggunakan kartu indeks fisik untuk merancang kelas, tanggung jawab, dan kolaborasinya sebelum menggambar diagram kelas yang rumit.</p>
      
      <p>Kartu CRC terbagi menjadi dua sisi utama:</p>
      <div class="row">
        <div class="col-6">
          <div class="card-box">
            <h4>Bagian Depan (Front Face)</h4>
            <ul>
              <li><strong>Class Name & ID:</strong> Nama kelas tunggal (Kata Benda) dan ID unik.</li>
              <li><strong>Description:</strong> Deskripsi singkat fungsi kelas di dunia nyata.</li>
              <li><strong>Responsibilities:</strong> Tanggung jawab tindakan atau data yang harus diurus kelas tersebut.</li>
              <li><strong>Collaborators:</strong> Kelas lain yang perlu diajak berkomunikasi.</li>
            </ul>
          </div>
        </div>
        <div class="col-6">
          <div class="card-box">
            <h4>Bagian Belakang (Back Face)</h4>
            <ul>
              <li><strong>Attributes:</strong> Variabel-variabel data internal kelas.</li>
              <li><strong>Relationships:</strong> Hubungan terstruktur (Generalisasi, Agregasi, atau Asosiasi).</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Studi Kasus CRC Card: Kelas Old Patient (Pasien Lama)</h3>
      <div class="row">
        <div class="col-6">
          <div class="card-box">
            <h5>Depan (Front)</h5>
            <p><strong>Class Name:</strong> Old Patient (ID: 3)</p>
            <p><strong>Description:</strong> Pasien yang sudah terdaftar di klinik sebelumnya.</p>
            <strong>Responsibilities:</strong>
            <ul>
              <li>Membuat janji temu klinik (Make appointment)</li>
              <li>Menyediakan riwayat rekam medis</li>
            </ul>
            <strong>Collaborators:</strong>
            <ul>
              <li>Appointment, Medical History</li>
            </ul>
          </div>
        </div>
        <div class="col-6">
          <div class="card-box">
            <h5>Belakang (Back)</h5>
            <strong>Attributes:</strong>
            <ul>
              <li>Amount (double)</li>
              <li>Insurance carrier (text)</li>
            </ul>
            <strong>Relationships:</strong>
            <ul>
              <li>Generalization: Person</li>
              <li>Aggregation: Medical History</li>
              <li>Other Association: Appointment</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        questionText: "Apakah perbedaan antara Class dengan Object dalam OOP?",
        options: [
          "Class adalah instansi nyata dari objek.",
          "Class adalah cetak biru (blueprint) logis, sedangkan Object adalah wujud fisik nyata (instance) yang diciptakan dari cetak biru tersebut.",
          "Object hanya dapat dibuat oleh database, sedangkan Class dibuat oleh programmer.",
          "Class tidak memiliki atribut, sedangkan Object memilikinya."
        ],
        correctAnswerIndex: 1,
        explanation: "Class bertindak sebagai template/cetak biru logis, sedangkan Object adalah perwujudan nyata (instansiasi) yang dibuat dari cetak biru tersebut di memori."
      }
    ]
  },
  {
    id: "mod-7",
    title: "Modul 7: Use Case Diagram & Deskripsi",
    group: "Pemodelan UML & Objek",
    description: "Merancang fungsionalitas sistem dari perspektif pengguna luar menggunakan Use Case Diagram dan tabel Use Case Description.",
    content: `
      <h2>1. Use Case Diagram</h2>
      <p><strong>Use Case Diagram</strong> adalah diagram UML fungsional yang menggambarkan interaksi antara aktor (pengguna eksternal atau sistem lain) dengan sistem baru. Diagram ini memperlihatkan <em>siapa saja pengguna sistem dan fungsi utama apa saja yang bisa mereka akses</em>.</p>
      
      <pre class="mermaid">
flowchart TD
    subgraph "Sistem Pemesanan Kamar Hotel"
        UC1(Search Available Hotel Room)
        UC2(Make New Hotel Room reservation)
        UC3(Cancel Hotel Room reservation)
        UC4(Make Payment Arrangement)
    end

    Customer((User/Customer))

    Customer --> UC1
    Customer --> UC2
    Customer --> UC3
    UC4 -.->|"&lt;&lt;extend&gt;&gt;"| UC2
      </pre>

      <h2>2. Hubungan Relasi Use Case</h2>
      <ul>
        <li><strong>Association:</strong> Garis lurus yang menghubungkan Aktor dengan Use Case.</li>
        <li><strong>&lt;&lt;include&gt;&gt;:</strong> Menunjukkan Use Case A <em>selalu</em> memicu Use Case B secara wajib.</li>
        <li><strong>&lt;&lt;extend&gt;&gt;:</strong> Menunjukkan Use Case A <em>terkadang</em> bercabang ke Use Case B di bawah kondisi tertentu.</li>
      </ul>

      <h2>3. Contoh Dokumen Deskripsi Use Case (Use Case Description)</h2>
      <p>Berikut adalah contoh deskripsi detail untuk kasus di bengkel ketika montir membuat jadwal perbaikan kendaraan:</p>
      
      <table>
        <tr>
          <td><strong>Use Case Name:</strong></td><td>Menjadwalkan perbaikan kendaraan</td>
          <td><strong>ID:</strong></td><td>2</td>
        </tr>
        <tr>
          <td><strong>Primary Actor:</strong></td><td>Montir / Mechanic</td>
          <td><strong>Importance:</strong></td><td>High</td>
        </tr>
        <tr>
          <td><strong>Trigger:</strong></td><td colspan="3">Ketika montir ingin menentukan jadwal perbaikan motor pelanggan (Tipe: Eksternal).</td></tr>
        <tr>
          <td><strong>Normal Flow:</strong></td>
          <td colspan="3">
            1. Montir menginput data/identitas pelanggan.<br>
            2. Montir memilih tanggal perbaikan di sistem.<br>
            3. JIKA hari tersedia, jalankan Subflow S-1 (Hari Tersedia).<br>
            4. JIKA hari penuh, jalankan Subflow S-2 (Hari Tidak Tersedia).
          </td>
        </tr>
        <tr>
          <td><strong>SubFlows:</strong></td>
          <td colspan="3">
            - <strong>S-1 (Hari Tersedia):</strong> Montir mengisi detail kerusakan motor -> sistem mengunci jadwal.<br>
            - <strong>S-2 (Hari Tidak Tersedia):</strong> Montir berdiskusi dengan pelanggan untuk memilih tanggal alternatif.
          </td>
        </tr>
      </table>
    `,
    quiz: [
      {
        questionText: "Kapan kita menggunakan hubungan &lt;&lt;extend&gt;&gt; antara dua Use Case?",
        options: [
          "Ketika sebuah use case selalu membutuhkan use case lain di setiap waktu jalan.",
          "Ketika sebuah use case berjalan secara kondisional (hanya dalam situasi tertentu saja) sebagai perluasan dari use case utama.",
          "Untuk menghubungkan aktor dengan database.",
          "Untuk menunjukkan pewarisan kelas."
        ],
        correctAnswerIndex: 1,
        explanation: "&lt;&lt;extend&gt;&gt; menunjukkan perluasan opsional/kondisional. Hubungan ini hanya terjadi jika kondisi tertentu terpenuhi."
      }
    ]
  },
  {
    id: "mod-8",
    title: "Modul 8: Activity Diagram",
    group: "Pemodelan UML & Objek",
    description: "Memodelkan alur proses bisnis operasional (workflow) dan aktivitas paralel sistem.",
    content: `
      <h2>1. Apa itu Activity Diagram?</h2>
      <p><strong>Activity Diagram</strong> adalah diagram perilaku UML yang digunakan untuk memvisualisasikan alur kerja (*workflow*) operasional atau proses bisnis sistem dari awal hingga selesai. Diagram ini mirip dengan *flowchart*, tetapi memiliki keunggulan dapat menampilkan tugas-tugas yang dikerjakan secara paralel (bersamaan).</p>
      
      <h2>2. Simbol Utama Activity Diagram</h2>
      <ul>
        <li><strong>Initial Node (●):</strong> Titik awal dimulainya aktivitas.</li>
        <li><strong>Action/Activity (Kotak Sudut Membulat):</strong> Tugas atau langkah kerja yang dilakukan.</li>
        <li><strong>Decision Node (◇):</strong> Percabangan pilihan bersyarat (If-Else) dengan label kondisi <code>[Guard]</code>.</li>
        <li><strong>Fork (Batang Hitam Tegak/Datar):</strong> Membagi satu alur menjadi beberapa alur kerja paralel yang berjalan bersamaan.</li>
        <li><strong>Join (Batang Hitam):</strong> Menyatukan kembali alur paralel. Alur setelah Join baru bisa jalan jika semua alur masuk selesai.</li>
        <li><strong>Final Node (◉):</strong> Titik akhir selesainya aktivitas.</li>
      </ul>

      <h2>3. Studi Kasus: Alur Membuat Reservasi Kamar Hotel</h2>
      <pre class="mermaid">
flowchart TD
    Start([● Mulai]) --> FindHotel[Mencari Hotel]
    FindHotel --> ChooseRoom[Memilih Kamar Hotel]
    ChooseRoom --> CheckAvailability{Cek Status Ketersediaan Kamar}
    
    CheckAvailability -- [Kamar Tersedia] --> ChooseQty[Pilih Jumlah Kamar]
    CheckAvailability -- [Kamar Penuh] --> ChooseAnother[Pilih Kamar Alternatif]
    
    ChooseAnother --> FindHotel
    ChooseQty --> ChooseNights[Tentukan Lama Menginap]
    ChooseNights --> ChoosePayment[Pilih Skema Pembayaran]
    ChoosePayment --> End(◉ Selesai)
      </pre>
    `,
    quiz: [
      {
        questionText: "Bagaimana cara menggabungkan beberapa alur paralel yang dipecah oleh Fork Node agar bersatu kembali?",
        options: [
          "Menggunakan Decision Node (wajik).",
          "Menggunakan Join Node (batang hitam tebal).",
          "Menggunakan Initial Node.",
          "Alur paralel tidak bisa digabungkan kembali."
        ],
        correctAnswerIndex: 1,
        explanation: "Join Node digunakan untuk mengumpulkan kembali alur kerja paralel yang sebelumnya telah dipisah oleh Fork Node."
      }
    ]
  },
  {
    id: "mod-9",
    title: "Modul 9: Class Diagram & Relationships",
    group: "Pemodelan UML & Objek",
    description: "Merancang arsitektur kelas statis sistem, atribut, metode, relasi asosiasi, agregasi, komposisi, dan pewarisan.",
    content: `
      <h2>1. Struktur Statis: Class Diagram</h2>
      <p><strong>Class Diagram</strong> menggambarkan struktur kelas, atribut data, metode tindakan, serta hubungan relasi statis antar kelas dalam sistem. Ini adalah cetak biru utama bagi programmer sebelum menulis kode database dan kelas objek.</p>
      
      <h2>2. Hubungan Relasi Kelas (Class Relationships)</h2>
      <p>Penting untuk memahami perbedaan jenis hubungan antar kelas:</p>
      <ol>
        <li><strong>Generalization (Pewarisan / Inheritance):</strong> Hubungan anak-induk. Anak mewarisi semua sifat induk.
          <br><em>Simbol:</em> Panah segitiga kosong garis utuh (<code>──▷</code>).
        </li>
        <li><strong>Association (Asosiasi):</strong> Hubungan relasional biasa antar objek.
          <br><em>Simbol:</em> Garis lurus biasa (<code>───</code>).
        </li>
        <li><strong>Aggregation (Agregasi):</strong> Hubungan kepemilikan yang lemah (*has-a*). Bagian anak bisa tetap eksis jika kelas induk dihapus.
          <br><em>Simbol:</em> Garis berujung wajik kosong (<code>◇──</code>). (Contoh: Kelas <code>Library</code> memiliki <code>Book</code>).
        </li>
        <li><strong>Composition (Komposisi):</strong> Hubungan kepemilikan yang sangat kuat. Bagian anak otomatis ikut hancur/terhapus jika induk dihapus.
          <br><em>Simbol:</em> Garis berujung wajik hitam berisi (<code>◆──</code>). (Contoh: Kelas <code>Hotel</code> memiliki <code>Room</code>).
        </li>
      </ol>

      <h2>3. Representasi Class Diagram (Sistem Perpustakaan)</h2>
      <pre class="mermaid">
classDiagram
    class Borrower {
        +String borrowerID
        +String name
        +checkOutBooks()
    }
    class Student {
        +String NIM
        +String major
    }
    class Book {
        +String isbn
        +String title
        +String author
    }
    class BookCollection {
        +String collectionName
    }
    Borrower <|-- Student : Pewarisan
    Borrower "1" --> "0..*" Book : meminjam
    Book "0..*" --> "1" BookCollection : bagian dari (Agregasi)
      </pre>
    `,
    quiz: [
      {
        questionText: "Apakah perbedaan antara hubungan Agregasi dengan Komposisi?",
        options: [
          "Agregasi digambar dengan wajik hitam, komposisi wajik kosong.",
          "Pada agregasi, objek bagian dapat tetap hidup mandiri tanpa objek induknya. Pada komposisi, objek bagian ikut hancur jika objek induk dihapus.",
          "Komposisi hanya berlaku untuk tipe data angka.",
          "Agregasi merupakan hubungan pewarisan."
        ],
        correctAnswerIndex: 1,
        explanation: "Agregasi adalah relasi bagian-keseluruhan yang lemah (loose coupling), sedangkan komposisi adalah relasi bagian-keseluruhan yang kuat (strong coupling)."
      }
    ]
  },
  {
    id: "mod-10",
    title: "Modul 10: Kamus Data - Data Dictionary",
    group: "Pemodelan UML & Objek",
    description: "Membahas pembuatan katalog data (metadata) untuk mendefinisikan tipe, format, dan atribut data dalam database sistem.",
    content: `
      <h2>1. Apa itu Data Dictionary (Kamus Data)?</h2>
      <p>Dalam perancangan sistem informasi, diagram kelas dan basis data fisik memerlukan standar penulisan data yang jelas agar tidak terjadi kebingungan antar anggota tim pengembang. <strong>Data Dictionary (Kamus Data)</strong> adalah katalog terstruktur yang menyimpan metadata—yaitu <em>data tentang data</em>—mengenai semua elemen data yang digunakan di dalam sistem.</p>
      
      <p>Kamus data menjelaskan secara rinci tentang nama data, tipe data, panjang karakter, format penyimpanan, deskripsi kegunaan, dan rentang nilai yang diperbolehkan.</p>

      <h2>2. Elemen Utama Kamus Data</h2>
      <p>Setiap entri data di dalam Kamus Data biasanya memuat tabel dengan atribut sebagai berikut:</p>
      <ul>
        <li><strong>Data Element Name (Nama Elemen):</strong> Nama unik variabel data (misal: <code>cust_id</code>, <code>member_status</code>).</li>
        <li><strong>Alias:</strong> Nama lain variabel jika digunakan di modul lain (misal: <code>customer_number</code>).</li>
        <li><strong>Data Type (Tipe Data):</strong> Kategori data (misal: <code>String</code>, <code>Integer</code>, <code>Double</code>, <code>Date</code>, <code>Boolean</code>).</li>
        <li><strong>Length (Panjang):</strong> Jumlah karakter maksimum yang dapat ditampung (misal: 50 karakter).</li>
        <li><strong>Format:</strong> Pola penulisan data (misal: <code>DD-MM-YYYY</code> untuk tanggal).</li>
        <li><strong>Description:</strong> Deskripsi penjelasan mengenai fungsi elemen data tersebut.</li>
        <li><strong>Permitted Values (Nilai Diizinkan):</strong> Rentang atau pilihan nilai yang valid (misal: "Aktif", "Non-aktif" untuk status member).</li>
      </ul>

      <h2>3. Contoh Tabel Kamus Data (Tabel Customer)</h2>
      
      <table>
        <thead>
          <tr>
            <th>Nama Elemen</th>
            <th>Tipe Data</th>
            <th>Panjang</th>
            <th>Format</th>
            <th>Deskripsi</th>
            <th>Nilai Diizinkan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>cust_id</strong></td>
            <td>String</td>
            <td>10</td>
            <td>CUST-XXXX</td>
            <td>Kode ID unik untuk setiap pelanggan</td>
            <td>Kombinasi teks & angka unik</td>
          </tr>
          <tr>
            <td><strong>cust_name</strong></td>
            <td>String</td>
            <td>100</td>
            <td>Bebas</td>
            <td>Nama lengkap pelanggan sesuai KTP</td>
            <td>Teks huruf alfabet</td>
          </tr>
          <tr>
            <td><strong>cust_birthdate</strong></td>
            <td>Date</td>
            <td>-</td>
            <td>YYYY-MM-DD</td>
            <td>Tanggal lahir pelanggan</td>
            <td>Tanggal valid</td>
          </tr>
          <tr>
            <td><strong>member_status</strong></td>
            <td>String</td>
            <td>15</td>
            <td>Bebas</td>
            <td>Status keanggotaan pelanggan</td>
            <td>"Silver", "Gold", "Platinum"</td>
          </tr>
        </tbody>
      </table>
    `,
    quiz: [
      {
        questionText: "Manakah di bawah ini yang paling tepat mendefinisikan kegunaan Kamus Data (Data Dictionary)?",
        options: [
          "Kamus untuk menerjemahkan istilah pemrograman ke dalam bahasa Indonesia.",
          "Daftar kode program yang disimpan di repositori Git.",
          "Dokumen katalog terstruktur yang menjelaskan rincian atribut data (tipe, panjang, format, deskripsi) yang digunakan sistem.",
          "Sebuah basis data fisik yang berjalan di server."
        ],
        correctAnswerIndex: 2,
        explanation: "Kamus data adalah katalog metadata terstruktur yang mendefinisikan rincian data seperti tipe, panjang, format, dan deskripsi variabel sistem."
      }
    ]
  },
  {
    id: "mod-11",
    title: "Modul 11: State Diagram",
    group: "Pemodelan UML & Objek",
    description: "Memodelkan siklus hidup dan perubahan status internal objek tunggal berdasarkan kejadian/event pemicu.",
    content: `
      <h2>1. Siklus Hidup Objek</h2>
      <p><strong>State Diagram</strong> (Behavioral State Machine) memodelkan daur hidup dan status perubahan dari **satu objek tunggal** (seperti reservasi kamar hotel atau buku perpustakaan) dari mulai dibuat hingga dihancurkan dari sistem.</p>
      
      <h2>2. Simbol Utama State Diagram</h2>
      <ul>
        <li><strong>State (Kotak Sudut Melengkung):</strong> Menunjukkan status objek saat itu (misal: <em>Available</em>, <em>Borrowed</em>).</li>
        <li><strong>Transition (Panah):</strong> Jalur perpindahan dari satu status ke status lain.</li>
        <li><strong>Event Trigger:</strong> Kejadian atau pemicu yang menyebabkan transisi terjadi.</li>
        <li><strong>Guard <code>[Kondisi]</code>:</strong> Syarat berupa logika boolean yang harus terpenuhi agar transisi terjadi.</li>
      </ul>

      <h2>3. Contoh: Siklus Hidup Buku di Perpustakaan</h2>
      <pre class="mermaid">
stateDiagram-v2
    [*] --> Available : [Buku Baru Ditambahkan]
    Available --> Borrowed : [Anggota Meminjam Buku]
    Borrowed --> Overdue : [Batas Waktu Pengembalian Lewat]
    Borrowed --> Available : [Anggota Mengembalikan Buku]
    Overdue --> Available : [Anggota Mengembalikan Buku & Bayar Denda]
    Available --> UnderRepair : [Buku Rusak Ringan]
    Borrowed --> UnderRepair : [Buku Rusak Saat Dikembalikan]
    UnderRepair --> Available : [Buku Selesai Diperbaiki]
    UnderRepair --> [*] : [Buku Rusak Berat]
    Available --> [*] : [Buku Dihapus dari Sirkulasi]
      </pre>
    `,
    quiz: [
      {
        questionText: "Berdasarkan diagram status Buku di atas, dari status mana saja buku dapat berpindah ke status 'UnderRepair' (Sedang Diperbaiki)?",
        options: [
          "Hanya dari status 'Overdue'.",
          "Dari status 'Available' (Tersedia) dan 'Borrowed' (Dipinjam).",
          "Hanya dari status awal [*].",
          "Buku tidak bisa diperbaiki jika sudah rusak."
        ],
        correctAnswerIndex: 1,
        explanation: "Panah transisi '[Buku Damaged]' menunjukkan bahwa objek Buku dapat masuk ke status UnderRepair dari status Available dan status Borrowed."
      }
    ]
  },
  {
    id: "mod-12",
    title: "Modul 12: Interaction: Sequence & Collaboration",
    group: "Pemodelan UML & Objek",
    description: "Memodelkan interaksi pesan dinamis antar objek menggunakan Sequence Diagram dan Collaboration (Communication) Diagram.",
    content: `
      <h2>1. Pemodelan Interaksi Objek</h2>
      <p>Sistem berorientasi objek bekerja dengan mengirimkan pesan (*messages*) dari satu objek ke objek lain. UML menyediakan dua diagram interaksi utama untuk memodelkan ini: **Sequence Diagram** (fokus pada kronologi waktu) dan **Collaboration/Communication Diagram** (fokus pada organisasi objek).</p>

      <h2>2. Sequence Diagram</h2>
      <p>Sequence diagram menampilkan interaksi objek yang disusun secara <strong>kronologis (urutan waktu kejadian dari atas ke bawah)</strong>.</p>
      <ul>
        <li><strong>Lifeline (Garis Hidup):</strong> Garis putus-putus vertikal ke bawah yang mewakili eksistensi objek selama skenario berjalan.</li>
        <li><strong>Activation Bar:</strong> Balok putih vertikal di atas lifeline yang menunjukkan kapan objek tersebut aktif memproses instruksi.</li>
        <li><strong>Synchronous Message (➔):</strong> Pesan panggilan metode di mana pengirim harus menunggu jawaban sebelum lanjut.</li>
        <li><strong>Return Message (◁- -):</strong> Pengembalian jawaban/nilai data ke pemanggil.</li>
      </ul>

      <h3>Visualisasi Sequence Diagram Pembatalan Reservasi (Hotel)</h3>
      <pre class="mermaid">
sequenceDiagram
    actor Customer as aCustomer:Customer
    actor Admin as anAdmin:ReservationAdmin
    participant Res as aReservation:Reservation
    participant Room as aRoom:Room

    Admin->>Customer: whichReservation?()
    Customer-->>Admin: Reservation is selected
    Admin->>Res: CancelReservation(Reservation)
    Res->>Room: UpdateRoomAvailability(Room)
    Room-->>Res: Room Updated
    Res-->>Admin: Reservation Cancelled
    Admin->>Customer: NotifyUserReservationCancelled()
      </pre>

      <hr>

      <h2>3. Collaboration / Communication Diagram</h2>
      <p><strong>Collaboration Diagram</strong> (juga disebut <em>Communication Diagram</em> di UML 2.0) memodelkan hal yang sama dengan sequence diagram, namun dengan tata letak yang berbeda. Diagram ini berfokus pada **organisasi atau arsitektur hubungan objek** secara fisik. Urutan waktu pesan ditunjukkan menggunakan **nomor urut sekuensial (seperti 1, 2, 3)**.</p>

      <h3>Visualisasi Collaboration Diagram Meminjam Buku (Library)</h3>
      <pre class="mermaid">
flowchart LR
    Student((:Student)) ---|1: CheckOutBooks / 2: IDCard?| Librarian((:Librarian))
    Librarian ---|3: ValidID| RegDB[RegistrarDatabase]
    Librarian ---|4: CheckOverdueBookOrFine| Borrower[Borrower]
      </pre>
      
      <p><strong>Penjelasan Alur Collaboration:</strong></p>
      <ol>
        <li>Pesan pertama (<code>1: CheckOutBooks()</code>) dikirim dari objek Student ke Librarian.</li>
        <li>Librarian merespon balik dengan meminta kartu identitas (<code>2: IDCard?()</code>).</li>
        <li>Librarian melakukan verifikasi identitas ke objek RegistrarDatabase (<code>3: ValidID()</code>).</li>
        <li>Librarian memeriksa denda/keterlambatan buku ke objek Borrower (<code>4: CheckOverdueBookOrFine()</code>).</li>
      </ol>
    `,
    quiz: [
      {
        questionText: "Bagaimana urutan jalannya pesan ditentukan di dalam Collaboration/Communication Diagram?",
        options: [
          "Membaca alur panah dari atas ke bawah secara vertikal.",
          "Membaca berdasarkan nomor urut sekuensial yang dilabelkan pada garis hubungan (misal: 1, 2, 3).",
          "Membaca dari kanan ke kiri.",
          "Tidak ada urutan pesan di collaboration diagram."
        ],
        correctAnswerIndex: 1,
        explanation: "Karena tata letak objek di collaboration diagram bersifat bebas, nomor urut numerik (seperti 1, 2) wajib dituliskan di setiap label pesan untuk menunjukkan urutan waktu eksekusi."
      }
    ]
  },
  {
    id: "mod-13",
    title: "Modul 13: Arsitektur & Implementation Diagrams",
    group: "Pemodelan UML & Objek",
    description: "Mempelajari Component Diagram dan Deployment Diagram untuk memodelkan struktur fisik arsitektur software dan hardware sistem.",
    content: `
      <h2>1. Apa itu Implementation Diagrams?</h2>
      <p>Setelah merancang kebutuhan fungsional, use case, dan kelas program logis, langkah terakhir dalam perancangan sistem adalah memetakan bagaimana perangkat lunak akan dideploy (dipasang) secara fisik ke komputer/server nyata. UML menyediakan dua **Implementation Diagrams**:</p>
      <ul>
        <li><strong>Component Diagram:</strong> Memodelkan modul perangkat lunak (source code, libraries, executables, files) dan hubungan ketergantungan antarkomponen tersebut secara fisik.</li>
        <li><strong>Deployment Diagram:</strong> Memodelkan konfigurasi fisik infrastruktur perangkat keras (server, PC, router, database server) dan bagaimana file-file software (artifacts) ditempatkan di dalam hardware tersebut.</li>
      </ul>

      <h2>2. Component Diagram</h2>
      <p>Component diagram membantu kita melihat modularitas kode program. Berikut adalah visualisasi dependensi komponen fisik web e-commerce:</p>
      
      <pre class="mermaid">
flowchart RL
    WebBrowser[Web UI Component] -->|HTTP/REST API| APIController[API Controller Component]
    APIController -->|reads/writes| DBConnector[Database Connector Component]
    DBConnector -->|SQL Queries| Database[(SQL Database File)]
      </pre>

      <h2>3. Deployment Diagram</h2>
      <p>Deployment diagram menggambarkan topologi jaringan server nyata. Berikut adalah model deployment fisik aplikasi multi-tier:</p>
      
      <pre class="mermaid">
flowchart TD
    subgraph Client Node [Client Machine: PC/Mobile]
        BrowserArtifact[web-client.app / Browser]
    end
    
    subgraph Web Server Node [Cloud Web Server: AWS EC2]
        ServerArtifact[node-backend.service / API Server]
    end
    
    subgraph DB Server Node [Cloud Database Instance: RDS]
        DB[PostgreSQL Database Engine]
    end
    
    BrowserArtifact -- HTTPS (Port 443) --> ServerArtifact
    ServerArtifact -- Port 5432 Connection --> DB
      </pre>
      
      <p><strong>Penjelasan Model Deployment:</strong></p>
      <ul>
        <li>Sistem dideploy pada tiga perangkat keras (Node) terpisah: Client Machine, Cloud Web Server, dan Cloud Database Instance.</li>
        <li>Aplikasi frontend (<code>web-client.app</code>) berjalan di browser Client Node.</li>
        <li>Aplikasi frontend berkomunikasi menggunakan protokol aman HTTPS ke backend API (<code>node-backend.service</code>) di server web.</li>
        <li>Server web mengakses mesin PostgreSQL di server database menggunakan port default 5432.</li>
      </ul>
    `,
    quiz: [
      {
        questionText: "Apakah perbedaan mendasar antara Component Diagram dengan Deployment Diagram?",
        options: [
          "Component diagram digambar oleh sistem analis, deployment oleh arsitek gedung.",
          "Component diagram berfokus pada struktur fisik file/komponen perangkat lunak dan dependensinya, sedangkan Deployment diagram memetakan topologi fisik perangkat keras (hardware) tempat software dijalankan.",
          "Component diagram hanya menampilkan database server saja.",
          "Deployment diagram digunakan untuk menghitung biaya tagihan listrik server."
        ],
        correctAnswerIndex: 1,
        explanation: "Component diagram memodelkan modul kode software, sedangkan Deployment diagram berfokus pada infrastruktur fisik hardware (seperti server, PC, jaringan) tempat file software ditempatkan."
      }
    ]
  },
  {
    id: "mod-14",
    title: "Modul 14: Simulasi UAS",
    group: "Ujian Simulasi",
    description: "Kumpulan soal ujian simulasi akhir semester berbasis studi kasus lengkap dengan pembahasan interaktif.",
    content: `
      <h2>Selamat Datang di Menu Simulasi UAS!</h2>
      <p>Di bagian ini, Anda akan diuji dengan skenario studi kasus komprehensif yang mirip dengan ujian nyata di perguruan tinggi. Cobalah menjawab pertanyaan terlebih dahulu sebelum menekan tombol <strong>"Buka Pembahasan & Jawaban"</strong> di bawah masing-masing soal.</p>
      
      <div class="alert-box text-center">
        <strong>PENTING:</strong> Pelajari kasus secara perlahan. Pahami keterkaitan antara deskripsi cerita, diagram use case, diagram aktivitas, diagram kelas, diagram sequence, hingga siklus hidup objeknya.
      </div>

      <hr>

      <!-- CASE STUDY 1 -->
      <div class="case-study-card">
        <h3>STUDI KASUS I: Sistem Pemesanan Kamar Hotel</h3>
        <p><strong>Deskripsi Kasus:</strong> Anda diminta merancang sistem pemesanan kamar hotel online. Sistem harus memiliki aktor: Customer, Hotel Owner (Pemilik Hotel), dan Reservation Admin. Pelanggan dapat mencari kamar yang tersedia, membuat reservasi, dan membatalkan reservasi. Pemilik hotel dapat menambah, menghapus, atau mengubah info kamar hotel miliknya. Admin bertugas mengelola data reservasi.</p>
        
        <div class="quiz-item">
          <h5>Soal 1.1: Use Case Diagram & Deskripsi Skenario</h5>
          <p>Rancang Use Case Diagram untuk sistem pemesanan hotel di atas dan buatlah Use Case Description untuk skenario "Change Hotel Room Information" (Mengubah Info Kamar) yang diinisiasi oleh Hotel Owner.</p>
          
          <button class="btn btn-reveal" onclick="toggleSolution('sol-1-1')">Tampilkan Solusi Diagram & Pembahasan</button>
          
          <div id="sol-1-1" class="solution-content hidden">
            <h6>Rancangan Use Case Diagram (Mermaid):</h6>
            <pre class="mermaid">
flowchart TD
    subgraph "Aplikasi Pemesanan Hotel"
        UC1(Search Available Hotel Room)
        UC2(Make New Hotel Room reservation)
        UC3(Cancel Hotel Room reservation)
        UC4(Make Payment Arrangement)
        UC5(Add Available Hotel Room)
        UC6(Delete Hotel Room)
        UC7(Change Hotel Room Information)
        UC8(Manage Customer Reservation)
    end

    Customer((User/Customer))
    Owner((Hotel Owner))
    Admin((Reservation Admin))

    Customer --> UC1
    Customer --> UC2
    Customer --> UC3
    UC4 -.->|"&lt;&lt;extend&gt;&gt;"| UC2

    Owner --> UC5
    Owner --> UC6
    Owner --> UC7

    Admin --> UC8
            </pre>
            
            <h6>Tabel Deskripsi Use Case (Change Hotel Room Information):</h6>
            <table>
              <tr><td><strong>Use Case Name:</strong></td><td>Change Hotel Room Information</td><td><strong>ID:</strong></td><td>2</td></tr>
              <tr><td><strong>Primary Actor:</strong></td><td>Hotel Owner</td><td><strong>Importance:</strong></td><td>Low</td></tr>
              <tr><td><strong>Brief Description:</strong></td><td colspan="3">Mendeskripsikan bagaimana pemilik hotel dapat memperbarui detail informasi kamarnya di sistem.</td></tr>
              <tr><td><strong>Trigger:</strong></td><td colspan="3">Ketika pemilik hotel ingin mengubah deskripsi atau harga kamar (Tipe: Eksternal).</td></tr>
              <tr><td><strong>Normal Flow:</strong></td><td colspan="3">
                1. Pemilik hotel memilih kamar yang ingin diubah datanya.<br>
                2. Pemilik hotel memilih jenis informasi kamar yang ingin diubah.<br>
                3. Pemilik hotel memasukkan informasi baru.<br>
                4. Pemilik hotel meninjau perubahan dan memilih konfirmasi (simpan) atau batal.<br>
                5. Sistem menyimpan perubahan data kamar baru ke database.
              </td></tr>
            </table>
          </div>
        </div>

        <div class="quiz-item">
          <h5>Soal 1.2: Class Diagram & CRC Card</h5>
          <p>Gambarkan Class Diagram yang memiliki entitas-entitas: Customer, Hotel Owner, Reservation Admin, Hotel, Room, Reservation, dan Participant (sebagai superclass induk). Tunjukkan tingkat multiplicity relasi mereka secara detail. Lengkapilah pula dengan contoh CRC Card untuk kelas Customer.</p>
          
          <button class="btn btn-reveal" onclick="toggleSolution('sol-1-2')">Tampilkan Solusi Diagram & Pembahasan</button>
          
          <div id="sol-1-2" class="solution-content hidden">
            <h6>Rancangan Class Diagram (Mermaid):</h6>
            <pre class="mermaid">
classDiagram
    class Participant {
        +String lastname
        +String firstname
        +Date birthdate
        +int age
        +String address
        +String phone
        +String email
    }
    class Customer {
        +String memberStatus
        +String paymentInfo
        +String reservationHistory
        +makeNewRoomReservation()
        +cancelRoomReservation()
        +changeReservationDate()
    }
    class HotelOwner {
        +String OwnerID
        +addNewHotelRoom()
        +deleteHotelRoom()
        +changeHotelRoomDescription()
    }
    class ReservationAdmin {
        +String adminID
        +manageReservation()
    }
    class Reservation {
        +Date reservationDate
        +Time reservationTime
        +String paymentMethod
        +String hotelRoomInfo
    }
    class Hotel {
        +String HotelName
        +String address
        +String officePhone
    }
    class Room {
        +int roomFloor
        +int roomNumber
        +String roomStatus
        +double price
    }
    Participant <|-- Customer
    Participant <|-- HotelOwner
    Participant <|-- ReservationAdmin
    Customer "1" --> "0..*" Reservation : memesan
    ReservationAdmin "1" --> "0..*" Reservation : mengelola
    Reservation "0..*" --> "1" Hotel : berada di
    Reservation "0..*" --> "1..*" Room : berisi kamar
    HotelOwner "1" --> "0..*" Hotel : memiliki
    Hotel "1" --> "1..*" Room : menampung
            </pre>

            <h6>CRC Card Kelas: Customer (ID: 1)</h6>
            <table>
              <tr>
                <th colspan="2">Front Face (Depan)</th>
              </tr>
              <tr>
                <td><strong>Class Name:</strong> Customer</td>
                <td><strong>Type:</strong> Concrete, Domain</td>
              </tr>
              <tr>
                <td colspan="2"><strong>Description:</strong> Entitas individu yang mencari hotel dan membuat reservasi kamar.</td>
              </tr>
              <tr>
                <td><strong>Responsibilities (Tanggung Jawab)</strong></td>
                <td><strong>Collaborators (Kolaborator)</strong></td>
              </tr>
              <tr>
                <td>- Membuat reservasi kamar baru (makeReservation)<br>- Membatalkan reservasi (cancelReservation)<br>- Melakukan pembayaran (makePayment)</td>
                <td>- Reservation</td>
              </tr>
              <tr>
                <th colspan="2">Back Face (Belakang)</th>
              </tr>
              <tr>
                <td colspan="2"><strong>Attributes:</strong> lastname, firstname, birthdate, address, phone, email, memberStatus, paymentInfo, reservationHistory</td>
              </tr>
              <tr>
                <td colspan="2"><strong>Relationships:</strong><br>- Generalization: Participant (Superclass)<br>- Other Association: Reservation</td>
              </tr>
            </table>
          </div>
        </div>

        <div class="quiz-item">
          <h5>Soal 1.3: Sequence Diagram & State Diagram</h5>
          <p>Gambarkan Sequence Diagram untuk skenario pembatalan reservasi yang melibatkan objek-objek: <code>aCustomer:Customer</code>, <code>anAdmin:ReservationAdmin</code>, <code>aReservation:Reservation</code>, dan <code>aRoom:Room</code>. Gambarkan pula State Diagram siklus status dari objek <code>Reservation</code>.</p>
          
          <button class="btn btn-reveal" onclick="toggleSolution('sol-1-3')">Tampilkan Solusi Diagram & Pembahasan</button>
          
          <div id="sol-1-3" class="solution-content hidden">
            <h6>Sequence Diagram Pembatalan Reservasi:</h6>
            <pre class="mermaid">
sequenceDiagram
    actor Customer as aCustomer:Customer
    actor Admin as anAdmin:ReservationAdmin
    participant Res as aReservation:Reservation
    participant Room as aRoom:Room

    Admin->>Customer: whichReservation?()
    Customer-->>Admin: Reservation is selected
    Admin->>Res: CancelReservation(Reservation)
    Res->>Room: UpdateRoomAvailability(Room)
    Room-->>Res: Room Updated
    Res-->>Admin: Reservation Cancelled
    Admin->>Customer: NotifyUserReservationCancelled()
            </pre>

            <h6>State Diagram Objek Reservation:</h6>
            <pre class="mermaid">
stateDiagram-v2
    [*] --> Created : Reservasi Baru Dibuat
    Created --> Confirmed : Konfirmasi Pemesanan
    Confirmed --> Paid : Bayar Tagihan Kamar
    Confirmed --> Cancelled : Batalkan Reservasi
    Paid --> [*] : Cek out selesai
    Cancelled --> [*] : Data reservasi dihapus
            </pre>
          </div>
        </div>
      </div>

      <hr>

      <!-- CASE STUDY 2 -->
      <div class="case-study-card">
        <h3>STUDI KASUS II: Aplikasi E-commerce Belanja Online</h3>
        <p><strong>Deskripsi Kasus:</strong> Anda merancang aplikasi E-commerce yang menghubungkan Pembeli (User/Customer) dengan toko online. Pelanggan dapat memilah barang, memasukkan ke keranjang (Cart), melakukan checkout pesanan (Order), dan kurir mengirimkan barang tersebut.</p>

        <div class="quiz-item">
          <h5>Soal 2.1: Package Diagram</h5>
          <p>Rancang Package Diagram yang mengorganisasikan modul sistem E-commerce ini. Kelompokkan sistem ke dalam modul-modul logis seperti User Management, Product Management, Order Management, dan Shipping Pkg. Tunjukkan arah hubungan ketergantungan antar paket.</p>
          
          <button class="btn btn-reveal" onclick="toggleSolution('sol-2-1')">Tampilkan Solusi Diagram & Pembahasan</button>
          
          <div id="sol-2-1" class="solution-content hidden">
            <h6>Rancangan Package Diagram (Mermaid):</h6>
            <pre class="mermaid">
flowchart TD
    subgraph "E-commerce Packages"
        UserMgmt[User Management Pkg]
        ProductMgmt[Product Management Pkg]
        OrderMgmt[Order Management Pkg]
        ShippingPkg[Shipping Pkg]
    end
    
    OrderMgmt -->|"&lt;&lt;access&gt;&gt;"| UserMgmt
    OrderMgmt -->|"&lt;&lt;import&gt;&gt;"| ProductMgmt
    ShippingPkg -->|"&lt;&lt;access&gt;&gt;"| OrderMgmt
            </pre>
            <p><strong>Pembahasan:</strong> Paket <code>Order Management</code> sangat bergantung pada informasi akun di <code>User Management</code> dan katalog barang di <code>Product Management</code>. Paket <code>Shipping</code> selanjutnya mengimpor atau mengakses data pesanan di <code>Order Management</code> untuk memproses pengantaran logistik fisik.</p>
          </div>
        </div>

        <div class="quiz-item">
          <h5>Soal 2.2: Communication Diagram & State Diagram</h5>
          <p>Rancanglah sebuah Communication Diagram untuk skenario pelanggan menambahkan barang ke dalam keranjang belanja. Komunikasi melibatkan entitas: <code>:Customer</code> (Aktor), <code>:Librarian/Staff</code> (atau dalam hal ini sistem kasir e-commerce), dan objek <code>:Cart</code> (Keranjang). Gambarkan pula State Diagram siklus status dari objek <strong>Order</strong>.</p>
          
          <button class="btn btn-reveal" onclick="toggleSolution('sol-2-2')">Tampilkan Solusi Diagram & Pembahasan</button>
          
          <div id="sol-2-2" class="solution-content hidden">
            <h6>Communication Diagram (Tambah ke Keranjang):</h6>
            <pre class="mermaid">
flowchart LR
    Customer((:Customer)) ---|1: BrowseProduct / 4: AddSuccessNotification| WebServer[EcommerceSystem]
    WebServer ---|2: CheckInventory / 3: AddItemToCart| CartObj[:Cart]
            </pre>

            <h6>State Diagram Objek Order (Pesanan Belanja):</h6>
            <pre class="mermaid">
stateDiagram-v2
    [*] --> Ordered : Pesanan Dibuat
    Ordered --> Processing : Admin Mengkonfirmasi Pesanan
    Ordered --> Cancelled : Pembeli Membatalkan Pesanan
    Processing --> Packed : Barang Dikemas (Packed)
    Packed --> Shipped : Paket Dikirim Kurir (Shipped)
    Shipped --> Delivered : Paket Diterima Pembeli (Delivered)
    Delivered --> [*] : Garansi Berakhir (Closed)
    Cancelled --> [*]
            </pre>
          </div>
        </div>
      </div>
    `,
    quiz: []
  }
];
