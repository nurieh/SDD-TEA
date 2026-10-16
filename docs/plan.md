# Plan técnico y de diseño del MVP — Conecta

## 1. Objetivo

Definir la solución técnica y de diseño del MVP de Conecta, una aplicación dirigida a personas adultas con TEA que busca facilitar la organización del día a día mediante rutinas, actividades, recordatorios, información sobre medicación y herramientas de comunicación.

El objetivo es crear una aplicación intuitiva, accesible y fácil de utilizar, que promueva la autonomía del usuario y reduzca la sobrecarga de información.

Este documento define la estructura del sistema, el modelo de datos, los flujos de usuario, las pantallas, las decisiones de diseño y la estrategia de pruebas. Las decisiones técnicas que todavía no estén confirmadas se identificarán como pendientes.

Antes de comenzar la implementación, se deberán consultar `constitution.md` y `spec.md` para comprobar que el desarrollo respeta los principios y requisitos aprobados por el equipo.

## 2. Tecnologías

- **Interfaz:** HTML5 para estructurar el contenido de las páginas y JavaScript para implementar la navegación, las interacciones y la validación de formularios.
- **Estilos y adaptación de pantalla:** CSS3 para definir el diseño visual, la legibilidad, el contraste, el tamaño de los elementos y la adaptación a dispositivos móviles y de escritorio.
- **Persistencia de datos:** archivos JSON para almacenar los datos ficticios del MVP, según la estructura definida en este documento.
- **Backend:** pendiente de concretar. Se deberá decidir cómo se gestionarán los archivos JSON y cómo se conectarán los datos con la interfaz.
- **Diseño del prototipo:** Figma, como referencia visual y de navegación para la implementación de las pantallas.
- **Control de versiones:** Git y GitHub para gestionar los cambios del proyecto y mantener el código y la documentación organizados.
- **Pruebas:** comprobaciones funcionales, visuales y de usabilidad basadas en los criterios de aceptación de `spec.md`.

Se recomienda evitar dependencias externas innecesarias y elegir una solución que se ajuste a las competencias del equipo, al tiempo disponible y al alcance del MVP.

## 3. Estructura del sistema

La aplicación se organizará en los siguientes componentes principales:

1. **Navegación:** permite acceder a las diferentes pantallas y volver a la pantalla anterior de forma consistente.
2. **Inicio:** muestra un resumen del día y accesos directos a las funciones principales.
3. **Agenda:** permite consultar actividades, citas y eventos programados.
4. **Rutinas:** muestra las actividades habituales y su estado de realización.
5. **Medicación:** presenta la información registrada sobre los medicamentos y sus horarios, si esta funcionalidad forma parte del alcance aprobado.
6. **Citas médicas:** muestra las próximas citas, sus horarios, profesionales y ubicaciones.
7. **Comunicación:** facilita el acceso a familiares, cuidadores, profesionales y contactos de emergencia.
8. **Validación de datos:** comprueba los campos obligatorios y los formatos antes de aceptar la información introducida.
9. **Mensajes de estado:** muestra confirmaciones, errores y estados vacíos de forma clara, sin mensajes contradictorios.
10. **Capa de datos:** gestiona la lectura y actualización de la información almacenada en los archivos JSON.

La estructura definitiva de los componentes y la implementación del backend dependerán de las decisiones técnicas aprobadas por el equipo.

## 4. Modelo de datos

Los datos del MVP se organizarán en archivos JSON separados por tipo de información.

| Contenido | Archivo |
|---|---|
| Actividades y rutinas | `actividades.json` |
| Medicación | `medicacion.json` |
| Contactos de emergencia | `contactos.json` |

### 4.1. Actividades y rutinas (`actividades.json`)

Este archivo almacenará las actividades programadas y las rutinas diarias.

```json
{
  "Agenda": [
    {
      "id": 1,
      "descripcion": "Cita médica",
      "ubicacion": "Centro de salud",
      "fecha": "09-10-2026",
      "hora": "10:30"
    },
    {
      "id": 2,
      "descripcion": "Visita familiar",
      "ubicacion": "Casa",
      "fecha": "09-10-2026",
      "hora": "16:00"
    },
    {
      "id": 3,
      "descripcion": "Compras",
      "ubicacion": "Supermercado",
      "fecha": "10-10-2026",
      "hora": "11:00"
    }
  ],
  "Rutina": [
    {
      "id": 1,
      "descripcion": "Desayunar",
      "status": "Completado",
      "hora": "09:00"
    },
    {
      "id": 2,
      "descripcion": "Pasear",
      "status": "Completado",
      "hora": "11:30"
    },
    {
      "id": 3,
      "descripcion": "Comer",
      "status": "Pendiente",
      "hora": "14:00"
    }
  ]
}
```

