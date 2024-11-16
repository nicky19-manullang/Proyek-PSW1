import React from 'react';
import '../styles/Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      {/* Bagian Informasi Umum */}
      <div className="footer-content">
        <p>&copy; 2024 JOUEnglish. All rights reserved.</p>
        
        {/* Tautan footer */}
        <div className="footer-links">
          <a href="#privacy">Priacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
          <a href="#contact">Contact Us</a>
        </div>
        
        {/* Bagian Jalinan Kerja Sama */}
        <div className="footer-partners">
          <p>In partnership with:</p>
          <div className="partner-logo">
            <img src="/images/tutwuri.jpg" alt="SMA N 1 Baktiraja Logo" className="partner-logo-img" />
            <p>SMA N 1 Baktiraja</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
