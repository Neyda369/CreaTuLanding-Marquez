import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div style={{ textAlign: 'center', padding: '5rem 0' }}>
            <h1>404</h1>
            <h2>¡Ups! Página no encontrada.</h2>
            <p>La URL que intentas visitar no existe.</p>
            <Link to="/">Volver a la página de inicio</Link>
        </div>
    );
};

export default NotFoundPage;