import styles from "./Footer.module.css";

export default function Footer({ completedToDos, totalToDos }) {
  return (
    <>
      <span className={styles.footer}>
        <h1>Completed: {completedToDos} </h1>
        <h1>Total ToDos: {totalToDos}</h1>
      </span>
    </>
  );
}
