import React from 'react';
import { Languages, Mic, Volume2, Type } from 'lucide-react';

export default function PatientAccessibility({ patient }) {
  return (
    <div className="page">
      <div className="page-title">
        <h2>Ayuda accesible e intercultural</h2>
        <p>Opciones para comprender mejor las indicaciones durante el proceso diagnóstico.</p>
      </div>

      <div className="access-grid">
        <div className="access-card"><Volume2 /><h3>Escuchar indicaciones</h3><p>Lectura en voz alta de la próxima cita y documentos.</p><button>Reproducir audio</button></div>
        <div className="access-card"><Languages /><h3>Quechua / Español sencillo</h3><p>Contenido adaptado para población intercultural.</p><button>Ver traducción</button></div>
        <div className="access-card"><Mic /><h3>Consulta por voz</h3><p>Soporte para pacientes con baja alfabetización digital.</p><button>Activar voz</button></div>
        <div className="access-card"><Type /><h3>Texto grande</h3><p>Mayor tamaño de letra y contraste para mejorar lectura.</p><button>Aumentar texto</button></div>
      </div>

      <section className="callout">
        <h3>Resumen para {patient.nombre}</h3>
        <p>Idioma preferente: {patient.idioma}. Barreras identificadas: {patient.condicion.join(', ')}.</p>
      </section>
    </div>
  );
}
