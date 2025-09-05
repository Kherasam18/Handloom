import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }]
        };
      }
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    
    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      };
    
    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen
      };
    
    case 'CLOSE_CART':
      return {
        ...state,
        isOpen: false
      };

    case 'INITIALIZE_CART':
      return action.payload;
    
    default:
      return state;
  }
};

const initialState = {
  items: [],
  isOpen: false
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('artisan-weaves-cart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        if (parsedCart && Array.isArray(parsedCart.items)) {
          dispatch({ type: 'INITIALIZE_CART', payload: { ...initialState, ...parsedCart, isOpen: false } });
        }
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage", error);
    }

  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('artisan-weaves-cart', JSON.stringify(state));
  }, [state]);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  const closeCart = () => {
    dispatch({ type: 'CLOSE_CART' });
  };

  const getCartTotal = () => {
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return state.items.reduce((count, item) => count + item.quantity, 0);
  };

  const generateWhatsAppMessage = (customerDetails) => {
    const { name, mobile, whatsapp, address } = customerDetails;
    
    let message = `Hello Gagneja Handloom! I would like to place an order.\n\n`;
    message += `*Customer Details:*\n`;
    message += `Name: ${name}\n`;
    message += `Mobile: ${mobile}\n`;
    message += `WhatsApp: ${whatsapp}\n`;
    message += `Address: ${address}\n\n`;
    message += `*Order Summary:*\n`;
    
    state.items.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (Code: ${item.code}) - ₹${item.price.toFixed(2)} x ${item.quantity}\n`;
    });
    
    message += `\n*Total Price: ₹${getCartTotal().toFixed(2)}*\n\n`;
    message += `Please confirm my order. Thank you!`;
    
    return encodeURIComponent(message);
  };

  const value = {
    items: state.items,
    isOpen: state.isOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
    closeCart,
    getCartTotal,
    getCartCount,
    generateWhatsAppMessage
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};