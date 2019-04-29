import appState from "../state/state";

const rootReducer = (state = appState, action) => {
	switch (action.type) {
		case "ADD": {
			const newState = { ...state };
			newState.counter += 1;
			return newState;
		}
		case "DECREMENT": {
			const newState = {...state};
			newState.counter -= 1;
			return newState;
		}
		default:
			return state;
	}
}

export default rootReducer;
