import React, {useState, useRef} from "react";
import store from "../store/store";
import TaskList from "./TaskList";

/**
 * Render the input to add Task in your todo app and handle visibility filter.
 */
const AddTask = () => {
	const [state, setState] = useState({...store.getState()});
    const input = useRef();

    store.subscribe(() => setState({...store.getState()}));

    const handleClick = () => {
        if (input.current.value === "") {
            alert("You must add a task.");
        } else {
            store.dispatch({ type: "ADD_TASK", value: input.current.value});
            input.current.value = "";
        }
	}

	const handleVisibility = e => store.dispatch({ type: e.target.textContent });

    return (
        <>
            <section className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="form-group">
                            <input ref={input} placeholder="Add your task" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-success" onClick={handleClick}>Add Task</button>
                    </div>
					<div className="col-5 btn--filter">
					{
						Object.keys(state.tasksReducer).map((el, i) => {
							if (i === 0) {
								return <p
											key={el}
											style={{backgroundColor:"#ffc107"}}
											className={state.tasksVisibilityReducer === el ? "is__active" : "is__not__active"} onClick={handleVisibility}>
												<a>{el}</a>
										</p>
							} else if (i === 1) {
								return <p
											key={el}
											style={{ backgroundColor: "#28a745" }}
											className={state.tasksVisibilityReducer === el ? "is__active" : "is__not__active"} onClick={handleVisibility}>
												<a>{el}</a>
										</p>
							} else if (i === 2) {
								return <p
											key={el}
											style={{ backgroundColor: "#dc3545" }}
											className={state.tasksVisibilityReducer === el ? "is__active" : "is__not__active"} onClick={handleVisibility}>
												<a>{el}</a>
										</p>
							}
						})
					}
					</div>
                </div>
            </section>
			<TaskList
				taskData={state.tasksReducer[`${state.tasksVisibilityReducer}`]}
				visibilityTab={state.tasksVisibilityReducer}
			/>
        </>
    );
};

export default AddTask;
