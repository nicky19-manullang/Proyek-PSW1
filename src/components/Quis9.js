import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quis.css';

function Quis9() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const navigate = useNavigate();
  const questions = [
    {
        question: "1. What is a prepositional phrase?",
        options: [
            'A. A phrase that functions as a noun',
            'B. A phrase that includes an auxiliary verb and main verb',
            'C. A phrase that begins with a preposition and ends with a noun or pronoun',
            'D. A phrase that modifies a noun'
        ],
        correctAnswer: 'C',
    },
    {
        question: "2. Which of the following is an example of a prepositional phrase?",
        options: [
            'A. In the park',
            'B. The beautiful garden',
            'C. Has been studying',
            'D. She bought a pair of shoes'
        ],
        correctAnswer: 'A',
    },
    {
        question: "3. What is the formula for a nominal phrase?",
        options: [
            'A. Preposition + Object',
            'B. Determiner + Modifier + Noun',
            'C. Auxiliary Verb + Main Verb',
            'D. Verb + Object'
        ],
        correctAnswer: 'B',
    },
    {
        question: "4. Which sentence contains a nominal phrase?",
        options: [
            'A. She is sitting on the chair.',
            'B. She bought a pair of shoes.',
            'C. They have finished their homework.',
            'D. The book is under the table.'
        ],
        correctAnswer: 'B',
    },
    {
        question: "5. Which of the following is an example of a verbal phrase?",
        options: [
            'A. She is sitting on the chair.',
            'B. They have finished their homework.',
            'C. The beautiful garden is my favorite place.',
            'D. The children played happily.'
        ],
        correctAnswer: 'B',
    },
    {
        question: "6. What is the role of a nominal phrase in a sentence?",
        options: [
            'A. To function as a verb',
            'B. To modify adjectives',
            'C. To function as a noun',
            'D. To indicate a preposition'
        ],
        correctAnswer: 'C',
    },
    {
        question: "7. Identify the prepositional phrase in this sentence: 'She is sitting on the chair.'",
        options: ['A. She is sitting', 'B. On the chair', 'C. Sitting on', 'D. The chair'],
        correctAnswer: 'B',
    },
    {
        question: "8. Which sentence contains a verb phrase?",
        options: [
            'A. She is writing a letter.',
            'B. The children played happily.',
            'C. The man in the blue jacket is my uncle.',
            'D. The sun rises in the east.'
        ],
        correctAnswer: 'A',
    },
    {
        question: "9. What is the formula for a verb phrase?",
        options: [
            'A. Preposition + Noun',
            'B. Auxiliary Verb + Main Verb',
            'C. Determiner + Modifier + Noun',
            'D. Subject + Verb'
        ],
        correctAnswer: 'B',
    },
    {
        question: "10. Which sentence demonstrates the use of a prepositional phrase at the beginning?",
        options: [
            'A. At the park, the children played happily.',
            'B. She is writing a letter.',
            'C. The children played happily at the park.',
            'D. The beautiful garden is my favorite place.'
        ],
        correctAnswer: 'A',
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

export default Quis9;
