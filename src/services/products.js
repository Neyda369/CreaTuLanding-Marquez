// src/services/products.js

import { db } from './firebase'; 

import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';


const productsCollectionRef = collection(db, 'products');

/**
 
 * @returns {Promise<Array<Object>>} Una promesa que resuelve con un array de objetos de productos.
 */
export async function getAllProducts() {
    const querySnapshot = await getDocs(productsCollectionRef);
    const products = [];
    querySnapshot.forEach((doc) => {
        // Para cada documento, extraemos su ID y los datos, y los combinamos
        products.push({ id: doc.id, ...doc.data() });
    });
    return products;
}

/**
 * Función para obtener productos de la colección 'products' filtrados por categoría.
 * @param {string} categoryId - El ID de la categoría por la cual filtrar.
 * @returns {Promise<Array<Object>>} Una promesa que resuelve con un array de objetos de productos filtrados.
 */
export async function getProductsByCategory(categoryId) {
    // Construimos una consulta para filtrar por el campo 'category'
    const q = query(productsCollectionRef, where('category', '==', categoryId));
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
    });
    return products;
}

/**
 * Función para obtener un producto específico por su ID de documento.
 * @param {string} productId - El ID del producto a buscar.
 * @returns {Promise<Object|null>} Una promesa que resuelve con el objeto del producto o null si no se encuentra.
 */
export async function getProductById(productId) {
    // Obtenemos una referencia a un documento específico dentro de la colección 'products'
    const docRef = doc(db, 'products', productId);
    const docSnap = await getDoc(docRef); // Intentamos obtener el documento

    if (docSnap.exists()) {
        // Si el documento existe, devolvemos su ID y sus datos
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        // Si no existe, lo indicamos
        console.log(`No product found with ID: ${productId}`);
        return null;
    }
}

// Puedes añadir más funciones aquí si necesitas:
// - updateProductStock(productId, newStock)
// - addProduct(productData)
// - deleteProduct(productId)
