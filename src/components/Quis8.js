import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quis.css';

function Quis8() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const navigate = useNavigate();
  const questions = [
    {
        question: "1. Which type of adverb is used to indicate when an action is performed?",
        options: [
            'A. Adverb of Place',
            'B. Adverb of Manner',
            'C. Adverb of Time',
            'D. Adverb of Frequency'
        ],
        correctAnswer: 'C',
        explanation: "An adverb of time answers the question 'When?' and indicates the timing of an action, such as 'yesterday' or 'tomorrow'."
    },
    {
        question: "2. Which of the following is an example of an adverb of time?",
        options: ['A. Quickly', 'B. In the park', 'C. Tomorrow', 'D. Carefully'],
        correctAnswer: 'C',
        explanation: "'Tomorrow' is an adverb of time because it specifies when an action will happen."
    },
    {
        question: "3. What is the formula for using an adverb of place?",
        options: [
            'A. Subject + Verb + Adverb of Place',
            'B. Subject + Adverb of Place + Verb',
            'C. Adverb of Place + Subject + Verb',
            'D. Subject + Verb-ing + Adverb of Place'
        ],
        correctAnswer: 'A',
        explanation: "The typical sentence structure is Subject + Verb + Adverb of Place, as in 'She is working here.'"
    },
    {
        question: "4. Which sentence correctly uses an adverb of place?",
        options: [
            'A. She left her bag on the table.',
            'B. She called me yesterday.',
            'C. She speaks fluently.',
            'D. He completed the project carefully.'
        ],
        correctAnswer: 'A',
        explanation: "'On the table' is an adverbial phrase indicating the place where the action happened."
    },
    {
        question: "5. Which type of adverb answers the question 'How?'?",
        options: [
            'A. Adverb of Time',
            'B. Adverb of Place',
            'C. Adverb of Manner',
            'D. Adverb of Frequency'
        ],
        correctAnswer: 'C',
        explanation: "An adverb of manner describes how an action is performed, e.g., 'She sang beautifully.'"
    },
    {
        question: "6. Identify the adverb in the sentence: 'The children are playing in the garden.'",
        options: ['A. The children', 'B. Playing', 'C. In the garden', 'D. Are'],
        correctAnswer: 'C',
        explanation: "'In the garden' is an adverbial phrase that tells where the action is taking place."
    },
    {
        question: "7. Which sentence contains an adverb of manner?",
        options: [
            'A. She danced beautifully.',
            'B. The meeting is at 5 PM.',
            'C. They are in the library.',
            'D. I will visit you tomorrow.'
        ],
        correctAnswer: 'A',
        explanation: "'Beautifully' is an adverb of manner because it describes how the action was performed."
    },
    {
        question: "8. Where can an adverb of time be placed in a sentence?",
        options: [
            'A. Only at the beginning',
            'B. Only at the end',
            'C. At the beginning, middle, or end',
            'D. Only in the middle'
        ],
        correctAnswer: 'C',
        explanation: "Adverbs of time can appear at the beginning ('Tomorrow, I will go'), middle ('I am always late'), or end ('I will go tomorrow')."
    },
    {
        question: "9. What is the adverb of manner in the sentence: 'He completed the project carefully'?",
        options: ['A. Completed', 'B. Carefully', 'C. Project', 'D. He'],
        correctAnswer: 'B',
        explanation: "'Carefully' is an adverb of manner describing how the project was completed."
    },
    {
        question: "10. Which sentence demonstrates the correct use of an adverb of time?",
        options: [
            'A. She speaks fluently.',
            'B. The children are in the garden.',
            'C. I called him yesterday.',
            'D. She left her bag on the table.'
        ],
        correctAnswer: 'C',
        explanation: "'Yesterday' is an adverb of time, indicating when the action of calling occurred."
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

export default Quis8;
