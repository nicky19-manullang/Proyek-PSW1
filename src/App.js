import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Vocabulary from './components/Vocabulary';
import Questions from './components/Questions';
import Downloads from './components/Downloads';
import Materi from './components/Materi'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />

          {/* Routing untuk materi pembelajaran */}
          <Route path="/can-could" element={<CanCould />} />
          <Route path="/opinion" element={<Opinion />} />
          <Route path="/future-perfect" element={<FuturePerfect />} />
          <Route path="/personal-letter" element={<PersonalLetter />} />
          <Route path="/exposition" element={<Exposition />} />
          <Route path="/formal-letter" element={<FormalLetter />} />

          {/* Routing untuk halaman tambahan */}
          <Route path="/vocabulary" element={<Vocabulary />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/materi" element={<Materi />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
