import React, {useState}  from "react";
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import {ADD, DECREMENT, ADD_WITH, DECREMENT_WITH} from "../actions/counter";

const Counter = ({ctr, ADD, DECREMENT, ADD_WITH, DECREMENT_WITH}) => {
	const [state, setState] = useState(0);

	const handleClickIncrement = () => ADD();

	const handleClickDecrement = () => DECREMENT();

	const handleBlur = e => setState(parseInt(e.target.value));

	const addWith = () => ADD_WITH(state);

	const decrement = () => DECREMENT_WITH(state);

	return (
		<section className="container">
			<div className="row">
				<div className="col-12">
					<p>Click score = <strong>{ctr}</strong></p>
				</div>
			</div>
			<div className="row">
				<div className="col-4 form-group">
					<input type="number" className="form-control" onBlur={handleBlur}/>
				</div>
			</div>
			<div className="row">
				<div className="col-2 text-center">
					<button className="btn btn-success" onClick={handleClickIncrement}>Add</button>
				</div>
				<div className="col-2 text-center text-center">
					<button className="btn btn-danger" onClick={handleClickDecrement}>Decrement</button>
				</div>
				<div className="col-2 text-center">
					<button className="btn btn-primary" onClick={addWith}>Add {state}</button>
				</div>
				<div className="col-2 text-center">
					<button className="btn btn-warning" onClick={decrement}>Decrement with {state}</button>
				</div>
			</div>
		</section>
	);
}

const mapStateToProps = state => {
	return {
		ctr: state.counter
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		ADD,
		DECREMENT,
		ADD_WITH,
		DECREMENT_WITH
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
