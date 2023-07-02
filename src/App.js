import './App.css';
import Add_Tasks from './components/Add-Tasks/Add_Tasks';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
    <Header/>
    <main>
    <div className='container d-flex justify-content-center'>

    <Add_Tasks/>

    </div>
    </main>
    </div>
  );
}

export default App;
