/**
 * Import, Variables
 */
import React from "react";
import Person from "./components/Person";
import LifeCycle from "./components/LifeCycle";

/**
 * App component
 */
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: [
                { name: "Lucas", age: 23 },
                { name: 'Tommy', age: 22 }
            ],
            showPerson: false
        }
    }
    switchNameHandler = () => {
        let d = this.state.showPerson;
        this.setState({
            person: [
                { name: "Max", age: 23 },
                { name: 'Tommy', age: 22 }
            ],
            showPerson: !d,
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
        if (this.state.showPerson) {
            return (
                <React.Fragment>
                    {
                        this.state.person.map(el => <Person key={el.name} name={el.name} age={el.age} alert={this.alertHandler}/>)
                    }
                    <LifeCycle/>
                    <button onClick={this.switchNameHandler}>Switch name</button>
                    <input type="text" onChange={this.getNameHandler}></input>
                </React.Fragment>
            );
        } else {
            return (
                <button onClick={this.switchNameHandler}>Switch name</button>
            );
        }
    }
}