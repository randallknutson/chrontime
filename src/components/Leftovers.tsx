export function Leftovers() {
  return (
    <section className="section" id="leftovers">
      <div className="section-kicker">03 — Leftover days</div>
      <h2>The extra days get names so the letters never stretch.</h2>
      <div className="prose">
        <p>
          Twenty-six fortnights account for 364 days. A common year has 365; a
          leap year has 366. Those leftovers could be stuffed into Z, making one
          fortnight 15 or 16 days. That would undo the design. A letter would no
          longer mean fourteen days, and you would be back to a special case at
          the end of every year.
        </p>
        <p>
          So the leftovers sit after Z and they have names. <strong>Year Day</strong>{" "}
          (<code>YD</code>) is day 365, every year. <strong>Leap Day</strong>{" "}
          (<code>LD</code>) is day 366, and only exists in a leap year. Neither one
          belongs to a fortnight, a month, or a week. A is always 14 days. R is
          always 14 days. Z is always 14 days.
        </p>
        <p>
          This is easy to get backwards. Chron Leap Day is not February 29.
          Gregorian 29 February is an ordinary day in fortnight E — in 2020 it is{" "}
          <code>2020E04</code>. Leap Day is the extra day at the <em>end</em> of a
          leap year, 31 December, after Year Day.
        </p>
        <p>
          Fortnights do not yet start on Monday. They could: Year Day and Leap Day
          already stand outside the week, waiting for that. Doing it now would
          make “Wednesday” mean a different civil weekday than it does on your
          phone. Until both systems can move together, weekdays stay hitched to
          the civil week so the two counts do not drift apart.
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
