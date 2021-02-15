import * as React from "react";
import { render } from "react-dom";
import Current from "./components/Current";
import ToChron from './components/toChron';

render(<Current />, document.getElementById("current"));
render(<ToChron />, document.getElementById("tochron"));
