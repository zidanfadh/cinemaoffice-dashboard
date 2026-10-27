import type { Metadata } from "next";
import { LegalPage } from "../components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Kebijakan privasi cinemaoffice.site.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy / 01"
      title="Privacy Policy"
      intro="Kami menghargai kepercayaan tim yang menggunakan cinemaoffice.site. Kebijakan ini menjelaskan informasi apa yang kami kelola dan bagaimana kami menjaganya tetap aman."
      updated="27 October 2026"
    >
      <h2>1. Tentang layanan</h2>
      <p>
        cinemaoffice.site adalah media server private milik kantor yang digunakan untuk kebutuhan
        internal, termasuk menyimpan, mengatur, dan mengakses materi media. Layanan ini bukan
        platform publik dan aksesnya dibatasi untuk pengguna yang diberi wewenang oleh kantor.
      </p>

      <h2>2. Informasi yang kami kelola</h2>
      <p>
        Untuk menjalankan layanan, kami dapat mengelola informasi akun seperti nama, alamat email
        kantor, peran akses, serta catatan aktivitas dasar. Kami juga menyimpan file media dan
        metadata yang pengguna atau tim unggah ke server.
      </p>
      <ul>
        <li>Informasi akun dan autentikasi untuk mengamankan akses.</li>
        <li>File, folder, judul, tag, dan metadata yang terkait dengan konten.</li>
        <li>Log teknis seperlunya untuk menjaga stabilitas, keamanan, dan pemecahan masalah.</li>
      </ul>

      <h2>3. Cara penggunaan informasi</h2>
      <p>
        Informasi digunakan hanya untuk menyediakan, memelihara, dan meningkatkan layanan internal;
        mengatur izin akses; melindungi server dari penyalahgunaan; serta memenuhi kebutuhan
        operasional dan keamanan kantor. Kami tidak menjual informasi pribadi atau menggunakan
        konten untuk iklan pihak ketiga.
      </p>

      <h2>4. Penyimpanan dan keamanan</h2>
      <p>
        Kami menerapkan pembatasan akses berbasis peran dan langkah keamanan yang wajar sesuai
        kebutuhan operasional. Meski begitu, tidak ada sistem yang sepenuhnya bebas risiko. Pengguna
        bertanggung jawab menjaga kredensialnya dan segera melaporkan aktivitas yang mencurigakan.
      </p>

      <h2>5. Berbagi informasi</h2>
      <p>
        Informasi hanya dapat diakses oleh anggota tim atau pihak yang ditunjuk dan memang
        memerlukannya untuk pekerjaan. Jika dukungan teknis eksternal diperlukan, akses akan dibatasi
        pada ruang lingkup dan durasi yang relevan.
      </p>

      <h2>6. Retensi dan pertanyaan</h2>
      <p>
        Data disimpan selama dibutuhkan untuk tujuan operasional, kebijakan kantor, atau kewajiban
        hukum yang berlaku. Untuk pertanyaan, koreksi, atau permintaan penghapusan data, hubungi
        administrator cinemaoffice.site melalui kanal internal kantor.
      </p>
    </LegalPage>
  );
}
