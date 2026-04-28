import React from 'react';
import { useLocation } from 'react-router-dom';

export default function TopBar() {
  const location = useLocation();
  let title = '';
  
  switch(location.pathname) {
    case '/profile': title = 'Driver Profile'; break;
    case '/history': title = 'Ride History'; break;
    case '/booking': title = 'Passenger Booking'; break;
    case '/active': title = 'Active Ride'; break;
    case '/payments': title = 'Payments'; break;
    case '/ratings': title = 'Ratings & Reviews'; break;
    default: title = '';
  }

  return (
    <header className="topbar">
      <div className="topbar-title">{title}</div>
      <div className="status-indicator">
        <div className="status-dot"></div>
        SYSTEM ACTIVE
      </div>
    </header>
  );
}
