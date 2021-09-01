import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import * as actions from "../store/actions";

export default function TodoFetch() {
  const dispatch = useDispatch();

  const handleGetTodo = () => {
    dispatch(actions.fetchTodo());
  };

  return (
    <>
      <Button onClick={handleGetTodo} variant="danger">
        GetTodo
      </Button>{" "}
    </>
  );
}
