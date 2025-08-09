import React from "react";
import ComponenteCatalogo from "./Componentecatalogo";
import CatalogoCompleto from "./CatalogoCompleto";
import "../estilos/Body.css";

export default function Body({ paginaActual, consola, categoria }) {
  const renderizarContenido = () => {
    switch (paginaActual) {
      case "inicio":
        return (
          <section className="seccion-catalogo">
            <ComponenteCatalogo />
          </section>
        );

      case "catalogo":
        return (
          <section className="seccion-catalogo">
            <CatalogoCompleto consola={consola} categoria={categoria} />
          </section>
        );

      default:
        return (
          <section className="seccion-catalogo">
            <ComponenteCatalogo />
          </section>
        );
    }
  };

  return <main className="body-container">{renderizarContenido()}</main>;
}
