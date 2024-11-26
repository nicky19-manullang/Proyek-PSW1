import React from 'react';
import Slider from 'react-slick';
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
      image: 'https://i.pinimg.com/736x/c8/fb/ea/c8fbead950fcef89535966b329a21124.jpg',
      title: 'Classification of Sentences',
      route: '/quis3',
    },
    {
      id: 4,
      image: 'https://i.pinimg.com/736x/ca/48/51/ca4851d61464eb9a7e6b9c4d46ab97db.jpg',
      title: 'Active and Passive Voice',
      route: '/quis4',
    },
  ];

  const semester2Topics = [
    {
      id: 5,
      image: 'https://i.pinimg.com/736x/68/a6/c2/68a6c2747c4037399c8b06561b69a410.jpg',
      title: 'Direct and Indirect Speech',
      route: '/quis5',
    },
    {
      id: 6,
      image: 'https://i.pinimg.com/736x/d5/9c/bd/d59cbd2e8f012cb12445319c4cda4d27.jpg',
      title: 'Tenses',
      route: '/quis6',
    },
    {
      id: 7,
      image: 'https://i.pinimg.com/736x/bc/2d/19/bc2d19b2e4d7f7d3ed25853f9f9ab71a.jpg',
      title: 'Conditional Sentences',
      route: '/quis7',
    },
    {
      id: 8,
      image: 'https://i.pinimg.com/736x/5f/16/0b/5f160b2b2214b1b2817df404d12ab2cc.jpg',
      title: 'Reported Speech',
      route: '/quis8',
    },
  ];

  const handleButtonClick = (route) => {
    navigate(route);
  };

  // Custom Arrows
  const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <span>&lt;</span>
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <span>&gt;</span>
    </div>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="quiz-container">
      {/* Semester 1 */}
      <div className="semester-section">
        <h2>Latihan Soal Semester 1</h2>
        <Slider {...sliderSettings}>
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
        </Slider>
      </div>

      {/* Semester 2 */}
      <div className="semester-section">
        <h2>Latihan Soal Semester 2</h2>
        <Slider {...sliderSettings}>
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
        </Slider>
      </div>
    </div>
  );
}

export default Questions;
