// components/ItemListContainer.jsx
import React from 'react';

function ItemListContainer({ greeting }) {
    return (
        <div style={{ padding: '2rem' }}>
            <h2>{greeting}</h2>
            {/* Aquí irá el catálogo */}
        </div>
    );
}

export default ItemListContainer;
