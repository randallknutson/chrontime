import { Close } from "./components/Close";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { How } from "./components/How";
import { Leftovers } from "./components/Leftovers";
import { Meridian } from "./components/Meridian";
import { Nav } from "./components/Nav";
import { Playground } from "./components/Playground";
import { Thousand } from "./components/Thousand";
import { Trap } from "./components/Trap";
import { Why } from "./components/Why";
import { YearScale } from "./components/YearScale";
import { ClockProvider } from "./context";

export function App() {
  return (
    <ClockProvider>
      <div className="grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Trap />
        <YearScale />
        <Leftovers />
        <Thousand />
        <Meridian />
        <Why />
        <How />
        <Playground />
        <Close />
      </main>
      <Footer />
    </ClockProvider>
  );
}
