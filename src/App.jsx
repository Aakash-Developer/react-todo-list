import "./App.css";
import { useState } from "react";
import Add_Tasks from "./components/Add-Tasks/Add_Tasks";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="App">
      <Header />
      <main>
        <div className="container">
          <Add_Tasks taskList={taskList} setTaskList={setTaskList} />
          <Tasks taskList={taskList} setTaskList={setTaskList} />
        </div>
      </main>
    </div>
  );
}

export default App;
