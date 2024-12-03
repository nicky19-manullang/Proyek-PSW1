import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quis.css';

function Quis9() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
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
        explanation: "A prepositional phrase starts with a preposition (e.g., 'in', 'on', 'under') and is followed by a noun or pronoun as its object."
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
        explanation: "'In the park' is a prepositional phrase where 'in' is the preposition and 'the park' is the object."
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
        explanation: "A nominal phrase often includes a determiner, optional modifiers, and a noun, e.g., 'The beautiful garden'."
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
        explanation: "'A pair of shoes' is a nominal phrase functioning as the object of the verb 'bought'."
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
        explanation: "'Have finished' is a verbal phrase combining an auxiliary verb and a main verb."
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
        explanation: "A nominal phrase can act as the subject, object, or complement in a sentence, just like a noun."
    },
    {
        question: "7. Identify the prepositional phrase in this sentence: 'She is sitting on the chair.'",
        options: ['A. She is sitting', 'B. On the chair', 'C. Sitting on', 'D. The chair'],
        correctAnswer: 'B',
        explanation: "'On the chair' is the prepositional phrase where 'on' is the preposition and 'the chair' is the object."
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
        explanation: "'Is writing' is a verb phrase consisting of the auxiliary verb 'is' and the main verb 'writing'."
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
        explanation: "A verb phrase combines an auxiliary verb (e.g., 'is', 'have') with a main verb (e.g., 'writing', 'finished')."
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
        explanation: "'At the park' is a prepositional phrase placed at the beginning of the sentence to indicate location."
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

export default Quis9;
