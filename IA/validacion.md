# validacion

## 1. objetivo

en este documento se recogen las comprobaciones realizadas para verificar que la aplicacion cumple los requisitos definidos en `spec.md`.

para cada comprobacion se indica que se quiere validar, como se comprueba, cual ha sido el resultado y que evidencia lo demuestra.

las pruebas sirven para detectar errores y comprobar que las funcionalidades funcionan como se espera.

## 2. relacion entre requisitos y pruebas

las pruebas se relacionaran con los requisitos funcionales y los criterios de aceptacion definidos en `spec.md`.

| id | requisito o funcionalidad | comprobacion | resultado | evidencia |
|---|---|---|---|---|
| val-01 | acceso a la aplicacion | comprobar que se puede acceder a la pantalla principal | pendiente de validar | pendiente |
| val-02 | visualizacion del perfil | comprobar que los datos del perfil se muestran correctamente | pendiente de validar | pendiente |
| val-03 | informacion medica | comprobar que la informacion medica se muestra correctamente | pendiente de validar | pendiente |
| val-04 | validacion de formularios | introducir datos incorrectos y comprobar que se detectan | pendiente de validar | pendiente |
| val-05 | privacidad | revisar que no se muestran datos personales a usuarios no autorizados, si esta funcionalidad esta implementada | pendiente de validar | pendiente |

los requisitos definitivos y sus identificadores deben coincidir con los de `spec.md`. si alguna de estas funcionalidades no forma parte del MVP, se eliminara o se sustituira por una que si este incluida.

## 3. pruebas principales

### 3.1 flujo principal

**id:** val-01

**objetivo:** comprobar que una persona puede acceder a la aplicacion y utilizar una de las funcionalidades principales.

**pasos:**
1. abrir la aplicacion.
2. acceder a la pantalla principal.
3. entrar en la seccion del perfil.
4. comprobar que la informacion se muestra correctamente.

**resultado esperado:** la aplicacion permite acceder a la pantalla principal y consultar la informacion del perfil sin errores.

**resultado obtenido:** pendiente de realizar.

**evidencia:** pendiente de adjuntar una captura de pantalla o un registro de la prueba.

### 3.2 caso de error

**id:** val-02

**objetivo:** comprobar que la aplicacion controla los datos incorrectos introducidos en un formulario.

**pasos:**
1. abrir el formulario correspondiente.
2. dejar vacio un campo obligatorio o introducir un dato con un formato incorrecto.
3. intentar guardar o enviar la informacion.
4. comprobar la respuesta de la aplicacion.

**resultado esperado:** la aplicacion detecta los datos incorrectos, informa del problema y evita guardar informacion no valida cuando corresponda.

**resultado obtenido:** pendiente de realizar.

**evidencia:** pendiente de adjuntar una captura del mensaje de error o un registro de la prueba.

### 3.3 caso limite

**id:** val-03

**objetivo:** comprobar como responde la aplicacion cuando se introduce un valor en el limite permitido.

**pasos:**
1. abrir un formulario que tenga limites definidos para alguno de sus campos.
2. introducir un valor justo en el limite permitido.
3. guardar la informacion.
4. comprobar que el resultado es correcto.

**resultado esperado:** la aplicacion acepta los valores que cumplen los limites establecidos y no genera errores inesperados.

**resultado obtenido:** pendiente de realizar.

**evidencia:** pendiente de adjuntar una captura o un registro con el valor utilizado y el resultado.

el limite concreto se definira segun las reglas del campo que se haya implementado. no se considerara validado hasta haber realizado la comprobacion.

## 4. pruebas automatizadas

las pruebas automatizadas permiten comprobar algunas funcionalidades mediante codigo, sin tener que repetir manualmente todos los pasos.

**estado actual:** pendiente de confirmar si se han desarrollado pruebas automatizadas.

| prueba | que comprueba | resultado | evidencia |
|---|---|---|---|
| test de validacion de datos | que los datos incorrectos se rechazan | pendiente | archivo de test y resultado de ejecucion |
| test de campos obligatorios | que no se aceptan campos obligatorios vacios | pendiente | archivo de test y resultado de ejecucion |

si no se han desarrollado estas pruebas, se indicara que todavia estan pendientes. no se afirmara que existen ni que se han ejecutado si no es cierto.

cuando se desarrollen, se adjuntaran los archivos de test y la salida de la ejecucion, indicando si han pasado o han fallado.

## 5. evidencias

las evidencias serviran para demostrar que las comprobaciones se han realizado realmente.

se pueden incluir:

- capturas de pantalla de la aplicacion.
- capturas de los mensajes de error.
- resultados de las pruebas automatizadas.
- registros de ejecucion.
- archivos de test utilizados.

las evidencias se guardaran en una carpeta llamada `evidencias/`, organizadas por identificador de prueba.

ejemplo de organizacion:

- `evidencias/val-01-flujo-principal.png`
- `evidencias/val-02-caso-error.png`
- `evidencias/val-03-caso-limite.png`
- `evidencias/tests-automatizados.txt`

estos archivos son ejemplos de nombres y solo se incluiran cuando las evidencias existan.

## 6. comprobaciones pendientes

las comprobaciones que no se hayan podido realizar se indicaran en este apartado.

por ahora, deberan quedar pendientes las pruebas que dependan de funcionalidades que todavia no esten implementadas o que no se hayan podido ejecutar.

| comprobacion pendiente | motivo | que falta para validarla |
|---|---|---|
| flujo principal | pendiente de realizar la prueba | ejecutar la aplicacion y guardar la evidencia |
| caso de error | pendiente de comprobar la validacion | probar el formulario con datos incorrectos |
| caso limite | pendiente de definir o comprobar el limite | realizar la prueba con un valor limite |
| pruebas automatizadas | pendiente de confirmar su desarrollo | crear o ejecutar los tests correspondientes |

no se considerara que una funcionalidad esta validada solo porque este descrita en la documentacion o aparezca en el diseño de figma.

## 7. conclusion

la validacion permite comprobar si la aplicacion cumple los requisitos definidos para el MVP.

cada prueba debe tener un resultado esperado, un resultado obtenido y una evidencia que permita verificarlo.

las pruebas pendientes se realizaran cuando las funcionalidades correspondientes esten disponibles. cualquier error detectado debera revisarse antes de dar la funcionalidad por validada.