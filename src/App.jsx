import "./App.css";
import Add_Tasks from "./components/Add-Tasks/Add_Tasks";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="container">
          <Add_Tasks />
          <Tasks />
        </div>
      </main>
    </div>
  );
}

export default App;
