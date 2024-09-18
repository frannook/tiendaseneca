
import './ProductDetail.css';
function ProductDetail({ product }) {
    return (
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
        {/* Aquí podrías incluir el ItemCount */}
      </div>
    );
  }
  
  export default ProductDetail;
  

<div className="product-detail-container">
  <div className="product-detail">
    <img src={product.image} alt={product.name} className="product-detail-image" />
    <div className="product-detail-info">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p className="detail-price">${product.price}</p>
      <div className="quantity-control">
        <button>-</button>
        <span>{quantity}</span>
        <button>+</button>
      </div>
      <button className="add-to-cart-btn">Agregar al carrito</button>
    </div>
  </div>
</div>

