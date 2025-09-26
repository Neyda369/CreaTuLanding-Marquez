// src/components/ItemList/ItemList.jsx

import React from 'react';
import Item from '../Item/Item.jsx'; // ✨ Importamos nuestro componente Item
import './ItemList.css';

const ItemList = ({ products }) => {
    if (!products || products.length === 0) {
        return <p>No hay productos para mostrar en esta lista.</p>;
    }

    return (
        <div className="item-list">
            {products.map(product => (
                // ✨ Ahora renderizamos el componente Item para cada producto
                <Item key={product.id} item={product} />
            ))}
        </div>
    );
};

export default ItemList;
