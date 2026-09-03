import {
  calendarFromDayOfYear,
  formatInterchange,
  formatTime,
  formatZone,
} from "../chron";
import { useClock } from "../context";
import { TickRing } from "./TickRing";

export function Hero() {
  const { now, place, located, locating, requestLocation } = useClock();
  const cal = calendarFromDayOfYear(now.year, now.dayOfYear);
  const zoneLabel = formatZone(now.zone);

  return (
    <section className="hero" id="now">
      <div className="hero-sky" />
      <svg className="meridians" viewBox="0 0 800 800" aria-hidden="true">
        <g fill="none" stroke="rgba(239,230,214,0.14)" strokeWidth="0.8">
          <ellipse cx="400" cy="400" rx="180" ry="260" />
          <ellipse cx="400" cy="400" rx="120" ry="260" />
          <ellipse cx="400" cy="400" rx="60" ry="260" />
          <ellipse cx="400" cy="400" rx="260" ry="180" />
          <ellipse cx="400" cy="400" rx="260" ry="120" />
          <line x1="400" y1="140" x2="400" y2="660" />
          <line x1="140" y1="400" x2="660" y2="400" />
          <circle cx="400" cy="400" r="260" />
        </g>
      </svg>
      <div className="hero-copy">
        <div className="hero-clock">
          <TickRing time={now.time} />
          <div className="hero-clock-face">
            <div className="hero-time">{formatTime(now.time, 1)}</div>
            <div className="hero-time-label">chrons</div>
          </div>
        </div>
        <div className="hero-date">
          <span className="hero-date-year">{now.year}</span>
          {cal.fortnight ? (
            <>
              <span className="hero-date-letter">{cal.fortnight}</span>
              <span className="hero-date-day">{cal.day}</span>
            </>
          ) : (
            <span className="hero-date-letter">{cal.day}</span>
          )}
          <span className="hero-date-dot">·</span>
          <span className="hero-date-place">{place.name}</span>
          <span className="hero-date-zone">{zoneLabel}</span>
        </div>
        <div className="hero-string">{formatInterchange(now)}</div>
        <h1>Twenty-six fortnights. One letter each.</h1>
        <p className="sub">
          A year the world already numbers, a day you can divide by tens, and a zone that
          is simply where you stand.
        </p>
        <div className="hero-actions">
          <a className="btn solid" href="#story">See why</a>
          <button className="btn" type="button" onClick={requestLocation}>
            {locating ? "Finding meridian…" : located ? "Located" : "Use my longitude"}
          </button>
        </div>
      </div>
      <div className="scroll-cue">Scroll the year</div>
    </section>
  );
}
