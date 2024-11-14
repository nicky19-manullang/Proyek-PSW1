import React from 'react';
import '../styles/Header.css'; // Mengimpor CSS khusus header

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/images/hero.png" alt="JOUEnglish Logo" className="hero" />
        <h1>JOUEnglish</h1>
      </div>
      <nav>
        <ul>
          <li><a href="Home">Home</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;