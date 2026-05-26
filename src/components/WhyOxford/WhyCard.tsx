import type { WhyCard as WhyCardType } from '@/types';

export function WhyCard({ card }: { card: WhyCardType }) {
  return (
    <article className="why-card reveal">
      <p className="why-num">{card.num}</p>
      <h3>{card.heading}</h3>
      <p>{card.body}</p>
    </article>
  );
}
