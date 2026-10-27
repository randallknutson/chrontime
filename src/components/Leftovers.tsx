export function Leftovers() {
  return (
    <section className="section tight" id="leftovers">
      <div className="wrap">
        <div className="cols">
          <div>
            <div className="section-head">
              <h2>The spare days get names, so no letter ever stretches.</h2>
            </div>
            <div className="prose">
              <p>
                Twenty-six fortnights cover 364 days. A common year has 365 and a
                leap year 366. Stuffing the extras into Z would make one fortnight
                15 or 16 days long and bring back the special case. Instead they
                sit after Z with their own names. <b>Year Day</b> (
                <code>YD</code>) is day 365, every year. <b>Leap Day</b> (
                <code>LD</code>) is day 366, only in leap years. Neither belongs
                to a fortnight, a month, or a week.
              </p>
              <p>
                Chron Leap Day is not February 29. Gregorian 29 February is an
                ordinary day in fortnight E (in 2020 it was <code>2020E4</code>).
                Leap Day is the extra day at the very end of a leap year.
              </p>
              <p className="muted">
                Fortnights don’t start on Monday yet. Since Year Day and Leap Day
                already sit outside the week, they could. For now weekdays stay
                tied to the civil week so the two don’t drift apart. The spec lists
                this as an open question.
              </p>
            </div>
          </div>
          <div className="yd-stack">
            <div className="yd-card">
              <span className="yd-top">Day 364</span>
              <span className="yd-big">Z14</span>
              <span className="yd-note">Last day of the last letter</span>
            </div>
            <div className="yd-card on">
              <span className="yd-top">Day 365</span>
              <span className="yd-big">YD</span>
              <span className="yd-note">Year Day · every year</span>
            </div>
            <div className="yd-card on">
              <span className="yd-top">Day 366</span>
              <span className="yd-big">LD</span>
              <span className="yd-note">Leap Day · leap years only</span>
            </div>
            <div className="yd-card ghost">
              <span className="yd-top">Not Leap Day</span>
              <span className="yd-big">E4</span>
              <span className="yd-note">29 Feb 2020 is an ordinary day</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
