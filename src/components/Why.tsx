export function Why() {
  return (
    <section className="section" id="use">
      <div className="section-kicker">06 — Why use it</div>
      <h2>Same year as everyone else. Math that actually works.</h2>
      <p className="lede">
        Chron Time does not ask anyone to forget 2026. It asks whether months of
        uneven length, a clock that counts by sixties, and zones that move twice
        a year are earning their keep.
      </p>
      <div className="why-grid">
        <article className="card">
          <h3>To read</h3>
          <p>
            A date is a letter and a number from 1 to 14. Time is how far through
            the day you are. Your zone does not spring forward. You can still talk
            to someone on months and hours, because the year number matches and
            May 12 is still May 12.
          </p>
        </article>
        <article className="card">
          <h3>To compute</h3>
          <p>
            Time of day is one number, from 000 to 999. Zone is geography, not a
            DST flag. Two instants are the same instant when their canonical
            strings match. Adding a duration walks through fortnights, Year Day,
            and Leap Day without asking how long “a month” is.
          </p>
        </article>
        <article className="card">
          <h3>Alongside what exists</h3>
          <p>
            This is not a demand that ISO 8601 vanish from APIs tomorrow. Convert
            at the edges. Use Chron where a person is reading a clock or a duration
            is being added. Keep RFC 3339 on the wire where the world already
            speaks it. A civil offset is used only to find UTC — never as the
            Chron zone.
          </p>
        </article>
      </div>
    </section>
  );
}
