import { TESTIMONIALS } from '@/data/testimonials';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { QuoteCard } from './QuoteCard';

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="In their words"
          heading="Stories from the room."
          lead="Real students, real outcomes. Last names shortened on request — most of them are still in Theni and will happily talk if you ask."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-10 md:mt-14">
          {TESTIMONIALS.map((t) => (
            <QuoteCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