Los campos tendrán la siguiente función:

- `id`: identificador numérico de la actividad.
- `descripcion`: indica qué actividad se debe realizar.
- `ubicacion`: indica dónde se realiza la actividad, cuando corresponda.
- `fecha`: indica el día de la actividad, en formato `dd-mm-yyyy`.
- `hora`: indica la hora de la actividad, en formato `hh:mm`.
- `status`: indica si una actividad de la rutina está pendiente o completada.

### 4.2. Medicación (`medicacion.json`)

Este archivo almacenará la información de los medicamentos incluidos en el MVP.

```json
{
  "Medicacion": [
    {
      "id": 1,
      "nombre": "Paracetamol",
      "dosis": "500 mg",
      "status": "Activa"
    },
    {
      "id": 2,
      "nombre": "Melatonina",
      "dosis": null,
      "status": "Activa"
    },
    {
      "id": 3,
      "nombre": "Sertralina",
      "dosis": "50 mg",
      "status": "Inactiva"
    }
  ]
}
```

Los campos tendrán la siguiente función:

- `id`: identificador numérico del registro.
- `nombre`: nombre del medicamento.
- `dosis`: dosis registrada, si está disponible.
- `status`: indica si el registro está activo o inactivo.

Si la dosis es `null`, significa que no existe una dosis registrada en el ejemplo. No debe interpretarse como una indicación de que el medicamento se pueda tomar sin una dosis prescrita.

La aplicación mostrará únicamente información previamente registrada y no recomendará ni modificará dosis médicas.

### 4.3. Contactos de emergencia (`contactos.json`)

Este archivo almacenará los contactos a los que el usuario pueda necesitar acceder rápidamente.

```json
{
  "Contactos": [
    {
      "id": 1,
      "nombre": "Familiar 1",
      "telefono": "+34 600 000 001"
    },
    {
      "id": 2,
      "nombre": "Familiar 2",
      "telefono": "+34 600 000 002"
    },
    {
      "id": 3,
      "nombre": "Contacto de emergencia",
      "telefono": "+34 600 000 003"
    }
  ]
}
```

Los campos tendrán la siguiente función:

- `id`: identificador numérico del contacto.
- `nombre`: nombre o descripción del contacto.
- `telefono`: número de teléfono asociado al contacto.

Los teléfonos del ejemplo son ficticios y no deben utilizarse para realizar llamadas reales.

### 4.4. Reglas generales de los datos

- Cada registro tendrá un identificador numérico único dentro de su colección.
- Al crear un registro, el siguiente identificador será `max(id) + 1`, o `1` si la colección está vacía.
- Los datos deberán respetar la estructura y los formatos establecidos.
- Se validarán los campos obligatorios antes de aceptar nuevos registros.
- Se utilizarán exclusivamente datos ficticios durante las pruebas y las demostraciones.
- La necesidad de almacenar información personal y las medidas de protección aplicables deberán revisarse antes de incorporar datos reales.

## 5. Flujos de usuario

### 5.1. Flujo principal: organización del día a día

1. El usuario abre la aplicación.
2. Consulta la pantalla de inicio.
3. Revisa las actividades y rutinas del día.
4. Selecciona una actividad.
5. Consulta la información necesaria para realizarla.
6. Marca la actividad como completada, cuando corresponda.
7. Consulta la siguiente actividad o recordatorio disponible.
8. Finaliza la consulta y vuelve a la pantalla principal cuando lo necesite.

### 5.2. Flujo de medicación

Inicio → Medicación → Consultar medicamento → Revisar información registrada → Consultar horario o recordatorio.

La confirmación de una toma solo se incorporará si se aprueba expresamente dentro del alcance del MVP.

### 5.3. Flujo de citas médicas

Inicio → Agenda o Citas médicas → Seleccionar cita → Consultar fecha, hora y ubicación → Revisar el recordatorio disponible.

### 5.4. Flujo de comunicación

Inicio → Comunicación → Seleccionar contacto → Consultar los datos del contacto → Utilizar la opción de llamada o mensaje, si está implementada.

La integración con llamadas y mensajes externos deberá confirmarse durante la definición técnica.

## 6. Estructura de las pantallas

Las pantallas deberán seguir el prototipo de Figma y mantener una estructura visual consistente.

### 6.1. Pantalla de inicio

Mostrará un resumen de la información más relevante del día:

- Fecha y hora.
- Próxima actividad.
- Resumen de la rutina diaria.
- Próximo medicamento registrado, si corresponde.
- Próxima cita.
- Acceso rápido a la sección de comunicación.

La información se organizará por prioridad, evitando mostrar demasiados elementos al mismo tiempo.

### 6.2. Pantalla de agenda

Permitirá consultar las actividades, citas y eventos programados.

