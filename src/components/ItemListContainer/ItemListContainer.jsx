// ItemListContainer.jsx
import React, { useState, useEffect } from 'react';
import productosData from '../../data/productos.json';
import ItemList from './ItemList.jsx';

// El componente recibe la categoría como una prop
const ItemListContainer = ({ categoryId }) => {
   
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const getProducts = new Promise((resolve) => {
            let filteredProducts = productosData;
            if (categoryId) {
                filteredProducts = productosData.filter(prod => prod.categoria === categoryId);
            }
            resolve(filteredProducts);
        });

        getProducts
            .then(result => {
                setProducts(result);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [categoryId]); 

    if (loading) {
        return <div style={{ textAlign: 'center', padding: '5rem' }}>Cargando productos...</div>;
    }

    return (
        <div style={{ padding: '2rem' }}>
            <h2 style={{ textAlign: 'center', margin: '2rem 0' }}>Nuestro Catálogo de Productos</h2>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;