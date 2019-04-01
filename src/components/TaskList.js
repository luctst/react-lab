/**
 * Import, variables
 */
import React from "react";
import NoTask from "./NoTask";
import store from "../store/Store";
const style = {
    "display": "flex",
    "justifyContent": "space-between"
}

/**
 * Render the list of task.
 */
const TaskList = props => {

    const handleClick = e => {
        store.dispatch({ type: "DELETE", value: e.target.parentNode.textContent.split("D")[0]});
    };

    return props.taskData.length === 0 ? 
        <NoTask content={props.content}/>
    :<section className="container">
        <div className="row">
            <div className="col-7">
                <ul className="list-group">
                    {
                        props.taskData.map(el => {
                            return <li 
                                        style={style}
                                        key={el} 
                                        className="list-group-item mt-2">{el} 
                                        <span className="text-danger" onClick={handleClick}>Delete</span>
                                    </li>
                        })
                    }
                </ul>
            </div>
        </div>
    </section>
};

export default TaskList;