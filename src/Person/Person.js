import React from "react";

export default Person = (props) => { // props define dynamic properties who are define in the parent component, the App component here.
    return (
        <div>
            <p onClick={props.click}>My name is {props.name} and i'm {props.age} {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/> 
        </div>
    );
};