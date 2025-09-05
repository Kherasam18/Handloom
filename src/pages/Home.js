import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import Cart from '../components/Cart';
import { products, categories } from '../data/products';
import './Home.css';

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animatedElements, setAnimatedElements] = useState(new Set());

  // Featured products (first 6 products)
  const featuredProducts = products.slice(0, 6);

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

    return () => observer.disconnect();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="home">
      <HeroSlider />
      
      {/* Featured Products Section */}
      <section id="featured-products" className="featured-products section">
        <div className="container">
          <div className={`section-header animate-on-scroll ${animatedElements.has('featured-header') ? 'animated' : ''}`} id="featured-header">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle">Discover our handpicked selection of premium handloom textiles</p>
          </div>
          
          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className={`product-wrapper animate-on-scroll ${animatedElements.has(`product-${product.id}`) ? 'animated' : ''}`} id={`product-${product.id}`}>
                <ProductCard 
                  product={product} 
                  onClick={handleProductClick}
                />
              </div>
            ))}
          </div>
          
          <div className="section-cta">
            <Link to="/bedding" className="btn btn-secondary">
              View All Products
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Category Previews Section */}
      <section className="category-previews section">
        <div className="container">
          <div className={`section-header animate-on-scroll ${animatedElements.has('category-header') ? 'animated' : ''}`} id="category-header">
            <h2 className="section-title">Shop by Category</h2>
            <p className="section-subtitle">Explore our curated collections for every space in your home</p>
          </div>
          
          <div className="categories-grid">
            {categories.map((category, index) => (
              <Link 
                key={category.id} 
                to={`/${category.id}`} 
                className={`category-card animate-on-scroll ${animatedElements.has(`category-${category.id}`) ? 'animated' : ''}`}
                id={`category-${category.id}`}
              >
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                  <div className="category-overlay">
                    <div className="category-content">
                      <h3 className="category-name">{category.name}</h3>
                      <p className="category-description">{category.description}</p>
                      <span className="category-cta">
                        Explore Collection
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story section parallax" style={{ backgroundImage: "url('https://placehold.co/1920x600/8D7B68/F1EEE9?text=Artisan+Workshop')" }}>
        <div className="story-overlay"></div>
        <div className="container">
          <div className={`story-content animate-on-scroll ${animatedElements.has('story-content') ? 'animated' : ''}`} id="story-content">
            <div className="story-text">
              <h2 className="story-title">Our Story</h2>
              <p className="story-description">
                At Gagneja Handloom, we believe in the timeless beauty of handcrafted textiles. 
                Our artisans, skilled in traditional weaving techniques passed down through generations, 
                create each piece with meticulous attention to detail and an unwavering commitment to quality.
              </p>
              <p className="story-description">
                Every thread tells a story of heritage, craftsmanship, and sustainable practices. 
                We work directly with skilled weavers, ensuring fair wages and preserving ancient techniques 
                while creating modern designs that complement contemporary lifestyles.
              </p>
              <Link to="/about" className="btn btn-outline">
                Learn More About Us
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Promise Section */}
      <section className="quality-promise section">
        <div className="container">
          <div className={`section-header animate-on-scroll ${animatedElements.has('quality-header') ? 'animated' : ''}`} id="quality-header">
            <h2 className="section-title">Our Quality Promise</h2>
            <p className="section-subtitle">What sets our handloom textiles apart</p>
          </div>
          
          <div className="features-grid">
            <div className={`feature-card animate-on-scroll ${animatedElements.has('feature-1') ? 'animated' : ''}`} id="feature-1">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="feature-title">Premium Materials</h3>
              <p className="feature-description">
                We use only the finest natural fibers - pure cotton, silk, linen, and wool 
                sourced from trusted suppliers committed to sustainable practices.
              </p>
            </div>
            
            <div className={`feature-card animate-on-scroll ${animatedElements.has('feature-2') ? 'animated' : ''}`} id="feature-2">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="feature-title">Skilled Craftsmanship</h3>
              <p className="feature-description">
                Each piece is handwoven by master artisans who have perfected their craft 
                over decades, ensuring exceptional quality and unique character.
              </p>
            </div>
            
            <div className={`feature-card animate-on-scroll ${animatedElements.has('feature-3') ? 'animated' : ''}`} id="feature-3">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16V8z"/>
                  <path d="M17 9l-5 5-5-5"/>
                </svg>
              </div>
              <h3 className="feature-title">Sustainable Practices</h3>
              <p className="feature-description">
                We're committed to environmental responsibility through eco-friendly dyes, 
                minimal waste production, and supporting local artisan communities.
              </p>
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

export default Home;