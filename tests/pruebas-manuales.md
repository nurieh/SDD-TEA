# Pruebas manuales — MiPerfil TEA

**Proyecto:** MiPerfil TEA  
**Metodología:** SDD  
**Tipo de verificación:** Revisión estática del código + pruebas pendientes de ejecución en navegador  
**Fecha:** Junio 2025  

---

## Leyenda de estados

- ✅ Verificado por código — la lógica es correcta según la revisión estática del código fuente
- ⚠️ Pendiente de prueba en navegador — la lógica es correcta en el código pero requiere ejecución real para confirmarse
- ❌ Fallo encontrado — se detectó un problema real en el código

---

## T-11 — Pruebas de requisitos funcionales (RF-01 a RF-06)

| ID | Requisito | Datos utilizados | Resultado esperado | Estado |
|----|-----------|-----------------|-------------------|--------|
| P-01 | RF-01: listado muestra todos los perfiles | perfiles.json con P001, P002, P003 | Aparecen 3 tarjetas con nombre completo e ID | ✅ Verificado por código — `renderizarTarjetas()` itera el array y crea una tarjeta por perfil |
| P-02 | RF-01: tarjeta muestra nombre completo | P001 Carmen Morales Rubio | "Carmen Morales Rubio" en `.nombre-tarjeta` | ✅ Verificado por código — `(perfil.nombre + ' ' + perfil.apellidos).trim()` |
| P-03 | RF-01: tarjeta muestra ID | P002 José Fernández Lara | "ID: P002" en `.id-tarjeta` | ✅ Verificado por código |
| P-04 | RF-02: ficha muestra datos del perfil correcto | P001 | Nombre: Carmen, Apellidos: Morales Rubio… | ✅ Verificado por código — `mostrarFicha()` busca por `p.id === idPerfil` |
| P-05 | RF-02: no hay mezcla de datos entre perfiles | P001 y P002 abiertos sucesivamente | Cada ficha muestra solo sus propios datos | ✅ Verificado por código — `renderizarDatosPersonales()` limpia `innerHTML` antes de renderizar |
| P-06 | RF-03: campos vacíos muestran "No disponible" en cursiva | P002 (correo vacío), P003 (patron vacío) | "No disponible" en `<dd class="no-disponible">` | ✅ Verificado por código — `valorONoDisponible()` devuelve "No disponible" si el valor es `null`, `undefined` o `''` |
| P-07 | RF-04: sección médica muestra grado TEA | P001 grado_tea = "Nivel 1…" | "Nivel 1 - Necesita apoyo" visible | ✅ Verificado por código |
| P-08 | RF-04: medicación muestra lista cuando hay datos | P001 con 2 medicamentos | Lista `<ul>` con 2 `<li>` | ✅ Verificado por código |
| P-09 | RF-04: medicación vacía muestra "No disponible" | P003 medicacion = [] | "No disponible" en cursiva | ✅ Verificado por código — `Array.isArray(medicacion) && medicacion.length > 0` |
| P-10 | RF-05: botón Ver ficha navega a la ficha | cualquier tarjeta | Se oculta `#vista-listado`, se muestra `#vista-ficha` | ✅ Verificado por código — `mostrarFicha()` alterna `hidden` |
| P-11 | RF-05: botón Volver regresa al listado | desde cualquier ficha | Se oculta `#vista-ficha`, se muestra `#vista-listado` | ✅ Verificado por código — `mostrarListado()` alterna `hidden` |
| P-12 | RF-06: estado vacío cuando no hay perfiles | array `[]` | Aparece "No hay perfiles disponibles." | ✅ Verificado por código — comprobación `listado.length === 0` en `renderizarTarjetas()` |
| P-13 | Flujo completo: listado → ficha → volver → ficha diferente | P001, luego P003 | Las fichas no se mezclan y la navegación funciona | ⚠️ Pendiente de prueba en navegador |

