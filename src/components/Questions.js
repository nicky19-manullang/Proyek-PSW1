import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Questions.css';

function Questions() {
  const navigate = useNavigate();

  // Data untuk Semester 1
  const semester1Topics = [
    {
      id: 1,
      image: 'https://i.pinimg.com/736x/5c/35/48/5c354807de4019592bd9b6a4268955c9.jpg',
      title: 'Sentence Structure',
      route: '/quis1',
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/736x/10/5e/df/105edffe5427e1aeb1053f61f2685886.jpg',
      title: 'Type of Sentence',
      route: '/quis2',
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/736x/c8/fb/ea/c8fbead950fcef89535966b329a21124.jpg',
      title: 'Classification of Sentences',
      route: '/quis3',
    },
  ];

  // Data untuk Semester 2
  const semester2Topics = [
    {
      id: 4,
      image: 'https://i.pinimg.com/736x/5c/35/48/5c354807de4019592bd9b6a4268955c9.jpg',
      title: 'Active and Passive Voice',
      route: '/quis4',
    },
    {
      id: 5,
      image: 'https://i.pinimg.com/736x/5c/35/48/5c354807de4019592bd9b6a4268955c9.jpg',
      title: 'Direct and Indirect Speech',
      route: '/quis5',
    },
    {
      id: 6,
      image: 'https://i.pinimg.com/736x/5c/35/48/5c354807de4019592bd9b6a4268955c9.jpg',
      title: 'Tenses',
      route: '/quis6',
    },
  ];

  // Fungsi navigasi
  const handleButtonClick = (route) => {
    navigate(route);
  };

  return (
    <div className="quiz-topics">
      {/* Latihan Soal Semester 1 */}
      <h2>Latihan Soal Semester 1</h2>
      <div className="topics-grid">
        {semester1Topics.map((topic) => (
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

      {/* Latihan Soal Semester 2 */}
      <h2>Latihan Soal Semester 2</h2>
      <div className="topics-grid">
        {semester2Topics.map((topic) => (
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
