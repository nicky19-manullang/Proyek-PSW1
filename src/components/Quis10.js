import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quis.css';

function Quis10() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const navigate = useNavigate();
  const questions = [
    {
        question: "1. What is the purpose of using a comma in a sentence?",
        options: [
            'A. To end a declarative sentence',
            'B. To separate elements in a list or clauses',
            'C. To form a question',
            'D. To show emotion'
        ],
        correctAnswer: 'B',
        explanation: "A comma is used to separate items in a list, connect clauses, or clarify meaning in a sentence."
    },
    {
        question: "2. Which sentence uses a comma correctly?",
        options: [
            'A. She is reading a book, now.',
            'B. I bought apples, bananas, and oranges.',
            'C. I, am going to the store.',
            'D. They are going to the park tomorrow,'
        ],
        correctAnswer: 'B',
        explanation: "Commas separate items in a list. 'I bought apples, bananas, and oranges.' uses the comma correctly."
    },
    {
        question: "3. What punctuation mark is used to end a declarative sentence?",
        options: [
            'A. Comma',
            'B. Exclamation mark',
            'C. Question mark',
            'D. Period'
        ],
        correctAnswer: 'D',
        explanation: "A declarative sentence ends with a period, indicating a statement."
    },
    {
        question: "4. Which sentence uses a period correctly?",
        options: [
            'A. She is studying for the exam.',
            'B. What is your name?',
            'C. Stop!',
            'D. Wow, that’s amazing!'
        ],
        correctAnswer: 'A',
        explanation: "A period is used to end a declarative sentence, such as 'She is studying for the exam.'"
    },
    {
        question: "5. What is the function of a question mark?",
        options: [
            'A. To show surprise',
            'B. To separate clauses',
            'C. To end a declarative sentence',
            'D. To indicate a question'
        ],
        correctAnswer: 'D',
        explanation: "A question mark is used to end interrogative sentences, signaling a question."
    },
    {
        question: "6. Which of the following is a correct use of a question mark?",
        options: [
            'A. I like ice cream, do you?',
            'B. How are you?',
            'C. Stop!',
            'D. He is coming to the party, right?'
        ],
        correctAnswer: 'B',
        explanation: "'How are you?' is a proper interrogative sentence ending with a question mark."
    },
    {
        question: "7. What is the function of an exclamation mark?",
        options: [
            'A. To end a question',
            'B. To express strong emotion or a command',
            'C. To separate clauses',
            'D. To make a statement'
        ],
        correctAnswer: 'B',
        explanation: "An exclamation mark shows strong emotion, excitement, or emphasis, often used in commands."
    },
    {
        question: "8. Which sentence uses an exclamation mark correctly?",
        options: [
            'A. She is studying hard!',
            'B. Are you coming to the party?',
            'C. He is reading a book.',
            'D. I will go to the store.'
        ],
        correctAnswer: 'A',
        explanation: "'She is studying hard!' uses an exclamation mark to convey emphasis or excitement."
    },
    {
        question: "9. Which of the following sentences should end with a period?",
        options: [
            'A. What time is it?',
            'B. Hurry up!',
            'C. I went to the store.',
            'D. Wow, that’s incredible!'
        ],
        correctAnswer: 'C',
        explanation: "'I went to the store.' is a declarative sentence and ends with a period."
    },
    {
        question: "10. Which punctuation mark is used to separate items in a list?",
        options: [
            'A. Question mark',
            'B. Exclamation mark',
            'C. Comma',
            'D. Period'
        ],
        correctAnswer: 'C',
        explanation: "Commas are used to separate items in a list, ensuring clarity and readability."
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

export default Quis10;
