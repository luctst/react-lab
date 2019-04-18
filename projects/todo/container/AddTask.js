/**
 * Import, variables..
 */
import React, {useState, useRef} from "react";
import store from "../store/Store";
import TaskList from "./TaskList";

/**
 * Render the input to add Task in your todo app.
 */
const AddTask = () => {
    const [state, setState] = useState({input: "", ...store.getState()});
    const input = useRef();

    store.subscribe(() => {
        setState({input: input.current.value, ...store.getState()});
    });

    const handleClick = () => {
        if (input.current.value === "") {
            alert("You must add a task.");
        } else {
            store.dispatch({ type: "ADD_TASK", value: input.current.value});
            input.current.value = "";
        }
    }

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
                </div>
            </section>
            <TaskList 
                taskData={state.reducerTaskList.tasks} 
                content={state.reducerTaskList.noTask}
            />
        </>
    );
};

export default AddTask;