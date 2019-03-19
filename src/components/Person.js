/**
 * Import
 */
import React from "react";

/**
 * Variables
 */
const style = {
    boxShadow: "2px 2px 10px #EEE",
    fontSize: "2em",
    width: "50%",
    margin: "2% auto"
}

/**
 * Render the person component with infos.
 */
const Person = props => {
    return (
        <React.Fragment>
            <p onClick={props.alert} style={style}>I'm {props.name} and i'm {props.age} years old, {props.children}</p>
        </React.Fragment>
    );
}

/**
 * Export
 */
export default Person;