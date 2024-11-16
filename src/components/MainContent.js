import React, { useState } from 'react';  // Menggunakan useState
import '../styles/MainContent.css';

function MainContent() {
  // State untuk mengontrol apakah logo ditampilkan
  const [showLogo, setShowLogo] = useState(false);

  // Fungsi untuk menangani klik tombol
  const handleGetStarted = () => {
    setShowLogo(prevState => !prevState);  // Toggle antara true dan false
  };

  return (
    <main className="main-content">
      {/* Bagian Selamat Datang */}
      <div className="intro-section">
        <h2>Welcome to JOUEnglish</h2>
        <p>Learn English online with interactive lessons and activities!</p>
        <button className="cta-button" onClick={handleGetStarted}>
          {showLogo ? "Hide Logo" : "Get Started"}  {/* Ubah teks tombol sesuai kondisi */}
        </button>
      </div>

      {/* Bagian Logo */}
      {showLogo && (
        <div className="logo-container">
          <img src="/images/hero.png" alt="JOUEnglish Logo" className="logo" />
        </div>
      )}
    </main>
  );
}

export default MainContent;
