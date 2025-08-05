// components/NavBar.jsx
import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';
import logo from '../assets/logo/logo.png'; // ajusta la ruta si está en otra carpeta

function NavBar() {
    return (
        <nav className="navbar">
            <div className="logo-section">
                <img src={logo} alt="Logo" className="logo-img" />
                <h1>Todo Mascotas</h1>
            </div>

            <ul className="nav-links">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>

            <div className="cart-section">
                <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar;
