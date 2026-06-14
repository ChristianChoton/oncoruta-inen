import React from 'react';
import Timeline from '../../components/Timeline';
import { getProgress } from '../../services/patientService';

export default function PatientRoute({ patient }) {
  const progress = getProgress(patient);
  return (
    <div className="page">
      <div className="page-title">
        <h2>Mi ruta diagnóstica</h2>
        <p>Visualiza tu avance y el significado de cada etapa.</p>
      </div>
      <div className="progress-line"><div style={{ width: `${progress}%` }} /></div>
      <Timeline patient={patient} />
    </div>
  );
}
