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
          {/* Ruta para la página de inicio (CarList) */}
          <Route path="/" element={<CarList />} /> {/* Esta es la ruta para la página de inicio */}
          
          {/* Ruta para la página de inicio de sesión (Login) */}
          <Route path="/components/Usuarios/login" element={<Login />} />

          {/* Ruta para la página de registro (Signup) */}
          <Route path="/components/Usuarios/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
