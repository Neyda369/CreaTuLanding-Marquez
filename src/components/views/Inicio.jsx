import React from 'react';
import promoImg from '../../assets/promo.jpg'; // Ajusta la ruta si tu imagen está en otro lugar
import './styles/inicio.css'; // Asegúrate de crear este archivo CSS

function Inicio() {
    return (
        <div className="inicio-container">
            <div className="inicio-texto">
                <h1>Bienvenido a Todo Mascotas</h1>
                <p>
                    Encuentra los mejores productos para tus mascotas.<br />
                    ¡Explora nuestro catálogo y cuida a tus amigos peludos!
                </p>
            </div>
            <div className="inicio-promocion">
                <img
                    src={promoImg}
                    alt="Promoción especial"
                    className="promo-img"
                />
                <h2 className="promo-titulo">¡Descuento especial!</h2>
                <p className="promo-descripcion">20% de descuento en alimento premium para perros. ¡Solo por esta semana!</p>
            </div>
        </div>
    );
}

export default Inicio;