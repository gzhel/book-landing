import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./shared/styles/css/main.css";
import "./shared/styles/fa/fa-styles/font-awesome.min.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
