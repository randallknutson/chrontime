import { useMemo, useState, type MouseEvent } from "react";
import { formatTime, formatZone, toGmt } from "../chron";
import { PLACES, useClock } from "../context";

type Snap = 1 | 10 | 100;

function snapZone(zone: number, snap: Snap): number {
  if (snap === 1) return Math.round(zone);
  const s = Math.round(zone / snap) * snap;
  if (s === -500) return 500;
  return s;
}

export function Meridian() {
  const { now, place, setPlace, requestLocation, locating } = useClock();
  const [snap, setSnap] = useState<Snap>(1);
  const gmt = useMemo(() => toGmt(now), [now]);
  const shownZone = snapZone(place.zone, snap);
  let local = gmt.time - shownZone;
  let extra = 0;
  if (local < 0) {
    local += 1000;
    extra = -1;
  } else if (local >= 1000) {
    local -= 1000;
    extra = 1;
  }

  const pct = ((500 - shownZone) / 1000) * 100;

  const onDrum = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const zone = Math.round(500 - x * 1000);
    const clamped = Math.max(-499, Math.min(500, zone === -500 ? 500 : zone));
    setPlace({
      id: `zone-${clamped}`,
      name: "Meridian",
      region: clamped === 0 ? "0°" : clamped > 0 ? `${(clamped * 0.36).toFixed(1)}°W` : `${(Math.abs(clamped) * 0.36).toFixed(1)}°E`,
      west: clamped * 0.36,
      zone: clamped,
    });
  };

  return (
    <section className="section" id="earth">
      <div className="section-kicker">05 — Zone</div>
      <h2>Zone is west longitude, in chrons.</h2>
      <div className="prose">
        <p>
          Civil zones are political: IANA names, borders, then DST. Two sites at
          the same longitude can disagree, and one site can disagree with itself
          in April. A Chron zone is a longitude band. It does not move when a
          clock law does.
        </p>
        <p>
          At chron resolution, <code>zone = round(longitude_west / 0.36)</code>.
          One chron of zone is 0.36°. West is plus, east is minus, <code>Z</code> is
          Greenwich. The sign is the opposite of ISO 8601 on purpose: you always
          complete the equation toward GMT.
        </p>
      </div>
      <div className="equation" style={{ marginTop: 22, marginBottom: 22 }}>
        <div className="eq-row" style={{ fontSize: "clamp(20px, 3vw, 32px)" }}>
          <span className="eq-term">local</span>
          <span className="eq-op">+</span>
          <span className="eq-term gold">zone</span>
          <span className="eq-op">=</span>
          <span className="eq-term cyan">GMT</span>
        </div>
      </div>
      <div className="prose">
        <p>
          Coarser grids are 10 chrons (3.6°) and 100 chrons (36°). Refining a zone
          moves chrons across the sign; <code>100+200</code> and <code>000+300</code>{" "}
          are the same time of day as <code>300Z</code>. Do not copy a civil offset
          such as CDT <code>−05:00</code> into the zone field.
        </p>
      </div>

      <div className="drum" onClick={onDrum} role="slider" aria-label="Longitude zone" aria-valuenow={shownZone}>
        <div className="drum-grid">
          {Array.from({ length: 10 }, (_, i) => (
            <div className="drum-band" key={i} />
          ))}
        </div>
        <div className="drum-zero" />
        <div className="drum-needle" style={{ left: `${pct}%` }} />
        <div className="drum-label west">West +</div>
        <div className="drum-label mid">Greenwich</div>
        <div className="drum-label east">East −</div>
      </div>
      <div className="city-row">
        {PLACES.map((p) => (
          <button
            key={p.id}
            type="button"
            className={`city${place.id === p.id || place.zone === p.zone ? " on" : ""}`}
            onClick={() => setPlace(p)}
          >
            {p.name}
            <small>{formatZone(p.zone)}</small>
          </button>
        ))}
        <button className="city" type="button" onClick={requestLocation}>
          {locating ? "Locating…" : "My longitude"}
          <small>GPS</small>
        </button>
      </div>

      <div className="equation">
        <div className="eq-row">
          <span className="eq-term gold">{formatTime(local, 1)}</span>
          <span className="eq-op">{shownZone < 0 ? "−" : "+"}</span>
          <span className="eq-term">
            {shownZone === 0 ? "0" : String(Math.abs(Math.round(shownZone))).padStart(3, "0")}
          </span>
          <span className="eq-op">=</span>
          <span className="eq-term cyan">{formatTime(gmt.time, 1)}Z</span>
        </div>
        <div className="eq-caps">
          <span>Local</span><span />
          <span>Zone</span><span />
          <span>GMT</span>
        </div>
        <div className="precision">
          {([100, 10, 1] as Snap[]).map((s) => (
            <button
              key={s}
              type="button"
              className={`btn${snap === s ? " on" : ""}`}
              onClick={() => setSnap(s)}
            >
              {s === 100 ? "36° bands" : s === 10 ? "3.6°" : "0.36° · 1 chron"}
            </button>
          ))}
        </div>
        <p className="note">
          {extra === 0
            ? "Same GMT. Precision only changes how the sum is split."
            : extra < 0
              ? "Local date has borrowed a day; the GMT is unchanged."
              : "Local date has carried a day; the GMT is unchanged."}
        </p>
      </div>
    </section>
  );
}
