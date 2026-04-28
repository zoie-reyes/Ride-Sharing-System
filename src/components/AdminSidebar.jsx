import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Car, LayoutDashboard, CreditCard, BarChart2, HelpCircle, LogOut } from 'lucide-react';
import './AdminSidebar.css';

const AdminSidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar admin-sidebar">
      <div className="sidebar-header">
        <Car size={24} className="logo-icon" />
        <span className="logo-text">RideShare</span>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/admin/payments" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <CreditCard size={20} />
          <span>Payment Management</span>
        </NavLink>
        <NavLink to="/admin/reports" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <BarChart2 size={20} />
          <span>Reports & Analytics</span>
        </NavLink>
        <NavLink to="/admin/support" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <HelpCircle size={20} />
          <span>Support</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <NavLink to="/admin/profile" className="profile-link">
          <div className="profile-avatar"></div>
          <div className="profile-info">
            <span className="profile-name">Kristen Redondo</span>
            <span className="profile-role">Admin</span>
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

export default AdminSidebar;
