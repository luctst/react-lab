import appState from "../../state/state";
import {VISIBILITY_TODO, VISIBILITY_DONE, VISIBILITY_DELETED} from "../../actions/tasksVisibility";

const tasksVisibilityReducer = (state = appState.visibilityFilter, action) => {
	switch (action.type) {
		case VISIBILITY_TODO:
			return VISIBILITY_TODO;
		case VISIBILITY_DONE:
			return VISIBILITY_DONE;
		case VISIBILITY_DELETED:
			return VISIBILITY_DELETED;
		default:
			return state;
	}
}

export default tasksVisibilityReducer;
