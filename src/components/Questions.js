import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Questions.css';

function Questions() {
  const navigate = useNavigate();

  const topics = [
    {
      id: 1,
      image: 'https://i.pinimg.com/736x/c8/fb/ea/c8fbead950fcef89535966b329a21124.jpg',
      title: 'Sentence Structure',
      route: '/quis1', // Rute untuk halaman quis1
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/736x/c8/fb/ea/c8fbead950fcef89535966b329a21124.jpg',
      title: 'Type of Sentence',
      route: '/quis2', // Rute untuk halaman quis2
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/736x/c8/fb/ea/c8fbead950fcef89535966b329a21124.jpg',
      title: 'Classification of Sentences',
      route: '/quis3', // Rute untuk halaman quis3
    },
  ];

  const handleButtonClick = (route) => {
    navigate(route); 
  };

  return (
    <div className="quiz-topics">
      <h2>Latihan Soal Semester 1</h2>
      <div className="topics-grid">
        {topics.map((topic) => (
          <div key={topic.id} className="topic-card">
            <img src={topic.image} alt={topic.title} className="topic-image" />
            <h3 className="topic-title">{topic.title}</h3>
            <button
              className="topic-button"
              onClick={() => handleButtonClick(topic.route)} 
            >
              Mulai Kuis
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questions;
