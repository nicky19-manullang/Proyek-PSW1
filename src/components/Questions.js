import React, { useState } from "react";
import "../styles/Questions.css";

const Questions = () => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [showResult, setShowResult] = useState(false);

  const modules = [
    {
      name: "Word, Phrase, Clause, and Sentence",
      questions: [
        { question: "What is meant by clause?", options: ["A. A single word with meaning", "B. A group of words that lacks a subject and a predicate", "C. A group of words that contains a subject and a predicate", "D. A complete sentence that conveys an idea"], answer: 2 },
        { question: "Which of the following is an example of a phrase", options: ["A. He went to the market.", "B. Having lunch at the restaurant.", "C. When it rains.", "D. Everyone likes it."], answer: 1 },
      ],
    },
    {
      name: "Types of sentences.",
      questions: [
        { question: "Which of the following sentences is an example of an interrogative sentence?", options: ["A. I love reading books.", "B. What time is the meeting?", "C. Please close the door.", "D. What a beautiful day!"], answer: 1 },
        { question: "Which type of sentence expresses strong emotion?", options: ["A. Declarative", "B. Interrogative", "C. Imperative", "D. Exclamatory"], answer: 3 },
      ],
    },
  ];

  const handleModuleSelection = (index) => {
    setSelectedModule(index);
  };

  const handleStartQuiz = () => {
    setIsStarted(true);
  };

  const handleAnswer = (index) => {
    const currentModule = modules[selectedModule];
    if (index === currentModule.questions[currentQuestion].answer) {
      setScore((prev) => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setScore((prev) => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }

    if (currentQuestion + 1 < currentModule.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setIsStarted(false);
    setSelectedModule(null);
    setCurrentQuestion(0);
    setScore({ correct: 0, incorrect: 0 });
    setShowResult(false);
  };

  return (
    <div className="container">
      {!isStarted && selectedModule === null && (
        <div className="fade-in">
          <h1 className="title">Choose a Module</h1>
          <div className="module-list">
            {modules.map((module, index) => (
              <div
                key={index}
                className="card"
                onClick={() => handleModuleSelection(index)}
              >
                <h3>{module.name}</h3>
                <p>Test your knowledge in this module!</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {!isStarted && selectedModule !== null && (
        <div className="fade-in">
          <h1 className="title">{modules[selectedModule].name}</h1>
          <p>Ready to test your knowledge?</p>
          <button className="quiz-button" onClick={handleStartQuiz}>
            Let's Start Quiz
          </button>
        </div>
      )}

      {isStarted && !showResult && (
        <div className="quiz-container fade-in">
          <h2 className="quiz-title">
            Question {currentQuestion + 1} of {modules[selectedModule].questions.length}
          </h2>
          <div className="quiz-question">
            {modules[selectedModule].questions[currentQuestion].question}
          </div>
          <div className="quiz-options">
            {modules[selectedModule].questions[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                className="quiz-option"
                onClick={() => handleAnswer(index)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}

      {showResult && (
        <div className="quiz-container fade-in">
          <h1 className="title">Results</h1>
          <p className="result">Correct Answers: {score.correct}</p>
          <p className="result">Incorrect Answers: {score.incorrect}</p>
          <button className="quiz-button" onClick={restartQuiz}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Questions;
