# instrucciones para la ia

estas son las reglas que debe seguir la ia al trabajar en el proyecto.

## 1. contexto del proyecto

el proyecto trata sobre la soledad de las personas mayores. nuestra idea es crear una aplicacion para personas mayores con trastorno del espectro autista (tea), que les ayude a organizar su informacion de forma sencilla y accesible.

vamos a utilizar la metodologia spec-driven development (sdd), por lo que primero hay que definir bien lo que debe hacer la aplicacion antes de empezar a programarla.

## 2. objetivo de la ia

la ia debe ayudarnos a:

- entender y mejorar los requisitos.
- proponer soluciones que encajen con el proyecto.
- dividir el trabajo en tareas pequeñas.
- revisar que los requisitos y el codigo sean coherentes.
- detectar errores y problemas de accesibilidad.
- proponer pruebas para comprobar que todo funciona.

la ia no puede tomar decisiones importantes sobre las funciones o los datos personales sin consultar al equipo.

## 3. archivos que debe revisar

antes de hacer cambios importantes, la ia debe consultar:

- `constitution.md`: reglas y principios del proyecto.
- `spec.md`: funciones y requisitos de la aplicacion.
- `plan.md`: tecnologias, estructura y pruebas.
- `task.md`: tareas pendientes y su estado.
- `uso-ia.md`: registro del uso de la ia, cuando sea necesario.

tambien debe revisar el prototipo de figma si esta disponible.

si encuentra contradicciones entre archivos, debe avisar al equipo antes de continuar con la parte afectada.

## 4. tecnologias y codigo

las tecnologias se decidiran entre todos y se anotaran en `plan.md`.

hasta entonces, la ia debe:

- no elegir tecnologias sin permiso.
- no instalar dependencias sin explicar para que sirven.
- no inventar comandos.
- no cambiar la estructura acordada sin consultar.
- mantener los archivos ordenados.

al programar debe:

- usar nombres faciles de entender.
- evitar repetir codigo sin necesidad.
- hacer que cada modulo tenga una funcion clara.
- comprobar los datos antes de utilizarlos.
- controlar los errores.
- seguir las normas del lenguaje utilizado.
- añadir comentarios cuando ayuden a entender el codigo.

## 5. accesibilidad

la aplicacion debe ser facil de entender y utilizar para las personas a las que va dirigida.

la ia debe:

- crear una navegacion sencilla y clara.
- utilizar textos y botones faciles de entender.
- evitar pantallas demasiado cargadas.
- mostrar mensajes claros cuando haya errores o cuando una accion termine.
- no utilizar solo colores para transmitir informacion.
- respetar el diseño de figma aprobado.

no todas las personas mayores con tea tienen las mismas necesidades, por lo que las decisiones de diseño deben adaptarse a los usuarios previstos.

## 6. privacidad y datos personales

la informacion personal y medica debe tratarse con cuidado.

la ia debe:

- utilizar datos inventados para las pruebas y los ejemplos.
- evitar mostrar datos reales en el codigo o las capturas.
- proteger la informacion medica y limitar su acceso a los usuarios autorizados.
- no añadir funciones medicas que no esten aprobadas por el equipo.
- avisar si encuentra problemas de seguridad o privacidad.

## 7. como debe trabajar la ia

para cada tarea, la ia debe seguir estos pasos:

1. revisar que requisito y tarea hay que completar.
2. comprobar si hay dependencias o decisiones pendientes.
3. revisar si tiene suficiente informacion para empezar.
4. proponer una solucion sencilla.
5. explicar que archivos va a crear o modificar.
6. hacer los cambios cuando se le pida.
7. ejecutar las pruebas disponibles.
8. comprobar si se cumplen los requisitos.
9. indicar los errores y las pruebas pendientes.
10. actualizar la documentacion si es necesario.

## 8. pruebas

la ia debe comprobar que las funciones funcionan como se espera.

si es posible, debe revisar:

- que las funciones hagan lo que deben.
- que los campos obligatorios se validen correctamente.
- que se controlen los datos incorrectos o incompletos.
- que los mensajes de error sean claros.
- que la interfaz cumpla los requisitos.
- que los cambios no estropeen funciones anteriores.

la ia nunca debe decir que una prueba ha funcionado si no la ha ejecutado o no tiene resultados que lo demuestren.

## 9. dudas y decisiones pendientes

si falta informacion, la ia debe:

- explicar que informacion necesita.
- indicar que archivos se ven afectados.
- hacer una pregunta concreta al equipo.
- dejar la decision como pendiente si no se puede resolver.
- no inventar requisitos ni decisiones tecnicas.

si puede avanzar en otra parte de la tarea sin afectar a esa decision, puede hacerlo.

## 10. comandos del proyecto

los comandos se definiran cuando se elijan las tecnologias.

por ahora quedan pendientes:

- instalar las dependencias.
- iniciar la aplicacion.
- ejecutar las pruebas.
- comprobar el formato y la calidad del codigo.
- preparar la version final.

cuando el equipo confirme las herramientas, la ia debe completar esta seccion con comandos reales y comprobar que funcionan.

## 11. cuando se termina una tarea

una tarea se considera terminada cuando:

- cumple lo indicado en `task.md`.
- los requisitos siguen siendo correctos.
- se han ejecutado las pruebas necesarias o se han anotado las pendientes.
- no se han hecho cambios importantes sin permiso.
- el equipo puede entender y revisar el resultado.