import React from "react";
import ReactDOM from "react-dom";
import store from "./store/store";
import {Provider} from "react-redux";
import App from "./container/App";
const app = document.querySelector("#root");
ReactDOM.render(<Provider store={store}><App/></Provider>, app);
