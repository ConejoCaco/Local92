import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Componenteheader from "./componentes/Componenteheader";
import Footer from "./componentes/Footer";
import Body from "./componentes/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import ComponentepanelLogin from "./componentes/ComponentepanelLogin";

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [paginaActual, setPaginaActual] = useState({
    seccion: "inicio",
    consola: null,
    categoria: null,
  });

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setPaginaActual({ seccion: "inicio", consola: null, categoria: null });
    } else if (path.startsWith("/catalogo/")) {
      const parts = path.split("/");
      if (parts.length >= 4) {
        setPaginaActual({
          seccion: "catalogo",
          consola: parts[2],
          categoria: parts[3],
        });
      }
    }
  }, [location]);

  const cambiarPagina = (seccion, consola = null, categoria = null) => {
    setPaginaActual({ seccion, consola, categoria });
    if (seccion === "inicio") {
      navigate("/");
    } else if (seccion === "catalogo") {
      navigate(`/catalogo/${consola}/${categoria}`);
    }
  };

  return (
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
              />
            </>
          }
        />

        <Route path="/login" element={<ComponentepanelLogin />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default AppWrapper;
