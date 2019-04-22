import React, { useState } from "react";
import NoTask from "../components/NoTask";
import store from "../store/store";

/**
 * Render the list of task.
 * @param {Array} props.taskData Array of tasks to display.
 * @param {String} props.visibilityTab Name of the visibility tab to update, find, delete a value.
 */
const TaskList = props => {
	const [state, setState] = useState({ isInput: false, inputActive: 0, oldInputValue: "" });

	const handleClick = e => {
		if (e.target.textContent === "destroy") {
			const deleteValidation = confirm(`Careful this action will destroy your task for ever.`);

			deleteValidation ? store.dispatch({type: "DELETE", data: {taskToDelete: e.target.parentNode.firstElementChild.textContent}}) : null
		} else {
			store.dispatch({
				type: "MOVE",
				data: {
					value: e.target.parentNode.firstElementChild.textContent,
					visibilityTab: props.visibilityTab,
					moveInTab: e.target.textContent
				}
			});
		}
	}

	const handleBlur = () => setState({ isInput: !state.isInput });

	const handleFocus = (e, elementActive) => e.target.value = elementActive;

	const handleClickSpan = (e, index) => {
		setState({
			isInput: !state.isInput,
			inputActive: index,
			oldInputValue: e.target.innerText
		});
	}

	const handleChange = (e, i) => store.dispatch({
		type: "UPDATE",
		data: {
			newValue: e.target.value,
			indexToUpdate: i,
			visibilityTab: props.visibilityTab
		}
	});

	return props.taskData.length === 0 ?
		<NoTask tab={props.visibilityTab}/>
		: <main className="container">
			<div className="row">
				<div className="col-7">
					<ul className="list-group">
						{
							props.taskData.map((el, i) => {
								return <li
									key={el}
									className="list-group-item mt-2 d-flex">
									{
										state.isInput && state.inputActive === i ?
											<input
												onFocus={(e) => handleFocus(e, el)}
												onBlur={handleBlur}
												onChange={(e) => handleChange(e, i)}
												autoFocus
											/>
											: <span style={{ "marginRight": "auto" }} onClick={(e) => handleClickSpan(e, i)}>{el}</span>
									}
									<span className="text-warning mr-2" onClick={handleClick}>todo</span>
									<span className="text-success mr-2" onClick={handleClick}>done</span>
									<span className="text-danger" onClick={handleClick}>
										{
											props.visibilityTab === "deleted" ? "destroy" : "deleted"
										}
									</span>
								</li>
							})
						}
					</ul>
				</div>
			</div>
		</main>
};

export default TaskList;
