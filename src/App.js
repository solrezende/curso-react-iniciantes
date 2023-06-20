import "./styles.css";
import Navibar from "./components/navbar/navbar";
import Tasklist from "./components/tasklist/tasklist";
import { useState } from "react";

const task = {
  id: 0,
  title: "Nova Tarefa",
  state: "Pendente"
};

export default function App() {
  const [task, setTask] = useState([]);
  return (
    <div className="App">
      <Navibar />
      <div className="container">
        <Tasklist title="Pendente" />
        <Tasklist title="Fazendo" />
        <Tasklist title="Completas" />
      </div>
    </div>
  );
}
