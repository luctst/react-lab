/**
 * Import, variables, actions
 */
import * as actions from "../actions/actions";
import initialState from "../store/InitState";

/**
 * root reducer update the counter of our `Counter` component
 */
const reducerRoot = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD: {
            const newState = Object.assign({}, state, { counter: state.counter + 1});
            return newState;
        }   
        case actions.DECREMENT: {
            const newState = {counter: state.counter - 1};
            return {...state, ...newState}
        }
        case actions.ADD_WITH: {
            const newState = {counter: state.counter + action.value};
            return {...state, ...newState};
        }
        case actions.DECREMENT_WITH: {
            const newState = {counter: state.counter - action.value};
            return {...state, ...newState};
        }
        default:
            return state;
    }
}

export default reducerRoot;