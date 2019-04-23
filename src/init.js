import React from "react";
import ReactDOM from "react-dom";

/*
import store from "./store";
import { Provider } from "react-redux";
*/

import App from "./containers/App";

import "normalize.css";

import "./assets/styles/global.scss";

ReactDOM.render(
  /* <Provider store={store}> */
    <App />
  /* </Provider> */,
  document.getElementById("root")
);