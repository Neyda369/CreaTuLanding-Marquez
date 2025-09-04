import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage.jsx';
import CatalogoPage from '../pages/CatalogoPage.jsx'; // Mantenemos esta página
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Ruta para el catálogo completo */}
            <Route path="/catalogo" element={<CatalogoPage />} />
            {/* Ruta para el catálogo filtrado por categoría */}
            <Route path="/catalogo/:categoryId" element={<CatalogoPage />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRouter;
