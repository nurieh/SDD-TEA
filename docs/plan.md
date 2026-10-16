# Plan técnico del MVP

## 1. Objetivo

Definir una solución técnica sencilla, viable dentro del tiempo disponible y coherente con `spec.md` y el prototipo de Figma. Este documento es una propuesta para revisión del equipo; las decisiones no confirmadas se identifican como pendientes.

## 2. Tecnologías

## 2. Tecnologías

- **Interfaz:** HTML5 para estructurar el contenido de las páginas y JavaScript para implementar la navegación, las interacciones y la validación de formularios.
- **Estilos y adaptación de pantalla:** CSS3 para definir el diseño visual, la legibilidad, el contraste, el tamaño de los elementos y la adaptación de la interfaz a dispositivos móviles y de escritorio.
- **Diseño del prototipo:** Figma, como herramienta de diseño y referencia visual para la implementación de las pantallas.
- **Control de versiones:** Git y GitHub, para gestionar los cambios del proyecto y mantener el código y la documentación organizados.
- **Persistencia:** pendiente de concretar. En la fase de planificación se deberá decidir si el MVP necesita guardar los datos de forma permanente o si es suficiente con utilizar datos ficticios durante la demostración. La elección del mecanismo de almacenamiento dependerá de las funcionalidades finalmente aprobadas por el equipo.
- **Control de versiones:** Git y GitHub, de acuerdo con el flujo de trabajo del equipo.
- **Diseño:** Figma, como referencia visual y de navegación.
- **Pruebas:** comprobaciones manuales basadas en criterios de aceptación; automatización si la tecnología y el tiempo disponible lo permiten.

Se recomienda evitar dependencias externas innecesarias. La selección final de tecnologías debe coincidir con las competencias del equipo, el entorno de desarrollo disponible y el código que realmente se vaya a entregar.

## 3. Componentes principales propuestos

1. **Navegación:** controla el acceso a las pantallas y mantiene un comportamiento consistente.
2. **Pantalla principal:** punto de entrada a las secciones incluidas en el MVP.
3. **Perfil:** muestra y, si se confirma, permite editar los campos acordados.
4. **Información de apoyo:** presenta únicamente la información aprobada en el alcance.
5. **Validación de formularios:** comprueba campos obligatorios y formatos antes de aceptar datos.
6. **Mensajes de estado:** muestra confirmaciones, estados vacíos y errores sin contradicciones ni avisos persistentes no deseados.
7. **Capa de datos:** se incorporará solo cuando el equipo decida el mecanismo de almacenamiento y las necesidades de persistencia.

Los nombres y la separación definitivos de componentes se ajustarán a la tecnología confirmada.

## 4. Modelo de datos inicial

El modelo debe limitarse a los campos que sean necesarios para el MVP.

| Entidad propuesta | Campos posibles | Observaciones |
|---|---|---|
| Perfil | nombre, correo y otros campos aprobados | Confirmar campos y obligatoriedad. |
| Información de apoyo | datos definidos en el prototipo | Evitar información médica real en las pruebas. |
| Medicación | nombre y campos estrictamente necesarios, si se incluye | Pendiente de aprobación; utilizar solo datos ficticios. |
| Estado de interfaz | tipo de mensaje y texto | Los avisos deben poder cerrarse y desaparecer cuando corresponda. |

No se incorporarán datos médicos reales. Antes de almacenar información personal, el equipo deberá confirmar la finalidad, la necesidad y las medidas de protección aplicables.

## 5. Relación con Figma

Las pantallas implementadas deberán contrastarse con el prototipo compartido por el equipo. El enlace se añadirá en `spec.md`.

| Elemento del prototipo | Comprobación durante el desarrollo |
|---|---|
| Portada o pantalla inicial | Correspondencia visual y acceso a las secciones previstas. |
| Pantalla principal | Jerarquía clara y navegación comprensible. |
| Perfil | Campos, etiquetas y acciones acordados. |
| Información de apoyo o médica | Contenido y estados aprobados, con datos ficticios. |
| Pantallas secundarias | Acción de volver y coherencia de navegación. |
| Estados y avisos | Mensajes comprensibles, sin duplicados ni contradicciones. |

Esta tabla deberá actualizarse con los nombres exactos de las pantallas del prototipo.

## 6. Estrategia de pruebas

### 6.1. Pruebas funcionales
- Abrir cada pantalla incluida en el MVP.
- Recorrer todas las opciones de navegación.
- Comprobar la acción de volver desde las pantallas secundarias.
- Probar formularios con datos válidos, campos vacíos y formatos incorrectos.
- Comprobar el comportamiento del guardado según la persistencia acordada.
- Revisar los estados vacíos, los errores y el cierre de avisos.

### 6.2. Pruebas de interfaz y accesibilidad
- Revisar legibilidad, contraste y etiquetas de acciones.
- Comprobar que los mensajes no dependan únicamente del color.
- Revisar la interfaz en escritorio y en una resolución estrecha.
- Verificar que los avisos cerrados no permanezcan visibles ni reaparezcan sin una nueva condición que los justifique.

### 6.3. Pruebas de privacidad y revisión
- Utilizar datos ficticios.
- Revisar capturas, repositorio y documentación antes de compartirlos.
- Confirmar que las funciones implementadas no exceden el alcance aprobado.
- Registrar resultados y defectos detectados.

## 7. Orden de implementación propuesto

1. Confirmar alcance, pantallas y tecnología.
2. Preparar estructura inicial del proyecto.
3. Implementar navegación y estructura visual.
4. Implementar las funciones de perfil y apoyo que se aprueben.
5. Añadir validaciones y estados de interfaz.
6. Ejecutar las pruebas vinculadas a los criterios de aceptación.
7. Corregir defectos y revisar accesibilidad.
8. Actualizar documentación y preparar la demostración.

## 8. Riesgos y medidas

- **Alcance excesivo:** priorizar las funciones esenciales y posponer las no imprescindibles.
- **Tecnología sin confirmar:** no generar código definitivo hasta que el equipo acuerde el entorno.
- **Datos sensibles:** utilizar datos ficticios y evitar almacenar información médica real en el MVP.
- **Desajuste con Figma:** revisar las pantallas durante la implementación y registrar los cambios aprobados.
- **Propuestas incorrectas de IA:** revisar manualmente el código y comprobarlo contra los requisitos.

