import React from 'react';
import './Pages.css';

export default function ProfilePage() {
  return (
    <div className="page-content">
      <div className="profile-header-card card">
        <div className="profile-avatar-large"></div>
        <div>
          <h2 className="profile-name-large">Paolo Renz Arceo</h2>
          <button className="btn-secondary">Edit Profile</button>
        </div>
      </div>

      <div className="profile-details-card card mt-4">
        <div className="card-header">
          <h3>Personal Information</h3>
          <button className="btn-text">Update</button>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" value="Paolo Renz Arceo" readOnly className="form-input" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" value="fullname@example.com" readOnly className="form-input" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" value="+62 (000) 000-0000" readOnly className="form-input" />
          </div>
          <div className="form-group">
            <label>Home Address</label>
            <input type="text" value="Subic Bay Freeport Zone, Zambales" readOnly className="form-input" />
          </div>
        </div>
      </div>

      <div className="card mt-4 empty-card"></div>

      <div className="signout-container mt-6">
        <button className="btn-primary signout-btn">Sign Out</button>
      </div>
    </div>
  );
}
