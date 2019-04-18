/**
 * Import, variables
 */
import React, {useState} from "react";
import NoTask from "../components/NoTask";
import store from "../store/Store";
const style = {
    "display": "flex",
    "justifyContent": "space-between"
}

/**
 * Render the list of task.
 */
const TaskList = props => {
    const [state, setState] = useState({isInput: false, inputActive: 0, oldInputValue: ""});

    const handleClick = e => store.dispatch({ type: "DELETE", value: e.target.parentNode.textContent.split("D")[0]});
    const handleBlur = () => setState({isInput: !state.isInput});
    const handleFocus = (e, elementActive) => e.target.value = elementActive;

    const handleClickSpan = (e, index) => {
        setState({ 
            isInput: !state.isInput, 
            inputActive: index, 
            oldInputValue: e.target.innerText 
        });
    }

    const handleChange = e => {
        store.dispatch({ 
            type: "UPDATE", 
            data: {
                newValue: e.target.value,
                oldValue: state.oldInputValue
            } 
        });
    }

    return props.taskData.length === 0 ? 
        <NoTask content={props.content}/>
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
                                                    onChange={handleChange}
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