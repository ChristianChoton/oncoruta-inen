import React from 'react';
import OncoBotChat from '../../components/OncoBotChat';

export default function PatientOncoBot({ patient }) {
  return (
    <div className="page bot-page">
      <OncoBotChat patient={patient} />
    </div>
  );
}
