export function Mark() {
  return (
    <svg className="brand-mark" viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.25" />
      <path d="M16 4 A12 12 0 1 1 5.2 21.2" fill="none" stroke="var(--accent)" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
    </svg>
  );
}

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a className="brand" href="/#top">
          <Mark />
          Chron Time
        </a>
        <nav className="nav-links">
          <a className="hide-sm" href="/#problem">Problem</a>
          <a className="hide-sm" href="/#calendar">Calendar</a>
          <a className="hide-sm" href="/#clock">Clock</a>
          <a className="hide-sm" href="/#zones">Zones</a>
          <a className="hide-xs" href="/#developers">Developers</a>
          <a className="nav-cta" href="/spec.html">Spec</a>
        </nav>
      </div>
    </header>
  );
}
