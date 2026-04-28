import React from 'react';
import './AdminProfile.css';

const AdminProfile = () => {
  return (
    <div className="admin-profile">
      <div className="admin-page-header">
        Admin Profile
      </div>
      
      <div className="admin-page-content">
        <div className="profile-top-card">
          <div className="profile-avatar-large"></div>
          <div className="profile-header-info">
            <h2>Kristel Redondo</h2>
            <button className="edit-profile-btn">Edit Profile</button>
          </div>
        </div>

        <div className="personal-info-card">
          <div className="info-header">
            <h3>Personal Information</h3>
            <button className="update-link">Update</button>
          </div>

          <div className="info-grid">
            <div className="info-field">
              <label>Full Name</label>
              <input type="text" value="Kristel Redondo" readOnly />
            </div>
            <div className="info-field">
              <label>Email Address</label>
              <input type="email" value="fullname@example.com" readOnly />
            </div>
            <div className="info-field">
              <label>Phone Number</label>
              <input type="text" value="+62 (000) 000-0000" readOnly />
            </div>
            <div className="info-field">
              <label>Home Address</label>
              <input type="text" value="Subic Bay Freeport Zone, Zambales" readOnly />
            </div>
          </div>
        </div>

        <div className="empty-card">
          {/* Mockup shows an empty card below the personal information */}
        </div>

        <div className="sign-out-container">
          <button className="sign-out-btn">Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
