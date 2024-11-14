import React from 'react';
import '../styles/MainContent.css'; 

function MainContent() {
  return (
    <main className="main-content">
      <div className="logo-container">
        <img src="/images/logo.png" alt="JOUEnglish Logo" className="logo" />
      </div>
      
      <h2>Welcome to JOUEnglish</h2>
      <p>Learn English online with easy-to-follow courses.</p>
      
      <p className="invitation-text">
        Join us to enhance your English skills effortlessly with JOUEnglish. Dive into our interactive lessons and start your journey to mastering English today!
      </p>
      
      <button className="cta-button">Get Started</button>
    </main>
  );
}

export default MainContent;
