import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MainContent.css";

function MainContent() {
  const navigate = useNavigate();

  const goToMateriPage = () => {
    navigate("/materi");
  };

  return (
    <main className="main-content">
      <section className="header-section">
        <div className="text-section">
          <h1>JOUENGLISH</h1>
          <p className="subtitle">Your Ultimate Online English Learning Platform</p>
          <p className="tagline">"Empowering you to master English easily and effectively"</p>
          <button className="cta-button" onClick={goToMateriPage}>
            Start Learning
          </button>
        </div>
        <div className="logo-container">
          <img src="/images/hero.png" alt="JOUEnglish Logo" className="logo" />
        </div>
      </section>
      <section className="advertisement-container">
        <h2>Watch Our Introduction Video</h2>
        <div className="video-wrapper">
          <video className="advertisement-video" controls autoPlay loop>
            <source src="/images/bing.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section className="schedule-container">
        <h2>Learning Schedule</h2>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Topic</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>Can and Could</td>
              <td>10:00 - 11:00</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>Asking and Giving Opinion</td>
              <td>10:00 - 11:00</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>Future Perfect Tense</td>
              <td>10:00 - 11:00</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>Personal Letter</td>
              <td>10:00 - 11:00</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>Analytical Exposition</td>
              <td>10:00 - 11:00</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="fun-facts-container">
        <h2>Fun Facts About English</h2>
        <div className="facts-grid">
          <div className="fact-card">🌍 English is the official language of 67 countries.</div>
          <div className="fact-card">📖 The word "set" has the most meanings in English.</div>
          <div className="fact-card">🗣️ Over 1.5 billion people speak English worldwide.</div>
          <div className="fact-card">✍️ Shakespeare added over 1,700 words to the English language.</div>
          <div className="fact-card">🔤 The most commonly used letter in English is "E".</div>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
