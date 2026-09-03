import { marked } from "marked";
import spec from "../CHRON-TIME-SPEC.md?raw";
import { Nav } from "./components/Nav";

marked.setOptions({ gfm: true });

export function SpecApp() {
  const html = marked.parse(spec, { async: false }) as string;
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <article className="spec-shell">
        <a className="back" href="/">← Chron Time</a>
        <div className="spec-body" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </>
  );
}
