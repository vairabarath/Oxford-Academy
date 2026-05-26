import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#courses', label: 'Courses' },
  { href: '#about',   label: 'Founder' },
  { href: '#why',     label: 'Why Us' },
  { href: '#contact', label: 'Visit' },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while mobile menu is expanded
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      id="nav"
      className="fixed top-3 md:top-5 inset-x-0 z-50 transition-all duration-300"
    >
      <div className="mx-auto max-w-5xl px-3 md:px-5">

        {/* ── Pill bar ── */}
        <div className="nav-pill flex items-center justify-between rounded-full pl-3 pr-2 py-2">

          {/* Logo */}
          <a
            href="#top"
            onClick={close}
            className="flex items-center gap-2.5 pl-2 min-w-0"
            aria-label="The Oxford Academy home"
          >
            <img src="/feather.svg" alt="" className="w-7 h-7 flex-shrink-0" aria-hidden="true" />
            <span className="font-display font-semibold text-[0.9rem] sm:text-[1.02rem] text-ink leading-none tracking-tight truncate">
              The Oxford Academy
            </span>
          </a>

          {/* Desktop nav links */}
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

          {/* Right controls */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* CTA — desktop */}
            <a
              href="#contact"
              className="hidden md:inline-flex rounded-full bg-ink text-cream px-5 py-2.5 text-sm font-semibold hover:bg-[#0c0c1a] transition"
            >
              Book a free demo
            </a>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              onClick={() => setOpen(o => !o)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-ink hover:bg-ink/5 transition"
              aria-label={open ? 'Close navigation' : 'Open navigation'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open
                ? <X     className="w-5 h-5" aria-hidden="true" />
                : <Menu  className="w-5 h-5" aria-hidden="true" />
              }
            </button>
          </div>
        </div>

        {/* ── Mobile dropdown panel ── */}
        <div
          id="mobile-menu"
          className="md:hidden"
          style={{
            maxHeight: open ? '420px' : '0',
            opacity:   open ? 1        : 0,
            overflow:  'hidden',
            marginTop: open ? '0.5rem' : '0',
            transition: 'max-height 0.3s ease, opacity 0.25s ease, margin-top 0.3s ease',
          }}
          aria-hidden={!open}
        >
          <div className="nav-pill rounded-2xl px-5 py-4">
            {/* Links */}
            <nav aria-label="Mobile navigation" className="flex flex-col divide-y divide-ink/8">
              {NAV_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={close}
                  className="py-3.5 text-[0.95rem] font-medium text-ink-soft hover:text-ink transition"
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Full-width CTA */}
            <a
              href="#contact"
              onClick={close}
              className="mt-4 flex w-full items-center justify-center rounded-full bg-ink text-cream py-3 text-sm font-semibold hover:bg-[#0c0c1a] transition"
            >
              Book a free demo
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}
