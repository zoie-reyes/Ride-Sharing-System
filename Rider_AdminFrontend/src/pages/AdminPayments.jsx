import React from 'react';
import { Wallet, ClipboardList, Percent, Search, Filter, MoreVertical, ClipboardX } from 'lucide-react';
import './AdminPayments.css';

const AdminPayments = () => {
  return (
    <div className="admin-payments">
      <div className="admin-page-header">
        Payment Management
      </div>
      
      <div className="admin-page-content">
        <div className="payments-top-cards">
          <div className="payment-card revenue-card">
            <div className="payment-card-content">
              <span className="payment-card-label">TOTAL PLATFORM REVENUE</span>
              <span className="payment-card-value">₱850,910.45</span>
            </div>
            <div className="payment-card-icon pink-icon">
              <Wallet size={32} />
            </div>
          </div>

          <div className="payment-card">
            <div className="payment-card-icon-small blue-bg">
              <ClipboardList size={18} />
            </div>
            <div className="payment-card-content">
              <span className="payment-card-label">PENDING PAYOUTS</span>
              <span className="payment-card-value sm">₱4,540</span>
              <span className="payment-card-subtext">10 drivers awaiting</span>
            </div>
          </div>

          <div className="payment-card">
            <div className="payment-card-icon-small blue-bg">
              <Percent size={18} />
            </div>
            <div className="payment-card-content">
              <span className="payment-card-label">COMMISSION RATE</span>
              <span className="payment-card-value sm">16.5%</span>
            </div>
          </div>
        </div>

        <div className="transactions-section">
          <div className="transactions-header">
            <h3>Transaction History</h3>
            <div className="transactions-actions">
              <div className="search-bar">
                <Search size={16} className="search-icon" />
                <input type="text" placeholder="Search Transaction ID, Driver..." />
              </div>
              <div className="status-filter">
                <span>All Status ⌄</span>
              </div>
              <button className="filter-btn">
                <Filter size={16} />
              </button>
            </div>
          </div>

          <div className="transactions-table-container">
            <table className="transactions-table">
              <thead>
                <tr>
                  <th>TRANSACTION ID</th>
                  <th>DRIVER</th>
                  <th>DATE & TIME</th>
                  <th>AMOUNT</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tx-id">#ID-0000</td>
                  <td>
                    <div className="driver-info">
                      <div className="driver-avatar"></div>
                      <span>Paolo Renz Arceo</span>
                    </div>
                  </td>
                  <td className="tx-date">Feb 12, 2026 • 11:50</td>
                  <td className="tx-amount">₱240.00</td>
                  <td><span className="status-badge completed">COMPLETED</span></td>
                  <td><button className="action-btn"><MoreVertical size={16}/></button></td>
                </tr>
                <tr>
                  <td className="tx-id">#ID-0000</td>
                  <td>
                    <div className="driver-info">
                      <div className="driver-avatar"></div>
                      <span>Joven Sacay</span>
                    </div>
                  </td>
                  <td className="tx-date">Jan 21, 2026 • 18:00</td>
                  <td className="tx-amount">₱500.00</td>
                  <td><span className="status-badge refunded">REFUNDED</span></td>
                  <td><button className="action-btn"><MoreVertical size={16}/></button></td>
                </tr>
                <tr>
                  <td className="tx-id">#ID-0000</td>
                  <td>
                    <div className="driver-info">
                      <div className="driver-avatar"></div>
                      <span>Aaron Selubo</span>
                    </div>
                  </td>
                  <td className="tx-date">Jan 11, 2026 • 10:15</td>
                  <td className="tx-amount">₱150.00</td>
                  <td><span className="status-badge processing">PROCESSING</span></td>
                  <td><button className="action-btn"><MoreVertical size={16}/></button></td>
                </tr>
                <tr>
                  <td className="tx-id">#ID-0000</td>
                  <td>
                    <div className="driver-info">
                      <div className="driver-avatar"></div>
                      <span>Jommel Yee</span>
                    </div>
                  </td>
                  <td className="tx-date">Jan 4, 2026 • 11:15</td>
                  <td className="tx-amount">₱350.00</td>
                  <td><span className="status-badge completed">COMPLETED</span></td>
                  <td><button className="action-btn"><MoreVertical size={16}/></button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="refunds-section">
          <div className="refunds-header">
            <div className="refunds-title-area">
              <ClipboardX className="refund-icon" size={20} />
              <h3>Refund Requests</h3>
            </div>
            <span className="new-badge">3 NEW</span>
          </div>
          
          <div className="refund-list">
            <div className="refund-item">
              <div className="refund-details">
                <h4>Ride #RIDE-0000</h4>
                <p>Requested by: Zoie Drizella Reyes (Passenger)</p>
              </div>
              <div className="refund-action">
                <span className="refund-amount">-₱240.00</span>
                <button className="review-btn">REVIEW</button>
              </div>
            </div>
            <div className="refund-item">
              <div className="refund-details">
                <h4>Ride #RIDE-0000</h4>
                <p>Requested by: Curt Mayuga (Passenger)</p>
              </div>
              <div className="refund-action">
                <span className="refund-amount">-₱500.00</span>
                <button className="review-btn">REVIEW</button>
              </div>
            </div>
            <div className="refund-item">
              <div className="refund-details">
                <h4>Ride #RIDE-0000</h4>
                <p>Requested by: Jerald Pangan (Passenger)</p>
              </div>
              <div className="refund-action">
                <span className="refund-amount">-₱150.00</span>
                <button className="review-btn">REVIEW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPayments;
