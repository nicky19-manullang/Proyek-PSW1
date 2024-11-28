import React, { useState } from 'react';
import '../styles/Quis.css';

function Quis1() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

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
  };

  const nextQuestion = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setCorrectAnswersCount(correctAnswersCount + 1); // Tambahkan skor jika benar
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setQuizFinished(true); // Tandai kuis selesai setelah soal terakhir
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setCorrectAnswersCount(0);
    setQuizFinished(false);
  };

  return (
    <section id="questions" className="section questions">
      <h2 className="section-title">Soal Latihan</h2>
      {!quizFinished ? (
        <div className="question-card">
          <p className="question-text">{currentQuestion.question}</p>
          <ul className="options-list">
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
          <button
            className="btn next-question"
            onClick={nextQuestion}
            disabled={!selectedAnswer} // Nonaktifkan tombol jika belum ada jawaban
          >
            {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </button>
        </div>
      ) : (
        <div className="result-card">
          <h3>Quiz Finished!</h3>
          <p>
            You answered <span className="score">{correctAnswersCount}</span> out of{' '}
            <span className="total-questions">{questions.length}</span> questions correctly!
          </p>
          <button className="btn restart-quiz" onClick={restartQuiz}>
            Restart Quiz
          </button>
        </div>
      )}
    </section>
  );
}

export default Quis1;
