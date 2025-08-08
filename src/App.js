import React from "react";
import logo from "./img/spaceinvaders.gif";
import "./App.css";
import Componenteheader from "./componentes/Componenteheader";
import Footer from "./componentes/Footer";
import Componentecatalogo from "./componentes/Componentecatalogo";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <main className="App">      
        <header className="App-header">
          <Componentecatalogo titulo="PlayStation 5" />
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
      </main>
      <Footer />
    </>
  );
}

export default App;
