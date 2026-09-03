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
          <div className="section-kicker">01 — Compatibility</div>
          <h2>Thirteen 28-day months break civil dates.</h2>
          <div className="prose">
            <p>
              13 × 28 = 364. Each month is four weeks, every month is the same
              grid, and Monday can always be day 1. That is why 13-month calendars
              keep getting proposed.
            </p>
            <p>
              The extra month has to be inserted — usually mid-year, often under
              the name Sol. After that insertion, 12 May is no longer 12 May. The
              year number is shared; the ordinal dates are not. Two labels for one
              Gregorian day is not a system you can run next to the civil calendar.
            </p>
            <p>
              Chron Time keeps the Gregorian year, the leap rule, and 1 January as
              day 1. The unit that changes is smaller than a month.
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
            After Sol, 12 May Gregorian maps to a different ordinal.
          </div>
        </div>
      </div>
    </section>
  );
}
