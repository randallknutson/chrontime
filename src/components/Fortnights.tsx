import { useState } from "react";
import {
  calendarFromDayOfYear,
  formatGregorian,
  formatGregorianShort,
  fortnightRange,
  gregorianDayOfYear,
} from "../chron";
import { useClock } from "../context";
import { FORTNIGHTS, Rulers } from "./Rulers";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export function Fortnights() {
  const { now } = useClock();
  const [picked, setPicked] = useState(() => isoDate(new Date()));
  const [hover, setHover] = useState<string | null>(null);

  const [y, m, d] = picked.split("-").map(Number);
  const year = y || now.year;
  let pickedDoy = now.dayOfYear;
  try {
    pickedDoy = gregorianDayOfYear(year, m, d);
  } catch {
    // keep today while the date field is half-typed
  }
  const pickedCal = calendarFromDayOfYear(year, pickedDoy);
  const active = hover || pickedCal.fortnight || null;
  const range = active ? fortnightRange(year, active) : null;

  return (
    <section className="section" id="fortnights">
      <div className="wrap">
        <div className="section-head">
          <h2>Twenty-six fortnights fit where thirteen months don’t.</h2>
          <p className="lede">
            Keep the even block, but make it smaller than a month and give it a
            name nobody is using. Fourteen days, written as a letter.
          </p>
        </div>
        <div className="cols">
          <div className="prose">
            <p>
              A fortnight is 14 days. There are 26 of them in 364 days, and 26
              letters in the alphabet. <b>A</b> is the first fourteen days of the
              year, starting 1 January. <b>B</b> is the next fourteen. <b>Z</b>{" "}
              is days 351 through 364. A date is a letter and a number from 1 to
              14: <code>2026J6</code>.
            </p>
            <p>
              Because the letters don’t collide with month names, nothing has to
              be renamed. 12 May 2026 is still 12 May 2026. It is <em>also</em>{" "}
              <code>2026J6</code>, the same way it is also day 132. You can use
              both, or switch one calendar at a time.
            </p>
            <p>
              Two weeks is a unit people already run their lives on. Biweekly
              pay means 26 paychecks a year. Software teams plan in two-week
              sprints. Rent and bills in Australia and the UK often run
              fortnightly. Chron Time gives that block a name.
            </p>
          </div>
          <ul className="facts">
            <li>
              <b>Every letter is 14 days.</b> Day of year is (letter − A) × 14 +
              day. No table of month lengths.
            </li>
            <li>
              <b>Thirteen months, if you want them.</b> Pair the letters: AB, CD,
              … YZ, each exactly 28 days.
            </li>
            <li>
              <b>Clean halves.</b> A–M is the first 182 days, N–Z the second.
              N1 starts the back half of the year.
            </li>
          </ul>
        </div>

        <Rulers
          tone="agree"
          lowerName="Chron Time · 26 fortnights of 14 days"
          lower={FORTNIGHTS}
          markers={[
            { doy: 185, top: "4 Jul", bottom: "N3" },
            { doy: 359, top: "25 Dec", bottom: "Z9" },
          ]}
          caption="Same day, two names that never collide. The 4th of July is still the 4th of July."
        />

        <div className="instrument">
          <div className="instrument-head">
            <h3>Find any date</h3>
            <label className="date-field">
              Civil date
              <input type="date" value={picked} onChange={(e) => setPicked(e.target.value)} />
            </label>
          </div>
          <div className="scale-scroll">
            <div className="scale" role="list">
              {LETTERS.map((letter, i) => (
                <button
                  key={letter}
                  type="button"
                  role="listitem"
                  className={`fort${active === letter ? " active" : ""}${Math.floor(i / 2) % 2 ? " pair-alt" : ""}`}
                  onMouseEnter={() => setHover(letter)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(letter)}
                  onBlur={() => setHover(null)}
                  onClick={() => {
                    const r = fortnightRange(year, letter);
                    const mm = String(r.start.month).padStart(2, "0");
                    const dd = String(r.start.day).padStart(2, "0");
                    setPicked(`${year}-${mm}-${dd}`);
                  }}
                >
                  <span className="letter">{letter}</span>
                  <span className="ticks" aria-hidden="true">
                    {Array.from({ length: 14 }, (_, n) => (
                      <i
                        key={n}
                        className={
                          pickedCal.fortnight === letter && pickedCal.day === n + 1 ? "on" : undefined
                        }
                      />
                    ))}
                  </span>
                </button>
              ))}
              <span className={`fort extra${pickedCal.day === "YD" ? " active" : ""}`}>
                <span className="letter">YD</span>
              </span>
              <span className={`fort extra${pickedCal.day === "LD" ? " active" : ""}`}>
                <span className="letter">LD</span>
              </span>
            </div>
          </div>
          <div className="readout">
            <div className="readout-big mono">
              {year}
              <b>{pickedCal.fortnight || pickedCal.day}</b>
              {pickedCal.fortnight ? pickedCal.day : null}
            </div>
            <div className="readout-meta">
              <div>{m && d ? formatGregorian({ year, month: m, day: d }) : ""}</div>
              <div className="muted">
                {range
                  ? `Fortnight ${active}: days ${range.startDoy}–${range.endDoy}, ${formatGregorianShort(range.start)} – ${formatGregorianShort(range.end)}`
                  : "A named day after Z, outside every fortnight."}
              </div>
            </div>
          </div>
        </div>

        <div className="answer">
          <span className="answer-label">Back to the question</span>
          <p>
            One month after January 31? January 31 is <code>C3</code>. Two
            fortnights later is <code>E3</code>, 28 days on, every year. How many
            days in the next fortnight? Fourteen. Always.
          </p>
        </div>
      </div>
    </section>
  );
}
