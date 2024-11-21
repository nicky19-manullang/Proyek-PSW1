import React from "react";
import "../styles/LearningPage.css";

function FormalLetter() {
  return (
    <div className="learning-page">
      <h1>Formal Letter</h1>
      <p>
        Surat resmi digunakan untuk komunikasi formal, seperti surat lamaran kerja atau surat kepada institusi.
      </p>
      <h2>Struktur:</h2>
      <ul>
        <li>Address of Sender</li>
        <li>Date</li>
        <li>Address of Receiver</li>
        <li>Salutation</li>
        <li>Body</li>
        <li>Closing</li>
      </ul>
    </div>
  );
}

export default FormalLetter;
