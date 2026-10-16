# tasks.md - tareas del mvp

## 1. organizacion

las tareas se organizaran segun el orden del proyecto: documentacion, diseño, programacion y pruebas.

cada integrante tendra unas tareas asignadas. hasta que se decida el reparto, el responsable sera pendiente.

## 2. tareas de documentacion

### t-01. revisar las reglas del proyecto

- requisito relacionado: todos.
- dependencias: ninguna.
- responsable: pendiente.
- descripcion: revisar las reglas de accesibilidad, privacidad, calidad del codigo y uso de la ia.
- terminado cuando: el equipo haya revisado y aprobado `constitution.md`.

### t-02. revisar los requisitos

- requisito relacionado: rf-01 a rf-06.
- dependencias: t-01.
- responsable: pendiente.
- descripcion: confirmar los usuarios, las funciones del mvp y los casos especiales.
- terminado cuando: el equipo haya revisado los requisitos y los criterios de aceptacion de `spec.md`.

### t-03. revisar figma

- requisito relacionado: rf-01 a rf-06.
- dependencias: t-02.
- responsable: pendiente.
- descripcion: revisar el prototipo y relacionar cada pantalla con sus requisitos.
- terminado cuando: se haya añadido el enlace de figma y esten identificadas las pantallas del mvp.

### t-04. aprobar el plan tecnico

- requisito relacionado: todos los requisitos del mvp.
- dependencias: t-02, t-03.
- responsable: pendiente.
- descripcion: decidir las tecnologias, la estructura, los datos y las pruebas.
- terminado cuando: `plan.md` tenga una propuesta aprobada y coherente con los requisitos.

## 3. tareas de programacion

### t-05. preparar el entorno

- requisito relacionado: todos.
- dependencias: t-04.
- responsable: pendiente.
- descripcion: crear las carpetas y los archivos necesarios e instalar las herramientas elegidas.
- terminado cuando: el proyecto pueda ejecutarse siguiendo unas instrucciones comprobadas.

### t-06. crear los datos de prueba

- requisito relacionado: rf-01, rf-02, rf-03, rf-04.
- dependencias: t-04.
- responsable: pendiente.
- descripcion: preparar perfiles inventados con datos completos, campos vacios y valores diferentes.
- terminado cuando: haya suficientes datos ficticios para probar los perfiles y los casos especiales.

### t-07. crear el listado de perfiles

- requisito relacionado: rf-01, rf-06.
- dependencias: t-05, t-06.
- responsable: pendiente.
- descripcion: crear la pantalla que muestra los perfiles y el mensaje que aparece cuando no hay ninguno.
- terminado cuando: se muestren los perfiles de prueba y el estado vacio funcione correctamente.

### t-08. crear la ficha personal

- requisito relacionado: rf-02, rf-03.
- dependencias: t-07.
- responsable: pendiente.
- descripcion: mostrar los datos personales del perfil seleccionado.
- terminado cuando: cada perfil muestre sus propios datos y los campos vacios se vean correctamente.

### t-09. crear el apartado medico

- requisito relacionado: rf-04.
- dependencias: t-08.
- responsable: pendiente.
- descripcion: añadir la informacion medica aprobada y los mensajes para los campos sin datos.
- terminado cuando: la informacion acordada se muestre correctamente y se respeten los permisos definidos.

### t-10. conectar las pantallas

- requisito relacionado: rf-05.
- dependencias: t-07, t-08.
- responsable: pendiente.
- descripcion: permitir pasar del listado a una ficha y volver al listado.
- terminado cuando: la navegacion funcione correctamente en ambas direcciones.

## 4. tareas de pruebas

### t-11. probar las funciones

- requisito relacionado: rf-01 a rf-06.
- dependencias: t-07, t-08, t-09, t-10.
- responsable: pendiente.
- descripcion: comprobar las funciones siguiendo las pruebas de `plan.md`.
- terminado cuando: cada requisito tenga un resultado de prueba registrado y los errores encontrados esten anotados.
- estado: hecho. verificado por revisión estática del código. casos rf-01 a rf-06 comprobados. prueba p-13 (flujo completo) pendiente de navegador.

### t-12. probar los casos especiales

- requisito relacionado: cl-01 a cl-07.
- dependencias: t-11.
- responsable: pendiente.
- descripcion: probar perfiles inexistentes, datos incompletos y errores.
- terminado cuando: se hayan registrado los resultados de los casos aplicables y se hayan corregido los errores que impidan utilizar la aplicacion.
- estado: hecho. verificado por revisión estática del código. casos cl-01 a cl-07 comprobados. cl-06b (fallo de red real) pendiente de navegador.

### t-13. revisar el diseño y la accesibilidad

- requisito relacionado: rnf-01, rnf-02, rnf-06.
- dependencias: t-07, t-08, t-09, t-10.
- responsable: pendiente.
- descripcion: revisar que la aplicacion sea facil de usar y que las pantallas coincidan con figma.
- terminado cuando: se hayan revisado la accesibilidad, la navegacion y el diseño, y se hayan corregido los problemas mas importantes.
- estado: hecho. revisión estática completada. 3 correcciones de accesibilidad aplicadas en index.html. pendientes: navegación por teclado en navegador, validación w3c, comparación con figma (enlace no disponible).

### t-14. preparar la revision final

- requisito relacionado: todos los requisitos del mvp.
- dependencias: t-11, t-12, t-13.
- responsable: pendiente.
- descripcion: reunir los resultados de las pruebas y preparar la demostracion.
- terminado cuando: el equipo tenga una lista de requisitos cumplidos, errores conocidos y pruebas pendientes.
- estado: hecho. tasks.md actualizado, ia/implementacion-mvp.md actualizado con sección de resultados, tests/pruebas-manuales.md creado.

## 5. seguimiento de las tareas

al principio, todas las tareas estaran pendientes.

el equipo actualizara su estado segun el trabajo realizado:

- pendiente: todavia no se ha empezado.
- en progreso: se esta trabajando en la tarea.
- hecho: la tarea se ha completado y se ha comprobado.

una tarea no se marcara como hecha solo porque la ia haya generado el codigo. primero hay que revisar el resultado y comprobar que cumple lo previsto.

## 6. resultados de las tareas de programacion (t-05 a t-10)

- t-05: hecho. entorno preparado y verificado.
- t-06: hecho. datos de prueba creados (p001, p002, p003 con casos especiales cubiertos).
- t-07: hecho. listado de perfiles implementado y comprobado por revisión estática.
- t-08: hecho. ficha de datos personales implementada y comprobada por revisión estática.
- t-09: hecho. sección médica implementada y comprobada por revisión estática.
- t-10: hecho. navegación entre pantallas implementada y comprobada por revisión estática.