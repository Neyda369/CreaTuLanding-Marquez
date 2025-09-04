// ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail.jsx'; // Importa el componente de detalle, no el de la lista
import productosData from '../../data/productos.json';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const getItem = new Promise((resolve, reject) => {
            const product = productosData.find(p => p.id === itemId);
            if (product) {
                resolve(product);
            } else {
                reject('Producto no encontrado');
            }
        });

        getItem
            .then(result => {
                setItem(result);
            })
            .catch(error => {
                console.error(error);
                setItem(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    if (loading) {
        return <div style={{ textAlign: 'center', padding: '5rem' }}>Cargando producto...</div>;
    }

    if (!item) {
        return <div style={{ textAlign: 'center', padding: '5rem', color: 'red' }}>Producto no encontrado.</div>;
    }

    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;