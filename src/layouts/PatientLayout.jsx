import React from 'react';
import { Activity, Bot, CalendarDays, HeartHandshake, Home, Languages, User } from 'lucide-react';

const menu = [
  { id: 'home', label: 'Inicio', icon: Home },
  { id: 'route', label: 'Mi ruta', icon: Activity },
  { id: 'appointments', label: 'Mis citas', icon: CalendarDays },
  { id: 'support', label: 'Bienestar y apoyo', icon: HeartHandshake },
  { id: 'bot', label: 'OncoBot', icon: Bot },
  { id: 'accessibility', label: 'Ayuda accesible', icon: Languages }
];

export default function PatientLayout({ children, active, setActive, onSwitch }) {
  return (
    <div className="portal-shell">
      <aside className="sidebar patient">
        <div className="logo">
          <div className="ribbon">🎀</div>
          <div>
            <h1>OncoRuta</h1>
            <span>Portal Paciente</span>
          </div>
        </div>
        <nav className="side-nav">
          {menu.map(({ id, label, icon: Icon }) => (
            <button key={id} className={active === id ? 'active' : ''} onClick={() => setActive(id)}>
              <Icon size={18} /> {label}
            </button>
          ))}
        </nav>
        <button className="switch-portal" onClick={onSwitch}>
          <User size={17} /> Cambiar a Gestor INEN
        </button>
        <div className="sidebar-note">
          Esta vista está pensada para orientar a la paciente con lenguaje simple, recordatorios y acompañamiento integral.
        </div>
      </aside>
      <main className="portal-main">{children}</main>
    </div>
  );
}
