// ===================================================
// MiPerfil TEA - Lógica principal de la aplicación
// Sin frameworks. JavaScript vanilla. Sin ES modules.
// ===================================================

// --- ESTADO ---
// Variable global que almacena los perfiles cargados
let perfiles = [];

// --- INICIALIZACIÓN ---
// Punto de entrada: carga los datos y muestra el listado inicial
async function init() {
  perfiles = await cargarPerfiles();
  mostrarListado();
}

// --- CARGA DE DATOS ---
// Obtiene los perfiles desde el archivo JSON de datos de prueba.
// Si el fetch falla (p.ej. por CORS con file://), muestra un mensaje de error
// y devuelve un array vacío para que la aplicación no quede bloqueada.
async function cargarPerfiles() {
  mostrarCarga(true);
  try {
    const respuesta = await fetch('data/perfiles.json');
    if (!respuesta.ok) {
      throw new Error('La respuesta del servidor no fue correcta: ' + respuesta.status);
    }
    const datos = await respuesta.json();

    // Comprobar que los datos tienen la estructura esperada (array)
    if (!Array.isArray(datos)) {
      throw new Error('El formato de los datos de perfiles no es válido.');
    }
    return datos;
  } catch (error) {
    // Distinguir el error de CORS/file:// del resto para dar un mensaje más útil
    const esPosibleErrorCors =
      error instanceof TypeError && error.message.toLowerCase().includes('fetch');

    if (esPosibleErrorCors) {
      mostrarError(
        'No se pudieron cargar los perfiles. Abre la aplicación con un servidor local (ver README).'
      );
    } else {
      mostrarError(
        'No se pudieron cargar los perfiles. Comprueba que el archivo de datos existe y es correcto.'
      );
    }
    return [];
  } finally {
    mostrarCarga(false);
  }
}

// --- VISTAS ---

// Muestra la vista del listado y oculta la ficha
function mostrarListado() {
  ocultarError();
  document.getElementById('vista-listado').hidden = false;
  document.getElementById('vista-ficha').hidden = true;
  renderizarTarjetas(perfiles);
}

// Muestra la ficha del perfil con el id indicado
// Si el perfil no existe, muestra un error claro
function mostrarFicha(idPerfil) {
  ocultarError();

  // Buscar el perfil por id
  const perfil = perfiles.find(function (p) {
    return p.id === idPerfil;
  });

  if (!perfil) {
    mostrarError('No se encontró el perfil solicitado.');
    return;
  }

  document.getElementById('vista-listado').hidden = true;
  document.getElementById('vista-ficha').hidden = false;
  renderizarFicha(perfil);
}

// Muestra el mensaje de error en la zona de alertas
function mostrarError(mensaje) {
  const zonaError = document.getElementById('mensaje-error');
  const textoError = document.getElementById('texto-error');
  textoError.textContent = mensaje;
  zonaError.hidden = false;
}

// Oculta la zona de mensajes de error
function ocultarError() {
  const zonaError = document.getElementById('mensaje-error');
  zonaError.hidden = true;
}

// Muestra u oculta el indicador de carga
function mostrarCarga(visible) {
  document.getElementById('indicador-carga').hidden = !visible;
}

// --- RENDERIZADO ---

// Genera las tarjetas del listado de perfiles
// Si no hay perfiles, muestra un mensaje de estado vacío
function renderizarTarjetas(listado) {
  const contenedor = document.getElementById('contenedor-tarjetas');
  // Limpiar contenido previo
  contenedor.innerHTML = '';

  if (!listado || listado.length === 0) {
    const mensaje = document.createElement('p');
    mensaje.className = 'estado-vacio';
    mensaje.textContent = 'No hay perfiles disponibles.';
    contenedor.appendChild(mensaje);
    return;
  }

  listado.forEach(function (perfil) {
    // Comprobar que el perfil tiene los campos mínimos esperados
    if (!perfil || typeof perfil.id === 'undefined' || typeof perfil.nombre === 'undefined') {
      return; // Omitir perfiles malformados
    }

    const nombreCompleto = (perfil.nombre + ' ' + (perfil.apellidos || '')).trim();

    // Estructura de la tarjeta
    const articulo = document.createElement('article');
    articulo.className = 'tarjeta-perfil';

    const infoDiv = document.createElement('div');
    infoDiv.className = 'info-tarjeta';

    const nombreParrafo = document.createElement('p');
    nombreParrafo.className = 'nombre-tarjeta';
    nombreParrafo.textContent = nombreCompleto;

    const idParrafo = document.createElement('p');
    idParrafo.className = 'id-tarjeta';
    idParrafo.textContent = 'ID: ' + perfil.id;

    infoDiv.appendChild(nombreParrafo);
    infoDiv.appendChild(idParrafo);

    const boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'boton-ver-ficha';
    boton.textContent = 'Ver ficha';
    // aria-label descriptivo para lectores de pantalla
    boton.setAttribute('aria-label', 'Ver ficha de ' + nombreCompleto);
    // Usar una función anónima para capturar el id correcto en el cierre
    boton.addEventListener('click', function () {
      mostrarFicha(perfil.id);
    });

    articulo.appendChild(infoDiv);
    articulo.appendChild(boton);
    contenedor.appendChild(articulo);
  });
}

