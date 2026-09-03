export function Leftovers() {
  return (
    <section className="section" id="leftovers">
      <div className="section-kicker">03 — Fourteen means fourteen</div>
      <h2>The leftover days get names, not extra length.</h2>
      <div className="prose">
        <p>
          26 × 14 is 364. A common year has one day left over; a leap year has two.
          Those days are not squeezed into Z, and they are not a short fortnight.
          They sit after the alphabet: <strong>Year Day</strong>, and in a leap year
          <strong> Leap Day</strong>.
        </p>
        <p>
          They belong to no fortnight, month, or week. That is the point. A letter
          always means fourteen days, in every year.
        </p>
        <p>
          Gregorian 29 February is not Leap Day. In 2020 it is an ordinary Thursday
          in fortnight E — <code>2020E04</code>. Chron Leap Day is the last day of a
          leap year, 31 December, written <code>LD</code>.
        </p>
        <p>
          Fortnights do not yet open on Monday. They could — Year Day and Leap Day
          already stand outside the week, ready for that. Until a system like this
          is the world’s calendar, weekdays stay hitched to the civil week so the
          two counts do not drift apart.
        </p>
      </div>
      <div className="yd-row">
        <div className="yd-card">
          <div className="top">Day 364</div>
          <div className="big">Z14</div>
          <div className="note">Last letter of the year</div>
        </div>
        <div className="yd-card gold">
          <div className="top">Day 365</div>
          <div className="big">YD</div>
          <div className="note">Year Day · every year</div>
        </div>
        <div className="yd-card gold">
          <div className="top">Day 366</div>
          <div className="big">LD</div>
          <div className="note">Leap Day · leap years only</div>
        </div>
        <div className="yd-card ghost">
          <div className="top">Not this</div>
          <div className="big">E04</div>
          <div className="note">29 Feb 2020 is ordinary</div>
        </div>
      </div>
    </section>
  );
}
