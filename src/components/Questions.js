import React, { useState } from 'react';
import '../styles/Questions.css';

function Questions() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const questions = [
    {
      question: "What is the synonym of happy?",
      options: ['A. Sad', 'B. Angry', 'C. Joyful', 'D. Tired'],
      correctAnswer: 'C',
    },
    {
      question: "What is the antonym of bright?",
      options: ['A. Dark', 'B. Light', 'C. Dull', 'D. Happy'],
      correctAnswer: 'A',
    },
    {
      question: "Which word means to enhance?",
      options: ['A. Destroy', 'B. Improve', 'C. Ignore', 'D. Reduce'],
      correctAnswer: 'B',
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setFeedback(null); // Reset feedback saat memilih jawaban baru
  };

  const checkAnswer = () => {
    if (selectedAnswer) {
      const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
      setFeedback(isCorrect ? 'Correct! 🎉' : 'Wrong! 😔');
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setFeedback(null);
    }
  };

  return (
    <section id="questions" className="section questions">
      <h2>Soal Latihan</h2>
      <div className="question">
        <p>{currentQuestion.question}</p>
        <ul>
          {currentQuestion.options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleAnswerClick(option[0])} // Ambil huruf pertama sebagai jawaban
              className={`option ${selectedAnswer === option[0] ? 'selected' : ''}`}
            >
              {option}
            </li>
          ))}
        </ul>
        <button className="check-answer" onClick={checkAnswer} disabled={!selectedAnswer}>
          {selectedAnswer ? 'Check Answer' : 'Select an Option'}
        </button>
        {feedback && <p className={`feedback ${feedback.includes('Correct') ? 'correct' : 'incorrect'}`}>{feedback}</p>}
        {feedback && currentQuestionIndex < questions.length - 1 && (
          <button className="next-question" onClick={nextQuestion}>
            Next Question
          </button>
        )}
      </div>
    </section>
  );
}

export default Questions;
