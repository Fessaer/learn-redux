import { createReducer } from "@reduxjs/toolkit";
import { getTodos } from "./actions";

export default createReducer([], {
  [getTodos.type]: (todos, actions) => {
    todos.push(...actions.payload);
  },
});
