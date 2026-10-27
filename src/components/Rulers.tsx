export type Band = { label: string; short?: string; days: number; extra?: boolean };
export type Marker = { doy: number; top: string; bottom: string };

const DAYS_IN_YEAR = 365;

export const GREGORIAN: Band[] = [
  ["Jan", 31], ["Feb", 28], ["Mar", 31], ["Apr", 30], ["May", 31], ["Jun", 30],
  ["Jul", 31], ["Aug", 31], ["Sep", 30], ["Oct", 31], ["Nov", 30], ["Dec", 31],
].map(([label, days]) => ({ label: label as string, short: (label as string)[0], days: days as number }));

export const THIRTEEN_MONTHS: Band[] = [
  ...["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Sol", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
    (label) => ({ label, short: label[0], days: 28 }),
  ),
  { label: "YD", short: "·", days: 1, extra: true },
];

export const FORTNIGHTS: Band[] = [
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((label) => ({ label, days: 14 })),
  { label: "YD", short: "·", days: 1, extra: true },
];

function Track({ bands }: { bands: Band[] }) {
  return (
    <div className="ruler-track">
      {bands.map((b, i) => (
        <span
          key={b.label}
          className={`band${i % 2 ? " alt" : ""}${b.extra ? " extra" : ""}`}
          style={{ flexGrow: b.days }}
        >
          <em className="long">{b.extra ? "" : b.label}</em>
          <em className="short">{b.extra ? "" : (b.short ?? b.label)}</em>
        </span>
      ))}
    </div>
  );
}

export function Rulers({
  lowerName,
  lower,
  markers,
  tone,
  caption,
}: {
  lowerName: string;
  lower: Band[];
  markers: Marker[];
  tone: "clash" | "agree";
  caption: string;
}) {
  return (
    <figure className={`rulers ${tone}`}>
      <div className="ruler-body">
        <div className="ruler-cap">Gregorian · 12 months of 28 to 31 days</div>
        <Track bands={GREGORIAN} />
        <div className="ruler-cap second">{lowerName}</div>
        <Track bands={lower} />
        {markers.map((m) => {
          const left = ((m.doy - 0.5) / DAYS_IN_YEAR) * 100;
          return (
            <div
              key={m.doy}
              className={`ruler-marker${left > 80 ? " end" : ""}`}
              style={{ left: `${left}%` }}
            >
              <span className="m-top">{m.top}</span>
              <span className="m-bottom">{m.bottom}</span>
            </div>
          );
        })}
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
