import React from 'react';
import { Download } from 'lucide-react';
import './AdminReports.css';

const AdminReports = () => {
  return (
    <div className="admin-reports">
      <div className="admin-page-header">
        Reports & Analytics
      </div>
      
      <div className="admin-page-content">
        <div className="reports-top-cards">
          <div className="report-stat-card">
            <div className="report-stat-header">
              <span className="report-stat-label">Total Rides</span>
              <span className="report-stat-change positive">↗ 0%</span>
            </div>
            <div className="report-stat-value">000</div>
          </div>

          <div className="report-stat-card">
            <div className="report-stat-header">
              <span className="report-stat-label">Total Revenue</span>
              <span className="report-stat-change positive">↗ 0%</span>
            </div>
            <div className="report-stat-value">₱ 000.00</div>
          </div>

          <div className="report-stat-card">
            <div className="report-stat-header">
              <span className="report-stat-label">Driver Availability</span>
              <span className="report-stat-change negative">↘ 0%</span>
            </div>
            <div className="report-stat-value">00%</div>
          </div>

          <div className="report-stat-card">
            <div className="report-stat-header">
              <span className="report-stat-label">Average wait time</span>
              <span className="report-stat-change negative">↘ 0%</span>
            </div>
            <div className="report-stat-value">0 min</div>
          </div>
        </div>

        <div className="reports-chart-section">
          <div className="reports-chart-card">
            <div className="reports-chart-header">
              <div className="reports-chart-titles">
                <h3>Ride Volume Over Time</h3>
                <p>Total daily rides for the current period</p>
              </div>
              <div className="reports-chart-legend">
                <span className="legend-dot"></span>
                <span className="legend-text">Current Period</span>
              </div>
            </div>

            <div className="reports-bar-chart-container">
              {/* Horizontal Grid Lines */}
              <div className="chart-grid">
                <div className="grid-line"></div>
                <div className="grid-line"></div>
                <div className="grid-line"></div>
                <div className="grid-line"></div>
              </div>

              {/* Bars */}
              <div className="chart-bars">
                <div className="chart-bar-wrapper"><div className="chart-bar" style={{height: '35%'}}></div></div>
                <div className="chart-bar-wrapper"><div className="chart-bar" style={{height: '50%'}}></div></div>
                <div className="chart-bar-wrapper"><div className="chart-bar" style={{height: '42%'}}></div></div>
                <div className="chart-bar-wrapper"><div className="chart-bar" style={{height: '65%'}}></div></div>
                <div className="chart-bar-wrapper"><div className="chart-bar" style={{height: '55%'}}></div></div>
                <div className="chart-bar-wrapper"><div className="chart-bar" style={{height: '75%'}}></div></div>
                <div className="chart-bar-wrapper"><div className="chart-bar" style={{height: '30%'}}></div></div>
                <div className="chart-bar-wrapper"><div className="chart-bar" style={{height: '45%'}}></div></div>
                <div className="chart-bar-wrapper"><div className="chart-bar" style={{height: '58%'}}></div></div>
                <div className="chart-bar-wrapper"><div className="chart-bar" style={{height: '38%'}}></div></div>
                <div className="chart-bar-wrapper"><div className="chart-bar" style={{height: '70%'}}></div></div>
                <div className="chart-bar-wrapper"><div className="chart-bar" style={{height: '62%'}}></div></div>
              </div>
            </div>
            
            <div className="reports-chart-x-axis">
              <span>WEEK 1</span>
              <span>WEEK 2</span>
              <span>WEEK 3</span>
              <span>WEEK 4</span>
            </div>
          </div>
        </div>

        <button className="export-report-btn">
          <Download size={16} />
          Export Report
        </button>
      </div>
    </div>
  );
};

export default AdminReports;
