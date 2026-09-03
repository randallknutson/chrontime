import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { fromUtc, type Instant, zoneFromGeoLongitude } from "./chron";
import { GREENWICH, PLACES, placeFromZone, type Place } from "./places";

type Clock = {
  place: Place;
  setPlace: (place: Place) => void;
  now: Instant;
  located: boolean;
  locating: boolean;
  requestLocation: () => void;
};

const ClockContext = createContext<Clock | null>(null);

export function ClockProvider({ children }: { children: ReactNode }) {
  const [place, setPlace] = useState<Place>(GREENWICH);
  const [located, setLocated] = useState(false);
  const [locating, setLocating] = useState(false);
  const [nowMs, setNowMs] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNowMs(Date.now()), 120);
    return () => window.clearInterval(id);
  }, []);

  const now = useMemo(() => fromUtc(new Date(nowMs), place.zone), [nowMs, place.zone]);

  const applyCoords = useCallback((east: number) => {
    const zone = zoneFromGeoLongitude(east);
    setPlace(placeFromZone(zone, "Here"));
    setLocated(true);
  }, []);

  const requestLocation = useCallback(() => {
    if (!navigator.geolocation) return;
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        applyCoords(pos.coords.longitude);
        setLocating(false);
      },
      () => setLocating(false),
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 3_600_000 },
    );
  }, [applyCoords]);

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => applyCoords(pos.coords.longitude),
      () => undefined,
      { timeout: 2500, maximumAge: 3_600_000 },
    );
  }, [applyCoords]);

  const value = useMemo(
    () => ({ place, setPlace, now, located, locating, requestLocation }),
    [place, now, located, locating, requestLocation],
  );

  return <ClockContext.Provider value={value}>{children}</ClockContext.Provider>;
}

export function useClock(): Clock {
  const ctx = useContext(ClockContext);
  if (!ctx) throw new Error("useClock outside ClockProvider");
  return ctx;
}

export { PLACES };
