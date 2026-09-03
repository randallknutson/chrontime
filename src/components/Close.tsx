export function Close() {
  return (
    <section className="section" id="spec">
      <div className="section-kicker">09 — Spec</div>
      <h2>Draft notation. Normative grammar in the spec.</h2>
      <div className="prose">
        <p>
          Profiles, the leap rule, leftover days, the POSIX scale, and the zone
          sign are defined in the draft. A TypeScript implementation is{" "}
          <code>@chrontime/chrontime</code>.
        </p>
        <p>
          Chron Time is a parallel representation, not a claim that RFC 3339 is
          going away. The open items — Monday-aligned A01, month names — are listed
          in the spec, not papered over here.
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
