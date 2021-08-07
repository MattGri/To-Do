import { ADD, DELETE } from "../actions/toDoActions";

const toDoReducers = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      console.log(action, state);
      return state.filter((toDo) => toDo.id !== action.payload.id);
    default:
      return state;
  }
};

export default toDoReducers;
