import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quis.css';

function Quis5() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const navigate = useNavigate();
  const questions = [
    {
        question: "1. What is the function of coordinating conjunctions?",
        options: [
            'A. To connect a main clause with a dependent clause',
            'B. To connect two clauses that are equal',
            'C. To introduce a dependent clause',
            'D. To modify nouns or verbs'
        ],
        correctAnswer: 'B',
    },
    {
        question: "2. Which of the following is a coordinating conjunction?",
        options: ['A. Because', 'B. When', 'C. And', 'D. Although'],
        correctAnswer: 'C',
    },
    {
        question: "3. What is the function of subordinating conjunctions?",
        options: [
            'A. To connect a main clause with a dependent clause',
            'B. To connect two equal clauses',
            'C. To express contrast between ideas',
            'D. To indicate a question'
        ],
        correctAnswer: 'A',
    },
    {
        question: "4. Which sentence contains a coordinating conjunction?",
        options: [
            'A. I stayed home because it was raining.',
            'B. I wanted to go outside, but it was raining.',
            'C. Although it was sunny, I stayed inside.',
            'D. If it rains, we will cancel the picnic.'
        ],
        correctAnswer: 'B',
    },
    {
        question: "5. Which of the following is a subordinating conjunction?",
        options: ['A. But', 'B. Or', 'C. Although', 'D. And'],
        correctAnswer: 'C',
    },
    {
        question: "6. What does the subordinating conjunction 'because' indicate?",
        options: [
            'A. A cause or reason',
            'B. A time relationship',
            'C. A contrast',
            'D. A choice between options'
        ],
        correctAnswer: 'A',
    },
    {
        question: "7. Identify the subordinating conjunction in this sentence: 'I will go to the park if it stops raining.'",
        options: ['A. If', 'B. Go', 'C. Will', 'D. Stops'],
        correctAnswer: 'A',
    },
    {
        question: "8. Which sentence correctly uses a subordinating conjunction?",
        options: [
            'A. I went to the store, and I bought milk.',
            'B. She didn’t come to the party because she was sick.',
            'C. We could go to the beach or stay home.',
            'D. The sun was shining, but it was cold.'
        ],
        correctAnswer: 'B',
    },
    {
        question: "9. What is the coordinating conjunction in this sentence: 'I want to go to the beach, but it is raining.'",
        options: ['A. Want', 'B. To', 'C. But', 'D. Is'],
        correctAnswer: 'C',
    },
    {
        question: "10. How do conjunctions improve sentence structure?",
        options: [
            'A. By making sentences shorter',
            'B. By clarifying relationships between ideas',
            'C. By adding more verbs to a sentence',
            'D. By separating unrelated ideas'
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

export default Quis5;
