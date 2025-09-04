import React from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import AppRouter from './Router/AppRouter.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
    return (
        <>
            <NavBar />
            <AppRouter />
            <Footer />
        </>
    );
};

export default App;