import React, { useState } from 'react';
import { Target, MapPin, Plus, Minus, Navigation, Car, CreditCard, ArrowRight } from 'lucide-react';
import './RideBooking.css';

const RideBooking = () => {
  const [selectedRide, setSelectedRide] = useState('economy');

  const rides = [
    {
      id: 'economy',
      name: 'Economy',
      desc: '3 min away • 4 seats',
      price: 'P100.00',
      icon: <Car size={24} className="ride-icon" />
    },
    {
      id: 'premium',
      name: 'Premium',
      desc: '5 min away • Luxury',
      price: 'P180.00',
      icon: <Car size={24} className="ride-icon" />
    },
    {
      id: 'ridexl',
      name: 'Ride XL',
      desc: '8 min away • 6 seats',
      price: 'P240.00',
      icon: <Car size={24} className="ride-icon" />
    }
  ];

  return (
    <div className="booking-container">
      <div className="booking-header-bar">
        <h2>Ride Booking</h2>
      </div>

      <div className="booking-content">
        <div className="map-section">
          {/* Map Placeholder */}
          <div className="map-placeholder">
            <div className="map-controls glass">
              <div className="map-input-group">
                <Target size={16} className="map-input-icon blue-icon" />
                <input type="text" defaultValue="Subic Bay Freeport Zone, Zambales" className="map-input" />
              </div>
              <div className="map-divider"></div>
              <div className="map-input-group">
                <MapPin size={16} className="map-input-icon blue-icon" />
                <input type="text" defaultValue="SM City Olongapo Central, Olongapo City" className="map-input" />
              </div>
            </div>

            <div className="map-zoom-controls">
              <button className="zoom-btn"><Plus size={18} /></button>
              <button className="zoom-btn"><Minus size={18} /></button>
              <button className="zoom-btn primary-bg"><Navigation size={18} color="white" /></button>
            </div>
          </div>
        </div>

        <div className="ride-selection-panel">
          <h3 className="section-title-large">Choose a ride</h3>
          
          <div className="ride-options">
            {rides.map(ride => (
              <div 
                key={ride.id} 
                className={`ride-option-card ${selectedRide === ride.id ? 'selected' : ''}`}
                onClick={() => setSelectedRide(ride.id)}
              >
                <div className="ride-icon-wrapper">
                  {ride.icon}
                </div>
                <div className="ride-details">
                  <span className="ride-name">{ride.name}</span>
                  <span className="ride-desc">{ride.desc}</span>
                </div>
                <div className="ride-price">{ride.price}</div>
              </div>
            ))}
          </div>

          <div className="payment-method-card">
            <div className="payment-info">
              <CreditCard size={20} className="text-dark" />
              <span className="payment-text">•••• 4242</span>
            </div>
            <button className="change-btn">Change</button>
          </div>

          <button className="btn-primary confirm-btn">
            Confirm Booking
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RideBooking;
