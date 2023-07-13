import "./App.css";
import { useState, useEffect } from "react";
import Add_Tasks from "./components/Add-Tasks/Add_Tasks";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";

function App() {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) || []);
  const [Usertask, setUsertask] = useState({});

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="App">
      <Header />
      <main>
        <div className="container pb-5">
          <Add_Tasks taskList={taskList} setTaskList={setTaskList} Usertask={Usertask} setUsertask={setUsertask} />
          <Tasks taskList={taskList} setTaskList={setTaskList} Usertask={Usertask} setUsertask={setUsertask} />
        </div>
      </main>
    </div>
  );
}

export default App;
