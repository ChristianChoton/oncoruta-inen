import React, { useState } from 'react';
import PatientLayout from './layouts/PatientLayout';
import AdminLayout from './layouts/AdminLayout';
import PatientHome from './pages/patient/Home';
import PatientRoute from './pages/patient/Route';
import PatientAppointments from './pages/patient/Appointments';
import PatientSupport from './pages/patient/Support';
import PatientOncoBot from './pages/patient/OncoBot';
import PatientAccessibility from './pages/patient/Accessibility';
import AdminDashboard from './pages/admin/Dashboard';
import AdminPatients from './pages/admin/Patients';
import AdminAlerts from './pages/admin/Alerts';
import AdminContinuity from './pages/admin/Continuity';
import AdminSupport from './pages/admin/Support';
import AdminReports from './pages/admin/Reports';
import { getPatients } from './services/patientService';

export default function App() {
  const patients = getPatients();
  const [portal, setPortal] = useState('patient');
  const [patientPage, setPatientPage] = useState('home');
  const [adminPage, setAdminPage] = useState('dashboard');
  const [selectedPatient, setSelectedPatient] = useState(patients[0]);

  const selectPatientFromAdmin = (patient) => {
    setSelectedPatient(patient);
    setPortal('patient');
    setPatientPage('home');
  };

  if (portal === 'patient') {
    return (
      <PatientLayout active={patientPage} setActive={setPatientPage} onSwitch={() => setPortal('admin')}>
        <header className="topbar">
          <div>
            <h2>Portal Paciente</h2>
            <p>Experiencia de diagnóstico oportuno, inclusivo, intercultural y con acompañamiento integral.</p>
          </div>
          <select value={selectedPatient.id} onChange={(e) => setSelectedPatient(patients.find((p) => p.id === Number(e.target.value)))}>
            {patients.map((p) => <option key={p.id} value={p.id}>{p.nombre}</option>)}
          </select>
        </header>

        {patientPage === 'home' && <PatientHome patient={selectedPatient} setPage={setPatientPage} />}
        {patientPage === 'route' && <PatientRoute patient={selectedPatient} />}
        {patientPage === 'appointments' && <PatientAppointments patient={selectedPatient} />}
        {patientPage === 'support' && <PatientSupport patient={selectedPatient} />}
        {patientPage === 'bot' && <PatientOncoBot patient={selectedPatient} />}
        {patientPage === 'accessibility' && <PatientAccessibility patient={selectedPatient} />}
      </PatientLayout>
    );
  }

  return (
    <AdminLayout active={adminPage} setActive={setAdminPage} onSwitch={() => setPortal('patient')}>
      <header className="topbar">
        <div>
          <h2>Portal Gestor INEN</h2>
          <p>Priorización, alertas, soporte integral y continuidad diagnóstica.</p>
        </div>
        <div className="doctor">
          <div className="doctor-avatar">IN</div>
          <div><strong>LABINEN</strong><span>Demo hackatón</span></div>
        </div>
      </header>

      {adminPage === 'dashboard' && <AdminDashboard patients={patients} />}
      {adminPage === 'patients' && <AdminPatients patients={patients} selectPatient={selectPatientFromAdmin} />}
      {adminPage === 'alerts' && <AdminAlerts patients={patients} selectPatient={selectPatientFromAdmin} />}
      {adminPage === 'continuity' && <AdminContinuity patients={patients} />}
      {adminPage === 'support' && <AdminSupport patients={patients} />}
      {adminPage === 'reports' && <AdminReports />}
    </AdminLayout>
  );
}
