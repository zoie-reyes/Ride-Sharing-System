import React from 'react';
import { Search, ChevronDown, CheckCircle2, XCircle, ChevronRight } from 'lucide-react';
import './Pages.css';

export default function RideHistoryPage() {
  const trips = [
    { id: 1, dest: 'SM Olongapo Central', status: 'Completed', rider: 'Paolo A.', date: 'Feb 12, 2026', time: '11:23 AM', price: '₱240.00', method: 'VISA ···· 4242' },
    { id: 2, dest: 'Ninoy Aquino International Airport Terminal 1', status: 'Cancelled', rider: 'Joven S.', date: 'Jan 21, 2026', time: '05:00 PM', price: '₱500.00', method: 'NO CHARGE' },
    { id: 3, dest: 'Victory Liner Olongapo Terminal', status: 'Completed', rider: 'Aaron S.', date: 'Jan 11, 2026', time: '10:15 AM', price: '₱150.00', method: 'CASH' },
    { id: 4, dest: '727 Coffee & Co', status: 'Completed', rider: 'Aaron S.', date: 'Jan 4, 2026', time: '3:45 PM', price: '₱300.00', method: 'VISA ···· 4242' },
    { id: 5, dest: 'Ayala Malls Harbor Point', status: 'Completed', rider: 'Paolo A.', date: 'Dec 20, 2025', time: '5:30 PM', price: '₱275.00', method: 'CASH' },
    { id: 6, dest: 'SM Olongapo Central', status: 'Completed', rider: 'Paolo A.', date: 'Dec 14, 2025', time: '1:15 PM', price: '₱120.00', method: 'CASH' },
    { id: 7, dest: 'Primero Coffee Ph', status: 'Completed', rider: 'Aaron S.', date: 'Dec 13, 2025', time: '8:00 AM', price: '₱320.00', method: 'VISA ···· 4242' },
    { id: 8, dest: 'Uptown Mall', status: 'Completed', rider: 'Joven S.', date: 'Nov 29, 2025', time: '2:40 PM', price: '₱455.00', method: 'VISA ···· 4242' },
  ];

  return (
    <div className="page-content">
      <div className="filter-bar">
        <div className="search-box">
          <Search size={16} color="#64748b" />
          <input type="text" placeholder="Search destinations or drivers..." />
        </div>
        <button className="filter-btn">Status <ChevronDown size={14} /></button>
        <button className="filter-btn">Last 30 Days <ChevronDown size={14} /></button>
      </div>

      <div className="list-view-header">List View</div>

      <div className="trips-container">
        <h3 className="trips-title">Recent Trips</h3>
        {trips.map(trip => (
          <div key={trip.id} className="trip-card">
            <div className="trip-details">
              <div className="trip-dest">{trip.dest}</div>
              <div className="trip-meta">
                <span className={`trip-status ${trip.status.toLowerCase()}`}>
                  {trip.status === 'Completed' ? <CheckCircle2 size={12} /> : <XCircle size={12} />} {trip.status}
                </span>
                <span className="dot">•</span> Rider: {trip.rider}
                <span className="dot">•</span> {trip.date} • {trip.time}
              </div>
            </div>
            <div className="trip-fare">
              <div className="trip-price">{trip.price}</div>
              <div className={`trip-method ${trip.method === 'NO CHARGE' ? 'no-charge' : ''}`}>{trip.method}</div>
            </div>
            <button className="btn-icon"><ChevronRight size={16} /></button>
          </div>
        ))}
      </div>
    </div>
  );
}
