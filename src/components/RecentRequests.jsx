import React from 'react';
import { User } from 'lucide-react';

export default function RecentRequests() {
  const requests = [
    {
      id: 1,
      name: 'Zoie Drizella Reyes',
      route: '727 Coffee & Co to SM Central Olongapo',
      price: '₱240.00'
    },
    {
      id: 2,
      name: 'Dame Un Curt',
      route: 'SM Central Olongapo to Gordon College',
      price: '₱150.00'
    },
    {
      id: 3,
      name: 'Jerald Pangan',
      route: 'Gordon College to Home',
      price: '₱20.00'
    }
  ];

  return (
    <div className="recent-requests-card">
      <h3 className="card-title">Recent Requests</h3>
      
      <div className="request-list">
        {requests.map(req => (
          <div key={req.id} className="request-item">
            <div className="request-avatar">
              <User size={20} />
            </div>
            <div className="request-info">
              <div className="request-name">{req.name}</div>
              <div className="request-route">{req.route}</div>
            </div>
            <div className="request-price">{req.price}</div>
            <button className="accept-btn">Accept</button>
          </div>
        ))}
      </div>
      
      <button className="view-all-btn">View All Requests</button>
    </div>
  );
}
