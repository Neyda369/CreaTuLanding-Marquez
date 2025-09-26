// src/Router/AppRouter.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import CatalogoPage from '../pages/CatalogoPage.jsx';
import ItemPage from '../pages/ItemPage.jsx'; // <--- Importa ItemPage
import Cart from '../components/Cart/Cart.jsx';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<CatalogoPage />} />
            <Route path="/category/:categoryId" element={<CatalogoPage />} />
            <Route path="/item/:itemId" element={<ItemPage />} /> {/* <--- Usa ItemPage aquí */}
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
    );
};

export default AppRouter;





