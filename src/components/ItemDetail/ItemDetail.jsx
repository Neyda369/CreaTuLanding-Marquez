import React from 'react';
import ItemCount from '../ItemCount/ItemCount.jsx'; // Importa el contador
import './ItemDetail.css'; 

const ItemDetail = ({ item }) => {
    return (
        <div className="item-detail">
            <div className="item-detail-image-container">
                <img src={item.imagen} alt={item.nombre} className="item-detail-image" />
            </div>
            <div className="item-detail-info">
                <h2 className="item-detail-title">{item.nombre}</h2>
                <p className="item-detail-category">Categoría: {item.categoria}</p>
                <p className="item-detail-description">{item.descripcion}</p>
                <p className="item-detail-price">${item.precio}</p>
                <p className="item-detail-stock">Stock disponible: {item.stock}</p>
                
                {/* Aquí va el componente ItemCount */}
                <ItemCount stock={item.stock} initial={1} onAdd={() => console.log("Se agregó al carrito")} />
            </div>
        </div>
    );
};

export default ItemDetail;