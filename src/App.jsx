import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<PrivacyPolicy />}/>
      </Routes>
    </Router>
  );
}
 
export default App;
