import { ArrowRight } from 'lucide-react';

/** The large gradient Spoken English featured card — always static content. */
export function CourseFeaturedCard() {
  return (
    <article className="course-card-featured reveal sm:row-span-2 group">
      <div className="featured-orb" aria-hidden="true" />
      <div className="relative z-10 flex flex-col h-full p-7 md:p-8">
        <div className="flex items-start justify-between">
          <span className="course-badge font-display italic text-sm">M.E</span>
          <span className="text-[0.7rem] tracking-[0.18em] uppercase font-semibold text-white/60">
            Featured
          </span>
        </div>
        <div className="flex-1" />
        <div>
          <h3 className="font-display italic text-white text-3xl md:text-[2rem] leading-tight">
            Spoken English
          </h3>
          <p className="mt-3 text-white/80 text-[0.95rem] leading-relaxed max-w-[28ch]">
            From first hello to fluent confidence &mdash; kids, students, professionals.
          </p>
        </div>
        <a
          href="#contact"
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition group"
        >
          Most loved program
          <ArrowRight
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
}
