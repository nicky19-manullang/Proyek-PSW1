import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quis.css';

function Quis1() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false); // Untuk menampilkan pembahasan
  const [quizFinished, setQuizFinished] = useState(false);

  const navigate = useNavigate();
  const questions = [
    {
      question: "1. The main elements in the basic structure of an English sentence are:",
      options: [
        "A. Phrase, Clause, Sentence",
        "B. Subject, Predicate, Object",
        "C. Simple Sentence, Complex Sentence",
        "D. Noun Phrase, Verb Phrase"
      ],
      correctAnswer: "B",
      explanation: "The structure of an English sentence revolves around three main components: Subject, Predicate, and Object. These elements form the foundation of a meaningful sentence."
    },
    {
      question: "2. In the sentence 'She reads a book', what functions as the object?",
      options: ["A. She", "B. Reads", "C. A book", "D. There is no object"],
      correctAnswer: "C",
      explanation: "In the sentence, 'a book' is the object because it is the thing being read, receiving the action of the verb 'reads'."
    },
    {
      question: "3. Which of the following is an example of a Noun Phrase?",
      options: [
        "A. Has eaten",
        "B. A very clever student",
        "C. We get up",
        "D. He returned"
      ],
      correctAnswer: "B",
      explanation: "'A very clever student' is a noun phrase because it contains a noun ('student') and modifiers ('a very clever')."
    },
    {
      question: "4. What is the main feature of a Clause compared to a Phrase?",
      options: [
        "A. It consists of verbs and adjectives",
        "B. It does not contain a subject",
        "C. It contains both a subject and a predicate",
        "D. It is only used in complex sentences"
      ],
      correctAnswer: "C",
      explanation: "A clause is distinct from a phrase as it contains both a subject and a predicate, forming a complete or semi-complete idea."
    },
    {
      question: "5. Which of the following is an example of a Subordinate Clause?",
      options: [
        "A. The cat snarled and scratched",
        "B. My grandfather works",
        "C. Whom you saw yesterday",
        "D. The book proved of use"
      ],
      correctAnswer: "C",
      explanation: "'Whom you saw yesterday' is a subordinate clause because it cannot stand alone and depends on a main clause for context."
    },
    {
      question: "6. Which of the following is a Simple Sentence?",
      options: [
        "A. She speaks well.",
        "B. That is the girl whom you saw yesterday.",
        "C. He said that it was time to go.",
        "D. We know that they succeed."
      ],
      correctAnswer: "A",
      explanation: "'She speaks well.' is a simple sentence as it contains a single subject ('she') and predicate ('speaks well')."
    },
    {
      question: "7. An Adjective Phrase is used to:",
      options: [
        "A. Describe a verb",
        "B. Describe a noun",
        "C. Describe an adverb",
        "D. Connect two clauses"
      ],
      correctAnswer: "B",
      explanation: "An adjective phrase describes or gives more information about a noun, such as 'a very interesting book'."
    },
    {
      question: "8. What is the difference between a Main Clause and a Subordinate Clause?",
      options: [
        "A. Main clauses cannot stand alone.",
        "B. Subordinate clauses cannot stand alone.",
        "C. Main clauses do not have a subject.",
        "D. Subordinate clauses do not have a predicate."
      ],
      correctAnswer: "B",
      explanation: "A subordinate clause cannot stand alone as a complete sentence because it depends on a main clause for meaning."
    },
    {
      question: "9. Which of the following is a Verb Phrase?",
      options: [
        "A. The handsome boy over there",
        "B. Shall go",
        "C. A very clever student",
        "D. With a black cover"
      ],
      correctAnswer: "B",
      explanation: "'Shall go' is a verb phrase because it consists of a main verb ('go') and a helping verb ('shall')."
    },
    {
      question: "10. Which of the following is true about Complex Sentences?",
      options: [
        "A. They consist of one subject and one predicate.",
        "B. They have a main clause and at least one subordinate clause.",
        "C. They always include a compound subject.",
        "D. They are the same as simple sentences."
      ],
      correctAnswer: "B",
      explanation: "A complex sentence has one main clause and at least one subordinate clause, such as 'Because it was raining, I stayed home.'"
    }
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

export default Quis1;
