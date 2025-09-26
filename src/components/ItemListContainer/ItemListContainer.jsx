// src/components/ItemListContainer/ItemListContainer.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebase'; // <--- ¡RUTA CORREGIDA AQUÍ!
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            let itemsRef = collection(db, 'products');
            let q = categoryId ? query(itemsRef, where('category', '==', categoryId)) : itemsRef;

            const snapshot = await getDocs(q);
            const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setItems(products);
        };

        fetchItems();
    }, [categoryId]);

    return (
        <div className="catalogo">
            <h2>Catálogo {categoryId ? `- ${categoryId}` : ''}</h2>
            <div className="product-list">
                {items.length > 0 ? (
                    items.map(item => (
                        <div key={item.id} className="product-card">
                            {/* La imagen no se cargará si item.imageUrl no existe, pero los demás datos sí deberían aparecer */}
                            <img src={item.imageUrl} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>${item.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No hay productos disponibles.</p>
                )}
            </div>
        </div>
    );
};

export default ItemListContainer;



