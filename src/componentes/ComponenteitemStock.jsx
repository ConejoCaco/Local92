import React, { useState, useEffect } from 'react';
import "../estilos/ComponenteitemPedido.css";

export default function ComponenteItemStock({ id, nombre, precio, stock, imagen, agregarStock }) {
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    setCantidad(0);
  }, [stock]);

  const aumentarStock = () => {
    if (cantidad > 0) {
      agregarStock(id, stock + cantidad);
      setCantidad(0);
    }
  };

  const reducirStock = () => {
    if (cantidad > 0) {
      agregarStock(id, Math.max(0, stock - cantidad));
      setCantidad(0);
    }
  };

  return (
    <div className='pedido-item d-flex align-items-center justify-content-between mb-2 p-2'>
      <img 
        src={imagen} 
        alt={nombre} 
        style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "6px" }}
      />
      <span className='pedido-col pedido-cliente'>{nombre}</span>
      <span className='pedido-col pedido-precio'>${precio.toLocaleString()}</span>
      <span className='pedido-col pedido-stock'>{stock}</span>
      <span className='pedido-col pedido-cantidad d-flex align-items-center'>
        <button className='btn btn-danger' onClick={reducirStock}>-</button>
        <input
          type='number'
          min='0'
          value={cantidad}
          onChange={(e) => setCantidad(Number(e.target.value))}
        />
        <button className='btn btn-success' onClick={aumentarStock}>+</button>
      </span>
    </div>
  );
}
