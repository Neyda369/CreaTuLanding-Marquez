// src/services/categories.js

import { db } from './firebase.js';
import { collection, getDocs } from 'firebase/firestore';

export async function getAllCategories() {
    const categoriesCollectionRef = collection(db, 'categories');
    const querySnapshot = await getDocs(categoriesCollectionRef);
    const categories = [];
    querySnapshot.forEach((doc) => {
        categories.push({ id: doc.id, ...doc.data() });
    });
    return categories;
}
