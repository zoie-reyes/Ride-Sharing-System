import React from 'react';
import { Search, ChevronDown, Calendar, List, CheckCircle2, XCircle, ChevronRight } from 'lucide-react';
import './RideHistory.css';

const RideHistory = () => {
  const trips = [
    {
      id: 1,
      destination: 'SM Olongapo Central',
      status: 'Completed',
      driver: 'Paolo A.',
      date: 'Feb 12, 2026',
      time: '11:23 AM',
      price: 'P240.00',
      payment: 'VISA •••• 4242'
    },
    {
      id: 2,
      destination: 'Ninoy Aquino International Airport Terminal 1',
      status: 'Cancelled',
      driver: 'Joven S.',
      date: 'Jan 21, 2026',
      time: '05:00 PM',
      price: 'P500.00',
      payment: 'NO CHARGE'
    },
    {
      id: 3,
      destination: 'Victory Liner Olongapo Terminal',
      status: 'Completed',
      driver: 'Aaron S.',
      date: 'Jan 11, 2026',
      time: '10:15 AM',
      price: 'P150.00',
      payment: 'CASH'
    },
    {
      id: 4,
      destination: '727 Coffee & Co',
      status: 'Completed',
      driver: 'Aaron S.',
      date: 'Jan 4, 2026',
      time: '3:45 PM',
      price: 'P300.00',
      payment: 'VISA •••• 4242'
    },
    {
      id: 5,
      destination: 'Ayala Malls Harbor Point',
      status: 'Completed',
      driver: 'Paolo A.',
      date: 'Dec 20, 2025',
      time: '5:30 PM',
      price: 'P275.00',
      payment: 'CASH'
    }
  ];

  return (
    <div className="history-container">
      <div className="history-header-bar">
        <h2>Ride History</h2>
      </div>

      <div className="history-content">
        <div className="history-filters">
          <div className="search-bar">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search destinations or drivers..." className="search-input" />
          </div>
          
          <div className="filter-buttons">
            <button className="filter-btn">
              <List size={16} />
              <span>Status</span>
              <ChevronDown size={16} />
            </button>
            <button className="filter-btn">
              <Calendar size={16} />
              <span>Last 30 Days</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        <div className="history-tabs">
          <button className="history-tab active">
            <List size={18} />
            List View
          </button>
        </div>

        <div className="trips-section">
          <h3 className="section-title">Recent Trips</h3>
          
          <div className="trips-list">
            {trips.map(trip => (
              <div key={trip.id} className="trip-card">
                <div className="trip-info-main">
                  <span className="trip-destination">{trip.destination}</span>
                  <div className="trip-meta">
                    <span className={`trip-status ${trip.status.toLowerCase()}`}>
                      {trip.status === 'Completed' ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
                      {trip.status}
                    </span>
                    <span className="meta-dot">•</span>
                    <span className="trip-driver">Driver: {trip.driver}</span>
                    <span className="meta-dot">•</span>
                    <span className="trip-datetime">{trip.date} • {trip.time}</span>
                  </div>
                </div>
                
                <div className="trip-price-section">
                  <span className="trip-price">{trip.price}</span>
                  <span className={`trip-payment ${trip.payment === 'NO CHARGE' ? 'danger-text' : ''}`}>
                    {trip.payment}
                  </span>
                </div>
                
                <div className="trip-action">
                  <button className="action-btn">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideHistory;
