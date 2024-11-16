import React from 'react';
import { Link } from 'react-router-dom'; // Import Link dari react-router-dom
import '../styles/Header.css'; // Pastikan path ini benar

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/images/hero.png" alt="JOUEnglish Logo" className="hero" />
        <h1>JOUEnglish</h1>
      </div>
      <nav>
        <ul>
          {/* Link untuk navigasi ke Home */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/vocabulary">Vocabulary</Link></li>
          <li><Link to="/questions">Soal Latihan</Link></li>
          <li><Link to="/downloads">Unduh Materi</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;