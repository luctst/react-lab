/**
 * Import, Variables
 */
import React from "react";
import Person from "../components/Person";
import Header from "../components/Header";

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
        this.switchNameHandler = this.switchNameHandler.bind(this);
        this.getNameHandler = this.getNameHandler.bind(this);
    }
    
    switchNameHandler() {
        this.setState((prevState, nextState) => {
            return {
                person: [
                    { name: "Max", age: 23 },
                    { name: 'Tommy', age: 22 }
                ],
                showPerson: !prevState.showPerson
            }
        });
    }

    alertHandler() {
        alert(`This is an alert !!`);
    }

    getNameHandler(event) {
        this.setState({
            person: [
                {name: event.target.value, age: 23}
            ]
        });
    }

    render() {
        return (
            <>
                <Header/>
                {
                    this.state.showPerson ?
                        this.state.person.map((el, i) => <Person key={i} name={el.name} age={el.age} alert={this.alertHandler}/>)
                    :<>
                        <button onClick={this.switchNameHandler}>Switch name</button>
                        <input type="text" onChange={this.getNameHandler}></input>
                    </>
                }
            </>
        );
    }
}