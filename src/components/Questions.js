import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Questions.css';

function Questions() {

  const goToQuis1 = () => {
    navigate('/quis1')
  }
  const navigate = useNavigate();

  const topics = [
    {
      id: 1,
      image: 'https://i.pinimg.com/736x/c8/fb/ea/c8fbead950fcef89535966b329a21124.jpg', 
      title: 'Sentence Structure',
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/736x/c8/fb/ea/c8fbead950fcef89535966b329a21124.jpg',
      title: 'Type of Sentence',
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/736x/c8/fb/ea/c8fbead950fcef89535966b329a21124.jpg', 
      title: 'Classification of Sentences',
    },
  ];

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
              onClick={goToQuis1}
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
