export function Close() {
  return (
    <section className="section" id="spec">
      <div className="section-kicker">09 — Spec</div>
      <h2>This page is the tour. The spec is the contract.</h2>
      <div className="prose">
        <p>
          The grammar, the leap rule, the leftover days, the three profiles, and
          the sign of the zone are written up as a draft specification. There is a
          TypeScript library, <code>@chrontime/chrontime</code>, that implements it.
        </p>
        <p>
          Chron Time is meant to sit next to RFC 3339, not to erase it. A few
          questions are still open on purpose: whether A01 should eventually
          always be Monday, and whether the thirteen two-fortnight months should
          have names. Those are listed in the spec rather than implied as finished.
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
