import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Questions.css';

function Questions() {
  const navigate = useNavigate();

  const semester1Topics = [
    {
      id: 1,
      image: 'https://i.pinimg.com/736x/10/34/cf/1034cf482a542b1983642bfb5474fc26.jpg',
      title: 'Sentence Structure',
      route: '/quis1',
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/736x/4e/5d/ca/4e5dcabda428b586f7445b89f3d62923.jpg',
      title: 'Type of Sentence',
      route: '/quis2',
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/736x/bf/4c/38/bf4c3820477e2fe92ea155943c0ae173.jpg',
      title: 'Classification of Sentence',
      route: '/quis3',
    },
    {
      id: 4,
      image: 'https://i.pinimg.com/736x/07/bb/8a/07bb8ac85a1c6636f8751f746e96ccd9.jpg',
      title: 'Type of Clauses',
      route: '/quis4',
    },
    {
      id: 5,
      image: 'https://i.pinimg.com/736x/fb/c0/d7/fbc0d7050ccadc19fb5c059deb9a82b9.jpg',
      title: 'Sentence Connectors',
      route: '/quis5',
    },
  ];

  const semester2Topics = [
    {
      id: 6,
      image: 'https://i.pinimg.com/736x/fb/c0/d7/fbc0d7050ccadc19fb5c059deb9a82b9.jpg',
      title: 'Tenses',
      route: '/quis6',
    },
    {
      id: 7,
      image: 'https://i.pinimg.com/736x/07/bb/8a/07bb8ac85a1c6636f8751f746e96ccd9.jpg',
      title: 'Modals',
      route: '/quis7',
    },
    {
      id: 8,
      image: 'https://i.pinimg.com/736x/bf/4c/38/bf4c3820477e2fe92ea155943c0ae173.jpg',
      title: 'Adverb',
      route: '/quis8',
    },
    {
      id: 9,
      image: 'https://i.pinimg.com/736x/4e/5d/ca/4e5dcabda428b586f7445b89f3d62923.jpg',
      title: 'Phrases',
      route: '/quis9',
    },
    {
      id: 10,
      image: 'https://i.pinimg.com/736x/10/34/cf/1034cf482a542b1983642bfb5474fc26.jpg',
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
        <h1>Challenge Yourself with This Quiz!</h1>
        <h2>Quiz Semester 1</h2>
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
        <h2>Quiz Semester 2</h2>
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
