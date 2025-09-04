import React, { useState } from 'react';
import './ItemCount.css'; 

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="item-count">
            <div className="count-controls">
                <button onClick={handleDecrement} className="count-button">-</button>
                <span className="count-display">{count}</span>
                <button onClick={handleIncrement} className="count-button">+</button>
            </div>
            <button
                onClick={() => onAdd(count)}
                disabled={stock === 0}
                className="add-to-cart-button"
            >
                Agregar al Carrito
            </button>
        </div>
    );
};

export default ItemCount;