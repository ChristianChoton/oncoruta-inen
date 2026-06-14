import React from 'react';

export default function FunnelChart({ data }) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="funnel">
      {data.map((item) => (
        <div key={item.label} className="funnel-row">
          <span>{item.label}</span>
          <div className="funnel-bar">
            <div style={{ width: `${(item.value / max) * 100}%` }} />
          </div>
          <strong>{item.value}</strong>
        </div>
      ))}
    </div>
  );
}
