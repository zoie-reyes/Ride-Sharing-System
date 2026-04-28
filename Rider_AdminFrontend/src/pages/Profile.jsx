import React from 'react';
import { Star, CreditCard } from 'lucide-react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header-bar">
        <h2>Rider Profile</h2>
      </div>

      <div className="profile-content">
        <div className="profile-header-card card">
          <div className="profile-avatar-large"></div>
          <div className="profile-header-info">
            <h1 className="profile-name-large">Zoie Drizella Reyes</h1>
            <div className="profile-rating">
              <Star size={16} className="star-icon" fill="currentColor" />
              <span>4.98 Rating</span>
            </div>
            <button className="btn-primary edit-profile-btn">Edit Profile</button>
          </div>
        </div>

        <div className="profile-section card">
          <div className="section-header">
            <h3>Personal Information</h3>
            <button className="update-link">Update</button>
          </div>
          
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" className="profile-input" defaultValue="Zoie Drizella Reyes" readOnly />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" className="profile-input" defaultValue="fullname@example.com" readOnly />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" className="profile-input" defaultValue="+62 (000) 000-0000" readOnly />
            </div>
            <div className="form-group">
              <label>Home Address</label>
              <input type="text" className="profile-input" defaultValue="Subic Bay Freeport Zone, Zambales" readOnly />
            </div>
          </div>
        </div>

        <div className="profile-section card">
          <div className="section-header">
            <h3>Linked Accounts</h3>
          </div>
          
          <div className="linked-account-item">
            <div className="account-icon">
              <CreditCard size={20} className="blue-icon" />
            </div>
            <div className="account-info">
              <span className="account-name">Card Payment</span>
              <span className="account-detail">Visa ending in 4242</span>
            </div>
            <button className="change-btn">CHANGE</button>
          </div>
        </div>

        <div className="signout-section">
          <button className="btn-primary signout-btn">Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
