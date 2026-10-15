# Tareas del MVP de Conecta**

Tareas de implementación y validación derivadas de los requisitos de `spec.md`. Las funciones pendientes de concretar deberán definirse antes de implementarse.

## 1. Definición del alcance**

## T-01. Confirmar las funciones del MVP**

* Requisitos relacionados: todos los RF.
* Dependencias: ninguna.
* Responsable: por asignar.
* Hecho cuando: el equipo ha confirmado en `spec.md` qué funciones se incluyen y cuáles quedan fuera del MVP.

# T-02. Concretar los comportamientos pendientes**

* Requisitos relacionados: RF-05, RF-06, RF-07, RF-12, RF-13, RF-14 y RF-15.
* Dependencias: T-01.
* Responsable: por asignar.
* Hecho cuando: `spec.md` describe qué ocurre al añadir actividades, cambiar ajustes, usar SOS, abrir Agenda y Comunicar, y seleccionar «Todo está bien».

## 2. Implementación**

### T-03. Crear Inicio y la navegación principal**

* Requisitos relacionados: RF-01 y RF-02.
* Dependencias: T-01.
* Responsable: por asignar.
* Hecho cuando: desde Inicio se puede abrir cada sección incluida en el MVP y volver a la navegación principal.

### T-04. Mostrar las actividades del día**

* Requisitos relacionados: RF-03.
* Dependencias: T-03.
* Responsable: por asignar.
* Hecho cuando: «Mi día» muestra las actividades previstas, su hora y su estado.

# T-05. Permitir completar actividades**

* Requisitos relacionados: RF-04.
* Dependencias: T-04.
* Responsable: por asignar.
* Hecho cuando: al marcar una actividad como completada, su estado se actualiza y se distingue de las pendientes.

### T-06. Implementar el flujo para añadir actividades**

* Requisitos relacionados: RF-05.
* Dependencias: T-02 y T-04.
* Responsable: por asignar.
* Hecho cuando: el usuario puede añadir una actividad con los campos acordados y recibe un aviso si falta un campo obligatorio.

### T-07. Implementar los ajustes**

* Requisitos relacionados: RF-06 y RF-07.
* Dependencias: T-02 y T-03.
* Responsable: por asignar.
* Hecho cuando: el usuario puede seleccionar las opciones acordadas de contraste y notificaciones, y la pantalla muestra cuáles están seleccionadas.

## T-08. Mostrar el perfil y su información asociada**

* Requisitos relacionados: RF-08, RF-09 y RF-10.
* Dependencias: T-03.
* Responsable: por asignar.
* Hecho cuando: se puede consultar el perfil y, cuando haya información disponible, abrir el informe médico y consultar la lista de medicación del perfil correspondiente.

# T-09. Implementar las opciones de SOS**

* Requisitos relacionados: RF-11 y RF-12.
* Dependencias: T-02 y T-03.
* Responsable: por asignar.
* Hecho cuando: SOS muestra las opciones acordadas y cada una inicia la acción de contacto definida en `spec.md`.

# T-10. Implementar Agenda y Comunicar**

* Requisitos relacionados: RF-13 y RF-14.
* Dependencias: T-02 y T-03.
* Responsable: por asignar.
* Hecho cuando: ambas secciones muestran el contenido y permiten las acciones que el equipo haya definido en `spec.md`.

# T-11. Implementar «Todo está bien»**

* Requisitos relacionados: RF-15.
* Dependencias: T-02 y T-03.
* Responsable: por asignar.
* Hecho cuando: la opción realiza la acción acordada y el resultado queda claro para el usuario.

## 3. Validación del MVP**
### T-12. Revisar accesibilidad y estados de pantalla**

* Requisitos relacionados: RNF-01, RNF-02 y casos límite de `spec.md`.
* Dependencias: las tareas de implementación de las pantallas incluidas en el MVP.
* Responsable: por asignar.
* Hecho cuando: se han revisado los estados normal, vacío y error, y la información importante no depende únicamente del color.

### T-13. Comprobar los criterios de aceptación**

* Requisitos relacionados: todos los criterios de aceptación de `spec.md`.
* Dependencias: las tareas de implementación y T-12.
* Responsable: por asignar.
* Hecho cuando: cada criterio aplicable se ha comprobado y su resultado está registrado. Los errores encontrados se han corregido o anotado como pendientes.

# T-14. Revisar la coherencia de la entrega**

* Requisitos relacionados: todos.
* Dependencias: T-01 a T-13.
* Responsable: por asignar.
* Hecho cuando: `spec.md`, `plan.md`, `tasks.md` y el prototipo describen el mismo alcance aprobado para el MVP.