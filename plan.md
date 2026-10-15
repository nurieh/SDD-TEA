# plan tecnico del mvp

## 1. objetivo

definir como vamos a crear la aplicacion para personas mayores con tea.

la aplicacion debe ser sencilla, facil de mantener y cumplir los requisitos de `spec.md` y el diseño de figma.

antes de empezar a programar, el equipo debe revisar y aprobar este plan.

## 2. tecnologias

### 2.1. propuesta inicial

las tecnologias propuestas son:

- html: estructura de las pantallas.
- css: diseño y estilos.
- javascript: botones, navegacion e interacciones.
- almacenamiento: pendiente de decidir.
- herramientas de desarrollo: pendiente de confirmar.
- pruebas: pendiente de elegir las herramientas.

esta propuesta debe aprobarla el equipo antes de empezar.

### 2.2. motivo de la propuesta

html, css y javascript permiten crear una aplicacion web sencilla sin utilizar herramientas demasiado complejas.

el almacenamiento de los datos y su seguridad se decidiran mas adelante.

los datos locales de prueba no deben utilizarse para guardar informacion medica real sin haber definido antes como protegerla.

## 3. estructura de la aplicacion

la aplicacion se dividira en tres partes.

### 3.1. interfaz

se encarga de mostrar las pantallas y permitir que el usuario interactue con ellas.

debe permitir:

- ver la lista de perfiles.
- abrir la ficha de una persona.
- consultar la informacion personal y medica permitida.
- mostrar mensajes de error y avisos cuando falten datos.
- moverse entre las diferentes pantallas.

### 3.2. logica de la aplicacion

se encarga de controlar lo que ocurre cuando el usuario utiliza la aplicacion.

debe permitir:

- identificar el perfil seleccionado.
- obtener la informacion correcta.
- validar los datos de los formularios, si los hay.
- controlar los perfiles que no existen.
- mostrar los estados de carga y error cuando sea necesario.

### 3.3. acceso a los datos

se encarga de proporcionar los datos que necesita la aplicacion.

al principio se utilizaran datos inventados para las pruebas.

antes de decidir el sistema definitivo, hay que definir:

- donde se guardaran los perfiles.
- como se identificara cada perfil.
- como se consultaran los datos.
- si se podran editar los perfiles.
- como se protegera la informacion personal y medica.

no se guardaran datos medicos reales hasta que se hayan definido las medidas de seguridad necesarias.

## 4. datos de los perfiles

### 4.1. perfil personal

cada perfil podra tener estos campos:

| campo | descripcion |
|---|---|
| id | identificador unico del perfil |
| nombre | nombre de la persona |
| apellidos | apellidos de la persona |
| correo | correo electronico, si esta disponible |
| fecha_nacimiento | fecha de nacimiento |
| estado_civil | estado civil, si se incluye |
| patron | preferencia o patron de apoyo, pendiente de definir |

### 4.2. informacion medica

la informacion medica podra incluir:

| campo | descripcion |
|---|---|
| perfil_id | identificador del perfil al que pertenece |
| grado_tea | informacion sobre el grado de tea, pendiente de definir |
| informe_medico | referencia al informe, si se incluye |
| medicacion | lista de medicacion, si se incluye |

los campos definitivos dependeran de los requisitos de `spec.md` y del diseño aprobado en figma.

se utilizaran datos inventados para las pruebas y se evitara guardar informacion duplicada.

## 5. pantallas y requisitos

la aplicacion tendra estas pantallas, segun lo que se apruebe finalmente:

| pantalla | funcion | requisitos |
|---|---|---|
| listado de perfiles | mostrar los perfiles disponibles | rf-01, rf-06 |
| ficha personal | mostrar los datos personales | rf-02, rf-03 |
| apartado medico | mostrar los datos medicos autorizados | rf-04 |
| navegacion | moverse entre el listado y las fichas | rf-05 |
| mensajes y errores | avisar cuando falten datos o haya errores | rf-06 |

antes de programar estas pantallas, hay que comprobar que coinciden con figma y con los requisitos de `spec.md`.

## 6. organizacion de los archivos

si finalmente hacemos una aplicacion web sencilla, podemos utilizar esta estructura:

- `index.html`: pagina principal.
- `css/`: archivos de estilos.
- `js/`: codigo javascript.
- `data/`: datos inventados para las pruebas, si hace falta.
- `assets/`: imagenes e iconos.
- `tests/`: pruebas del proyecto, si se utiliza una herramienta de pruebas.
- `README.md`: informacion e instrucciones del proyecto.

esta estructura es una propuesta y puede cambiar cuando se decidan las tecnologias definitivas.

## 7. pruebas

### 7.1. pruebas de funcionamiento

hay que comprobar que:

- se muestra la lista de perfiles.
- cada perfil muestra sus propios datos.
- la aplicacion funciona cuando no hay perfiles.
- se puede volver al listado.
- los campos opcionales vacios se muestran correctamente.

### 7.2. casos especiales

tambien hay que probar:

- que ocurre cuando se busca un perfil que no existe.
- como se muestran los perfiles con datos incompletos.
- que pasa cuando dos perfiles tienen el mismo nombre.
- que los errores al obtener datos no muestran informacion incorrecta.
- que los permisos funcionan correctamente, si se implementan.

### 7.3. interfaz y accesibilidad

hay que comprobar que:

- los textos y etiquetas sean faciles de entender.
- la informacion se pueda leer correctamente.
- los botones y controles sean faciles de identificar.
- se pueda navegar con el teclado cuando corresponda.
- la aplicacion se adapte a los tamaños de pantalla previstos.
- las pantallas coincidan con el diseño de figma.

### 7.4. resultados de las pruebas

por cada prueba se anotara:

- identificador de la prueba.
- requisito relacionado.
- datos utilizados.
- resultado esperado.
- resultado obtenido.
- estado de la prueba: superada o fallida.
- errores o problemas encontrados.

## 8. orden de trabajo

1. revisar y aprobar los documentos del proyecto.
2. elegir las tecnologias y preparar la estructura.
3. crear los datos inventados para las pruebas.
4. desarrollar el listado de perfiles.
5. desarrollar la ficha personal.
6. añadir la informacion medica aprobada.
7. completar la navegacion y los mensajes de error.
8. realizar las pruebas de funcionamiento.
9. revisar la accesibilidad y el diseño.
10. corregir los errores encontrados.
11. documentar los resultados y preparar la demostracion.

## 9. cosas pendientes de decidir

antes de continuar con el desarrollo, el equipo debe decidir:

- tecnologias: confirmar cuales se utilizaran.
- almacenamiento: decidir donde se guardaran los datos.
- privacidad: definir como se protegera la informacion.
- funciones: confirmar si los perfiles solo se consultaran o tambien se podran editar.
- diseño: revisar las pantallas de figma.
- tiempo: dar prioridad a las funciones mas importantes y dejar las secundarias para mas adelante.

## 10. cuando se termina el trabajo tecnico

el mvp estara preparado para su validacion cuando:

- las funciones aprobadas esten implementadas.
- se hayan realizado las pruebas previstas.
- los resultados esten documentados.
- los errores conocidos y las pruebas pendientes esten anotados.

no se debe dar el proyecto por terminado si faltan comprobaciones importantes.