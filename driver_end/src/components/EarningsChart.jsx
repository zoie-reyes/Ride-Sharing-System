import React, { useState } from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function EarningsChart() {
  const [timeframe, setTimeframe] = useState('7 DAYS');
  
  const data = [
    { name: 'MON', value: 120, secondary: 150 },
    { name: 'TUE', value: 180, secondary: 220 },
    { name: 'WED', value: 150, secondary: 180 },
    { name: 'THU', value: 280, secondary: 310 },
    { name: 'FRI', value: 240, secondary: 260 },
    { name: 'SAT', value: 320, secondary: 320 },
    { name: 'SUN', value: 90, secondary: 130 },
  ];

  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <div className="chart-subtitle">Weekly Performance Vector</div>
          <div className="chart-title">Earnings Trend: Last 7 Days</div>
        </div>
        <div className="chart-toggles">
          <button 
            className={`toggle-btn ${timeframe === '7 DAYS' ? 'active' : ''}`}
            onClick={() => setTimeframe('7 DAYS')}
          >
            7 DAYS
          </button>
          <button 
            className={`toggle-btn ${timeframe === '30 DAYS' ? 'active' : ''}`}
            onClick={() => setTimeframe('30 DAYS')}
          >
            30 DAYS
          </button>
        </div>
      </div>
      
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 10 }}
              dy={10}
            />
            <Tooltip 
              cursor={{ fill: 'rgba(255,255,255,0.05)' }}
              contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
            />
            {/* Background Bars (Darker) */}
            <Bar dataKey="secondary" fill="#334155" radius={[4, 4, 0, 0]} />
            {/* Foreground Bars (Lighter/Accent) */}
            <Bar dataKey="value" fill="#a5b4fc" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
