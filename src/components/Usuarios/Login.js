import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Cambiar useHistory por useNavigate
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Cambiar useHistory por useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/', {
        email,
        password,
      });
      if (response.data === 'exist') {
        navigate('/home'); // Cambiar push por navigate
      } else if (response.data === 'notexist') {
        alert('User has not signed up');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Wrong details. Please try again.');
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
