export function FounderBio() {
  return (
    <div className="md:col-span-7">
      <h3
        className="font-display italic font-medium tracking-tight reveal"
        style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', lineHeight: 1.1 }}
      >
        M.&nbsp;Sneka,<br />founder &amp; lead mentor.
      </h3>
      <p className="mt-4 text-xs uppercase tracking-[0.16em] font-semibold text-ink-mute reveal">
        M.E. Communications
      </p>

      <div className="mt-7 space-y-5 text-ink-soft leading-relaxed reveal">
        <p>
          I started The Oxford Academy because I kept meeting brilliant people in Theni whose ideas
          were trapped behind a language they hadn&rsquo;t been given the chance to learn. I wanted
          to give them that chance.
        </p>
        <p>
          We&rsquo;re small on purpose. Our largest class is eight. I still teach the IELTS speaking
          sessions myself, and I read every demo registration personally. If you join us, you join a
          room &mdash; not a database.
        </p>
        <p>
          Come for one free demo. If it isn&rsquo;t the right fit, you&rsquo;ll leave with a coffee
          and a better answer about where to go next. That&rsquo;s a promise.
        </p>
      </div>

      <p className="mt-8 reveal">
        <span className="founder-signature">M. Sneka</span>
      </p>

      <hr className="mt-10 mb-8 border-ink/10" />

      <div className="grid grid-cols-3 gap-5 md:gap-8 reveal">
        {[
          { num: '10+', label: 'Years teaching' },
          { num: '2.4k', label: 'Students mentored' },
          { num: '87%', label: 'Demo to enrolment' },
        ].map(({ num, label }) => (
          <div key={label}>
            <p className="founder-stat-num">{num}</p>
            <p className="founder-stat-label">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
