import React, { useState } from 'react';

export default function StatusToggle() {
  const [status, setStatus] = useState('ONLINE'); // OFFLINE or ONLINE

  return (
    <div className="status-toggle">
      <div className={`toggle-indicator ${status.toLowerCase()}`}></div>
      <button 
        className={`status-toggle-btn ${status === 'OFFLINE' ? 'active-offline' : ''}`}
        onClick={() => setStatus('OFFLINE')}
      >
        OFFLINE
      </button>
      <button 
        className={`status-toggle-btn ${status === 'ONLINE' ? 'active-online' : ''}`}
        onClick={() => setStatus('ONLINE')}
      >
        ONLINE
      </button>
    </div>
  );
}
