import React from 'react';

export default function StatCard({ title, value, meta, metaType }) {
  return (
    <div className="stat-card">
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-meta">
        {meta && (
          <span className={metaType === 'positive' ? 'meta-positive' : 'meta-highlight'}>
            {meta.split(' ')[0]}
          </span>
        )}
        <span>{meta ? meta.split(' ').slice(1).join(' ') : ''}</span>
      </div>
    </div>
  );
}
