import Link from "next/link";
import { BrandMark, SiteShell } from "./components/site-shell";

const features = [
  {
    number: "01",
    title: "One private library",
    description: "Satu ruang terpusat untuk mengelola aset video, audio, dan materi kreatif tim.",
  },
  {
    number: "02",
    title: "Made for the office",
    description: "Akses yang dirancang untuk workflow internal, tanpa noise dari platform publik.",
  },
  {
    number: "03",
    title: "Always in context",
    description: "Temukan materi yang tepat, pahami versinya, dan lanjutkan pekerjaan lebih cepat.",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <main className="hero-glow mx-auto w-full max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
        <section className="grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <BrandMark />
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-[#edf5ff] sm:text-7xl lg:text-8xl">
              Media for the
              <span className="block text-[#8dd9c3]">people behind it.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-[#9eafc5] sm:text-lg">
              cinemaoffice.site adalah media server private milik kantor untuk menyimpan,
              berbagi, dan menikmati konten yang membantu tim tetap bergerak bersama.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#about"
                className="rounded-full bg-[#8dd9c3] px-6 py-3 text-sm font-semibold text-[#07111f] transition-all hover:bg-[#b0eddb] hover:shadow-[0_0_28px_rgba(141,217,195,0.22)]"
              >
                Explore the space
              </Link>
              <span className="flex items-center gap-2 text-xs text-[#71839b]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8dd9c3]" />
                Internal access only
              </span>
            </div>
          </div>

          <div className="relative min-h-72 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c1b2d]/80 p-6 shadow-2xl shadow-black/20">
            <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full border border-[#8dd9c3]/20" />
            <div className="absolute -right-4 -top-8 h-32 w-32 rounded-full border border-[#8dd9c3]/20" />
            <div className="relative flex h-full min-h-60 flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-[#71839b]">
                <span>SERVER STATUS</span>
                <span className="flex items-center gap-2 text-[#8dd9c3]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8dd9c3] shadow-[0_0_10px_#8dd9c3]" />
                  ONLINE
                </span>
              </div>
              <div>
                <p className="text-6xl font-semibold tracking-[-0.07em] text-[#edf5ff]">01</p>
                <p className="mt-2 text-sm text-[#9eafc5]">shared space / private signal</p>
              </div>
              <div className="flex gap-1">
                {[45, 70, 38, 82, 58, 92, 63, 76, 48, 86].map((height, index) => (
                  <span
                    key={index}
                    className="flex-1 rounded-full bg-[#8dd9c3]/60"
                    style={{ height: `${height / 2}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-28 border-t border-white/10 pt-8">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8dd9c3]">Why it exists</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#edf5ff] sm:text-4xl">
                A quieter way to work with media.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[#71839b]">
              Dibangun sederhana agar hal penting tetap terlihat dan hal yang tidak perlu tetap di luar.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.number} className="bg-[#0a1728] p-7">
                <span className="text-xs text-[#8dd9c3]">{feature.number}</span>
                <h3 className="mt-16 text-lg font-semibold text-[#edf5ff]">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#71839b]">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
