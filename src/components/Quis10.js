import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quis.css';

function Quis10() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const navigate = useNavigate();
  const questions = [
    {
        question: "1. What is the purpose of using a comma in a sentence?",
        options: [
            'A. To end a declarative sentence',
            'B. To separate elements in a list or clauses',
            'C. To form a question',
            'D. To show emotion'
        ],
        correctAnswer: 'B',
    },
    {
        question: "2. Which sentence uses a comma correctly?",
        options: [
            'A. She is reading a book, now.',
            'B. I bought apples, bananas, and oranges.',
            'C. I, am going to the store.',
            'D. They are going to the park tomorrow,'
        ],
        correctAnswer: 'B',
    },
    {
        question: "3. What punctuation mark is used to end a declarative sentence?",
        options: [
            'A. Comma',
            'B. Exclamation mark',
            'C. Question mark',
            'D. Period'
        ],
        correctAnswer: 'D',
    },
    {
        question: "4. Which sentence uses a period correctly?",
        options: [
            'A. She is studying for the exam.',
            'B. What is your name?',
            'C. Stop!',
            'D. Wow, that’s amazing!'
        ],
        correctAnswer: 'A',
    },
    {
        question: "5. What is the function of a question mark?",
        options: [
            'A. To show surprise',
            'B. To separate clauses',
            'C. To end a declarative sentence',
            'D. To indicate a question'
        ],
        correctAnswer: 'D',
    },
    {
        question: "6. Which of the following is a correct use of a question mark?",
        options: [
            'A. I like ice cream, do you?',
            'B. How are you?',
            'C. Stop!',
            'D. He is coming to the party, right?'
        ],
        correctAnswer: 'B',
    },
    {
        question: "7. What is the function of an exclamation mark?",
        options: [
            'A. To end a question',
            'B. To express strong emotion or a command',
            'C. To separate clauses',
            'D. To make a statement'
        ],
        correctAnswer: 'B',
    },
    {
        question: "8. Which sentence uses an exclamation mark correctly?",
        options: [
            'A. She is studying hard!',
            'B. Are you coming to the party?',
            'C. He is reading a book.',
            'D. I will go to the store.'
        ],
        correctAnswer: 'A',
    },
    {
        question: "9. Which of the following sentences should end with a period?",
        options: [
            'A. What time is it?',
            'B. Hurry up!',
            'C. I went to the store.',
            'D. Wow, that’s incredible!'
        ],
        correctAnswer: 'C',
    },
    {
        question: "10. Which punctuation mark is used to separate items in a list?",
        options: [
            'A. Question mark',
            'B. Exclamation mark',
            'C. Comma',
            'D. Period'
        ],
        correctAnswer: 'C',
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

  const goBackToQuestions = () => {
    navigate('/questions'); // Navigasi ke halaman Questions
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
          <button className="btn back-to-questions" onClick={goBackToQuestions}>
            Back to Soal Latihan
          </button>
        </div>
      )}
    </section>
  );
}

export default Quis10;
