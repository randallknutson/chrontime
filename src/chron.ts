export const CHRONS_PER_DAY = 1000;
export const DEGREES_PER_CHRON = 0.36;
export const SECONDS_PER_CHRON = 86.4;
export const MS_PER_DAY = 86_400_000;

export type SpecialDay = "YD" | "LD";

export type CalendarDate = {
  fortnight: string;
  day: number | SpecialDay;
  month: number | null;
};

export type Instant = {
  year: number;
  dayOfYear: number;
  time: number;
  zone: number;
};

const CUMULATIVE_COMMON = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
const CUMULATIVE_LEAP = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function daysInYear(year: number): number {
  return isLeapYear(year) ? 366 : 365;
}

export function gregorianDayOfYear(year: number, month: number, day: number): number {
  const leap = isLeapYear(year);
  const dim = month === 2 && leap ? 29 : DAYS_IN_MONTH[month - 1];
  if (month < 1 || month > 12 || day < 1 || day > dim) {
    throw new Error(`invalid Gregorian date ${year}-${month}-${day}`);
  }
  const cum = leap ? CUMULATIVE_LEAP : CUMULATIVE_COMMON;
  return cum[month - 1] + day;
}

export function gregorianFromDayOfYear(
  year: number,
  dayOfYear: number,
): { year: number; month: number; day: number } {
  const max = daysInYear(year);
  if (dayOfYear < 1 || dayOfYear > max) {
    throw new Error(`day ${dayOfYear} out of range for ${year}`);
  }
  const cum = isLeapYear(year) ? CUMULATIVE_LEAP : CUMULATIVE_COMMON;
  let month = 12;
  for (let i = 11; i >= 0; i -= 1) {
    if (dayOfYear > cum[i]) {
      month = i + 1;
      break;
    }
  }
  return { year, month, day: dayOfYear - cum[month - 1] };
}

export function calendarFromDayOfYear(year: number, dayOfYear: number): CalendarDate {
  const max = daysInYear(year);
  if (dayOfYear < 1 || dayOfYear > max) {
    throw new Error(`day ${dayOfYear} out of range for ${year}`);
  }
  if (dayOfYear === 365) return { fortnight: "", day: "YD", month: null };
  if (dayOfYear === 366) return { fortnight: "", day: "LD", month: null };
  const index = Math.floor((dayOfYear - 1) / 14);
  const remainder = dayOfYear % 14;
  const day = remainder === 0 ? 14 : remainder;
  return {
    fortnight: String.fromCharCode(65 + index),
    day,
    month: Math.floor(index / 2) + 1,
  };
}

export function dayOfYearFromFortnight(fortnight: string, day: number): number {
  const index = fortnight.charCodeAt(0) - 65;
  if (index < 0 || index > 25 || day < 1 || day > 14) {
    throw new Error(`invalid fortnight ${fortnight}${day}`);
  }
  return index * 14 + day;
}

export function addDays(
  year: number,
  dayOfYear: number,
  days: number,
): { year: number; dayOfYear: number } {
  let y = year;
  let d = dayOfYear + days;
  while (d > daysInYear(y)) {
    d -= daysInYear(y);
    y += 1;
  }
  while (d < 1) {
    y -= 1;
    d += daysInYear(y);
  }
  return { year: y, dayOfYear: d };
}

export function addChrons(
  year: number,
  dayOfYear: number,
  time: number,
): Instant {
  let extra = Math.floor(time / CHRONS_PER_DAY);
  let t = time - extra * CHRONS_PER_DAY;
  if (t < 0) {
    extra -= 1;
    t += CHRONS_PER_DAY;
  }
  if (t >= CHRONS_PER_DAY) {
    extra += 1;
    t -= CHRONS_PER_DAY;
  }
  const d = addDays(year, dayOfYear, extra);
  return { year: d.year, dayOfYear: d.dayOfYear, time: t, zone: 0 };
}

export function toGmt(instant: Instant): Instant {
  const moved = addChrons(instant.year, instant.dayOfYear, instant.time + instant.zone);
  return { ...moved, zone: 0 };
}

export function atZone(gmt: Instant, zone: number): Instant {
  const moved = addChrons(gmt.year, gmt.dayOfYear, gmt.time - zone);
  return { ...moved, zone };
}

export function zoneFromLongitudeWest(westDegrees: number): number {
  let zone = Math.round(westDegrees / DEGREES_PER_CHRON);
  if (zone === -500 || zone === 500) return 500;
  if (zone < -499) zone = -499;
  if (zone > 500) zone = 500;
  return zone;
}

