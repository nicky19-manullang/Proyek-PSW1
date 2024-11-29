import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quis.css';

function Quis2() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const navigate = useNavigate();
  const questions = [
    {
        question: "1. Which type of sentence states information or facts?",
        options: ['A. Interrogative Sentence', 'B. Imperative Sentence', 'C. Declarative Sentence', 'D. Exclamatory Sentence'],
        correctAnswer: 'C',
    },
    {
        question: "2. Which punctuation mark usually ends a declarative sentence?",
        options: ['A. Question mark', 'B. Exclamation point', 'C. Period', 'D. Semicolon'],
        correctAnswer: 'C',
    },
    {
        question: "3. Which of the following is an example of an interrogative sentence?",
        options: ['A. "The sky is blue."', 'B. "How are you today?"', 'C. "Please, come here."', 'D. "Wow, what a beautiful day!"'],
        correctAnswer: 'B',
    },
    {
        question: "4. In an interrogative sentence, what is placed at the beginning of the question?",
        options: ['A. Main verb', 'B. Adjective', 'C. Auxiliary verb', 'D. Noun'],
        correctAnswer: 'C',
    },
    {
        question: "5. What type of sentence is this: 'Don’t be afraid'?",
        options: ['A. Declarative Sentence', 'B. Imperative Sentence', 'C. Exclamatory Sentence', 'D. Interrogative Sentence'],
        correctAnswer: 'B',
    },
    {
        question: "6. Which sentence expresses a command?",
        options: ['A. "Can you help me?"', 'B. "Be careful."', 'C. "It’s a sunny day."', 'D. "What a surprise!"'],
        correctAnswer: 'B',
    },
    {
        question: "7. 'Let’s go to the park' is an example of:",
        options: ['A. A command', 'B. A suggestion or invitation', 'C. A question', 'D. A declaration'],
        correctAnswer: 'B',
    },
    {
        question: "8. What type of sentence is used to express emotions like surprise, joy, or disappointment?",
        options: ['A. Declarative Sentence', 'B. Interrogative Sentence', 'C. Exclamatory Sentence', 'D. Imperative Sentence'],
        correctAnswer: 'C',
    },
    {
        question: "9. Which of the following sentences is exclamatory?",
        options: ['A. "How wonderful this place is!"', 'B. "We are going to the beach."', 'C. "Are you coming with us?"', 'D. "Don’t forget your hat."'],
        correctAnswer: 'A',
    },
    {
        question: "10. 'Does he study English every day?' is an example of:",
        options: ['A. Declarative Sentence', 'B. Imperative Sentence', 'C. Interrogative Sentence', 'D. Exclamatory Sentence'],
        correctAnswer: 'C',
    },
    {
        question: "11. Which type of sentence is used to give a warning?",
        options: ['A. Declarative Sentence', 'B. Imperative Sentence', 'C. Exclamatory Sentence', 'D. Interrogative Sentence'],
        correctAnswer: 'B',
    },
    {
        question: "12. 'Best of luck!' is an example of:",
        options: ['A. Declarative Sentence', 'B. Interrogative Sentence', 'C. Imperative Sentence', 'D. Exclamatory Sentence'],
        correctAnswer: 'C',
    },
    {
        question: "13. What is the auxiliary verb in this sentence: 'Can you take the book for me?'",
        options: ['A. Take', 'B. You', 'C. Can', 'D. Book'],
        correctAnswer: 'C',
    },
    {
        question: "14. How can an interrogative sentence be turned into a negative question?",
        options: ['A. By adding “not” after the auxiliary verb', 'B. By removing the auxiliary verb', 'C. By adding a question mark', 'D. By placing “not” at the end of the sentence'],
        correctAnswer: 'A',
    },
    {
        question: "15. 'How lucky you are!' expresses:",
        options: ['A. A command', 'B. A statement', 'C. A question', 'D. An emotion'],
        correctAnswer: 'D',
    },
];


  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const nextQuestion = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setCorrectAnswersCount(correctAnswersCount + 1); // Tambahkan skor jika benar
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setQuizFinished(true); // Tandai kuis selesai setelah soal terakhir
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setCorrectAnswersCount(0);
    setQuizFinished(false);
  };

  const goBackToQuestions = () => {
    navigate('/questions'); // Navigasi ke halaman Questions
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
                onClick={() => handleAnswerClick(option[0])} // Ambil huruf pertama sebagai jawaban
                className={`option ${selectedAnswer === option[0] ? 'selected' : ''}`}
              >
                {option}
              </li>
            ))}
          </ul>
          <button
            className="btn next-question"
            onClick={nextQuestion}
            disabled={!selectedAnswer} // Nonaktifkan tombol jika belum ada jawaban
          >
            {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </button>
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
