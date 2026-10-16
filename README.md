# Proyecto SDD - App de apoyo para personas mayores con TEA


## 1. Identificación del proyecto

- **Identificador del grupo:** G05.
- **Metodología:** Spec Driven Development (SDD).
- **Temática:** la soledad de las personas mayores.
- **Solución:** aplicación web de apoyo para personas mayores con trastorno del espectro autista (TEA).
- **Estado:** desarrollo del MVP.

## 2. Propósito y usuarios

El objetivo del proyecto es diseñar una aplicación accesible y sencilla que ayude a las personas mayores con TEA a organizar sus actividades cotidianas, consultar información importante y mantener una mayor autonomía.

La solución busca facilitar la organización diaria, reducir las dificultades relacionadas con la gestión de rutinas y favorecer la conexión con las personas de su entorno, contribuyendo a reducir la soledad no deseada.

### Usuarios principales

- **Personas mayores con TEA:** usuarios principales de la aplicación, que podrán consultar sus rutinas, actividades e información personal.
- **Familiares y personas cuidadoras:** personas que pueden ayudar a organizar y consultar información relevante.
- **Profesionales de apoyo:** usuarios que pueden utilizar la información disponible para acompañar a la persona en su día a día.

La aplicación no sustituye la atención médica ni el acompañamiento profesional.

## 3. Funcionalidades

### Funcionalidades previstas en la solución

- **Inicio:** acceso sencillo a las secciones principales.
- **Rutinas:** organización de actividades y hábitos cotidianos.
- **Agenda:** consulta de actividades y acontecimientos importantes.
- **Comunicar:** acceso a opciones de comunicación y expresión de necesidades.
- **Ayuda:** acceso a información de apoyo.
- **Perfil:** consulta de información personal y preferencias.

### Funcionalidades disponibles en el MVP actual

La primera versión implementada utiliza HTML, CSS y JavaScript sin frameworks.

- Visualización de un listado de perfiles ficticios.
- Consulta de la ficha individual de cada perfil.
- Visualización de información médica de ejemplo.
- Navegación entre el listado y las fichas.
- Carga de los datos desde un archivo JSON local.

Las funcionalidades previstas que todavía no estén implementadas se consideran parte de la evolución futura del proyecto.

## 4. Tecnologías utilizadas

- **HTML5:** estructura de la aplicación.
- **CSS3:** estilos, distribución y presentación visual.
- **JavaScript:** comportamiento e interacciones.
- **JSON:** almacenamiento local de datos ficticios.
- **Python HTTP Server:** servidor local para ejecutar la aplicación durante el desarrollo.
- **Git y GitHub:** control de versiones y alojamiento del repositorio.
- **Figma:** diseño del prototipo y referencia visual.
- **Spec Driven Development (SDD):** metodología para definir requisitos, planificar la implementación y comprobar el cumplimiento de las especificaciones.

## 5. Requisitos previos

Para ejecutar el MVP en un ordenador se necesita:

- Un sistema operativo compatible con Python y un navegador moderno.
- Python 3 instalado.
- Git, si se desea clonar el repositorio.
- Acceso al repositorio del proyecto.
- Un navegador actualizado, como Chrome, Firefox o Edge.

No es necesario instalar Node.js, React, una base de datos ni dependencias de terceros para ejecutar la versión actual del MVP.

## 6. Instalación y ejecución

### 6.1. Iniciar el servidor local

Desde la carpeta raíz del proyecto, ejecuta:

```bash
python -m http.server 8000
```

En Windows, si el comando anterior no funciona, prueba:

```powershell
py -m http.server 8000
```

### 6.2. Abrir la aplicación

Abre el navegador y accede a:

http://localhost:8000

El servidor debe permanecer activo mientras se utiliza la aplicación.

Para detenerlo, vuelve a la terminal y pulsa `Ctrl + C`.

> **Importante:** ejecuta el servidor desde la carpeta raíz que contiene `index.html`. Así las rutas relativas de los archivos CSS, JavaScript y JSON podrán resolverse correctamente.

## 7. Carga de datos ficticios

El MVP utiliza datos de ejemplo almacenados en:

```text
data/perfiles.json
```

Actualmente, el proyecto cuenta con tres perfiles ficticios para comprobar la visualización de listados y fichas individuales.

Para cargar los datos:

