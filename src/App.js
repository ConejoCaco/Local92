import React, { useState } from "react";
import "./App.css";
import Componenteheader from "./componentes/Componenteheader";
import Footer from "./componentes/Footer";
import Body from "./componentes/Body";
import Componentecatalogo from "./componentes/Componentecatalogo";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [paginaActual, setPaginaActual] = useState({
    seccion: "inicio",
    consola: null,
    categoria: null,
  });

  const cambiarPagina = (seccion, consola = null, categoria = null) => {
    setPaginaActual({
      seccion,
      consola,
      categoria,
    });
  };

  return (
    <>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
=======
>>>>>>> Stashed changes
      <Componenteheader onNavegar={cambiarPagina} />
      <Body
        paginaActual={paginaActual.seccion}
        consola={paginaActual.consola}
        categoria={paginaActual.categoria}
      />
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      <Footer />
    </>
  );
}

export default App;
