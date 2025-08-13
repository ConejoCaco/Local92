import React from "react";
import ComponenteCatalogo from "./Componentecatalogo";
import CatalogoCompleto from "./CatalogoCompleto";
import ComponentePanelLogin from "./ComponentepanelLogin";
import "../estilos/Body.css";

export default function Body({ paginaActual, consola, categoria, onNavegar }) {
  const renderizarContenido = () => {
    switch (paginaActual) {
      case "inicio":
        return (
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
        );

      case "catalogo":
        return (
          <section className="seccion-catalogo">
            <CatalogoCompleto consola={consola} categoria={categoria} />
          </section>
        );
      case "login":
        return <ComponentePanelLogin />;

      default:
        return (
          <section className="seccion-catalogo">
            <ComponenteCatalogo onNavegar={onNavegar} plataforma="PS5" />
          </section>
        );
    }
  };

  return <main className="body-container">{renderizarContenido()}</main>;
}
