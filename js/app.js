// ===================================================
// MiPerfil TEA — Lógica principal
// Vanilla JS, sin frameworks, sin ES modules
// ===================================================

// ── ESTADO GLOBAL ──────────────────────────────────
var perfiles = [];
var toastTimer = null;
// Guarda el mensaje de error de carga entre llamadas a cargarPerfiles()
var mensajeErrorCarga = null;

// IDs de todas las vistas
var TODAS_LAS_VISTAS = [
  'vista-inicio', 'vista-menu', 'vista-listado', 'vista-ficha',
  'vista-rutina', 'vista-agenda', 'vista-comunicar', 'vista-sos'
];

// Datos de ejemplo para Rutina (estáticos, ficticios)
var ACTIVIDADES_DIA = [
  { id: 'a1', hora: '09:00', icono: '💊', nombre: 'Medicación',    lugar: 'En casa',            completada: false },
  { id: 'a2', hora: '10:30', icono: '🏥', nombre: 'Médico',        lugar: 'Centro de salud',    completada: false },
  { id: 'a3', hora: '12:00', icono: '🤸', nombre: 'Fisioterapia',  lugar: 'Gimnasio',           completada: false },
  { id: 'a4', hora: '14:00', icono: '🍽️', nombre: 'Comer',         lugar: 'Comedor',            completada: false },
  { id: 'a5', hora: '17:00', icono: '🚶', nombre: 'Paseo',         lugar: 'Parque',             completada: false },
  { id: 'a6', hora: '19:00', icono: '🎨', nombre: 'Actividad',     lugar: 'Sala de actividades',completada: false }
];

// Datos de ejemplo para Agenda (estáticos, ficticios)
var CITAS = [
  { fecha: 'Lunes 20 ene', hora: '10:30', nombre: 'Revisión médica',    lugar: 'Centro de salud'    },
  { fecha: 'Miércoles 22 ene', hora: '12:00', nombre: 'Fisioterapia', lugar: 'Gimnasio'             },
  { fecha: 'Viernes 24 ene', hora: '16:00', nombre: 'Visita familiar', lugar: 'Sala de visitas'    }
];

// ── INICIALIZACIÓN ──────────────────────────────────
async function init() {
  mostrarVista('vista-inicio');
  // Carga en segundo plano; el estado del listado se aplica cuando el usuario
  // navegue a él, no ahora (evita modificar DOM oculto y estados prematuros).
  var resultado = await cargarDatosPerfiles();
  perfiles = resultado.datos;
  mensajeErrorCarga = resultado.error;
}

// ── CARGA DE DATOS ──────────────────────────────────
// Devuelve { datos: [], error: null|string } — nunca modifica el DOM directamente.
// La actualización del estado visual del listado la hace el llamador.
async function cargarDatosPerfiles() {
  try {
    var respuesta = await fetch('data/perfiles.json');
    if (!respuesta.ok) {
      throw new Error('Error del servidor: ' + respuesta.status);
    }
    var datos = await respuesta.json();
    if (!Array.isArray(datos)) {
      throw new Error('Formato de datos no válido.');
    }
    return { datos: datos, error: null };
  } catch (error) {
    var esCors = error instanceof TypeError && error.message.toLowerCase().includes('fetch');
    var msg = esCors
      ? 'No se pudieron cargar los perfiles. Abre la aplicación con un servidor local (ver README).'
      : 'No se pudieron cargar los perfiles. Comprueba que el archivo de datos existe y es correcto.';
    return { datos: [], error: msg };
  }
}

// ── NAVEGACIÓN ──────────────────────────────────────
function mostrarVista(idVista) {
  TODAS_LAS_VISTAS.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.hidden = (id !== idVista);
  });
  // Al cambiar de vista, cerramos el error global (no el de carga inline)
  ocultarError();
}

function mostrarInicio() {
  mostrarVista('vista-inicio');
}

function mostrarMenu() {
  mostrarVista('vista-menu');
}

