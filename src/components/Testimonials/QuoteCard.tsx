import type { Testimonial } from '@/types';

export function QuoteCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="quote-card reveal">
      <img src="/feather.svg" alt="" aria-hidden="true" className="quote-feather" />
      <p className="quote-text">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-7 flex items-center gap-3">
        <div
          className="quote-avatar"
          style={{ background: testimonial.avatarGradient }}
          aria-hidden="true"
        >
          {testimonial.avatarInitial}
        </div>
        <div>
          <p className="quote-name">{testimonial.name}</p>
          <p className="quote-role">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}
