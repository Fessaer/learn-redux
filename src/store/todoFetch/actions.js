import { createAction } from "@reduxjs/toolkit";

export const getTodos = createAction("GETTODOS");

export const fetchTodo = () => {
  return async (dispatch) => {
    await fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then((json) => dispatch(getTodos(json)));
  };
};
