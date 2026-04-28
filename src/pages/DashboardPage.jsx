import React from 'react';
import StatCard from '../components/StatCard';
import RecentRequests from '../components/RecentRequests';
import EarningsChart from '../components/EarningsChart';
import StatusToggle from '../components/StatusToggle';

export default function DashboardPage() {
  return (
    <div className="dashboard-content">
      <div className="stats-grid">
        <StatCard title="Daily Earnings" value="₱ 000.00" meta="+12.5% Vs Yesterday" metaType="positive" />
        <StatCard title="Completed Rides" value="00" meta="14 today 2.2/hour" metaType="highlight" />
        <StatCard title="Online Time" value="6h 32m" meta="Active for 88% of session" metaType="normal" />
      </div>

      <div className="middle-section">
        <RecentRequests />
        <EarningsChart />
      </div>

      <div className="bottom-controls">
        <StatusToggle />
      </div>
    </div>
  );
}
