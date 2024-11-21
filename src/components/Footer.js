import React, { useState } from 'react';
import '../styles/Footer.css';

function Footer() {
  const [showSection, setShowSection] = useState({
    members: false,
    motivation: false,
    contact: false,
  });

  // Daftar anggota kelompok
  const teamMembers = [
    { name: 'Nicky Manullang', image: 'member1.jpg' },
    { name: 'Angie Sitorus', image: 'member2.jpg' },
    { name: 'Yoel Hutabarat', image: 'member3.jpg' },
  ];

  const toggleSection = (section) => {
    setShowSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Bagian atas footer */}
        <div className="footer-top">
          <p className="footer-title">© 2024 JOUEnglish</p>
          <p className="footer-subtitle">All rights reserved</p>
        </div>

        {/* Tautan untuk navigasi */}
        <div className="footer-links">
          <button onClick={() => toggleSection('members')}>Anggota Kelompok</button>
          <button onClick={() => toggleSection('motivation')}>Motivasi</button>
          <button onClick={() => toggleSection('contact')}>Kontak</button>
        </div>

        {/* Bagian anggota kelompok */}
        {showSection.members && (
          <div className="footer-section">
            <h4>Anggota Kelompok</h4>
            <div className="members-list">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="member">
                  <img
                    src={`/images/${member.image}`}
                    alt={`Foto ${member.name}`}
                    className="member-img"
                  />
                  <p>{member.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bagian motivasi */}
        {showSection.motivation && (
          <div className="footer-section">
            <h4>Motivasi</h4>
            <p>✨ "Belajar Bahasa Inggris adalah langkah pertama menuju kesuksesan." ✨</p>
          </div>
        )}

        {/* Bagian kontak */}
        {showSection.contact && (
          <div className="footer-section">
            <h4>Kontak Kami</h4>
            <div className="contact-links">
              <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/whatsapp-logo.png"
                  alt="WhatsApp"
                  className="contact-logo"
                />
              </a>
              <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/instagram-logo.png"
                  alt="Instagram"
                  className="contact-logo"
                />
              </a>
            </div>
          </div>
        )}

        {/* Bagian kerja sama */}
        <div className="footer-bottom">
          <p>In partnership with:</p>
          <div className="partner-logo">
            <img
              src="/images/logoremov.png"
              alt="SMA N 1 Baktiraja Logo"
              className="partner-logo-img"
            />
            <p>SMA N 1 Baktiraja</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
