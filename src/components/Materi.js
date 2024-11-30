import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Materi.css";

function Materi() {
  const navigate = useNavigate();

  const semester1 = [
    {
      title: "Modul 1: Struktur Kalimat",
      topics: [
        "Subjek, predikat, dan objek",
        "Frase dan klausa",
        "Kalimat sederhana dan kompleks",
      ],
      image: "/images/sentence.png",
      link: "/modul1",
    },
    {
      title: "Modul 2: Tipe Kalimat",
      topics: ["Deklaratif, interogatif, imperatif, dan eksklamatif"],
      image: "/images/type.png",
      link: "/modul2",
    },
    {
      title: "Modul 3: Klasifikasi Kalimat",
      topics: ["Kalimat aktif dan pasif"],
      image: "/images/classification.png",
      link: "/modul3",
    },
    {
      title: "Modul 4: Jenis Kalimat",
      topics: ["Kalimat utama dan kalimat dependen"],
      image: "/images/clauses.png",
      link: "/modul4",
    },
    {
      title: "Modul 5: Penghubung Kalimat",
      topics: ["Konjungsi koordinatif dan subordinatif"],
      image: "/images/connectors.png",
      link: "/modul5",
    },
  ];

  const semester2 = [
    {
      title: "Modul 6: Penggunaan Tense",
      topics: [
        "Present Simple, Present Continuous",
        "Past Simple, Past Continuous",
        "Future Simple",
      ],
      image: "/images/tenses.png",
      link: "/modul6",
    },
    {
      title: "Modul 7: Penggunaan Modal",
      topics: ["Modal seperti can, may, must, should, will, etc."],
      image: "/images/modals.png",
      link: "/modul7",
    },
    {
      title: "Modul 8: Penggunaan Keterangan",
      topics: ["Keterangan waktu, tempat, dan cara"],
      image: "/images/adverb.png",
      link: "/modul8",
    },
    {
      title: "Modul 9: Penggunaan Frasa",
      topics: [
        "Frasa preposisi, frasa nominal, dan frasa verba",
      ],
      image: "/images/phares.png",
      link: "/modul9",
    },
    {
      title: "Modul 10: Punctuation",
      topics: ["Tanda baca seperti koma, titik, tanda tanya, tanda seru"],
      image: "/images/punctuation.png",
      link: "/modul10",
    },
  ];

  return (
    <div className="materi-page">
      <h2>Materi Belajar</h2>
      <p>Pilih modul untuk mempelajari topik yang menarik bagi Anda.</p>

      <div className="semester-section">
        <h3>Semester 1</h3>
        <div className="materi-container">
          {semester1.map((module, index) => (
            <div key={index} className="materi-card">
              <img src={module.image} alt={module.title} className="materi-image" />
              <div className="materi-content">
                <h4>{module.title}</h4>
                <ul>
                  {module.topics.map((topic, idx) => (
                    <li key={idx}>{topic}</li>
                  ))}
                </ul>
                <button
                  className="materi-button"
                  onClick={() => navigate(module.link)}
                >
                  Pelajari Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="semester-section">
        <h3>Semester 2</h3>
        <div className="materi-container">
          {semester2.map((module, index) => (
            <div key={index} className="materi-card">
              <img src={module.image} alt={module.title} className="materi-image" />
              <div className="materi-content">
                <h4>{module.title}</h4>
                <ul>
                  {module.topics.map((topic, idx) => (
                    <li key={idx}>{topic}</li>
                  ))}
                </ul>
                <button
                  className="materi-button"
                  onClick={() => navigate(module.link)}
                >
                  Pelajari Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Materi;