// Genera el contenido de la ficha de un perfil concreto
function renderizarFicha(perfil) {
  renderizarDatosPersonales(perfil);
  renderizarSeccionMedica(perfil.info_medica);
}

// Genera la lista de definición con los datos personales del perfil
function renderizarDatosPersonales(perfil) {
  const listaDatos = document.getElementById('lista-datos-personales');
  listaDatos.innerHTML = '';

  // Definición de los campos a mostrar: [etiqueta, valor]
  const campos = [
    ['Nombre', valorONoDisponible(perfil.nombre)],
    ['Apellidos', valorONoDisponible(perfil.apellidos)],
    ['Identificador', valorONoDisponible(perfil.id)],
    ['Correo electrónico', valorONoDisponible(perfil.correo)],
    ['Fecha de nacimiento', valorONoDisponible(perfil.fecha_nacimiento)],
    ['Estado civil', valorONoDisponible(perfil.estado_civil)],
    ['Patrón de apoyo', valorONoDisponible(perfil.patron)]
  ];

  campos.forEach(function (par) {
    const etiqueta = par[0];
    const valor = par[1];
    const esNoDisponible = (valor === 'No disponible');

    const dt = document.createElement('dt');
    dt.textContent = etiqueta;

    const dd = document.createElement('dd');
    if (esNoDisponible) {
      dd.className = 'no-disponible';
    }
    // Usar textContent para evitar inyección de HTML con datos del JSON
    dd.textContent = valor;

    listaDatos.appendChild(dt);
    listaDatos.appendChild(dd);
  });
}

// Genera el contenido de la sección médica del perfil
// Si algún campo está vacío, muestra "No disponible"
function renderizarSeccionMedica(infoMedica) {
  const contenedor = document.getElementById('contenido-medico');
  contenedor.innerHTML = '';

  // Si no hay objeto de información médica, indicarlo
  if (!infoMedica || typeof infoMedica !== 'object') {
    const aviso = document.createElement('p');
    aviso.className = 'no-disponible';
    aviso.textContent = 'No hay información médica disponible.';
    contenedor.appendChild(aviso);
    return;
  }

  // Grado TEA
  const etiquetaTea = document.createElement('span');
  etiquetaTea.className = 'etiqueta-medica';
  etiquetaTea.textContent = 'Grado TEA:';

  const valorTea = document.createElement('p');
  const textoTea = valorONoDisponible(infoMedica.grado_tea);
  if (textoTea === 'No disponible') {
    valorTea.className = 'valor-medico no-disponible';
  } else {
    valorTea.className = 'valor-medico';
  }
  valorTea.textContent = textoTea;

  // Informe médico
  const etiquetaInforme = document.createElement('span');
  etiquetaInforme.className = 'etiqueta-medica';
  etiquetaInforme.textContent = 'Informe médico:';

  const valorInforme = document.createElement('p');
  const textoInforme = valorONoDisponible(infoMedica.informe_medico);
  if (textoInforme === 'No disponible') {
    valorInforme.className = 'valor-medico no-disponible';
  } else {
    valorInforme.className = 'valor-medico';
  }
  valorInforme.textContent = textoInforme;

  // Medicación
  const etiquetaMedicacion = document.createElement('span');
  etiquetaMedicacion.className = 'etiqueta-medica';
  etiquetaMedicacion.textContent = 'Medicación:';

  let elementoMedicacion;
  const medicacion = infoMedica.medicacion;
  const hayMedicacion = Array.isArray(medicacion) && medicacion.length > 0;

  if (hayMedicacion) {
    // Mostrar lista de medicamentos
    elementoMedicacion = document.createElement('ul');
    elementoMedicacion.className = 'lista-medicacion';
    medicacion.forEach(function (medicamento) {
      const item = document.createElement('li');
      // textContent para no inyectar HTML
      item.textContent = medicamento;
      elementoMedicacion.appendChild(item);
    });
  } else {
    // Sin medicación registrada
    elementoMedicacion = document.createElement('p');
    elementoMedicacion.className = 'valor-medico no-disponible';
    elementoMedicacion.textContent = 'No disponible';
  }

  // Añadir todos los elementos al contenedor
  contenedor.appendChild(etiquetaTea);
  contenedor.appendChild(valorTea);
  contenedor.appendChild(etiquetaInforme);
  contenedor.appendChild(valorInforme);
  contenedor.appendChild(etiquetaMedicacion);
  contenedor.appendChild(elementoMedicacion);
}

// --- HELPERS ---

// Devuelve el valor si no está vacío (null, undefined, cadena vacía).
// En caso contrario devuelve "No disponible".
function valorONoDisponible(valor) {
  if (valor === null || valor === undefined || valor === '') {
    return 'No disponible';
  }
  return String(valor);
}

// --- EVENTOS ---

// El botón "Volver" de la ficha lleva al listado
document.addEventListener('DOMContentLoaded', function () {
  const botonVolver = document.getElementById('boton-volver');
  if (botonVolver) {
    botonVolver.addEventListener('click', mostrarListado);
  }

  const botonCerrarError = document.getElementById('boton-cerrar-error');
  if (botonCerrarError) {
    botonCerrarError.addEventListener('click', ocultarError);
  }
});

// --- ARRANQUE ---
document.addEventListener('DOMContentLoaded', init);
