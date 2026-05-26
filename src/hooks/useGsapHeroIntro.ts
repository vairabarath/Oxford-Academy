import { useEffect, useCallback, useRef, type RefObject } from 'react';
import { gsap } from 'gsap';

// ScrollTrigger and MotionPathPlugin are registered once in main.tsx

interface HeroRefs {
  heroRef: RefObject<HTMLElement>;
  moverRef: RefObject<HTMLDivElement>;
  featherImgRef: RefObject<HTMLImageElement>;
  pathRef: RefObject<SVGPathElement>;
  perfectionWrapRef: RefObject<HTMLSpanElement>;
}

const isDesktop = () => window.matchMedia('(min-width: 760px)').matches;

/**
 * Encapsulates the full GSAP cinematic hero intro timeline.
 * Receives refs to the relevant DOM nodes from Hero.tsx.
 * Returns `playIntro` so the replay button can retrigger the animation.
 */
export function useGsapHeroIntro(refs: HeroRefs) {
  const activeTlRef = useRef<gsap.core.Timeline | null>(null);

  // ── Helpers ──────────────────────────────────────────────────────────────

  const getPathLen = useCallback(() => {
    return refs.pathRef.current?.getTotalLength() ?? 0;
  }, [refs.pathRef]);

  const pathPointPos = useCallback(
    (frac: number): { x: number; y: number } => {
      const path = refs.pathRef.current;
      const hero = refs.heroRef.current;
      if (!path || !hero) return { x: 0, y: 0 };
      const len = path.getTotalLength();
      const pt = path.getPointAtLength(len * frac);
      const ctm = path.getScreenCTM();
      if (!ctm) return { x: 0, y: 0 };
      const sx = ctm.a * pt.x + ctm.c * pt.y + ctm.e;
      const sy = ctm.b * pt.x + ctm.d * pt.y + ctm.f;
      const h = hero.getBoundingClientRect();
      return { x: sx - h.left, y: sy - h.top };
    },
    [refs.pathRef, refs.heroRef],
  );

  const restPos = useCallback((): { x: number; y: number } => {
    const hero = refs.heroRef.current;
    if (!hero) return { x: 0, y: 0 };
    const h = hero.getBoundingClientRect();
    const textEl = hero.querySelector<HTMLElement>('.max-w-3xl');
    if (textEl) {
      const t = textEl.getBoundingClientRect();
      return { x: t.right - h.left + 30, y: h.height * 0.72 };
    }
    return { x: h.width * 0.82, y: h.height * 0.5 };
  }, [refs.heroRef]);

  const setRunning = useCallback(() => {
    const wrap = refs.perfectionWrapRef.current;
    if (!wrap) return;
    wrap.classList.add('anim-running');
    wrap.classList.remove('anim-done');
  }, [refs.perfectionWrapRef]);

  const setDone = useCallback(() => {
    const wrap = refs.perfectionWrapRef.current;
    if (!wrap) return;
    wrap.classList.add('anim-done');
    wrap.classList.remove('anim-running');
  }, [refs.perfectionWrapRef]);

  // ── Main timeline ─────────────────────────────────────────────────────────

  const playIntro = useCallback(() => {
    const hero = refs.heroRef.current;
    const mover = refs.moverRef.current;
    const fImg = refs.featherImgRef.current;
    const path = refs.pathRef.current;
    if (!hero || !mover || !fImg || !path) return;

    const lines = hero.querySelectorAll('[data-line]');
    const pathLen = getPathLen();

    if (activeTlRef.current) activeTlRef.current.kill();
    gsap.killTweensOf([mover, fImg, path]);
    path.style.strokeDashoffset = String(pathLen);
    setRunning();

    const mobile = !isDesktop();

    // ── Shared setup ─────────────────────────────────────────────────────────
    gsap.set(lines, { opacity: 0, y: 28 });
    const tl = gsap.timeline();
    activeTlRef.current = tl;

    // Feather scale: smaller on mobile so it doesn't dwarf the compact text
    const featherScale = mobile ? 0.28 : 0.45;

    // Reveal headline lines
    tl.to(lines, { opacity: 1, y: 0, duration: 0.7, stagger: 0.09, ease: 'power2.out' }, 0);

    // Snap feather to path start and fade in
    tl.add(() => {
      const ps = pathPointPos(0);
      gsap.set(mover, { x: ps.x, y: ps.y });
      gsap.set(fImg, { scale: featherScale, rotation: -20, y: 0, x: 0 });
    }, 0.28);
    tl.fromTo(mover, { opacity: 0 }, { opacity: 1, duration: 0.2, ease: 'power2.out' }, 0.3);

    // The writing: stroke + feather follow the path
    const writeDur = mobile ? 2.2 : 2.6;
    tl.to(path, { strokeDashoffset: 0, duration: writeDur, ease: 'power1.inOut' }, 0.3);
    tl.to(
      mover,
      {
        duration: writeDur,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        motionPath: { path, align: path, alignOrigin: [0, 0], autoRotate: false } as any,
        ease: 'power1.inOut',
      },
      0.3,
    );

    // Cross-fade cursive → gradient italic
    tl.add(setDone, mobile ? 2.5 : 2.9);

    // Lift slightly then fly to resting position
    tl.to(mover, { y: '-=24', duration: 0.3, ease: 'power2.out' }, mobile ? 2.6 : 3.0);
    tl.add(() => {
      if (mobile) {
        // On mobile: settle into top-right corner.
        // The feather image is 260 × 470 px with transform-origin at the quill tip (≈ mover origin).
        // At scale 0.25, rotation 12°, the rightmost point is ~81 px right of the mover.
        // Placing mover at (width - 100) keeps ~19 px margin from the screen edge.
        // The topmost point at y=120 is ~5 px below the section top — fully within bounds.
        const h = hero.getBoundingClientRect();
        gsap.to(mover, { x: h.width - 100, y: 120, duration: 1.1, ease: 'power2.inOut' });
        gsap.to(fImg, { scale: 0.25, rotation: 12, duration: 1.1, ease: 'power2.inOut' });
      } else {
        // On desktop: fly to the right-column rest zone
        const r = restPos();
        gsap.to(mover, { x: r.x, y: r.y, duration: 1.3, ease: 'power2.inOut' });
        gsap.to(fImg, { scale: 1.15, rotation: -4, duration: 1.3, ease: 'power2.inOut' });
      }
    }, mobile ? 2.75 : 3.1);

    // Idle float loop
    tl.add(() => {
      if (mobile) {
        // Gentle vertical bob only — no rotation change so horizontal bounds stay fixed
        gsap.to(fImg, { y: -4, duration: 3.5, yoyo: true, repeat: -1, ease: 'sine.inOut' });
      } else {
        gsap.to(fImg, { y: -10, rotation: -8, duration: 4.2, yoyo: true, repeat: -1, ease: 'sine.inOut' });
      }
    }, mobile ? 4.0 : 4.5);
  }, [refs, getPathLen, pathPointPos, restPos, setRunning, setDone]);

  // ── Effect: init + kick off ───────────────────────────────────────────────

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const { heroRef, pathRef, moverRef, featherImgRef } = refs;

    if (reduced) {
      const hero = heroRef.current;
      const path = pathRef.current;
      if (hero) {
        hero.querySelectorAll<HTMLElement>('[data-line]').forEach((el) => {
          el.style.opacity = '1';
          el.style.transform = 'none';
        });
      }
      if (path) path.style.strokeDashoffset = '0';
      setDone();
      if (moverRef.current && featherImgRef.current) {
        const r = restPos();
        gsap.set(moverRef.current, { x: r.x, y: r.y, opacity: 1 });
        gsap.set(featherImgRef.current, { scale: 1, rotation: -8 });
      }
      return;
    }

    // Initialise path stroke dasharray
    const path = pathRef.current;
    if (path) {
      const len = path.getTotalLength();
      path.style.strokeDasharray = String(len);
      path.style.strokeDashoffset = String(len);
    }

    function go() {
      requestAnimationFrame(() => requestAnimationFrame(playIntro));
    }
    if (document.readyState === 'complete') {
      go();
    } else {
      window.addEventListener('load', go, { once: true });
    }

    // Resnap rest position on resize when idle
    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!isDesktop()) return;
        const tl = activeTlRef.current;
        if ((!tl || !tl.isActive()) && moverRef.current) {
          const r = restPos();
          gsap.set(moverRef.current, { x: r.x, y: r.y });
        }
      }, 180);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      clearTimeout(resizeTimer);
      activeTlRef.current?.kill();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { playIntro };
}
