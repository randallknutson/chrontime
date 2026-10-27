const POINTS = [
  {
    h: "Same year as everyone else",
    p: "2026 is still 2026, and 12 May is still 12 May. You can talk to anyone in months and hours, and convert when you need to.",
  },
  {
    h: "Convert at the edges",
    p: "Keep RFC 3339 on the wire where systems already speak it. Use Chron where a person reads a clock or code adds a duration.",
  },
  {
    h: "Geography, not law",
    p: "A civil offset is only ever used to find UTC. It never becomes the Chron zone, so daylight saving can’t sneak back in.",
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
          The grammar, leap rule, spare days, profiles, and zone sign are written
          up as a draft specification, with a TypeScript implementation. Two
          questions are deliberately open: whether A1 should always be a Monday,
          and whether the thirteen two-fortnight months should get names.
        </p>
        <div className="actions center">
          <a className="btn primary" href="/spec.html">Read the spec</a>
          <a className="btn" href="https://github.com/randallknutson/chrontime.js">
            @chrontime/chrontime
          </a>
          <a className="btn" href="https://github.com/randallknutson/chrontime">
            Site source
          </a>
        </div>
      </div>
    </section>
  );
}
