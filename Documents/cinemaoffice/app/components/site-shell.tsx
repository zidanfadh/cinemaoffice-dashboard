import Link from "next/link";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="site-grid min-h-screen overflow-hidden bg-[#07111f]">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="group flex items-center gap-3" aria-label="cinemaoffice.site home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#8dd9c3] text-sm font-bold text-[#07111f] transition-transform group-hover:rotate-6">
            co
          </span>
          <span className="text-sm font-semibold tracking-[0.18em] text-[#edf5ff]">
            CINEMA<span className="text-[#8dd9c3]">OFFICE</span>
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-xs font-medium tracking-wide text-[#9eafc5] sm:gap-8">
          <Link className="transition-colors hover:text-[#edf5ff]" href="/">
            Home
          </Link>
          <Link className="transition-colors hover:text-[#edf5ff]" href="/privacy-policy">
            Privacy
          </Link>
          <Link className="transition-colors hover:text-[#edf5ff]" href="/terms-of-service">
            Terms
          </Link>
        </nav>
      </header>
      {children}
      <footer className="mx-auto flex w-full max-w-7xl flex-col gap-3 border-t border-white/10 px-6 py-7 text-xs text-[#70839c] sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p>© 2026 cinemaoffice.site. Internal media server.</p>
        <p>Built for the team, kept private.</p>
      </footer>
    </div>
  );
}

export function BrandMark() {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#8dd9c3]">
      <span className="h-2 w-2 rounded-full bg-[#8dd9c3] shadow-[0_0_16px_#8dd9c3]" />
      CINEMA OFFICE / PRIVATE MEDIA
    </span>
  );
}
