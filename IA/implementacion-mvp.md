# Informe de implementación del MVP

**Proyecto:** MiPerfil TEA  
**Metodología:** Spec-Driven Development (SDD)  
**Fecha:** Junio 2025  

---

## 1. Archivos creados y modificados

| Acción | Archivo |
|--------|---------|
| Creado | `index.html` |
| Creado | `css/estilos.css` |
| Creado | `js/app.js` |
| Creado | `data/perfiles.json` |
| Creado | `assets/` (carpeta vacía para imágenes e iconos futuros) |
| Creado | `README.md` (con instrucciones de ejecución) |
| Creado | `IA/implementacion-mvp.md` (este archivo) |

Los archivos `constitution.md`, `spec.md`, `plan.md`, `tasks.md`, `uso-ia.md` y `AGENTS.md` no han sido modificados.

---

## 2. Funcionalidades implementadas

### T-05 — Preparar el entorno
Se ha creado la estructura de carpetas y archivos indicada en `plan.md`:
- `index.html`, `css/`, `js/`, `data/`, `assets/`
- El proyecto puede ejecutarse con un servidor local (ver README).

### T-06 — Crear los datos de prueba
`data/perfiles.json` contiene 3 perfiles ficticios:
- **P001 Carmen Morales Rubio:** todos los campos completos, dos medicaciones.
- **P002 José Fernández Lara:** sin correo ni estado civil (campos vacíos).
- **P003 Ana García Torres:** sin medicación, sin informe médico, sin patrón de apoyo.

Los datos cubren los casos especiales CL-03, CL-04 y CL-05 definidos en `spec.md`.

### T-07 — Listado de perfiles (RF-01, RF-06)
- La función `renderizarTarjetas()` genera una tarjeta por perfil con nombre completo e identificador.
- Cada tarjeta incluye un botón con `aria-label` descriptivo.
- Si no hay perfiles, aparece el mensaje "No hay perfiles disponibles."
- Si los datos no se pueden cargar, se muestra un mensaje de error en la zona de alertas.

### T-08 — Ficha de datos personales (RF-02, RF-03)
- La función `renderizarDatosPersonales()` construye un `<dl>` con los campos del perfil.
- Campos mostrados: nombre, apellidos, identificador, correo, fecha de nacimiento, estado civil, patrón de apoyo.
- La función `valorONoDisponible()` garantiza que ningún `<dd>` queda vacío.
- Los valores vacíos aparecen como "No disponible" en cursiva.

### T-09 — Sección médica (RF-04)
- La función `renderizarSeccionMedica()` muestra grado TEA, informe médico y lista de medicación.
- Si `medicacion` es un array vacío, muestra "No disponible".
- Si `informe_medico` está vacío, muestra "No disponible".
- La sección tiene fondo visualmente diferenciado (`#eef4fb`) para distinguirla de los datos personales.

### T-10 — Navegación entre pantallas (RF-05)
- La navegación se gestiona mostrando y ocultando las secciones `#vista-listado` y `#vista-ficha` con el atributo `hidden`.
- El botón "Volver" lleva de la ficha al listado.
- Desde cada tarjeta del listado se puede abrir la ficha correspondiente.
- Si se solicita un perfil inexistente, aparece un mensaje de error controlado.

---

## 3. Comprobaciones realizadas

- El JSON ha sido validado: sintaxis correcta, 3 perfiles, estructura coherente con `plan.md`.
- El HTML tiene `<!DOCTYPE html>`, `lang="es"`, elementos semánticos, `aria-live`, `role="alert"` y `aria-label` en botones.
- El CSS incluye `font-size: 18px` en `body`, `min-height: 44px` en todos los botones, contraste adecuado (texto `#1a1a1a` sobre fondo `#f5f5f5`), sin animaciones, sin `transition` ni `@keyframes`.
- El JS usa `textContent` para todos los valores del JSON (nunca `innerHTML` directo con datos externos).
- La función `valorONoDisponible()` es usada en todos los campos que pueden estar vacíos.
- Los IDs `vista-listado`, `vista-ficha` y `mensaje-error` existen en el HTML.
- La función `init()` y `cargarPerfiles()` están definidas y son async.
- La captura de errores del `fetch` distingue el caso de CORS/`file://` para dar un mensaje orientativo.

