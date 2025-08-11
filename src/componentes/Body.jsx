import React from "react";
import ComponenteCatalogo from "./Componentecatalogo";
import CatalogoCompleto from "./CatalogoCompleto";
<<<<<<< Updated upstream
import ComponentePanelLogin from "./ComponentepanelLogin";
import "../estilos/Body.css";

export default function Body({ paginaActual, consola, categoria, onNavegar }) {
=======
import "../estilos/Body.css";

export default function Body({ paginaActual, consola, categoria }) {
>>>>>>> Stashed changes
  const renderizarContenido = () => {
    switch (paginaActual) {
      case "inicio":
        return (
<<<<<<< Updated upstream
          <>
            <section className="seccion-catalogo">
              <ComponenteCatalogo onNavegar={onNavegar} plataforma="PS5" />
            </section>
            <section className="seccion-catalogo">
              <ComponenteCatalogo onNavegar={onNavegar} plataforma="PS4" />
            </section>
            <section className="seccion-catalogo">
              <ComponenteCatalogo onNavegar={onNavegar} plataforma="PS3" />
            </section>
            <section className="seccion-catalogo">
              <ComponenteCatalogo onNavegar={onNavegar} plataforma="XONE" />
            </section>
            <section className="seccion-catalogo">
              <ComponenteCatalogo onNavegar={onNavegar} plataforma="X360" />
            </section>
            <section className="seccion-catalogo">
              <ComponenteCatalogo onNavegar={onNavegar} plataforma="NSW" />
            </section>
            <section className="seccion-catalogo">
              <ComponenteCatalogo onNavegar={onNavegar} plataforma="NSW2" />
            </section>
          </>
=======
          <section className="seccion-catalogo">
            <ComponenteCatalogo />
          </section>
>>>>>>> Stashed changes
        );

      case "catalogo":
        return (
          <section className="seccion-catalogo">
            <CatalogoCompleto consola={consola} categoria={categoria} />
          </section>
        );
<<<<<<< Updated upstream
      case "login":
        return (
          <ComponentePanelLogin />
        );
=======
>>>>>>> Stashed changes

      default:
        return (
          <section className="seccion-catalogo">
<<<<<<< Updated upstream
            <ComponenteCatalogo onNavegar={onNavegar} plataforma="PS5" />
=======
            <ComponenteCatalogo />
>>>>>>> Stashed changes
          </section>
        );
    }
  };

  return <main className="body-container">{renderizarContenido()}</main>;
}
