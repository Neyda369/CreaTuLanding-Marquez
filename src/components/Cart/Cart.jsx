import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext.js';
import './Cart.css';

const Cart = () => {
    const { cartItems, removeItem, clearCart, getCartTotal } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="cart-empty">
                <h2>Tu carrito está vacío</h2>
                <p>Explora nuestros productos y encuentra algo genial para tu mascota!</p>
                <Link to="/" className="btn-primary">Ver Productos</Link>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h2>Tu Carrito de Compras</h2>
            <div className="cart-items-list">
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-info">
                            <h3>{item.name}</h3>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Precio Unitario: ${item.price.toFixed(2)}</p>
                            <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="btn-remove">Eliminar</button>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <h3>Total: ${getCartTotal().toFixed(2)}</h3>
                <div className="cart-actions">
                    <button onClick={clearCart} className="btn-secondary">Vaciar Carrito</button>
                    <button className="btn-primary">Finalizar Compra</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
