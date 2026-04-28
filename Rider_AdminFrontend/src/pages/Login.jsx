import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('Rider');

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === 'Admin') {
      navigate('/admin/dashboard');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>RideShare</h1>
      </div>
      <div className="login-card card">
        <div className="login-banner">
          <div className="banner-content">
            <h2>Welcome to RideShare</h2>
            <p>Your journey starts here.</p>
          </div>
        </div>

        <div className="login-form-container">
          <div className="role-selector">
            <span className="role-label">Login as</span>
            <div className="role-tabs">
              <button 
                type="button" 
                className={`role-tab ${role === 'Rider' ? 'active' : ''}`}
                onClick={() => setRole('Rider')}
              >Rider</button>
              <button 
                type="button" 
                className={`role-tab ${role === 'Driver' ? 'active' : ''}`}
                onClick={() => setRole('Driver')}
              >Driver</button>
              <button 
                type="button" 
                className={`role-tab ${role === 'Admin' ? 'active' : ''}`}
                onClick={() => setRole('Admin')}
              >Admin</button>
            </div>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-with-icon">
                <Mail size={18} className="input-icon" />
                <input type="email" placeholder="name@example.com" className="input-field" required />
              </div>
            </div>

            <div className="form-group">
              <div className="password-header">
                <label>Password</label>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>
              <div className="input-with-icon">
                <Lock size={18} className="input-icon" />
                <input type="password" placeholder="••••••••" className="input-field" required />
              </div>
            </div>

            <button type="submit" className="btn-primary login-btn">Login</button>
          </form>

          <div className="login-footer">
            <span>Don't have an account?</span>
            <Link to="/register" className="signup-link">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
