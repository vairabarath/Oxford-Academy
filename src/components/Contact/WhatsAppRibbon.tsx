import { MessageCircle } from 'lucide-react';
import { CONTACT } from '@/data/contact';

export function WhatsAppRibbon() {
  return (
    <div className="mt-10 md:mt-14 flex flex-wrap items-center justify-between gap-4 reveal">
      <p className="text-ink-soft text-sm">
        Prefer messaging? Reach us on WhatsApp &mdash; we usually reply within an hour.
      </p>
      <a
        href={`https://wa.me/${CONTACT.waNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
        style={{ background: '#25D366', boxShadow: '0 8px 22px -8px rgba(37,211,102,0.5)' }}
        aria-label="Chat with The Oxford Academy on WhatsApp"
      >
        <MessageCircle className="w-4 h-4" aria-hidden="true" />
        Chat on WhatsApp
      </a>
    </div>
  );
}
