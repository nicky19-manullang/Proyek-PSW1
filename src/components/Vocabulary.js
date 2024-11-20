import React, { useState, useEffect } from 'react';
import '../styles/Vocabulary.css';

function Vocabulary() {
  // Daftar kata
  const [words, setWords] = useState([
    { word: 'Resilient', definition: 'Able to recover quickly from difficulties.', example: 'She is very resilient in facing challenges.' },
    { word: 'Innovative', definition: 'Introducing new ideas; creative.', example: 'The team came up with an innovative solution.' },
  ]);

  const [isAdding, setIsAdding] = useState(false); // Untuk menampilkan form penambahan kata
  const [newWord, setNewWord] = useState({ word: '', definition: '', example: '' });

  // Animasi muncul kartu secara bertahap
  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('show');
      }, index * 200); 
    });
  }, [words]);

  // Fungsi untuk menambahkan kata baru
  const handleAddWord = () => {
    if (newWord.word && newWord.definition && newWord.example) {
      setWords([...words, newWord]);
      setNewWord({ word: '', definition: '', example: '' });
      setIsAdding(false);
    }
  };

  return (
    <section id="vocabulary" className="section vocabulary">
      <h2>Vocabulary Builder</h2>
      <div className="vocab-cards">
        {words.map((item, index) => (
          <div key={index} className="card">
            <h4>
              Word: <strong>{item.word}</strong>
            </h4>
            <p>Definition: {item.definition}</p>
            <p>
              Example: <em>{item.example}</em>
            </p>
          </div>
        ))}
      </div>
      {/* Tombol untuk menambah kata */}
      <button className="cta-button" onClick={() => setIsAdding(true)}>
        Add New Word
      </button>

      {/* Form untuk menambah kata baru */}
      {isAdding && (
        <div className="add-word-form">
          <input
            type="text"
            placeholder="Word"
            value={newWord.word}
            onChange={(e) => setNewWord({ ...newWord, word: e.target.value })}
          />
          <input
            type="text"
            placeholder="Definition"
            value={newWord.definition}
            onChange={(e) => setNewWord({ ...newWord, definition: e.target.value })}
          />
          <input
            type="text"
            placeholder="Example"
            value={newWord.example}
            onChange={(e) => setNewWord({ ...newWord, example: e.target.value })}
          />
          <button className="cta-button" onClick={handleAddWord}>
            Save Word
          </button>
        </div>
      )}
    </section>
  );
}

export default Vocabulary;
