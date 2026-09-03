export function Why() {
  return (
    <section className="section" id="use">
      <div className="section-kicker">06 — What it is for</div>
      <h2>A calendar you can think in. A time you can add.</h2>
      <p className="lede">
        Chron Time does not ask the world to forget 2026. It asks whether the rest
        of the machinery — irregular months, sexagesimal clocks, political zones —
        is earning its keep.
      </p>
      <div className="why-grid">
        <article className="card">
          <h3>For people</h3>
          <p>
            The date is a letter and a number from 1 to 14. The time is how far
            through the day you are. Nothing jumps an hour because a committee
            met. You can live in the same year as everyone else without living in
            their clutter.
          </p>
        </article>
        <article className="card">
          <h3>For software</h3>
          <p>
            Time of day is a real number in [0, 1000). Zone is longitude, stable.
            Equality is identical canonical strings. Durations add through
            fortnights, Year Day, and Leap Day without a month-length table.
          </p>
        </article>
        <article className="card">
          <h3>For the wire</h3>
          <p>
            It is a parallel representation, not a demand that RFC 3339 disappear.
            Convert at the edges. Store canonical GMT when two instants must be
            the same instant. Keep civil timestamps where the world still needs them.
          </p>
        </article>
      </div>
    </section>
  );
}
