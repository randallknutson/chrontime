export function TickRing({ time }: { time: number }) {
  const size = 240;
  const cx = size / 2;
  const cy = size / 2;
  const r = 98;
  const inner = 54;
  const c = 2 * Math.PI * r;
  const t = Math.max(0, Math.min(time, 999.999));
  const dash = (t / 1000) * c;
  const angle = (t / 1000) * Math.PI * 2 - Math.PI / 2;
  const handInner = inner + 4;
  const handOuter = r - 10;
  const hx1 = cx + Math.cos(angle) * handInner;
  const hy1 = cy + Math.sin(angle) * handInner;
  const hx2 = cx + Math.cos(angle) * handOuter;
  const hy2 = cy + Math.sin(angle) * handOuter;

  const ticks = [];
  for (let i = 0; i < 100; i += 1) {
    const a = (i / 100) * Math.PI * 2 - Math.PI / 2;
    const major = i % 25 === 0;
    const mid = i % 5 === 0;
    const tickIn = major ? r - 12 : mid ? r - 8 : r - 4;
    ticks.push(
      <line
        key={i}
        className={major ? "ring-tick major" : "ring-tick"}
        x1={cx + Math.cos(a) * tickIn}
        y1={cy + Math.sin(a) * tickIn}
        x2={cx + Math.cos(a) * r}
        y2={cy + Math.sin(a) * r}
        strokeWidth={major ? 1.8 : mid ? 1 : 0.5}
      />,
    );
  }

  const labelAt = (chron: number, text: string) => {
    const a = (chron / 1000) * Math.PI * 2 - Math.PI / 2;
    const lr = 108;
    return (
      <text
        className="ring-label"
        x={cx + Math.cos(a) * lr}
        y={cy + Math.sin(a) * lr + 3}
        textAnchor="middle"
      >
        {text}
      </text>
    );
  };

  return (
    <svg className="chron-ring" viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <circle className="ring-well" cx={cx} cy={cy} r={inner} />
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
      {labelAt(0, "000")}
      {labelAt(250, "250")}
      {labelAt(500, "500")}
      {labelAt(750, "750")}
      <line className="ring-hand" x1={hx1} y1={hy1} x2={hx2} y2={hy2} />
      <circle className="ring-hub" cx={cx} cy={cy} r="3.5" />
    </svg>
  );
}
