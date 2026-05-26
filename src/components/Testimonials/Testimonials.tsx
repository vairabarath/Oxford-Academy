import { TESTIMONIALS } from '@/data/testimonials';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { QuoteCard } from './QuoteCard';

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="In their words"
          heading="Stories from the room."
          lead="Real students, real outcomes. Last names shortened on request — most of them are still in Theni and will happily talk if you ask."
        />

        {/* Mobile: horizontal snap-scroll carousel */}
        <div className="md:hidden mt-8 relative">
          <div className="course-scroll-track">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="testimonial-scroll-item">
                <QuoteCard testimonial={t} />
              </div>
            ))}
          </div>
          <div
            className="absolute top-0 right-0 h-full w-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #FFF8F0, transparent)' }}
            aria-hidden="true"
          />
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 md:gap-6 mt-14">
          {TESTIMONIALS.map((t) => (
            <QuoteCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
