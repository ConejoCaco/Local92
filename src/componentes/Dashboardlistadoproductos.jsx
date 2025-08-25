import React, { useEffect, useState } from 'react';
import juegosPs5 from '../juegos/juegosPs5.js';
import datotempClientes from '../juegos/datotempClientes.js';
import ComponenteItemStock from './ComponenteitemStock.jsx';
import ComponenteItemPedido from './ComponenteitemPedido.jsx';
import "../estilos/ComponenteitemPedido.css";

export default function Dashboardlistadoproductos({ tipo }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (tipo === 'Stock') {
      setItems(juegosPs5);
    } else if (tipo === 'Pedidos') {
      setItems(datotempClientes);
    }
  }, [tipo]); //cuadno cambia el tipo se actualiza la lista
  
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
        <div className='barra-busqueda mb-3'>
          <input type='text' className='form-control' placeholder='Buscar...' onChange={
            tipo === 'Stock'
              ? (e) => {
                  const query = e.target.value.toLowerCase();
                  setItems(juegosPs5.filter(item => item.titulo.toLowerCase().includes(query)));
                }
              : (e) => {
                  const query = e.target.value.toLowerCase();
                  setItems(datotempClientes.filter(item => item.nombre.toLowerCase().includes(query) || item.rut.toLowerCase().includes(query)));
          }} />
        </div>
        <div className='d-flex justify-content-between mb-3'>
          <span className='col-4 title'>Nombre</span>
          {tipo === 'Stock' && <span className='col-2 title'>Precio</span>}
          {tipo === 'Stock' && <span className='col-2 title'>Stock</span>}
          {tipo === 'Pedidos' && <span className='col-2 title'>Rut</span>}
          {tipo === 'Pedidos' && <span className='col-2 title'>Estado</span>}
        </div>
        
        <div className='lista-pedidos'>
          {items.map(renderItem)}
        </div>
    
      </div>
    </div>
  );
}
