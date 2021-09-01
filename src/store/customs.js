import { combineReducers } from "redux";
import incrementReducer from "./increment/reducer";
import todosReducer from "./todoFetch/reducer";

export default combineReducers({
  increment: incrementReducer,
  todos: todosReducer,
});
