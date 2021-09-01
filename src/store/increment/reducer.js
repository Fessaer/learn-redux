import { createReducer } from "@reduxjs/toolkit";
import { setIncrement, setDecrement } from "./actions";

export default createReducer(
  { num: 0 },
  {
    [setIncrement.type]: (increment, actions) => {
      increment["num"] = increment["num"] + 1;
    },
    [setDecrement.type]: (increment, actions) => {
      increment["num"] = increment["num"] - 1;
    },
  }
);
