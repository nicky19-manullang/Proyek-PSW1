import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Vocabulary from './components/Vocabulary';
import Questions from './components/Questions';
import Quis1 from './components/Quis1';
import Quis2 from './components/Quis2';
import Quis3 from './components/Quis3';
import Quis4 from './components/Quis4';
import Quis5 from './components/Quis5';
import Quis6 from './components/Quis6';
import Quis7 from './components/Quis7';
import Quis8 from './components/Quis8';
import Quis9 from './components/Quis9';
import Quis10 from './components/Quis10';
import Downloads from './components/Downloads';
import TipsTrik from "./components/Tips&Trik";
import Tutorial from "./components/Tutorial";
import Materi from './components/Materi';
import Modul1 from "./components/Modul1";
import Modul2 from "./components/Modul2";
import Modul3 from "./components/Modul3";
import Modul4 from "./components/Modul4";
import Modul5 from "./components/Modul5";
import Modul6 from "./components/Modul6";
import Modul7 from "./components/Modul7";
import Modul8 from "./components/Modul8";
import Modul9 from "./components/Modul9";
import Modul10 from "./components/Modul10";


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
          <Route path="/quis3" element={<Quis3 />} />
          <Route path="/quis4" element={<Quis4 />} />
          <Route path="/quis5" element={<Quis5 />} />
          <Route path="/quis6" element={<Quis6 />} />
          <Route path="/quis7" element={<Quis7 />} />
          <Route path="/quis8" element={<Quis8 />} />
          <Route path="/quis9" element={<Quis9 />} />
          <Route path="/quis10" element={<Quis10 />} />
          <Route path="/modul1" element={<Modul1 />} />
          <Route path="/modul2" element={<Modul2 />} />
          <Route path="/modul3" element={<Modul3 />} />
          <Route path="/modul4" element={<Modul4 />} />
          <Route path="/modul5" element={<Modul5 />} />
          <Route path="/modul6" element={<Modul6 />} />
          <Route path="/modul7" element={<Modul7 />} />
          <Route path="/modul8" element={<Modul8 />} />
          <Route path="/modul9" element={<Modul9 />} />
          <Route path="/modul10" element={<Modul10 />} />
          <Route path="/tipstrik" element={<TipsTrik/>} />
          <Route path="/tutorial" element={<Tutorial/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
