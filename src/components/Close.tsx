const POINTS = [
  {
    h: "Nothing to give up",
    p: "2026 is still 2026, and 12 May is still 12 May. Talk to anyone in months and hours, and switch whenever you like.",
  },
  {
    h: "Start small",
    p: "Use it for one calendar, one team, or one app. Chron Time sits next to the clock you already have, so nobody else has to switch first.",
  },
  {
    h: "Set by the sun, not by law",
    p: "Your zone comes from where you stand. No government vote or daylight saving switch can ever move it.",
  },
];

export function Close() {
  return (
    <section className="section close" id="spec">
      <div className="wrap">
        <div className="section-head center">
          <p className="kicker">A better way to keep time</p>
          <h2>
            It runs <em>alongside</em> the clock you already have.
          </h2>
        </div>
        <div className="close-grid">
          {POINTS.map((pt) => (
            <article key={pt.h}>
              <h3>{pt.h}</h3>
              <p>{pt.p}</p>
            </article>
          ))}
        </div>
        <p className="center muted narrow-c">
          Try the converter above, read the full specification, or add Chron Time
          to your own app in a few lines.
        </p>
        <div className="actions center">
          <a className="btn primary" href="/spec.html">Read the spec</a>
          <a className="btn" href="https://github.com/randallknutson/chrontime.js">
            Get the library
          </a>
        </div>
      </div>
    </section>
  );
}
