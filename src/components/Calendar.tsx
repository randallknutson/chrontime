import { Rulers, THIRTEEN_MONTHS } from "./Rulers";

export function Calendar() {
  return (
    <section className="section act" id="calendar">
      <div className="wrap">
        <div className="act-head">
          <span className="act-num">I</span>
          <span className="act-name">The calendar</span>
        </div>
        <div className="section-head">
          <h2>Thirteen months has been tried. More than once.</h2>
          <p className="lede">
            The obvious fix for uneven months is to make them even. People have
            been proposing it for nearly two centuries, and it has never stuck.
          </p>
        </div>
        <div className="cols">
          <div className="prose">
            <p>
              The arithmetic is tempting. Thirteen months of 28 days is 364 days,
              exactly 52 weeks. Add one spare day at the end of the year and every
              month is the same four-week grid, forever. Auguste Comte proposed it
              in 1849 as the Positivist calendar. Moses Cotsworth refined it in
              1902 as the International Fixed Calendar and put the new month,
              Sol, between June and July. George Eastman liked it enough that
              Kodak kept its books on it from 1928 until 1989.
            </p>
            <p>
              It never caught on for the public because it reuses names that are
              already taken. Every month is 28 days, so from 29 January onward
              almost every date lands on a different name. The 4th of July would
              be Sol 17. Christmas would be December 23. Birthdays, contracts,
              holidays, and every date already written down would mean two
              different days depending on who was reading them.
            </p>
          </div>
          <aside className="aside-card">
            <div className="aside-label">The catch</div>
            <p>
              A calendar can only replace the old one if everyone switches on the
              same day. One that can sit <em>next to</em> the old one can be
              adopted a person at a time.
            </p>
          </aside>
        </div>
        <Rulers
          tone="clash"
          lowerName="International Fixed Calendar · 13 months of 28 days"
          lower={THIRTEEN_MONTHS}
          markers={[
            { doy: 185, top: "4 Jul", bottom: "Sol 17" },
            { doy: 359, top: "25 Dec", bottom: "23 Dec" },
          ]}
          caption="Same day, different name. Once months stop matching, the old names and the new ones collide."
        />
      </div>
    </section>
  );
}
