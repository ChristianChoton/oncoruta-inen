# OncoRuta Mujer Inteligente – Portales separados

Esta versión mantiene el diseño moderno morado y separa realmente la experiencia en:

## Portal Paciente
- Inicio
- Mi ruta
- Mis citas
- OncoBot
- Ayuda accesible

## Portal Gestor INEN
- Dashboard ejecutivo
- Pacientes priorizables
- Alertas inteligentes
- Motor de continuidad recomendado
- Reportes / arquitectura conceptual

## Ejecutar

```bash
npm install
npm run dev
```

También funciona:

```bash
npm run start
```

## Enfoque para la hackatón

La solución no reemplaza los sistemas existentes del INEN. Funciona como capa de navegación, orientación, alertas y continuidad diagnóstica.


## Ajuste v2: Motor de continuidad solo para Gestor INEN

- El Portal Paciente ya no muestra el motor de continuidad ni fechas sugeridas.
- El Portal Paciente solo muestra citas confirmadas, documentos, orientación y OncoBot.
- El Portal Gestor INEN contiene el Motor de Continuidad Diagnóstica Inteligente.
- El motor sugiere siguientes pasos y fechas solo para validación del personal INEN.
- Se agregaron acciones internas: priorizar caso, programar llamada, activar trabajo social y derivar a navegación.

## Ajuste v3: Bienestar, dolor, apoyo psicológico y comunicación familiar

Se añadieron funcionalidades transversales sin modificar la ruta diagnóstica principal.

### Portal Paciente
- Nuevo módulo: Bienestar y apoyo.
- Reporte de dolor o malestar en escala 0 a 10.
- Solicitud de apoyo psicológico.
- Visualización de familiar autorizado.
- Solicitud de orientación.

### Portal Gestor INEN
- Nuevo módulo: Soporte integral.
- KPIs de dolor severo, apoyo psicológico, falta de familiar autorizado y comunicación familiar.
- Ficha de soporte por paciente.
- Acciones internas: derivar dolor, apoyo psicológico, llamar paciente y validar familiar.

### Alertas inteligentes
- Dolor severo reportado.
- Necesidad de apoyo psicológico.
- Sin familiar autorizado.
- Barrera idiomática.

Estas funciones se presentan como detección y activación de soporte, no como tratamiento automático ni decisión clínica.
