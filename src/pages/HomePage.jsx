import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import CategoryCard from '../components/CategoryCard/CategoryCard.jsx'; 
import './HomePage.css'; 

const HomePage = () => {
    const navigate = useNavigate(); // Hook para la navegación 

    const categoriesData = [
        { id: 'perros', name: 'Perros', image: '/assets/categorias/perro-1.jpg' },
        { id: 'gatos', name: 'Gatos', image: '/assets/categorias/gato-3.jpeg' },
        { id: 'conejos', name: 'Conejos', image: '/assets/categorias/conejo-3.jpeg' },
        { id: 'aves', name: 'Aves', image: '/assets/categorias/aves-1.jpeg' },
        { id: 'tortugas', name: 'Tortugas', image: '/assets/categorias/tortuga-1.jpeg' },
    ];

    const handleCategoryClick = (categoryId) => {
        // Navega a la página de catálogo y pasa la categoría como estado
        navigate(`/catalogo/${categoryId}`);
    };

    return (
        <div>
            {/* SECCIÓN 1: Banner Principal de Bienvenida */}
            <div className="landing-page">
                <div className="landing-content">
                    <h1 className="welcome-title">Bienvenido a Todo Mascotas</h1>
                    <p className="welcome-text">
                        Descubre nuestra gran variedad de productos para el bienestar de tus amigos peludos.
                        ¡Calidad y amor en cada artículo! Envíos Gratis.
                    </p>
                    {/* Botón a la sección de categorías o al catálogo completo */}
                    <Link to="/catalogo" className="main-call-to-action-button">Ver Catálogo Completo</Link>
                </div>
            </div>

            {/* SECCIÓN 2: Servicios*/}
            <div className="features-section">
                <h2 className="section-title">Nuestros Compromisos</h2>
                <div className="feature-cards">
                    <div className="feature-card">
                        <span className="feature-icon">🐾</span>
                        <h3>Amor por las Mascotas</h3>
                        <p>Dedicación y pasión en cada producto.</p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">🚚</span>
                        <h3>Envío Rápido</h3>
                        <p>Tu pedido en tiempo récord.</p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">💖</span>
                        <h3>Calidad Garantizada</h3>
                        <p>Solo lo mejor para tu compañero fiel.</p>
                    </div>
                </div>
            </div>

            {/* SECCIÓN 3: Categorías de Productos - Con las tarjetas que pides */}
            <div className="categories-section" id="seccion-categorias">
                <h2 className="section-title">Explora por Categoría</h2>
                <div className="category-cards-container">
                    {categoriesData.map(category => (
                        <CategoryCard
                            key={category.id}
                            category={category}
                            onClick={() => handleCategoryClick(category.id)}
                        />
                    ))}
                </div>
            </div>

            {/* SECCIÓN 4: Productos Destacados/Promociones (Porque quiero que esté esta sección) */}

            <div className="featured-products-section">
                <h2 className="section-title">Productos que te encantarán</h2>
                {/* Por ahora, un placeholder. Más adelante productos reales. */}
                <div className="featured-placeholder">
                    <p>Aquí irán productos en promoción o los más populares.</p>
                    <Link to="/catalogo" className="secondary-call-to-action-button">Ver Ofertas</Link>
                </div>
            </div>


        </div>
    );
};

export default HomePage;