export function zoneFromGeoLongitude(eastDegrees: number): number {
  return zoneFromLongitudeWest(-eastDegrees);
}

export function fromUtc(date: Date, zone: number): Instant {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const doy = gregorianDayOfYear(year, month, day);
  const msInDay =
    date.getUTCHours() * 3_600_000 +
    date.getUTCMinutes() * 60_000 +
    date.getUTCSeconds() * 1000 +
    date.getUTCMilliseconds();
  const gmtTime = (msInDay / MS_PER_DAY) * CHRONS_PER_DAY;
  return atZone({ year, dayOfYear: doy, time: gmtTime, zone: 0 }, zone);
}

export function toUtc(instant: Instant): Date {
  const gmt = toGmt(instant);
  const g = gregorianFromDayOfYear(gmt.year, gmt.dayOfYear);
  const msInDay = Math.round((gmt.time / CHRONS_PER_DAY) * MS_PER_DAY);
  return new Date(Date.UTC(g.year, g.month - 1, g.day) + msInDay);
}

export function pad(value: number, width: number): string {
  const sign = value < 0 ? "-" : "";
  const abs = Math.abs(value).toString();
  return sign + abs.padStart(width, "0");
}

export function formatZone(zone: number, asZ = true): string {
  if (asZ && zone === 0) return "Z";
  const sign = zone < 0 ? "-" : "+";
  const abs = Math.abs(zone);
  const whole = Math.floor(abs);
  const frac = abs - whole;
  const head = `${sign}${String(whole).padStart(3, "0")}`;
  if (frac < 1e-12) return head;
  return head + frac.toFixed(3).slice(1).replace(/0+$/, "").replace(/\.$/, "");
}

export function formatTime(time: number, decimals = 3): string {
  const whole = Math.floor(time);
  const frac = time - whole;
  const head = String(whole).padStart(3, "0");
  if (decimals <= 0 || frac < 1e-12) return head;
  const tail = frac
    .toFixed(decimals)
    .slice(1)
    .replace(/0+$/, "")
    .replace(/\.$/, "");
  return head + tail;
}

export function formatDatePart(
  year: number,
  dayOfYear: number,
  padded: boolean,
): string {
  const cal = calendarFromDayOfYear(year, dayOfYear);
  if (cal.day === "YD" || cal.day === "LD") return cal.day;
  const day = padded ? String(cal.day).padStart(2, "0") : String(cal.day);
  return `${cal.fortnight}${day}`;
}

export function formatYear(year: number, padded: boolean): string {
  const sign = year < 0 ? "-" : "";
  const abs = Math.abs(year);
  return sign + (padded ? String(abs).padStart(4, "0") : String(abs));
}

export function formatPresentation(instant: Instant): string {
  return `${formatYear(instant.year, false)}${formatDatePart(instant.year, instant.dayOfYear, false)}:${formatTime(instant.time, 1)}`;
}

export function formatInterchange(instant: Instant): string {
  return `${formatYear(instant.year, true)}${formatDatePart(instant.year, instant.dayOfYear, true)}:${formatTime(instant.time, 3)}${formatZone(instant.zone)}`;
}

export function formatCanonical(instant: Instant): string {
  const gmt = toGmt(instant);
  return `${formatYear(gmt.year, true)}${formatDatePart(gmt.year, gmt.dayOfYear, true)}:${formatTime(gmt.time, 3)}Z`;
}

export function civilClockFromChrons(time: number): string {
  const totalSeconds = (time / CHRONS_PER_DAY) * 86400;
  const h = Math.floor(totalSeconds / 3600) % 24;
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = Math.floor(totalSeconds % 60);
  return `${pad(h, 2)}:${pad(m, 2)}:${pad(s, 2)}`;
}

export function fortnightRange(year: number, letter: string): {
  start: { year: number; month: number; day: number };
  end: { year: number; month: number; day: number };
  startDoy: number;
  endDoy: number;
} {
  const startDoy = dayOfYearFromFortnight(letter, 1);
  const endDoy = dayOfYearFromFortnight(letter, 14);
  return {
    startDoy,
    endDoy,
    start: gregorianFromDayOfYear(year, startDoy),
    end: gregorianFromDayOfYear(year, endDoy),
  };
}

