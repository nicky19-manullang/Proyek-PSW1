import React, { useState } from 'react';
import '../styles/Footer.css';

function Footer() {
  // State untuk mengontrol visibilitas bagian Anggota Kelompok, Motivasi, dan Kontak
  const [showMembers, setShowMembers] = useState(false);
  const [showMotivation, setShowMotivation] = useState(false);
  const [showContact, setShowContact] = useState(false);

  // Toggle untuk menampilkan anggota kelompok
  const toggleMembers = () => {
    setShowMembers(!showMembers);
  };

  // Toggle untuk menampilkan motivasi
  const toggleMotivation = () => {
    setShowMotivation(!showMotivation);
  };

  // Toggle untuk menampilkan kontak
  const toggleContact = () => {
    setShowContact(!showContact);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 JOUEnglish. All rights reserved.</p>

        {/* Tautan footer */}
        <div className="footer-links">
          <a href="#members" onClick={toggleMembers}>Anggota Kelompok</a>
          <a href="#motivation" onClick={toggleMotivation}>Motivasi</a>
          <a href="#contact" onClick={toggleContact}>Kontak</a>
        </div>

        {/* Bagian Jalinan Kerja Sama */}
        <div className="footer-partners">
          <p>In partnership with:</p>
          <div className="partner-logo">
            <img src="/images/logoremov.png" alt="SMA N 1 Baktiraja Logo" className="partner-logo-img" />
            <p>SMA N 1 Baktiraja</p>
          </div>
        </div>

        {/* Bagian Anggota Kelompok */}
        {showMembers && (
          <div className="footer-members">
            <div className="member">
              <img src="/images/member1.jpg" alt="Anggota 1" className="member-img" />
              <p>Anggota 1</p>
            </div>
            <div className="member">
              <img src="/images/member2.jpg" alt="Anggota 2" className="member-img" />
              <p>Anggota 2</p>
            </div>
            <div className="member">
              <img src="/images/member3.jpg" alt="Anggota 3" className="member-img" />
              <p>Anggota 3</p>
            </div>
          </div>
        )}

        {/* Bagian Motivasi */}
        {showMotivation && (
          <div className="footer-motivation">
            <p>"Belajar Bahasa Inggris adalah langkah pertama menuju kesuksesan."</p>
          </div>
        )}

        {/* Bagian Kontak */}
        {showContact && (
          <div className="footer-contact">
            <div className="contact-logos">
              <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
                <img src="/images/whatsapp-logo.png" alt="WhatsApp" className="contact-logo" />
              </a>
              <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
                <img src="/images/instagram-logo.png" alt="Instagram" className="contact-logo" />
              </a>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
