import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./assets/scss/style.scss";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/store";
import { ClearCacheProvider } from 'react-clear-cache';

ReactDOM.render(
  <ClearCacheProvider duration={10000}>
  <Provider store={store}>
    <App />
  </Provider> </ClearCacheProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
