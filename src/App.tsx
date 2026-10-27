import { Calendar } from "./components/Calendar";
import { Clock } from "./components/Clock";
import { Close } from "./components/Close";
import { Developers } from "./components/Developers";
import { Footer } from "./components/Footer";
import { Fortnights } from "./components/Fortnights";
import { Hero } from "./components/Hero";
import { Leftovers } from "./components/Leftovers";
import { Nav } from "./components/Nav";
import { Playground } from "./components/Playground";
import { Problem } from "./components/Problem";
import { Zones } from "./components/Zones";
import { ClockProvider } from "./context";

export function App() {
  return (
    <ClockProvider>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Calendar />
        <Fortnights />
        <Leftovers />
        <Clock />
        <Zones />
        <Developers />
        <Playground />
        <Close />
      </main>
      <Footer />
    </ClockProvider>
  );
}
