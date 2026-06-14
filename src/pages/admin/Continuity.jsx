import React, { useState } from 'react';
import ContinuityRecommendation from '../../components/ContinuityRecommendation';
import RiskBadge from '../../components/RiskBadge';

export default function AdminContinuity({ patients }) {
  const [selected, setSelected] = useState(patients[0]);

  return (
    <div className="page">
      <div className="page-title">
        <h2>Continuidad diagnóstica inteligente</h2>
        <p>
          Recomendaciones internas para priorizar pacientes, reducir tiempos muertos y evitar pérdida de seguimiento.
          Este módulo no agenda automáticamente y no reemplaza la decisión clínica.
        </p>
      </div>

      <div className="continuity-layout">
        <div className="patient-selector">
          {patients.map((p) => (
            <button key={p.id} className={selected.id === p.id ? 'active' : ''} onClick={() => setSelected(p)}>
              <strong>{p.nombre}</strong>
              <span>{p.etapaActual} · <RiskBadge value={p.riesgo} /></span>
            </button>
          ))}
        </div>
        <ContinuityRecommendation patient={selected} />
      </div>
    </div>
  );
}
