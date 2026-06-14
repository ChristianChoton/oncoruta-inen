import React from 'react';
import RiskBadge from '../../components/RiskBadge';
import { formatDate } from '../../services/patientService';

export default function AdminPatients({ patients, selectPatient }) {
  return (
    <div className="page">
      <div className="page-title">
        <h2>Pacientes priorizables</h2>
        <p>Listado para navegación, seguimiento y priorización.</p>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Paciente</th>
              <th>Procedencia</th>
              <th>Etapa</th>
              <th>Próxima cita</th>
              <th>Riesgo</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr key={p.id}>
                <td><strong>{p.nombre}</strong><small>DNI {p.dni}</small></td>
                <td>{p.procedencia}</td>
                <td>{p.etapaActual}</td>
                <td>{formatDate(p.proximaCita)}</td>
                <td><RiskBadge value={p.riesgo} /></td>
                <td><button onClick={() => selectPatient(p)}>Ver ficha</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
