import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarList from './components/CarList';
import Login from './components/Usuarios/Login';
import Signup from './components/Usuarios/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta para la página de inicio de sesión (Login) */}
          <Route path="/" element={<Login />} />

          {/* Ruta para la página de registro (Signup) */}
          <Route path="/signup" element={<Signup />} />

          {/* Ruta para la página principal (CarList) */}
          <Route path="/carlist" element={<CarList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
