import React, { useState } from 'react';
import './LoginSignup.css';

export const LoginSignUp = () => {
  // State variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  // Handle input changes
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleAgreementChange = (e) => setAgreed(e.target.checked);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation or send data to server
    console.log('Form submitted:', { name, email, password, agreed });
    // Reset form fields
    setName('');
    setEmail('');
    setPassword('');
    setAgreed(false);
  };


  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit} className="loginsignup-fields">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={handleNameChange}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit">Continue</button>
        </form>
        <p className='loginsignup-login'>
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input
            type="checkbox"
            checked={agreed}
            onChange={handleAgreementChange}
          />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;


