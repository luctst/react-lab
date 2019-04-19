import {createStore} from "redux";
import rootReducer from "../reducers/rootReducer";

export const appState = {
    tasks: [],
    noTask: "There is no task here.."
};
export const store = createStore(rootReducer);
