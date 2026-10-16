# Especificación del MVP

## 1. Identificación

- **Proyecto:** Aplicación de acompañamiento para personas mayores con TEA.
- **Equipo:** GRUPO 5.
- **Integrantes:** Genesis Andrea Silva Acosta, Ignacio Andrés Leal Escarate, Adrià Martinez Gonzalez, Nuria Font Sanchez.
- **Prototipo de Figma:** (https://www.figma.com/design/wFi1na2A2qm5XPMxFVZVLr/PROYECTO-FINAL-GRUPO-5--FIGMA--NACHO--ANDREA--ADRI%C3%81--NURIA-?node-id=0-1&t=BRtDqXkVgRcB81gx-1)

## 2. Problema y contexto

Las personas mayores con trastorno del espectro autista pueden encontrar barreras para acceder a información organizada, mantener rutinas y localizar recursos de apoyo o actividades que favorezcan la participación social. Estas dificultades pueden contribuir a la sensación de aislamiento.

La aplicación pretende ofrecer una interfaz clara y previsible que reúna información personal relevante para el uso de la aplicación y facilite el acceso a funciones básicas de acompañamiento. La solución no sustituye la atención profesional ni pretende diagnosticar o tratar el TEA.

## 3. Usuarios previstos

- **Usuario principal:** persona mayor con TEA que necesita una interfaz comprensible y sencilla.
- **Usuario de apoyo:** persona cuidadora o profesional autorizado que puede ayudar a configurar o consultar información, si esta función se confirma en el alcance.
- **Equipo evaluador:** profesorado que revisará la documentación y el funcionamiento del MVP.

Los perfiles y permisos definitivos quedan pendientes de validación por el equipo.

## 4. Objetivo del MVP

Desarrollar una primera versión limitada y demostrable que permita recorrer las pantallas principales del prototipo y consultar o gestionar la información básica acordada. El MVP deberá priorizar la claridad, la navegación consistente y la validación de los datos introducidos.

## 5. Alcance

### 5.1. Funcionalidades incluidas propuestas
- Visualizar las pantallas principales del prototipo.
- Navegar entre las secciones disponibles mediante controles claros.
- Consultar y, si se confirma en el diseño y el plan, editar información básica del perfil.
- Mostrar información de apoyo o médica únicamente en el alcance aprobado y con datos ficticios durante la demostración.
- Validar los campos obligatorios y mostrar mensajes comprensibles.
- Presentar estados vacíos, confirmaciones y errores de forma coherente.

### 5.2. Funcionalidades excluidas del MVP
- Diagnóstico, recomendaciones clínicas o toma de decisiones médicas.
- Videollamadas, mensajería en tiempo real o chat social.
- Integración con hospitales, historiales médicos o servicios externos.
- Notificaciones push y seguimiento automatizado.
- Autenticación avanzada, roles complejos o gestión de permisos, salvo que el equipo lo acuerde expresamente.
- Publicación en tiendas de aplicaciones o despliegue de producción.

La inscripción en actividades, las plazas disponibles y otras funciones sociales solo se incluirán si forman parte del prototipo aprobado y el equipo las confirma como esenciales.

## 6. Requisitos funcionales

Los siguientes requisitos constituyen una propuesta inicial y deben contrastarse con el prototipo de Figma antes de cerrar la especificación.

- **RF-01 — Navegación:** Cuando el usuario seleccione una opción de navegación disponible, el sistema mostrará la sección correspondiente.
- **RF-02 — Perfil:** Cuando el usuario acceda a la sección de perfil, el sistema mostrará los campos definidos en el diseño aprobado.
- **RF-03 — Validación del perfil:** Cuando el usuario intente guardar información obligatoria incompleta o no válida, el sistema impedirá el guardado y mostrará un mensaje que identifique el campo que debe corregirse.
- **RF-04 — Confirmación:** Cuando la información introducida sea válida y se confirme el guardado, el sistema mostrará una confirmación comprensible.
- **RF-05 — Información de apoyo:** Cuando el usuario acceda a la sección de información de apoyo aprobada, el sistema mostrará los datos previstos por el diseño y utilizará datos ficticios en la demostración.
- **RF-06 — Estados de interfaz:** Cuando una sección no disponga de información para mostrar o se produzca un error, el sistema presentará un estado informativo coherente y evitará mostrar avisos contradictorios.
- **RF-07 — Coherencia de navegación:** Cuando el usuario utilice la acción de volver disponible en una pantalla secundaria, el sistema regresará a la pantalla anterior o a la pantalla principal, según el comportamiento definido en el prototipo.

## 7. Requisitos no funcionales verificables

- **RNF-01 — Legibilidad:** Todas las pantallas principales deberán poder revisarse sin que el texto esencial quede cortado en las resoluciones acordadas por el equipo.
- **RNF-02 — Comprensión:** Los botones y acciones principales utilizarán etiquetas descriptivas; no dependerán exclusivamente de iconos.
- **RNF-03 — Consistencia:** Los elementos de navegación y los mensajes equivalentes mantendrán el mismo estilo y comportamiento en todas las pantallas.
- **RNF-04 — Privacidad:** Las pruebas y capturas entregadas utilizarán datos ficticios y no incluirán información personal real.
- **RNF-05 — Mantenibilidad:** El código se organizará por responsabilidades y evitará duplicaciones innecesarias.
- **RNF-06 — Verificación:** Cada requisito funcional deberá vincularse, como mínimo, a una comprobación manual o automatizada documentada.
- **RNF-07 — Adaptabilidad:** La interfaz se comprobará en, al menos, una resolución de escritorio y una resolución estrecha de móvil, si la tecnología final lo permite.

## 8. Criterios de aceptación

- **CA-01:** Dada una pantalla principal, cuando el usuario seleccione una opción disponible, entonces se mostrará la sección correspondiente sin enlaces rotos.
- **CA-02:** Dado un formulario con campos obligatorios, cuando se intente guardar con un campo obligatorio vacío, entonces no se guardará la información y se mostrará un mensaje comprensible.
- **CA-03:** Dado un formulario con datos válidos, cuando el usuario confirme el guardado, entonces se mostrará una confirmación y el resultado será coherente con el mecanismo de almacenamiento acordado.
- **CA-04:** Dada una sección sin datos, cuando se abra, entonces se mostrará un estado vacío informativo en lugar de una pantalla rota o un aviso permanente contradictorio.
- **CA-05:** Cuando se active la acción de volver de una pantalla secundaria, entonces se regresará al destino definido en el prototipo.
- **CA-06:** En las capturas y pruebas entregadas no aparecerán datos personales reales.

## 9. Casos límite

- El usuario intenta guardar un formulario sin completar un campo obligatorio.
- El usuario introduce un valor con un formato no válido.
- Una sección todavía no contiene información.
- El usuario navega repetidamente entre secciones.
- Se produce un error al guardar o cargar información.
- Un mensaje de aviso se cierra y no debe reaparecer sin que ocurra de nuevo la condición que lo genera.
- La interfaz se visualiza en una pantalla estrecha.
- El prototipo contiene un campo cuya finalidad o persistencia no está definida.

## 10. Dudas pendientes

1. Confirmar el nombre definitivo de la aplicación y el identificador del equipo.
2. Añadir el enlace público o accesible para el profesorado al prototipo de Figma.
3. Confirmar las funcionalidades exactas que aparecen en el prototipo y cuáles son esenciales para el MVP.
4. Confirmar si el perfil incluye los campos nombre, correo, patrón, estado civil y fecha de nacimiento, y qué significa exactamente «patrón».
5. Confirmar si los datos médicos —grado de TEA, informe y medicación— serán solo información ficticia de demostración o se implementará su gestión.
6. Confirmar si habrá persistencia de datos y, en tal caso, qué mecanismo se utilizará.
7. Confirmar si existirán distintos tipos de usuario y permisos.
8. Confirmar tecnología, comandos de ejecución y estrategia definitiva de pruebas.

## 11. Definición de finalización del MVP

El MVP estará preparado para la revisión cuando las funcionalidades aprobadas estén implementadas, los criterios de aceptación se hayan comprobado, los errores conocidos estén documentados y los cinco documentos SDD estén actualizados y sean coherentes entre sí.
