import * as React from "react";

import "../assets/scss/App.scss";
const { Chron } = require('@chrontime/chrontime');

export default function ToChron() {
  const date = new Date();
  const [dateTime, setDateTime] = React.useState({
    year: date.getUTCFullYear(),
    month: date.getUTCMonth(),
    day: date.getUTCDay(),
    hour: 12,
    minute: 0,
    second: 0,
    datetime: '',
  });

  const handleSetDatetime = (value: string) => {
    setDateTime({
      ...dateTime,
      datetime: value,
    });
  }

  const padLeft = (value: number | string, count: number = 2): string => {
    return '0'.repeat(count - value.toString().length) + value.toString();
  }

  const handleSetDatetimePart = (part: string, value: number) => {
    const newDateTime = {
      ...dateTime,
      [part]: value,
    }
    setDateTime({
      ...newDateTime,
      datetime: `${newDateTime.year}-${padLeft(newDateTime.month)}-${padLeft(newDateTime.day)}T${padLeft(newDateTime.hour)}:${padLeft(newDateTime.minute)}:${padLeft(newDateTime.second)}`,
    });
  }

  let chronTime = '';
  try {
    if (dateTime.datetime) {
      chronTime = new Chron(new Date(dateTime.datetime)).toString();
    }
    console.log('a', dateTime.datetime, chronTime);
  }
  catch (err) {
    console.log(err);
  }
  console.log('b', chronTime);

  return (
    <div className="card">
      <h2 className="card-header">Convert to Chron Time</h2>
      <div className="card-body">
        <h4>Enter a Date Time</h4>
        <div className="form">
          <div className="form-row">
            <div className="form-group col-md-2">
              <label htmlFor="year">Year</label>
              <input
                className="form-control"
                name="year" type="number" min="1900" max="2100" step="1" maxLength={4} placeholder="YYYY"
                value={dateTime.year}
                onChange={(event) => handleSetDatetimePart('year', parseInt(event.target.value))}
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="month">Month</label>
              <input
                className="form-control"
                name="month" type="number" min="1" max="12" step="1" maxLength={2} placeholder="MM"
                value={dateTime.month}
                onChange={(event) => handleSetDatetimePart('month', parseInt(event.target.value))}
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="day">Day</label>
              <input
                className="form-control"
                name="day" type="number" min="1" max="31" step="1" maxLength={2} placeholder="DD"
                value={dateTime.day}
                onChange={(event) => handleSetDatetimePart('day', parseInt(event.target.value))}
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="hour">Hour (24)</label>
              <input
                className="form-control"
                name="hour" type="number" min="0" max="23" step="1" maxLength={2} placeholder="HH"
                value={dateTime.hour}
                onChange={(event) => handleSetDatetimePart('hour', parseInt(event.target.value))}
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="minute">Minutes</label>
              <input
                className="form-control"
                name="minute" type="number" step="1" min="0" max="59" maxLength={2} placeholder="MM"
                value={dateTime.minute}
                onChange={(event) => handleSetDatetimePart('minute', parseInt(event.target.value))}
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="seconds">Seconds</label>
              <input
                className="form-control"
                name="seconds" type="number" step="1" min="0" max="59" maxLength={2} placeholder="SS"
                value={dateTime.second}
                onChange={(event) => handleSetDatetimePart('second', parseInt(event.target.value))}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="datetime"><h4>Or Date Time String</h4></label>
          <input
            className="form-control" name="datetime" type="text"
            value={dateTime.datetime}
            onChange={(event) => handleSetDatetime(event.target.value)} />
        </div>
        <div className="panel">
          <h4>Chron Time</h4>
          {chronTime}
        </div>
      </div>
    </div>
  )
}
