import { CONTACT } from '@/data/contact';
import { WhatsAppIcon } from './WhatsAppIcon';

/** Floating WhatsApp button — visible on mobile only (md:hidden). */
export function WaFab() {
  return (
    <a
      href={`https://wa.me/${CONTACT.waNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab md:hidden"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon width={28} height={28} />
    </a>
  );
}
