import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Componenteheader from "./componentes/Componenteheader";
import Footer from "./componentes/Footer";
import Body from "./componentes/Body";
import Componentecatalogo from "./componentes/Componentecatalogo";
import "bootstrap/dist/css/bootstrap.min.css";
import ComponentepanelLogin from "./componentes/ComponentepanelLogin";



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
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <Componenteheader onNavegar={cambiarPagina} />
              <Body
                paginaActual={paginaActual.seccion}
                consola={paginaActual.consola}
                categoria={paginaActual.categoria}
              />
          </>
          
        }/>

        
        <Route path="/login" element={
          <ComponentepanelLogin />}
        />
      </Routes>
      
      
      <Footer />
    </Router>
  );
}

export default App;
