import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import './ProductModal.css';

const ProductModal = ({ product, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [product]);

  const handleAddToCart = async () => {
    setIsAdding(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    addToCart(product);
    setIsAdding(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="modal-body">
          <div className="modal-left">
            <div className="image-carousel">
              <div className="main-image-container">
                <img 
                  src={product.images[currentImageIndex]} 
                  alt={product.name}
                  className="main-image"
                />
                {product.images.length > 1 && (
                  <>
                    <button className="carousel-nav prev" onClick={prevImage}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6"/>
                      </svg>
                    </button>
                    <button className="carousel-nav next" onClick={nextImage}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </button>
                  </>
                )}
              </div>
              
              {product.images.length > 1 && (
                <div className="thumbnail-container">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <img src={image} alt={`${product.name} view ${index + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="modal-right">
            <div className="product-header">
              <h2 className="product-title">{product.name}</h2>
              <div className="product-meta">
                <span className="product-price">₹{product.price}</span>
                <span className="product-code">Code: {product.code}</span>
              </div>
            </div>

            <div className="product-bio">
              <p>{product.bio}</p>
            </div>

            <div className="product-details-section">
              <h3>Details</h3>
              <div className="details-grid">
                {Object.entries(product.details).map(([key, value]) => (
                  <div key={key} className="detail-item">
                    <span className="detail-label">{key}:</span>
                    <span className="detail-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="reviews-section">
              <h3>Customer Reviews</h3>
              <div className="reviews-list">
                {product.reviews.map((review, index) => (
                  <div key={index} className="review-item">
                    <div className="review-header">
                      <span className="reviewer-name">{review.name}</span>
                      <div className="rating">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span key={i} className={`star ${i < review.rating ? 'filled' : ''}`}>★</span>
                        ))}
                      </div>
                    </div>
                    <p className="review-comment">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="modal-actions">
              <button 
                className={`btn btn-primary add-to-cart-modal ${isAdding ? 'loading' : ''}`}
                onClick={handleAddToCart}
                disabled={isAdding}
              >
                {isAdding ? (
                  <>
                    <div className="loading-spinner"></div>
                    Adding to Cart...
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
        </div>
      </div>
    </div>
  );
};

export default ProductModal;