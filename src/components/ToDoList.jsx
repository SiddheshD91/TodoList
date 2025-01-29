import { useState } from "react";
import ToDoItem from "./ToDoItem";
import "../css/style.css";
import styles from "./ToDoList.module.css";
import Form from "./Form";
import ToDo from "./ToDo";
import Footer from "./Footer";

export default function ToDoList() {
  const [taskList, setTaskList] = useState([]);
  const newArray = taskList.filter((todo) => todo.done);
  const completedToDos = newArray.length;
  const totalToDos = taskList.length;
  return (
    <>
      <Form taskList={taskList} setTaskList={setTaskList} />
      <ToDo taskList={taskList} setTaskList={setTaskList} />
      <Footer completedToDos={completedToDos} totalToDos={totalToDos} />
    </>
  );
}
