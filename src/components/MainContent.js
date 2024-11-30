import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MainContent.css";

function MainContent() {
  const navigate = useNavigate();
  // Fungsi untuk menavigasi ke halaman Materi
  const goToMateriPage = () => {
    navigate("/materi");
  };

  return (
    <main className="main-content">
      <div className="header-section">
        <div className="text-section">
          <h1>JOUENGLISH</h1>
          <p>Your Ultimate Online English Learning Platform</p>
        </div>
        <div className="logo-container">
          <img src="/images/hero.png" alt="JOUEnglish Logo" className="logo" />
        </div>
      </div>

      <div className="advertisement-container">
        <h2>Watch Our Introduction Video</h2>
        <video className="advertisement-video" controls autoPlay>
          <source src="/images/bing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="schedule-container">
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
      </div>
      <div className="fun-facts-container">
        <h2>Fun Facts About English</h2>
        <ul className="fun-facts-list">
          <li>English is the official language of 67 countries.</li>
          <li>The word "set" has the most meanings in English.</li>
          <li>Over 1.5 billion people speak English worldwide.</li>
          <li>Shakespeare added over 1,700 words to the English language.</li>
          <li>The most commonly used letter in English is "E".</li>
        </ul>
      </div>

      <div className="cta-container">
        <button className="cta-button" onClick={goToMateriPage}>
          Explore Materials
        </button>
      </div>
    </main>
  );
}

export default MainContent;
