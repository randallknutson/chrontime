import {
  calendarFromDayOfYear,
  formatCanonical,
  formatInterchange,
  formatPresentation,
  formatTime,
  formatYear,
  formatZone,
  toGmt,
} from "../chron";
import { useClock } from "../context";

const KINDS = [
  { kind: "Instant", sample: "2026R04:659.472+269", note: "A moment. Has a colon." },
  { kind: "Date", sample: "2026R04", note: "A calendar day, not midnight." },
  { kind: "Time of day", sample: "500Z", note: "Noon GMT, every day." },
  { kind: "Duration", sample: "3d200c", note: "A span. Ends in c or d." },
];

export function Developers() {
  const { now } = useClock();
  const cal = calendarFromDayOfYear(now.year, now.dayOfYear);
  const gmt = toGmt(now);
  const parts = [
    { val: formatYear(now.year, true), lbl: "Year" },
    ...(cal.fortnight
      ? [
          { val: cal.fortnight, lbl: "Fortnight", accent: true },
          { val: String(cal.day).padStart(2, "0"), lbl: "Day 1–14" },
        ]
      : [{ val: String(cal.day), lbl: cal.day === "YD" ? "Year Day" : "Leap Day", accent: true }]),
  ];

  return (
    <section className="section dev" id="developers">
      <div className="wrap">
        <div className="act-head">
          <span className="act-num">↳</span>
          <span className="act-name">Put together</span>
        </div>
        <div className="section-head">
          <h2>One string, read left to right.</h2>
          <p className="lede">
            Year, fortnight, day, then how far through the local day, then the
            zone. Add the last two fields and you have GMT. This one is live.
          </p>
        </div>

        <div className="anatomy" aria-label="Parts of a Chron string">
          {parts.map((p) => (
            <div className={`part${p.accent ? " accent" : ""}`} key={p.lbl}>
              <span className="val">{p.val}</span>
              <span className="lbl">{p.lbl}</span>
            </div>
          ))}
          <div className="part colon">
            <span className="val">:</span>
          </div>
          <div className="part">
            <span className="val">{formatTime(now.time, 3)}</span>
            <span className="lbl">Chrons</span>
          </div>
          <div className="part accent">
            <span className="val">{formatZone(now.zone, false)}</span>
            <span className="lbl">Zone</span>
          </div>
        </div>
        <p className="center muted mono small">
          {formatTime(now.time, 3)} {now.zone < 0 ? "−" : "+"} {String(Math.abs(now.zone)).padStart(3, "0")} ={" "}
          {formatTime(gmt.time, 3)}Z
        </p>

        <div className="dev-grid">
          <div className="dev-card">
            <h3>Three profiles, one instant</h3>
            <table className="profiles">
              <tbody>
                <tr>
                  <th>Presentation</th>
                  <td>
                    <code>{formatPresentation(now)}</code>
                    <span>For people. Short day, zone optional when the meridian is understood.</span>
                  </td>
                </tr>
                <tr>
                  <th>Interchange</th>
                  <td>
                    <code>{formatInterchange(now)}</code>
                    <span>For storage and the wire. Padded, and a zone is required.</span>
                  </td>
                </tr>
                <tr>
                  <th>Canonical</th>
                  <td>
                    <code>{formatCanonical(now)}</code>
                    <span>For equality. Reduced to GMT. Same instant if and only if same text.</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="dev-card">
            <h3>Four kinds of value</h3>
            <ul className="kinds">
              {KINDS.map((k) => (
                <li key={k.kind}>
                  <code>{k.sample}</code>
                  <span>
                    <b>{k.kind}.</b> {k.note}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <pre className="snippet">
          <span className="c"># TypeScript reference implementation</span>
          {"\nnpm install @chrontime/chrontime\n\n"}
          {"import { ChronInstant, fromUtc, zoneFromLongitude } from '@chrontime/chrontime';\n\n"}
          {"ChronInstant.parse('2026R04:659.472+269').toCanonical();\n"}
          <span className="c">{"// '2026R04:928.472Z'"}</span>
          {"\n\nfromUtc(new Date('2020-02-09T12:00:00Z')).toCanonical();\n"}
          <span className="c">{"// '2020C12:500Z'"}</span>
          {"\n\nzoneFromLongitude(96.9);\n"}
          <span className="c">{"// 269"}</span>
        </pre>
      </div>
    </section>
  );
}
