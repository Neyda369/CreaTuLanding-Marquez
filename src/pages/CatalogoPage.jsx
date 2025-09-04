import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import ItemListContainer from '../components/ItemListContainer/ItemListContainer.jsx';
import './HomePage.css'; 

const CatalogoPage = () => {
    // Obtenemos la categoría del parámetro de la URL
    const { categoryId } = useParams();

    // Menú de categorías 
    const categories = [
        { name: 'Todos los productos', id: null },
        { name: 'Perros', id: 'perros' },
        { name: 'Gatos', id: 'gatos' },
        { name: 'Conejos', id: 'conejos' }, 
        { name: 'Aves', id: 'aves' },
        { name: 'Tortugas', id: 'tortugas' },
    ];

    // Para manejar el clic en el menú interno de categorías (en la página de catálogo)
    // Navigate para cambiar la URL y que el useParams en ItemListContainer lo detecte
    const navigate = useNavigate(); 
    const handleCategoryClick = (id) => {
        if (id) {
            navigate(`/catalogo/${id}`);
        } else {
            navigate('/catalogo'); // Para "Todos los productos"
        }
    };


    return (
        <div style={{ padding: '2rem' }}>
            <h2 style={{ textAlign: 'center', margin: '2rem 0' }}>Nuestro Catálogo de Productos</h2>

            <div className="category-menu">
                {categories.map(category => (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        className={`category-button ${categoryId === category.id ? 'active' : ''}`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* ItemListContainer recibe el categoryId de la URL */}
            <ItemListContainer categoryId={categoryId} />
        </div>
    );
};

export default CatalogoPage;