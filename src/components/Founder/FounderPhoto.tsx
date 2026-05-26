const CHIPS = [
  { badge: 'M.E.', label: 'Communications' },
  { badge: '10+',  label: 'yrs teaching' },
  { badge: '3',    label: 'languages' },
] as const;

export function FounderPhoto() {
  return (
    <div className="md:col-span-5 reveal">
      <div className="founder-photo-wrap">
        <div className="founder-photo-frame">
          <img
            src="/sneka.png"
            alt="Portrait of M. Sneka, founder of The Oxford Academy"
            loading="lazy"
            className="w-full h-auto block"
          />
        </div>
      </div>

      <div className="founder-chips">
        {CHIPS.map(({ badge, label }) => (
          <span key={label} className="founder-chip">
            <span className="founder-chip-badge">{badge}</span>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
