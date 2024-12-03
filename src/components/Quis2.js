import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quis.css';

function Quis2() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const navigate = useNavigate();
  const questions = [
    {
        question: "1. Which type of sentence states information or facts?",
        options: ['A. Interrogative Sentence', 'B. Imperative Sentence', 'C. Declarative Sentence', 'D. Exclamatory Sentence'],
        correctAnswer: 'C',
        explanation: "A declarative sentence is used to state facts or information."
    },
    {
        question: "2. Which punctuation mark usually ends a declarative sentence?",
        options: ['A. Question mark', 'B. Exclamation point', 'C. Period', 'D. Semicolon'],
        correctAnswer: 'C',
        explanation: "Declarative sentences typically end with a period."
    },
    {
        question: "3. Which of the following is an example of an interrogative sentence?",
        options: ['A. "The sky is blue."', 'B. "How are you today?"', 'C. "Please, come here."', 'D. "Wow, what a beautiful day!"'],
        correctAnswer: 'B',
        explanation: "An interrogative sentence is a question, and it usually starts with a question word like 'how'."
    },
    {
        question: "4. In an interrogative sentence, what is placed at the beginning of the question?",
        options: ['A. Main verb', 'B. Adjective', 'C. Auxiliary verb', 'D. Noun'],
        correctAnswer: 'C',
        explanation: "Interrogative sentences often begin with an auxiliary verb like 'does', 'is', or 'can'."
    },
    {
        question: "5. What type of sentence is this: 'Don’t be afraid'?",
        options: ['A. Declarative Sentence', 'B. Imperative Sentence', 'C. Exclamatory Sentence', 'D. Interrogative Sentence'],
        correctAnswer: 'B',
        explanation: "An imperative sentence gives a command or instruction, as seen in 'Don’t be afraid'."
    },
    {
        question: "6. Which sentence expresses a command?",
        options: ['A. "Can you help me?"', 'B. "Be careful."', 'C. "It’s a sunny day."', 'D. "What a surprise!"'],
        correctAnswer: 'B',
        explanation: "'Be careful.' is a command, which is typical of an imperative sentence."
    },
    {
        question: "7. 'Let’s go to the park' is an example of:",
        options: ['A. A command', 'B. A suggestion or invitation', 'C. A question', 'D. A declaration'],
        correctAnswer: 'B',
        explanation: "The phrase 'Let’s go to the park' suggests or invites someone to join an activity."
    },
    {
        question: "8. What type of sentence is used to express emotions like surprise, joy, or disappointment?",
        options: ['A. Declarative Sentence', 'B. Interrogative Sentence', 'C. Exclamatory Sentence', 'D. Imperative Sentence'],
        correctAnswer: 'C',
        explanation: "Exclamatory sentences are used to convey strong emotions such as surprise, joy, or disappointment."
    },
    {
        question: "9. Which of the following sentences is exclamatory?",
        options: ['A. "How wonderful this place is!"', 'B. "We are going to the beach."', 'C. "Are you coming with us?"', 'D. "Don’t forget your hat."'],
        correctAnswer: 'A',
        explanation: "Exclamatory sentences typically express strong emotion and end with an exclamation mark, as in 'How wonderful this place is!'."
    },
    {
        question: "10. 'Does he study English every day?' is an example of:",
        options: ['A. Declarative Sentence', 'B. Imperative Sentence', 'C. Interrogative Sentence', 'D. Exclamatory Sentence'],
        correctAnswer: 'C',
        explanation: "'Does he study English every day?' is a question, making it an interrogative sentence."
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

export default Quis2;