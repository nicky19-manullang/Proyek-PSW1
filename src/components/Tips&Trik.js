import React from "react";
import "../styles/Tutorial.css";

function VideoTutorial() {
  const semesterOneVideos = [
    {
      name: "Materi Sentence Structure Bahasa Inggris SMA Kelas 11 Semester 1",
      video: "https://youtu.be/jul2urONzOQ?si=e3N3cHmHVrsj5N89",
      icon: "/images/SentenceStrucutre.jpg",
    },
    {
      name: "Materi Type of Sentence Bahasa Inggris SMA Kelas 11 Semester 1",
      video: "https://www.youtube.com/embed/def456",
      icon: "/images/typesofsentences.png",
    },
    {
      name: "Materi Classification of Sentence Bahasa Inggris SMA Kelas 11 Semester 1",
      video: "https://www.youtube.com/embed/ghi789",
      icon: "/images/classificatioin.png",
    },
    {
      name: "Materi Type of Clauses Bahasa Inggris SMA Kelas 11 Semester 1",
      video: "https://www.youtube.com/embed/jkl012",
      icon: "/images/Typesofclauses.webp",
    },
    {
      name: "Materi Sentence Connectors Bahasa Inggris SMA Kelas 11 Semester 1",
      video: "https://www.youtube.com/embed/mno345",
      icon: "/images/sentenceconectors.jpg",
    },
  ];

  const semesterTwoVideos = [
    {
      name: "Materi Tenses Bahasa Inggris SMA Kelas 11 Semester 2",
      video: "https://www.youtube.com/embed/pqr678",
      icon: "/images/tense.jpg",
    },
    {
      name: "Materi Penggunaan Bahasa Inggris Modals SMA Kelas 11 Semester 2",
      video: "https://www.youtube.com/embed/stu901",
      icon: "/images/modals verbs.jpg",
    },
    {
      name: "Materi Keterangan (Adverbs) Bahasa Inggris SMA Kelas 11 Semester 2",
      video: "https://www.youtube.com/embed/vwx234",
      icon: "/images/Adverb.jpg",
    },
    {
      name: "Materi Frasa (Phrases) Bahasa Inggris SMA Kelas 11 Semester 2",
      video: "https://www.youtube.com/embed/yzb567",
      icon: "/images/Phrases.jpg",
    },
    {
      name: "Materi Punctuation Bahasa Inggris SMA Kelas 11 Semester 2",
      video: "https://www.youtube.com/embed/abc890",
      icon: "/images/Punctuation.jpg",
    },
  ];

  return (
    <div className="tutorial-page">
      <h2>Video Tutorial dan Tips Belajar</h2>
      <p>Tonton video-video berikut untuk memahami materi dengan lebih baik.</p>

      <div className="semester-section">
        <h3>Semester 1</h3>
        <div className="tutorial-container">
          {semesterOneVideos.map((video, index) => (
            <div key={index} className="tutorial-card">
              <img
                src={video.icon}
                alt={video.name}
                className="tutorial-image"
              />
              <div className="tutorial-content">
                <h4>{video.name}</h4>
                <iframe
                  width="100%"
                  height="200"
                  src={video.video}
                  title={video.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="semester-section">
        <h3>Semester 2</h3>
        <div className="tutorial-container">
          {semesterTwoVideos.map((video, index) => (
            <div key={index} className="tutorial-card">
              <img
                src={video.icon}
                alt={video.name}
                className="tutorial-image"
              />
              <div className="tutorial-content">
                <h4>{video.name}</h4>
                <iframe
                  width="100%"
                  height="200"
                  src={video.video}
                  title={video.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoTutorial;
