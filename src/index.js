import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "antd/dist/antd.css";
import MainRouter from "./MainRouter";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

ReactDOM.render(
  <Provider store={store}>
    <MainRouter />
  </Provider>,
  document.getElementById("root")
);
