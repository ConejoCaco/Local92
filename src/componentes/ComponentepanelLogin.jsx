import React, { useState } from "react";
import Componenteformaddjuegos from "./Componenteformaddjuegos";
import Componenteformaddproducto from "./Componenteformaddproducto";
import Dashboardlistadoproductos from "./Dashboardlistadoproductos";
import "../estilos/ComponentepanelLogin.css";

export default function ComponentepanelLogin() {
  const [autenticado, setAutenticado] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario === "admin" && password === "admin") {
      setAutenticado(true);
      setError("");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  if (autenticado) {
    return (
      <div className="contenedor-temporal">
        
        <Componenteformaddjuegos />
        <Componenteformaddproducto />
        <Dashboardlistadoproductos tipo="Stock" />
        <Dashboardlistadoproductos tipo="Pedidos" />
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