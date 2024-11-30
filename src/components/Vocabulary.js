import React, { useState, useEffect } from 'react';
import '../styles/Vocabulary.css';

function Vocabulary() {
  const [words, setWords] = useState(() => {
    // Load data dari localStorage jika ada
    const savedWords = localStorage.getItem('vocabularyWords');
    return savedWords ? JSON.parse(savedWords) : [];
  });

  const [isAdding, setIsAdding] = useState(false);
  const [newWord, setNewWord] = useState({ word: '', definition: '', example: '', category: '' });
  const [editingIndex, setEditingIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simpan data ke localStorage setiap kali `words` berubah
    localStorage.setItem('vocabularyWords', JSON.stringify(words));
  }, [words]);

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('show');
      }, index * 200);
    });
  }, [words]);

  const handleAddWord = () => {
    if (newWord.word && newWord.definition && newWord.example && newWord.category) {
      setWords([...words, newWord]);
      setNewWord({ word: '', definition: '', example: '', category: '' });
      setIsAdding(false);
    } else {
      alert('Please fill out all fields!');
    }
  };

  const handleEditWord = () => {
    if (newWord.word && newWord.definition && newWord.example && newWord.category && editingIndex !== null) {
      const updatedWords = [...words];
      updatedWords[editingIndex] = newWord;
      setWords(updatedWords);
      setNewWord({ word: '', definition: '', example: '', category: '' });
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
    const confirmDelete = window.confirm('Are you sure you want to delete this word?');
    if (confirmDelete) {
      const updatedWords = words.filter((_, index) => index !== indexToDelete);
      setWords(updatedWords);
    }
  };

  const handleCancel = () => {
    setNewWord({ word: '', definition: '', example: '', category: '' });
    setEditingIndex(null);
    setIsAdding(false);
  };

  const filteredWords = words.filter((item) =>
    item.word.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="vocabulary" className="section vocabulary">
      <h2 className="section-title">Vocabulary Builder</h2>

      {/* Input pencarian */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search words..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="vocab-cards">
        {filteredWords.map((item, index) => (
          <div key={index} className="card">
            <h4>
              Word: <strong>{item.word}</strong>
            </h4>
            <p>Definition: {item.definition}</p>
            <p>
              Example: <em>{item.example}</em>
            </p>
            <p>Category: {item.category}</p>
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

      <button className="cta-button" onClick={() => setIsAdding(true)}>
        {editingIndex === null ? 'Add New Word' : 'Edit Word'}
      </button>

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
          <input
            type="text"
            placeholder="Category (e.g., noun, verb)"
            value={newWord.category}
            onChange={(e) => setNewWord({ ...newWord, category: e.target.value })}
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
