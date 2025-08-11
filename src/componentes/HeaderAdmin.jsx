import React from "react";
import "../estilos/Componenteheader.css";

const opcionesAdmin = [
  { key: "addJuegos", label: "Añadir juegos" },
  { key: "addProducto", label: "Añadir producto" },
  { key: "stock", label: "Revisar stock" },
  { key: "pedidos", label: "Revisar pedidos" },
];

export default function HeaderAdmin({ onSeleccion, onCerrarSesion }) {
  return (
    <div className="contenedor">
      <div id="nav" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <div className="logo">
          <a href="#" style={{ cursor: "pointer" }}>
            <img
              src="/img/pixil-frame-0.png"
              alt="Logo Local92"
              title="Local92"
              style={{ marginTop: "3px", height: "70px", width: "auto" }}
            />
          </a>
        </div>

        {/* Buscador */}
        <div className="buscadorTop">
          <input
            name="consulta"
            type="text"
            id="buscadorTopProductos"
            size="40"
            autoComplete="off"
            className="inputBuscador"
            placeholder="Buscar..."
          />
          <div
            id="resultadoBuscadorTopProductos"
            className="resultadosBuscador"
          ></div>
        </div>

        {/* Opciones admin */}
        <ul id="menu" className="productos" style={{ display: "flex", gap: "30px", margin: 0 }}>
          {opcionesAdmin.map(opcion => (
            <li key={opcion.key} style={{ listStyle: "none" }}>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  onSeleccion(opcion.key);
                }}
                
              >
                {opcion.label}
              </a>
            </li>
          ))}
          <li style={{ listStyle: "none" }}>
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                if (onCerrarSesion) onCerrarSesion();
              }}
              
            >
              Cerrar sesión
            </a>
          </li>
        </ul>

        {/* Redes Sociales */}
        <div className="social" style={{ minWidth: "600px" }}>
          <ul>
            <li>
              <a href="locales.asp">
                <i className="fas fa-store-alt"></i>
              </a>
            </li>
            <li>
              <a href="/contactanos.asp">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/local.92"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/local92arica"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
          </ul>
          <div style={{ marginTop: "4px", fontSize: "12px" }}>
            Local 92 - Centro Comercial El Morro - Arica
          </div>
        </div>
      </div>
    </div>
  );
}