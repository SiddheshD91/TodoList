import styles from "./ToDoItem.module.css";

export default function ToDoItem({ toDo, taskList, setTaskList }) {
  function handleDel(toDo) {
    setTaskList(taskList.filter((item) => toDo.name !== item.name));
  }
  function handleClick(name) {
    const newArray = taskList.map((task) =>
      task.name === name ? { ...task, done: !task.done } : task
    );
    setTaskList(newArray);
  }

  const className = toDo.done ? styles.completed : "";
  return (
    <>
      <h1 className={styles.todo}>
        <span className={className} onClick={() => handleClick(toDo.name)}>
          {toDo.name}
        </span>
        -{" "}
        <button
          className="md-6 btn btn-primary"
          onClick={() => handleDel(toDo)}
        >
          Del
        </button>
      </h1>
    </>
  );
}
