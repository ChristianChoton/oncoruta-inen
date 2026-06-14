import React from 'react';
import { Check } from 'lucide-react';
import { formatDate } from '../services/patientService';

export default function Timeline({ patient }) {
  return (
    <div className="timeline">
      {patient.ruta.map((step, index) => (
        <div key={step.etapa} className={`timeline-item ${step.estado}`}>
          <div className="timeline-dot">
            {step.estado === 'completado' ? <Check size={16} /> : index + 1}
          </div>
          <div className="timeline-card">
            <div>
              <h3>{step.etapa}</h3>
              <p>{step.orientacion}</p>
            </div>
            <div className="timeline-meta">
              <span className={`status-pill ${step.estado}`}>{step.estado}</span>
              <small>{step.fecha ? formatDate(step.fecha) : 'Por programar'}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
