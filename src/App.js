// src/App.js

import React from 'react';
import AppRouter from './Router/AppRouter.jsx';
import NavBar from './components/NavBar/NavBar.jsx'; // <--- ¡CORREGIDO AQUÍ!
import Footer from './components/Footer/Footer.jsx'; // Esto lo revisaremos después

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <main>
                <AppRouter />
            </main>
            <Footer />
        </div>
    );
};

export default App;
