import { zoneFromLongitudeWest } from "./chron";

export type Place = {
  id: string;
  name: string;
  region: string;
  west: number;
  zone: number;
};

function place(id: string, name: string, region: string, west: number): Place {
  return { id, name, region, west, zone: zoneFromLongitudeWest(west) };
}

export const PLACES: Place[] = [
  place("honolulu", "Honolulu", "157.8°W", 157.86),
  place("phoenix", "Phoenix", "112.1°W", 112.07),
  place("carrollton", "Carrollton", "96.9°W", 96.89),
  place("chicago", "Chicago", "87.6°W", 87.63),
  place("greenwich", "Greenwich", "0°", 0),
  place("prague", "Prague", "14.4°E", -14.44),
  place("nairobi", "Nairobi", "36.8°E", -36.82),
  place("tokyo", "Tokyo", "139.7°E", -139.69),
  place("sydney", "Sydney", "151.2°E", -151.21),
];

export const GREENWICH = PLACES.find((p) => p.id === "greenwich")!;

export function placeFromZone(zone: number, name = "Your meridian"): Place {
  const known = PLACES.find((p) => p.zone === zone);
  if (known) return known;
  const west = zone * 0.36;
  const region =
    west === 0 ? "0°" : west > 0 ? `${west.toFixed(1)}°W` : `${Math.abs(west).toFixed(1)}°E`;
  return { id: `zone-${zone}`, name, region, west, zone };
}
