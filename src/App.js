// App.js

import React, { useState, useEffect } from 'react';
import SignInSignupWithLocalStorage from './components/SignInSignupWithLocalStorage';
import CarList from './components/CarList';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  const isAuthenticated = localStorage.getItem("signUp");

  return (
    <div className={darkMode ? 'App dark-mode' : 'App light-mode'}>
      <header>
        <h1>Bienvenido a mi página</h1>
        <button className={darkMode ? 'button-dark' : 'button-light'} onClick={toggleDarkMode}>
          {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
      </header>
      <main>
        {!isAuthenticated ? <SignInSignupWithLocalStorage /> : <CarList />}
      </main>
    </div>
  );
}

export default App;
