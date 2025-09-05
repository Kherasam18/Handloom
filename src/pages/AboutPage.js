import React, { useState, useEffect } from 'react';
import Cart from '../components/Cart';
import emailjs from '@emailjs/browser';
import './AboutPage.css';

const AboutPage = () => {
  const [animatedElements, setAnimatedElements] = useState(new Set());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(''); // 'success', 'error', or ''

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus('');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    // IMPORTANT: Make sure you have created a .env file in the 'frontend'
    // directory with your EmailJS credentials.
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setSendStatus('success');
      setIsSending(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, (err) => {
      console.error('FAILED TO SEND EMAIL...', err);
      setSendStatus('error');
      setIsSending(false);
    });
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-background" style={{backgroundImage: "url('gagneja.jpg')"}}>
          <div className="hero-overlay"></div>
          <div className="container">
            <div className="hero-content">
              {/* <h1 className="hero-title">Our Story</h1> */}
              <p className="hero-subtitle">
                
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="brand-story section">
        <div className="container">
          <div className="story-grid">
            <div className={`story-text animate-on-scroll ${animatedElements.has('story-text') ? 'animated' : ''}`} id="story-text">
              <h2>Heritage Meets Innovation</h2>
              <p>
                Gagneja Handloom is a trusted name in the world of traditional Indian textiles,
                specializing in high-quality bedsheets, blankets, quilts, towels, and a wide
                range of handloom essentials. Founded by Rakesh Gagneja, and later strengthened
                by Sonu Gagneja, the brand has been a symbol of comfort, durability, and authentic
                craftsmanship for decades. Now led by Sameer Gagneja, the next-generation
                entrepreneur.
              </p>
              <p>
                Gagneja Handloom combines time-honored weaving techniques with 
                modern aesthetics to deliver products that feel like home. With a strong 
                commitment to quality, customer satisfaction, and cultural heritage, Gagneja 
                Handloom continues to serve households and institutions across India with 
                products that embody tradition, trust, and timeless elegance.
              </p>
              <p>
                We work directly with skilled artisans from rural communities across 
                India, providing them with fair wages, stable employment, and a platform 
                to showcase their incredible talents to the world. Every piece in our 
                collection tells a story of dedication, skill, and cultural heritage.
              </p>
            </div>
            <div className={`story-image animate-on-scroll ${animatedElements.has('story-image') ? 'animated' : ''}`} id="story-image">
              <img src="gagneja.jpg" alt="Artisan at work" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section section">
        <div className="container">
          <div className={`section-header animate-on-scroll ${animatedElements.has('mission-header') ? 'animated' : ''}`} id="mission-header">
            <h2>Our Mission</h2>
            <p>Preserving traditions while creating sustainable livelihoods</p>
          </div>
          
          <div className="mission-grid">
            <div className={`mission-card animate-on-scroll ${animatedElements.has('mission-1') ? 'animated' : ''}`} id="mission-1">
              <div className="mission-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3>Quality Commitment</h3>
              <p>
                We maintain the highest standards of quality in every product, 
                ensuring that each piece meets our rigorous quality checks and 
                exceeds customer expectations.
              </p>
            </div>
            
            <div className={`mission-card animate-on-scroll ${animatedElements.has('mission-2') ? 'animated' : ''}`} id="mission-2">
              <div className="mission-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </div>
              <h3>Artisan Empowerment</h3>
              <p>
                We believe in fair trade practices and work directly with artisans, 
                providing them with stable income, skill development opportunities, 
                and recognition for their craft.
              </p>
            </div>
            
            <div className={`mission-card animate-on-scroll ${animatedElements.has('mission-3') ? 'animated' : ''}`} id="mission-3">
              <div className="mission-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16V8z"/>
                </svg>
              </div>
              <h3>Sustainable Practices</h3>
              <p>
                Environmental responsibility is at the core of our operations. 
                We use eco-friendly materials, natural dyes, and sustainable 
                production methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section parallax" style={{backgroundImage: "url('https://placehold.co/1920x600/A87C7C/F1EEE9?text=Our+Values')"}}>
        <div className="values-overlay"></div>
        <div className="container">
          <div className={`values-content animate-on-scroll ${animatedElements.has('values-content') ? 'animated' : ''}`} id="values-content">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Authenticity</h3>
                <p>Every product reflects genuine traditional craftsmanship</p>
              </div>
              <div className="value-item">
                <h3>Transparency</h3>
                <p>Honest about our processes, pricing, and partnerships</p>
              </div>
              <div className="value-item">
                <h3>Innovation</h3>
                <p>Blending traditional techniques with contemporary designs</p>
              </div>
              <div className="value-item">
                <h3>Community</h3>
                <p>Supporting artisan communities and their families</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section">
        <div className="container">
          <div className={`section-header animate-on-scroll ${animatedElements.has('team-header') ? 'animated' : ''}`} id="team-header">
            <h2>Meet Our Team</h2>
            <p>The passionate people behind Gagneja Handloom</p>
          </div>
          
          <div className="team-grid">
            <div className={`team-member animate-on-scroll ${animatedElements.has('team-1') ? 'animated' : ''}`} id="team-1">
              <div className="member-image">
                <img src="https://placehold.co/300x300/D3C5BC/8D7B68?text=Sameer+Gagneja" alt="Sameer Gagneja" />
              </div>
              <div className="member-info">
                <h3>Sameer Gagneja</h3>
                <p className="member-role">Owner</p>
                <p className="member-bio">
                  Owner of Gagneja Handloom, he represents the new generation of leadership, blending innovation with tradition
                  to modernize the business while staying rooted in the family's legacy of excellence in handloom products.
                </p>
              </div>
            </div>
            
            <div className={`team-member animate-on-scroll ${animatedElements.has('team-2') ? 'animated' : ''}`} id="team-2">
              <div className="member-image">
                <img src="https://placehold.co/300x300/A87C7C/F1EEE9?text=Rakesh+Gagneja" alt="Rakesh Gagneja" />
              </div>
              <div className="member-info">
                <h3>Rakesh Gagneja</h3>
                <p className="member-role">Founder</p>
                <p className="member-bio">
                   Founder of Gagneja Handloom, he laid the foundation of the business with a strong commitment to quality,
                   trust, and authentic handloom craftsmanship, turning a humble venture into a household name for bedsheets,
                   quilts, blankets, and more.
                </p>
              </div>
            </div>
            
            <div className={`team-member animate-on-scroll ${animatedElements.has('team-3') ? 'animated' : ''}`} id="team-3">
              <div className="member-image">
                <img src="https://placehold.co/300x300/8D7B68/D3C5BC?text=Sonu+Gagneja" alt="Sonu Gagneja" />
              </div>
              <div className="member-info">
                <h3>Sonu Gagneja</h3>
                <p className="member-role">Co-founder</p>
                <p className="member-bio">
                  Co-founder of Gagneja Handloom, he has been instrumental in expanding the brand’s reach and product line,
                  ensuring every customer experiences comfort, durability, and traditional charm in every handloom essential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section section">
        <div className="container">
          <div className={`section-header animate-on-scroll ${animatedElements.has('contact-header') ? 'animated' : ''}`} id="contact-header">
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you</p>
          </div>
          
          <div className="contact-grid">
            <div className={`contact-info animate-on-scroll ${animatedElements.has('contact-info') ? 'animated' : ''}`} id="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4>Visit Our Shop</h4>
                  <p>15-A, Near Singhsbha School<br />Abohar, Punjab 152116</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 7307119000<br />Mon-Sat: 9 AM - 9 PM</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>Gagneja@Handloom.com<br />Gagneja@Handloom.com</p>
                </div>
              </div>
            </div>
            
            <div className={`contact-form animate-on-scroll ${animatedElements.has('contact-form') ? 'animated' : ''}`} id="contact-form">
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" className="form-input" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" className="form-input" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" className="form-input" value={formData.subject} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" className="form-textarea" rows="5" value={formData.message} onChange={handleInputChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled={isSending}>
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
                {sendStatus === 'success' && <p className="form-feedback success">Message sent successfully! We'll get back to you soon.</p>}
                {sendStatus === 'error' && <p className="form-feedback error">Failed to send message. Please try again later.</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Cart */}
      <Cart />
    </div>
  );
};

export default AboutPage;