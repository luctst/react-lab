import React from "react";
import { connect } from "react-redux";
import {ADD, DECREMENT} from "../actions/counter";

const Counter = ({ctr, incrementByOne, decrementByOne}) => {
	const handleClickIncrement = () => incrementByOne();

	const handleClickDecrement = () => decrementByOne();

	return (
		<section className="container">
			<div className="row">
				<div className="col-12">
					<p>Click score = <strong>{ctr}</strong></p>
				</div>
			</div>
			<div className="row">
				<div className="col-4 form-group">
					<input type="number" className="form-control" />
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
					<button className="btn btn-primary"></button>
				</div>
				<div className="col-2 text-center">
					<button className="btn btn-warning"></button>
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
	return {
		incrementByOne: () => dispatch(ADD()),
		decrementByOne: () => dispatch(DECREMENT()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
