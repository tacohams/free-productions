// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Home from './pages/Home';
import About from './pages/About';
import Songs from './pages/Songs';

function App() {
  const basename = process.env.VITE_BASENAME || '';

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/songs" element={<Songs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
