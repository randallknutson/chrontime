import {
  calendarFromDayOfYear,
  formatInterchange,
  formatTime,
  formatZone,
  toUtc,
} from "../chron";
import { useClock } from "../context";

export function Hero() {
  const { now, place, located, locating, requestLocation } = useClock();
  const cal = calendarFromDayOfYear(now.year, now.dayOfYear);
  const utc = toUtc(now);
  const civilDate = utc.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const civilTime = utc.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  });
  const pct = now.time / 10;

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Chron Time · a draft standard</p>
          <h1>
            Time is harder than it <em>needs</em> to be.
          </h1>
          <p className="hero-sub">
            Months come in four lengths. The clock counts in sixties, then
            twelves, then twice. Time zones move when a government votes. Chron
            Time keeps the one part everyone agrees on, the year, and rebuilds the
            rest so dates and times are plain arithmetic.
          </p>
          <div className="actions">
            <a className="btn primary" href="#problem">See what’s broken</a>
            <a className="btn" href="#calendar">Skip to the fix</a>
          </div>
        </div>

        <div className="compare">
          <div className="compare-row old">
            <div className="compare-label">How we write it now</div>
            <div className="compare-date">{civilDate}</div>
            <div className="compare-time">{civilTime}</div>
            <div className="compare-note">
              Four month lengths · AM and PM · an offset set by law
            </div>
          </div>
          <div className="compare-row new">
            <div className="compare-label">
              Chron Time
              <span>
                {place.name} · {formatZone(now.zone)}
              </span>
            </div>
            <div className="compare-date mono">
              {now.year}
              <b>{cal.fortnight || cal.day}</b>
              {cal.fortnight ? cal.day : null}
            </div>
            <div className="compare-time mono">
              {formatTime(now.time, 1)}
              <small>chrons</small>
            </div>
            <div className="daybar" aria-hidden="true">
              <i style={{ width: `${pct}%` }} />
            </div>
            <div className="compare-note">
              {cal.fortnight
                ? `Fortnight ${cal.fortnight}, day ${cal.day} of 14 · ${pct.toFixed(1)}% through the day`
                : `${cal.day === "YD" ? "Year Day" : "Leap Day"} · ${pct.toFixed(1)}% through the day`}
            </div>
          </div>
          <div className="compare-foot">
            <code>{formatInterchange(now)}</code>
            <button className="link-btn" type="button" onClick={requestLocation}>
              {locating
                ? "Finding your meridian…"
                : located
                  ? `At ${place.region}`
                  : "Showing Greenwich · use my longitude"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
