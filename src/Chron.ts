// TODO:
// 1. Get time zones working

const millisecondsInDay = 86400000;

type Fort = '' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';
type Day = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 'LD' | 'YD';

export class Chron {
  private _year: number;
  private _dayOfYear: number;
  private _time: number;
  private _offset: number;

  constructor(
    datetime?: string | Chron | Date,
    options: {
      offset?: number,
      longitude?: number,
      specificity?: number,
    } = {
        specificity: 1
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
    if (options?.offset) {
      this.offset = options.offset;
    }
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
    this._time = ((date.getTime() - startYear.getTime()) % millisecondsInDay) / millisecondsInDay;
  }

  private _parse(value: string) {
    const matches = value.match(/(-?\d{1,4})([A-Z])(D|[1-9][1-4]?):(\d{3}\.?\d*)([+-]\d{3})?/);
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
    this._time = parseFloat(matches[4]) / 1000;
    if (matches[5]) {
      this._offset = parseInt(matches[5]);
    }
  }

  private _isLeapYear(year: number) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  }

  private _calculateDay(dayOfYear: number): Day {
    if (dayOfYear === 365) {
      return 'YD';
    }
    else if (dayOfYear === 366) {
      return 'LD';
    }
    return (dayOfYear % 14 !== 0 ? dayOfYear % 14 : 14) as Day;
  }

  private _calculateFort(dayOfYear: number): Fort {
    if (dayOfYear === 365 || dayOfYear === 366) {
      return '';
    }
    return String.fromCharCode(Math.floor(dayOfYear / 14) - (dayOfYear % 14 !== 0 ? 0 : 1) + 65) as Fort;
  }

  toDate(): Date {
    const startYear = new Date(
      `${this.year}-01-01T00:00:00Z`,
    );
    return new Date(startYear.getTime() + ((this._dayOfYear - 1) + this._time) * millisecondsInDay);
  }

  toString(): string {
    let year: number = this.year;
    let dayOfYear: number = this.dayOfYear;
    let time: number | string = this.time;
    let day: Day = 1;
    let fort: Fort = '';
    let offset = '';
    if (this.offset !== 0) {
      time -= this.offset / 1000;
      if (time < 0) {
        dayOfYear--;
        time++;
      }
      else if (time > 1) {
        dayOfYear++;
        time--;
      }
      if (dayOfYear < 1) {
        year--;
        dayOfYear = this._isLeapYear(year) ? 366 : 365;
      }
      else if (dayOfYear > (this._isLeapYear(year) ? 366 : 365)) {
        year++;
        dayOfYear = 1;
      }
      offset = (this.offset < 0 ? '' : '+') + '000'.substring(0, 3 - this.offset.toString().replace('-', '').length) + this.offset.toString();
      day = this._calculateDay(dayOfYear);
      fort = this._calculateFort(dayOfYear);
    }
    else {
      day = this._calculateDay(dayOfYear);
      fort = this._calculateFort(dayOfYear);
    }
    time = (Math.round(time * 1000000) / 1000).toString();
    time = '000'.substring(0, 3 - time.split('.')[0].length) + time;
    return `${year}${fort}${day}:${time}${offset}`;
  }

  get year(): number {
    return this._year;
  }

  set year(year: number) {
    this._year = year;
  }

  get fort(): Fort {
    return this._calculateFort(this.dayOfYear);
  }

  get day(): Day {
    return this._calculateDay(this.dayOfYear);
  }

  get dayOfYear(): number {
    return this._dayOfYear;
  }

  set dayOfYear(dayOfYear: number) {
    this._dayOfYear = dayOfYear;
  }

  get time(): number {
    return this._time;
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
