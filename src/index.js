import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./shared/styles/fa/fa-styles/font-awesome.min.css";
import "./shared/styles/scss/main.scss";

AOS.init();

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
