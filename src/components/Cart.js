import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { 
    items, 
    isOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal, 
    generateWhatsAppMessage 
  } = useCart();
  
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    mobile: '',
    whatsapp: '',
    address: ''
  });
  
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Auto-fill WhatsApp from mobile number
    if (customerDetails.mobile && !customerDetails.whatsapp) {
      setCustomerDetails(prev => ({
        ...prev,
        whatsapp: prev.mobile
      }));
    }
  }, [customerDetails.mobile]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppCheckout = () => {
    if (!customerDetails.name || !customerDetails.mobile || !customerDetails.address) {
      alert('Please fill in all required fields');
      return;
    }

    setIsProcessing(true);

    // Generate message and open WhatsApp synchronously for iOS compatibility
    const message = generateWhatsAppMessage(customerDetails);
    const whatsappNumber = '+917307119000'; // Replace with actual business WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');

    // Optionally, you can reset processing after a short delay
    setTimeout(() => {
      setIsProcessing(false);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={closeCart}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="cart-close" onClick={closeCart} aria-label="Close cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="cart-content">
          {items.length === 0 ? (
            <div className="cart-empty">
              <div className="empty-cart-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="8" cy="21" r="1"/>
                  <circle cx="19" cy="21" r="1"/>
                  <path d="m2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                </svg>
              </div>
              <h3>Your cart is empty</h3>
              <p>Add some beautiful handloom products to get started!</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {items.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.images[0]} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <h4 className="item-name">{item.name}</h4>
                      <p className="item-code">Code: {item.code}</p>
                      <p className="item-price">₹{item.price}</p>
                    </div>
                    <div className="item-controls">
                      <div className="quantity-controls">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="quantity-btn"
                          aria-label="Decrease quantity"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="quantity-btn"
                          aria-label="Increase quantity"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="remove-btn"
                        aria-label="Remove item"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="3,6 5,6 21,6"></polyline>
                          <path d="m19,6v14a2,2 0 0,1-2,2H7a2,2 0 0,1-2-2V6m3,0V4a2,2 0 0,1 2-2h4a2,2 0 0,1 2,2v2"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="total-section">
                  <div className="total-row">
                    <span className="total-label">Total:</span>
                    <span className="total-amount">₹{getCartTotal().toFixed(2)}</span>
                  </div>
                  * Shipping Included
                </div>

                <div className="checkout-form">
                  <h3>Customer Details</h3>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={customerDetails.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobile" className="form-label">Mobile Number *</label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={customerDetails.mobile}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="whatsapp" className="form-label">WhatsApp Number</label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={customerDetails.whatsapp}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Auto-filled from mobile"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address" className="form-label">Full Shipping Address *</label>
                    <textarea
                      id="address"
                      name="address"
                      value={customerDetails.address}
                      onChange={handleInputChange}
                      className="form-textarea"
                      rows="3"
                      required
                    />
                  </div>
                </div>

                <button 
                  className={`checkout-btn ${isProcessing ? 'processing' : ''}`}
                  onClick={handleWhatsAppCheckout}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <div className="loading-spinner"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                      </svg>
                      Checkout via WhatsApp
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;