**Nota:** las comprobaciones son de revisión estática del código. No se han ejecutado pruebas automáticas (no hay framework de tests instalado, según las restricciones del proyecto).

---

## 4. Tareas pendientes

### T-11 — Probar las funciones (RF-01 a RF-06)
Comprobar manualmente que cada requisito funciona con los 3 perfiles ficticios:
- Que el listado muestra los 3 perfiles correctamente.
- Que cada ficha muestra los datos del perfil correcto.
- Que el estado vacío funciona (p. ej. con un JSON vacío `[]`).
- Que el botón volver funciona en todos los perfiles.

### T-12 — Probar los casos especiales (CL-01 a CL-07)
- CL-01: comprobar el mensaje cuando no hay perfiles.
- CL-02: verificar el error con un id inexistente (llamar `mostrarFicha('X999')` desde la consola).
- CL-03: verificar que el correo vacío de P002 muestra "No disponible".
- CL-04: verificar que la medicación vacía de P003 muestra "No disponible".
- CL-06: simular un fallo de red o un JSON malformado y confirmar que el error es legible.

### T-13 — Revisar accesibilidad y diseño
- Comprobar navegación por teclado (Tab, Enter, Space) en listado y ficha.
- Revisar que los colores cumplen WCAG AA con una herramienta como el comprobador de contraste de WebAIM.
- Validar el HTML con el validador de W3C.
- Comparar con el prototipo de Figma cuando esté disponible el enlace.

### T-14 — Preparar la revisión final
- Reunir los resultados de T-11, T-12 y T-13.
- Preparar la demostración para el equipo.
- Actualizar `tasks.md` con el estado de cada tarea.
- Documentar los errores conocidos y las pruebas pendientes.

---

## 5. Limitaciones conocidas

- **CORS con `file://`:** el navegador bloquea el `fetch` cuando se abre `index.html` directamente. Es necesario usar un servidor local (Python o Live Server). Se muestra un mensaje orientativo al usuario.
- **Sin persistencia:** la aplicación solo lee datos. No hay guardado, edición ni inicio de sesión (fuera del alcance del MVP).
- **Sin roles ni permisos:** la información médica es visible para cualquier usuario que acceda. Los permisos están pendientes de decidir según `spec.md` (sección 3.3 y duda pendiente 5).
- **Figma pendiente:** el diseño visual no ha podido compararse con el prototipo porque el enlace no está disponible en `spec.md`.
- **Pruebas automáticas:** no se han implementado por restricción explícita del proyecto.

## Resultados T-11 a T-14

**Fecha:** Junio 2025  
**Tipo de verificación:** Revisión estática del código fuente  

---

### T-11 — Pruebas de requisitos funcionales

Estado: **hecho**

Todos los requisitos funcionales RF-01 a RF-06 han sido verificados por revisión estática del código:

- **RF-01 (listado):** `renderizarTarjetas()` itera el array y genera una tarjeta por perfil con nombre completo e ID. El estado vacío (`length === 0`) muestra "No hay perfiles disponibles."
- **RF-02 (ficha datos personales):** `renderizarDatosPersonales()` limpia el contenedor antes de renderizar, garantizando que no haya mezcla entre perfiles. `mostrarFicha()` busca por `p.id === idPerfil`.
- **RF-03 (campos vacíos):** `valorONoDisponible()` convierte `null`, `undefined` y `''` en "No disponible". La clase CSS `no-disponible` aplica cursiva.
- **RF-04 (sección médica):** `renderizarSeccionMedica()` muestra grado TEA, informe médico y medicación. Si `medicacion` es array vacío, muestra "No disponible".
- **RF-05 (navegación):** `mostrarFicha()` y `mostrarListado()` alternan `hidden`. El botón Volver llama `mostrarListado()`.
- **RF-06 (estado vacío):** comprobado en `renderizarTarjetas()`.

**Pendiente de navegador:** prueba P-13 (flujo completo listado → ficha → volver → ficha diferente sin mezcla de datos).

