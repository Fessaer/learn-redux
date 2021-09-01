import * as actions from "./actionTypes";

export const addTask = (task) => ({
  type: actions.TASK_ADD,
  payload: task,
});

export const toggleTask = (id) => ({
  type: actions.TASK_TOGGLE,
  payload: { id },
});

export const removeTask = (id) => ({
  type: actions.TASK_REMOVE,
  payload: { id },
});

export const Increment = () => ({
  type: actions.INCREMENT,
  payload: {},
});

export const Decrement = () => ({
  type: actions.DECREMENT,
  payload: {},
});

export const getTodos = (todos) => ({
  type: actions.GETTODOS,
  payload: todos,
});

export const fetchTodo = () => {
  return async (dispatch) => {
    await fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then((json) => dispatch(getTodos(json)));
  };
};