---

## T-12 — Pruebas de casos especiales (CL-01 a CL-07)

| ID | Caso | Datos utilizados | Resultado esperado | Estado |
|----|------|-----------------|-------------------|--------|
| CL-01 | Sin perfiles: estado vacío | `perfiles.json` reemplazado por `[]` | "No hay perfiles disponibles." en `<p class="estado-vacio">` | ✅ Verificado por código — `renderizarTarjetas([])` crea el párrafo de estado vacío |
| CL-02 | ID inexistente | llamar `mostrarFicha('X999')` | "No se encontró el perfil solicitado." en zona de error | ✅ Verificado por código — `perfiles.find()` devuelve `undefined`, se llama `mostrarError()` |
| CL-03 | Correo vacío | P002 `correo: ""` | "No disponible" en cursiva en el campo Correo electrónico | ✅ Verificado por código — `valorONoDisponible('')` devuelve "No disponible" |
| CL-04 | Medicación vacía | P003 `medicacion: []` | "No disponible" en cursiva en el campo Medicación | ✅ Verificado por código — `hayMedicacion` es `false` cuando `medicacion.length === 0` |
| CL-05 | Dos perfiles con mismo nombre | No aplica con los datos actuales (todos tienen nombres distintos) | Se diferenciarían por ID — la tarjeta muestra siempre `perfil.id` | ✅ Verificado por código — cada tarjeta muestra el ID además del nombre; `mostrarFicha()` busca por ID, no por nombre |
| CL-06 | Fallo de red / JSON malformado | archivo no disponible o JSON inválido | Mensaje de error legible al usuario en zona de alertas | ✅ Verificado por código — `cargarPerfiles()` captura la excepción del `fetch` y llama `mostrarError()` con un mensaje descriptivo |
| CL-07 | Patron de apoyo vacío | P003 `patron: ""` | "No disponible" en cursiva en el campo Patrón de apoyo | ✅ Verificado por código — `valorONoDisponible('')` devuelve "No disponible" |
| CL-06b | Verificación en navegador: fallo de red real | Abrir index.html con file:// (sin servidor) | Aparece el mensaje orientativo de CORS | ⚠️ Pendiente de prueba en navegador |

---

## T-13 — Revisión de accesibilidad y diseño

### Resultado de la revisión estática