Deberá mostrar:

- Descripción de la actividad.
- Fecha y hora.
- Ubicación, cuando corresponda.
- Acceso al detalle de cada actividad.

La inclusión de un calendario visual y de filtros dependerá del alcance aprobado.

### 6.3. Pantalla de rutinas

Mostrará una lista ordenada de las actividades habituales, indicando su horario y estado.

Ejemplo:

- 08:15 — Desayunar.
- 09:00 — Consultar medicación registrada.
- 11:00 — Pasear.
- 13:00 — Comer.
- 21:00 — Prepararse para dormir.

El usuario podrá identificar fácilmente qué actividades están pendientes y cuáles se han completado, siempre que esta interacción esté incluida en el MVP.

### 6.4. Pantalla de medicación

Presentará, cuando se incluya esta funcionalidad:

- Nombre del medicamento.
- Dosis registrada.
- Horario, si está disponible.
- Próxima toma, si se ha definido.
- Estado del registro.

La aplicación no establecerá tratamientos ni generará recomendaciones médicas.

### 6.5. Pantalla de citas médicas

Mostrará las próximas citas con la siguiente información, cuando esté disponible:

- Fecha.
- Hora.
- Profesional o centro.
- Ubicación.
- Recordatorio asociado, si está implementado.

### 6.6. Pantalla de comunicación

Facilitará el acceso a personas importantes para el usuario:

- Familiares.
- Cuidadores.
- Profesionales.
- Contactos de emergencia.

Cada contacto tendrá la información necesaria para identificarlo y acceder a las opciones de comunicación disponibles.

## 7. Decisiones de diseño UX/UI

### 7.1. Simplicidad y claridad visual

La aplicación utilizará una interfaz clara, predecible y coherente. La información se organizará para facilitar su comprensión y reducir el esfuerzo necesario para localizar cada función.

Se priorizarán los siguientes aspectos:

- Textos breves y comprensibles.
- Tipografía legible y tamaño adecuado.
- Contraste suficiente entre texto y fondo.
- Botones visibles, con etiquetas claras.
- Iconos acompañados de texto cuando sea necesario.
- Navegación consistente entre pantallas.
- Distribución ordenada de la información.
- Adaptación a dispositivos móviles y de escritorio.

### 7.2. Autonomía y personalización

La aplicación deberá respetar la autonomía de las personas adultas con TEA, sin utilizar un tono infantil ni transmitir que el usuario es incapaz de tomar sus propias decisiones.

Siempre que el alcance lo permita, se favorecerá la personalización de la información y la organización de las rutinas.

### 7.3. Prevención de la sobrecarga

Se evitará la acumulación de información, los elementos visuales innecesarios y las notificaciones excesivas.

Los recordatorios deberán ser claros, comprensibles y coherentes con la información registrada. Se evitarán mensajes duplicados o contradictorios.

### 7.4. Mensajes y estados de interfaz

Los mensajes de confirmación, error y estado vacío deberán:

- Utilizar un lenguaje sencillo.
- Explicar qué ha ocurrido.
- Indicar cómo continuar cuando sea necesario.
- Poder cerrarse cuando corresponda.
- Desaparecer cuando dejen de ser relevantes.
- No depender únicamente del color para transmitir información.

## 8. Relación con Figma

Las pantallas implementadas se contrastarán con el prototipo compartido por el equipo.

| Elemento | Comprobaciones |
|---|---|
| Inicio | Correspondencia visual y acceso a las funciones principales. |
| Agenda | Organización de actividades y acceso a sus detalles. |
| Rutinas | Orden de las actividades y representación de sus estados. |
| Medicación | Claridad de los datos registrados y sus etiquetas. |
| Citas médicas | Presentación de fechas, horarios y ubicaciones. |
| Comunicación | Facilidad para localizar e identificar contactos. |
| Navegación | Coherencia entre pantallas y funcionamiento de la opción de volver. |
| Mensajes | Claridad de los estados, confirmaciones y errores. |

Los nombres definitivos de las pantallas y las comprobaciones deberán ajustarse al prototipo real.

El enlace de Figma se mantendrá en `spec.md` y en el `README.md` del repositorio.

## 9. Estrategia de pruebas y validación

Las pruebas comprobarán que la aplicación funciona de acuerdo con los requisitos y que la interfaz resulta comprensible para sus usuarios.

### 9.1. Pruebas funcionales

Se comprobarán los siguientes aspectos:

- Acceso a todas las pantallas incluidas en el MVP.
- Funcionamiento de las opciones de navegación.
- Posibilidad de volver desde las pantallas secundarias.
- Visualización correcta de las actividades y rutinas.
- Actualización del estado de una actividad, si está implementada.
- Lectura de los archivos JSON y representación correcta de sus datos.
- Validación de campos obligatorios y formatos.
- Comportamiento ante archivos vacíos o datos incompletos.
- Visualización de mensajes de confirmación y error.
- Funcionamiento de las opciones de comunicación incluidas en el MVP.

