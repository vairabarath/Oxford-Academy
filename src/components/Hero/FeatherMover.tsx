import { forwardRef, useImperativeHandle, useRef } from 'react';

export interface FeatherMoverHandle {
  moverRef: React.RefObject<HTMLDivElement>;
  imgRef: React.RefObject<HTMLImageElement>;
}

/**
 * Absolutely-positioned container + feather image that GSAP translates along
 * the perfection-path during the cinematic intro, then settles at the rest position.
 */
export const FeatherMover = forwardRef<FeatherMoverHandle>((_, ref) => {
  const moverRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useImperativeHandle(ref, () => ({ moverRef, imgRef }));

  return (
    <div
      id="feather-mover"
      ref={moverRef}
      className="absolute pointer-events-none"
      style={{ left: 0, top: 0, width: 0, height: 0, zIndex: 25, opacity: 0 }}
      aria-hidden="true"
    >
      <img
        id="feather"
        ref={imgRef}
        src="/feather.svg"
        alt="A peacock-feather quill — the mascot of The Oxford Academy"
        className="absolute"
        style={{
          width: '260px',
          height: '469.73px',
          left: '-26.96px',
          top: '-462.55px',
          transformOrigin: '10.37% 98.48%',
          maxWidth: 'none',
          filter:
            'drop-shadow(0 26px 40px rgba(233,30,99,0.30)) drop-shadow(0 0 42px rgba(255,193,7,0.20))',
        }}
      />
    </div>
  );
});

FeatherMover.displayName = 'FeatherMover';
