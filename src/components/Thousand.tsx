import { civilClockFromChrons, formatTime } from "../chron";
import { useClock } from "../context";

const MARKS = [
  { t: 0, label: "000", caption: "Midnight" },
  { t: 250, label: "250", caption: "A quarter through · morning" },
  { t: 500, label: "500", caption: "Noon" },
  { t: 750, label: "750", caption: "Three quarters · evening" },
];

export function Thousand() {
  const { now } = useClock();
  const size = 420;
  const cx = size / 2;
  const cy = size / 2;
  const r = 168;
  const angle = (now.time / 1000) * Math.PI * 2 - Math.PI / 2;
  const hx = cx + Math.cos(angle) * (r - 28);
  const hy = cy + Math.sin(angle) * (r - 28);

  const ticks = [];
  for (let i = 0; i < 100; i += 1) {
    const a = (i / 100) * Math.PI * 2 - Math.PI / 2;
    const major = i % 10 === 0;
    const inner = major ? r - 16 : r - 8;
    ticks.push(
      <line
        key={i}
        x1={cx + Math.cos(a) * inner}
        y1={cy + Math.sin(a) * inner}
        x2={cx + Math.cos(a) * r}
        y2={cy + Math.sin(a) * r}
        stroke={major ? "#e0b15b" : "rgba(239,230,214,0.28)"}
        strokeWidth={major ? 1.6 : 0.7}
      />,
    );
  }

  return (
    <section className="section" id="day">
      <div className="section-kicker">04 — Then the clock was still ugly</div>
      <h2>A thousand steps from midnight to midnight.</h2>
      <div className="dial-wrap">
        <div>
          <div className="prose">
            <p>
              Once the year was a clean scale, the day was still a heap of sixties.
              Morning and evening share the same numerals. You cannot glance at a
              civil clock and see how much of the day is gone.
            </p>
            <p>
              Chron Time cuts the day into <strong>1000 chrons</strong>. One chron is
              86.4 seconds. 000 is midnight. 500 is noon. 250 is a quarter of the way
              through — morning. 750 is evening. The number <em>is</em> the progress.
            </p>
            <p>
              10 chrons are 14.4 minutes. 100 chrons are 2.4 hours. Durations are
              the same unit: <code>50c</code> is five percent of a day, every day.
            </p>
          </div>
          <div className="markers">
            {MARKS.map((m) => (
              <div className="marker" key={m.t}>
                <b>{m.label}</b>
                <span>{m.caption}</span>
              </div>
            ))}
          </div>
        </div>
        <svg className="dial-svg" viewBox={`0 0 ${size} ${size}`} role="img" aria-label="Chron dial">
          <circle className="dial-face" cx={cx} cy={cy} r={r + 8} />
          {ticks}
          <text x={cx} y={cy - 36} textAnchor="middle" fill="#e0b15b" fontFamily="IBM Plex Mono" fontSize="14">
            {formatTime(now.time, 1)}
          </text>
          <text x={cx} y={cy - 16} textAnchor="middle" fill="#857b6c" fontFamily="Outfit" fontSize="11" letterSpacing="2">
            LOCAL CHRONS
          </text>
          <text x={cx} y={cy + 28} textAnchor="middle" fill="#c4b8a4" fontFamily="IBM Plex Mono" fontSize="13">
            {civilClockFromChrons(now.time)}
          </text>
          <text x={cx} y={cy + 46} textAnchor="middle" fill="#857b6c" fontFamily="Outfit" fontSize="10" letterSpacing="1.5">
            24-HOUR EQUIVALENT
          </text>
          <line className="dial-hand" x1={cx} y1={cy} x2={hx} y2={hy} />
          <circle className="dial-hub" cx={cx} cy={cy} r="5" />
          <text x={cx} y={cy - r - 16} textAnchor="middle" fill="#857b6c" fontFamily="IBM Plex Mono" fontSize="11">000</text>
          <text x={cx + r + 18} y={cy + 4} textAnchor="start" fill="#857b6c" fontFamily="IBM Plex Mono" fontSize="11">250</text>
          <text x={cx} y={cy + r + 24} textAnchor="middle" fill="#857b6c" fontFamily="IBM Plex Mono" fontSize="11">500</text>
          <text x={cx - r - 18} y={cy + 4} textAnchor="end" fill="#857b6c" fontFamily="IBM Plex Mono" fontSize="11">750</text>
        </svg>
      </div>
    </section>
  );
}
