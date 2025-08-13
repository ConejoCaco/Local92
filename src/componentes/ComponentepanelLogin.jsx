import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";
import Componenteformaddjuegos from "./Componenteformaddjuegos";
import Componenteformaddproducto from "./Componenteformaddproducto";
import Dashboardlistadoproductos from "./Dashboardlistadoproductos";
import "../estilos/ComponentepanelLogin.css";

export default function ComponentepanelLogin() {
  const [autenticado, setAutenticado] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [opcion, setOpcion] = useState("addJuegos");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario === "admin" && password === "admin") {
      setAutenticado(true);
      setError("");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  const cerrarSesion = () => {
    setAutenticado(false);
    setUsuario("");
    setPassword("");
    setOpcion("addJuegos");
    navigate("/");
  };


  if (autenticado) {
    let contenido;
    switch (opcion) {
      case "addJuegos":
        contenido = <Componenteformaddjuegos />;
        break;
      case "addProducto":
        contenido = <Componenteformaddproducto />;
        break;
      case "stock":
        contenido = <Dashboardlistadoproductos tipo="Stock" />;
        break;
      case "pedidos":
        contenido = <Dashboardlistadoproductos tipo="Pedidos" />;
        break;
      default:
        contenido = <Componenteformaddjuegos />;
    }

    return (
      <div>
        <HeaderAdmin onSeleccion={setOpcion}  onCerrarSesion={cerrarSesion}/>
        <div className="admin-content">{contenido}</div>
      </div>
    );
  }

  return (
    <div className='container dashboard-login d-flex justify-content-center align-items-center'>
      <div className='card p-4 shadow pixel-card' style={{ width: '500px' }}>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Usuario:</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={usuario}
              onChange={e => setUsuario(e.target.value)}
              placeholder="Ingresa tu usuario"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
            />
          </div>
          {error && <div className="text-danger mb-2">{error}</div>}
          <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}