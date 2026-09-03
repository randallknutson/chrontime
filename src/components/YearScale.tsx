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
      <div className="section-kicker">02 — Fortnights</div>
      <h2>Count fortnights, and the alphabet is the calendar.</h2>
      <p className="lede">
        Twenty-eight days is a clean block — two weeks, never a surprise length.
        It was the wrong thing to <em>write</em>, because a thirteenth month
        desynchronizes every civil date. Halve it instead.
      </p>
      <div className="prose" style={{ marginBottom: 28 }}>
        <p>
          A fortnight is 14 days. There are 26 of them in 364 days, and 26 letters
          in the alphabet. A is the first fourteen days of the year, starting 1
          January. B is the next fourteen. Z is days 351 through 364. You do not
          invent a thirteenth name. You write a letter.
        </p>
        <p>
          Pair the letters and you still have 13 months of 28 days (AB, CD, … YZ)
          if you want that grouping. The written date does not use a month number.
          May 12 is still May 12 on a civil calendar; in Chron Time it is simply
          whichever fortnight and day that date falls on, in the same year. Adding
          across fortnights never needs a table of month lengths.
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
