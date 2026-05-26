import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  heading: ReactNode;
  lead?: string;
}

/**
 * Reusable two-column section header.
 *
 * Layout:
 *   Left  (col-span-8) — eyebrow pill + h2
 *   Right (col-span-4) — lead paragraph
 *
 * Followed by a full-width <hr>.
 * Used at the top of every major section.
 */
export function SectionHeader({ eyebrow, heading, lead }: SectionHeaderProps) {
  return (
    <>
      <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end">
        <div className="md:col-span-8">
          <p className="reveal inline-flex items-center gap-2 text-magenta font-semibold uppercase tracking-[0.18em] text-xs">
            <span className="w-6 h-px bg-magenta inline-block" />
            {eyebrow}
          </p>
          <h2
            className="font-display italic font-medium tracking-tight mt-3 text-balance reveal"
            style={{ fontSize: 'clamp(2rem, 4.4vw, 3.6rem)', lineHeight: 1.06 }}
          >
            {heading}
          </h2>
        </div>

        {lead && (
          <div className="md:col-span-4 reveal">
            <p className="text-ink-soft leading-relaxed">{lead}</p>
          </div>
        )}
      </div>

      <hr className="mt-8 md:mt-10 border-ink/10" />
    </>
  );
}
