import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Componenteheader from "./componentes/Componenteheader";
import Footer from "./componentes/Footer";
import Body from "./componentes/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import ComponentepanelLogin from "./componentes/ComponentepanelLogin";
import { CarritoProvider } from "./carrito/CarritoContext";

function App() {
  const [paginaActual, setPaginaActual] = useState({
    seccion: "inicio",
    consola: null,
    categoria: null,
    juego: null,
    terminoBusqueda: null,
  });

  const cambiarPagina = (
    seccion,
    consola = null,
    categoria = null,
    juego = null,
    terminoBusqueda = null
  ) => {
    setPaginaActual({ seccion, consola, categoria, juego, terminoBusqueda });
  };

  return (
    <CarritoProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Componenteheader onNavegar={cambiarPagina} />
                <Body
                  paginaActual={paginaActual.seccion}
                  consola={paginaActual.consola}
                  categoria={paginaActual.categoria}
                  juego={paginaActual.juego}
                  terminoBusqueda={paginaActual.terminoBusqueda}
                  onNavegar={cambiarPagina}
                />
              </>
            }
          />
          <Route path="/login" element={<ComponentepanelLogin />} />
        </Routes>
        <Footer />
      </Router>
    </CarritoProvider>
    
  );
}

export default App;