1. Comprueba que existe el archivo `data/perfiles.json`.
2. Verifica que su contenido tiene un formato JSON válido.
3. Inicia el servidor local siguiendo los pasos anteriores.
4. Abre la aplicación y accede al listado de perfiles.
5. Selecciona un perfil para comprobar que se muestra su información.

Si se modifican los datos, guarda el archivo JSON y recarga la aplicación.

**Privacidad:** los datos deben ser ficticios. No se deben incluir nombres, historiales médicos ni otros datos personales reales en el repositorio.

## 8. Pruebas y comprobaciones

### 8.1. Ejecutar la aplicación

Para iniciar el servidor:

```bash
python -m http.server 8000
```

Para acceder a la aplicación:

```text
http://localhost:8000
```

### 8.2. Comprobaciones manuales

- [ ] La página inicial se carga sin errores.
- [ ] Se muestran los perfiles ficticios del archivo JSON.
- [ ] Se puede acceder a la ficha de un perfil.
- [ ] La información de la ficha corresponde al perfil seleccionado.
- [ ] La navegación entre el listado y las fichas funciona correctamente.
- [ ] Los datos JSON se cargan sin errores.
- [ ] La aplicación se puede utilizar con el ancho de pantalla del ordenador y del móvil.
- [ ] No aparecen errores inesperados en la consola del navegador.

### 8.3. Comprobar errores

Abre las herramientas de desarrollo del navegador con `F12` y revisa la pestaña **Console** para detectar errores de JavaScript.

En la pestaña **Network**, comprueba que los archivos HTML, CSS, JavaScript y JSON se cargan correctamente y que no aparecen errores como `404`.

### 8.4. Pruebas automatizadas

La versión actual del MVP no dispone de un comando de pruebas automatizadas confirmado. Por tanto, no se debe ejecutar un comando como `npm test` hasta que se haya configurado un sistema de pruebas compatible con el proyecto.

Las comprobaciones anteriores permiten verificar manualmente el funcionamiento de la versión actual.

## 9. Documentación del proyecto

La documentación se encuentra en los siguientes archivos y directorios del repositorio:

| Documento | Descripción |
|---|---|
| [`constitution.md`] | Principios y reglas del proyecto. |
| [`AGENTS.md`]| Instrucciones y contexto para trabajar con agentes de IA. |
| [`spec.md`]| Especificación del problema, requisitos y criterios de aceptación. |
| [`plan.md`] | Plan técnico de implementación. |
| [`tasks.md`] | Desglose de tareas. |
| [`implementacion-mvp.md`] | Documentación de la implementación del MVP. |

## 10. Prototipo de Figma

El diseño de la interfaz se documenta mediante el prototipo de Figma, que sirve como referencia visual para el desarrollo y la validación de la aplicación.

- **Prototipo de Figma:** `https://www.figma.com/design/wFi1na2A2qm5XPMxFVZVLr/PROYECTO-FINAL-GRUPO-5--FIGMA--NACHO--ANDREA--ADRI%C3%81--NURIA-?node-id=0-1&t=BRtDqXkVgRcB81gx-1`

El enlace debe permitir al profesorado consultar el prototipo sin solicitar permisos adicionales. Antes de entregar el proyecto, comprueba el acceso desde una sesión en la que no hayas iniciado sesión en tu cuenta de Figma.

## 11. Metodología SDD

El proyecto sigue el enfoque Spec Driven Development, que organiza el desarrollo a partir de una especificación explícita.

El proceso se estructura en las siguientes fases:

1. **Constitución:** definición de los principios y las reglas del proyecto.
2. **Especificación:** descripción del problema, los usuarios, los requisitos y los criterios de aceptación.
3. **Planificación:** selección de la solución técnica y organización de la implementación.
4. **Tareas:** división del trabajo en actividades concretas.
5. **Implementación:** desarrollo progresivo del MVP siguiendo las especificaciones.
6. **Validación:** comprobación del comportamiento implementado frente a los requisitos.

El uso de inteligencia artificial debe seguir las reglas del proyecto y estar sujeto a revisión humana.

## 13. Estado del proyecto

El proyecto se encuentra en la fase de desarrollo y validación del MVP. La aplicación actual permite consultar perfiles ficticios y sus fichas desde una interfaz web.

Los siguientes pasos consisten en mejorar la interfaz, contrastarla con el prototipo de Figma, verificar la accesibilidad y ampliar las funcionalidades de acuerdo con los requisitos y criterios de aceptación definidos en la documentación SDD.

---
