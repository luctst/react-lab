import React, {useState}  from "react";
import { connect } from "react-redux";
import {ADD, DECREMENT, ADD_WITH, DECREMENT_WITH} from "../actions/counter";

const Counter = ({ctr, ADD, DECREMENT, ADD_WITH, DECREMENT_WITH}) => {
	const [state, setState] = useState(0);

	const handleBlur = e => setState(parseInt(e.target.value));

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
					<button className="btn btn-success" onClick={() => ADD()}>Add</button>
				</div>
				<div className="col-2 text-center text-center">
					<button className="btn btn-danger" onClick={() => DECREMENT()}>Decrement</button>
				</div>
				<div className="col-2 text-center">
					<button className="btn btn-primary" onClick={() => ADD_WITH(state)}>Add {state}</button>
				</div>
				<div className="col-2 text-center">
					<button className="btn btn-warning" onClick={() => DECREMENT_WITH(state)}>Decrement with {state}</button>
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

export default connect(mapStateToProps, {ADD, DECREMENT, ADD_WITH, DECREMENT_WITH})(Counter);
