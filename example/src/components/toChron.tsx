import * as React from "react";

import "./../assets/scss/App.scss";
const { Chron } = require('../../../lib/Chron');

export default function Current(props) {
  const [dateTime, setDateTime] = React.useState(null);

  const handleSetDatetime = (event: any) => {
    setDateTime(event.target.value);
  }

  let chronTime = '';
  try {
    chronTime = new Chron(new Date(dateTime)).toString();
  }
  catch (err) {
    console.log(err);
  }

  return (
    <div>
      <h2>Convert to Cron Time</h2>
      <div className="form-control">
        <label>Datetime</label>
        <input type="text" onChange={handleSetDatetime} />
      </div>
      <div className="panel">
        {chronTime}
      </div>
    </div>
  )
}
