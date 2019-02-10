/**
 * Import
 */
import React from "react";

/**
 * Déclaration
 */
class LifeCycle extends React.Component {
    constructor(props) { //TODO: Called in first.
        super(props);
        console.log(`Called from the constructor function`);
        this.state = {
            name: "Lucas"
        };
    }
    componentWillMount() { // TODO: Called in second.
        console.log(`Called from the componentWillMount function`);
    }
    componentDidMount() { //TODO: Called in last.
        console.log(`Called from the componentDidMount function`);
    }
    componentDidUpdate() { //TODO: Called last when update.
        console.log(`Component was update`);
    }
    render() { //TODO: Called in third.
        console.log(`Called from the render function`);
        return <h1 onClick={this.setAlert}>Hello {this.state.name}</h1>
    }
    setAlert = () => {
        this.setState({
            name: "Tommy",
        });
    }
};

/**
 * Export
 */
export default LifeCycle;