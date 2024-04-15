import React from 'react';
import SignInSignupWithLocalStorage from './components/SignInSignupWithLocalStorage';
import CarList from './components/CarList';
import './App.css';

function App() {
  const isAuthenticated = localStorage.getItem("signUp");

  return (
    <div className="App">
      {!isAuthenticated ? <SignInSignupWithLocalStorage /> : <CarList />}
    </div>
  );
}

export default App;
