export const patients = [
  {
    id: 1,
    nombre: 'María Quispe',
    dni: '45891234',
    edad: 42,
    telefono: '987 654 321',
    tipoCancer: 'Mama',
    procedencia: 'Ayacucho',
    idioma: 'Quechua',
    acompanante: 'Rosa Quispe - Hermana',
    condicion: ['Jefa de hogar', 'Provincia', 'Barrera idiomática'],
    riesgo: 0.86,
    ultimaAtencion: '2026-05-02',
    proximaCita: '2026-06-17',
    etapaActual: 'Biopsia',
    diasEspera: 34,
    estadoCita: 'pendiente',
    soporte: {
      dolor: 8,
      estadoEmocional: 'Muy ansiosa',
      apoyoPsicologico: true,
      familiarAutorizado: true,
      familiarNombre: 'Rosa Quispe',
      familiarParentesco: 'Hermana',
      comunicacionFamiliar: true,
      requiereTerapiaDolor: true,
      ultimoReporte: '2026-06-12',
      observacion: 'Refiere dolor intenso y temor por el resultado. Requiere llamada de orientación.'
    },
    ruta: [
      { etapa: 'Referencia', estado: 'completado', fecha: '2026-05-02', orientacion: 'La referencia permite ingresar al proceso diagnóstico.' },
      { etapa: 'Mamografía', estado: 'completado', fecha: '2026-05-09', orientacion: 'No usar talco, perfume o desodorante el día del examen.' },
      { etapa: 'Ecografía', estado: 'completado', fecha: '2026-05-14', orientacion: 'Llevar mamografía y resultados anteriores.' },
      { etapa: 'Biopsia', estado: 'actual', fecha: '2026-06-17', orientacion: 'Venir acompañada. Traer DNI, referencia y exámenes previos.' },
      { etapa: 'Patología', estado: 'pendiente', fecha: null, orientacion: 'El resultado será validado por el servicio correspondiente.' },
      { etapa: 'Diagnóstico', estado: 'pendiente', fecha: null, orientacion: 'Consulta para explicar resultados y próximos pasos.' },
      { etapa: 'Plan de tratamiento', estado: 'pendiente', fecha: null, orientacion: 'El equipo médico define tratamiento o seguimiento.' }
    ]
  },
  {
    id: 2,
    nombre: 'Carmen Navarro',
    dni: '70603404',
    edad: 55,
    telefono: '912 223 890',
    tipoCancer: 'Cuello uterino',
    procedencia: 'Lima',
    idioma: 'Español',
    acompanante: 'Lucía Navarro - Hija',
    condicion: ['Jefa de hogar'],
    riesgo: 0.58,
    ultimaAtencion: '2026-06-01',
    proximaCita: '2026-06-15',
    etapaActual: 'Colposcopía',
    diasEspera: 14,
    estadoCita: 'por vencer',
    soporte: {
      dolor: 4,
      estadoEmocional: 'Preocupada',
      apoyoPsicologico: false,
      familiarAutorizado: true,
      familiarNombre: 'Lucía Navarro',
      familiarParentesco: 'Hija',
      comunicacionFamiliar: true,
      requiereTerapiaDolor: false,
      ultimoReporte: '2026-06-11',
      observacion: 'Solicita orientación sobre documentos y acompañamiento.'
    },
    ruta: [
      { etapa: 'Referencia', estado: 'completado', fecha: '2026-05-20', orientacion: 'Traer referencia y documentos de seguro.' },
      { etapa: 'PAP/IVAA', estado: 'completado', fecha: '2026-05-27', orientacion: 'Examen inicial de tamizaje.' },
      { etapa: 'Colposcopía', estado: 'actual', fecha: '2026-06-15', orientacion: 'Traer resultados previos y llegar 20 minutos antes.' },
      { etapa: 'Biopsia', estado: 'pendiente', fecha: null, orientacion: 'Puede requerir acompañamiento y reposo posterior.' },
      { etapa: 'Patología', estado: 'pendiente', fecha: null, orientacion: 'Validación del resultado.' },
      { etapa: 'Diagnóstico', estado: 'pendiente', fecha: null, orientacion: 'Explicación médica de resultados.' },
      { etapa: 'Plan de tratamiento', estado: 'pendiente', fecha: null, orientacion: 'Definición de tratamiento.' }
    ]
  },
  {
    id: 3,
    nombre: 'Luisa Pérez',
    dni: '31889921',
    edad: 48,
    telefono: '944 111 777',
    tipoCancer: 'Mama',
    procedencia: 'Cajamarca',
    idioma: 'Español',
    acompanante: 'Sin acompañante',
    condicion: ['Provincia', 'Baja conectividad', 'Costo de traslado'],
    riesgo: 0.92,
    ultimaAtencion: '2026-04-28',
    proximaCita: '2026-06-07',
    etapaActual: 'Patología',
    diasEspera: 46,
    estadoCita: 'vencida',
    soporte: {
      dolor: 7,
      estadoEmocional: 'Muy ansiosa',
      apoyoPsicologico: true,
      familiarAutorizado: false,
      familiarNombre: '',
      familiarParentesco: '',
      comunicacionFamiliar: false,
      requiereTerapiaDolor: true,
      ultimoReporte: '2026-06-10',
      observacion: 'Paciente de provincia sin familiar autorizado. Riesgo de pérdida de seguimiento.'
    },
    ruta: [
      { etapa: 'Referencia', estado: 'completado', fecha: '2026-04-18', orientacion: 'Ingreso al flujo diagnóstico.' },
      { etapa: 'Mamografía', estado: 'completado', fecha: '2026-04-24', orientacion: 'Examen completado.' },
      { etapa: 'Ecografía', estado: 'completado', fecha: '2026-04-28', orientacion: 'Examen complementario completado.' },
      { etapa: 'Biopsia', estado: 'completado', fecha: '2026-05-06', orientacion: 'Muestra tomada.' },
      { etapa: 'Patología', estado: 'actual', fecha: '2026-06-07', orientacion: 'Resultado pendiente de validación y comunicación.' },
      { etapa: 'Diagnóstico', estado: 'pendiente', fecha: null, orientacion: 'Consulta para explicar resultados.' },
      { etapa: 'Plan de tratamiento', estado: 'pendiente', fecha: null, orientacion: 'Plan clínico posterior.' }
    ]
  },
  {
    id: 4,
    nombre: 'Rosa Castro',
    dni: '15443322',
    edad: 37,
    telefono: '988 991 122',
    tipoCancer: 'Cuello uterino',
    procedencia: 'Puno',
    idioma: 'Quechua',
    acompanante: 'Elena Castro - Madre',
    condicion: ['Provincia', 'Barrera idiomática'],
    riesgo: 0.71,
    ultimaAtencion: '2026-05-22',
    proximaCita: '2026-06-19',
    etapaActual: 'Biopsia',
    diasEspera: 21,
    estadoCita: 'pendiente',
    soporte: {
      dolor: 5,
      estadoEmocional: 'Triste',
      apoyoPsicologico: true,
      familiarAutorizado: true,
      familiarNombre: 'Elena Castro',
      familiarParentesco: 'Madre',
      comunicacionFamiliar: true,
      requiereTerapiaDolor: false,
      ultimoReporte: '2026-06-12',
      observacion: 'Requiere orientación en quechua y llamada a familiar autorizado.'
    },
    ruta: [
      { etapa: 'Referencia', estado: 'completado', fecha: '2026-05-10', orientacion: 'Ingreso al flujo diagnóstico.' },
      { etapa: 'PAP/IVAA', estado: 'completado', fecha: '2026-05-16', orientacion: 'Examen inicial completado.' },
      { etapa: 'Colposcopía', estado: 'completado', fecha: '2026-05-22', orientacion: 'Evaluación completada.' },
      { etapa: 'Biopsia', estado: 'actual', fecha: '2026-06-19', orientacion: 'Venir acompañada y revisar indicaciones.' },
      { etapa: 'Patología', estado: 'pendiente', fecha: null, orientacion: 'Validación de resultados.' },
      { etapa: 'Diagnóstico', estado: 'pendiente', fecha: null, orientacion: 'Consulta médica.' },
      { etapa: 'Plan de tratamiento', estado: 'pendiente', fecha: null, orientacion: 'Definición de tratamiento.' }
    ]
  },
  {
    id: 5,
    nombre: 'Ana Ramos',
    dni: '98342112',
    edad: 61,
    telefono: '932 100 300',
    tipoCancer: 'Mama',
    procedencia: 'Villa El Salvador',
    idioma: 'Español',
    acompanante: 'Carlos Ramos - Esposo',
    condicion: ['Ansiedad', 'Requiere orientación'],
    riesgo: 0.33,
    ultimaAtencion: '2026-06-08',
    proximaCita: '2026-06-14',
    etapaActual: 'Diagnóstico',
    diasEspera: 9,
    estadoCita: 'por vencer',
    soporte: {
      dolor: 2,
      estadoEmocional: 'Tranquila',
      apoyoPsicologico: false,
      familiarAutorizado: true,
      familiarNombre: 'Carlos Ramos',
      familiarParentesco: 'Esposo',
      comunicacionFamiliar: false,
      requiereTerapiaDolor: false,
      ultimoReporte: '2026-06-13',
      observacion: 'Sin signos de alarma psicosocial. Requiere recordatorio de cita.'
    },
    ruta: [
      { etapa: 'Referencia', estado: 'completado', fecha: '2026-05-01', orientacion: 'Ingreso al flujo diagnóstico.' },
      { etapa: 'Mamografía', estado: 'completado', fecha: '2026-05-08', orientacion: 'Examen completado.' },
      { etapa: 'Ecografía', estado: 'completado', fecha: '2026-05-15', orientacion: 'Examen completado.' },
      { etapa: 'Biopsia', estado: 'completado', fecha: '2026-05-24', orientacion: 'Muestra tomada.' },
      { etapa: 'Patología', estado: 'completado', fecha: '2026-06-08', orientacion: 'Resultado disponible.' },
      { etapa: 'Diagnóstico', estado: 'actual', fecha: '2026-06-14', orientacion: 'Consulta para explicar resultados.' },
      { etapa: 'Plan de tratamiento', estado: 'pendiente', fecha: null, orientacion: 'Definición de plan posterior.' }
    ]
  }
];

export const funnelData = [
  { label: 'Referencias', value: 100 },
  { label: 'Mamografías/PAP', value: 84 },
  { label: 'Biopsias', value: 71 },
  { label: 'Patología', value: 59 },
  { label: 'Diagnóstico', value: 52 },
  { label: 'Plan tratamiento', value: 44 }
];

export const bottlenecks = [
  { service: 'Patología', days: 28, target: 14 },
  { service: 'Biopsia', days: 18, target: 10 },
  { service: 'Mamografía / PAP', days: 12, target: 7 },
  { service: 'Diagnóstico', days: 9, target: 7 }
];

export const appointments = [
  { date: '2026-06-17', service: 'Biopsia', status: 'programada', patientId: 1 },
  { date: '2026-06-15', service: 'Colposcopía', status: 'por vencer', patientId: 2 },
  { date: '2026-06-07', service: 'Patología', status: 'vencida', patientId: 3 },
  { date: '2026-06-19', service: 'Biopsia', status: 'programada', patientId: 4 },
  { date: '2026-06-14', service: 'Diagnóstico', status: 'por vencer', patientId: 5 }
];
