import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import App from "./components/App";

import "./styles/base-styles.scss";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement,
);
