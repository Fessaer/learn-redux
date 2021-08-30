import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import * as actions from "../store/actions";

export default function Increment() {
  const dispatch = useDispatch();

  let num = 0;

  const handleIncrement = () => {
    dispatch(actions.Increment());
  };

  return (
    <>
      <Button onClick={handleIncrement} variant="success">
        Increment
      </Button>{" "}
    </>
  );
}
