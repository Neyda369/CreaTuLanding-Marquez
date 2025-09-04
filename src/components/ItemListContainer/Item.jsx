import React from 'react';
import { Link } from 'react-router-dom'; 
import './Item.css';

const Item = ({ item }) => {
    return (
        // Envuelve toda la tarjeta en un componente Link
        <Link to={`/item/${item.id}`} className="item-card-link">
            <div className="item-card">
                <img src={item.imagen} alt={item.nombre} className="item-card-image" />
                <div className="item-info">
                    <h3>{item.nombre}</h3>
                    <p className="price">${item.precio}</p>
                    <p className="item-description">{item.descripcion}</p>
                    <p className="item-stock">Stock: {item.stock}</p>
                </div>
            </div>
        </Link>
    );
};

export default Item;