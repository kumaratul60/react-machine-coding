import { createStore } from "redux";
import counterReducer from "./reducer.counterReducer";

const store = createStore(counterReducer);

export default store;
