import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quis.css';

function Quis1() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const navigate = useNavigate();
  const questions = [
    {
      question: "1. The main elements in the basic structure of an English sentence are:",
      options: ['A. Phrase, Clause, Sentence', 'B. Subject, Predicate, Object', 'C. Simple Sentence, Complex Sentence', 'D. Noun Phrase, Verb Phrase'],
      correctAnswer: 'B',
    },
    {
      question: "2. In the sentence 'She reads a book', what functions as the object?",
      options: ['A. She', 'B. Reads', 'C. A book', 'D. There is no object'],
      correctAnswer: 'C',
    },
    {
      question: "3. Which of the following is an example of a Noun Phrase?",
      options: ['A. Has eaten', 'B. A very clever student', 'C. We get up', 'D. He returned'],
      correctAnswer: 'A',
    },
    {
      question: "4. What is the main feature of a Clause compared to a Phrase?",
      options: ['A. It consists of verbs and adjectives', 'B.  It does not contain a subject', 'C. It contains both a subject and a predicate', 'D. It is only used in complex sentences'],
      correctAnswer: 'C',
    },
    {
      question: "5. Which of the following is an example of a Subordinate Clause?",
      options: ['A. The cat snarled and scratched', 'B. My grandfather works', 'C. Whom you saw yesterday', 'D. The book proved of use'],
      correctAnswer: 'C',
    },
    {
      question: "6. Which of the following is a Simple Sentence?",
      options: ['A. She speaks well.', 'B. That is the girl whom you saw yesterday.', 'C. He said that it was time to go.', 'D. We know that they succeed.'],
      correctAnswer: 'A',
    },
    {
      question: "7. An Adjective Phrase is used to:",
      options: ['A. Describe a verb', 'B. Describe a noun', 'C. Describe an adverb', 'D. Connect two clauses'],
      correctAnswer: 'B',
    },
    {
      question: "8. What is the difference between a Main Clause and a Subordinate Clause?",
      options: ['A. Main clauses cannot stand alone.', 'B. Subordinate clauses cannot stand alone.', 'C. Main clauses do not have a subject.', 'D. Subordinate clauses do not have a predicate.'],
      correctAnswer: 'B',
    },
    {
      question: "9. Which of the following is a Verb Phrase?",
      options: ['A. The handsome boy over there', 'B. Shall go', 'C. A very clever student', 'D. With a black cover'],
      correctAnswer: 'B',
    },
    {
      question: "10. Which of the following is true about Complex Sentences?",
      options: ['A. They consist of one subject and one predicate.', 'B. They have a main clause and at least one subordinate clause.', 'C. They always include a compound subject.', 'D. They are the same as simple sentences.'],
      correctAnswer: 'B',
    },
    {
      question: "11. In the sentence 'The cat snarled and scratched,' the subject is:",
      options: ['A. The cat', 'B. Snarled', 'C. And scratched', 'D. The cat snarled'],
      correctAnswer: 'A',
    },
    {
      question: "12. A Main Clause can:",
      options: ['A. Only exist with a subordinate clause', 'B. Stand alone as a complete sentence', 'C. Be used without a verb', 'D. Be part of a phrase'],
      correctAnswer: 'B',
    },
    {
      question: "13. What type of sentence is 'Ozan and Ozi are students'?",
      options: ['A. A sentence without a subject', 'B. A complex sentence', 'C. A simple sentence with a compound subject', 'D. A subordinate clause'],
      correctAnswer: 'C',
    },
    {
      question: "14. Which of the following is an example of an Adverb Phrase?",
      options: ['A. He returned from Mataram a week ago.', 'B. The man with the white hat is my brother.', 'C. She speaks well.', 'D. The teacher teaches the students.'],
      correctAnswer: 'A',
    },
    {
      question: "15. What is the subordinate clause in 'We know that they succeed because they work hard'?",
      options: ['A. We know', 'B. That they succeed', 'C. Because they work hard', 'D. Both b and c'],
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

export default Quis1;
