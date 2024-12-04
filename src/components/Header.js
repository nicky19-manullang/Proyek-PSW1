import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">

      <div className="logo-container">
        <img src="/images/hero.png" alt="JOUEnglish Logo" className="hero" />
        <h1>JOUEnglish</h1>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>

      <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/vocabulary" onClick={toggleMenu}>Vocabulary</Link></li>
          <li><Link to="/materi" onClick={toggleMenu}>Materi</Link></li>
          <li><Link to="/questions" onClick={toggleMenu}>Soal Latihan</Link></li>
          <li><Link to="/downloads" onClick={toggleMenu}>Unduh Materi</Link></li>
          <li><Link to="/tutorial" onClick={toggleMenu}>Tutorial by video</Link></li>
          <li><Link to="/tipstrik" onClick={toggleMenu}>Tips & Trik</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
