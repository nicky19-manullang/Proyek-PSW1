import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Route, dan Routes
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Vocabulary from './components/Vocabulary'; // Impor halaman Vocabulary
import Questions from './components/Questions'; // Impor halaman Questions
import Downloads from './components/Downloads'; // Impor halaman Downloads

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Routing untuk Home, Vocabulary, Questions, dan Downloads */}
          <Route path="/" element={<MainContent />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/downloads" element={<Downloads />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
