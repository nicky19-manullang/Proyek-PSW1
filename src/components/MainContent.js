import React from "react";
import "../styles/MainContent.css";

function MainContent() {
  return (
    <main className="main-content">
      {/* Bagian Teks dan Logo */}
      <div className="content-wrapper">
        <div className="text-section">
          <h1>JOUENGLISH</h1>
          <p>Online English Class</p>
        </div>
        <div className="logo-container">
          <img src="/images/hero.png" alt="JOUEnglish Logo" className="logo" />
        </div>
      </div>
    </main>
  );
}

export default MainContent;
