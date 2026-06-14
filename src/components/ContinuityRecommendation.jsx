import React, { useState } from 'react';
import { CalendarPlus, CheckCircle2, PhoneCall, UserCheck, UsersRound, ClipboardCheck } from 'lucide-react';
import { formatDate, getContinuityRecommendation } from '../services/patientService';

export default function ContinuityRecommendation({ patient }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [requested, setRequested] = useState(false);
  const rec = getContinuityRecommendation(patient);

  return (
    <div className="continuity-card gestor-only">
      <div className="continuity-title">
        <CalendarPlus size={28} />
        <div>
          <h3>Motor de continuidad recomendado</h3>
          <p>
            Módulo exclusivo para el Gestor INEN. No agenda de forma automática; sugiere el siguiente paso
            para validación del personal responsable.
          </p>
        </div>
      </div>

      <div className="gestor-warning">
        La paciente solo visualiza información confirmada. Las recomendaciones predictivas se muestran únicamente al personal gestor.
      </div>

      <div className="continuity-grid">
        <div>
          <span>Paciente</span>
          <strong>{patient.nombre}</strong>
        </div>
        <div>
          <span>Última etapa / actual</span>
          <strong>{rec.currentStep?.etapa}</strong>
        </div>
        <div>
          <span>Siguiente paso sugerido</span>
          <strong>{rec.nextStep?.etapa || 'Seguimiento'}</strong>
        </div>
        <div>
          <span>Riesgo / barreras</span>
          <strong>{Math.round(patient.riesgo * 100)}% · {patient.condicion.join(', ')}</strong>
        </div>
        <div className="wide">
          <span>Motivo</span>
          <strong>{rec.reason}</strong>
        </div>
      </div>

      <h4>Fechas sugeridas para validación</h4>
      <div className="date-options">
        {rec.suggestedDates.map((date) => (
          <button
            key={date}
            className={selectedDate === date ? 'active' : ''}
            onClick={() => setSelectedDate(date)}
          >
            <CheckCircle2 size={16} />
            {formatDate(date)}
          </button>
        ))}
      </div>

      <div className="continuity-actions">
        <button><UserCheck size={17} /> Priorizar caso</button>
        <button><PhoneCall size={17} /> Programar llamada</button>
        <button><UsersRound size={17} /> Activar trabajo social</button>
        <button><ClipboardCheck size={17} /> Derivar a navegación</button>
      </div>

      <button
        className="primary-action"
        onClick={() => setRequested(true)}
        disabled={!selectedDate}
      >
        Solicitar programación validada
      </button>

      {requested && (
        <div className="success-note">
          Solicitud registrada para validación del personal INEN. Fecha propuesta: {formatDate(selectedDate)}.
        </div>
      )}
    </div>
  );
}
