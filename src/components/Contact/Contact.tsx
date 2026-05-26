import { SectionHeader } from '@/components/ui/SectionHeader';
import { ContactInfo } from './ContactInfo';
import { MapEmbed } from './MapEmbed';
import { BookingForm } from './BookingForm';
import { WhatsAppRibbon } from './WhatsAppRibbon';

export function Contact() {
  return (
    <section id="contact" className="relative py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Visit us"
          heading={<>Come for one demo.<br />Decide after that.</>}
          lead="We're a short walk from Edamal Street junction. Drop in any weekday between 9 AM and 7 PM, or book a slot below — we'll keep ten minutes aside for you."
        />

        {/* On mobile: form first (primary action), info+map below.
            On lg: side-by-side, info+map left, form right. */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-10 md:mt-14">
          <div className="reveal order-2 lg:order-1">
            <ContactInfo />
            <MapEmbed />
          </div>
          <div className="reveal order-1 lg:order-2">
            <BookingForm />
          </div>
        </div>

        <WhatsAppRibbon />
      </div>
    </section>
  );
}
