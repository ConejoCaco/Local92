import React from 'react';
import "../estilos/ComponenteitemPedido.css";


export default function Componenteitempedido({ id, nombre, precio, estado, cambiarEstado }) {

  const cambiarColorestado = (estado) => {
    switch (estado) {
      case 'Pendiente':
        return 'bg-pendiente';
      case 'Enviado':
        return 'bg-enviado';
      case 'Entregado':
        return 'bg-entregado';
      default:
        return '';
    }
  };

  const estados = ['Pendiente', 'Enviado', 'Entregado'];

  return (
    <div className='pedido-item d-flex align-items-center justify-content-between mb-2 p-2'>
      
      <span className='pedido-col pedido-cliente'>{nombre}</span>
      <span className='pedido-col pedido-total'> ${precio}</span>
      <span className={`pedido-col pedido-estado ${cambiarColorestado(estado)}`}>{estado}</span>
      <select 
        className='cambioestado'
        value={estado} 
        onChange={(e) => cambiarEstado(id, e.target.value)} 
      >
        {estados.map(op => (
          <option key={op} value={op}>{op}</option>
        ))}
      </select>
    </div>
  );
}