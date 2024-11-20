import React, { useState, useEffect } from 'react';
import '../styles/Vocabulary.css';

function Vocabulary() {
  const [words, setWords] = useState([
    { word: 'Resilient', definition: 'Able to recover quickly from difficulties.', example: 'She is very resilient in facing challenges.' },
    { word: 'Innovative', definition: 'Introducing new ideas; creative.', example: 'The team came up with an innovative solution.' },
  ]);

  const [isAdding, setIsAdding] = useState(false); // Untuk menampilkan form
  const [newWord, setNewWord] = useState({ word: '', definition: '', example: '' });
  const [editingIndex, setEditingIndex] = useState(null); // Indeks untuk mode edit

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('show');
      }, index * 200);
    });
  }, [words]);

  const handleAddWord = () => {
    if (newWord.word && newWord.definition && newWord.example) {
      setWords([...words, newWord]);
      setNewWord({ word: '', definition: '', example: '' });
      setIsAdding(false);
    }
  };

  const handleEditWord = () => {
    if (newWord.word && newWord.definition && newWord.example && editingIndex !== null) {
      const updatedWords = [...words];
      updatedWords[editingIndex] = newWord;
      setWords(updatedWords);
      setNewWord({ word: '', definition: '', example: '' });
      setEditingIndex(null);
      setIsAdding(false);
    }
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setNewWord(words[index]);
    setIsAdding(true);
  };

  const handleDeleteWord = (indexToDelete) => {
    const updatedWords = words.filter((_, index) => index !== indexToDelete);
    setWords(updatedWords);
  };

  // Fungsi untuk membatalkan aksi (baik tambah atau edit)
  const handleCancel = () => {
    setNewWord({ word: '', definition: '', example: '' });
    setEditingIndex(null);
    setIsAdding(false);
  };

  return (
    <section id="vocabulary" className="section vocabulary">
      <h2 className="section-title">Vocabulary Builder</h2>
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
            <div className="action-menu">
              <button className="edit-button" onClick={() => startEditing(index)}>
                Edit
              </button>
              <button className="delete-button" onClick={() => handleDeleteWord(index)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol untuk menambah kata */}
      <button className="cta-button" onClick={() => setIsAdding(true)}>
        {editingIndex === null ? 'Add New Word' : 'Edit Word'}
      </button>

      {/* Form untuk menambah atau mengedit kata baru */}
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
          <div className="form-actions">
            <button className="cta-button" onClick={editingIndex === null ? handleAddWord : handleEditWord}>
              {editingIndex === null ? 'Save Word' : 'Update Word'}
            </button>
            <button className="cancel-button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Vocabulary;
