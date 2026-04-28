import React from 'react';
import { MapPin, User, ArrowRight } from 'lucide-react';
import './Pages.css';

export default function RideBookingPage() {
  return (
    <div className="booking-container">
      <div className="map-placeholder map-view">
        <div className="route-card">
          <div className="route-point"><MapPin size={16} color="#94a3b8" /> Subic Bay Freeport Zone, Zambales</div>
          <div className="route-point"><MapPin size={16} color="#94a3b8" /> SM City Olongapo Central, Olongapo City</div>
        </div>
        <div className="map-center-text">Map View Placeholder<br />(Passenger Booking)</div>
      </div>

      <div className="side-panel">
        <h3 className="panel-title">Accept a ride</h3>

        <div className="ride-request-list">
          <div className="ride-req-card">
            <div className="req-avatar"></div>
            <div className="req-info">
              <div className="req-name">Dame</div>
              <div className="req-eta">3 min away</div>
            </div>
            <div className="req-price">₱100.00</div>
          </div>

          <div className="ride-req-card">
            <div className="req-avatar"></div>
            <div className="req-info">
              <div className="req-name">Un</div>
              <div className="req-eta">5 min away</div>
            </div>
            <div className="req-price">₱180.00</div>
          </div>

          <div className="ride-req-card active">
            <div className="req-avatar"><User size={20} color="#1e293b" /></div>
            <div className="req-info">
              <div className="req-name">Curt</div>
              <div className="req-eta">8 min away</div>
            </div>
            <div className="req-price">₱240.00</div>
          </div>
        </div>

        <button className="btn-primary full-width mt-6">Accept Booking <ArrowRight size={16} /></button>
      </div>
    </div>
  );
}
