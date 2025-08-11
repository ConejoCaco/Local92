import React, { useEffect, useState } from 'react';
import juegosPs5 from '../juegos/juegosPs5.js';
import datotempClientes from '../juegos/datotempClientes.js';
import ComponenteItemStock from './ComponenteitemStock.jsx';
import ComponenteItemPedido from './ComponenteitemPedido.jsx';
import "../estilos/ComponenteitemPedido.css";

export default function Dashboardlistadoproductos({ tipo }) {
  
  const [items, setItems] = useState(
    tipo === 'Stock' ? juegosPs5 : datotempClientes
  );
  

  const agregarStock = (id, nuevoStock) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, stock: nuevoStock } : item
      )
    );
  };

  const cambiarEstado = (id, nuevoEstado) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, estado: nuevoEstado } : item
      )
    );
  };

  // para renderizar segun el parametro 
  const renderItem = (item) => {
    if (tipo === 'Stock') {
      return (
        <ComponenteItemStock
          key={item.id}
          id={item.id}
          nombre={item.titulo}
          precio={item.precio}
          stock={item.stock}
          imagen={item.imagen}
          agregarStock={agregarStock}
        />
      );
    } else if (tipo === 'Pedidos') {
      return (
        <ComponenteItemPedido
          key={item.id}
          id={item.id}
          nombre={item.nombre}
          rut={item.rut}
          precio={item.precio}
          estado={item.estado}
          cambiarEstado={cambiarEstado}
        />
      );
    }
    return null;
  };

  return (
    <div className='container d-flex justify-content-center align-items-center container-dashboard'>
      <div className='dashboard-container'>
        <h2 className='text-center mb-4'>
          {tipo === 'Stock' ? 'Stock de juegos' : 'Lista de Pedidos'}
        </h2>
        <div className='lista-pedidos'>
          {items.map(renderItem)}
        </div>
      </div>
    </div>
  );
}
