export function How() {
  return (
    <section className="section" id="how">
      <div className="section-kicker">07 — How to read it</div>
      <h2>One string. Three jobs.</h2>
      <p className="lede">
        Take an instant in Carrollton, Texas, on 30 August 2026, a little after
        ten in the evening UTC.
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
        local + zone = GMT · 659.472 + 269 = 928.472Z
      </p>
      <div className="profile-grid">
        <article className="card">
          <h3>Presentation</h3>
          <p>For people. Drop the padding. Omit the zone when the meridian is already understood.</p>
          <div className="sample">2026R4:659</div>
        </article>
        <article className="card">
          <h3>Interchange</h3>
          <p>For storage and transmission. Padded fields, zone required, up to twelve decimal chrons.</p>
          <div className="sample">2026R04:659.472+269</div>
        </article>
        <article className="card">
          <h3>Canonical</h3>
          <p>For equality. Reduced to GMT, rounded, written with Z. Same text means same instant.</p>
          <div className="sample">2026R04:928.472Z</div>
        </article>
      </div>
      <div className="prose" style={{ marginTop: 36 }}>
        <p>
          Write a date as year, letter, day. Write a time as three digits, maybe a
          fraction. Write a zone with an explicit sign, or <code>Z</code> for
          Greenwich. A date alone names a day, not a moment. A duration wears a
          unit: <code>50c</code>, <code>3d200c</code>.
        </p>
      </div>
      <pre className="snippet">{`npm install @chrontime/chrontime

import { ChronInstant, fromUtc, zoneFromLongitude } from '@chrontime/chrontime';

ChronInstant.parse('2026R04:659.472+269').toCanonical();
// '2026R04:928.472Z'

fromUtc(new Date('2020-02-09T12:00:00Z')).toCanonical();
// '2020C12:500Z'

zoneFromLongitude(96.9);
// 269  Carrollton, west longitude`}</pre>
    </section>
  );
}
