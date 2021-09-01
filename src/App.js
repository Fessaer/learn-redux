/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import TaskList from "./components/TaskList/TaskList";
import AddNewTask from "./components/AddNewTask/AddNewTask";
import Decrement from "./components/Decrement/Decrement";
import Increment from "./components/Increment/Increment";
import TodoFetch from "./components/TodoFetch/TodoFetch";
import CategoriesList from "./components/CategoriesList";
import AddNewCategory from "./components/AddNewCategory";
import StatusFilter from "./components/StatusFilter";
import { selectVisibleTasks } from "./store/selectors";

function App() {
  // Получаем наш state
  const data = useSelector((state) => {
    return state.customs.increment;
  });
  const tasks = selectVisibleTasks(useSelector((state) => state));

  return (
    <Container className="main-app-container">
      <Row className="mb-4">
        <Col className="mt-4">
          <AddNewTask />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Row className="align-items-center">
            <Col md={6}>
              <h4 className="mb-0">Список задач</h4>
            </Col>
            <Col md={6}>
              <StatusFilter />
            </Col>
          </Row>
          <hr />
        </Col>
        <Col md={3}>
          <CategoriesList />
          <AddNewCategory />
        </Col>
        <Col>
          {tasks.length ? (
            <TaskList tasks={tasks} />
          ) : (
            "У вас пока нет задач. Воспользуйтесь формой выше для добавления задачи."
          )}
        </Col>
      </Row>
      <Increment />
      <Decrement />
      <>{data.num}</>
      <Col md={12}>
        <div style={{ padding: "5px 0px" }}>
          <TodoFetch />
        </div>
      </Col>
    </Container>
  );
}

export default App;
