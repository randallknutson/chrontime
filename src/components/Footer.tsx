import { Mark } from "./Nav";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span className="brand">
          <Mark />
          Chron Time
        </span>
        <span className="mono">local + zone = GMT</span>
      </div>
    </footer>
  );
}
