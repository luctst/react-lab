/**
 * Import, Variables
 */
import "./assets/scss/main.scss";
import React from "react";
import { render } from "react-dom";
import App from "./view/app";
const app = document.querySelector("#root");

/**
 * Main component hold all our components to be render.
 */
class Main extends React.Component {
    render() {
        return (
            <React.Fragment>
                <App/>
            </React.Fragment>
        );
    }
}

/**
 * Éxécution
 */
render(<Main/>, app);