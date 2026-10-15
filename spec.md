# spec.md - especificacion del mvp

## 1. informacion general

- proyecto: app de apoyo a personas mayores con tea.
- centro: monlau fp.
- modulo: proyecto interdisciplinar / sdd.
- curso: 2026-2027.
- etapa: 2o dam / 2o daw.
- equipo: pendiente de completar.
- integrantes: pendiente de completar.
- enlace de figma: pendiente de añadir.
- estado: borrador para revisar con el equipo.

## 2. problema que queremos resolver

la soledad puede afectar al bienestar de las personas mayores. las personas mayores con trastorno del espectro autista (tea) pueden tener diferentes necesidades para comunicarse, entender la informacion y organizar su entorno.

nuestra idea es crear una aplicacion que permita consultar y organizar la informacion de las personas atendidas mediante una interfaz sencilla y accesible.

no todas las personas con tea tienen las mismas necesidades, por lo que el diseño debe adaptarse a los usuarios previstos.

tambien hay que concretar como esta aplicacion ayudara a afrontar la soledad. organizar informacion puede mejorar la atencion, pero no significa que la soledad vaya a desaparecer por si sola.

## 3. usuarios de la aplicacion

### 3.1. usuario principal

el usuario principal sera el personal autorizado que necesite consultar la informacion de las personas atendidas.

la aplicacion debe permitirle:

- encontrar perfiles facilmente.
- consultar los datos personales de forma ordenada.
- acceder a los apartados disponibles de cada ficha.
- entender los mensajes y errores.

### 3.2. personas beneficiarias

las personas beneficiarias seran las personas mayores con tea, que podran recibir una atencion mejor organizada y adaptada a sus necesidades.

la aplicacion debe tratar a estas personas con respeto y no asumir que todas necesitan el mismo tipo de ayuda.

### 3.3. permisos

los roles y permisos estan pendientes de decidir.

la informacion medica no debe ser publica. antes de utilizar datos reales, el equipo debe decidir quien puede consultarla y como se protegera.

## 4. objetivo del mvp

el objetivo es crear una primera version funcional que permita consultar perfiles y ver sus datos personales y la informacion medica autorizada.

el mvp debe centrarse en:

- una interfaz sencilla y accesible.
- una navegacion coherente con figma.
- mostrar los datos correctos.
- validar los datos de los formularios, si los hay.
- controlar los errores y los datos incompletos.
- comprobar el funcionamiento mediante pruebas.

## 5. funciones incluidas y excluidas

### 5.1. funciones incluidas

el mvp incluira inicialmente:

1. mostrar una lista de perfiles de ejemplo.
2. abrir la ficha de una persona.
3. consultar sus datos personales.
4. consultar la informacion medica aprobada.
5. mostrar mensajes cuando falten datos.
6. navegar entre las pantallas principales.

el almacenamiento definitivo, la edicion de perfiles, el inicio de sesion y los permisos estan pendientes de confirmar en `plan.md`.

### 5.2. funciones excluidas

por ahora, la aplicacion no incluira:

- diagnosticos de tea.
- recomendaciones medicas automaticas.
- cambios en tratamientos o medicacion.
- chats con profesionales o familiares.
- videollamadas.
- conexion con dispositivos medicos.
- notificaciones automaticas.
- conexiones con otros servicios que no se hayan aprobado.
- funciones que no esten definidas en los requisitos.

estas funciones solo podran añadirse en futuras versiones si el equipo lo aprueba.

## 6. requisitos funcionales

### rf-01. mostrar perfiles

la aplicacion debe mostrar los perfiles disponibles.

criterios de aceptacion:

- si hay perfiles, se mostraran con los datos identificativos definidos en figma.
- si no hay perfiles, aparecera un mensaje claro.
- los perfiles se podran distinguir sin depender solo del color.

### rf-02. abrir una ficha

la aplicacion debe permitir abrir la ficha de un perfil seleccionado.

criterios de aceptacion:

- al seleccionar un perfil existente, se abrira su ficha.
- la ficha mostrara los datos de la persona correcta.
- si el perfil no existe, aparecera un mensaje de error y se podra volver al listado.

### rf-03. consultar datos personales

la ficha mostrara los datos personales aprobados.

campos propuestos:

- nombre y apellidos.
- correo electronico, si esta disponible.
- fecha de nacimiento.
- estado civil, si se mantiene en el diseño.
- patron o preferencia de apoyo, si se define su significado.

criterios de aceptacion:

- todos los campos tendran etiquetas claras.
- si falta un dato opcional, se indicara de forma adecuada.
- no se inventaran valores para completar campos vacios.

### rf-04. consultar informacion medica

la ficha podra mostrar la informacion medica aprobada.

campos propuestos:

- grado de tea, si se define como se registra.
- informe medico, si forma parte del prototipo.
- lista de medicacion, si se incluye en el mvp.

criterios de aceptacion:

- la informacion solo se mostrara a los usuarios autorizados, si se implementan permisos.
- si no hay informacion medica, se indicara claramente.
- la aplicacion no generara diagnosticos ni recomendaciones medicas.
- no se mostraran datos medicos en mensajes de error ni en registros innecesarios.

### rf-05. navegacion

