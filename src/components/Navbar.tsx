const NAV_LINKS = [
  { href: '#courses', label: 'Courses' },
  { href: '#about',   label: 'Founder' },
  { href: '#why',     label: 'Why Us' },
  { href: '#contact', label: 'Visit' },
] as const;

export function Navbar() {
  return (
    <header
      id="nav"
      className="fixed top-3 md:top-5 inset-x-0 z-50 transition-all duration-300"
    >
      <div className="mx-auto max-w-5xl px-3 md:px-5">
        <div className="nav-pill flex items-center justify-between rounded-full pl-3 pr-2 py-2">
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-2.5 pl-2"
            aria-label="The Oxford Academy home"
          >
            <img src="/feather.svg" alt="" className="w-7 h-7" aria-hidden="true" />
            <span className="font-display font-semibold text-[1.02rem] text-ink leading-none tracking-tight">
              The Oxford Academy
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-7 text-[0.92rem] text-ink-soft mr-2"
            aria-label="Primary"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className="hover:text-ink transition">
                {label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="rounded-full bg-ink text-cream px-4 md:px-5 py-2.5 text-sm font-semibold hover:bg-[#0c0c1a] transition"
          >
            Book a free demo
          </a>
        </div>
      </div>
    </header>
  );
}
