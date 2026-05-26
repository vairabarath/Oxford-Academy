import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { CONTACT } from '@/data/contact';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 pt-16 md:pt-20 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 pb-12 md:pb-16">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1 max-w-xs">
            <a href="#top" className="inline-flex items-center gap-2.5" aria-label="The Oxford Academy home">
              <img src="/feather.svg" alt="" aria-hidden="true" className="w-7 h-7" />
              <span className="font-display italic font-medium text-cream text-[1.1rem] tracking-tight">
                The Oxford Academy
              </span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-cream/55">
              Theni&rsquo;s home for English, excellence, and the future. Founded 2015 by
              M.&nbsp;Sneka, M.E. Communications.
            </p>
            <p className="mt-6">
              <span className="footer-script">The Future.</span>
            </p>
          </div>

          {/* Courses */}
          <div>
            <p className="footer-col-label">Courses</p>
            <ul className="mt-5 space-y-3">
              {['Spoken English', 'IELTS', 'Placement', 'Programming', 'Home tuition'].map(
                (item) => (
                  <li key={item}>
                    <a href="#courses" className="footer-link">{item}</a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Academy */}
          <div>
            <p className="footer-col-label">Academy</p>
            <ul className="mt-5 space-y-3">
              <li><a href="#about"   className="footer-link">Our founder</a></li>
              <li><a href="#why"     className="footer-link">Why us</a></li>
              <li><a href="#contact" className="footer-link">Visit</a></li>
              <li><a href="#contact" className="footer-link">Book demo</a></li>
            </ul>
          </div>

          {/* Reach Us */}
          <div>
            <p className="footer-col-label">Reach Us</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={`tel:${CONTACT.phone1}`} className="footer-link">
                  {CONTACT.phone1Display.replace('+91 ', '')}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phone2}`} className="footer-link">
                  {CONTACT.phone2Display.replace('+91 ', '')}
                </a>
              </li>
              <li className="text-cream/78 text-[0.94rem]">Edamal St, Theni</li>
              <li className="text-cream/78 text-[0.94rem]">Mon &ndash; Sat &middot; 9&ndash;8</li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <p className="text-xs text-cream/50">
            &copy; {new Date().getFullYear()} The Oxford Academy &middot; Theni, Tamil Nadu
          </p>
          <div className="flex items-center gap-2">
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href={CONTACT.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href={`https://wa.me/${CONTACT.waNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
