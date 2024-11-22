import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Questions.css';

function Questions() {
  const { id } = useParams();
  const quizId = Number(id);

  const allQuestions = {
    1: [
      { question: "What is 2+2?", options: ["A. 3", "B. 4", "C. 5", "D. 6"], correctAnswer: "B" },
      { question: "What is 5-3?", options: ["A. 1", "B. 2", "C. 3", "D. 4"], correctAnswer: "B" },
    ],
    2: [
      { question: "What is the capital of France?", options: ["A. London", "B. Paris", "C. Rome", "D. Berlin"], correctAnswer: "B" },
      { question: "What is the largest ocean?", options: ["A. Atlantic", "B. Pacific", "C. Indian", "D. Arctic"], correctAnswer: "B" },
    ],
    // Tambahkan pertanyaan untuk materi lainnya...
  };

  const questions = allQuestions[quizId] || [];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const nextQuestion = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setCorrectAnswersCount(0);
    setQuizFinished(false);
  };

  if (quizFinished) {
    return (
      <div className="result-card">
        <h3>Quiz Selesai!</h3>
        <p>
          Anda menjawab benar <span className="score">{correctAnswersCount}</span> dari{' '}
          <span className="total-questions">{questions.length}</span> pertanyaan.
        </p>
        <button className="btn restart-quiz" onClick={restartQuiz}>
          Mulai Lagi
        </button>
      </div>
    );
  }

  return (
    <div className="question-card">
      <h3>{questions[currentQuestionIndex].question}</h3>
      <ul className="options-list">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleAnswerClick(option[0])}
            className={`option ${selectedAnswer === option[0] ? 'selected' : ''}`}
          >
            {option}
          </li>
        ))}
      </ul>
      <button
        className="btn next-question"
        onClick={nextQuestion}
        disabled={!selectedAnswer}
      >
        {currentQuestionIndex < questions.length - 1 ? 'Pertanyaan Berikutnya' : 'Selesaikan Kuis'}
      </button>
    </div>
  );
}

export default Questions;