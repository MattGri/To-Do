export const ADD = "ADD";
export const DELETE = "DELETE";

export const addToDo = ({ description }) => ({
  type: ADD,
  payload: {
    id: Math.floor(Math.random() * 9999),
    description,
  },
});

export const deleteTodo = ({ id }) => ({
  type: DELETE,
  payload: {
    id,
  },
});
