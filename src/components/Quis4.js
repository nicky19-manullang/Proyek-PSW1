import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quis.css';

function Quis4() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const navigate = useNavigate();
  const questions = [
    {
        question: "1. What is a main clause?",
        options: ['A. A clause that depends on another clause', 'B. A clause that can stand alone with complete meaning', 'C. A group of words without a verb', 'D. A clause that only modifies nouns'],
        correctAnswer: 'B',
    },
    {
        question: "2. Which of the following is an example of a main clause?",
        options: ['A. Although I enjoy reading novels', 'B. That is the girl', 'C. Whom you saw yesterday', 'D. If she goes to the party'],
        correctAnswer: 'B',
    },
    {
        question: "3. What is a dependent clause?",
        options: ['A. A clause that can stand alone', 'B. A clause that needs a main clause to complete its meaning', 'C. A phrase that modifies a verb', 'D. A complete sentence'],
        correctAnswer: 'B',
    },
    {
        question: "4. Which sentence contains both a main clause and a dependent clause?",
        options: [
            'A. That is the girl.',
            'B. Whom you saw yesterday.',
            'C. That is the girl whom you saw yesterday.',
            'D. I enjoy reading novels.'
        ],
        correctAnswer: 'C',
    },
    {
        question: "5. In the sentence 'Although I enjoy reading novels, I don’t have much free time,' which part is the dependent clause?",
        options: ['A. Although I enjoy reading novels', 'B. I don’t have much free time', 'C. Novels', 'D. Both A and B'],
        correctAnswer: 'A',
    },
    {
        question: "6. What is another name for a dependent clause?",
        options: ['A. Main clause', 'B. Subordinate clause', 'C. Independent clause', 'D. Noun clause'],
        correctAnswer: 'B',
    },
    {
        question: "7. Which of the following cannot stand alone as a complete sentence?",
        options: [
            'A. I like watching movies.',
            'B. Because she was late.',
            'C. They went to the park.',
            'D. We enjoy traveling.'
        ],
        correctAnswer: 'B',
    },
    {
        question: "8. In the sentence 'That is the girl whom you saw yesterday,' what is 'whom you saw yesterday'?",
        options: ['A. Main clause', 'B. Dependent clause', 'C. Phrase', 'D. Compound sentence'],
        correctAnswer: 'B',
    },
    {
        question: "9. What is the function of a dependent clause in a sentence?",
        options: [
            'A. To convey the main information',
            'B. To stand alone as a simple sentence',
            'C. To provide additional information to the main clause',
            'D. To replace the main clause'
        ],
        correctAnswer: 'C',
    },
    {
        question: "10. Which sentence demonstrates the use of a dependent clause?",
        options: [
            'A. I enjoy reading novels.',
            'B. Although I was tired, I completed my homework.',
            'C. She walks to school every day.',
            'D. That is my car.'
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

export default Quis4;
