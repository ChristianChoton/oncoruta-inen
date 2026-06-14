import React, { useState } from 'react';
import { HeartHandshake, PhoneCall, ShieldCheck, SmilePlus, UserRoundCheck } from 'lucide-react';

export default function PatientSupport({ patient }) {
  const [pain, setPain] = useState(patient.soporte?.dolor || 0);
  const [emotion, setEmotion] = useState(patient.soporte?.estadoEmocional || 'Preocupada');
  const [request, setRequest] = useState(false);

  const painLabel = pain >= 8 ? 'Dolor intenso' : pain >= 5 ? 'Dolor moderado' : pain > 0 ? 'Dolor leve' : 'Sin dolor reportado';

  return (
    <div className="page">
      <div className="page-title">
        <h2>Bienestar y apoyo</h2>
        <p>
          Espacio para reportar dolor, solicitar orientación emocional y registrar comunicación familiar autorizada.
          Esta información será revisada por el personal gestor.
        </p>
      </div>

      <section className="support-hero">
        <HeartHandshake size={48} />
        <div>
          <span className="eyebrow">Acompañamiento integral</span>
          <h3>¿Cómo te sientes hoy, {patient.nombre}?</h3>
          <p>No reemplaza una consulta médica. Ayuda a identificar necesidades de apoyo durante tu ruta diagnóstica.</p>
        </div>
      </section>

      <div className="support-grid">
        <div className="support-card">
          <div className="support-card-head">
            <SmilePlus />
            <div>
              <h3>Reportar dolor o malestar</h3>
              <p>Selecciona un nivel de 0 a 10.</p>
            </div>
          </div>

          <div className="pain-scale">
            {[0,1,2,3,4,5,6,7,8,9,10].map((value) => (
              <button key={value} className={pain === value ? 'active' : ''} onClick={() => setPain(value)}>
                {value}
              </button>
            ))}
          </div>
          <strong className="pain-label">{painLabel}</strong>
        </div>

        <div className="support-card">
          <div className="support-card-head">
            <HeartHandshake />
            <div>
              <h3>Apoyo psicológico</h3>
              <p>Indica tu estado emocional para recibir orientación.</p>
            </div>
          </div>

          <div className="emotion-options">
            {['Tranquila', 'Preocupada', 'Muy ansiosa', 'Triste', 'Necesito hablar con alguien'].map((item) => (
              <button key={item} className={emotion === item ? 'active' : ''} onClick={() => setEmotion(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="family-card">
        <UserRoundCheck size={34} />
        <div>
          <span>Familiar autorizado</span>
          <h3>
            {patient.soporte?.familiarAutorizado
              ? `${patient.soporte.familiarNombre} · ${patient.soporte.familiarParentesco}`
              : 'Sin familiar autorizado registrado'}
          </h3>
          <p>
            La comunicación a familiares requiere autorización de la paciente. Puedes solicitar actualización o confirmación.
          </p>
        </div>
        <button>Actualizar autorización</button>
      </section>

      <section className="support-actions-card">
        <ShieldCheck size={24} />
        <div>
          <h3>Solicitud de apoyo</h3>
          <p>El personal responsable revisará tu reporte y definirá si corresponde llamada, orientación psicológica o derivación.</p>
        </div>
        <button onClick={() => setRequest(true)}>
          <PhoneCall size={17} /> Solicitar orientación
        </button>
      </section>

      {request && (
        <div className="success-note">
          Solicitud registrada para revisión del equipo gestor. Reporte: dolor {pain}/10, estado emocional: {emotion}.
        </div>
      )}
    </div>
  );
}
