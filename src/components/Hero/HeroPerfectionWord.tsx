import { forwardRef, useImperativeHandle, useRef } from 'react';

export interface PerfectionHandle {
  wrapRef: React.RefObject<HTMLSpanElement>;
  pathRef: React.RefObject<SVGPathElement>;
}

/**
 * The animated "perfection" word: an SVG path that GSAP draws like handwriting,
 * then cross-fades to the gradient italic text.
 */
export const HeroPerfectionWord = forwardRef<PerfectionHandle>((_, ref) => {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useImperativeHandle(ref, () => ({ wrapRef, pathRef }));

  return (
    <span
      className="perfection-wrap"
      id="perfectionWrap"
      aria-label="perfection"
      ref={wrapRef}
    >
      {/* Invisible sizer keeps the parent h1 line from collapsing */}
      <span className="perfection-sizer" aria-hidden="true">
        perfection
      </span>

      {/* Gradient italic — revealed after the stroke animation */}
      <span className="perfection-final hl-perfection" aria-hidden="true">
        perfection
      </span>

      {/* The hand-drawn SVG stroke that GSAP animates */}
      <svg
        className="perfection-overlay"
        id="perfectionSvg"
        viewBox="0 0 600 140"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="pfGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F39C12" />
            <stop offset="55%" stopColor="#E91E63" />
            <stop offset="100%" stopColor="#B14EAE" />
          </linearGradient>
        </defs>
        <path
          id="perfection-path"
          ref={pathRef}
          fill="none"
          stroke="url(#pfGrad)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 20 95 C 20 50, 35 18, 55 22 C 75 28, 65 80, 50 95 C 38 110, 42 130, 60 128 C 78 124, 68 100, 60 92 C 75 86, 90 88, 95 82 C 105 60, 120 60, 128 70 C 132 80, 118 86, 105 80 C 110 88, 122 90, 138 84 C 148 80, 155 60, 168 65 C 175 70, 172 84, 182 84 C 195 84, 215 18, 232 14 C 245 12, 245 45, 232 65 C 218 88, 220 115, 235 115 C 250 112, 258 95, 268 86 C 282 64, 298 64, 305 74 C 308 84, 295 88, 282 82 C 288 90, 300 92, 315 86 C 327 82, 342 65, 352 67 C 362 70, 362 84, 352 86 C 348 82, 355 80, 368 82 C 380 84, 400 18, 415 16 C 425 16, 423 48, 412 68 C 402 82, 405 88, 418 88 C 432 88, 440 70, 450 70 C 460 70, 460 86, 452 86 C 462 86, 478 60, 490 60 C 508 60, 510 84, 495 88 C 480 88, 472 78, 488 76 C 505 76, 518 82, 528 86 C 540 86, 552 65, 562 65 C 572 65, 572 86, 564 86 C 562 86, 575 80, 590 78"
        />
      </svg>
    </span>
  );
});

HeroPerfectionWord.displayName = 'HeroPerfectionWord';
