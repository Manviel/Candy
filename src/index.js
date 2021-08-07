import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Store } from "./libs/context";
import { CustomerStore } from "./libs/store";
import { store } from "./libs/reducer";

import App from "./components/App";

import "./styles/index.css";

ReactDOM.render(
  <Provider store={store}>
    <Store>
      <CustomerStore>
        <App />
      </CustomerStore>
    </Store>
  </Provider>,
  document.getElementById("root")
);
