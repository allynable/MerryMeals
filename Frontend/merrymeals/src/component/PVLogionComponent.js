import React, { useState } from 'react';
import '../css/PVLoginComponent.css';
import facebook from '../image/facebook.jpg'
import google from '../image/google.jpg'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div>
        <a href="/forgot-password">Forgot Password</a>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
      <div className="login-options">
        <p>Login using:</p>
        <div>
        <a href="..">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="..">
            <img src={google} alt="google" />
          </a>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
