import { useRef } from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { useGsapHeroIntro } from '@/hooks/useGsapHeroIntro';
import { HeroBlob } from './HeroBlob';
import { HeroStats } from './HeroStats';
import { HeroPerfectionWord, type PerfectionHandle } from './HeroPerfectionWord';
import { FeatherMover, type FeatherMoverHandle } from './FeatherMover';

export function Hero() {
  const heroRef       = useRef<HTMLElement>(null);
  const perfectionRef = useRef<PerfectionHandle>(null);
  const featherRef    = useRef<FeatherMoverHandle>(null);

  /**
   * Proxy refs that read through the forwardRef handles at call-time.
   * This lets useGsapHeroIntro hold a single stable ref object while
   * still getting live DOM nodes after children have mounted.
   */
  const moverRef: React.RefObject<HTMLDivElement> = {
    get current() { return featherRef.current?.moverRef.current ?? null; },
  };
  const featherImgRef: React.RefObject<HTMLImageElement> = {
    get current() { return featherRef.current?.imgRef.current ?? null; },
  };
  const pathRef: React.RefObject<SVGPathElement> = {
    get current() { return perfectionRef.current?.pathRef.current ?? null; },
  };
  const perfectionWrapRef: React.RefObject<HTMLSpanElement> = {
    get current() { return perfectionRef.current?.wrapRef.current ?? null; },
  };

  const { playIntro } = useGsapHeroIntro({
    heroRef,
    moverRef,
    featherImgRef,
    pathRef,
    perfectionWrapRef,
  });

  return (
    <section id="hero" className="relative overflow-hidden" ref={heroRef}>
      <HeroBlob />

      <div className="hero-stage mx-auto max-w-7xl px-5 md:px-10 pt-8 md:pt-14 pb-12 md:pb-20 relative flex items-center">
        <div className="max-w-3xl relative z-10 w-full">

          {/* Location badge */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-ink/8 shadow-soft text-[0.68rem] sm:text-[0.72rem] tracking-[0.16em] font-semibold text-ink-soft uppercase"
            data-line=""
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
            Theni, Tamil Nadu &middot; Since 2015
          </div>

          {/* Headline */}
          <h1
            className="font-display italic text-ink mt-5 md:mt-10"
            style={{ fontSize: 'clamp(1.9rem, 5.5vw, 4rem)', lineHeight: 1.12, letterSpacing: '-0.01em', fontWeight: 500 }}
          >
            <span className="block" data-line="">Education is the</span>
            <span className="block" data-line="">expression of the</span>
            <span className="block" data-line="">
              <HeroPerfectionWord ref={perfectionRef} /> that already
            </span>
            <span className="block" data-line="">exists in man.</span>
          </h1>

          {/* Attribution */}
          <p className="mt-3 md:mt-6 font-script text-lg sm:text-xl md:text-2xl text-ink-mute" data-line="">
            &mdash; Swami Vivekananda
          </p>

          {/* Sub-copy */}
          <p
            className="mt-4 md:mt-9 text-sm sm:text-base md:text-lg text-ink-soft leading-relaxed max-w-full md:max-w-xl"
            data-line=""
          >
            <span className="text-ink font-semibold">The Oxford Academy</span> is Theni&rsquo;s
            home for English, excellence and the future — a place built by a teacher, for
            everyone who has something to say but hasn&rsquo;t found the words yet.
          </p>

          {/* CTAs */}
          <div className="mt-5 md:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 relative z-30" data-line="">
            <a href="#courses" className="btn btn-magenta justify-center">
              Explore courses
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-ink-outline justify-center">
              Book a free demo
            </a>
          </div>

          <HeroStats />
        </div>

        {/* Feather resting zone (desktop only) */}
        <div
          id="feather-rest"
          className="hidden md:block absolute pointer-events-none"
          style={{ right: '7%', top: '50%', width: '380px', height: '686px', transform: 'translateY(-50%)' }}
          aria-hidden="true"
        >
          <div className="feather-glow" />
        </div>

        {/* GSAP-driven feather */}
        <FeatherMover ref={featherRef} />

        {/* Replay button */}
        <button
          type="button"
          onClick={playIntro}
          className="replay-btn flex absolute bottom-6 left-6 md:left-10 w-10 h-10 rounded-full border border-ink/15 text-ink-soft bg-white/60 hover:bg-ink hover:text-cream items-center justify-center z-30"
          aria-label="Replay animation"
          title="Replay animation"
        >
          <RotateCcw className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
