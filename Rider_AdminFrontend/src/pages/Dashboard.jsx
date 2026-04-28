import React from 'react';
import { MapPin, Target, History, CreditCard, Home, Briefcase, Minus, Plus, Navigation } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Welcome back, Zoie</h2>
      </div>

      <div className="dashboard-content">
        <div className="map-section">
          {/* Using a placeholder background for the map since we aren't using a real maps API */}
          <div className="map-placeholder">
            <div className="map-controls glass">
              <div className="map-input-group">
                <Target size={16} className="map-input-icon blue-icon" />
                <input type="text" placeholder="Current Location" defaultValue="SM City Olongapo Central" className="map-input" />
              </div>
              <div className="map-divider"></div>
              <div className="map-input-group">
                <MapPin size={16} className="map-input-icon red-icon" />
                <input type="text" placeholder="Where to?" className="map-input" />
              </div>
            </div>

            <div className="map-zoom-controls">
              <button className="zoom-btn"><Plus size={18} /></button>
              <button className="zoom-btn"><Minus size={18} /></button>
              <button className="zoom-btn primary-bg"><Navigation size={18} color="white" /></button>
            </div>
          </div>
        </div>

        <div className="side-panel">
          <div className="panel-section">
            <h3 className="section-title">QUICK LINKS</h3>
            <div className="quick-links">
              <button className="quick-link-btn">
                <History size={20} className="blue-icon" />
                <span>Ride History</span>
              </button>
              <button className="quick-link-btn">
                <CreditCard size={20} className="blue-icon" />
                <span>Payments</span>
              </button>
            </div>
          </div>

          <div className="panel-section">
            <div className="section-header">
              <h3 className="section-title">NEARBY DRIVERS</h3>
              <span className="badge">8 Active</span>
            </div>
            <div className="driver-card card active-driver">
              <div className="driver-avatar"></div>
              <div className="driver-info">
                <span className="driver-name">Paolo A.</span>
                <span className="driver-car">Honda Civic • 2 mins away</span>
              </div>
              <div className="driver-price">
                <span className="price-amount">P80.00</span>
                <span className="price-label">BASE PRICE</span>
              </div>
            </div>
          </div>

          <div className="panel-section">
            <h3 className="section-title">SAVED PLACES</h3>
            <div className="saved-places-list">
              <div className="saved-place-item">
                <div className="place-icon-container">
                  <Home size={18} className="blue-icon" />
                </div>
                <div className="place-info">
                  <span className="place-name">Home</span>
                  <span className="place-address">Subic Bay Freeport Zone, Zambales</span>
                </div>
              </div>
              
              <div className="saved-place-item">
                <div className="place-icon-container">
                  <Briefcase size={18} className="blue-icon" />
                </div>
                <div className="place-info">
                  <span className="place-name">SM Olongapo Central</span>
                  <span className="place-address">Rizal Avenue Extension, Olongapo City</span>
                </div>
              </div>

              <div className="saved-place-item">
                <div className="place-icon-container">
                  <Briefcase size={18} className="blue-icon" />
                </div>
                <div className="place-info">
                  <span className="place-name">Gordon College</span>
                  <span className="place-address">Olongapo City</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
