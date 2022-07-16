import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Docs",
      day: "12/12/3333",
      reminder: true,
    },
    {
      id: 2,
      text: "Requiremnt",
      day: "12/12/3333",
      reminder: true,
    },
    {
      id: 3,
      text: "Firefly",
      day: "12/12/3333",
      reminder: true,
    },
  ]);

  //Delete Task
  const deleteTask = (id) => {};

  return (
    <div className="container">
      <Header title={"Task Tracker"} />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
