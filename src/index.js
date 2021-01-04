import React from "react";
import ReactDOM from "react-dom";

import { Store } from "./libs/context";
import { CustomerStore } from "./libs/store";

import App from "./components/App";

import "./styles/index.css";

ReactDOM.render(
  <Store>
    <CustomerStore>
      <App />
    </CustomerStore>
  </Store>,
  document.getElementById("root")
);
