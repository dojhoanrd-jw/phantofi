import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DashboardPage from './Pages/Dashboardpage';
import TextEditorPage from './Pages/TextEditorPage'; 
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/TextEditorPage" element={<TextEditorPage />} />
        {/* Redirige cualquier ruta no definida a la página principal */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
