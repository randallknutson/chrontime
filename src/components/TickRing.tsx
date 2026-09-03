export function TickRing({
  time,
  labels = true,
}: {
  time: number;
  labels?: boolean;
}) {
  const size = 200;
  const cx = size / 2;
  const cy = size / 2;
  const r = 88;
  const c = 2 * Math.PI * r;
  const dash = (Math.max(0, Math.min(time, 999.999)) / 1000) * c;
  const ticks = [];
  for (let i = 0; i < 100; i += 1) {
    const a = (i / 100) * Math.PI * 2 - Math.PI / 2;
    const major = i % 25 === 0;
    const inner = major ? r - 8 : r - 4;
    const outer = r + (major ? 2 : 0);
    ticks.push(
      <line
        key={i}
        className={major ? "ring-tick major" : "ring-tick"}
        x1={cx + Math.cos(a) * inner}
        y1={cy + Math.sin(a) * inner}
        x2={cx + Math.cos(a) * outer}
        y2={cy + Math.sin(a) * outer}
        strokeWidth={major ? 1.4 : 0.6}
      />,
    );
  }
  const labelAt = (t: number, text: string) => {
    const a = (t / 1000) * Math.PI * 2 - Math.PI / 2;
    return (
      <text
        className="ring-label"
        x={cx + Math.cos(a) * 102}
        y={cy + Math.sin(a) * 102 + 3}
        textAnchor="middle"
      >
        {text}
      </text>
    );
  };
  return (
    <svg className="chron-ring" viewBox={`0 0 ${size} ${size}`}>
      <circle className="ring-track" cx={cx} cy={cy} r={r} />
      {ticks}
      <circle
        className="ring-progress"
        cx={cx}
        cy={cy}
        r={r}
        strokeDasharray={`${dash} ${c}`}
        transform={`rotate(-90 ${cx} ${cy})`}
      />
      {labels ? (
        <>
          {labelAt(0, "000")}
          {labelAt(250, "250")}
          {labelAt(500, "500")}
          {labelAt(750, "750")}
        </>
      ) : null}
    </svg>
  );
}
