import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SagaiPage from './Pages/SagaiPage/SagaiPage.js';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect from "/" to "/sagaiphotos" */}
        <Route path="/" element={<Navigate to="/sagaiphotos" replace />} />
        <Route path="/sagaiphotos" element={<SagaiPage />} />
      </Routes>
    </Router>
  );
}

export default App;
