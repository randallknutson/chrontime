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
      <h2>26 × 14, labeled A–Z.</h2>
      <p className="lede">
        The 28-day month was the right period and the wrong written unit. Split it
        in half: 26 fortnights, 26 letters. A01 is 1 January. Z14 is day 364.
        12 May is still 12 May.
      </p>
      <div className="prose" style={{ marginBottom: 28 }}>
        <p>
          Two fortnights are a 28-day month if you need the grouping. The written
          date is the letter, not a month number. No thirteenth name, no shifted
          ordinals, no table of month lengths to add across.
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
