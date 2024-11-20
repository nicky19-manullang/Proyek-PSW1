import React from "react";
import "../styles/MainContent.css";

function MainContent() {
  return (

    <div className="col-12 p-4">
      <section className="d-flex align-items-center justify-content-between p-5 bg-white">
        <div className="col-md-6">
          <h1>Welcome to JOUEnglish</h1>
          <p>
          Let's Unlock Your English Potential with JOUEnglish!
          </p>
        </div>
      </section>
    </div>
==
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