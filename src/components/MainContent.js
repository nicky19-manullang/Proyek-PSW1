import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MainContent.css";

function MainContent() {
  const navigate = useNavigate();

  // Fungsi untuk menavigasi ke halaman Materi
  const goToMateriPage = () => {
    navigate("/materi"); // Mengarahkan ke halaman Materi
  };

  return (
    <main className="main-content">
      <div className="content-wrapper">
        <div className="text-section">
          <h1>JOUENGLISH</h1>
          <p>Online English Class</p>
        </div>
        <div className="logo-container">
          <img src="/images/hero.png" alt="JOUEnglish Logo" className="logo" />
        </div>
      </div>

      {/* Iklan Video Singkat */}
      <div className="advertisement-container">
        <h2>Watch Our Introduction Video</h2>
        <video className="advertisement-video" controls autoPlay>
          <source src="/images/bing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Jadwal Belajar */}
      <div className="schedule-container">
        <h2>Jadwal Belajar</h2>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Hari</th>
              <th>Materi</th>
              <th>Jam</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Senin</td>
              <td>Can and Could</td>
              <td>10:00 - 11:00</td>
            </tr>
            <tr>
              <td>Selasa</td>
              <td>Asking and Giving Opinion</td>
              <td>10:00 - 11:00</td>
            </tr>
            <tr>
              <td>Rabu</td>
              <td>Future Perfect Tense</td>
              <td>10:00 - 11:00</td>
            </tr>
            <tr>
              <td>Kamis</td>
              <td>Personal Letter</td>
              <td>10:00 - 11:00</td>
            </tr>
            <tr>
              <td>Jumat</td>
              <td>Analytical Exposition</td>
              <td>10:00 - 11:00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Tombol untuk mengarahkan ke halaman Materi */}
      <div className="cta-container">
        <button className="cta-button" onClick={goToMateriPage}>
          Go to Materi
        </button>
      </div>
    </main>
  );
}

export default MainContent;
