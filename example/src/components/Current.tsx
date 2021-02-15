import * as React from "react";

import "./../assets/scss/App.scss";
const { Chron } = require('../../../lib/Chron');

export default function Current(props) {
  return (
    <div>
      <h2>Current Date and Time</h2>
      <div>{Chron.now()}</div>
    </div>
  )
}
