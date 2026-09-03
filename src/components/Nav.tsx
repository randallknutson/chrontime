export function Nav() {
  return (
    <header className="nav">
      <a className="brand" href="/#now">
        <svg className="brand-mark" viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path d="M16 6v4M16 22v4M6 16h4M22 16h4" stroke="currentColor" strokeWidth="1.4" />
        </svg>
        Chron Time
      </a>
      <nav className="nav-links">
        <a className="hide-sm" href="/#year">Year</a>
        <a className="hide-sm" href="/#day">Day</a>
        <a className="hide-sm" href="/#earth">Earth</a>
        <a className="hide-sm" href="/#use">Use</a>
        <a href="/#try">Try</a>
        <a className="nav-cta" href="/spec.html">Spec</a>
      </nav>
    </header>
  );
}
