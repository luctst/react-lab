import React from "react";

/**
 * Render h1 title when there is no task
 */
const NoTask = props => {
	return (
		<main className="container mt-3">
			<div className="row">
				<div className="col-12">
					<h1 className="text-center">No Tasks in {props.tab} tab.</h1>
				</div>
			</div>
		</main>
	);
};

export default NoTask;
