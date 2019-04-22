/**
 * Import, variables
 */
import React, {useState} from "react";
import NoTask from "../components/NoTask";
import store from "../store/store";
const style = {
    "display": "flex",
    "justifyContent": "space-between"
}

/**
 * Render the list of task.
 * @param {Array} props.taskData Array of tasks to display.
 * @param {String} props.visibilityTab Name of the visibility tab to update, find, delete a value.
 */
const TaskList = props => {
    const [state, setState] = useState({isInput: false, inputActive: 0, oldInputValue: ""});

	const handleClick = e => store.dispatch({ type: "DELETE", value: e.target.parentNode.firstElementChild.textContent, visibilityTab: props.visibilityTab});

	const handleBlur = () => setState({isInput: !state.isInput});

    const handleFocus = (e, elementActive) => e.target.value = elementActive;

    const handleClickSpan = (e, index) => {
        setState({
            isInput: !state.isInput,
            inputActive: index,
            oldInputValue: e.target.innerText
        });
    }

    const handleChange = (e, i) => store.dispatch({type: "UPDATE", data: {newValue: e.target.value, indexToUpdate: i, visibilityTab: props.visibilityTab}});

    return props.taskData.length === 0 ?
        <NoTask/>
    :<section className="container">
        <div className="row">
            <div className="col-7">
                <ul className="list-group">
                    {
                        props.taskData.map((el, i) => {
                            return <li
                                        style={style}
                                        key={el}
                                        className="list-group-item mt-2">
                                        {
                                            state.isInput && state.inputActive === i ?
                                                <input
                                                    onFocus={(e) => handleFocus(e, el)}
                                                    onBlur={handleBlur}
                                                    onChange={(e) => handleChange(e, i)}
                                                    autoFocus
                                                />
                                            :<span onClick={(e) => handleClickSpan(e, i)}>{el}</span>
                                        }
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
