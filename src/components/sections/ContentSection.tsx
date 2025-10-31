import type React from "react"

interface ContentSectionProps {
  onSectionChange?: (section: string) => void
}

export default function ContentSection({ onSectionChange }: ContentSectionProps): React.JSX.Element {
  return (
    <article id="content" className="max-w-4xl mx-auto">
      <section id="introduction" data-section="introduction" className="mb-16 scroll-mt-32">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Introduction</h2>
        <p className="indent-8 text-lg text-gray-700 leading-relaxed mb-4">
          Sastra lisan Batak Toba merupakan warisan budaya yang diwariskan secara turun-temurun melalui tradisi tutur.
          Sastra ini mencakup berbagai bentuk ungkapan yang mengandung nilai-nilai kehidupan, ajaran moral,
          dan petuah yang disampaikan secara lisan dari generasi ke generasi.
        </p>
        <p className="indent-8 text-lg text-gray-700 leading-relaxed">
          Melalui sastra lisan, masyarakat Batak Toba mengekspresikan perasaan, pikiran,
          dan pandangan hidup mereka terhadap Tuhan, sesama, dan alam sekitar.
          Tiga bentuk utama yang sering dijumpai dalam kehidupan masyarakat Batak Toba adalah andung-andung, umpasa, dan umpama.
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      <section id="andung_andung" data-section="andung_andung" className="mb-16 scroll-mt-32">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Andung-Andung</h2>

        <p className="indent-8 text-lg text-gray-700 leading-relaxed mb-6">
          Andung-andung adalah bentuk sastra lisan Batak Toba yang berupa ratapan atau tangisan yang diungkapkan pada saat berduka, terutama ketika seseorang meninggal dunia. Andung-andung berisi ungkapan kesedihan yang mendalam, kerinduan, dan doa bagi orang yang telah meninggal. Biasanya diucapkan atau dinyanyikan oleh anggota keluarga, terutama kaum perempuan, dengan irama khas yang menyayat hati.
        </p>

        <p className="indent-8 text-lg text-gray-700 leading-relaxed mb-6">
          Fungsi utama andung-andung adalah sebagai sarana untuk mengekspresikan kesedihan dan kehilangan. Namun, lebih dari itu, andung-andung juga berfungsi sebagai media komunikasi spiritual antara yang hidup dengan arwah orang yang telah meninggal, sebagai bentuk penghormatan terakhir. Dalam konteks sosial, andung-andung memperlihatkan nilai solidaritas dan rasa empati antaranggota keluarga dan masyarakat yang turut berduka.
        </p>

        <p className="indent-8 text-lg text-gray-700 leading-relaxed mb-6">
          Dalam andung-andung terkandung nilai-nilai kemanusiaan, kasih sayang, penghormatan terhadap leluhur, serta kesadaran akan kefanaan hidup. Nilai-nilai ini menjadi pengingat bagi generasi penerus untuk menghargai kehidupan dan hubungan antarsesama manusia.

        </p>

        <blockquote className="border-l-4 border-orange-600 pl-6 py-4 my-6 bg-gray-50 italic text-gray-700">
          &ldquo;Kata kunci atau contoh andung andung.&rdquo;
        </blockquote>
      </section>

      <hr className="my-12 border-gray-200" />

      <section id="umpasa" data-section="umpasa" className="mb-16 scroll-mt-32">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Umpasa</h2>

        <p className="indent-8 text-lg text-gray-700 leading-relaxed mb-6">
          Umpasa adalah bentuk puisi tradisional Batak Toba yang berisi nasihat, petuah, doa, atau ungkapan rasa dalam bentuk kiasan.
          Umpasa disampaikan pada berbagai acara adat, seperti pernikahan, kelahiran, kematian, dan upacara adat lainnya.
          Umpasa biasanya terdiri dari dua larik atau empat larik dengan pola sajak yang indah dan penuh makna.
        </p>

        <p className="indent-8 text-lg text-gray-700 leading-relaxed mb-6">
          Fungsi umpasa tidak hanya sebagai hiburan atau hiasan dalam percakapan adat, tetapi juga sebagai sarana penyampaian nilai moral dan kebijaksanaan hidup.
          Umpasa digunakan untuk memperhalus ucapan, menasihati, memberi doa restu, atau mengungkapkan harapan secara sopan dan indah. Dalam budaya Batak,
          kemampuan seseorang membuat dan mengucapkan umpasa sering dianggap sebagai tanda kebijaksanaan dan kecerdasan.
        </p>

        <p className="indent-8 text-lg text-gray-700 leading-relaxed mb-6">
          Umpasa mengandung nilai-nilai kearifan lokal seperti kejujuran, kesopanan, kerja keras, tanggung jawab, dan rasa hormat kepada orang lain. Selain itu,
          umpasa mencerminkan filsafat hidup masyarakat Batak yang menjunjung tinggi keharmonisan, kebersamaan, dan rasa syukur kepada Tuhan.

        </p>

        <blockquote className="border-l-4 border-orange-600 pl-6 py-4 my-6 bg-gray-50 italic text-gray-700">
          &ldquo;Tinallik dulang tampak dohot aekna. Pinungka hata ulaon unang langlang di tagetna — Jika sudah dimulai jangan sampai tidak diakhiri.&rdquo;
        </blockquote>
      </section>

      <hr className="my-12 border-gray-200" />


      <section id="umpama" data-section="umpama" className="mb-16 scroll-mt-32">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Umpama</h2>

        <p className="indent-8 text-lg text-gray-700 leading-relaxed mb-6">
          Umpama merupakan peribahasa atau ungkapan perbandingan dalam bahasa Batak yang digunakan untuk memberikan nasihat, pengajaran, atau sindiran
          secara halus. Umpama biasanya disusun dalam bentuk perumpamaan yang singkat, padat, dan bermakna dalam. Dalam kehidupan sehari-hari, 
          umpama sering digunakan untuk memperindah tuturan dan menyampaikan pesan moral tanpa menyinggung perasaan lawan bicara.
        </p>

        <p className="indent-8 text-lg text-gray-700 leading-relaxed mb-6">
          Fungsi umpama adalah sebagai alat pendidikan moral dan sosial. Melalui umpama, masyarakat diajarkan untuk berpikir bijak, bertindak hati-hati,
          dan menghargai nilai-nilai kehidupan. Selain itu, umpama juga berperan penting dalam menjaga kesantunan berbahasa dan memperkuat identitas budaya Batak Toba.
        </p>

        <p className="indent-8 text-lg text-gray-700 leading-relaxed mb-6">
          Dalam umpama terdapat nilai kebijaksanaan, kehati-hatian, kesabaran, dan kejujuran. Setiap umpama menyiratkan pesan yang mendidik dan
          mengandung filosofi hidup masyarakat Batak, seperti pentingnya saling menghormati, menjaga nama baik, serta hidup rukun dan seimbang dengan sesama.

        </p>

        <p className="indent-8 text-lg text-gray-700 leading-relaxed mb-6">
          Ketiga bentuk sastra lisan ini memiliki hubungan yang erat satu sama lain, karena semuanya merupakan wujud ekspresi budaya dan identitas masyarakat Batak Toba.
          Andung-andung menggambarkan sisi emosional dan spiritual, umpasa memperlihatkan kebijaksanaan dan nilai sosial,
          sedangkan umpama menekankan aspek moral dan etika dalam kehidupan.
          Ketiganya membentuk kesatuan nilai budaya yang memperkaya warisan sastra Batak Toba.

        </p>

        <blockquote className="border-l-4 border-orange-600 pl-6 py-4 my-6 bg-gray-50 italic text-gray-700">
          &ldquo;Sapang na rim ni dongan, marimbang na di tangan —  kekuatan sejati ada pada persahabatan, bukan pada kekerasan.&rdquo;
        </blockquote>
      </section>

      <hr className="my-12 border-gray-200" />
    </article>
  )
}
