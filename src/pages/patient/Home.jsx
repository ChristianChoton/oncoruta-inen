import React from 'react';
import { Activity, CalendarDays, FileText, HeartPulse, MapPin } from 'lucide-react';
import KPIWidget from '../../components/KPIWidget';
import RiskBadge from '../../components/RiskBadge';
import { formatDate, getCurrentStep, getProgress } from '../../services/patientService';

export default function PatientHome({ patient, setPage }) {
  const current = getCurrentStep(patient);
  const progress = getProgress(patient);

  return (
    <div className="page">
      <section className="patient-hero">
        <div className="hero-avatar"><HeartPulse size={52} /></div>
        <div>
          <span className="eyebrow">Bienvenida</span>
          <h2>Hola, {patient.nombre}</h2>
          <p>
            Tu siguiente paso es <strong>{current?.etapa}</strong>. Esta demo te muestra tu ruta diagnóstica, citas y orientación simple.
          </p>
          <div className="hero-meta">
            <span><MapPin size={16} /> {patient.procedencia}</span>
            <span>Idioma: {patient.idioma}</span>
            <RiskBadge value={patient.riesgo} />
          </div>
        </div>
        <div className="progress-orb" style={{ '--value': `${progress}%` }}>
          <strong>{progress}%</strong>
          <span>avance</span>
        </div>
      </section>

      <div className="kpi-grid">
        <KPIWidget icon={CalendarDays} label="Próxima cita" value={formatDate(patient.proximaCita)} hint={patient.etapaActual} tone="orange" />
        <KPIWidget icon={Activity} label="Etapa actual" value={current?.etapa} hint="Proceso diagnóstico" tone="purple" />
        <KPIWidget icon={FileText} label="Documentos" value="DNI + referencia" hint="Llevar resultados previos" tone="blue" />
      </div>

      <section className="callout">
        <h3>Orientación rápida</h3>
        <p>{current?.orientacion}</p>
        <div className="callout-actions">
          <button onClick={() => setPage('route')}>Ver mi ruta</button>
          <button onClick={() => setPage('support')} className="secondary">Bienestar y apoyo</button>
          <button onClick={() => setPage('bot')} className="secondary">Preguntar a OncoBot</button>
        </div>
      </section>
    </div>
  );
}
