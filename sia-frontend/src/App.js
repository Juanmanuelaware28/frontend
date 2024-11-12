// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import StudentProfile from './components/StudentProfile';  // Componente del perfil del estudiante

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="text-center mt-5" style={{ color: '#6f42c1' }}>Sistema de información Académica</h1>
        <Routes>
          <Route path="/" element={<RedirectToLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/student" element={<StudentProfile />} /> {/* Perfil del estudiante */}
        </Routes>
      </div>
    </Router>
  );
}

function RedirectToLogin() {
  return (
    <div className="text-center mt-5">
      <Link to="/login">
        <button className="btn btn-primary">Go to Login</button>
      </Link>
    </div>
  );
}

export default App;

