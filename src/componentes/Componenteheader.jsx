import React, { useState, useMemo } from "react";
import juegosPs5 from "../juegos/juegosPs5";
import juegosPs4 from "../juegos/juegosPs4";
import juegosPs3 from "../juegos/juegosPs3";
import juegosXone from "../juegos/juegosXone";
import juegosX360 from "../juegos/juegosX360";
import juegosSwitch from "../juegos/juegosSwitch";
import juegosSwitch2 from "../juegos/juegosSwitch2";
import accesoriosPs5 from "../accesorios/accesoriosPs5";
import accesoriosPs4 from "../accesorios/accesoriosPs4";
import "../estilos/Componenteheader.css";

export default function Componenteheader({ onNavegar }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [sugerenciasMostrar, setSugerenciasMostrar] = useState(false);
  const [sugerenciaSeleccionada, setSugerenciaSeleccionada] = useState(-1);

  const todosLosProductos = useMemo(() => {
    return [
      ...juegosPs5.map((item) => ({
        ...item,
        consola: "PS5",
        categoria: "juegos",
      })),
      ...juegosPs4.map((item) => ({
        ...item,
        consola: "PS4",
        categoria: "juegos",
      })),
      ...juegosPs3.map((item) => ({
        ...item,
        consola: "PS3",
        categoria: "juegos",
      })),
      ...juegosXone.map((item) => ({
        ...item,
        consola: "XONE",
        categoria: "juegos",
      })),
      ...juegosX360.map((item) => ({
        ...item,
        consola: "X360",
        categoria: "juegos",
      })),
      ...juegosSwitch.map((item) => ({
        ...item,
        consola: "SWITCH",
        categoria: "juegos",
      })),
      ...juegosSwitch2.map((item) => ({
        ...item,
        consola: "SWITCH2",
        categoria: "juegos",
      })),
      ...accesoriosPs5.map((item) => ({
        ...item,
        consola: "PS5",
        categoria: "accesorios",
      })),
      ...accesoriosPs4.map((item) => ({
        ...item,
        consola: "PS4",
        categoria: "accesorios",
      })),
    ];
  }, []);

  const sugerencias = useMemo(() => {
    if (!terminoBusqueda || terminoBusqueda.trim().length < 2) {
      return [];
    }

    const terminoLimpio = terminoBusqueda.toLowerCase().trim();
    const sugerenciasSet = new Set();

    todosLosProductos.forEach((producto) => {
      const titulo = producto.titulo.toLowerCase();
      if (titulo.includes(terminoLimpio)) {
        sugerenciasSet.add(producto.titulo);
      }
    });

    return Array.from(sugerenciasSet).slice(0, 6);
  }, [terminoBusqueda, todosLosProductos]);

  const handleNavegacion = (consola, categoria) => {
    onNavegar("catalogo", consola, categoria);
    setActiveDropdown(null);
  };

  const toggleDropdown = (e, consola) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === consola ? null : consola);
  };

  const irAlInicio = (e) => {
    e.preventDefault();
    onNavegar("inicio");
    setActiveDropdown(null);
  };

  const manejarBusqueda = (e) => {
    e.preventDefault();
    if (terminoBusqueda.trim()) {
      onNavegar("busqueda", null, null, null, terminoBusqueda.trim());
      setActiveDropdown(null);
    }
  };

  const manejarCambioBusqueda = (e) => {
    setTerminoBusqueda(e.target.value);
    if (e.target.value.trim().length >= 2) {
      setSugerenciasMostrar(true);
    } else {
      setSugerenciasMostrar(false);
    }
    setSugerenciaSeleccionada(-1);
  };

  const manejarFocusBusqueda = () => {
    if (terminoBusqueda.trim().length >= 2) {
      setSugerenciasMostrar(true);
    }
    setActiveDropdown(null);
  };

  const manejarBlurBusqueda = () => {
    setTimeout(() => {
      setSugerenciasMostrar(false);
      setSugerenciaSeleccionada(-1);
    }, 150);
  };

  const handleSugerenciaClick = (sugerencia) => {
    setTerminoBusqueda(sugerencia);
    setSugerenciasMostrar(false);
    setSugerenciaSeleccionada(-1);
    onNavegar("busqueda", null, null, null, sugerencia);
  };

  const manejarTeclaBusqueda = (e) => {
    if (e.key === "Enter") {
      manejarBusqueda(e);
    } else if (sugerencias.length > 0) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSugerenciaSeleccionada((prev) =>
          prev < sugerencias.length - 1 ? prev + 1 : prev
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSugerenciaSeleccionada((prev) => (prev > 0 ? prev - 1 : -1));
      } else if (e.key === "Enter" && sugerenciaSeleccionada >= 0) {
        e.preventDefault();
        handleSugerenciaClick(sugerencias[sugerenciaSeleccionada]);
      } else if (e.key === "Escape") {
        setSugerenciasMostrar(false);
        setSugerenciaSeleccionada(-1);
      }
    }
  };

  return (
    <div className="contenedor">
      <div id="nav">
        <div className="logo">
          <a href="#" onClick={irAlInicio} style={{ cursor: "pointer" }}>
            <img
              src="/img/pixil-frame-0.png"
              alt="Logo"
              style={{ marginTop: "3px", height: "70px", width: "auto" }}
            />
          </a>
        </div>

        <div className="buscadorTop">
          <form
            onSubmit={manejarBusqueda}
            style={{ display: "flex", width: "100%", position: "relative" }}
          >
            <input
              name="consulta"
              type="text"
              id="buscadorTopProductos"
              size="40"
              autoComplete="off"
              className="inputBuscador"
              placeholder="Buscar juegos..."
              value={terminoBusqueda}
              onChange={manejarCambioBusqueda}
              onKeyDown={manejarTeclaBusqueda}
              onFocus={manejarFocusBusqueda}
              onBlur={manejarBlurBusqueda}
            />

            {sugerenciasMostrar && sugerencias.length > 0 && (
              <div className="sugerencias-header-dropdown">
                {sugerencias.map((sugerencia, index) => (
                  <div
                    key={index}
                    className={`sugerencia-header-item ${
                      index === sugerenciaSeleccionada ? "seleccionada" : ""
                    }`}
                    onClick={() => handleSugerenciaClick(sugerencia)}
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="#999">
                      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                    {sugerencia}
                  </div>
                ))}
              </div>
            )}
          </form>
        </div>

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

        <ul id="menu" className="productos">
          <li>
            <a
              href="#"
              onClick={irAlInicio}
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Inicio
            </a>
          </li>
          <li className={activeDropdown === "PS5" ? "active" : ""}>
            <a href="#" onClick={(e) => toggleDropdown(e, "PS5")}>
              PS5
            </a>
            <div className="dropdown ps5">
              <div className="col_1">
                <ul>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("PS5", "juegos")}
                    >
                      Juegos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("PS5", "accesorios")}
                    >
                      Accesorios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("PS5", "consolas")}
                    >
                      Consolas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className={activeDropdown === "PS4" ? "active" : ""}>
            <a href="#" onClick={(e) => toggleDropdown(e, "PS4")}>
              PS4
            </a>
            <div className="dropdown ps4">
              <div className="col_1">
                <ul>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("PS4", "juegos")}
                    >
                      Juegos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("PS4", "accesorios")}
                    >
                      Accesorios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("PS4", "consolas")}
                    >
                      Consolas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className={activeDropdown === "PS3" ? "active" : ""}>
            <a href="#" onClick={(e) => toggleDropdown(e, "PS3")}>
              PS3
            </a>
            <div className="dropdown ps3">
              <div className="col_1">
                <ul>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("PS3", "juegos")}
                    >
                      Juegos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("PS3", "accesorios")}
                    >
                      Accesorios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("PS3", "consolas")}
                    >
                      Consolas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className={activeDropdown === "XONE" ? "active" : ""}>
            <a href="#" onClick={(e) => toggleDropdown(e, "XONE")}>
              X ONE
            </a>
            <div className="dropdown xboxone">
              <div className="col_1">
                <ul>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("XONE", "juegos")}
                    >
                      Juegos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("XONE", "accesorios")}
                    >
                      Accesorios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("XONE", "consolas")}
                    >
                      Consolas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className={activeDropdown === "X360" ? "active" : ""}>
            <a href="#" onClick={(e) => toggleDropdown(e, "X360")}>
              XBOX 360
            </a>
            <div className="dropdown xbox360">
              <div className="col_1">
                <ul>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("X360", "juegos")}
                    >
                      Juegos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("X360", "accesorios")}
                    >
                      Accesorios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("X360", "consolas")}
                    >
                      Consolas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className={activeDropdown === "SWITCH" ? "active" : ""}>
            <a href="#" onClick={(e) => toggleDropdown(e, "SWITCH")}>
              SWITCH
            </a>
            <div className="dropdown switch">
              <div className="col_1">
                <ul>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("SWITCH", "juegos")}
                    >
                      Juegos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("SWITCH", "accesorios")}
                    >
                      Accesorios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("SWITCH", "consolas")}
                    >
                      Consolas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className={activeDropdown === "SWITCH2" ? "active" : ""}>
            <a href="#" onClick={(e) => toggleDropdown(e, "SWITCH2")}>
              SWITCH 2
            </a>
            <div className="dropdown switch2">
              <div className="col_1">
                <ul>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("SWITCH2", "juegos")}
                    >
                      Juegos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("SWITCH2", "accesorios")}
                    >
                      Accesorios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("SWITCH2", "consolas")}
                    >
                      Consolas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className={activeDropdown === "OTROS" ? "active" : ""}>
            <a href="#" onClick={(e) => toggleDropdown(e, "OTROS")}>
              Otros
            </a>
            <div className="dropdown otros">
              <div className="col_1">
                <ul>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("OTROS", "accesorios")}
                    >
                      Accesorios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("OTROS", "mandos")}
                    >
                      Mandos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavegacion("OTROS", "consolas")}
                    >
                      Consolas
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => handleNavegacion(e, "OTROS", "otros")}
                    >
                      Otros
                    </a>
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
