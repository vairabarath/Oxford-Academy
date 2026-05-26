import { useEffect } from 'react';

/**
 * Registers a single IntersectionObserver that watches every `.reveal` element
 * on the page and adds `.is-revealed` once it enters the viewport.
 * Siblings that enter together get a small stagger via the `--reveal-delay` CSS var.
 *
 * Call this once in App.tsx after all sections have mounted.
 */
export function useScrollReveal() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = document.querySelectorAll<HTMLElement>('.reveal');

    if (reduced || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        // Group entries by their immediate parent so siblings stagger together
        const byParent = new Map<Element, HTMLElement[]>();
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const parent = entry.target.parentElement as Element;
          if (!byParent.has(parent)) byParent.set(parent, []);
          byParent.get(parent)!.push(entry.target as HTMLElement);
        });

        byParent.forEach((els) => {
          els.forEach((el, i) => {
            const delay = Math.min(i, 3) * 0.04;
            el.style.setProperty('--reveal-delay', `${delay}s`);
            el.classList.add('is-revealed');
            io.unobserve(el);
          });
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -3% 0px' },
    );

    items.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
}
