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
      <Componenteheader onNavegar={cambiarPagina} />
      <Body
        paginaActual={paginaActual.seccion}
        consola={paginaActual.consola}
        categoria={paginaActual.categoria}
      />
      
      <Footer />
    </>
  );
}

export default App;
