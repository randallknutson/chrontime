export function Why() {
  return (
    <section className="section" id="use">
      <div className="section-kicker">06 — Properties</div>
      <h2>What the algebra is for.</h2>
      <p className="lede">
        The Gregorian year number stays. Months, sexagesimal time, and civil
        offsets are the parts that do not add. Chron Time replaces those parts.
      </p>
      <div className="why-grid">
        <article className="card">
          <h3>Display</h3>
          <p>
            Date is a letter and a day 1–14. Time is a day-fraction in chrons.
            Zone is a meridian, so it does not jump for DST. You stay in the same
            year as everyone else.
          </p>
        </article>
        <article className="card">
          <h3>Computation</h3>
          <p>
            Time of day is a real in [0, 1000). Zone is <code>round(longitude_west / 0.36)</code>.
            Equality is identical canonical strings. Durations add through
            fortnights, YD, and LD with no month-length table.
          </p>
        </article>
        <article className="card">
          <h3>Interop</h3>
          <p>
            Parallel to RFC 3339, not a replacement on the wire. Convert at the
            boundary. Store canonical GMT when two instants must compare equal.
            A civil offset is used only to find UTC; it is never the Chron zone.
          </p>
        </article>
      </div>
    </section>
  );
}
