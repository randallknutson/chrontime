import { civilClockFromChrons, formatTime } from "../chron";
import { useClock } from "../context";

const HOURS = [
  { h: 0, label: "12 AM" },
  { h: 6, label: "6 AM" },
  { h: 12, label: "12 PM" },
  { h: 18, label: "6 PM" },
  { h: 24, label: "12 AM" },
];

const UNITS = [
  { n: "1", unit: "chron", eq: "86.4 seconds", note: "About a minute and a half" },
  { n: "10", unit: "chrons", eq: "14.4 minutes", note: "About a quarter hour" },
  { n: "100", unit: "chrons", eq: "2.4 hours", note: "A tenth of the day" },
  { n: "1000", unit: "chrons", eq: "24 hours", note: "One day" },
];

export function Clock() {
  const { now, place } = useClock();
  const pct = now.time / 10;

  return (
    <section className="section act" id="clock">
      <div className="wrap">
        <div className="act-head">
          <span className="act-num">II</span>
          <span className="act-name">The clock</span>
        </div>
        <div className="section-head">
          <h2>The clock counts in sixties, then twelves, then twice.</h2>
          <p className="lede">
            Sixty seconds, sixty minutes, twenty-four hours, and AM and PM so that
            8:00 happens twice. None of those numbers tell you how much of the day
            is gone.
          </p>
        </div>
        <div className="prose narrow">
          <p>
            Chron Time divides the day into 1000 <b>chrons</b>. Midnight is{" "}
            <code>000</code>. Noon is <code>500</code>. <code>750</code> is three
            quarters of the way through, evening. The time <em>is</em> the progress
            through the day, so there’s nothing to convert.
          </p>
        </div>

        <div className="dayruler">
          <div className="dayruler-read">
            <div>
              <span className="dayruler-big mono">{formatTime(now.time, 1)}</span>
              <span className="muted"> chrons at {place.name}</span>
            </div>
            <div className="muted mono">{civilClockFromChrons(now.time)} on a 24-hour clock</div>
          </div>
          <div className="dayruler-scale">
            <div className="dr-labels top">
              {[0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000].map((c) => (
                <span key={c} style={{ left: `${c / 10}%` }} className={c % 500 === 0 ? "major" : undefined}>
                  {c === 1000 ? "000" : String(c).padStart(3, "0")}
                </span>
              ))}
            </div>
            <div className="dr-track">
              <div className="dr-fill" style={{ width: `${pct}%` }} />
              {Array.from({ length: 101 }, (_, i) => (
                <i key={i} style={{ left: `${i}%` }} className={i % 10 === 0 ? "major" : undefined} />
              ))}
              <div className="dr-now" style={{ left: `${pct}%` }} />
            </div>
            <div className="dr-labels bottom">
              {HOURS.map((h) => (
                <span key={h.h} style={{ left: `${(h.h / 24) * 100}%` }}>
                  {h.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="units">
          {UNITS.map((u) => (
            <div className="unit" key={u.n}>
              <div className="unit-n mono">
                {u.n}
                <small>{u.unit}</small>
              </div>
              <div className="unit-eq">{u.eq}</div>
              <div className="unit-note">{u.note}</div>
            </div>
          ))}
        </div>

        <div className="cols">
          <div className="prose">
            <p>
              Because it’s decimal, durations work the same way. <code>50c</code>{" "}
              is fifty chrons, five percent of a day, whether you add it to a
              Tuesday or to Year Day. <code>3d200c</code> is three days and two
              hundred chrons. Adding one never asks how long a month is.
            </p>
          </div>
          <div className="prose">
            <p className="muted">
              Every day has exactly 1000 chrons, with no exceptions. No day is
              short an hour in spring or long an hour in autumn, and even a leap
              second never adds a 1001st.
            </p>
          </div>
        </div>

        <div className="answer">
          <span className="answer-label">Back to the question</span>
          <p>
            How far through the day is 3:17 PM? It’s <code>636.8</code>, which
            is 63.7%. Midnight or noon? Midnight is <code>000</code> and noon is{" "}
            <code>500</code>, and each happens once a day.
          </p>
        </div>
      </div>
    </section>
  );
}
