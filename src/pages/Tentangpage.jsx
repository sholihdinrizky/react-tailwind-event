const Tentangpage = () => {
  return (
    <div className="tentang py-40">
      <div className="container mx-auto px-2">
        <h1 className="text-center text-6xl font-semibold">Tentang Event</h1>
        <p className="text-justify text-base/loose mt-8">
          Seperti yang kita ketahui era digital bergerak sangat cepat, kebutuhan
          akan inovasi dan adaptasi menjadi semakin penting. Banyak individu dan
          perusahaan kesulitan mengikuti laju perubahan teknologi yang konstan,
          sehingga berisiko tertinggal. Seminar ini hadir sebagai jawaban atas
          tantangan tersebut. Kami melihat adanya kesenjangan antara potensi
          teknologi dan pemanfaatannya di berbagai sektor. Oleh karena itu, kami
          berinisiatif menciptakan sebuah wadah di mana pengetahuan, pengalaman,
          dan ide-ide inovatif dapat dibagikan secara terbuka dan interaktif.
        </p>

        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-4">
          <div>
            <h1 className="text-6xl font-semibold mb-8 mt-10">Tujuan</h1>
            <ol className="list-decimal flex flex-col gap-4">
              <li className="text-base/loose">
                <span className="font-bold">Menginspirasi dan Mendidik:</span>{" "}
                Memberikan wawasan terbaru tentang tren teknologi yang sedang
                berkembang, serta menginspirasi peserta untuk berpikir kreatif
                dan berani mengambil langkah inovatif.
              </li>
              <li className="text-base/loose">
                <span className="font-bold">Membangun Jaringan:</span>{" "}
                Menciptakan ruang bagi para profesional, pengembang, dan
                visioner untuk berinteraksi, berkolaborasi, dan membangun
                hubungan yang saling menguntungkan.
              </li>
              <li className="text-base/loose">
                <span className="font-bold">Mendorong Penerapan Praktis:</span>{" "}
                Tidak hanya berfokus pada teori, seminar ini bertujuan untuk
                memberikan contoh dan studi kasus nyata yang dapat diterapkan
                langsung dalam pekerjaan atau proyek peserta.
              </li>
            </ol>
          </div>

          <div>
            <h1 className="text-6xl font-semibold mb-8 mt-10">Visi</h1>
            <p className="text-base/loose mb-10">
              Menjadi katalisator utama yang mendorong inovasi dan transformasi
              digital di Indonesia, menciptakan komunitas yang terus belajar dan
              berkolaborasi untuk membentuk masa depan yang lebih baik.
            </p>

            <h1 className="text-6xl font-semibold mb-8 mt-10">Misi</h1>
            <ol className="list-decimal flex flex-col gap-4">
              <li className="text-base/loose">
                Menyelenggarakan seminar dan workshop berkualitas tinggi yang
                relevan dengan kebutuhan industri.
              </li>
              <li className="text-base/loose">
                Menghadirkan pembicara dan ahli yang kompeten dan berpengalaman
                di bidangnya
              </li>
              <li className="text-base/loose">
                Membangun platform berkelanjutan untuk pertukaran pengetahuan
                dan kolaborasi.
              </li>
              <li className="text-base/loose">
                Memberdayakan individu dan organisasi agar mampu beradaptasi dan
                berinovasi di tengah perubahan.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tentangpage;