function mostrarListado() {
  mostrarVista('vista-listado');
  // Aplica el estado correcto según los datos disponibles en este momento
  aplicarEstadoListado();
}

function mostrarFicha(idPerfil) {
  var perfil = perfiles.find(function (p) { return p.id === idPerfil; });
  if (!perfil) {
    mostrarError('No se encontró el perfil solicitado.');
    return;
  }
  mostrarVista('vista-ficha');
  renderizarFicha(perfil);
}

function mostrarRutina() {
  mostrarVista('vista-rutina');
  renderizarRutina();
}

function mostrarAgenda() {
  mostrarVista('vista-agenda');
  renderizarAgenda();
}

function mostrarComunicar() {
  mostrarVista('vista-comunicar');
  // Aseguramos que el panel de confirmación esté oculto al entrar
  var panel = document.getElementById('panel-emocion-seleccionada');
  if (panel) panel.hidden = true;
}

function mostrarSos() {
  mostrarVista('vista-sos');
}

// ── ESTADOS DEL LISTADO ─────────────────────────────
// Fuente única de verdad: decide qué estado mostrar a partir del estado global.
// Solo debe llamarse cuando vista-listado ya es visible.
function aplicarEstadoListado() {
  if (mensajeErrorCarga) {
    mostrarEstadoListado('error', mensajeErrorCarga);
  } else if (perfiles.length > 0) {
    mostrarEstadoListado('contenido');
    renderizarTarjetas(perfiles);
  } else {
    mostrarEstadoListado('vacio');
  }
}

// Muestra exactamente uno de los cuatro estados del listado; oculta los otros tres.
// También controla el subtítulo, que solo aparece cuando hay contenido.
function mostrarEstadoListado(estado, mensajeError) {
  var elCarga     = document.getElementById('indicador-carga');
  var elContenido = document.getElementById('contenedor-tarjetas');
  var elVacio     = document.getElementById('estado-vacio-perfiles');
  var elError     = document.getElementById('error-carga-perfiles');
  var elSubtitulo = document.getElementById('subtitulo-listado');

  // Ocultar todo incondicionalmente
  if (elCarga)     elCarga.hidden = true;
  if (elContenido) elContenido.hidden = true;
  if (elVacio)     elVacio.hidden = true;
  if (elError)     elError.hidden = true;
  if (elSubtitulo) elSubtitulo.hidden = true;

  if (estado === 'cargando' && elCarga) {
    elCarga.hidden = false;

  } else if (estado === 'contenido' && elContenido) {
    elContenido.hidden = false;
    if (elSubtitulo) elSubtitulo.hidden = false; // solo visible con contenido

  } else if (estado === 'vacio' && elVacio) {
    elVacio.hidden = false;

  } else if (estado === 'error' && elError) {
    var textoEl = document.getElementById('texto-error-carga');
    if (textoEl && mensajeError) textoEl.textContent = mensajeError;
    elError.hidden = false;
  }
}

// ── MENSAJES GLOBALES ───────────────────────────────

// Error permanente con botón de cierre (para errores de navegación/lógica)
function mostrarError(mensaje) {
  var zona  = document.getElementById('mensaje-error');
  var texto = document.getElementById('texto-error');
  if (texto) texto.textContent = mensaje;
  if (zona)  zona.hidden = false;
}

function ocultarError() {
  var zona = document.getElementById('mensaje-error');
  if (zona) zona.hidden = true;
}

// Toast temporal (para avisos informativos, desaparece solo)
function mostrarToast(mensaje, duracionMs) {
  duracionMs = duracionMs || 3000;
  var toast = document.getElementById('toast-info');
  var texto = document.getElementById('texto-toast');
  if (!toast || !texto) return;

  // Cancelar toast anterior si había uno activo
  if (toastTimer) {
    clearTimeout(toastTimer);
    toastTimer = null;
  }

  texto.textContent = mensaje;
  toast.hidden = false;

  toastTimer = setTimeout(function () {
    toast.hidden = true;
    toastTimer = null;
  }, duracionMs);
}

