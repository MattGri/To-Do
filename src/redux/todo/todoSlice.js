import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todosList: [],
};

export const slice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
      addTodo: (state, action) => {
          state.todosList.push(action.payload);
      },
      deleteTodo: (state,action) => {
          state.todosList = state.todosList.filter(todo => todo.id !== action.payload.id)
      }
  },
});

export const { addTodo, deleteTodo } = slice.actions;

export const todosList = store => store.todos.todosList;

export default slice.reducer;
