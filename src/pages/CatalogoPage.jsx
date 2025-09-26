// src/pages/CatalogoPage.jsx

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer.jsx';
import './HomePage.css';

const CatalogoPage = () => {
    const { categoryId } = useParams();
    const categories = [
        { name: 'Todos los productos', id: null },
        { name: 'Perros', id: 'perros' },
        { name: 'Gatos', id: 'gatos' },
        { name: 'Conejos', id: 'conejos' },
        { name: 'Aves', id: 'aves' },
        { name: 'Tortugas', id: 'tortugas' },
    ];
    const navigate = useNavigate();

    const handleCategoryClick = (id) => {
        if (id) {
            navigate(`/category/${id}`);
        } else {
            navigate('/products');
        }
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h2 style={{ textAlign: 'center', margin: '2rem 0' }}>Nuestro Catálogo de Productos</h2>
            <div className="category-menu">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        className={`category-button ${categoryId === category.id ? 'active' : ''}`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            <ItemListContainer categoryId={categoryId} />
        </div>
    );
};

export default CatalogoPage;
