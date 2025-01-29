import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ taskList, setTaskList }) {
  const [task, setTask] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    if ({ task }) {
      setTaskList([...taskList, task]);
      setTask({ name: "", done: false });
    }
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        <h1>Add Task: </h1>
      </label>
      <input
        className={styles.input}
        type="text"
        onChange={(e) => setTask({ name: e.target.value, done: false })}
        name="task"
        value={task.name}
      />
      <button className="btn btn-primary" type="submit">
        Add Task
      </button>
    </form>
  );
}
