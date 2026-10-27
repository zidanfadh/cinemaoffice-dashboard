import type { ReactNode } from "react";
import { BrandMark, SiteShell } from "./site-shell";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  children,
}: LegalPageProps) {
  return (
    <SiteShell>
      <main className="hero-glow mx-auto w-full max-w-7xl px-6 pb-20 pt-14 lg:px-10 lg:pt-20">
        <div className="mx-auto max-w-3xl">
          <BrandMark />
          <div className="mt-7 border-b border-white/10 pb-10">
            <p className="mb-4 text-sm font-medium text-[#71839b]">{eyebrow}</p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-[#edf5ff] sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#9eafc5]">{intro}</p>
            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-[#71839b]">
              Last updated: {updated}
            </p>
          </div>
          <article className="legal-copy pt-3">{children}</article>
        </div>
      </main>
    </SiteShell>
  );
}
