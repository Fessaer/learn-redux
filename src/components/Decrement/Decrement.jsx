import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { setDecrement } from "../../store/increment/actions";

export default function Decrement() {
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(setDecrement());
  };

  return (
    <>
      <Button onClick={handleDecrement} variant="danger">
        Decrement
      </Button>{" "}
    </>
  );
}
