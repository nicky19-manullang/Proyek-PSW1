import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quis.css';

function Quis3() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const navigate = useNavigate();
  const questions = [
    {
        question: "1. What is the focus of an active sentence?",
        options: ['A. The subject and the action they perform', 'B. The object receiving the action', 'C. The auxiliary verb used', 'D. The by-phrase'],
        correctAnswer: 'A',
    },
    {
        question: "2. In a passive sentence, the focus is on:",
        options: ['A. The subject performing the action', 'B. The object receiving the action', 'C. The type of verb used', 'D. The tense of the verb'],
        correctAnswer: 'B',
    },
    {
        question: "3. Which sentence is in the active voice?",
        options: ['A. The homework was done by her.', 'B. The snake was killed by Roy.', 'C. Roy killed a snake.', 'D. The song was sung beautifully.'],
        correctAnswer: 'C',
    },
    {
        question: "4. What is the passive form of 'He helps his friend'?",
        options: ['A. His friend helps him.', 'B. His friend is helped by him.', 'C. His friend helped him.', 'D. His friend is being helped.'],
        correctAnswer: 'B',
    },
    {
        question: "5. In the sentence 'A book was written by her,' which part indicates the doer of the action?",
        options: ['A. A book', 'B. Was written', 'C. By her', 'D. The verb'],
        correctAnswer: 'C',
    },
    {
        question: "6. Which sentence is passive?",
        options: ['A. The dog barked loudly.', 'B. The cake was baked by Sarah.', 'C. She is reading a book.', 'D. They play football every Sunday.'],
        correctAnswer: 'B',
    },
    {
        question: "7. What happens to the subject in an active-to-passive transformation?",
        options: ['A. It becomes the object.', 'B. It is omitted.', 'C. It remains the same.', 'D. It becomes the focus.'],
        correctAnswer: 'A',
    },
    {
        question: "8. Choose the correct transformation: 'Leon calls Armed.'",
        options: ['A. Armed is called by Leon.', 'B. Armed calls Leon.', 'C. Leon is called by Armed.', 'D. Leon is calling Armed.'],
        correctAnswer: 'A',
    },
    {
        question: "9. Identify the active sentence:",
        options: ['A. The car was repaired by the mechanic.', 'B. The mechanic repaired the car.', 'C. The car is being repaired by the mechanic.', 'D. The car has been repaired by the mechanic.'],
        correctAnswer: 'B',
    },
    {
        question: "10. What is the auxiliary verb in the sentence 'The homework is being done by the students'?",
        options: ['A. Is being', 'B. Done', 'C. Homework', 'D. Students'],
        correctAnswer: 'A',
    },
    {
        question: "11. Passive voice sentences often omit the doer of the action when:",
        options: ['A. The doer is unknown.', 'B. The object is important.', 'C. The action is ongoing.', 'D. The verb is in past tense.'],
        correctAnswer: 'A',
    },
    {
        question: "12. Which sentence shows a question in the passive voice?",
        options: ['A. Who helps his friend?', 'B. Is his friend helped by him?', 'C. Does he help his friend?', 'D. What does he do?'],
        correctAnswer: 'B',
    },
    {
        question: "13. What is the passive form of 'They built the house in 2010'?",
        options: ['A. The house builds in 2010.', 'B. The house was built by them in 2010.', 'C. They are building the house in 2010.', 'D. The house is built in 2010.'],
        correctAnswer: 'B',
    },
    {
        question: "14. In passive sentences, the word 'by' introduces:",
        options: ['A. The action', 'B. The subject', 'C. The object', 'D. The doer of the action'],
        correctAnswer: 'D',
    },
    {
        question: "15. What is the passive form of 'She writes the letters'?",
        options: ['A. The letters were written by her.', 'B. The letters are written by her.', 'C. The letters write by her.', 'D. The letters have been written by her.'],
        correctAnswer: 'B',
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

export default Quis3;