la aplicacion debe permitir moverse entre el listado y las fichas.

criterios de aceptacion:

- se podra abrir una ficha desde el listado.
- cada ficha tendra una forma clara de volver al listado.
- los controles tendran nombres claros y funcionaran de forma coherente.

### rf-06. mensajes y errores

la aplicacion debe informar de los estados importantes.

criterios de aceptacion:

- si no hay perfiles, aparecera un mensaje.
- si ocurre un error, se mostrara una explicacion sencilla.
- si los datos se estan cargando, se indicara.
- si un dato no existe, no se mostrara como si estuviera disponible.

## 7. requisitos no funcionales

### rnf-01. accesibilidad

los textos deben ser claros, las etiquetas descriptivas y la navegacion consistente. la informacion importante no dependera solo de los colores.

comprobacion: revisar las pantallas y probar la navegacion.

### rnf-02. facilidad de uso

las funciones principales deben poder utilizarse sin necesitar instrucciones tecnicas.

comprobacion: una persona que no haya desarrollado la aplicacion intentara consultar la lista y abrir una ficha utilizando la propia interfaz.

### rnf-03. privacidad

se utilizaran datos inventados para las pruebas. la informacion medica no se mostrara fuera de los contextos autorizados.

comprobacion: revisar los datos de prueba, las pantallas y los permisos implementados.

### rnf-04. datos correctos

los datos mostrados deben corresponder al perfil seleccionado.

comprobacion: probar al menos dos perfiles ficticios con informacion diferente.

### rnf-05. codigo organizado

el codigo debe estar separado en partes claras, con una funcion definida para cada una.

comprobacion: revisar la estructura y comprobar que el codigo no mezcle responsabilidades sin necesidad.

### rnf-06. control de errores

los errores previsibles no deben provocar que se muestre informacion incorrecta ni mensajes tecnicos dificiles de entender.

comprobacion: probar perfiles inexistentes, campos vacios y errores de entrada cuando corresponda.

### rnf-07. rendimiento

las pantallas deben responder de forma fluida en el dispositivo o navegador elegido.

comprobacion: probar la navegacion en el entorno acordado.

el objetivo concreto de rendimiento queda pendiente de decidir cuando se elijan las tecnologias.

## 8. casos especiales

| id | situacion | resultado esperado |
|---|---|---|
| cl-01 | no hay perfiles | mostrar un mensaje indicando que no hay perfiles |
| cl-02 | el perfil no existe | mostrar un error controlado |
| cl-03 | falta el correo | indicar que no hay datos disponibles |
| cl-04 | no hay informacion medica | mostrar un mensaje en ese apartado |
| cl-05 | dos perfiles tienen el mismo nombre | distinguirlos mediante un identificador u otro dato permitido |
| cl-06 | ocurre un error al obtener los datos | informar del problema sin mostrar informacion sensible |
| cl-07 | un usuario no tiene permiso | impedir el acceso y mostrar un aviso, si se implementan permisos |

## 9. requisitos en formato ears

cuando sea necesario, los requisitos se escribiran utilizando el formato ears trabajado en clase.

ejemplos:

- general: la aplicacion debe mostrar etiquetas faciles de entender.
- al realizar una accion: cuando el usuario seleccione un perfil existente, se mostrara su ficha.
- durante un proceso: mientras se cargan los datos, se mostrara un indicador de carga.
- ante un error: si el perfil no existe, se mostrara un mensaje de error.
- funcion opcional: si se aprueba guardar los perfiles, la aplicacion los conservara mediante el sistema de almacenamiento elegido.

## 10. relacion con figma

figma sera la referencia para el diseño de la aplicacion.

queda pendiente completar:

- enlace al prototipo.
- pantalla principal o listado.
- pantalla de datos personales.
- pantalla de informacion medica.
- pantallas de error y otros estados.

antes de programar, se debe comprobar que las pantallas coinciden con los requisitos y resolver las diferencias que se encuentren.

## 11. dudas pendientes

el equipo debe decidir:

1. que tecnologias se utilizaran.
2. quien utilizara directamente la aplicacion: profesionales, familiares, personas mayores u otros usuarios.
3. si solo se podran consultar perfiles o tambien crearlos y editarlos.
4. donde se guardaran los datos.
5. si habra inicio de sesion y permisos.
6. que significa exactamente el campo "patron".
7. que informacion medica se mostrara.
8. como se consultaran los informes medicos y en que formato.
9. cuales son las pantallas definitivas de figma.
10. quien se encargara de cada parte del proyecto.

## 12. cuando se acepta el mvp

el mvp estara preparado para su validacion cuando:

- se pueda ver la lista de perfiles de ejemplo.
- se pueda abrir la ficha correcta.
- los datos personales y medicos incluidos se muestren correctamente.
- se controlen los perfiles inexistentes y los campos vacios.
- la navegacion funcione.
- se hayan realizado y documentado las pruebas.
- la aplicacion cumpla los requisitos aprobados y coincida con figma.

## 13. cambios en los requisitos

cualquier funcion nueva o cambio importante debe revisarse antes de implementarse.

cuando el equipo apruebe un cambio, se actualizaran los documentos afectados, incluyendo `plan.md`, `task.md` y las pruebas cuando sea necesario.