import React, { useRef, useState, useEffect } from 'react';
import { Bot, Send, User } from 'lucide-react';
import { getCurrentStep, riskMeta, formatDate } from '../services/patientService';

export default function OncoBotChat({ patient }) {
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: `Hola, soy OncoBot. Puedo orientarte sobre la ruta diagnóstica de ${patient.nombre}, usando información clara y validada.`,
      time: '10:30'
    }
  ]);
  const [input, setInput] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.scrollTo({ top: ref.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const answer = (text) => {
    const q = text.toLowerCase();
    const current = getCurrentStep(patient);
    const risk = riskMeta(patient.riesgo);

    if (q.includes('siguiente') || q.includes('paso') || q.includes('contin')) {
      return `Tu etapa actual registrada es ${current?.etapa}. Orientación general: ${current?.orientacion}. El siguiente paso será confirmado por el personal de salud.`;
    }
    if (q.includes('cita') || q.includes('fecha')) {
      return `Tu próxima cita registrada figura para ${formatDate(patient.proximaCita)} en el servicio de ${patient.etapaActual}.`;
    }
    if (q.includes('documento') || q.includes('llevar')) {
      return 'Debes llevar DNI, referencia, hoja de cita, resultados previos y documentos de seguro/SIS si corresponde.';
    }
    if (q.includes('riesgo') || q.includes('abandono') || q.includes('discontinuidad')) {
      return `OncoRuta identifica factores que podrían afectar la continuidad, como: ${patient.condicion.join(', ')}. Esta información ayuda al equipo gestor a priorizar acompañamiento.`;
    }
    if (q.includes('programar') || q.includes('reprogramar')) {
      return 'No puedo programar ni reprogramar citas. Puedo orientarte y ayudarte a contactar al área de navegación o al personal responsable para validar tu solicitud.';
    }
    if (q.includes('quechua') || q.includes('audio') || q.includes('idioma')) {
      return 'Puedo mostrar las instrucciones en español sencillo, quechua o lectura por audio para mejorar la comprensión.';
    }
    return 'Puedes preguntarme por tu etapa actual, documentos, próxima cita, orientación general o accesibilidad.';
  };

  const submit = (e) => {
    e.preventDefault();
    const value = input.trim();
    if (!value) return;
    const time = new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' });
    setMessages((prev) => [
      ...prev,
      { from: 'user', text: value, time },
      { from: 'bot', text: answer(value), time }
    ]);
    setInput('');
  };

  const prompts = ['¿Cuál es mi etapa actual?', '¿Qué documentos debo llevar?', '¿Cuándo es mi cita?', 'Necesito reprogramar'];

  return (
    <div className="chat-module">
      <div className="chat-head">
        <div className="bot-icon"><Bot size={25} /></div>
        <div>
          <h2>OncoBot</h2>
          <p>Orientador virtual. No diagnostica, no agenda y no reemplaza al personal médico.</p>
        </div>
      </div>

      <div className="quick-prompts">
        {prompts.map((prompt) => (
          <button key={prompt} onClick={() => setInput(prompt)}>{prompt}</button>
        ))}
      </div>

      <div className="chat-messages" ref={ref}>
        {messages.map((m, i) => (
          <div key={i} className={`message-row ${m.from}`}>
            {m.from === 'bot' && <div className="message-avatar"><Bot size={16} /></div>}
            <div className="message-bubble">
              <p>{m.text}</p>
              <span>{m.time}</span>
            </div>
            {m.from === 'user' && <div className="message-avatar user"><User size={16} /></div>}
          </div>
        ))}
      </div>

      <form onSubmit={submit} className="chat-input">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Escribe tu pregunta..." />
        <button type="submit"><Send size={18} /></button>
      </form>
    </div>
  );
}
