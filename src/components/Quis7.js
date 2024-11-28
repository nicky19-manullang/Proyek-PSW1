import React, { useState } from 'react';
import '../styles/Quis.css';

function Quis7() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const questions = [
    {
      question: "Complete the sentence with the correct modal: You ___ (not/smoke) in this area. It's prohibited.",
      options: ['A. cannot', 'B. may not', 'C. must not', 'D. should not'],
      correctAnswer: 'C',
    },
    {
      question: "Which modal expresses a strong obligation?",
      options: ['A. Can', 'B. May', 'C. Must', 'D. Might'],
      correctAnswer: 'C',
    },
    {
      question: "Choose the correct sentence:",
      options: ['A. She can to swim well.', 'B. She can swim well.', 'C. She can swimming well.', 'D. She can swims well.'],
      correctAnswer: 'B',
    },
    {
        question: "Translate into English: Dia mungkin akan datang ke pesta.",
        options: ['A. He can come to the party.', 'B. He might come to the party.', 'C. He must come to the party.', 'D. He should come to the party.'],
        correctAnswer: 'B',
    },
    {
        question: "What is the correct modal to ask for permission formally?",
        options: ['A. Shall', 'B. Can', 'C. May', 'D. Will'],
        correctAnswer: 'C',
    },
    {
        question: "Identify the error in the sentence: You should to apologize to her.",
        options: ['A. You', 'B. should', 'C. to apologize', 'D. to her'],
        correctAnswer: 'C',
    },
    {
        question: "Complete the sentence: We ___ (go) to the park if it doesn’t rain tomorrow.",
        options: ['A. will', 'B. can', 'C. must', 'D. may'],
        correctAnswer: 'A',
    },
    {
        question: "Which modal expresses ability in the past?",
        options: ['A. Could', 'B. Can', 'C. Must', 'D. Should'],
        correctAnswer: 'A',
    },
    {
        question: "Translate into English: Kamu seharusnya memakan lebih banyak sayuran.",
        options: ['A. You can eat more vegetables.', 'B. You should eat more vegetables.', 'C. You must eat more vegetables.', 'D. You might eat more vegetables.'],
        correctAnswer: 'B',
    },
    {
        question: "Complete the question: ___ I help you with your homework?",
        options: ['A. May', 'B. Can', 'C. Should', 'D. Must'],
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

export default Quis7;
