import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Questions.css';

function Questions() {
  const navigate = useNavigate();

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
      image: 'https://i.pinimg.com/736x/af/aa/6a/afaa6a66011b016d7dae7446d317c546.jpg',
      title: 'Classification of Sentence',
      route: '/quis3',
    },
    {
      id: 4,
      image: 'https://i.pinimg.com/736x/e5/c0/0d/e5c00d71ba9f3e465e6a38f3d884db54.jpg',
      title: 'Type of Clauses',
      route: '/quis4',
    },
    {
      id: 5,
      image: 'https://i.pinimg.com/736x/e5/c0/0d/e5c00d71ba9f3e465e6a38f3d884db54.jpg',
      title: 'Sentence Connectors',
      route: '/quis5',
    },
  ];

  const semester2Topics = [
    {
      id: 6,
      image: 'https://i.pinimg.com/736x/68/a6/c2/68a6c2747c4037399c8b06561b69a410.jpg',
      title: 'Tenses',
      route: '/quis6',
    },
    {
      id: 7,
      image: 'https://i.pinimg.com/736x/d5/9c/bd/d59cbd2e8f012cb12445319c4cda4d27.jpg',
      title: 'Modals',
      route: '/quis7',
    },
    {
      id: 8,
      image: 'https://i.pinimg.com/736x/bc/2d/19/bc2d19b2e4d7f7d3ed25853f9f9ab71a.jpg',
      title: 'Adverb',
      route: '/quis8',
    },
    {
      id: 9,
      image: 'https://i.pinimg.com/736x/5f/16/0b/5f160b2b2214b1b2817df404d12ab2cc.jpg',
      title: 'Phrases',
      route: '/quis9',
    },
    {
      id: 10,
      image: 'https://i.pinimg.com/736x/5f/16/0b/5f160b2b2214b1b2817df404d12ab2cc.jpg',
      title: 'Punctuation',
      route: '/quis10',
    },
  ];

  const handleButtonClick = (route) => {
    navigate(route);
  };

  return (
    <div className="quiz-container">
      <div className="semester-section">
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
                Start Quiz
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="semester-section">
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
                Start Quiz
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Questions;
