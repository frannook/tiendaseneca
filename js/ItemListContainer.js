import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';  // Enlazar el archivo CSS

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simula una promesa para obtener productos después de un retardo
    setTimeout(() => {
      const mockProducts = [
        { id: 1, name: 'Mate', price: 10, image: '/path-to-image' },
        { id: 2, name: 'Termo', price: 20, image: '/path-to-image' },
        // Añadir más productos si es necesario
      ];
      setProducts(mockProducts);
    }, 1000);
  }, []);

  return (
    <div className="catalog-container">
      <h1>Catálogo de productos</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">${product.price}</p>
              <Link to={`/item/${product.id}`}>
                <button className="view-details-btn">Ver detalles</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
