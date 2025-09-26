import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCgQZ_-owfU_0TVdyG3SQgMfiUttpVpHno",
    authDomain: "tienda-mascotas-app.firebaseapp.com",
    projectId: "tienda-mascotas-app",
    storageBucket: "tienda-mascotas-app.firebasestorage.app",
    messagingSenderId: "199432540145",
    appId: "1:199432540145:web:8af380d5404d4bc5803e50"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
