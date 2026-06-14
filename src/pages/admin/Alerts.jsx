import React from 'react';
import AlertCard from '../../components/AlertCard';
import { getAlerts } from '../../services/patientService';

export default function AdminAlerts({ patients, selectPatient }) {
  const alerts = getAlerts(patients);
  return (
    <div className="page">
      <div className="page-title">
        <h2>Alertas inteligentes</h2>
        <p>Priorización multinivel para reducir pérdida de seguimiento.</p>
      </div>

      <div className="alert-list">
        {alerts.map((alert) => (
          <AlertCard key={alert.id} alert={alert} onClick={() => selectPatient(alert.patient)} />
        ))}
      </div>
    </div>
  );
}
