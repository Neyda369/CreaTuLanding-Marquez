// src/components/ItemDetailContainer/ItemDetailContainer.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { getProductById } from '../../services/products.js';
import './ItemDetailContainer.css'; // ✨ Nueva importación del CSS

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        const fetchProduct = async () => {
            try {
                const product = await getProductById(itemId);
                if (product) {
                    setItem(product);
                } else {
                    setError('Producto no encontrado en la base de datos.');
                    setItem(null);
                }
            } catch (err) {
                console.error("Error al obtener el producto:", err);
                setError('Hubo un error al cargar el producto. Por favor, inténtalo de nuevo.');
                setItem(null);
            } finally {
                setLoading(false);
            }
        };

        if (itemId) {
            fetchProduct();
        } else {
            setError('No se ha proporcionado un ID de producto.');
            setLoading(false);
        }

    }, [itemId]);

    if (loading) {
        return <div className="item-detail-container-message loading">Cargando producto...</div>; // ✨ Clases CSS
    }

    if (error) {
        return <div className="item-detail-container-message error">{error}</div>; // ✨ Clases CSS
    }

    if (!item) {
        return <div className="item-detail-container-message no-product">No se pudo encontrar el producto.</div>; // ✨ Clases CSS
    }

    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;