export function formatGregorian(d: { year: number; month: number; day: number }): string {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${d.day} ${months[d.month - 1]} ${d.year}`;
}

export function formatGregorianShort(d: { year: number; month: number; day: number }): string {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${d.day} ${months[d.month - 1]}`;
}

const INSTANT_RE =
  /^(-?\d{1,4})(?:([A-Z])(\d{1,2})|(YD|LD))(?::(\d{1,3}(?:\.\d+)?)([Zz]|[+-]\d{1,3}(?:\.\d+)?)?)?$/;
const TIME_RE = /^(\d{1,3}(?:\.\d+)?)([Zz]|[+-]\d{1,3}(?:\.\d+)?)$/;

function parseZoneToken(token: string | undefined, fallback: number | null): number | null {
  if (token === undefined) return fallback;
  if (token === "Z" || token === "z") return 0;
  return Number(token);
}

export type ParsedChron =
  | { kind: "instant"; value: Instant }
  | { kind: "date"; year: number; dayOfYear: number }
  | { kind: "time"; time: number; zone: number };

export function parseChronInput(input: string, fallbackZone: number): ParsedChron {
  const s = input.trim().replace(/\s+/g, "");
  const instant = INSTANT_RE.exec(s);
  if (instant) {
    const year = Number(instant[1]);
    let dayOfYear: number;
    if (instant[4] === "YD") dayOfYear = 365;
    else if (instant[4] === "LD") {
      if (!isLeapYear(year)) throw new Error(`LD is invalid in ${year}`);
      dayOfYear = 366;
    } else {
      dayOfYear = dayOfYearFromFortnight(instant[2], Number(instant[3]));
    }
    if (!instant[5]) {
      return { kind: "date", year, dayOfYear };
    }
    const time = Number(instant[5]);
    if (time < 0 || time >= 1000) throw new Error("time must be in [0, 1000)");
    const zone = parseZoneToken(instant[6], fallbackZone);
    if (zone === null) throw new Error("zone required");
    return { kind: "instant", value: { year, dayOfYear, time, zone } };
  }
  const timeOnly = TIME_RE.exec(s);
  if (timeOnly) {
    const time = Number(timeOnly[1]);
    if (time < 0 || time >= 1000) throw new Error("time must be in [0, 1000)");
    const zone = parseZoneToken(timeOnly[2], fallbackZone);
    if (zone === null) throw new Error("zone required");
    return { kind: "time", time, zone };
  }
  throw new Error("could not parse Chron string");
}

export function selfTest(): string[] {
  const failures: string[] = [];
  const check = (name: string, got: unknown, expected: unknown) => {
    if (got !== expected) failures.push(`${name}: got ${got}, expected ${expected}`);
  };

  const noon = fromUtc(new Date("2020-02-09T12:00:00Z"), 0);
  check("C12 doy", noon.dayOfYear, 40);
  check("C12 letter", calendarFromDayOfYear(2020, 40).fortnight, "C");
  check("C12 day", calendarFromDayOfYear(2020, 40).day, 12);
  check("C12 time", Math.round(noon.time), 500);
  check("C12 canonical", formatCanonical(noon), "2020C12:500Z");

  const west = fromUtc(new Date("2020-02-09T12:00:00Z"), 300);
  check("west local time", Math.round(west.time), 200);
  check("west interchange", formatInterchange(west), "2020C12:200+300");

  const carrollton = fromUtc(new Date("2026-08-30T22:17:00Z"), 269);
  check("R04 letter", calendarFromDayOfYear(2026, carrollton.dayOfYear).fortnight, "R");
  check("R04 day", calendarFromDayOfYear(2026, carrollton.dayOfYear).day, 4);
  check("R04 local", formatTime(carrollton.time, 3), "659.472");
  check("R04 canonical", formatCanonical(carrollton), "2026R04:928.472Z");

  check("zone Carrollton", zoneFromLongitudeWest(96.9), 269);
  check("zone Prague", zoneFromLongitudeWest(-14.4), -40);
  check("zone Chicago", zoneFromLongitudeWest(87.6), 243);

  const leapFeb = gregorianDayOfYear(2020, 2, 29);
  check("Feb 29 doy", leapFeb, 60);
  check("Feb 29 letter", calendarFromDayOfYear(2020, 60).fortnight, "E");
  check("Feb 29 day", calendarFromDayOfYear(2020, 60).day, 4);

  check("YD 2021", calendarFromDayOfYear(2021, 365).day, "YD");
  check("LD 2020", calendarFromDayOfYear(2020, 366).day, "LD");

  return failures;
}
