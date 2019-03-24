/**
 * Import, variables
 */
import * as actions from "../actions/actions";
import { connect } from "react-redux";
import React, {useState} from "react";

/**
 * Render the counter component
 */
const Counter = props => {
    const [state, setState] = useState({addDeleteWith: 5});

    const handleBlur = e => {
        if (e.target.value === "") {
            setState({addDeleteWith: 5});
            e.target.value = "";
        } else {
            setState({addDeleteWith: parseInt(e.target.value)});
            e.target.value = "";
        }
    }

    return (
        <section className="container">
            <div className="row">
                <div className="col-12">
                    <p>Click score = <strong>{props.ctr}</strong></p>
                </div>
            </div>
            <div className="row">
                <div className="col-4 form-group">
                    <input type="number" className="form-control" onBlur={handleBlur}/>
                </div>
            </div>
            <div className="row">
                <div className="col-2 text-center">
                    <button className="btn btn-success" onClick={props.onHandleClick}>Add</button>
                </div>
                <div className="col-2 text-center text-center">
                    <button className="btn btn-danger" onClick={props.onDecrementClick}>Increment</button>
                </div>
                <div className="col-2 text-center">
                    <button className="btn btn-primary" onClick={() => props.onAddWith(state.addDeleteWith)}>Add {state.addDeleteWith}</button>
                </div>
                <div className="col-2 text-center">
                    <button className="btn btn-warning" onClick={() => props.onDeleteWith(state.addDeleteWith)}>Delete {state.addDeleteWith}</button>
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onHandleClick: () => dispatch({type:actions.ADD}),
        onDecrementClick: () => dispatch({type:actions.DECREMENT}),
        onAddWith: number => dispatch({type:actions.ADD_WITH, value: number}),
        onDeleteWith: number => dispatch({type:actions.DECREMENT_WITH, value: number})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);