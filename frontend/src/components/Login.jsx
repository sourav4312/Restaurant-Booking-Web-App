import React, { useState } from 'react';
import './Login.css';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { IoEyeOff, IoEye } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ username: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const togglePassword = () => setShowPassword(!showPassword);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert('Logged in!');
    navigate('/hero'); // Redirect to HeroSection after login
  };
  

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    alert('Signed up!');
    navigate('/hero'); // Redirect to HeroSection after signup
  };
  
  return (
    <div className="login-page">
      <div className="login-card">
        <img src="/logo.png" alt="Brand Logo" className="brand-logo" />
        <h2 className="brand-title">BRAND NAME</h2>
        <p className="brand-slogan">SLOGAN HERE</p>

        <div className="tab-switch">
          <button
            className={!showSignup ? 'active' : ''}
            onClick={() => setShowSignup(false)}
          >
            Login
          </button>
          <button
            className={showSignup ? 'active' : ''}
            onClick={() => setShowSignup(true)}
          >
            Signup
          </button>
        </div>

        <div className="form-container">
          {/* LOGIN FORM */}
          <form
            onSubmit={handleLoginSubmit}
            className={`login-form form-panel ${showSignup ? 'slide-left' : ''}`}
          >
            <label>Email Address</label>
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="hello@example.com"
                value={formData.email}
                onChange={handleLoginChange}
                required
              />
            </div>

            <label>Password</label>
            <div className="input-group">
              <FaLock className="input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleLoginChange}
                required
              />
              <span className="toggle-icon" onClick={togglePassword}>
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </span>
            </div>

            <p className="forgot-pass">Forgot password?</p>
            <button type="submit" className="login-btn">Login</button>
          </form>

          {/* SIGNUP FORM */}
          <form
            onSubmit={handleSignupSubmit}
            className={`signup-form form-panel ${showSignup ? 'drop-down' : 'hidden'}`}
          >
            <label>Username</label>
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="username"
                placeholder="yourusername"
                value={signupData.username}
                onChange={handleSignupChange}
                required
              />
            </div>

            <label>Email Address</label>
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="hello@example.com"
                value={signupData.email}
                onChange={handleSignupChange}
                required
              />
            </div>

            <label>Password</label>
            <div className="input-group">
              <FaLock className="input-icon" />
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={signupData.password}
                onChange={handleSignupChange}
                required
              />
            </div>

            <button type="submit" className="login-btn">Signup</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
