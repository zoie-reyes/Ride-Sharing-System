import React from 'react';
import { PlusCircle, CreditCard, Banknote, Car, Plus, ChevronRight } from 'lucide-react';
import './Payments.css';

const Payments = () => {
  const transactions = [
    {
      id: 1,
      type: 'ride',
      title: 'Ride to SM City Olongapo',
      date: 'Feb 12, 2026 • 11:23 AM',
      amount: '- ₱240.00',
      method: 'Visa •••• 4242',
      isNegative: true
    },
    {
      id: 2,
      type: 'add',
      title: 'Funds Added',
      date: 'Feb 12, 2026 • 10:00 AM',
      amount: '+ ₱500.00',
      method: 'Visa •••• 4242',
      isNegative: false
    },
    {
      id: 3,
      type: 'ride',
      title: 'Ride to Victory Liner Olongapo Terminal',
      date: 'Jan 11, 2026 • 10:15 AM',
      amount: '- ₱150.00',
      method: 'CASH',
      isNegative: true
    },
    {
      id: 4,
      type: 'ride',
      title: 'Ride to 727 Coffee & Co',
      date: 'Jan 4, 2026 • 3:45 PM',
      amount: '- ₱300.00',
      method: 'Visa •••• 4242',
      isNegative: true
    }
  ];

  return (
    <div className="payments-container">
      <div className="payments-header-bar">
        <h2>Payments</h2>
      </div>

      <div className="payments-content">
        {/* Balance Card */}
        <div className="balance-card">
          <div className="balance-info">
            <span className="balance-label">CURRENT BALANCE</span>
            <div className="balance-amount">
              <span className="currency-symbol">₱</span>
              <span className="amount">260.00</span>
              <span className="currency-code">PHP</span>
            </div>
            <button className="add-balance-btn">Add Balance</button>
          </div>
        </div>

        {/* Saved Methods */}
        <div className="payments-section">
          <div className="section-header">
            <h3>Saved Methods</h3>
            <button className="add-method-btn">
              <PlusCircle size={16} />
              <span>Add Payment Method</span>
            </button>
          </div>
          
          <div className="methods-list">
            <div className="method-card">
              <div className="method-icon-container">
                <CreditCard size={20} className="blue-icon" />
              </div>
              <div className="method-details">
                <span className="method-name">•••• 4242</span>
                <span className="method-desc">Visa Corporate • Expires 7/29</span>
              </div>
              <div className="method-actions">
                <span className="default-badge">DEFAULT</span>
                <ChevronRight size={20} className="text-muted" />
              </div>
            </div>

            <div className="method-card">
              <div className="method-icon-container">
                <Banknote size={20} className="blue-icon" />
              </div>
              <div className="method-details">
                <span className="method-name">CASH</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="payments-section">
          <div className="section-header">
            <h3>Recent Transactions</h3>
          </div>
          
          <div className="transactions-list">
            {transactions.map(transaction => (
              <div key={transaction.id} className="transaction-item">
                <div className={`transaction-icon-container ${transaction.type}`}>
                  {transaction.type === 'ride' ? (
                    <Car size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </div>
                
                <div className="transaction-info">
                  <span className="transaction-title">{transaction.title}</span>
                  <span className="transaction-date">{transaction.date}</span>
                </div>
                
                <div className="transaction-amount-info">
                  <span className={`transaction-amount ${transaction.isNegative ? 'negative' : 'positive'}`}>
                    {transaction.amount}
                  </span>
                  <span className="transaction-method">{transaction.method}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