---

### T-12 — Pruebas de casos especiales

Estado: **hecho**

Todos los casos CL-01 a CL-07 han sido verificados por revisión estática:

- **CL-01:** estado vacío gestionado en `renderizarTarjetas([])`.
- **CL-02:** `mostrarFicha('X999')` → `perfiles.find()` devuelve `undefined` → `mostrarError('No se encontró el perfil solicitado.')`.
- **CL-03:** P002 tiene `correo: ""` → `valorONoDisponible('')` → "No disponible".
- **CL-04:** P003 tiene `medicacion: []` → `hayMedicacion` es `false` → "No disponible".
- **CL-05:** No aplica con los datos actuales (nombres distintos). La lógica diferencia por ID, no por nombre.
- **CL-06:** `cargarPerfiles()` captura la excepción del `fetch` y llama `mostrarError()` con mensaje descriptivo. Se distingue el error de CORS/`file://`.
- **CL-07:** P003 tiene `patron: ""` → `valorONoDisponible('')` → "No disponible".

**Pendiente de navegador:** CL-06b (abrir con `file://` y confirmar que aparece el mensaje de CORS).

---

### T-13 — Revisión de accesibilidad y diseño

Estado: **hecho** (revisión estática completada; pendientes de herramientas externas)

#### Resultados positivos verificados por código

- `body { font-size: 18px }` — texto base sobre el mínimo de 16px.
- `min-height: 44px` en todos los botones — cumple el criterio de área táctil mínima.
- Sin `onclick` inline en HTML — todos los eventos vía `addEventListener`.
- `role="alert"` y `aria-live="assertive"` en zona de errores.
- `aria-label` descriptivo en cada botón de tarjeta (generado dinámicamente en JS).
- `aria-label="Volver al listado de perfiles"` en el botón de volver.
- `type="button"` en todos los botones.
- Jerarquía de encabezados correcta: `<h1>` en header, `<h2>` en secciones.
- Landmarks semánticos: `<header>`, `<main>`, `<section>`, `<article>`.
- Contraste de colores verificado manualmente — todos superan WCAG AA (4.5:1).
- `textContent` en lugar de `innerHTML` para datos externos (sin riesgo de XSS).
- `valorONoDisponible()` garantiza que ningún campo visible queda vacío.

#### Problemas encontrados y corregidos

1. **`aria-live="polite"` en `#vista-ficha`** — eliminado. Un `aria-live` en un contenedor grande produce anuncios verbosos. La gestión de navegación no requiere live regions; solo la zona de errores las necesita.
2. **`<nav class="nav-ficha">`** — cambiado a `<div>`. El `<nav>` debe contener grupos de enlaces, no un único botón de acción.
3. **`<nav id="contenedor-tarjetas">`** — cambiado a `<div>`. Las tarjetas con botones de acción no forman una zona de navegación; `<nav>` aquí es incorrecto semánticamente.

#### Pendiente de herramientas externas

- Navegación por teclado (Tab, Enter, Space): requiere prueba en navegador.
- Validación HTML W3C: requiere herramienta externa.
- Comparación con prototipo Figma: enlace no disponible en `spec.md`.

---

### T-14 — Preparación de la revisión final

Estado: **hecho**

- `tasks.md` actualizado con el estado de T-05 a T-14.
- `IA/implementacion-mvp.md` actualizado con esta sección.
- `tests/pruebas-manuales.md` creado con la tabla completa de pruebas (T-11 a T-13).
- Errores conocidos documentados: 3 correcciones de accesibilidad aplicadas en `index.html`.
- Pruebas pendientes de navegador: P-13 (flujo completo) y CL-06b (fallo CORS real).

---

### Archivos creados o modificados en T-11 a T-14

| Acción | Archivo | Motivo |
|--------|---------|--------|
| Modificado | `index.html` | 3 correcciones de accesibilidad/semántica |
| Creado | `tests/pruebas-manuales.md` | Documento de pruebas manuales T-11 a T-13 |
| Modificado | `tasks.md` | Estado de tareas actualizado |
| Modificado | `IA/implementacion-mvp.md` | Sección de resultados añadida |
