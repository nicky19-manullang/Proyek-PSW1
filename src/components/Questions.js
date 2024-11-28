import React from 'react';
import Slider from 'react-slick';
import { useEffect } from 'react';
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
      title: 'Classification of Sentences',
      route: '/quis3',
      background: 'linear-gradient(135deg, #E8FFEB, #FFF)',
    },
    {
      id: 4,
      image: 'https://i.pinimg.com/736x/e5/c0/0d/e5c00d71ba9f3e465e6a38f3d884db54.jpg',
      title: 'Active and Passive Voice',
      route: '/quis4',
      background: 'linear-gradient(135deg, #E8F0FF, #FFF)',
    },
    {
      id: 5,
      image: 'https://i.pinimg.com/736x/e5/c0/0d/e5c00d71ba9f3e465e6a38f3d884db54.jpg',
      title: 'Active and Passive Voice',
      route: '/quis5',
      background: 'linear-gradient(135deg, #E8F0FF, #FFF)',
    },
  ];

  const semester2Topics = [
    {
      id: 6,
      image: 'https://i.pinimg.com/736x/68/a6/c2/68a6c2747c4037399c8b06561b69a410.jpg',
      title: 'Direct and Indirect Speech',
      route: '/quis6',
      background: 'linear-gradient(135deg, #FFE8F4, #FFF)',
    },
    {
      id: 7,
      image: 'https://i.pinimg.com/736x/d5/9c/bd/d59cbd2e8f012cb12445319c4cda4d27.jpg',
      title: 'Tenses',
      route: '/quis7',
      background: 'linear-gradient(135deg, #F4FFE8, #FFF)',
    },
    {
      id: 8,
      image: 'https://i.pinimg.com/736x/bc/2d/19/bc2d19b2e4d7f7d3ed25853f9f9ab71a.jpg',
      title: 'Conditional Sentences',
      route: '/quis8',
      background: 'linear-gradient(135deg, #E8F8FF, #FFF)',
    },
    {
      id: 9,
      image: 'https://i.pinimg.com/736x/5f/16/0b/5f160b2b2214b1b2817df404d12ab2cc.jpg',
      title: 'Reported Speech',
      route: '/quis9',
      background: 'linear-gradient(135deg, #FFF1E8, #FFF)',
    },
    {
      id: 10,
      image: 'https://i.pinimg.com/736x/5f/16/0b/5f160b2b2214b1b2817df404d12ab2cc.jpg',
      title: 'Reported Speech',
      route: '/quis10',
      background: 'linear-gradient(135deg, #FFF1E8, #FFF)',
    },
  ];

  const handleButtonClick = (route) => {
    navigate(route);
  };

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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const topicTitles = document.querySelectorAll('.topic-title');

    topicTitles.forEach(title => {
      title.style.textDecoration = 'none';
    });
  }, []);

  return (
    <div className="quiz-container">
      <div className="semester-section">
        <h2>Latihan Soal Semester 1</h2>
        <Slider {...sliderSettings}>
          {semester1Topics.map((topic) => (
            <div key={topic.id} className="topic-card" style={{ background: topic.background }}>
              <img src={topic.image} alt={topic.title} className="topic-image" />
              <h3 className="topic-title">{topic.title}</h3>
              <div className="start-quiz-button-container">
                <button
                  className="topic-button"
                  onClick={() => handleButtonClick(topic.route)}
                >
                  Mulai Kuis
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="semester-section">
        <h2>Latihan Soal Semester 2</h2>
        <Slider {...sliderSettings}>
          {semester2Topics.map((topic) => (
            <div key={topic.id} className="topic-card" style={{ background: topic.background }}>
              <img src={topic.image} alt={topic.title} className="topic-image" />
              <h3 className="topic-title">{topic.title}</h3>
              <div className="start-quiz-button-container">
                <button
                  className="topic-button"
                  onClick={() => handleButtonClick(topic.route)}
                >
                  Mulai Kuis
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Questions;
