import React from 'react';
import { AlertTriangle, Clock3, MapPin, UsersRound } from 'lucide-react';
import KPIWidget from '../../components/KPIWidget';
import FunnelChart from '../../components/FunnelChart';
import { getAlerts, getBottlenecks, getFunnelData } from '../../services/patientService';

export default function AdminDashboard({ patients }) {
  const alerts = getAlerts(patients);
  const highRisk = patients.filter((p) => p.riesgo >= 0.7).length;
  const avgWait = Math.round(patients.reduce((sum, p) => sum + p.diasEspera, 0) / patients.length);
  const provinces = patients.filter((p) => p.procedencia !== 'Lima' && p.procedencia !== 'Villa El Salvador').length;

  return (
    <div className="page">
      <div className="page-title">
        <h2>Dashboard Ejecutivo</h2>
        <p>Indicadores de continuidad diagnóstica y priorización.</p>
      </div>

      <div className="kpi-grid four">
        <KPIWidget icon={UsersRound} label="Pacientes activas" value={patients.length} hint="Muestra demo" tone="purple" />
        <KPIWidget icon={AlertTriangle} label="Pacientes en riesgo" value={highRisk} hint="Riesgo alto" tone="red" />
        <KPIWidget icon={Clock3} label="Espera promedio" value={`${avgWait} días`} hint="Entre hitos" tone="orange" />
        <KPIWidget icon={MapPin} label="De provincia" value={provinces} hint="Barreras geográficas" tone="blue" />
      </div>

      <div className="admin-grid">
        <section className="chart-card">
          <h3>Embudo diagnóstico</h3>
          <FunnelChart data={getFunnelData()} />
        </section>

        <section className="chart-card">
          <h3>Cuellos de botella</h3>
          {getBottlenecks().map((b) => (
            <div key={b.service} className="bar-row">
              <span>{b.service}</span>
              <div><div style={{ width: `${Math.min(100, b.days * 3)}%` }} /></div>
              <strong>{b.days} días</strong>
            </div>
          ))}
        </section>
      </div>

      <section className="callout danger">
        <h3>Alertas activas: {alerts.length}</h3>
        <p>El gestor puede priorizar llamadas, navegación social, recordatorios e instrucciones accesibles.</p>
      </section>
    </div>
  );
}
