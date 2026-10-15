# Instrucciones para asistentes de IA
Reglas que deben respetar tanto equipo como IA.
## 1. Contexto del proyecto

El tema del proyecto es la soledad de las personas mayores. La solucion elegida por el grupo consiste en desarrollar una aplicacion orientada a personas mayores con trastorno del espectro autista (TEA), con el objetivo de facilitar el apoyo y organizacion de su informacion mediante una experiencia accesible.

La aplicacion se especificara mediante la metodologia Spec-Driven Development (SDD). Los documentos SDD deberan definir el comportamiento esperado sntes de implementar el MVP.

## 2. Objetivo del asistente

El asistente de IA debera ayudar al grupo a:

* interpretar y mantener actualizados los requisitos
* proponer soluciones tecnicas compatibles con el alcance aprobado
* dividir las funcionalidades en tareas pequeñas y verificables
* revisar la coherencia entre requisitos, arquitetctura, implementacion y pruebas
* identificar errores, casos limite y posibles problemas de accesibilidad
* proponer pruebas para comprobar los criterios de aceptacion

el asistente No debera tomar decisiones importantes sobre el alcance o el tratamiento de datos sensibles sin la aprobacion del equipo.

## 3. Documentacion que debe consultar

Antes de realizar cambios relevantes, el asistente debera revisar los siguientes archivos:

* constitution.md -> principios y reglas obligatorias del proyecto
* spec.md -> funcionalidades, requisitos y criterios de aceptacion
* plan.md -> tecnologias, arquitectuta, datos y estrategia de pruebas
* task.md -> tareas previstas, dependencias y responsables
* uso-ia.md -> registro del uso de inteligencia artificial, cuando sea relevante

Tambien debera consultar el prototipo de Figma indicado en spec.md, siempre que este disponible

Si existe una contradiccion entre documentos, debera señalarla y solicitar una solucion antes de implementar la parte afectada.

## 4. Tecnolgia y concenciones

las tecnologias definitivas deberan ser las aprobadas por el grupo y documentadas en el plan.md

hasta que se confirme el entorno tecnico:

* no se supondra que el proyecto utiliza un framework concreto
* no se crearan dependencias nuevas sin justificar su necesidad
* no se inventaran comandos de instalacion, ejecución o pruebas
* no se cambiara la arquitectuara acordadda sin aprobacion
* se mantendra una organizacion clara de los archivos y componentes

convenciones de codigo

* utilizar nombres descriptivos para variables, funcioones, clases y componentes
* mantender cada modulo centrado en una responsabilidad
* evitar duplicaciones innecesarias
* validar las entradas antes de procesarlas
* gestionar los errores de forma controlada
* seguir el formato y las convenciones del lenguaje y las herramientas elegidas
* añadir comentarios cuando ayuden a comprender decisiones o comportamientos no evidentes.

## 5. Accesibilidad y experiencia de usuario

Toda propuesta de interfaz debe respetar los principos definidos en constitution.md

el asistente debe: 

* priorizar una navegacion predecibles
* utilizar etiquetas y mensajes claros
* evitar elementos visuales innecesariamente complejos
* comprobar que los estados de error, carga, vacio y exito se comuniquen cuando correspondan
* evitar depender exclusivamente del color para transmitir informacion
* mantender la coherencia con el prototipo aprobado

no se debera asumir que todas las personas mayores con TEA tienen las mismas necesidades. las decisiones de accesibilidad se justificaran a partir de los usuarios previstos y de las necesidades identificadas por el equipos.

## 6. Privacidad y tratamiento de datos

el asistente debera tratar los datos personales y medicos como informacion sensible

* utilizar datos ficticios durante el desarrollo y pruebas, por lo tanto no debera incluir datos reales en ejemplos de codigo, registros o ca`pturas
* que la informacion medica no sea accesible para cualquier usuario sin permisos previos
* no añadir funciones de diagnostico, recomendacion medica o modificacion de tratamiento que no esten aprobadas
* señalar los riesgos de privacidad y seguridad que detecte

## 7. Flujo de trabajo obligatorio

para cada tarea, el asistente debe seguir este proceso:
 1. identificar el requisito y la tarea relacionados
 2. Revisar las dependecias y las decisiones tecnicas aplicables
 3. comprobar si existe la informacion suficiente para comenzar
 4. proponer una solucion limitada al alcance
 5. explicar los archivos que se crearan o modificaran
 6. implementar los cambios solo cuando se solicite
 7. ejecutar las comprobaciones disponibles
 8. comparar los resultados con los criterios de aceptacion
 9. indicar los errores, limitaciones y pruebas pendientes
 10. proponer actualizaciones de la documentacion si algo ha cambiado

## 8. Pruebas y validación

el asistente debera proponer y ejecutar, cuando se disponga d elo necesario, las comprobaciones definidas en el plan.md

como minimo se revisara:
* comportamiento esperado de las funcionalidades
* validacion de campos obligatorios y formatos incorrectos
* geation de datos inexistentes o incompletos
* mensajes de error y estados alternativos
* coherencia entre interfaz y requisitos
* regresion de las funcionalidades ya implementadas

no ha de afirmar que una prueba se ha ejecutado correctamente si no dispone de resultados que lo demuestre

## 9. Gestion de dudas

si falta informacion que se necesita el asistente ha de:

* explicar que datos falta
* identificar los documentos que afecta
* formular una pregunta concreta al grupo
* marcar la decision como pendiente cuando no sea posible resolverla
* evitar inventar requisitos, tecnologias, permisos, rutas o comportamientos

si puede avanzar en una parte independiente de la tarea, podra hacerlo sin dar por confirmadas las decisiones pendientes

## 10. Comandos de proyecto

los comandos definitivos se estableceran cuando el grupo confime las tecnologias y la estrucuta del repositorio

* instalacion de dependencias: PENDIENTE de confirmar el entorno
* inicio de la aplicacion: PENDIENTE de confirmar el entorno
* ejecucion de pruebas: PENDIENTE de confirmar las herramientas
* comprobación de formato y calidad: PENDIENTE de confirmar las herramientas
* construccion para entregar: PENDIENTE de confirmar el sistema de despliegue

el asistente debera sustituir estos marcadores por comandos reales cuando se hayan definido y comprobado.

## 11. Criterio de finalizacion

Una tarea solo se considerará terminada cuando:

* Se haya cumplido su criterio de finalización en tasks.md.
* Los requisitos relacionados sigan siendo coherentes.
* Se hayan ejecutado las pruebas aplicables o se hayan documentado las pendientes.
* No se hayan introducido cambios de alcance sin aprobación.
* El equipo pueda revisar y comprender la solución propuesta.
