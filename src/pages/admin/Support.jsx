import React, { useState } from 'react';
import { Brain, HeartPulse, PhoneCall, ShieldCheck, UserRoundCheck, UsersRound } from 'lucide-react';
import KPIWidget from '../../components/KPIWidget';
import RiskBadge from '../../components/RiskBadge';
import { formatDate, getSupportNeeds, getSupportStats } from '../../services/patientService';

export default function AdminSupport({ patients }) {
  const needs = getSupportNeeds(patients);
  const stats = getSupportStats(patients);
  const [selected, setSelected] = useState(needs[0]?.patient || patients[0]);
  const selectedNeed = needs.find((n) => n.patient.id === selected.id);

  return (
    <div className="page">
      <div className="page-title">
        <h2>Soporte integral</h2>
        <p>
          Detección de necesidades transversales: dolor, apoyo psicológico y comunicación familiar autorizada.
          No prescribe tratamiento; activa alertas y derivaciones para validación del personal responsable.
        </p>
      </div>

      <div className="kpi-grid four">
        <KPIWidget icon={HeartPulse} label="Dolor severo" value={stats.painSevere} hint="Dolor ≥ 7/10" tone="red" />
        <KPIWidget icon={Brain} label="Apoyo psicológico" value={stats.psychology} hint="Solicitudes activas" tone="purple" />
        <KPIWidget icon={UserRoundCheck} label="Sin familiar" value={stats.noFamily} hint="Requiere autorización" tone="orange" />
        <KPIWidget icon={UsersRound} label="Comunicación familiar" value={stats.familyCommunication} hint="Solicitudes registradas" tone="blue" />
      </div>

      <div className="support-admin-layout">
        <section className="table-card">
          <h3>Pacientes con necesidad de soporte</h3>
          <div className="support-need-list">
            {needs.map((item) => (
              <button
                key={item.patient.id}
                className={selected.id === item.patient.id ? 'active' : ''}
                onClick={() => setSelected(item.patient)}
              >
                <div>
                  <strong>{item.patient.nombre}</strong>
                  <span>{item.patient.procedencia} · {item.patient.etapaActual}</span>
                </div>
                <RiskBadge value={item.patient.riesgo} />
              </button>
            ))}
          </div>
        </section>

        <section className="support-detail-card">
          <div className="support-detail-head">
            <div>
              <span>Ficha de soporte</span>
              <h3>{selected.nombre}</h3>
              <p>DNI {selected.dni} · {selected.tipoCancer} · {selected.procedencia}</p>
            </div>
            <RiskBadge value={selected.riesgo} />
          </div>

          <div className="support-detail-grid">
            <div>
              <span>Dolor reportado</span>
              <strong>{selected.soporte?.dolor ?? 0}/10</strong>
            </div>
            <div>
              <span>Estado emocional</span>
              <strong>{selected.soporte?.estadoEmocional || 'No reportado'}</strong>
            </div>
            <div>
              <span>Último reporte</span>
              <strong>{formatDate(selected.soporte?.ultimoReporte)}</strong>
            </div>
            <div>
              <span>Familiar autorizado</span>
              <strong>
                {selected.soporte?.familiarAutorizado
                  ? `${selected.soporte.familiarNombre} (${selected.soporte.familiarParentesco})`
                  : 'No registrado'}
              </strong>
            </div>
          </div>

          <div className="gestor-warning">
            Acción sugerida: {selectedNeed?.recommendedAction || 'Mantener seguimiento y orientación.'}
          </div>

          <div className="continuity-actions">
            <button><HeartPulse size={17} /> Derivar dolor</button>
            <button><Brain size={17} /> Apoyo psicológico</button>
            <button><PhoneCall size={17} /> Llamar paciente</button>
            <button><ShieldCheck size={17} /> Validar familiar</button>
          </div>

          <div className="support-observation">
            <strong>Observación:</strong>
            <p>{selected.soporte?.observacion || 'Sin observaciones registradas.'}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
