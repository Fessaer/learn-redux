/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import TaskList from "./components/TaskList";
import AddNewTask from "./components/AddNewTask";
import Decrement from "./components/Decrement";
import Increment from "./components/Increment";

function App() {
  // Получаем наш state
  const data = useSelector((state) => {
    return { tasks: state.tasks, num: state.num };
  });
  console.log(data);

  return (
    <Container className="main-app-container">
      <Row className="mb-4">
        <Col className="mt-4">
          <AddNewTask />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={12}>
          <Increment />
        </Col>
        <Col md={12}>
          <Decrement />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h4>Список задач</h4>
        </Col>
        <Col md={12}>
          <h4>{data.num}</h4>
        </Col>
        <Col>
          <TaskList tasks={data.tasks} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
