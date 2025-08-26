import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // ✅ Importación necesaria

const rootDom = document.getElementById('root');
const root = ReactDOM.createRoot(rootDom);
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Envolvemos App con BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



