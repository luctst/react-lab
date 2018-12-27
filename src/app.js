/**
 * Import
 */
import React from "react";
import { render } from "react-dom";
import Person from "./view/Person";

/**
 * Variables
 */
const root = document.querySelector("#root");

/**
 * Declaration
 */
class App extends React.Component {
    state = {
        person: [
            { name: "Lucas", age: 23 }
        ],
        test: "don't change"
    }
    switchNameHandler = () => {
        this.setState({
            person: [
                {name: "Tommy", age:23},
            ]
        });
    }
    alertHandler = () => {
        alert(`This is an alert !!`);
    }
    getNameHandler = event => {
        this.setState({
            person: [
                {name: event.target.value, age: 23}
            ]
        });
    }
    render() {
        return (
            <React.Fragment>
                <Person alert={this.alertHandler}>And i like movies</Person>
                <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
                <button onClick={this.switchNameHandler}>Switch name</button>
                <input type="text" onChange={this.getNameHandler}></input>
            </React.Fragment>
        )
    }
}

/**
 * Execution
 */
render(<App/>, root);