// ── RENDERIZADO DEL LISTADO ─────────────────────────
function renderizarTarjetas(listado) {
  var contenedor = document.getElementById('contenedor-tarjetas');
  if (!contenedor) return;
  contenedor.innerHTML = '';

  listado.forEach(function (perfil) {
    if (!perfil || typeof perfil.id === 'undefined' || typeof perfil.nombre === 'undefined') return;

    var nombreCompleto = (perfil.nombre + ' ' + (perfil.apellidos || '')).trim();
    var inicial = perfil.nombre.charAt(0).toUpperCase();

    var articulo = document.createElement('article');
    articulo.className = 'tarjeta-perfil';
    articulo.setAttribute('role', 'listitem');

    var avatar = document.createElement('div');
    avatar.className = 'tarjeta-avatar';
    avatar.textContent = inicial;
    avatar.setAttribute('aria-hidden', 'true');

    var infoDiv = document.createElement('div');
    infoDiv.className = 'info-tarjeta';

    var nombreP = document.createElement('p');
    nombreP.className = 'nombre-tarjeta';
    nombreP.textContent = nombreCompleto;

    var idP = document.createElement('p');
    idP.className = 'id-tarjeta';
    idP.textContent = 'ID: ' + perfil.id;

    infoDiv.appendChild(nombreP);
    infoDiv.appendChild(idP);

    var flecha = document.createElement('span');
    flecha.className = 'tarjeta-flecha';
    flecha.textContent = '›';
    flecha.setAttribute('aria-hidden', 'true');

    var boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'boton-ver-ficha';
    boton.setAttribute('aria-label', 'Ver ficha de ' + nombreCompleto);
    boton.addEventListener('click', function () { mostrarFicha(perfil.id); });

    articulo.appendChild(avatar);
    articulo.appendChild(infoDiv);
    articulo.appendChild(flecha);
    articulo.appendChild(boton);
    contenedor.appendChild(articulo);
  });
}

// ── RENDERIZADO DE LA FICHA ─────────────────────────
function renderizarFicha(perfil) {
  var nombreCompleto = (perfil.nombre + ' ' + (perfil.apellidos || '')).trim();
  var inicial = perfil.nombre.charAt(0).toUpperCase();

  var avatarEl = document.getElementById('ficha-avatar');
  if (avatarEl) avatarEl.textContent = inicial;

  var nombreEl = document.getElementById('ficha-nombre');
  if (nombreEl) nombreEl.textContent = nombreCompleto;

  var idEl = document.getElementById('ficha-id-texto');
  if (idEl) idEl.textContent = 'ID: ' + perfil.id;

  renderizarDatosPersonales(perfil);
  renderizarSeccionMedica(perfil.info_medica);
}

function renderizarDatosPersonales(perfil) {
  var lista = document.getElementById('lista-datos-personales');
  if (!lista) return;
  lista.innerHTML = '';

  var campos = [
    ['Correo electrónico', valorONoDisponible(perfil.correo)],
    ['Fecha de nacimiento', valorONoDisponible(perfil.fecha_nacimiento)],
    ['Estado civil',        valorONoDisponible(perfil.estado_civil)],
    ['Patrón de apoyo',     valorONoDisponible(perfil.patron)]
  ];

  campos.forEach(function (par) {
    var fila = document.createElement('div');
    fila.className = 'campo-fila';

    var dt = document.createElement('dt');
    dt.className = 'campo-etiqueta';
    dt.textContent = par[0];

    var dd = document.createElement('dd');
    dd.className = 'campo-valor' + (par[1] === 'No disponible' ? ' no-disponible' : '');
    dd.textContent = par[1];

    fila.appendChild(dt);
    fila.appendChild(dd);
    lista.appendChild(fila);
  });
}

