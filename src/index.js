import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  container
);
