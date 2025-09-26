// src/pages/HomePage.jsx

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard/CategoryCard.jsx';
import './HomePage.css';

// ✨ Importamos la función de nuestro nuevo servicio de categorías
import { getAllCategories } from '../services/categories.js';

const HomePage = () => {
    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);
    const [loadingCategories, setLoadingCategories] = useState(true);
    const [errorCategories, setErrorCategories] = useState(null);

    useEffect(() => {
        setLoadingCategories(true);
        setErrorCategories(null);

        const fetchCategories = async () => {
            try {
                const fetchedCategories = await getAllCategories();
                setCategories(fetchedCategories);
            } catch (err) {
                console.error("Error al obtener las categorías:", err);
                setErrorCategories('Hubo un error al cargar las categorías. Por favor, inténtalo de nuevo.');
            } finally {
                setLoadingCategories(false);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryClick = (categoryId) => {
        // ✨ Navega a la ruta de categoría correcta (según AppRouter)
        navigate(`/category/${categoryId}`);
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
                    {/* ✨ Botón a la sección de catálogo completo */}
                    <Link to="/products" className="main-call-to-action-button">Ver Catálogo Completo</Link>
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

            {/* SECCIÓN 3: Categorías de Productos */}
            <div className="categories-section" id="seccion-categorias">
                <h2 className="section-title">Explora por Categoría</h2>
                <div className="category-cards-container">
                    {loadingCategories ? (
                        <div className="category-message loading">Cargando categorías...</div> // ✨ Usamos clases
                    ) : errorCategories ? (
                        <div className="category-message error">{errorCategories}</div> // ✨ Usamos clases
                    ) : (
                        categories.map(category => (
                            <CategoryCard
                                key={category.id}
                                category={category}
                                onClick={() => handleCategoryClick(category.id)}
                            />
                        ))
                    )}
                </div>
            </div>

            {/* SECCIÓN 4: Productos Destacados/Promociones */}
            <div className="featured-products-section">
                <h2 className="section-title">Productos que te encantarán</h2>
                <div className="featured-placeholder">
                    <p>Aquí irán productos en promoción o los más populares.</p>
                    <Link to="/products" className="secondary-call-to-action-button">Ver Ofertas</Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;

