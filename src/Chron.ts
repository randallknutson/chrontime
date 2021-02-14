// TODO:
// 1. Get time zones working

const millisecondsInDay = 86400000;

interface Zone {
  longitude: number;
  specificity: number;
}

type Fort = '' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';
type Day = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 'LD' | 'YD';

export class Chron {
  private _year: number;
  private _dayOfYear: number;
  private _time: number;
  private _offset: number;
  private _zone: Zone;

  constructor(
    datetime?: string | Chron | Date,
    zone: Zone = {
      longitude: 0,
      specificity: 1,
    },
  ) {
    this._year = 0;
    this._dayOfYear = 0;
    this._time = 0;
    this._offset = 0;
    if (typeof datetime === 'string') {
      this._parse(datetime);
    }
    else if (datetime instanceof Chron) {
      this._parse(datetime.toString())
    }
    else if (datetime instanceof Date) {
      this._convert(datetime);
    } else {
      this._convert(new Date());
    }
    this._zone = zone;
  }

  static now(): string {
    return new Chron().toString();
  }

  private _convert(date: Date) {
    this._year = date.getUTCFullYear();
    const startYear = new Date(
      `${this._year}-01-01T00:00:00Z`,
    );
    this._dayOfYear = Math.floor((date.getTime() - startYear.getTime()) / millisecondsInDay) + 1;
    this._time = ((date.getTime() - startYear.getTime()) % millisecondsInDay) / millisecondsInDay * 1000;
  }

  private _parse(value: string) {
    const matches = value.match(/(-?\d{1,4})([A-Z])(D|[1-9][1-4]?):(\d{1,3}\.?\d*)([+-]\d{1,3})?/);
    if (!matches) {
      throw new Error('Invalid time string - Did not match regex');
    }
    this._year = parseInt(matches[1]);
    if (matches[3] !== 'D') {
      this._dayOfYear = (matches[2].charCodeAt(0) - 65) * 14 + parseInt(matches[3]);
    }
    // Year Day and Leap Day.
    else {
      if (matches[2] === 'Y') {
        this._dayOfYear = 365;
      }
      else if (matches[2] === 'L' && this._isLeapYear(this.year)) {
        this._dayOfYear = 366;
      }
      else {
        throw new Error('Invalid time string - Invalid Day');
      }
    }
    this._time = parseInt(matches[4]);
    this._offset = parseInt(matches[5]);
  }

  private _isLeapYear(year: number) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  }

  toDate(): Date {
    const startYear = new Date(
      `${this.year}-01-01T00:00:00Z`,
    );
    return new Date(startYear.getTime() + ((this._dayOfYear - 1) + this._time / 1000) * millisecondsInDay);
  }

  toString(): string {
    return `${this.year}${this.fort}${this.day}:${this.time}${this.zone}`;
  }

  get year(): number {
    return this._year;
  }

  set year(year: number) {
    this._year = year;
  }

  get fort(): Fort {
    if (this._dayOfYear === 365 || this._dayOfYear === 366) {
      return '';
    }
    return String.fromCharCode(Math.floor(this._dayOfYear / 14) - (this.day !== 14 ? 0 : 1) + 65) as Fort;
  }

  get day(): Day {
    if (this._dayOfYear === 365) {
      return 'YD';
    }
    else if (this._dayOfYear === 366) {
      return 'LD';
    }
    return (this._dayOfYear % 14 !== 0 ? this._dayOfYear % 14 : 14) as Day;
  }

  get dayOfYear(): number {
    return this._dayOfYear;
  }

  set dayOfYear(dayOfYear: number) {
    this._dayOfYear = dayOfYear;
  }

  get time(): number {
    return Math.round(this._time * 1000) / 1000;
  }

  set time(time: number) {
    this._time = time;
  }

  get offset(): number {
    return this._offset;
  }

  set offset(offset: number) {
    this._offset = offset;
  }

  get zone(): string {
    return '';
  }
}
