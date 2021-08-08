import { connect } from "react-redux";
import CreateTodo from "./CreateToDo";
import { addToDo, deleteToDo } from "../redux/actions/toDoActions";

const ToDo = () => {
  return (
    <>
      <CreateTodo />
    </>
  );
};

export default connect()(ToDo);
