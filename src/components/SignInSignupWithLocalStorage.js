import React, { useRef, useState, useEffect } from "react";
import '../App.css';

function SignInSignupWithLocalStorage() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (authenticated) {
        // Redirigir a la página CarList después de 3 segundos si el usuario está autenticado
        window.location.href = '/CarList';
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [authenticated]);

  const handleSignUp = () => {
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signUp", email.current.value);
      setAuthenticated(true);
      alert("Cuenta creada exitosamente!!");
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

  const handleSignIn = () => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (email.current.value === storedEmail && password.current.value === storedPassword) {
      setAuthenticated(true);
    } else {
      alert("Credenciales inválidas. Por favor, inténtelo de nuevo.");
    }
  };

  return (
    <div className="container">
      {authenticated ? (
        <h1>Bienvenido {localStorage.getItem('name')}</h1>
      ) : (
        <div>
          <div className="input_space">
            <input placeholder="Nombre" type='text' ref={name} />
          </div>
          <div className="input_space">
            <input placeholder="Email" type='text' ref={email} />
          </div>
          <div className="input_space">
            <input placeholder="Contraseña" type='password' ref={password} />
          </div>
          <button onClick={handleSignUp}>Registrarse</button>
          <button onClick={handleSignIn}>Iniciar sesión</button>
        </div>
      )}
    </div>
  );
}

export default SignInSignupWithLocalStorage;
