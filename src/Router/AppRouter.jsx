// AppRouter.jsx
import { Routes, Route } from 'react-router-dom';
import Inicio from '../components/views/Inicio';
import Productos from '../components/views/Productos';
import Categoria from '../components/views/Categoria';
import DetalleProducto from '../components/views/DetalleProducto';
import Contacto from '../components/views/Contacto'

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/categoria/:nombre" element={<Categoria />} />
            <Route path="/producto/:id" element={<DetalleProducto />} />
            <Route path="/contacto" element={<Contacto />} />
        </Routes>
    );
}
