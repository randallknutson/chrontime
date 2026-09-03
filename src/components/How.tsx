export function How() {
  return (
    <section className="section" id="how">
      <div className="section-kicker">07 — Notation</div>
      <h2>Four kinds. Three profiles.</h2>
      <p className="lede">
        Instant <code>2026-08-30T22:17:00Z</code> at Carrollton (96.9°W, zone{" "}
        <code>+269</code>) is the interchange string below. Canonical form is that
        instant reduced to GMT.
      </p>
      <div className="explode" aria-label="Exploded Chron string">
        <div className="explode-part">
          <div className="val">2026</div>
          <div className="lbl">Year</div>
        </div>
        <div className="explode-part">
          <div className="val">R</div>
          <div className="lbl">Fortnight</div>
        </div>
        <div className="explode-part">
          <div className="val">04</div>
          <div className="lbl">Day 1–14</div>
        </div>
        <div className="explode-colon">:</div>
        <div className="explode-part">
          <div className="val">659.472</div>
          <div className="lbl">Chrons</div>
        </div>
        <div className="explode-part">
          <div className="val">+269</div>
          <div className="lbl">Zone</div>
        </div>
      </div>
      <p className="note" style={{ textAlign: "center", marginBottom: 28 }}>
        659.472 + 269 = 928.472Z
      </p>
      <div className="profile-grid">
        <article className="card">
          <h3>Presentation</h3>
          <p>
            For people. Day padding may drop (<code>R4</code>). Zone may be omitted
            when the meridian is already known — omitted is not GMT.
          </p>
          <div className="sample">2026R4:659</div>
        </article>
        <article className="card">
          <h3>Interchange</h3>
          <p>
            For storage and transmission. Four-digit year, two-digit day, zone or{" "}
            <code>Z</code> required. Up to 12 fractional chrons.
          </p>
          <div className="sample">2026R04:659.472+269</div>
        </article>
        <article className="card">
          <h3>Canonical</h3>
          <p>
            For equality. Reduced to GMT, rounded to 0.001 chron, written with{" "}
            <code>Z</code>. Same text if and only if the same instant.
          </p>
          <div className="sample">2026R04:928.472Z</div>
        </article>
      </div>
      <div className="prose" style={{ marginTop: 36 }}>
        <p>
          A string with <code>:</code> is an instant. Year plus fortnight /{" "}
          <code>YD</code> / <code>LD</code> and no colon is a date-only — a calendar
          day, not midnight. Otherwise a leading time is time-only. A <code>c</code>{" "}
          or <code>d</code> suffix is a duration (<code>50c</code>, <code>3d200c</code>).
        </p>
      </div>
      <pre className="snippet">{`npm install @chrontime/chrontime

import { ChronInstant, fromUtc, zoneFromLongitude } from '@chrontime/chrontime';

ChronInstant.parse('2026R04:659.472+269').toCanonical();
// '2026R04:928.472Z'

fromUtc(new Date('2020-02-09T12:00:00Z')).toCanonical();
// '2020C12:500Z'

zoneFromLongitude(96.9);
// 269`}</pre>
    </section>
  );
}
