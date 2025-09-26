// src/context/CartContext.js

import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (productToAdd, quantity) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === productToAdd.id);

            if (existingItem) {
                const newQuantity = existingItem.quantity + quantity;
                if (newQuantity > productToAdd.stock) {
                    alert(`No hay suficiente stock para añadir ${quantity} más de ${productToAdd.name}. Solo quedan ${productToAdd.stock - existingItem.quantity} unidades.`);
                    return prevItems;
                }
                return prevItems.map(item =>
                    item.id === productToAdd.id
                        ? { ...item, quantity: newQuantity }
                        : item
                );
            } else {
                if (quantity > productToAdd.stock) {
                    alert(`No puedes añadir ${quantity} de ${productToAdd.name}. Solo hay ${productToAdd.stock} unidades disponibles.`);
                    return prevItems;
                }
                return [...prevItems, { ...productToAdd, quantity }];
            }
        });
    };

    const removeItem = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const isInCart = (productId) => {
        return cartItems.some(item => item.id === productId);
    };

    const getCartTotal = () => {
        return cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    };

    const getCartQuantity = () => {
        return cartItems.reduce((acc, item) => acc + item.quantity, 0);
    };

    const contextValue = {
        cartItems,
        addItem,
        removeItem,
        clearCart,
        isInCart,
        getCartTotal,
        getCartQuantity,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};
