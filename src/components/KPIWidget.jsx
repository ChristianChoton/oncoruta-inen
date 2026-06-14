import React from 'react';

export default function KPIWidget({ icon: Icon, label, value, hint, tone = 'purple' }) {
  return (
    <div className="kpi-card">
      <div className={`kpi-icon ${tone}`}>{Icon && <Icon size={23} />}</div>
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
        <small>{hint}</small>
      </div>
    </div>
  );
}
