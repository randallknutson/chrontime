import { useMemo, useState } from "react";
import {
  calendarFromDayOfYear,
  formatCanonical,
  formatGregorian,
  formatInterchange,
  formatPresentation,
  formatTime,
  formatZone,
  fromUtc,
  gregorianFromDayOfYear,
  parseChronInput,
  toUtc,
} from "../chron";
import { useClock } from "../context";

function toDatetimeLocalUtc(date: Date): string {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${date.getUTCFullYear()}-${p(date.getUTCMonth() + 1)}-${p(date.getUTCDate())}T${p(date.getUTCHours())}:${p(date.getUTCMinutes())}`;
}

export function Playground() {
  const { now, place } = useClock();
  const [utcValue, setUtcValue] = useState(() => toDatetimeLocalUtc(new Date()));
  const [chronValue, setChronValue] = useState("2026R04:659.472+269");

  const fromCivil = useMemo(() => {
    if (!utcValue) return null;
    const date = new Date(`${utcValue}:00Z`);
    if (Number.isNaN(date.getTime())) return { error: "That is not a UTC datetime." };
    const instant = fromUtc(date, place.zone);
    return { instant };
  }, [utcValue, place.zone]);

  const fromChron = useMemo(() => {
    try {
      const parsed = parseChronInput(chronValue, place.zone);
      if (parsed.kind === "instant") {
        const utc = toUtc(parsed.value);
        const g = gregorianFromDayOfYear(parsed.value.year, parsed.value.dayOfYear);
        return {
          text: `${formatInterchange(parsed.value)} → ${formatCanonical(parsed.value)}`,
          extra: `${utc.toISOString()} · local date ${formatGregorian(g)}`,
        };
      }
      if (parsed.kind === "date") {
        const g = gregorianFromDayOfYear(parsed.year, parsed.dayOfYear);
        const cal = calendarFromDayOfYear(parsed.year, parsed.dayOfYear);
        const label = cal.fortnight ? `${parsed.year}${cal.fortnight}${cal.day}` : `${parsed.year}${cal.day}`;
        return { text: label, extra: formatGregorian(g) };
      }
      return {
        text: `${formatTime(parsed.time, 3)}${formatZone(parsed.zone)}`,
        extra: `sums to ${formatTime((parsed.time + parsed.zone + 1000) % 1000, 3)} GMT`,
      };
    } catch (err) {
      return { error: err instanceof Error ? err.message : "Could not parse." };
    }
  }, [chronValue, place.zone]);

  return (
    <section className="section tight" id="try">
      <div className="wrap">
        <div className="section-head">
          <h2>Convert anything.</h2>
          <p className="lede">
            Both directions, at the meridian you picked above. Paste an instant, a
            date, or a time of day.
          </p>
        </div>
        <div className="play">
          <div className="play-card">
            <h3>Civil UTC → Chron</h3>
            <label className="field">
              UTC date and time
              <input
                type="datetime-local"
                value={utcValue}
                onChange={(e) => setUtcValue(e.target.value)}
              />
            </label>
            <button className="chip" type="button" onClick={() => setUtcValue(toDatetimeLocalUtc(new Date()))}>
              Use now
            </button>
            {fromCivil && "error" in fromCivil ? (
              <div className="output error">{fromCivil.error}</div>
            ) : fromCivil ? (
              <div className="output">
                {formatPresentation(fromCivil.instant)}
                <br />
                {formatInterchange(fromCivil.instant)}
                <br />
                {formatCanonical(fromCivil.instant)}
              </div>
            ) : null}
            <p className="small muted">At {place.name} ({formatZone(place.zone)}).</p>
          </div>
          <div className="play-card">
            <h3>Chron → civil</h3>
            <label className="field">
              Chron string
              <input
                value={chronValue}
                onChange={(e) => setChronValue(e.target.value)}
                spellCheck={false}
                placeholder="2026R4:659+269"
              />
            </label>
            <button className="chip" type="button" onClick={() => setChronValue(formatInterchange(now))}>
              Use the live instant
            </button>
            {fromChron && "error" in fromChron ? (
              <div className="output error">{fromChron.error}</div>
            ) : fromChron ? (
              <div className="output">
                {fromChron.text}
                <br />
                {fromChron.extra}
              </div>
            ) : null}
            <p className="small muted">Instants, dates, and times of day all parse.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
