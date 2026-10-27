import type { Metadata } from "next";
import { LegalPage } from "../components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Ketentuan penggunaan cinemaoffice.site.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      eyebrow="Terms / 02"
      title="Terms of Service"
      intro="Ketentuan singkat ini membantu menjaga cinemaoffice.site tetap aman, tertib, dan berguna bagi semua orang di dalam kantor."
      updated="27 October 2026"
    >
      <h2>1. Penerimaan ketentuan</h2>
      <p>
        Dengan mengakses cinemaoffice.site, pengguna menyetujui ketentuan ini dan kebijakan privasi
        yang berlaku. Jika tidak menyetujui, pengguna tidak diperkenankan menggunakan layanan.
      </p>

      <h2>2. Kelayakan dan akun</h2>
      <p>
        Layanan hanya ditujukan untuk anggota tim, kontraktor, atau pihak lain yang secara resmi
        diberi akses. Setiap pengguna wajib menjaga kerahasiaan akun, menggunakan identitasnya
        sendiri, dan segera melaporkan penggunaan yang tidak sah.
      </p>

      <h2>3. Penggunaan yang diperbolehkan</h2>
      <p>
        cinemaoffice.site digunakan untuk kebutuhan pekerjaan dan aktivitas internal yang
        berhubungan dengan Cinema Office. Pengguna wajib memastikan bahwa konten yang diunggah
        memiliki izin yang diperlukan dan tidak melanggar hukum, hak cipta, atau kebijakan kantor.
      </p>

      <h2>4. Penggunaan yang dilarang</h2>
      <ul>
        <li>Membagikan kredensial atau memberikan akses kepada pihak yang tidak berwenang.</li>
        <li>Mengunggah malware, konten ilegal, atau materi yang melanggar hak pihak lain.</li>
        <li>Mencoba mengganggu, memindai, atau mendapatkan akses ke sistem dan data pengguna lain.</li>
        <li>Menggunakan server untuk tujuan di luar kebutuhan internal tanpa persetujuan.</li>
      </ul>

      <h2>5. Kepemilikan dan tanggung jawab konten</h2>
      <p>
        Pengguna atau pemilik konten tetap memiliki hak atas materi yang diunggah. Dengan
        mengunggahnya, pengguna memberi izin terbatas kepada kantor untuk menyimpan, memproses,
        dan menampilkan materi tersebut sejauh diperlukan untuk menjalankan layanan internal.
      </p>

      <h2>6. Ketersediaan layanan</h2>
      <p>
        Kami berupaya menjaga layanan tetap tersedia, tetapi akses dapat dihentikan sementara untuk
        pemeliharaan, peningkatan keamanan, atau keadaan di luar kendali kami. Fitur dan kapasitas
        dapat berubah sesuai kebutuhan operasional.
      </p>

      <h2>7. Penangguhan dan perubahan</h2>
      <p>
        Akses dapat ditangguhkan atau dihentikan jika terjadi pelanggaran ketentuan, perubahan
        status kerja, atau alasan keamanan. Ketentuan ini dapat diperbarui dari waktu ke waktu;
        versi terbaru akan ditampilkan di halaman ini.
      </p>
    </LegalPage>
  );
}
