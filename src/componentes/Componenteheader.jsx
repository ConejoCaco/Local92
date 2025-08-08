import React from "react";
import "../estilos/Componenteheader.css";
import { Search, User, ShoppingCart } from "lucide-react";

export default function Componenteheader() {
  return (
    <div className="contenedor">
      <div id="nav">
        {/* Logo de la pag */}
        <div className="logo">
          <a>
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

        {/* Menu Despegable */}
        <ul id="menu" className="productos">
          <li>
            <a href="/PS5/home.asp">PS5</a>
            <div className="dropdown ps5">
              <div className="col_1">
                <ul>
                  <li>
                    <a href="/paginas/PS5.jsx">Juegos</a>
                  </li>
                  <li>
                    <a href="/Productos/PS5/Juegos">Accesorios</a>
                  </li>
                  <li>
                    <a href="/Productos/PS5/Consolas">Consolas</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <a href="/PS4/home.asp" className="drop">
              PS4
            </a>
            <div className="dropdown ps4">
              <div className="col_1">
                <ul>
                  <li>
                    <a href="/Productos/PS5/Juegos">Juegos</a>
                  </li>
                  <li>
                    <a href="/Productos/PS5/Juegos">Accesorios</a>
                  </li>
                  <li>
                    <a href="/Productos/PS5/Juegos">Consolas</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <a href="/PS3/home.asp" className="drop">
              PS3
            </a>
            <div className="dropdown ps3">
              <div className="col_1">
                <ul>
                  <li>
                    <a href="/Productos/PS5/Juegos">Juegos</a>
                  </li>
                  <li>
                    <a href="/Productos/PS5/Juegos">Accesorios</a>
                  </li>
                  <li>
                    <a href="/Productos/PS5/Juegos">Consolas</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <a href="/XONE/home.asp" className="drop">
              X ONE
            </a>
            <div className="dropdown xboxone">
              <div className="col_1">
                <ul>
                  <li>
                    <a href="/Productos/XONE/Juegos">Juegos</a>
                  </li>
                  <li>
                    <a href="/Productos/XONE/Juegos">Accesorios</a>
                  </li>
                  <li>
                    <a href="/Productos/XONE/Juegos">Consolas</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <a href="/X360/home.asp" className="drop">
              XBOX 360
            </a>
            <div className="dropdown xbox360">
              <div className="col_1">
                <ul>
                  <li>
                    <a href="/Productos/X360/Juegos">Juegos</a>
                  </li>
                  <li>
                    <a href="/Productos/X360/Juegos">Accesorios</a>
                  </li>
                  <li>
                    <a href="/Productos/X360/Juegos">Consolas</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <a href="/Switch/home.asp" className="drop">
              SWITCH
            </a>
            <div className="dropdown switch">
              <div className="col_1">
                <ul>
                  <li>
                    <a href="/Productos/SWITCH/Juegos">Juegos</a>
                  </li>
                  <li>
                    <a href="/Productos/SWITCH/Juegos">Accesorios</a>
                  </li>
                  <li>
                    <a href="/Productos/SWITCH/Juegos">Consolas</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <a href="/Switch2/home.asp" className="drop">
              SWITCH 2
            </a>
            <div className="dropdown switch2">
              <div className="col_1">
                <ul>
                  <li>
                    <a href="/Productos/SWITCH2/Juegos">Juegos</a>
                  </li>
                  <li>
                    <a href="/Productos/SWITCH2/Juegos">Accesorios</a>
                  </li>
                  <li>
                    <a href="/Productos/SWITCH2/Juegos">Consolas</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <a href="/otros/home.asp" className="drop">
              Otros
            </a>
            <div className="dropdown otros">
              <div className="col_1">
                <ul>
                  <li>
                    <a href="/Productos/Otros/Accesorios">Accesorios</a>
                  </li>
                  <li>
                    <a href="/Productos/Otros/Mandos">Mandos</a>
                  </li>
                  <li>
                    <a href="/Productos/Otros/Consolas">Consolas</a>
                  </li>
                  <li>
                    <a href="/Productos/Otros/Varios">Otros</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
