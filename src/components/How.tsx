export function How() {
  return (
    <section className="section" id="how">
      <div className="section-kicker">07 — How to write it</div>
      <h2>One string, read left to right.</h2>
      <p className="lede">
        Take 30 August 2026, 22:17 UTC, in Carrollton, Texas — about 96.9° west,
        zone +269. The interchange form is the string below. Add the last two
        fields and you have GMT.
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
      <div className="prose" style={{ marginBottom: 28 }}>
        <p>
          Year, letter, day, then a colon, then how far through the local day,
          then the zone. That is an <strong>instant</strong> — a particular moment.
          The same instant can be written three ways, depending on who it is for.
        </p>
      </div>
      <div className="profile-grid">
        <article className="card">
          <h3>Presentation</h3>
          <p>
            For people. You can drop the extra zero on the day, and skip the zone
            when everyone already knows the meridian. An omitted zone is not GMT
            unless you are actually in Greenwich.
          </p>
          <div className="sample">2026R4:659</div>
        </article>
        <article className="card">
          <h3>Interchange</h3>
          <p>
            For storage and sending. Year is four digits, day is two, and a zone
            or Z is required, so a parser never has to guess which meridian you
            meant.
          </p>
          <div className="sample">2026R04:659.472+269</div>
        </article>
        <article className="card">
          <h3>Canonical</h3>
          <p>
            For equality. Reduce to GMT, round to a thousandth of a chron, write
            Z. Two instants are the same instant if and only if these strings
            match.
          </p>
          <div className="sample">2026R04:928.472Z</div>
        </article>
      </div>
      <div className="prose" style={{ marginTop: 36 }}>
        <p>
          Not every Chron string is an instant. <code>2026R04</code> is a{" "}
          <strong>date-only</strong> — a calendar day, not midnight.{" "}
          <code>500Z</code> is a <strong>time-only</strong> — noon GMT, every day.{" "}
          <code>50c</code> or <code>3d200c</code> is a <strong>duration</strong>,
          a span rather than a point. If the string contains a colon, it is an
          instant. If it ends in <code>c</code> or <code>d</code>, it is a
          duration. A year plus a letter (or YD / LD) with no colon is a date.
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
