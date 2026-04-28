import React from 'react';
import { TrainFront, Wallet, Users } from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="admin-page-header"></div>
      
      <div className="admin-page-content">
        <div className="dashboard-header">
          <h1>Global Statistics</h1>
          <p>Real-time overview of your fleet and system performance.</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-header">
              <div className="stat-icon-wrapper">
                <TrainFront size={20} className="stat-icon" />
              </div>
              <span className="stat-change positive">↗ 0%</span>
            </div>
            <div className="stat-body">
              <span className="stat-label">Active Rides</span>
              <span className="stat-value">000</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <div className="stat-icon-wrapper">
                <Wallet size={20} className="stat-icon" />
              </div>
              <span className="stat-change positive">↗ 0%</span>
            </div>
            <div className="stat-body">
              <span className="stat-label">Total Revenue</span>
              <span className="stat-value">₱ 000.00</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <div className="stat-icon-wrapper">
                <Users size={20} className="stat-icon" />
              </div>
              <span className="stat-change negative">↘ 0%</span>
            </div>
            <div className="stat-body">
              <span className="stat-label">Driver Availability</span>
              <span className="stat-value">00%</span>
            </div>
          </div>
        </div>

        <div className="charts-container">
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-title-area">
                <h3>Revenue Trends</h3>
                <p>Last 7 days performance</p>
              </div>
              <div className="chart-metric-area">
                <span className="chart-value">₱00</span>
                <span className="chart-change positive">+0% vs last week</span>
              </div>
            </div>
            <div className="chart-body">
              <div className="mock-line-chart">
                <svg viewBox="0 0 800 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="gradientLine" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(84, 106, 176, 0.4)" />
                      <stop offset="100%" stopColor="rgba(84, 106, 176, 0)" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M 0 160 Q 50 140 100 80 T 200 120 T 300 130 T 400 30 L 400 200 L 0 200 Z" 
                    fill="url(#gradientLine)" 
                  />
                  <path 
                    d="M 0 160 Q 50 140 100 80 T 200 120 T 300 130 T 400 30" 
                    fill="none" 
                    stroke="#546ab0" 
                    strokeWidth="3" 
                  />
                </svg>
              </div>
              <div className="chart-x-axis">
                <span>MON</span>
                <span>TUE</span>
                <span>WED</span>
                <span>THU</span>
                <span>FRI</span>
                <span>SAT</span>
                <span>SUN</span>
              </div>
            </div>
          </div>

          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-title-area">
                <h3>Ride Volume by Hour</h3>
                <p>Real-time demand tracking</p>
              </div>
              <div className="chart-metric-area">
                <span className="chart-value">00</span>
                <span className="chart-change negative">-0% demand drop</span>
              </div>
            </div>
            <div className="chart-body">
              <div className="mock-bar-chart">
                <div className="bar-wrapper"><div className="bar" style={{height: '20%'}}></div></div>
                <div className="bar-wrapper"><div className="bar" style={{height: '40%'}}></div></div>
                <div className="bar-wrapper"><div className="bar active-bar" style={{height: '80%'}}></div></div>
                <div className="bar-wrapper"><div className="bar" style={{height: '35%'}}></div></div>
                <div className="bar-wrapper"><div className="bar" style={{height: '25%'}}></div></div>
                <div className="bar-wrapper"><div className="bar" style={{height: '30%'}}></div></div>
              </div>
              <div className="chart-x-axis">
                <span>00:00</span>
                <span>04:00</span>
                <span>08:00</span>
                <span>12:00</span>
                <span>16:00</span>
                <span>20:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
