import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quis.css';

function Quis6() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
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
        explanation: "The Present Simple tense is used for habitual actions or general truths, such as 'The sun rises in the east.'"
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
        explanation: "The Present Continuous tense describes ongoing actions and follows the formula: Subject + is/am/are + Verb-ing."
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
        explanation: "The sentence 'She went to the market yesterday' uses the Past Simple tense, indicated by the past verb 'went.'"
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
        explanation: "This sentence is in the Present Continuous tense, used here to express a planned future action."
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
        explanation: "The Past Continuous tense describes an action in progress in the past and follows the structure 'was/were + Verb-ing.'"
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
        explanation: "This sentence is in the Future Simple tense, indicated by 'will + Verb 1.'"
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
        explanation: "The Past Simple tense uses the formula: Subject + Verb 2, where Verb 2 is the past form of the verb."
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
        explanation: "The sentence 'She is reading a book now' is in the Present Continuous tense, shown by 'is + Verb-ing.'"
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
        explanation: "The first part of the sentence, 'She was reading a book,' is in the Past Continuous tense, describing an ongoing past action."
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
        explanation: "The Past Continuous tense is used for an action that was interrupted by another past action."
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

export default Quis6;
