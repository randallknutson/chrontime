import * as React from "react";

import "./../assets/scss/App.scss";
const { Chron } = require('@chrontime/chrontime');

export default function Current(props) {
  return (
    <div>
      <h2>Current Date and Time</h2>
      <div className="card card-body bg-light">{Chron.now()}</div>
    </div>
  )
}
