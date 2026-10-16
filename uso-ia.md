# Registro del uso de inteligencia artificial

## Introducción

Durante la fase de especificación (SDD) se utilizaron asistentes de inteligencia artificial como apoyo para organizar los requisitos, revisar posibles casos límite y estructurar la planificación. Las propuestas se trataron como borradores y se revisaron antes de incorporarlas a la documentación.

> **Importante:** este registro debe reflejar el uso real del equipo. Revisad y corregid las herramientas, modelos, modos, prompts y decisiones antes de entregarlo. No indiquéis una herramienta, modelo o comprobación que no hayáis utilizado.

## Caso 1. Organización y formalización de la especificación

- **Tarea y objetivo:** estructurar `spec.md`, delimitar el MVP y formular requisitos que puedan comprobarse.
- **Documento SDD relacionado:** `spec.md`.
- **Herramienta o agente:** ChatGPT. **Modelo:** GPT-6, según la identificación disponible en esta conversación.
- **Modo de trabajo:** conversación mediante mensajes; no se seleccionó un modo de agente específico.
- **Contexto facilitado:** enunciado de la entrega de Monlau, contexto del proyecto para personas mayores con TEA y referencia a las pantallas del prototipo.
- **Prompt relevante:** «Ayúdame a preparar la entrega SDD del proyecto. Organiza el problema, los usuarios, el objetivo del MVP, los requisitos funcionales y no funcionales, los criterios de aceptación y los casos límite. Mantén el alcance reducido y marca las decisiones que no estén confirmadas».
- **Resultado y revisión humana:** la IA propuso una estructura de especificación y requisitos identificados. Se revisó la necesidad de mantener el alcance limitado y se marcaron como pendientes el enlace de Figma, la tecnología y las funciones que todavía deben confirmarse con el equipo. El equipo debe comprobar que los requisitos coinciden con el prototipo real.
- **Evidencia:** guardar una captura real de la conversación como `evidencias-ia/01-especificacion.png`.

## Caso 2. Revisión de casos límite y criterios de aceptación

- **Tarea y objetivo:** identificar comportamientos que podrían generar errores de uso y definir cómo comprobarlos.
- **Documento SDD relacionado:** `spec.md` y `plan.md`.
- **Herramienta o agente:** ChatGPT. **Modelo:** GPT-6, según la identificación disponible en esta conversación.
- **Modo de trabajo:** conversación mediante mensajes; no se seleccionó un modo de agente específico.
- **Contexto facilitado:** requisitos propuestos, pantallas previstas y ejemplos de formularios, navegación y avisos de interfaz.
- **Prompt relevante:** «Revisa los requisitos y propón casos límite verificables: campos obligatorios vacíos, datos con formato incorrecto, secciones sin información, errores al guardar, navegación repetida y avisos que deben poder cerrarse. No añadas funcionalidades fuera del MVP».
- **Prompt de refinamiento, si se utilizó:** «Haz que cada criterio indique una condición inicial, una acción y el resultado esperado; marca como pendiente cualquier comportamiento que no esté definido en el prototipo».
- **Resultado y revisión humana:** se propusieron casos de validación, estados vacíos y gestión de avisos. Se mantuvieron los casos relacionados con la claridad y la consistencia de la interfaz; las funciones no confirmadas se dejaron pendientes en lugar de asumir que formarían parte del MVP.
- **Evidencia:** guardar una captura real de la conversación como `evidencias-ia/02-casos-limite.png`.

## Caso 3. Desglose de tareas y planificación técnica

- **Tarea y objetivo:** organizar la implementación en tareas pequeñas, ordenadas y verificables.
- **Documento SDD relacionado:** `plan.md` y `tasks.md`.
- **Herramienta o agente:** ChatGPT. **Modelo:** GPT-6, según la identificación disponible en esta conversación.
- **Modo de trabajo:** conversación mediante mensajes; no se seleccionó un modo de agente específico.
- **Contexto facilitado:** enunciado de la entrega, requisitos iniciales y necesidad de incluir identificador, dependencias, responsable y criterio de finalización en cada tarea.
- **Prompt relevante:** «Propón un plan técnico sencillo y una lista de tareas ordenadas. Cada tarea debe tener identificador, requisito relacionado, dependencias, responsable y un criterio objetivo de finalización. No inventes tecnologías ni responsables que no se hayan acordado».
- **Resultado y revisión humana:** se propuso separar la navegación, las pantallas, la validación, los estados de interfaz y las pruebas. Las tecnologías, responsables y comandos no confirmados se dejaron pendientes para que el equipo los acuerde antes de implementar.
- **Evidencia:** guardar una captura real de la conversación como `evidencias-ia/03-plan-tareas.png`.

## Reflexión final

La inteligencia artificial nos ayudó a ordenar la documentación y a convertir ideas generales en requisitos y tareas más concretos. También permitió detectar casos límite que conviene comprobar durante el desarrollo. Sin embargo, sus propuestas pueden incluir funciones que no encajan con el tiempo disponible o dar por tomadas decisiones que todavía no ha aprobado el equipo. Por ello, hemos marcado como pendientes las tecnologías, los datos y las funcionalidades que deben confirmarse. La revisión humana es necesaria para comprobar la coherencia con Figma y con el enunciado. Las decisiones finales sobre el alcance, la implementación y las pruebas corresponden al equipo.

## Antes de entregar

- Sustituir o confirmar los datos del equipo.
- Verificar que cada ejemplo describe una interacción que realmente se realizó.
- Sustituir los nombres de modelo y modo si la herramienta utilizada muestra información diferente.
- Añadir las tres capturas reales en `evidencias-ia/` y comprobar que los enlaces funcionan.
- No entregar capturas simuladas ni evidencias que no correspondan a conversaciones reales.
