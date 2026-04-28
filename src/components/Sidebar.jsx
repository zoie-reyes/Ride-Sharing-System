import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Car, Home, MapPin, Clock, CreditCard, Star, LogOut, User } from 'lucide-react';

export default function Sidebar() {
  const navItems = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Ride Booking', icon: MapPin, path: '/booking' },
    { name: 'Ride History', icon: Clock, path: '/history' },
    { name: 'Payments', icon: CreditCard, path: '/payments' },
    { name: 'Ratings & Reviews', icon: Star, path: '/ratings' },
  ];

  return (
    <aside className="sidebar">
      <div className="brand">
        <Car size={24} color="#3b82f6" />
        <span>RideShare</span>
      </div>
      
      <div className="nav-links">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            end={item.path === '/'}
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>

      <div className="profile-section">
        <Link to="/profile" className="profile-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="avatar">
            {/* Avatar placeholder */}
          </div>
          <div className="profile-info">
            <span className="profile-name">Paolo Renz Arceo</span>
            <span className="profile-role">Driver</span>
          </div>
          <LogOut size={16} className="logout-icon" />
        </Link>
      </div>
    </aside>
  );
}
