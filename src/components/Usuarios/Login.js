import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/', {
        email,
        password,
      });
      if (response.data === 'exist') {
        navigate('/home');
      } else if (response.data === 'notexist') {
        alert('User has not signed up');
      }
    } catch (error) {
      if (error.response) {
        // El servidor respondió con un código de error
        if (error.response.status === 401) {
          alert('Email or password is incorrect. Please try again.');
        } else {
          alert('An error occurred. Please try again later.');
        }
      } else if (error.request) {
        // La solicitud se hizo pero no se recibió respuesta
        alert('No response from server. Please try again later.');
      } else {
        // Ocurrió un error antes de realizar la solicitud
        console.error('Error:', error.message);
        alert('An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/signup">Signup Page</Link>
    </div>
  );
}

export default Login;
