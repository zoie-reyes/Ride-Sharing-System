import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="register-container">
      <div className="register-header">
        <h1>RideShare</h1>
      </div>
      <div className="register-card card">
        <div className="register-banner">
          <div className="banner-content">
            <h2>Join RideShare</h2>
            <p>Create an account to get started.</p>
          </div>
        </div>

        <div className="register-form-container">
          <div className="role-selector">
            <span className="role-label">Register as</span>
            <div className="role-tabs">
              <button className="role-tab active">Rider</button>
              <button className="role-tab">Driver</button>
            </div>
          </div>

          <form onSubmit={handleRegister} className="register-form">
            <div className="form-group">
              <label>Full Name</label>
              <div className="input-with-icon">
                <User size={18} className="input-icon" />
                <input type="text" placeholder="John Doe" className="input-field" required />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <div className="input-with-icon">
                <Mail size={18} className="input-icon" />
                <input type="email" placeholder="name@example.com" className="input-field" required />
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="input-with-icon">
                <Lock size={18} className="input-icon" />
                <input type="password" placeholder="••••••••" className="input-field" required />
              </div>
            </div>

            <button type="submit" className="btn-primary register-btn">Create Account</button>
          </form>

          <div className="register-footer">
            <span>Already have an account?</span>
            <Link to="/login" className="login-link">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
