import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { setIncrement } from "../../store/increment/actions";

export default function Increment() {
  const dispatch = useDispatch();

  let num = 0;

  const handleIncrement = () => {
    dispatch(setIncrement());
  };

  return (
    <>
      <Button onClick={handleIncrement} variant="success">
        Increment
      </Button>{" "}
    </>
  );
}
