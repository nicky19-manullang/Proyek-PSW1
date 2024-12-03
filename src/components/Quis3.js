import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quis.css';

function Quis3() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const navigate = useNavigate();
  const questions = [
    {
        question: "1. What is the focus of an active sentence?",
        options: ['A. The subject and the action they perform', 'B. The object receiving the action', 'C. The auxiliary verb used', 'D. The by-phrase'],
        correctAnswer: 'A',
        explanation: "Active sentences emphasize the subject and the action they perform."
    },
    {
        question: "2. In a passive sentence, the focus is on:",
        options: ['A. The subject performing the action', 'B. The object receiving the action', 'C. The type of verb used', 'D. The tense of the verb'],
        correctAnswer: 'B',
        explanation: "Passive sentences focus on the object receiving the action rather than the subject performing it."
    },
    {
        question: "3. Which sentence is in the active voice?",
        options: ['A. The homework was done by her.', 'B. The snake was killed by Roy.', 'C. Roy killed a snake.', 'D. The song was sung beautifully.'],
        correctAnswer: 'C',
        explanation: "Active voice occurs when the subject performs the action, as in 'Roy killed a snake.'"
    },
    {
        question: "4. What is the passive form of 'He helps his friend'?",
        options: ['A. His friend helps him.', 'B. His friend is helped by him.', 'C. His friend helped him.', 'D. His friend is being helped.'],
        correctAnswer: 'B',
        explanation: "In passive voice, the object 'his friend' becomes the subject: 'His friend is helped by him.'"
    },
    {
        question: "5. In the sentence 'A book was written by her,' which part indicates the doer of the action?",
        options: ['A. A book', 'B. Was written', 'C. By her', 'D. The verb'],
        correctAnswer: 'C',
        explanation: "'By her' specifies the doer of the action in a passive sentence."
    },
    {
        question: "6. Which sentence is passive?",
        options: ['A. The dog barked loudly.', 'B. The cake was baked by Sarah.', 'C. She is reading a book.', 'D. They play football every Sunday.'],
        correctAnswer: 'B',
        explanation: "Passive voice is used in 'The cake was baked by Sarah,' where the object becomes the focus."
    },
    {
        question: "7. What happens to the subject in an active-to-passive transformation?",
        options: ['A. It becomes the object.', 'B. It is omitted.', 'C. It remains the same.', 'D. It becomes the focus.'],
        correctAnswer: 'A',
        explanation: "In passive sentences, the subject of the active sentence becomes the object, often introduced by 'by'."
    },
    {
        question: "8. Choose the correct transformation: 'Leon calls Armed.'",
        options: ['A. Armed is called by Leon.', 'B. Armed calls Leon.', 'C. Leon is called by Armed.', 'D. Leon is calling Armed.'],
        correctAnswer: 'A',
        explanation: "In passive voice, the object 'Armed' becomes the subject: 'Armed is called by Leon.'"
    },
    {
        question: "9. Identify the active sentence:",
        options: ['A. The car was repaired by the mechanic.', 'B. The mechanic repaired the car.', 'C. The car is being repaired by the mechanic.', 'D. The car has been repaired by the mechanic.'],
        correctAnswer: 'B',
        explanation: "Active sentences have the subject performing the action, as in 'The mechanic repaired the car.'"
    },
    {
        question: "10. What is the auxiliary verb in the sentence 'The homework is being done by the students'?",
        options: ['A. Is being', 'B. Done', 'C. Homework', 'D. Students'],
        correctAnswer: 'A',
        explanation: "The auxiliary verb 'is being' helps form the passive voice in this sentence."
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

export default Quis3;
