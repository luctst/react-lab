/**
 * Import
 */
import React from "react";

/**
 * Déclaration
 */
class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        console.log(`Called from the constructor function`);
        this.state = {};
    }
    componentWillMount() {
        console.log(`Called from the componentWillMount function`);
    }
    componentDidMount() {
        console.log(`Called from the componentDidMount function`);
    }
    render() {
        console.log(`Called from the render function`);
        return <h1>Hello internet</h1>
    }
};

/**
 * Export
 */
export default LifeCycle;