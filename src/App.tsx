import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ContactCard from './components/ContactCard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/id/:slug" element={<ContactCard />} />
        <Route path="/" element={<Navigate to="/id/luis-mejia" replace />} />
        <Route path="*" element={<Navigate to="/id/luis-mejia" replace />} />
      </Routes>
    </Router>
  );
}

export default App;