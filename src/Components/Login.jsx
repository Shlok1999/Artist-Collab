import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Auth.css';
import { useAuth } from './utils/AuthContext';

function Login() {

  const navigate = useNavigate();
  const { user, loginUser } = useAuth();
  const loginForm = useRef(null);

  useEffect(() => {
    if (user) {
      navigate('/room');
    }
  }, [user]); // Add user as a dependency

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = loginForm.current.email.value;
    const password = loginForm.current.password.value;

    const userInfo = { email, password };
    loginUser(userInfo);
  };

  return (
    <div className='authentication-section'>
      <h2>Login Here</h2>
      <div className='auth-form'>
        <form ref={loginForm} onSubmit={handleSubmit}>
          <input placeholder='email' type="text" name='email' />
          <input placeholder='password' type="password" name='password' />
          <button type='submit'>Submit</button>
          <p>Not Registered?      <a href="/signup">Register</a></p>
          
        </form>
      </div>
    </div>
  );
}

export default Login;
