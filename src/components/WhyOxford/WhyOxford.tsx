import { WHY_CARDS } from '@/data/whyCards';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { WhyCard } from './WhyCard';

export function WhyOxford() {
  return (
    <section id="why" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Why Oxford"
          heading={<>Four reasons parents<br />and students stay.</>}
          lead="We're not the largest coaching centre in Theni. We're working on being the one you'd recommend to your closest friend."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-10 md:mt-14">
          {WHY_CARDS.map((card) => (
            <WhyCard key={card.num} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
