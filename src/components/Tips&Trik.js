import React from 'react';

const EnglishLearningTips = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>English Learning Tips</h1>
      <p>Watch the video below to discover tricks for learning English effectively:</p>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/your-video-id"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default EnglishLearningTips;
