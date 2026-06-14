import { appointments, bottlenecks, funnelData, patients } from '../data/mockData';

export const getPatients = () => patients;
export const getPatientById = (id) => patients.find((p) => p.id === Number(id)) || patients[0];
export const getFunnelData = () => funnelData;
export const getBottlenecks = () => bottlenecks;
export const getAppointments = () => appointments;

export const formatDate = (iso) => {
  if (!iso) return 'Sin fecha';
  return new Intl.DateTimeFormat('es-PE', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(new Date(`${iso}T00:00:00`));
};

export const daysUntil = (iso) => {
  if (!iso) return null;
  const today = new Date('2026-06-13T00:00:00');
  const target = new Date(`${iso}T00:00:00`);
  return Math.ceil((target - today) / (1000 * 60 * 60 * 24));
};

export const riskMeta = (risk = 0) => {
  if (risk < 0.4) return { label: 'Bajo', className: 'risk-low', color: '#16a34a', priority: 'Baja' };
  if (risk < 0.7) return { label: 'Moderado', className: 'risk-mid', color: '#f59e0b', priority: 'Media' };
  return { label: 'Alto', className: 'risk-high', color: '#ef4444', priority: 'Alta' };
};

export const getInitials = (name = '') =>
  name
    .split(' ')
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase();

export const getCurrentStep = (patient) =>
  patient?.ruta?.find((r) => r.estado === 'actual') || patient?.ruta?.find((r) => r.estado === 'pendiente');

export const getProgress = (patient) => {
  if (!patient?.ruta?.length) return 0;
  const completed = patient.ruta.filter((r) => r.estado === 'completado').length;
  return Math.round((completed / patient.ruta.length) * 100);
};

export const getAlerts = (list = patients) => {
  const alerts = [];
  list.forEach((patient) => {
    const days = daysUntil(patient.proximaCita);
    if (patient.riesgo >= 0.8 || patient.diasEspera >= 40) {
      alerts.push({
        id: `critical-${patient.id}`,
        type: 'Crítica',
        color: 'red',
        title: 'Riesgo crítico de discontinuidad',
        description: `${patient.nombre} presenta ${patient.diasEspera} días de espera y riesgo alto.`,
        action: 'Activar llamada, trabajo social y navegación prioritaria.',
        patient
      });
    }
    if (patient.estadoCita === 'vencida' || (days !== null && days < 0)) {
      alerts.push({
        id: `overdue-${patient.id}`,
        type: 'Alta',
        color: 'orange',
        title: 'Cita vencida',
        description: `${patient.nombre} tenía cita para ${formatDate(patient.proximaCita)}.`,
        action: 'Solicitar reprogramación y confirmar disponibilidad.',
        patient
      });
    }
    if (days !== null && days >= 0 && days <= 3) {
      alerts.push({
        id: `soon-${patient.id}`,
        type: 'Media',
        color: 'yellow',
        title: 'Cita próxima',
        description: `${patient.nombre} tiene cita en ${days} día(s).`,
        action: 'Enviar recordatorio por SMS, WhatsApp o llamada.',
        patient
      });
    }
    if (patient.condicion.some((c) => c.toLowerCase().includes('idiomática'))) {
      alerts.push({
        id: `language-${patient.id}`,
        type: 'Inclusiva',
        color: 'blue',
        title: 'Barrera idiomática',
        description: `${patient.nombre} requiere orientación intercultural.`,
        action: 'Activar instrucciones en quechua/audio.',
        patient
      });
    }
    if (patient.soporte?.dolor >= 8) {
      alerts.push({
        id: `pain-${patient.id}`,
        type: 'Crítica',
        color: 'red',
        title: 'Dolor severo reportado',
        description: `${patient.nombre} reportó dolor ${patient.soporte.dolor}/10.`,
        action: 'Derivar a evaluación de dolor y realizar llamada de orientación.',
        patient
      });
    }
    if (patient.soporte?.apoyoPsicologico) {
      alerts.push({
        id: `psychology-${patient.id}`,
        type: 'Alta',
        color: 'orange',
        title: 'Necesidad de apoyo psicológico',
        description: `${patient.nombre} reporta estado emocional: ${patient.soporte.estadoEmocional}.`,
        action: 'Activar llamada de apoyo psicológico o navegación emocional.',
        patient
      });
    }
    if (patient.soporte && !patient.soporte.familiarAutorizado) {
      alerts.push({
        id: `family-${patient.id}`,
        type: 'Media',
        color: 'yellow',
        title: 'Sin familiar autorizado',
        description: `${patient.nombre} no registra familiar autorizado para comunicación.`,
        action: 'Solicitar autorización de contacto familiar.',
        patient
      });
    }
  });
  return alerts;
};

export const getSupportStats = (list = patients) => {
  const painSevere = list.filter((p) => p.soporte?.dolor >= 7).length;
  const psychology = list.filter((p) => p.soporte?.apoyoPsicologico).length;
  const noFamily = list.filter((p) => !p.soporte?.familiarAutorizado).length;
  const familyCommunication = list.filter((p) => p.soporte?.comunicacionFamiliar).length;
  return { painSevere, psychology, noFamily, familyCommunication };
};

export const getSupportNeeds = (list = patients) =>
  list
    .filter((p) => p.soporte?.dolor >= 6 || p.soporte?.apoyoPsicologico || !p.soporte?.familiarAutorizado || p.soporte?.comunicacionFamiliar)
    .map((p) => ({
      patient: p,
      pain: p.soporte?.dolor || 0,
      emotional: p.soporte?.estadoEmocional || 'No reportado',
      familyStatus: p.soporte?.familiarAutorizado ? `${p.soporte.familiarNombre} (${p.soporte.familiarParentesco})` : 'Sin familiar autorizado',
      recommendedAction:
        p.soporte?.dolor >= 7
          ? 'Derivar a evaluación de dolor y activar llamada de orientación.'
          : p.soporte?.apoyoPsicologico
            ? 'Activar apoyo psicológico y seguimiento emocional.'
            : !p.soporte?.familiarAutorizado
              ? 'Solicitar autorización para contacto familiar.'
              : 'Registrar comunicación con familiar autorizado.'
    }));

export const getContinuityRecommendation = (patient) => {
  const current = getCurrentStep(patient);
  const currentIndex = patient.ruta.findIndex((r) => r.etapa === current?.etapa);
  const next = patient.ruta[currentIndex + 1] || null;
  const suggestedDates = ['2026-06-17', '2026-06-20', '2026-06-23'];
  return {
    currentStep: current,
    nextStep: next,
    suggestedDates,
    reason:
      patient.soporte?.dolor >= 7
        ? 'Paciente con dolor relevante y riesgo de discontinuidad. Priorizar soporte integral y continuidad diagnóstica.'
        : patient.soporte?.apoyoPsicologico
          ? 'Paciente requiere apoyo psicológico durante la ruta diagnóstica. Priorizar acompañamiento.'
          : patient.riesgo >= 0.7
            ? 'Paciente con riesgo alto de discontinuidad. Priorizar continuidad diagnóstica.'
            : 'Paciente con proceso activo. Mantener seguimiento dentro de tiempos esperados.'
  };
};
