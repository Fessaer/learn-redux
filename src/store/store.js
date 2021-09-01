/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./rootReducer";
import thunk from "redux-thunk";

export default configureStore({ reducer });

// const store = createStore(
//   reducer,
//   compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );
// export default store;
