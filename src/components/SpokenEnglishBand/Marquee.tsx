import { MARQUEE_ITEMS } from '@/data/marqueeWords';

export function Marquee() {
  return (
    <div className="relative z-10 english-marquee pb-14 md:pb-20">
      <div className="english-marquee-track" aria-hidden="true">
        {MARQUEE_ITEMS.map((item, i) => (
          <span key={`${item}-${i}`} className="english-marquee-item">
            {item}
            {/* Dot separator after each item except the last in each set */}
            {i % (MARQUEE_ITEMS.length / 2) < (MARQUEE_ITEMS.length / 2) - 1 && (
              <span className="english-marquee-dot inline-block mx-5" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
