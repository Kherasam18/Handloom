import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    setIsAdding(true);
    
    // Add a small delay for visual feedback
    await new Promise(resolve => setTimeout(resolve, 300));
    
    addToCart(product);
    setIsAdding(false);
  };

  return (
    <div 
      className="product-card hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => (typeof onClick === 'function' ? onClick(product) : undefined)}
    >
      <div className="product-image-container">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="product-image"
        />
        <div className={`product-overlay ${isHovered ? 'visible' : ''}`}>
          <button 
            className={`add-to-cart-btn ${isAdding ? 'adding' : ''}`}
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? (
              <>
                <div className="loading-spinner"></div>
                Adding...
              </>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="8" cy="21" r="1"/>
                  <circle cx="19" cy="21" r="1"/>
                  <path d="m2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                </svg>
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-details">
          <span className="product-price">₹{product.price}</span>
          <span className="product-code">Code: {product.code}</span>
        </div>
        <div className="product-fabric">
          <span className="fabric-label">Fabric:</span>
          <span className="fabric-value">{product.fabric}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;