import React from 'react'
import "../estilos/ComponentepanelLogin.css";

export default function 
() {
  return (
    <div className='container dashboard-login d-flex justify-content-center align-items-center' >
        <div className='card p-4 shadow pixel-card' style={{ width: '500px' }}>
            <h2>Iniciar Sesión</h2>
        
        <form>
            <div className="form-group">
                <label htmlFor="username">Usuario:</label>
                <input type="text" id="username" className="form-control" placeholder="Ingresa tu usuario" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" className="form-control" placeholder="Ingresa tu contraseña" />
            </div>
            <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
        </form>

        </div>
        
    </div>
  )
}
