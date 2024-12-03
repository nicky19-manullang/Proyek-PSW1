import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quis.css';

function Quis4() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const navigate = useNavigate();
  const questions = [
    {
        question: "1. What is a main clause?",
        options: ['A. A clause that depends on another clause', 'B. A clause that can stand alone with complete meaning', 'C. A group of words without a verb', 'D. A clause that only modifies nouns'],
        correctAnswer: 'B',
        explanation: "A main clause is independent and can function as a complete sentence."
    },
    {
        question: "2. Which of the following is an example of a main clause?",
        options: ['A. Although I enjoy reading novels', 'B. That is the girl', 'C. Whom you saw yesterday', 'D. If she goes to the party'],
        correctAnswer: 'B',
        explanation: "'That is the girl' is a complete sentence and can stand alone, making it a main clause."
    },
    {
        question: "3. What is a dependent clause?",
        options: ['A. A clause that can stand alone', 'B. A clause that needs a main clause to complete its meaning', 'C. A phrase that modifies a verb', 'D. A complete sentence'],
        correctAnswer: 'B',
        explanation: "A dependent clause relies on a main clause to form a complete sentence."
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
        explanation: "'That is the girl' is the main clause, and 'whom you saw yesterday' is the dependent clause."
    },
    {
        question: "5. In the sentence 'Although I enjoy reading novels, I don’t have much free time,' which part is the dependent clause?",
        options: ['A. Although I enjoy reading novels', 'B. I don’t have much free time', 'C. Novels', 'D. Both A and B'],
        correctAnswer: 'A',
        explanation: "'Although I enjoy reading novels' cannot stand alone and is a dependent clause."
    },
    {
        question: "6. What is another name for a dependent clause?",
        options: ['A. Main clause', 'B. Subordinate clause', 'C. Independent clause', 'D. Noun clause'],
        correctAnswer: 'B',
        explanation: "A dependent clause is also known as a subordinate clause because it depends on a main clause."
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
        explanation: "'Because she was late' is incomplete and needs a main clause to form a complete sentence."
    },
    {
        question: "8. In the sentence 'That is the girl whom you saw yesterday,' what is 'whom you saw yesterday'?",
        options: ['A. Main clause', 'B. Dependent clause', 'C. Phrase', 'D. Compound sentence'],
        correctAnswer: 'B',
        explanation: "'Whom you saw yesterday' provides additional information and depends on the main clause."
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
        explanation: "Dependent clauses give additional details or context to the main clause."
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
        explanation: "'Although I was tired' is a dependent clause, while 'I completed my homework' is the main clause."
    },
];



const currentQuestion = questions[currentQuestionIndex];

const handleAnswerClick = (answer) => {
  setSelectedAnswer(answer);
};

const handleNext = () => {
  if (selectedAnswer === currentQuestion.correctAnswer) {
    setCorrectAnswersCount(correctAnswersCount + 1);
  }
  setShowExplanation(true);
};

const handleNextQuestion = () => {
  if (currentQuestionIndex < questions.length - 1) {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer(null);
    setShowExplanation(false);
  } else {
    setQuizFinished(true);
  }
};

const restartQuiz = () => {
  setCurrentQuestionIndex(0);
  setSelectedAnswer(null);
  setCorrectAnswersCount(0);
  setShowExplanation(false);
  setQuizFinished(false);
};

const goBackToQuestions = () => {
  navigate('/questions');
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
              onClick={() => handleAnswerClick(option[0])}
              className={`option ${selectedAnswer === option[0] ? 'selected' : ''}`}
            >
              {option}
            </li>
          ))}
        </ul>

        {!showExplanation ? (
          <button
            className="btn next-question"
            onClick={handleNext}
            disabled={!selectedAnswer}
          >
            Submit Answer
          </button>
        ) : (
          <div className="explanation">
            <p><strong>Explanation:</strong> {currentQuestion.explanation}</p>
            <button className="btn next-question" onClick={handleNextQuestion}>
              {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          </div>
        )}
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
