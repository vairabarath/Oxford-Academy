const STATS = [
  { value: '10+', label: 'Years', srLabel: 'Years of teaching' },
  { value: '2,400+', label: 'Students', srLabel: 'Students taught' },
  { value: '14', label: 'Programs', srLabel: 'Programs offered' },
  { value: '3', label: 'Languages', srLabel: 'Languages taught' },
] as const;

export function HeroStats() {
  return (
    <dl
      className="mt-8 md:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-5 md:gap-7 max-w-2xl border-t border-ink/10 pt-5 md:pt-7"
      data-line=""
    >
      {STATS.map(({ value, label, srLabel }) => (
        <div key={label}>
          <dt className="sr-only">{srLabel}</dt>
          <dd className="font-display text-2xl md:text-[1.8rem] text-ink leading-none">
            {value.replace('+', '')}
            {value.includes('+') && (
              <span className="text-ink-mute font-normal">+</span>
            )}
          </dd>
          <p className="mt-1.5 text-[0.7rem] tracking-[0.16em] uppercase text-ink-mute font-medium">
            {label}
          </p>
        </div>
      ))}
    </dl>
  );
}
