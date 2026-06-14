import React from 'react';
import { FileText, ShieldCheck } from 'lucide-react';

export default function AdminReports() {
  return (
    <div className="page">
      <div className="page-title">
        <h2>Reportes y arquitectura conceptual</h2>
        <p>Cómo se integraría OncoRuta sin reemplazar sistemas existentes.</p>
      </div>

      <div className="architecture">
        {[
          ['Sistemas INEN existentes', 'Registros de citas, exámenes y recorridos anonimizados'],
          ['Capa de interoperabilidad', 'API / carga de datos / normalización progresiva'],
          ['Motor OncoRuta', 'Ruta, riesgo, alertas y continuidad recomendada'],
          ['Portal Paciente', 'Orientación clara, OncoBot, recordatorios y accesibilidad'],
          ['Portal Gestor', 'Dashboard, alertas, priorización y reportes']
        ].map((n) => (
          <div className="arch-node" key={n[0]}>
            <strong>{n[0]}</strong>
            <p>{n[1]}</p>
          </div>
        ))}
      </div>

      <section className="callout">
        <h3><ShieldCheck size={18} /> Ética y alcance</h3>
        <p>No se usan datos reales. No se realiza diagnóstico automático. No se sustituye la decisión clínica ni se agenda de forma autónoma.</p>
      </section>

      <section className="callout">
        <h3><FileText size={18} /> Entregable hackatón</h3>
        <p>Demo navegable, funcional, con datos simulados y propuesta de interoperabilidad progresiva.</p>
      </section>
    </div>
  );
}
