import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Store } from "./libs/context";

import App from "./components/App";

ReactDOM.render(
  <Store>
    <App />
  </Store>,
  document.getElementById("root")
);
