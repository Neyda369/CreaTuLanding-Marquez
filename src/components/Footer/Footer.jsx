import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; 

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>Todo Mascotas</h3>
                    <p>
                        Somos tu tienda de confianza para el bienestar de tus amigos peludos.
                        Encuentra todo lo que necesitan en un solo lugar.
                    </p>
                </div>

                <div className="footer-section contact">
                    <h3>Contáctanos</h3>
                    <span>
                        <i className="fa fa-phone"></i> &nbsp; +58 412-1234567
                    </span>
                    <span>
                        <i className="fa fa-envelope"></i> &nbsp; info@todomascotas.com
                    </span>
                    <span>
                        <i className="fa fa-map-marker"></i> &nbsp; Calle 10, Edif. A, San Cristóbal
                    </span>
                </div>

                <div className="footer-section social">
                    <h3>Síguenos</h3>
                    <div className="social-icons">
                        {/* Llevarán a los perfiles de redes sociales */}
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 Todo Mascotas | Hecho con ❤️
            </div>
        </footer>
    );
};

export default Footer;
