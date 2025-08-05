import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import logo from './assets/logo/logo.png'; // ajusta la ruta si está en otra carpeta


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a la tienda de productos para mascotas 🐾" />
    </>
  );
}

export default App;
