import { MapPin, Phone, Clock } from 'lucide-react';
import { CONTACT } from '@/data/contact';

export function ContactInfo() {
  return (
    <div className="contact-info">
      {/* Address */}
      <div className="contact-info-row">
        <span className="contact-info-icon">
          <MapPin className="w-5 h-5" aria-hidden="true" />
        </span>
        <div>
          <p className="contact-info-label">The Academy</p>
          <address className="not-italic text-ink-soft leading-relaxed mt-1">
            {CONTACT.addressLine1}<br />
            {CONTACT.addressLine2}<br />
            {CONTACT.addressLine3}
          </address>
        </div>
      </div>

      <hr className="border-ink/10" />

      {/* Phone */}
      <div className="contact-info-row">
        <span className="contact-info-icon">
          <Phone className="w-5 h-5" aria-hidden="true" />
        </span>
        <div>
          <p className="contact-info-label">Call or WhatsApp</p>
          <p className="text-ink-soft leading-relaxed mt-1">
            <a href={`tel:${CONTACT.phone1}`} className="contact-link">
              {CONTACT.phone1Display}
            </a>
            <span className="text-ink/30 mx-1">&middot;</span>
            <a href={`tel:${CONTACT.phone2}`} className="contact-link">
              {CONTACT.phone2Display}
            </a>
          </p>
        </div>
      </div>

      <hr className="border-ink/10" />

      {/* Hours */}
      <div className="contact-info-row">
        <span className="contact-info-icon">
          <Clock className="w-5 h-5" aria-hidden="true" />
        </span>
        <div>
          <p className="contact-info-label">Hours</p>
          <p className="text-ink-soft leading-relaxed mt-1">
            {CONTACT.hoursWeekday}<br />
            {CONTACT.hoursSunday}
          </p>
        </div>
      </div>
    </div>
  );
}
