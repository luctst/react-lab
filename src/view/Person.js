/**
 * Import
 */
import React from "react";

/**
 * Variables
 */
const style = {
    color: "red",
}

/**
 * Declaration
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