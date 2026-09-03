import { civilClockFromChrons, formatTime } from "../chron";
import { useClock } from "../context";

const MARKS = [
  { t: 0, label: "000", caption: "Midnight · start of the day" },
  { t: 250, label: "250", caption: "A quarter through · morning" },
  { t: 500, label: "500", caption: "Noon · halfway" },
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
      <div className="section-kicker">04 — The day</div>
      <h2>A thousand chrons, so you can see how far through the day you are.</h2>
      <div className="dial-wrap">
        <div>
          <div className="prose">
            <p>
              Once the year is a clean scale, the clock is still a pile of sixties:
              24 hours, 60 minutes, 60 seconds — and AM/PM, which writes 8:00 twice
              a day. None of those numbers tell you, at a glance, what fraction of
              the day has passed. 3:17 PM does not look like “a bit more than
              six tenths of the way through.”
            </p>
            <p>
              Chron Time cuts the day into 1000. Each tick is a <strong>chron</strong>,
              86.4 seconds — a little under a minute and a half. Midnight is{" "}
              <code>000</code>. Noon is <code>500</code>. Two hundred fifty is a
              quarter of the way through, morning. Seven hundred fifty is three
              quarters, evening. The number on the dial is the progress.
            </p>
            <p>
              Because it is decimal, the rest stays in your head. Ten chrons are
              14.4 minutes. A hundred chrons are 2.4 hours. Durations use the same
              unit: <code>50c</code> is fifty chrons, five percent of a day, whether
              you add it to a Tuesday or to Year Day. A Chron day always contains
              exactly 1000 chrons. The rare UTC leap second is not given its own
              instant; it maps to chron <code>999</code> of that date, not to
              midnight of the next.
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