function renderizarSeccionMedica(infoMedica) {
  var contenedor = document.getElementById('contenido-medico');
  if (!contenedor) return;
  contenedor.innerHTML = '';

  if (!infoMedica || typeof infoMedica !== 'object') {
    var p = document.createElement('p');
    p.className = 'campo-valor no-disponible';
    p.textContent = 'No hay información médica disponible.';
    contenedor.appendChild(p);
    return;
  }

  // Grado TEA
  var filaTea = crearFilaMedica('Grado TEA');
  var textoTea = valorONoDisponible(infoMedica.grado_tea);
  if (textoTea !== 'No disponible') {
    var badge = document.createElement('span');
    badge.className = 'badge-tea';
    badge.textContent = textoTea;
    filaTea.appendChild(badge);
  } else {
    filaTea.appendChild(crearPNoDisponible(textoTea));
  }
  contenedor.appendChild(filaTea);

  // Informe médico
  var filaInforme = crearFilaMedica('Informe médico');
  var textoInforme = valorONoDisponible(infoMedica.informe_medico);
  var pInforme = document.createElement('p');
  pInforme.className = 'campo-valor' + (textoInforme === 'No disponible' ? ' no-disponible' : '');
  pInforme.textContent = textoInforme;
  filaInforme.appendChild(pInforme);
  contenedor.appendChild(filaInforme);

  // Medicación
  var filaMed = crearFilaMedica('Medicación');
  var medicacion = infoMedica.medicacion;
  var hayMedicacion = Array.isArray(medicacion) && medicacion.length > 0;
  if (hayMedicacion) {
    var ul = document.createElement('ul');
    ul.className = 'lista-medicacion';
    medicacion.forEach(function (med) {
      var li = document.createElement('li');
      li.textContent = med;
      ul.appendChild(li);
    });
    filaMed.appendChild(ul);
  } else {
    filaMed.appendChild(crearPNoDisponible('No disponible'));
  }
  contenedor.appendChild(filaMed);
}

function crearFilaMedica(etiqueta) {
  var fila = document.createElement('div');
  fila.className = 'campo-medico-fila';
  var et = document.createElement('p');
  et.className = 'campo-etiqueta';
  et.textContent = etiqueta;
  fila.appendChild(et);
  return fila;
}

function crearPNoDisponible(texto) {
  var p = document.createElement('p');
  p.className = 'campo-valor no-disponible';
  p.textContent = texto;
  return p;
}

// ── RENDERIZADO RUTINA ──────────────────────────────
function renderizarRutina() {
  // Fecha de hoy en español
  var hoy = new Date();
  var opciones = { weekday: 'long', day: 'numeric', month: 'long' };
  var fechaEl = document.getElementById('rutina-fecha');
  if (fechaEl) {
    fechaEl.textContent = hoy.toLocaleDateString('es-ES', opciones);
  }

  var lista = document.getElementById('lista-rutina');
  if (!lista) return;
  lista.innerHTML = '';

  ACTIVIDADES_DIA.forEach(function (act) {
    var tarjeta = document.createElement('article');
    tarjeta.className = 'tarjeta-actividad' + (act.completada ? ' tarjeta-actividad--completada' : '');
    tarjeta.setAttribute('role', 'listitem');
    tarjeta.dataset.id = act.id;

    var hora = document.createElement('span');
    hora.className = 'actividad-hora';
    hora.textContent = act.hora;
    hora.setAttribute('aria-label', 'Hora: ' + act.hora);

    var icono = document.createElement('span');
    icono.className = 'actividad-icono';
    icono.textContent = act.icono;
    icono.setAttribute('aria-hidden', 'true');

    var info = document.createElement('div');
    info.className = 'actividad-info';

    var nombre = document.createElement('p');
    nombre.className = 'actividad-nombre' + (act.completada ? ' actividad-nombre--completada' : '');
    nombre.textContent = act.nombre;

    var lugar = document.createElement('p');
    lugar.className = 'actividad-lugar';
    lugar.textContent = act.lugar;

    info.appendChild(nombre);
    info.appendChild(lugar);

    var botonCompletar = document.createElement('button');
    botonCompletar.type = 'button';
    botonCompletar.className = 'boton-completar' + (act.completada ? ' boton-completar--hecho' : '');
    botonCompletar.textContent = act.completada ? '✓' : '○';
    botonCompletar.setAttribute('aria-label', (act.completada ? 'Marcar como pendiente: ' : 'Marcar como completada: ') + act.nombre);
    botonCompletar.addEventListener('click', function () {
      toggleActividad(act.id);
    });

    tarjeta.appendChild(hora);
    tarjeta.appendChild(icono);
    tarjeta.appendChild(info);
    tarjeta.appendChild(botonCompletar);
    lista.appendChild(tarjeta);
  });
}

