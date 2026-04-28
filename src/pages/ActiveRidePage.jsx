import React from 'react';
import { CornerUpRight, CheckCircle } from 'lucide-react';
import './Pages.css';

export default function ActiveRidePage() {
  return (
    <div className="active-ride-container map-placeholder map-view">
      <div className="nav-card">
        <div className="nav-icon"><CornerUpRight size={24} color="white"/></div>
        <div>
          <div className="nav-meta">NEXT MANEUVER</div>
          <div className="nav-instruction">Turn right onto Magsaysay Brg</div>
          <div className="nav-dist">In 450 feet</div>
        </div>
      </div>
      
      <div className="map-center-text" style={{marginTop: '100px'}}>Map View Placeholder<br/>(Active Ride)</div>

      <div className="bottom-ride-card">
        <div className="rider-details">
          <div className="rider-name">Rider: <strong>Zoie Drizella Reyes</strong></div>
          <div className="rider-loc"><span className="dot blue"></span> Current: Subic Bay Freeport Zone</div>
          <div className="rider-loc"><span className="dot red"></span> Destination: SM City Olongapo Central</div>
        </div>
        <button className="btn-primary complete-btn"><CheckCircle size={16}/> Complete Trip</button>
      </div>
    </div>
  );
}
