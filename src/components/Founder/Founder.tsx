import { SectionHeader } from '@/components/ui/SectionHeader';
import { FounderPhoto } from './FounderPhoto';
import { FounderBio } from './FounderBio';

export function Founder() {
  return (
    <section id="about" className="relative py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="The founder"
          heading={<>A teacher first.<br />Everything else, after.</>}
          lead="The Oxford Academy was born in a single rented room in Theni in 2015 — one teacher, eight students, and a borrowed whiteboard. The teacher is still here."
        />

        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start mt-10 md:mt-16">
          <FounderPhoto />
          <FounderBio />
        </div>
      </div>
    </section>
  );
}
