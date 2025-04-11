import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your API endpoint
      // await axios.post('/api/auth/signup', formData);
      console.log('Signup Data:', formData);
      navigate('/login');
    } catch (error) {
      alert('Signup failed');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <img src="/logo.png" alt="logo" className="auth-logo" />
        <div className="auth-tabs">
          <Link to="/login" className="tab">Login</Link>
          <span className="tab active">Signup</span>
        </div>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-box">
            <FiUser />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <FiMail />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <FiLock />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="auth-btn">Signup</button>
          <p className="auth-alt">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
