import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";

import App from "./components/App";

import "./styles/base-styles.scss";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>?
    <App />
  </React.StrictMode>
);
