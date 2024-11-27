import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Vocabulary from './components/Vocabulary';
import Questions from './components/Questions';
import Quis1 from './components/Quis1';
import Quis2 from './components/Quis2';
import Downloads from './components/Downloads';
import Materi from './components/Materi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/materi" element={<Materi />} />
          <Route path="/quis1" element={<Quis1 />} />
          <Route path="/quis2" element={<Quis2 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
