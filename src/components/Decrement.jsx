import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import * as actions from "../store/actions";

export default function Decrement() {
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(actions.Decrement());
  };

  return (
    <>
      <Button onClick={handleDecrement} variant="danger">
        Decrement
      </Button>{" "}
    </>
  );
}
