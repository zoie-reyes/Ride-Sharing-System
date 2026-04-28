import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Car, LayoutDashboard, History, CreditCard, LogOut, Navigation } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Car size={24} className="logo-icon" />
        <span className="logo-text">RideShare</span>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/booking" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <Navigation size={20} />
          <span>Ride Booking</span>
        </NavLink>
        <NavLink to="/history" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <History size={20} />
          <span>Ride History</span>
        </NavLink>
        <NavLink to="/payments" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <CreditCard size={20} />
          <span>Payments</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <NavLink to="/profile" className="profile-link">
          <div className="profile-avatar"></div>
          <div className="profile-info">
            <span className="profile-name">Zoie Drizella Reyes</span>
            <span className="profile-role">Rider</span>
          </div>
          <div 
            className="logout-btn" 
            onClick={(e) => {
              e.preventDefault();
              navigate('/login');
            }}
            title="Logout"
          >
            <LogOut size={16} className="logout-icon" />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
