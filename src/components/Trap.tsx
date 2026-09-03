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
          <div className="section-kicker">01 — The tempting fix</div>
          <h2>Thirteen equal months almost work.</h2>
          <div className="prose">
            <p>
              A year of thirteen months, each four weeks long, is a beautiful machine.
              Every month is the same grid. Monday always opens the page. You could
              print the calendar once and live inside the copy.
            </p>
            <p>
              Reformers have been trying it for a century, usually by sliding an extra
              month — often named Sol — into the middle of the year. The geometry is
              clean. The social cost is not.
            </p>
            <p>
              The rest of the planet still says May 12. After the insertion, you do not.
              Two names for one sunrise is not a calendar you can live on. It is an
              argument with the civil date, every morning.
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
            May 12 in the old year is <em>not</em> May 12 in the new one.
          </div>
        </div>
      </div>
    </section>
  );
}
