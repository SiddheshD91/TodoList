import ToDoItem from "./ToDoItem";
import styles from "./Header.module.css";
import "../css/style.css";

export default function ToDo({ taskList, setTaskList }) {
  return (
    <>
      <h2 className={styles.header}>This is my ToDo List</h2>
      <ul>
        {taskList.map((task) => (
          <ToDoItem
            key={task.name}
            toDo={task}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))}
      </ul>
    </>
  );
}
