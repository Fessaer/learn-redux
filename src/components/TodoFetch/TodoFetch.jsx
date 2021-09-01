import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { fetchTodo } from "../../store/todoFetch/actions";

export default function TodoFetch() {
  const dispatch = useDispatch();

  const handleGetTodo = () => {
    dispatch(fetchTodo());
  };

  return (
    <>
      <Button onClick={handleGetTodo} variant="danger">
        GetTodo
      </Button>{" "}
    </>
  );
}