function toggleActividad(id) {
  var act = ACTIVIDADES_DIA.find(function (a) { return a.id === id; });
  if (!act) return;
  act.completada = !act.completada;
  renderizarRutina(); // re-renderizar para reflejar el cambio
}

// ── RENDERIZADO AGENDA ──────────────────────────────
function renderizarAgenda() {
  var lista = document.getElementById('lista-agenda');
  if (!lista) return;
  lista.innerHTML = '';

  if (!CITAS || CITAS.length === 0) {
    var vacio = document.createElement('div');
    vacio.className = 'agenda-vacia';
    vacio.innerHTML = '<p class="agenda-vacia-icono" aria-hidden="true">📅</p>' +
      '<p class="agenda-vacia-texto">No tienes citas programadas.</p>';
    lista.appendChild(vacio);
    return;
  }

  CITAS.forEach(function (cita) {
    var tarjeta = document.createElement('article');
    tarjeta.className = 'tarjeta-cita';
    tarjeta.setAttribute('role', 'listitem');

    var fechaHora = document.createElement('p');
    fechaHora.className = 'cita-fecha-hora';
    fechaHora.textContent = cita.fecha + ' · ' + cita.hora;

    var nombre = document.createElement('p');
    nombre.className = 'cita-nombre';
    nombre.textContent = cita.nombre;

    var lugar = document.createElement('p');
    lugar.className = 'cita-lugar';
    lugar.textContent = cita.lugar;

    tarjeta.appendChild(fechaHora);
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(lugar);
    lista.appendChild(tarjeta);
  });
}

// ── HELPER ──────────────────────────────────────────
function valorONoDisponible(valor) {
  if (valor === null || valor === undefined || valor === '') return 'No disponible';
  return String(valor);
}

