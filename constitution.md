# App de apoyo a personas mayores con TEA (Trastorno del Espectro Autista)

## 1. Proposito del proyecto

El objetivo del proyecto es desarrollar una app que facilite el apoyo y la atencion a personas mayores, mas especificamente con Trastorno del Espectro Autista (TEA), mediante una interfaz accesible y una organicacion clara de la informacion.

La app se desarrollara siguiente la metodologia Spec-Driven Development (SDD). Antes de implementar nuevas funciones, estas deberan estar definidas en los documentos de especificacon del proyecto.

## 2. Principios

### Accesibilidad y usabilidad

* la interfaz ha de ser sencilla, coherente y facil de comprender
* los textos usaran un lenguaje claro, directo y sin instrucciones innecesariamente complejas
* lso botones y elementos con los que se interactuen tienen que tener etiquertas comprensibles
* la informacion importante no se comunicara unicamente mediante colores
* se evitaran las animaciones innecesarias, elementos parpadeantes y cambios visuales bruscos
* la navegacion mantendra una estructura consistenete entre pantallas
* los formularios deberan identificar los campos oblifatorios y explicar los errores de validacion

### Proteccion de datos y privacidad

* solo se recogeran los datos necesarios para las funcionalidades incluidas en el mvp
* los datos personales y medicos se trataran como informacion especialmente sensible
* No se utilizaran los datos reales de personas mayores en pruebas, capturas o demostraciones sin la autorizacion correspondiente
* se utilizaran datos ficticios para el desarrolo y pruebas
* no se mostraran contraseñas, credenciales ni informaciuon personal innecesaria en los registros de ejecuccion
* el acceso a la informacion debera ajustarse a los permisos que se definan en la explicaion
* antes de utilizar datos relaes, se definiran y revisaran las medidas de seguirdad, conservacion y eliminacion de datos aplicables

### calidad del codigo

* el codigo estara organizado en modulos con responsabilidades claras
* los nombres de variables, funciones, claases y archivos deberan ser descriptivos y coherentes
* se evitara duplicar codigo cuando exista una solucion reutilizable y comprensible
* las entradas del usuario deben validarse antes de procesar y guardar
* los errores se gestionaran de forma controlada y mostrar mensajes comprensibles
* los cambiios deberan comprobarse antes de considerarse terminados
* las decisiones tecnicas han de ser coherentes con spec.ms plan.md y tasks.md

### uso responsable de la IA

* las propuestas de la IA seran revisadas por un integrante del equipo antes de incorporarse al proyecto
* la ia no podra amplificar el alcance del MVP sin aprobacion 
* las respuestas de la ia no se consideran correctas automaticamente
* el codigo generado debera revisarse y probarse antes de integrarse
* no se facilitara a la IA credenciales ni datos personales o medicos reales
* las decisiones importantes y los cambios relevantes deberan documnetarse
* el uso de IA duratante las fase SDD se registrara en uso-ia.md, incluyecdo propuestas aceptadas, modificas o descartadas

### choerencia con el prototipo

* las pantallas y funcionalidades implementadas deberan corresponderse con las decisiones aprobadas en el prototipo del Figma
* los cambios de diseño que afecten al funcionameniento deberan revisarse antes de implementarse
* no se añadiran funcionalidades que no esten definidas en la especificacion aprobada

## 3. Reglas de desarrollo

1. antes de implementar una funcionalidad, se consultaran sus requisitos en spec.md
2. antes de modificar la arquitectuta o las tecnologias, se revisara plan.md
3. cada tarea debera estar identificada en task.md y contar con un criterio de finalizacion verificable
4. una funcionalidad no se considera terminada hasta que se compruebe su criterio de aceptacion
5. las modificaciones de requisitos deberan reflejarse en los documentos afectados
6. cuando exista una contradiccion entre documentos se detendra la implementacion de la parte afectada hasta que el grupo encuentre una solucion

## 4. Criterios de calidad del MVP

el MVP se considedara preparado para su validacion cuando:

* las funcionalidades incluidas esten implementadas segun los requisitos aprobados
* las validaciones d elos formularios funcionen correctamente
* los errores previsibles se gestionen de froma controlada
* las pantallas principales puedan utilizarse mediantes una navegacion clara
* se hayan ejecutado pruebas definidas en el plan
* no queden errores conocidos que impidas utilizar las funcionaldades escenciales

## 5. Revision del constitution.md

el constitution.md podra modificarse cuadno el grupo lo necesite. Cualquier cambio debera quedar documentado y ser cohrente con el objetivo del proyecto, el alcance del mvp y los requisitos de accesibilidad y privacidad.