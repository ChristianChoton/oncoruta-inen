import React from 'react';
import { riskMeta } from '../services/patientService';

export default function RiskBadge({ value }) {
  const meta = riskMeta(value);
  return (
    <span className={`risk-badge ${meta.className}`}>
      {meta.label} · {Math.round(value * 100)}%
    </span>
  );
}
