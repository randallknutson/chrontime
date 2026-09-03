export function Close() {
  return (
    <section className="section" id="spec">
      <div className="section-kicker">09 — A living draft</div>
      <h2>The alphabet is the calendar. The rest is the equation.</h2>
      <div className="prose">
        <p>
          Chron Time is specified as a notation: presentation for people,
          interchange for machines, canonical for equality. The grammar, the leap
          rule, the leftover days, and the sign of the zone are in the draft spec.
        </p>
        <p>
          There is a TypeScript implementation. This page is an invitation to try
          the system on, not a claim that the world has already switched.
        </p>
      </div>
      <div className="close-links">
        <a className="btn solid" href="/spec.html">Read the spec</a>
        <a className="btn" href="https://github.com/randallknutson/chrontime.js">
          @chrontime/chrontime
        </a>
        <a className="btn" href="https://github.com/randallknutson/chrontime">
          This site
        </a>
      </div>
    </section>
  );
}
