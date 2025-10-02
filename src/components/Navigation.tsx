import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          🇸🇬 Singapore 2025
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('attractions')}>Attractions</li>
          <li onClick={() => scrollToSection('food')}>Food</li>
          <li onClick={() => scrollToSection('itinerary')}>Itinerary</li>
          <li onClick={() => scrollToSection('tips')}>Tips</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
