import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quis.css';

function Quis7() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const navigate = useNavigate();
  const questions = [
    {
        question: "1. Which modal verb is used to express ability or permission?",
        options: ['A. May', 'B. Can', 'C. Must', 'D. Should'],
        correctAnswer: 'B',
    },
    {
        question: "2. What is the formula for using 'must'?",
        options: [
            'A. Subject + must + Verb 1',
            'B. Subject + must + Verb 2',
            'C. Subject + must + to + Verb 1',
            'D. Subject + must + be + Verb-ing'
        ],
        correctAnswer: 'A',
    },
    {
        question: "3. Which sentence uses 'may' correctly?",
        options: [
            'A. She may swims well.',
            'B. It may rain this evening.',
            'C. May she to come in?',
            'D. They may going to the park.'
        ],
        correctAnswer: 'B',
    },
    {
        question: "4. What is the function of 'should'?",
        options: [
            'A. To express obligation',
            'B. To express ability',
            'C. To give advice or recommendation',
            'D. To express a low possibility'
        ],
        correctAnswer: 'C',
    },
    {
        question: "5. Identify the modal verb in this sentence: 'You must wear a helmet while riding a bike.'",
        options: ['A. Must', 'B. Wear', 'C. Helmet', 'D. Riding'],
        correctAnswer: 'A',
    },
    {
        question: "6. Which modal verb indicates a polite request?",
        options: ['A. Can', 'B. Could', 'C. Should', 'D. Will'],
        correctAnswer: 'B',
    },
    {
        question: "7. Choose the sentence that uses 'will' correctly:",
        options: [
            'A. She will to call you tomorrow.',
            'B. It will be a sunny day.',
            'C. They will going to the museum.',
            'D. He will plays the guitar.'
        ],
        correctAnswer: 'B',
    },
    {
        question: "8. What does 'might' indicate?",
        options: [
            'A. A strong obligation',
            'B. A low possibility',
            'C. An ability in the past',
            'D. A future prediction'
        ],
        correctAnswer: 'B',
    },
    {
        question: "9. In which sentence does 'could' express past ability?",
        options: [
            'A. Could you help me, please?',
            'B. He could play the piano when he was five.',
            'C. Could you lend me your book?',
            'D. She could come to the party later.'
        ],
        correctAnswer: 'B',
    },
    {
        question: "10. Which modal verb is used to express a habit in the past?",
        options: ['A. Could', 'B. Would', 'C. Might', 'D. Should'],
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

export default Quis7;
