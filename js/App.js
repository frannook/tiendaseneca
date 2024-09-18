// js/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalog from './components/Catalog';
import ItemDetail from './components/ItemDetail';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/category/:categoryId" element={<Catalog />} />
        <Route path="/item/:itemId" element={<ItemDetail />} />
        <Route path="*" element={<NotFound />} /> {/* Ruta 404 */}
      </Routes>
    </Router>
  );
}

function App() {
    return (
      <div>
        <h1>¡Bienvenido a mi tienda!</h1>
        <p>Este es el catálogo de productos.</p>
      </div>
    );
  }

export default App;
