export function Leftovers() {
  return (
    <section className="section" id="leftovers">
      <div className="section-kicker">03 — Remainder</div>
      <h2>YD and LD sit after Z. Every letter stays 14.</h2>
      <div className="prose">
        <p>
          26 × 14 = 364. A common year has one day left; a leap year has two. They
          are not absorbed into Z and they are not a 15-day fortnight. Day 365 is
          <strong> Year Day</strong> (<code>YD</code>). Day 366 is <strong>Leap Day</strong> (<code>LD</code>),
          leap years only. Both follow <code>Z14</code>.
        </p>
        <p>
          Neither belongs to a fortnight, month, or week. That invariant is the
          point: <code>R</code> is always 14 days, in every year.
        </p>
        <p>
          Gregorian 29 February is not Leap Day. In 2020 it is <code>2020E04</code>,
          an ordinary day in E. Chron <code>LD</code> is 31 December of a leap year.
        </p>
        <p>
          A01 is not yet pinned to Monday. Doing that now would desynchronize
          weekday names from the civil week. YD and LD are already outside the week,
          so that alignment is a later, global switch — not a rewrite of A–Z.
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
