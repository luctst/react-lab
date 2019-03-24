/**
 * Import, Variables
 */
import "./assets/scss/main.scss";
import React from "react";
import { render } from "react-dom";
import {Provider} from 'react-redux';
import App from "./container/App";
import store from "./store/Store";
const app = document.querySelector("#root");

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    app
);