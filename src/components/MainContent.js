import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MainContent.css";

function MainContent() {
  const navigate = useNavigate();

  const learningClasses = [
    {
      title: "Can and Could",
      description: "Pelajari modal verbs 'can' dan 'could' untuk menunjukkan kemampuan.",
      route: "/can-could",
    },
    {
      title: "Asking and Giving Opinion",
      description: "Belajar bertanya dan memberikan pendapat.",
      route: "/opinion",
    },
    {
      title: "Future Perfect Tense",
      description: "Pelajari struktur dan penggunaan future perfect tense.",
      route: "/future-perfect",
    },
    {
      title: "Personal Letter",
      description: "Belajar menulis surat pribadi.",
      route: "/personal-letter",
    },
    {
      title: "Analytical Exposition",
      description: "Pelajari cara menyusun teks analitis.",
      route: "/exposition",
    },
    {
      title: "Formal Letter",
      description: "Belajar menulis surat resmi.",
      route: "/formal-letter",
    },
  ];

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

      <div className="learning-classes-container">
        <h2>Learning Materials</h2>
        <div className="class-cards">
          {learningClasses.map((learningClass, index) => (
            <div
              key={index}
              className="class-card"
              onClick={() => navigate(learningClass.route)}
            >
              <h3>{learningClass.title}</h3>
              <p>{learningClass.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default MainContent;
