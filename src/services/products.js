// src/services/products.js

import { db } from './firebase';
import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';

const productsCollectionRef = collection(db, 'products');

export async function getAllProducts() {
    const querySnapshot = await getDocs(productsCollectionRef);
    const products = [];
    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
    });
    return products;
}

export async function getProductsByCategory(categoryId) {
    const q = query(productsCollectionRef, where('category', '==', categoryId));
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
    });
    return products;
}

export async function getProductById(productId) {
    const docRef = doc(db, 'products', productId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        console.log(`No product found with ID: ${productId}`);
        return null;
    }
}
