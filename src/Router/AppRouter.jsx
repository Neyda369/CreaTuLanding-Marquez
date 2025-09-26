// src/Router/AppRouter.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx'; 
import ItemListContainer from '../components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer.jsx';
import Cart from '../components/Cart/Cart.jsx';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/products" element={<ItemListContainer />} /> 
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
    );
};

export default AppRouter;




