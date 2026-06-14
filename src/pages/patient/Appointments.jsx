import React from 'react';
import { CalendarCheck, Clock3, FileText, HelpCircle, Info } from 'lucide-react';
import { daysUntil, formatDate } from '../../services/patientService';

export default function PatientAppointments({ patient }) {
  const days = daysUntil(patient.proximaCita);

  const estadoTexto =
    days < 0
      ? 'Tu cita figura como vencida. Acércate o comunícate con el área correspondiente para recibir orientación.'
      : days === 0
        ? 'Tu cita es hoy. Llega con anticipación y lleva tus documentos.'
        : `Faltan ${days} día(s). Revisa tus documentos y confirma tu asistencia.`;

  return (
    <div className="page">
      <div className="page-title">
        <h2>Mis citas</h2>
        <p>Información validada y comprensible para mantener la continuidad de tu atención.</p>
      </div>

      <section className="appointment-card">
        <CalendarCheck size={44} />
        <div>
          <span>Próxima cita registrada</span>
          <h3>{patient.etapaActual}</h3>
          <p>{formatDate(patient.proximaCita)} · {estadoTexto}</p>
        </div>
        <span className={`appointment-status ${patient.estadoCita}`}>{patient.estadoCita}</span>
      </section>

      <div className="kpi-grid two">
        <div className="info-panel">
          <Clock3 />
          <h3>Antes de acudir</h3>
          <p>Llega 20 minutos antes, verifica tu documento de identidad y lleva tus resultados anteriores.</p>
        </div>
        <div className="info-panel">
          <FileText />
          <h3>Documentos</h3>
          <p>DNI, referencia, hoja de cita, resultados previos y documentos de seguro/SIS si corresponde.</p>
        </div>
      </div>

      <section className="patient-next-step-card">
        <Info size={26} />
        <div>
          <h3>¿Y después qué sigue?</h3>
          <p>
            El personal de salud validará tu siguiente paso y te informará oportunamente. OncoRuta te mostrará
            información confirmada para evitar confusiones con fechas o procedimientos no validados.
          </p>
        </div>
      </section>

      <section className="callout">
        <h3><HelpCircle size={18} /> ¿Necesitas orientación?</h3>
        <p>
          Puedes consultar a OncoBot sobre documentos, fecha de cita, etapa actual o indicaciones generales.
          La programación o reprogramación oficial será validada por el personal del INEN.
        </p>
      </section>
    </div>
  );
}
