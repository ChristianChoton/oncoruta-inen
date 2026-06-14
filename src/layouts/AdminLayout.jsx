import React from 'react';
import { AlertTriangle, BarChart3, FileText, HeartHandshake, Network, UsersRound } from 'lucide-react';

const menu = [
  { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
  { id: 'patients', label: 'Pacientes', icon: UsersRound },
  { id: 'alerts', label: 'Alertas', icon: AlertTriangle },
  { id: 'continuity', label: 'Continuidad', icon: Network },
  { id: 'support', label: 'Soporte integral', icon: HeartHandshake },
  { id: 'reports', label: 'Reportes', icon: FileText }
];

export default function AdminLayout({ children, active, setActive, onSwitch }) {
  return (
    <div className="portal-shell">
      <aside className="sidebar admin">
        <div className="logo">
          <div className="ribbon">🏥</div>
          <div>
            <h1>OncoRuta</h1>
            <span>Gestor INEN</span>
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
          Cambiar a Portal Paciente
        </button>
        <div className="sidebar-note">
          Esta vista prioriza continuidad diagnóstica, alertas, soporte integral y seguimiento institucional.
        </div>
      </aside>
      <main className="portal-main">{children}</main>
    </div>
  );
}
