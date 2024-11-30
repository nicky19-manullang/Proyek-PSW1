import React, { useState, useEffect } from 'react';
import '../styles/Vocabulary.css';

function Vocabulary() {
  const preloadWords = [
    { word: 'abandon', definition: 'To leave completely and finally.', example: 'He decided to abandon his car in the middle of the road.', category: 'verb' },
    { word: 'benevolent', definition: 'Well meaning and kindly.', example: 'She had a benevolent smile.', category: 'adjective' },
    { word: 'candid', definition: 'Truthful and straightforward.', example: 'He was candid about the risks involved.', category: 'adjective' },
    { word: 'dauntless', definition: 'Showing fearlessness and determination.', example: 'The dauntless explorer climbed the mountain.', category: 'adjective' },
    { word: 'eloquent', definition: 'Fluent or persuasive in speaking or writing.', example: 'Her speech was eloquent and inspiring.', category: 'adjective' },
    { word: 'frivolous', definition: 'Not having any serious purpose or value.', example: 'He made a frivolous comment during the meeting.', category: 'adjective' },
    { word: 'gregarious', definition: 'Fond of company; sociable.', example: 'She is a gregarious person who loves parties.', category: 'adjective' },
    { word: 'haphazard', definition: 'Lacking any obvious principle of organization.', example: 'The books were stacked in a haphazard fashion.', category: 'adjective' },
    { word: 'inquisitive', definition: 'Curious or inquiring.', example: 'The child was very inquisitive about everything around him.', category: 'adjective' },
    { word: 'jubilant', definition: 'Feeling or expressing great happiness and triumph.', example: 'The team was jubilant after winning the match.', category: 'adjective' },
    { word: 'keen', definition: 'Having or showing eagerness or enthusiasm.', example: 'She was keen to start her new job.', category: 'adjective' },
    { word: 'lucid', definition: 'Expressed clearly; easy to understand.', example: 'The professor gave a lucid explanation of the theory.', category: 'adjective' },
    { word: 'meticulous', definition: 'Showing great attention to detail; very careful and precise.', example: 'She kept meticulous records of her work.', category: 'adjective' },
    { word: 'novice', definition: 'A person new to or inexperienced in a field or situation.', example: 'He is a novice when it comes to cooking.', category: 'noun' },
    { word: 'obstinate', definition: 'Stubbornly refusing to change one’s opinion or chosen course of action.', example: 'The child remained obstinate in his decision.', category: 'adjective' },
    { word: 'prudent', definition: 'Acting with or showing care and thought for the future.', example: 'It was prudent to save some money for emergencies.', category: 'adjective' },
    { word: 'quaint', definition: 'Attractively unusual or old-fashioned.', example: 'The town is full of quaint little shops.', category: 'adjective' },
    { word: 'robust', definition: 'Strong and healthy; vigorous.', example: 'He is in robust health.', category: 'adjective' },
    { word: 'serene', definition: 'Calm, peaceful, and untroubled; tranquil.', example: 'She enjoyed the serene beauty of the lake.', category: 'adjective' },
    { word: 'tedious', definition: 'Too long, slow, or dull; tiresome or monotonous.', example: 'The journey was long and tedious.', category: 'adjective' },
    { word: 'ubiquitous', definition: 'Present, appearing, or found everywhere.', example: 'Smartphones have become ubiquitous in modern life.', category: 'adjective' },
    { word: 'vigilant', definition: 'Keeping careful watch for possible danger or difficulties.', example: 'The guards remained vigilant throughout the night.', category: 'adjective' },
    { word: 'wary', definition: 'Feeling or showing caution about possible dangers or problems.', example: 'She was wary of strangers.', category: 'adjective' },
    { word: 'zealous', definition: 'Having or showing great energy or enthusiasm in pursuit of a cause or objective.', example: 'He was zealous in his efforts to promote the product.', category: 'adjective' },
  ];

  const [words, setWords] = useState(() => {
    const savedWords = localStorage.getItem('vocabularyWords');
    return savedWords ? JSON.parse(savedWords) : preloadWords;
  });

  const [isAdding, setIsAdding] = useState(false);
  const [newWord, setNewWord] = useState({ word: '', definition: '', example: '', category: '' });
  const [editingIndex, setEditingIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
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
