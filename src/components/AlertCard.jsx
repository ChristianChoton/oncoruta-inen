import React from 'react';
import { AlertTriangle, ChevronRight } from 'lucide-react';

export default function AlertCard({ alert, onClick }) {
  return (
    <button className={`alert-card ${alert.color}`} onClick={onClick}>
      <AlertTriangle size={24} />
      <div>
        <span>{alert.type}</span>
        <strong>{alert.title}</strong>
        <p>{alert.description}</p>
        <small>{alert.action}</small>
      </div>
      <ChevronRight size={20} />
    </button>
  );
}
