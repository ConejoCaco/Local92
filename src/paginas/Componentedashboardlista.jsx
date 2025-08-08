import React, { useState, useEffect } from 'react';
import ComponenteItemPedido from '../componentes/ComponenteitemPedido';
import ComponenteItemStock from  '../componentes/ComponenteitemStock';
import "../estilos/ComponenteitemPedido.css";

export default function Componentedashboardlista({ Titulo }) {

  const [items, setItems] = useState([]);

  useEffect(() => {
    switch (Titulo) {
      case 'Pedidos':
        setItems([
          { id: 1, tipo: 'pedido', nombre: 'Cliente A', precio: 100, estado: 'Pendiente' },
          { id: 2, tipo: 'pedido', nombre: 'Cliente B', precio: 200, estado: 'Enviado' },
          { id: 3, tipo: 'pedido', nombre: 'Cliente C', precio: 300, estado: 'Entregado' }
        ]);
        break;
      case 'Productos':
        setItems([
          { id: 1, tipo: 'stock', nombre: 'Producto A', precio: 50, stock: 20 },
          { id: 2, tipo: 'stock', nombre: 'Producto B', precio: 75, stock: 15 },
          { id: 3, tipo: 'stock', nombre: 'Producto C', precio: 100, stock: 10 }
        ]);
        break;
      default:
        setItems([]);
    }
  }, [Titulo]);

 
  const agregarStock = (id, nuevoStock) => {
    setItems(prevItems => prevItems.map(item =>
      item.id === id && item.tipo === 'stock'
        ? { ...item, stock: nuevoStock}
        : item
    ));
  };
  
  

  const cambiarEstado = (id, nuevoEstado) => {
    setItems(prevItems => prevItems.map(item =>
      item.id === id && item.tipo === 'pedido'
        ? { ...item, estado: nuevoEstado }
        : item
    ));
  };

  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className='dashboard-container'>
        <h2 className='text-center mb-4'>{Titulo}</h2>
        <div className='lista-pedidos'>
          {items.map(item => {
            if (item.tipo === 'stock') {
              return (
                <ComponenteItemStock
                  key={`stock-${item.id}`}
                  id={item.id}
                  nombre={item.nombre}
                  precio={item.precio}
                  stock={item.stock}
                  agregarStock={agregarStock}
                />
              );
            } else if (item.tipo === 'pedido') {
              return (
                <ComponenteItemPedido
                  key={`pedido-${item.id}`}
                  id={item.id}
                  nombre={item.nombre}
                  precio={item.precio}
                  estado={item.estado}
                  cambiarEstado={cambiarEstado}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}
