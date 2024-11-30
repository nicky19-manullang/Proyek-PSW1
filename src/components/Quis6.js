import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quis.css';

function Quis6() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const navigate = useNavigate();
  const questions = [
    {
        question: "1. Which tense is used to express a habitual action or general fact?",
        options: [
            'A. Present Simple',
            'B. Present Continuous',
            'C. Past Simple',
            'D. Future Simple'
        ],
        correctAnswer: 'A',
    },
    {
        question: "2. What is the formula for Present Continuous tense?",
        options: [
            'A. Subject + Verb 1',
            'B. Subject + is/am/are + Verb-ing',
            'C. Subject + Verb 2',
            'D. Subject + was/were + Verb-ing'
        ],
        correctAnswer: 'B',
    },
    {
        question: "3. Which of the following sentences is in Past Simple tense?",
        options: [
            'A. She walks to school every day.',
            'B. She is studying English now.',
            'C. She went to the market yesterday.',
            'D. She will visit her grandmother tomorrow.'
        ],
        correctAnswer: 'C',
    },
    {
        question: "4. What tense is used in this sentence: 'They are going to the park tomorrow'?",
        options: [
            'A. Present Simple',
            'B. Present Continuous',
            'C. Past Simple',
            'D. Future Simple'
        ],
        correctAnswer: 'B',
    },
    {
        question: "5. Which tense uses 'was/were + Verb-ing' in its structure?",
        options: [
            'A. Present Simple',
            'B. Past Simple',
            'C. Past Continuous',
            'D. Future Simple'
        ],
        correctAnswer: 'C',
    },
    {
        question: "6. Identify the tense: 'She will visit her grandmother tomorrow.'",
        options: [
            'A. Present Continuous',
            'B. Future Simple',
            'C. Past Simple',
            'D. Past Continuous'
        ],
        correctAnswer: 'B',
    },
    {
        question: "7. What is the correct formula for Past Simple tense?",
        options: [
            'A. Subject + Verb 1',
            'B. Subject + Verb 2',
            'C. Subject + will + Verb 1',
            'D. Subject + is/am/are + Verb-ing'
        ],
        correctAnswer: 'B',
    },
    {
        question: "8. Which sentence is in Present Continuous tense?",
        options: [
            'A. The sun rises in the east.',
            'B. She is reading a book now.',
            'C. They played football last week.',
            'D. She will travel to Bali next month.'
        ],
        correctAnswer: 'B',
    },
    {
        question: "9. In which tense is this sentence: 'She was reading a book when the phone rang'?",
        options: [
            'A. Past Continuous',
            'B. Past Simple',
            'C. Present Continuous',
            'D. Future Simple'
        ],
        correctAnswer: 'A',
    },
    {
        question: "10. Which tense is used to describe an interrupted action in the past?",
        options: [
            'A. Present Continuous',
            'B. Past Continuous',
            'C. Past Simple',
            'D. Future Simple'
        ],
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

export default Quis6;
