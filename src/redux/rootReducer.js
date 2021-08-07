import { combineReducers } from "redux";
import toDoReducers from "./reducers/toDoReducers";

const allReducers = combineReducers({
  toDo: toDoReducers,
});

export default allReducers;