// ── EVENTOS Y ARRANQUE ──────────────────────────────
document.addEventListener('DOMContentLoaded', function () {

  // ── Vista inicio ──
  var btnConectar = document.getElementById('boton-conectar');
  if (btnConectar) btnConectar.addEventListener('click', mostrarMenu);

  // ── Menú principal ──
  var menuBtnPerfiles  = document.getElementById('menu-btn-perfiles');
  var menuBtnRutina    = document.getElementById('menu-btn-rutina');
  var menuBtnAgenda    = document.getElementById('menu-btn-agenda');
  var menuBtnComunicar = document.getElementById('menu-btn-comunicar');
  var menuBtnSos       = document.getElementById('menu-btn-sos');

  if (menuBtnPerfiles)  menuBtnPerfiles.addEventListener('click', mostrarListado);
  if (menuBtnRutina)    menuBtnRutina.addEventListener('click', mostrarRutina);
  if (menuBtnAgenda)    menuBtnAgenda.addEventListener('click', mostrarAgenda);
  if (menuBtnComunicar) menuBtnComunicar.addEventListener('click', mostrarComunicar);
  if (menuBtnSos)       menuBtnSos.addEventListener('click', mostrarSos);

  // Nav desde menú
  var navInicioDesdeMenu   = document.getElementById('nav-inicio-desde-menu');
  var navPerfilesDesdeMenu = document.getElementById('nav-perfiles-desde-menu');
  if (navInicioDesdeMenu)   navInicioDesdeMenu.addEventListener('click', mostrarInicio);
  if (navPerfilesDesdeMenu) navPerfilesDesdeMenu.addEventListener('click', mostrarListado);

  // ── Listado ──
  var navInicioDesdeListado = document.getElementById('nav-inicio-desde-listado');
  if (navInicioDesdeListado) navInicioDesdeListado.addEventListener('click', mostrarMenu);

  var btnReintentar = document.getElementById('boton-reintentar');
  if (btnReintentar) {
    btnReintentar.addEventListener('click', async function () {
      // Mostrar spinner mientras recarga
      mostrarEstadoListado('cargando');
      var resultado = await cargarDatosPerfiles();
      perfiles = resultado.datos;
      mensajeErrorCarga = resultado.error;
      // Aplicar el estado resultante (fuente única de verdad)
      aplicarEstadoListado();
    });
  }

  // ── Ficha ──
  var botonVolver = document.getElementById('boton-volver');
  if (botonVolver) botonVolver.addEventListener('click', mostrarListado);

  var navInicioDesFicha = document.getElementById('nav-inicio-desde-ficha');
  if (navInicioDesFicha) navInicioDesFicha.addEventListener('click', mostrarMenu);

  // ── Rutina ──
  var volverDesdeRutina = document.getElementById('volver-desde-rutina');
  if (volverDesdeRutina) volverDesdeRutina.addEventListener('click', mostrarMenu);

  var navInicioDesdeRutina = document.getElementById('nav-inicio-desde-rutina');
  if (navInicioDesdeRutina) navInicioDesdeRutina.addEventListener('click', mostrarMenu);

  // ── Agenda ──
  var volverDesdeAgenda = document.getElementById('volver-desde-agenda');
  if (volverDesdeAgenda) volverDesdeAgenda.addEventListener('click', mostrarMenu);

  var navInicioDesdeAgenda = document.getElementById('nav-inicio-desde-agenda');
  if (navInicioDesdeAgenda) navInicioDesdeAgenda.addEventListener('click', mostrarMenu);

  // ── Comunicar ──
  var volverDesdeComunicar = document.getElementById('volver-desde-comunicar');
  if (volverDesdeComunicar) volverDesdeComunicar.addEventListener('click', mostrarMenu);

  var navInicioDesComunicar = document.getElementById('nav-inicio-desde-comunicar');
  if (navInicioDesComunicar) navInicioDesComunicar.addEventListener('click', mostrarMenu);

  // Botones de emoción
  var botonesEmocion = document.querySelectorAll('.tarjeta-emocion');
  botonesEmocion.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var emocion = btn.dataset.emocion;
      var emoji   = btn.querySelector('.emocion-emoji').textContent;

      var panel     = document.getElementById('panel-emocion-seleccionada');
      var panelEmoji = document.getElementById('panel-emoji');
      var panelTexto = document.getElementById('panel-texto-emocion');

      if (panel && panelEmoji && panelTexto) {
        panelEmoji.textContent = emoji;
        panelTexto.textContent = emocion;
        panel.hidden = false;
      }
    });
  });

  var botonVolverEmociones = document.getElementById('boton-volver-emociones');
  if (botonVolverEmociones) {
    botonVolverEmociones.addEventListener('click', function () {
      var panel = document.getElementById('panel-emocion-seleccionada');
      if (panel) panel.hidden = true;
    });
  }

  // ── SOS ──
  var volverDesSos = document.getElementById('volver-desde-sos');
  if (volverDesSos) volverDesSos.addEventListener('click', mostrarMenu);

  var navInicioDesSos = document.getElementById('nav-inicio-desde-sos');
  if (navInicioDesSos) navInicioDesSos.addEventListener('click', mostrarMenu);

  // ── Cerrar error global ──
  var botonCerrarError = document.getElementById('boton-cerrar-error');
  if (botonCerrarError) botonCerrarError.addEventListener('click', ocultarError);

  // ── Arranque ──
  init();
});
