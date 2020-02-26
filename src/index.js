import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Leftside from "./leftside";
import Rightside from "./rightside";

ReactDOM.render(<Leftside />, document.getElementById("leftside"));
ReactDOM.render(<Rightside />, document.getElementById("rightside"));

serviceWorker.unregister();
