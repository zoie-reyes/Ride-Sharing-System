import React from 'react';
import { Search, ChevronDown, MoreVertical, Wallet } from 'lucide-react';
import './Pages.css';

export default function PaymentsPage() {
  const transactions = [
    { id: '#ID-0000', rider: 'Paolo Renz Arceo', date: 'Feb 12, 2026 • 11:50', amount: '₱240.00', status: 'COMPLETED' },
    { id: '#ID-0000', rider: 'Paolo Renz Arceo', date: 'Feb 12, 2026 • 11:50', amount: '₱240.00', status: 'COMPLETED' },
    { id: '#ID-0000', rider: 'Joven Sacay', date: 'Jan 21, 2026 • 18:00', amount: '₱500.00', status: 'REFUNDED' },
    { id: '#ID-0000', rider: 'Joven Sacay', date: 'Jan 21, 2028 • 18:00', amount: '₱500.00', status: 'REFUNDED' },
    { id: '#ID-0000', rider: 'Aaron Selubo', date: 'Jan 11, 2026 • 10:15', amount: '₱150.00', status: 'PROCESSING' },
    { id: '#ID-0000', rider: 'Aaron Selubo', date: 'Jan 11, 2026 • 10:15', amount: '₱150.00', status: 'PROCESSING' },
    { id: '#ID-0000', rider: 'Jommel Yce', date: 'Jan 4, 2026 • 11:15', amount: '₱350.00', status: 'COMPLETED' },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'COMPLETED': return 'status-badge success';
      case 'REFUNDED': return 'status-badge danger';
      case 'PROCESSING': return 'status-badge warning';
      default: return 'status-badge';
    }
  };

  return (
    <div className="page-content">
      <div className="monthly-earnings-card">
        <div>
          <div className="earnings-title">MONTHLY EARNINGS</div>
          <div className="earnings-value">₱5,810.00</div>
        </div>
        <div className="wallet-icon"><Wallet size={32} color="#1e293b"/></div>
      </div>

      <div className="transactions-section mt-6">
        <div className="table-header">
          <h3>Transaction History</h3>
          <div className="table-actions">
            <div className="search-box small">
              <Search size={14} color="#64748b"/>
              <input type="text" placeholder="Search Transaction ID, Driver..." />
            </div>
            <button className="filter-btn small">All Status <ChevronDown size={14} /></button>
            <button className="filter-btn icon-only"><ChevronDown size={14}/></button>
          </div>
        </div>

        <table className="transactions-table">
          <thead>
            <tr>
              <th>TRANSACTION ID</th>
              <th>RIDER</th>
              <th>DATE & TIME</th>
              <th>AMOUNT</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, idx) => (
              <tr key={idx}>
                <td className="tx-id">{tx.id}</td>
                <td>
                  <div className="table-rider">
                    <div className="table-avatar"></div>
                    {tx.rider}
                  </div>
                </td>
                <td className="tx-date">{tx.date}</td>
                <td className="tx-amount">{tx.amount}</td>
                <td><span className={getStatusColor(tx.status)}>{tx.status}</span></td>
                <td><button className="btn-icon"><MoreVertical size={16} /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
