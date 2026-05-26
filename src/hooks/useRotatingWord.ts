import { useState, useEffect, useRef } from 'react';
import { ROTATING_WORDS } from '@/data/marqueeWords';

export type RotatingWordPhase = 'visible' | 'fading-out' | 'entering';

interface RotatingWordState {
  word: string;
  phase: RotatingWordPhase;
}

const HOLD_MS = 2200;
const FADE_MS = 350;
const ENTER_MS = 20; // one rAF tick to force reflow before animating in

/**
 * Drives the fade-swap rotating-word animation in the Spoken English band.
 * Returns the current word and CSS phase class so the component stays declarative.
 */
export function useRotatingWord(): RotatingWordState {
  const [state, setState] = useState<{ index: number; phase: RotatingWordPhase }>({
    index: 0,
    phase: 'visible',
  });
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    function scheduleNext() {
      timerRef.current = setTimeout(() => {
        // 1. Fade out current word
        setState((s) => ({ ...s, phase: 'fading-out' }));

        timerRef.current = setTimeout(() => {
          // 2. Snap to new word below baseline (no transition)
          setState((s) => ({ index: (s.index + 1) % ROTATING_WORDS.length, phase: 'entering' }));

          timerRef.current = setTimeout(() => {
            // 3. Transition in
            setState((s) => ({ ...s, phase: 'visible' }));
            scheduleNext();
          }, ENTER_MS);
        }, FADE_MS);
      }, HOLD_MS);
    }

    scheduleNext();
    return () => clearTimeout(timerRef.current);
  }, []);

  return { word: ROTATING_WORDS[state.index], phase: state.phase };
}
