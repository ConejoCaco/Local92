import logo from "./img/spaceinvaders.gif";
import "./App.css";
import Componenteheader from "./componentes/Componenteheader";

function App() {
  return (
    <div className="App">
      <Componenteheader />
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