### 9.2. Pruebas de interfaz y accesibilidad

Se revisarán los siguientes aspectos:

- Legibilidad de los textos.
- Contraste entre los elementos visuales.
- Claridad de los botones, etiquetas e iconos.
- Facilidad para encontrar las funciones principales.
- Adaptación a escritorio y a resoluciones estrechas.
- Consistencia de la navegación.
- Ausencia de mensajes duplicados o contradictorios.
- Claridad de los estados pendientes y completados.

### 9.3. Pruebas de usabilidad

Se evaluarán los siguientes criterios:

- **Facilidad de navegación:** comprobar si el usuario encuentra las secciones sin perderse.
- **Claridad de textos e iconos:** observar si las etiquetas y los elementos visuales se comprenden.
- **Organización de actividades:** comprobar si el usuario entiende cómo consultar y, si está implementado, gestionar una actividad.
- **Comprensión de los recordatorios:** evaluar si los mensajes permiten identificar qué actividad está prevista.
- **Acceso a la ayuda:** comprobar cuánto esfuerzo requiere localizar los contactos importantes.

Si se realizan pruebas con usuarios reales, se utilizará una tabla de observación para registrar tareas completadas, dificultades y aspectos que deban mejorarse. La participación será voluntaria y se respetará la privacidad de los participantes.

### 9.4. Pruebas de privacidad y revisión

- Utilizar datos ficticios durante las pruebas.
- Evitar incluir información personal o médica real en capturas y documentación.
- Revisar el repositorio antes de compartirlo.
- Comprobar que las funciones implementadas respetan el alcance aprobado.
- Revisar manualmente las propuestas de código generadas mediante IA.
- Registrar los errores detectados y las correcciones realizadas.

## 10. Orden de implementación

1. Revisar `constitution.md`, `spec.md` y el prototipo de Figma.
2. Confirmar las funcionalidades que formarán parte del MVP.
3. Concretar la tecnología del backend y el mecanismo de lectura y escritura de los JSON.
4. Preparar la estructura inicial del proyecto y los archivos de datos ficticios.
5. Implementar la estructura visual y la navegación.
6. Desarrollar la pantalla de inicio, la agenda y las rutinas.
7. Implementar las secciones de medicación, citas y comunicación que estén aprobadas.
8. Añadir las validaciones y los mensajes de estado necesarios.
9. Ejecutar las pruebas funcionales, visuales y de usabilidad.
10. Corregir los defectos y revisar accesibilidad y privacidad.
11. Actualizar la documentación y preparar la demostración del MVP.

## 11. Riesgos y medidas preventivas

- **Alcance excesivo:** priorizar las funcionalidades esenciales y posponer las que no sean necesarias para el MVP.
- **Tecnología sin confirmar:** acordar el backend y el mecanismo de persistencia antes de desarrollar la gestión definitiva de datos.
- **Limitaciones de los archivos JSON:** comprobar que el mecanismo elegido permite leer y actualizar los datos correctamente.
- **Datos sensibles:** utilizar datos ficticios y no incorporar información médica real sin haber definido previamente las medidas de protección necesarias.
- **Sobrecarga visual:** mantener una interfaz sencilla, ordenada y coherente con las necesidades de los usuarios.
- **Desajustes con Figma:** comparar periódicamente las pantallas implementadas con el prototipo y registrar los cambios aprobados.
- **Recordatorios incorrectos:** mostrar únicamente información registrada y validada, evitando generar indicaciones médicas.
- **Propuestas incorrectas de IA:** revisar manualmente el código y comprobarlo frente a los requisitos y criterios de aceptación.
- **Falta de pruebas con usuarios:** realizar pruebas de usabilidad cuando sea viable y utilizar sus resultados para identificar mejoras.

## 12. Decisiones pendientes

Antes de cerrar el plan técnico, el equipo deberá confirmar:

- La tecnología y la versión del backend, si se necesita.
- Cómo se leerán y actualizarán los archivos JSON desde la interfaz.
- Si los datos deberán mantenerse entre sesiones o solo durante la demostración.
- Qué funcionalidades de agenda, medicación, citas y comunicación se incluirán realmente en el MVP.
- Si los recordatorios serán únicamente visuales o necesitarán mecanismos adicionales.
- Si se implementarán llamadas y mensajes reales o solo la visualización de contactos.
- Qué pruebas de usabilidad se podrán realizar dentro del tiempo disponible.

Estas decisiones deberán quedar alineadas con `spec.md`, el prototipo de Figma y los requisitos acordados por el equipo.
