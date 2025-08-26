import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/">Inicio</Link>
            <Link to="/contacto">Contacto</Link>
            <span role="img" aria-label="carrito">🛒 0</span>
        </nav>
    );
}

export default NavBar;

