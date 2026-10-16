# Problema y usuarios
Conecta esta pensado para personas mayores conTEA. El proyecto busca facilitar la organizacion de su dia y el acceso a opciones de apoyo mediante una aplicacio accesible.

# Objetivo del MVP
Permitir que el usuario consulte sus actividades, acceda a las secciones principales de la aplicación y encuentre las opciones de ayuda SOS disponibles en el prototipo.

# Funcionalidades incluidas

* Inicio con accesos a Rutinas, Agenda, Ayuda y Comunicar, y la opción «Todo está bien».
* Consulta de las actividades del día, sus horarios y estados.
* Acceso al flujo para añadir una actividad.
* Ajustes de contraste y notificaciones.
* Consulta del perfil, del informe médico si está disponible y de la lista de medicación.
* Pantalla SOS con opciones para contactar con médico, familiar o policía.


# Funcionalidades excluidas
Propuestas de funciones fuera del MVP porque no se ven definidas en el prototipo:

* Seguimiento continuo de la ubicación.

* Llamadas de emergencia automáticas sin que el usuario las inicie.

* Diagnóstico o recomendaciones médicas.

* Mensajería entre usuarios.

# Requisitos funcionales

RF-1-Inicio: Cuando el susario abra la aplicacion, el sistema sebera mostrar los accesos a Rutinas, Agenda, Ayuda, Comunicar, y la opcion <<Todo esta bíen>>

RF-2-Navegación: Cuando el usuario seleccione un acceso de Inicio
RF-3- Actividades: cuando el usuario abra <<Mi día>>, el sistema deberá mostrar las actividades previstas su hora y su estado.

RF-04 — Completar actividad: Cuando el usuario marque una actividad como completada, el sistema deberá actualizar su estado.

RF-05 — Añadir actividad: Cuando el usuario seleccione «Añadir actividad», el sistema deberá iniciar el flujo para añadir una actividad. Los campos y las validaciones quedan pendientes de definir.

RF-06 — Contraste: Cuando el usuario seleccione una opción de contraste, el sistema deberá indicar cuál está seleccionada. Queda pendiente definir si se aplica inmediatamente y si se guarda.

RF-07 — Notificaciones: Cuando el usuario seleccione «Sí» o «No», el sistema deberá indicar qué opción está seleccionada. Queda pendiente definir qué notificaciones se envían.

RF-08 — Perfil: Cuando el usuario abra «Mi perfil», el sistema deberá mostrar la información disponible para ese perfil.

RF-09 — Informe médico: Si el perfil tiene un informe médico disponible, cuando el usuario seleccione «Ver informe médico», el sistema deberá mostrarlo.

RF-10 — Medicación: Cuando el usuario consulte «Lista de medicación», el sistema deberá mostrar la medicación registrada para ese perfil.

RF-11 — SOS: Cuando el usuario abra SOS, el sistema deberá mostrar las opciones disponibles para médico, familiar y policía.

RF-12 — Contacto SOS: Cuando el usuario seleccione una opción de contacto, el sistema deberá iniciar la acción correspondiente. Queda pendiente definir si abre una llamada o pide confirmación.

RF-13 — Agenda: Cuando el usuario seleccione Agenda, el sistema deberá abrir esa sección. Su contenido y sus acciones quedan pendientes de definir.

RF-14 — Comunicar: Cuando el usuario seleccione Comunicar, el sistema deberá abrir esa sección. Sus opciones quedan pendientes de definir.

RF-15 — «Todo está bien»: Cuando el usuario seleccione esta opción, el sistema deberá realizar la acción que acuerde el equipo. Queda pendiente definir si solo confirma el estado o si también informa a otra persona.

# Requisitos no funcionales verificables

RNF-01: En las pantallas del MVP, ningún estado u opción importante se comunicará únicamente mediante el color; también tendrá texto, icono o forma que permita distinguirlo.

RNF-02: Cada botón de las pantallas principales tendrá una etiqueta que permita identificar su acción.

RNF-03: En las pruebas y demostraciones se usarán datos ficticios.

RNF-04: Si una acción falla, la aplicación mostrará un mensaje comprensible en lugar de dejar la pantalla sin respuesta.

# Criterios de aceptación

CA-01: Al abrir Inicio, se muestran los accesos y la opción «Todo está bien» indicados en RF-01.

CA-02: En «Mi día», cada actividad visible muestra una hora y un estado.

CA-03: Al marcar una actividad como completada, su estado cambia.

CA-04: En Ajustes se identifica qué opción de contraste y notificaciones está seleccionada.

CA-05: Al abrir SOS, se muestran las opciones de contacto disponibles.

CA-06: Si no hay un informe médico para el perfil, la aplicación no muestra el informe de otra persona.

CA-07: Si una acción falla, aparece un mensaje comprensible.

# Casos límite

 * El usuario no tiene actividades programadas.

* Todas las actividades están completadas.

* El usuario intenta guardar una actividad sin completar un campo obligatorio.

* No hay informe médico o medicación registrada.

* No hay un contacto disponible para una opción de SOS.

* No se puede iniciar la acción de contacto SOS.

* No se puede aplicar o guardar un ajuste.