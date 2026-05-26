import { RotatingWord } from './RotatingWord';

// Inline the marquee content — alternating item / dot spans,
// duplicated (A + B) for the seamless CSS translateX(-50%) loop.
const MARQUEE_LABELS = [
  'for students',
  'for professionals',
  'for parents',
  'for you',
  'for kids',
  'for everyone',
] as const;

export function SpokenEnglishBand() {
  // Build one track: [item, dot, item, dot, ...] × 2 sets
  const trackItems = [...MARQUEE_LABELS, ...MARQUEE_LABELS];

  return (
    <section aria-label="Spoken English for all" className="english-band relative">
      {/* Headline */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 md:px-8 py-14 md:py-28 text-center">
        <p className="english-band-label">Spoken English for all</p>
        <h2 className="english-band-headline mt-6">
          <span className="block">English</span>
          <span className="block overflow-visible">
            <RotatingWord />
          </span>
        </h2>
      </div>

      {/* Marquee strip — generous bottom padding so descenders (y, g, p) never clip */}
      <div className="relative z-10 english-marquee pb-16 md:pb-28">
        <div className="english-marquee-track" aria-hidden="true">
          {trackItems.map((label, i) => (
            <span key={`${label}-${i}`} className="inline-flex items-center gap-[2.5rem]">
              <span className="english-marquee-item">{label}</span>
              <span className="english-marquee-dot" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
