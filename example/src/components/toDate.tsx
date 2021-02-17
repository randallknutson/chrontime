import * as React from "react";

import "./../assets/scss/App.scss";
const { Chron } = require('../../../lib/Chron');

export default function ToDate(props) {
  const chron = new Chron();
  const [chronTime, setChronTime] = React.useState({
    year: chron.year,
    fort: chron.fort.charCodeAt(0) - 65 || '',
    day: chron.day,
    chron: 500,
    offset: chron.offset,
    chrontime: '',
  });

  const padLeft = (value: number | string, count: number = 3): string => {
    return '0'.repeat(count - value.toString().length) + value.toString();
  }

  const handleSetChrontime = (chrontime) => {
    setChronTime({
      ...chronTime,
      chrontime,
    })
  }

  const handleSetChronPart = (part: string, value: number | string) => {
    let fort = chronTime.fort;
    let day = chronTime.day;
    if (part === 'day' && ['LD', 'YD'].includes(value.toString())) {
      fort = ''
    }
    if (part === 'fort' && value !== '' && ['LD', 'YD'].includes(day)) {
      day = 1
    }
    const newChronTime = {
      ...chronTime,
      fort,
      day,
      [part]: value,
    };
    setChronTime({
      ...newChronTime,
      chrontime: `${newChronTime.year}${newChronTime.fort === '' ? '' : String.fromCharCode(parseInt(newChronTime.fort.toString()) + 65)}${newChronTime.day}:${padLeft(newChronTime.chron)}`,
    });
  }

  let dateTime = ''
  try {
    dateTime = new Chron(chronTime.chrontime).toDate().toUTCString();
  }
  catch (err) {
    console.log(err);
  }

  return (
    <div className="card">
      <h2 className="card-header">Convert to Date Time</h2>
      <div className="card-body">
        <h4>Enter a Chron Time</h4>
        <div className="form">
          <div className="form-row">
            <div className="form-group col-md-2">
              <label htmlFor="year">Year</label>
              <input
                className="form-control"
                name="year" type="number" min="1900" max="2100" step="1" maxLength={4} placeholder="YYYY"
                value={chronTime.year}
                onChange={(event) => handleSetChronPart('year', parseInt(event.target.value))}
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="fort">Fort</label>
              <select
                className="form-control"
                name="fort" placeholder="FF"
                value={chronTime.fort}
                onChange={(event) => handleSetChronPart('fort', event.target.value)}
              >
                <option value='' key='-1'></option>
                {[...Array(26)].map((value, index) => (
                  <option value={index} key={index}>{String.fromCharCode(index + 65)}</option>
                )
                )}
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="day">Day</label>
              <select
                className="form-control"
                name="day" placeholder="DD"
                value={chronTime.day}
                onChange={(event) => handleSetChronPart('day', event.target.value)}
              >
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
                <option value='13'>13</option>
                <option value='14'>14</option>
                <option value='YD'>YD</option>
                <option value='LD'>LD</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="chron">Chron</label>
              <input
                className="form-control"
                name="chron" type="number" min="-999" max="999" step="1" maxLength={3} placeholder="CC"
                value={chronTime.chron}
                onChange={(event) => handleSetChronPart('chron', parseInt(event.target.value))}
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="offset">Offset</label>
              <input
                className="form-control"
                name="offset" type="number" step="1" min="-999" max="999" maxLength={3} placeholder="FF"
                value={chronTime.offset}
                onChange={(event) => handleSetChronPart('offset', parseInt(event.target.value))}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="datetime"><h4>Or Chron Time String</h4></label>
          <input
            className="form-control" name="datetime" type="text"
            value={chronTime.chrontime}
            onChange={(event) => handleSetChrontime(event.target.value)}
          />
        </div>
        <div className="panel">
          <h4>Date Time</h4>
          {dateTime}
        </div>
      </div>
    </div >
  )
}
