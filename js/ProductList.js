import { Link } from 'react-router-dom';
import './ProductList.css';

function ProductList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <Link to={`/item/${product.id}`}>Ver detalles</Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

<div className="catalog-container">
  <div className="catalog-header">
    <h1>Catálogo de productos</h1>
  </div>
  <div className="product-grid">
    {products.map((product) => (
      <div key={product.id} className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h3>{product.name}</h3>
          <p className="price">${product.price}</p>
          <button className="view-details-btn">Ver detalles</button>
        </div>
      </div>
    ))}
  </div>
</div>
