import React from "react";
import "./App.css";
import Componenteheader from "./componentes/Componenteheader";
import Footer from "./componentes/Footer";

function App() {
  return (
    <>
      <Componenteheader />
      <main className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </main>
    </>
  );
}

export default App;