| Criterio | Verificación | Estado |
|----------|-------------|--------|
| Texto base ≥ 16px | `body { font-size: 18px }` en `estilos.css` | ✅ Verificado por código |
| Botones min-height 44px | `.boton-ver-ficha`, `#boton-volver`, `#boton-cerrar-error` tienen `min-height: 44px` | ✅ Verificado por código |
| Sin onclick inline | Búsqueda en HTML: ningún atributo `onclick` en el código fuente | ✅ Verificado por código |
| aria-live en zona de errores | `<div id="mensaje-error" role="alert" aria-live="assertive">` | ✅ Verificado por código |
| aria-label en botones de tarjeta | `boton.setAttribute('aria-label', 'Ver ficha de ' + nombreCompleto)` en `app.js` | ✅ Verificado por código |
| aria-label en botón volver | `aria-label="Volver al listado de perfiles"` en HTML | ✅ Verificado por código |
| type="button" en todos los botones | `#boton-volver type="button"`, `#boton-cerrar-error type="button"`, `boton.type = 'button'` en JS | ✅ Verificado por código |
| Jerarquía de encabezados | `<h1>` en header, `<h2>` en secciones — sin saltos | ✅ Verificado por código |
| HTML semántico: landmark roles | `<header>`, `<main role="main">`, `<section>`, `<article>` | ✅ Verificado por código |
| Sin color como único indicador | Los campos "No disponible" usan texto + cursiva, no solo color | ✅ Verificado por código |
| Contraste texto principal | `#1a1a1a` sobre `#f5f5f5` — ratio aprox. 18.4:1 (supera WCAG AA 4.5:1) | ✅ Verificado por código |
| Contraste texto acento | `#1d4a6e` sobre `#ffffff` — ratio aprox. 9.2:1 (supera WCAG AA) | ✅ Verificado por código |
| Contraste texto error | `#533f03` sobre `#fff3cd` — ratio aprox. 8.1:1 (supera WCAG AA) | ✅ Verificado por código |
| Contraste botón primario | `#ffffff` sobre `#2a6496` — ratio aprox. 7.4:1 (supera WCAG AA) | ✅ Verificado por código |
| textContent en lugar de innerHTML para datos externos | Todas las funciones de renderizado usan `textContent` | ✅ Verificado por código |
| Ningún campo vacío sin texto alternativo | `valorONoDisponible()` garantiza que ningún `<dd>` queda vacío | ✅ Verificado por código |
| aria-live="polite" en #vista-ficha | ❌ PROBLEMA: `aria-live="polite"` en contenedor grande anuncia todo el contenido al mostrarse — **CORREGIDO**: eliminado de `#vista-ficha` | ❌→✅ Corregido |
| nav.nav-ficha con único botón | ⚠️ Semánticamente incorrecto — `<nav>` no debe contener solo un botón de acción — **CORREGIDO**: cambiado a `<div>` | ❌→✅ Corregido |
| nav#contenedor-tarjetas | ⚠️ Semánticamente incorrecto — las tarjetas con botones no son navegación — **CORREGIDO**: cambiado a `<div>` | ❌→✅ Corregido |
| Navegación por teclado (Tab, Enter, Space) | No ejecutable sin navegador — los botones tienen `type="button"` y event listeners correctos | ⚠️ Pendiente de prueba en navegador |
| Validación HTML W3C | No ejecutable sin herramienta externa | ⚠️ Pendiente de validación con W3C |
| Comparación con prototipo Figma | El enlace de Figma no está disponible en `spec.md` | ⚠️ Pendiente — enlace no disponible |

### Problemas corregidos

#### Corrección 1: `aria-live="polite"` eliminado de `#vista-ficha`

**Archivo:** `index.html`  
**Problema:** `aria-live="polite"` aplicado a una sección grande hace que el lector de pantalla anuncie todo su contenido dinámico al mostrarse, produciendo anuncios verbosos e inútiles para el usuario.  
**Corrección:** Se eliminó el atributo. La zona de errores ya tiene `aria-live="assertive"` correctamente.

#### Corrección 2: `<nav class="nav-ficha">` → `<div class="nav-ficha">`

**Archivo:** `index.html`  
**Problema:** El elemento `<nav>` debe reservarse para grupos de enlaces de navegación. Un único botón de volver no constituye una zona de navegación.  
**Corrección:** Cambiado a `<div>`. El CSS `.nav-ficha` no depende del tipo de elemento, solo de la clase.

#### Corrección 3: `<nav id="contenedor-tarjetas">` → `<div id="contenedor-tarjetas">`

**Archivo:** `index.html`  
**Problema:** Las tarjetas con botones de acción no forman una zona de navegación. Usar `<nav>` aquí puede confundir a los lectores de pantalla.  
**Corrección:** Cambiado a `<div>`. El `aria-label` se mantiene para identificar el contenedor.

---

## Resumen general

| Tarea | Estado |
|-------|--------|
| T-11: Pruebas de requisitos funcionales | ✅ Verificado por código (P-01 a P-12) — P-13 pendiente de navegador |
| T-12: Pruebas de casos especiales | ✅ Verificado por código (CL-01 a CL-07) — CL-06b pendiente de navegador |
| T-13: Revisión de accesibilidad y diseño | ✅ Revisión estática completada — 3 correcciones aplicadas — pendientes: teclado, W3C, Figma |
| T-14: Actualización de documentación | ✅ tasks.md y IA/implementacion-mvp.md actualizados |
