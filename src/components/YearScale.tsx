import { useMemo, useState } from "react";
import {
  calendarFromDayOfYear,
  formatGregorian,
  formatGregorianShort,
  fortnightRange,
  gregorianDayOfYear,
} from "../chron";
import { useClock } from "../context";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export function YearScale() {
  const { now } = useClock();
  const cal = calendarFromDayOfYear(now.year, now.dayOfYear);
  const [picked, setPicked] = useState(() => isoDate(new Date()));
  const [hover, setHover] = useState<string | null>(null);

  const pickedParts = picked.split("-").map(Number);
  const pickedDoy = useMemo(() => {
    try {
      return gregorianDayOfYear(pickedParts[0], pickedParts[1], pickedParts[2]);
    } catch {
      return now.dayOfYear;
    }
  }, [pickedParts, now.dayOfYear]);
  const pickedCal = calendarFromDayOfYear(pickedParts[0] || now.year, pickedDoy);
  const active = hover || (pickedCal.fortnight || cal.fortnight);
  const year = pickedParts[0] || now.year;
  const range = active && LETTERS.includes(active) ? fortnightRange(year, active) : null;

  return (
    <section className="section" id="year">
      <div className="section-kicker">02 — The lightbulb</div>
      <h2>Keep the year. Count fortnights.</h2>
      <p className="lede">
        Twenty-six blocks of fourteen days. Twenty-six letters. The Gregorian year
        number stays; May 12 is still May 12. You just stop pretending the months
        were ever a unit.
      </p>
      <div className="prose" style={{ marginBottom: 28 }}>
        <p>
          A month of four weeks was the right instinct and the wrong grain. Split
          those months in half and the year becomes an alphabet: A is the first
          fourteen days of January, Z the last complete fourteen of December. You
          do not invent a thirteenth name. You write a letter.
        </p>
      </div>
      <div className="year-instrument">
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
                onClick={() => {
                  const r = fortnightRange(year, letter);
                  const m = String(r.start.month).padStart(2, "0");
                  const d = String(r.start.day).padStart(2, "0");
                  setPicked(`${year}-${m}-${d}`);
                }}
              >
                <div className="letter">{letter}</div>
                <div className="ticks" aria-hidden="true">
                  {Array.from({ length: 14 }, (_, n) => <i key={n} />)}
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="leftover-chips">
          <span className={`chip${pickedCal.day === "YD" ? " on" : ""}`}>YD · day 365</span>
          <span className={`chip${pickedCal.day === "LD" ? " on" : ""}`}>LD · day 366</span>
        </div>
        <div className="year-readout">
          <div>
            <div className="meta-label">On the scale</div>
            <div className="readout-date">
              {pickedCal.fortnight
                ? `${year}${pickedCal.fortnight}${pickedCal.day} · ${formatGregorian({ year, month: pickedParts[1], day: pickedParts[2] })}`
                : `${year}${pickedCal.day}`}
            </div>
            {range ? (
              <div className="note">
                Fortnight {active}: days {range.startDoy}–{range.endDoy} ·{" "}
                {formatGregorianShort(range.start)} – {formatGregorianShort(range.end)}
                <span className="swipe-hint"> · swipe the letters</span>
              </div>
            ) : (
              <div className="note">A named day after Z, not a letter.</div>
            )}
          </div>
          <label className="date-field">
            Drop a civil date
            <input
              type="date"
              value={picked}
              onChange={(e) => setPicked(e.target.value)}
            />
          </label>
        </div>
      </div>
    </section>
  );
}
