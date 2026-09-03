const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Sol",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export function Trap() {
  return (
    <section className="section" id="story">
      <div className="grid-2">
        <div>
          <div className="section-kicker">01 — Thirteen months</div>
          <h2>Equal months look perfect until you try to live with them.</h2>
          <div className="prose">
            <p>
              The usual complaint about the Gregorian calendar is that months are
              not a unit. Some have 28 days, some 31, February sometimes 29. You
              cannot add “three months” and know how many days you moved. A
              long-running answer is to give the year thirteen months of 28 days
              each: four weeks, always the same grid, Monday always day 1. You
              could design the page once and reuse it all year.
            </p>
            <p>
              Thirteen times 28 is 364, so a common year still has a leftover day,
              and a leap year two. That part is solvable. The hard part is where
              the thirteenth month goes. The usual proposal inserts it in the
              middle of the year and names it something like Sol.
            </p>
            <p>
              After that insertion, May 12 is no longer May 12. The year number is
              still 2026, but every civil date from the insertion onward has
              shifted. Anyone still speaking Gregorian months is talking about a
              different day than you are. A calendar you can live on has to sit
              next to the one the rest of the world uses, not fight it every
              morning.
            </p>
            <p>
              Chron Time’s first decision is therefore conservative: keep the
              Gregorian year, keep the Gregorian leap rule, and keep 1 January as
              day 1. If the written unit is going to change, it has to be smaller
              than a month, so May 12 stays May 12.
            </p>
          </div>
        </div>
        <div className="trap-board" aria-hidden="true">
          <div className="month-row">
            {MONTHS.slice(0, 6).map((name) => (
              <div key={name} className={`month-cell${name === "May" ? " fracture" : ""}`}>
                <div className="name">{name}</div>
                <div className="weeks"><span /><span /><span /><span /></div>
              </div>
            ))}
          </div>
          <div className="month-row sol-row">
            <div className="month-cell sol">
              <div className="name">Sol</div>
              <div className="weeks"><span /><span /><span /><span /></div>
            </div>
          </div>
          <div className="month-row">
            {MONTHS.slice(7).map((name) => (
              <div key={name} className="month-cell">
                <div className="name">{name}</div>
                <div className="weeks"><span /><span /><span /><span /></div>
              </div>
            ))}
          </div>
          <div className="crack">
            Insert Sol, and May 12 is no longer May 12.
          </div>
        </div>
      </div>
    </section>
  );
}
