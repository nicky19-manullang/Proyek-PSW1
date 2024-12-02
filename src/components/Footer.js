import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Bagian atas footer */}
        <div className="footer-top">
          <p className="footer-title">JOUEnglish</p>
          <p className="footer-subtitle">Belajar Bahasa Inggris untuk Masa Depan</p>
        </div>

        {/* Tautan footer */}
        <div className="footer-links">
          <a href="/about" className="footer-link">Tentang Kami</a>
          <a href="/courses" className="footer-link">Kursus</a>
          <a href="/contact" className="footer-link">Kontak</a>
          <a href="/faq" className="footer-link">FAQ</a>
        </div>

        {/* Deskripsi footer */}
        <div className="footer-description">
          <p>
            JOUEnglish adalah platform belajar Bahasa Inggris yang menyediakan berbagai materi untuk membantu pelajar mencapai tujuan mereka dalam menguasai bahasa internasional ini. Kami percaya bahwa bahasa Inggris adalah kunci untuk membuka banyak peluang di masa depan.
          </p>
        </div>

        {/* Bagian kerja sama */}
        <div className="footer-bottom">
          <p>© 2024 JOUEnglish - All rights reserved</p>
          <div className="social-media-links">
            <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src="/images/wa1.jpeg" alt="WhatsApp" className="social-logo" />
            </a>
            <a href="https://www.instagram.com/angiesolitao/" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src="/images/ig2.jpeg" alt="Instagram" className="social-logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
