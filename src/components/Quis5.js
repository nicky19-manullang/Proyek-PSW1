import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quis.css';

function Quis5() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
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
        explanation: "Coordinating conjunctions link two equal clauses or ideas, such as two independent clauses."
    },
    {
        question: "2. Which of the following is a coordinating conjunction?",
        options: ['A. Because', 'B. When', 'C. And', 'D. Although'],
        correctAnswer: 'C',
        explanation: "'And' is a coordinating conjunction used to join equal parts of a sentence."
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
        explanation: "Subordinating conjunctions connect a dependent clause to a main clause, establishing a relationship like cause, time, or condition."
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
        explanation: "'But' is a coordinating conjunction that contrasts two independent clauses."
    },
    {
        question: "5. Which of the following is a subordinating conjunction?",
        options: ['A. But', 'B. Or', 'C. Although', 'D. And'],
        correctAnswer: 'C',
        explanation: "'Although' is a subordinating conjunction used to introduce a dependent clause expressing contrast."
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
        explanation: "'Because' shows a cause-and-effect relationship between two clauses."
    },
    {
        question: "7. Identify the subordinating conjunction in this sentence: 'I will go to the park if it stops raining.'",
        options: ['A. If', 'B. Go', 'C. Will', 'D. Stops'],
        correctAnswer: 'A',
        explanation: "'If' is a subordinating conjunction that introduces a condition for the action."
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
        explanation: "'Because' connects the main clause to the dependent clause, explaining the reason."
    },
    {
        question: "9. What is the coordinating conjunction in this sentence: 'I want to go to the beach, but it is raining.'",
        options: ['A. Want', 'B. To', 'C. But', 'D. Is'],
        correctAnswer: 'C',
        explanation: "'But' is a coordinating conjunction used to contrast two ideas."
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
        explanation: "Conjunctions improve coherence by linking ideas and clarifying relationships between them."
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

export default Quis5;
