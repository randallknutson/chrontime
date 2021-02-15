import * as React from "react";

const reactLogo = require("./../assets/img/react_logo.svg");
import "./../assets/scss/App.scss";
const { Chron } = require('../../../lib/Chron');
export default class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <h1>Hello World! {Chron.now()}</h1>
        <p>Foo to the barz</p>
        <img src={reactLogo.default} height="480" />
      </div>
    );
  }
}

declare let module: Record<string, unknown>;
