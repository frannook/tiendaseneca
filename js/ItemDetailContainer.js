import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';  // Enlazar el archivo CSS

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Simula una promesa para obtener el producto después de un retardo
    setTimeout(() => {
      const mockProduct = {
        id: itemId,
        name: 'Mate',
        description: 'Este es un mate artesanal.',
        price: 10,
        image: '/path-to-image'
      };
      setProduct(mockProduct);
    }, 1000);
  }, [itemId]);

  if (!product) return <p>Cargando...</p>;

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <img src={product.image} alt={product.name} className="product-detail-image" />
        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p className="detail-price">${product.price}</p>
          <div className="quantity-control">
            <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button className="add-to-cart-btn">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
