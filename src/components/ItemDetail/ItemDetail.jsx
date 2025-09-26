import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount.jsx';
import './ItemDetail.css';
import { useCart } from '../../context/CartContext.js';

const ItemDetail = ({ item }) => {
    const { addItem, isInCart } = useCart();

    const handleAddToCart = (quantity) => {
        addItem({
            id: item.id,
            name: item.nombre,
            price: item.precio,
            stock: item.stock,
            imageUrl: item.imagen,
        }, quantity);
    };

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

                {isInCart(item.id) ? (
                    <p className="item-in-cart-message">Este producto ya está en tu carrito. <Link to="/cart">Ver Carrito</Link></p>
                ) : (
                    <ItemCount stock={item.stock} initial={1} onAdd={handleAddToCart} />
                )}
            </div>
        </div>
    );
};

export default ItemDetail;
