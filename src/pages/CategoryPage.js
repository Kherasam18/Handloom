import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import Cart from '../components/Cart';
import { products, categories } from '../data/products';
import './CategoryPage.css';

const CategoryPage = ({ category: categoryProp }) => {
  const { category: categoryParam } = useParams();
  const location = useLocation();
  const [currentCategory, setCurrentCategory] = useState(categoryProp || categoryParam);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animatedElements, setAnimatedElements] = useState(new Set());
  const [sortBy, setSortBy] = useState('default');
  const [filterBy, setFilterBy] = useState('all');
  const [key, setKey] = useState(0); // Add a key to force re-render

  // Reset component state when route changes
  useEffect(() => {
    const newCategory = categoryProp || categoryParam;
    if (newCategory !== currentCategory) {
      setCurrentCategory(newCategory);
      setSortBy('default');
      setFilterBy('all');
      setAnimatedElements(new Set());
      setKey(prev => prev + 1); // Force re-render with new key
      window.scrollTo(0, 0);
    }
  }, [categoryProp, categoryParam, location.pathname]);

  const categoryData = categories.find(cat => cat.id === currentCategory);
  const categoryProducts = products.filter(product => product.category === currentCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [currentCategory]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Sort products
  const sortedProducts = [...categoryProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  // Filter products
  const filteredProducts = sortedProducts.filter(product => {
    if (filterBy === 'all') return true;
    return product.type.toLowerCase().includes(filterBy.toLowerCase());
  });

  // Get unique types for filter
  const types = [...new Set(categoryProducts.map(product => product.type))];

  // Map filtered products to ProductCard components
  const productCards = filteredProducts.map((product) => (
    <div 
      key={product.id} 
      className={`product-card-wrapper animate-on-scroll ${animatedElements.has(`product-${product.id}`) ? 'animated' : ''}`}
      id={`product-${product.id}`}
    >
      <ProductCard 
    product={product}
    onClick={() => handleProductClick(product)}
      />
    </div>
  ));

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  return (
    <div className="category-page" key={key}>
      {/* Hero Banner */}
      <section className="category-hero" style={{ backgroundImage: `url(${categoryData.image})` }}>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{categoryData.name}</h1>
            <p className="hero-description">{categoryData.description}</p>
            <div className="hero-stats">
              <span className="stat-item">
                <strong>{categoryProducts.length}</strong> Products
              </span>
              <span className="stat-item">
                <strong>Premium</strong> Quality
              </span>
              <span className="stat-item">
                <strong>Handcrafted</strong> Excellence
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section section">
        <div className="container">
          {/* Filters and Sorting */}
          <div className={`controls-bar animate-on-scroll ${animatedElements.has('controls') ? 'animated' : ''}`} id="controls">
            <div className="controls-left">
              <div className="filter-group">
                <label htmlFor="type-filter">Filter by Type:</label>
                <select 
                  id="type-filter"
                  value={filterBy} 
                  onChange={(e) => setFilterBy(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All</option>
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="controls-right">
              <div className="sort-group">
                <label htmlFor="sort-select">Sort by:</label>
                <select 
                  id="sort-select"
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  <option value="default">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Info */}
          <div className={`results-info animate-on-scroll ${animatedElements.has('results') ? 'animated' : ''}`} id="results">
            <p>Showing {filteredProducts.length} of {categoryProducts.length} products</p>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {productCards.length > 0 ? (
              productCards
            ) : (
              <div className="no-results">
                <h3>No products found matching your filters.</h3>
                <button 
                  className="reset-filters"
                  onClick={() => {
                    setFilterBy('all');
                    setSortBy('default');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Category Features */}
      <section className="category-features section">
        <div className="container">
          <div className={`section-header animate-on-scroll ${animatedElements.has('features-header') ? 'animated' : ''}`} id="features-header">
            <h2>Why Choose Our {categoryData.name} Collection?</h2>
            <p>Discover what makes our {categoryData.name.toLowerCase()} products special</p>
          </div>
          
          <div className="features-grid">
            <div className={`feature-item animate-on-scroll ${animatedElements.has('feature-1') ? 'animated' : ''}`} id="feature-1">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Premium Quality</h3>
              <p>Each piece is crafted from the finest materials with attention to every detail.</p>
            </div>
            
            <div className={`feature-item animate-on-scroll ${animatedElements.has('feature-2') ? 'animated' : ''}`} id="feature-2">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3>Handcrafted Excellence</h3>
              <p>Traditional weaving techniques passed down through generations of skilled artisans.</p>
            </div>
            
            <div className={`feature-item animate-on-scroll ${animatedElements.has('feature-3') ? 'animated' : ''}`} id="feature-3">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16V8z"/>
                </svg>
              </div>
              <h3>Sustainable Choice</h3>
              <p>Eco-friendly materials and processes that support local communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      {/* Cart */}
      <Cart />
    </div>
  );
};

export default CategoryPage;