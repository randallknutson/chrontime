import { useMemo, useState, type KeyboardEvent, type MouseEvent } from "react";
import { formatTime, formatZone, toGmt } from "../chron";
import { PLACES, useClock } from "../context";
import { placeFromZone } from "../places";

type Snap = 1 | 10 | 100;

function snapZone(zone: number, snap: Snap): number {
  if (snap === 1) return Math.round(zone);
  const s = Math.round(zone / snap) * snap;
  if (s === -500) return 500;
  return s;
}

function clampZone(zone: number): number {
  const z = Math.round(zone);
  if (z <= -500 || z > 500) return 500;
  return z;
}

const pctFor = (zone: number) => ((500 - zone) / 1000) * 100;

export function Zones() {
  const { now, place, setPlace, requestLocation, locating } = useClock();
  const [snap, setSnap] = useState<Snap>(1);
  const gmt = useMemo(() => toGmt(now), [now]);
  const shownZone = snapZone(place.zone, snap);
  let local = gmt.time - shownZone;
  let carry = 0;
  if (local < 0) {
    local += 1000;
    carry = -1;
  } else if (local >= 1000) {
    local -= 1000;
    carry = 1;
  }

  const pick = (zone: number) => setPlace(placeFromZone(clampZone(zone), "Meridian"));

  const onStrip = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    pick(500 - x * 1000);
  };

  const onKey = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = event.shiftKey ? 100 : 10;
    if (event.key === "ArrowLeft") pick(place.zone + step);
    else if (event.key === "ArrowRight") pick(place.zone - step);
    else return;
    event.preventDefault();
  };

  return (
    <section className="section act" id="zones">
      <div className="wrap">
        <div className="act-head">
          <span className="act-num">III</span>
          <span className="act-name">The zones</span>
        </div>
        <div className="section-head">
          <h2>Time zones are drawn by lawmakers, not by the sun.</h2>
          <p className="lede">
            A civil time zone is a political boundary with a clock attached. It
            moves when a legislature votes, and it jumps an hour twice a year in
            much of the world.
          </p>
        </div>
        <div className="cols">
          <div className="prose">
            <p>
              China spans about 60 degrees of longitude, four hours of sunlight,
              and runs on one clock. Nepal sits 5 hours 45 minutes ahead of UTC.
              Arizona skips daylight saving, but the Navajo Nation inside it
              doesn’t. Two towns on the same meridian can disagree, and one town
              disagrees with itself every spring. Turning local time into
              universal time means looking up a database, not doing a sum.
            </p>
          </div>
          <div className="prose">
            <p>
              A Chron zone is just your longitude. The Earth turns 360° in 1000
              chrons, so one chron of zone is 0.36°. GPS already knows the answer.
              Greenwich is <code>Z</code>. West is plus, east is minus. No
              legislature can move it, and it never springs forward.
            </p>
          </div>
        </div>

        <div className="equation-hero">
          <span>local</span>
          <span className="op">+</span>
          <span className="accent">zone</span>
          <span className="op">=</span>
          <span>GMT</span>
        </div>
        <p className="center muted narrow-c">
          One rule to remember: add if you’re west, subtract if you’re east, and
          you have the time at Greenwich. No lookup table, and no daylight saving
          to check.
        </p>

        <div className="instrument">
          <div className="instrument-head">
            <h3>Find your zone</h3>
            <div className="precision" role="group" aria-label="Zone precision">
              {([100, 10, 1] as Snap[]).map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`chip${snap === s ? " on" : ""}`}
                  onClick={() => setSnap(s)}
                >
                  {s === 100 ? "36° bands" : s === 10 ? "3.6°" : "0.36°"}
                </button>
              ))}
            </div>
          </div>
          <div
            className="strip"
            onClick={onStrip}
            onKeyDown={onKey}
            tabIndex={0}
            role="slider"
            aria-label="Longitude zone in chrons, west positive"
            aria-valuemin={-499}
            aria-valuemax={500}
            aria-valuenow={shownZone}
            aria-valuetext={`${formatZone(shownZone)}, ${place.region}`}
          >
            <div className="strip-bands">
              {Array.from({ length: 10 }, (_, i) => (
                <span key={i}>{formatZone(500 - i * 100)}</span>
              ))}
            </div>
            <div className="strip-zero" />
            {PLACES.map((p, i) => (
              <div
                key={p.id}
                className={`strip-city${i % 2 ? " below" : ""}`}
                style={{ left: `${pctFor(p.zone)}%` }}
              >
                <span>{p.name}</span>
              </div>
            ))}
            <div className="strip-needle" style={{ left: `${pctFor(shownZone)}%` }} />
          </div>
          <div className="strip-legend">
            <span>West +</span>
            <span>Greenwich</span>
            <span>East −</span>
          </div>
          <div className="city-row">
            {PLACES.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`chip${place.zone === p.zone ? " on" : ""}`}
                onClick={() => setPlace(p)}
              >
                {p.name} <small>{formatZone(p.zone)}</small>
              </button>
            ))}
            <button className="chip" type="button" onClick={requestLocation}>
              {locating ? "Locating…" : "My longitude"} <small>GPS</small>
            </button>
          </div>
          <div className="eq-live">
            <div className="eq-cell">
              <span className="mono">{formatTime(local, 1)}</span>
              <small>local</small>
            </div>
            <span className="op">{shownZone < 0 ? "−" : "+"}</span>
            <div className="eq-cell accent">
              <span className="mono">{String(Math.abs(shownZone)).padStart(3, "0")}</span>
              <small>zone</small>
            </div>
            <span className="op">=</span>
            <div className="eq-cell">
              <span className="mono">{formatTime(gmt.time, 1)}</span>
              <small>GMT</small>
            </div>
          </div>
          <p className="muted center small">
            {carry === 0
              ? "Change the precision and only the split changes. The sum stays the same."
              : carry < 0
                ? "The local date is one day behind GMT here. The sum still carries."
                : "The local date is one day ahead of GMT here. The sum still carries."}
          </p>
        </div>

        <div className="answer">
          <span className="answer-label">Back to the question</span>
          <p>
            Chicago is <code>+243</code> and Phoenix is <code>+311</code>. They’re
            68 chrons apart in January and 68 chrons apart in July. And 2:30 AM
            on 8 March? Every chron exists every day, because no zone ever jumps.
          </p>
        </div>
      </div>
    </section>
  );
}
