const PUZZLES = [
  {
    act: "Calendar",
    href: "#calendar",
    q: "What’s one month after January 31?",
    a: "February 28. Or March 3. Or March 2 in a leap year. It depends on which library you ask.",
  },
  {
    act: "Calendar",
    href: "#calendar",
    q: "How many days are in next month?",
    a: "You probably counted knuckles or recited a rhyme. A calendar shouldn’t need a mnemonic.",
  },
  {
    act: "Clock",
    href: "#clock",
    q: "Is 12:00 AM midnight or noon?",
    a: "Midnight, by convention. Enough people get it wrong that schedules write 11:59 PM instead.",
  },
  {
    act: "Clock",
    href: "#clock",
    q: "How far through the day is 3:17 PM?",
    a: "63.7%. To get there you turn hours into minutes and divide by 1,440.",
  },
  {
    act: "Zones",
    href: "#zones",
    q: "What happened at 2:30 AM on 8 March 2026 in New York?",
    a: "Nothing. That time doesn’t exist. The clocks jumped from 2:00 straight to 3:00.",
  },
  {
    act: "Zones",
    href: "#zones",
    q: "It’s 9:00 in Chicago. What time is it in Phoenix?",
    a: "8:00 in winter and 7:00 in summer. Arizona doesn’t change its clocks; Chicago does.",
  },
];

export function Problem() {
  return (
    <section className="section" id="problem">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">The problem</p>
          <h2>We’ve stopped noticing how strange this is.</h2>
          <p className="lede">
            Every one of these questions should take a second. Each one needs a
            lookup table, a convention, or a law.
          </p>
        </div>
        <div className="puzzles">
          {PUZZLES.map((p) => (
            <a className="puzzle" href={p.href} key={p.q}>
              <span className="puzzle-tag">{p.act}</span>
              <h3>{p.q}</h3>
              <p>{p.a}</p>
            </a>
          ))}
        </div>
        <p className="bridge">
          None of these are hard problems. They’re accidents that piled up over
          centuries. Chron Time fixes them in three steps, starting with the
          calendar.
        </p>
      </div>
    </section>
  );
}
