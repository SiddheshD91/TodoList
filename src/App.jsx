import { useState } from "react";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <ToDoList />
    </>
  );
}

export default App;
