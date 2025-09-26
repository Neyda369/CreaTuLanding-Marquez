// src/services/categories.js

import { db } from './firebase.js'; // Importamos la instancia de Firestore
import { collection, getDocs } from 'firebase/firestore';

/**
 * Función para obtener todas las categorías de la colección 'categories'.
 * @returns {Promise<Array<Object>>} Una promesa que resuelve con un array de objetos de categorías.
 */
export async function getAllCategories() {
    const categoriesCollectionRef = collection(db, 'categories');
    const querySnapshot = await getDocs(categoriesCollectionRef);
    const categories = [];
    querySnapshot.forEach((doc) => {
        categories.push({ id: doc.id, ...doc.data() });
    });
    return categories;
}
