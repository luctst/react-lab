/**
 * Import, variables
 */
const {createStore} = require("redux");
const initialState = {
    counter: 0
};

/**
 * Store
 */
const store = createStore(reducerRoot);

/**
 * Reducer
 */
function reducerRoot(state = initialState, action) {
    switch (action.type) {
        case "ADD":
            return Object.assign({}, state, {counter: action.value});
        case "DECREMENT":
            return Object.assign({}, state);
        default:
            return state;
    }
}

/**
 * Subscribe
 */
store.subscribe(() => {
    console.log("Subscribe", store.getState());
});

/**
 * Dispatch
 */
store.dispatch({type:"ADD_TEN", value: 20});
