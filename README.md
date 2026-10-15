# MiPerfil TEA

Aplicación web para consultar perfiles de personas mayores con Trastorno del Espectro Autista (TEA).  
Proyecto académico de 2.º DAM — Metodología Spec-Driven Development (SDD).

---

## Descripción

MiPerfil TEA permite al personal autorizado consultar los datos personales y la información médica de las personas atendidas, a través de una interfaz sencilla, accesible y sin distracciones.

## Cómo ejecutar la aplicación

> **Importante:** abrir `index.html` directamente con doble clic puede fallar al cargar los datos, porque los navegadores bloquean el acceso a archivos locales mediante el protocolo `file://`. Usa uno de los métodos siguientes.

### Método 1 — Servidor Python

1. Abre una terminal en la carpeta del proyecto (`f:\2DAM\2sdd\SDD-TEA`).
2. Ejecuta el comando:

   ```
   python -m http.server 8000
   ```

3. Abre tu navegador y ve a: [http://localhost:8000](http://localhost:8000)

### Método 2 — Live Server (VS Code)

1. Instala la extensión **Live Server** de Ritwick Dey en VS Code (si no la tienes).
2. Haz clic derecho sobre `index.html` en el explorador de archivos de VS Code.
3. Selecciona **Open with Live Server**.
4. La aplicación se abrirá automáticamente en el navegador.

### Nota sobre los datos

Los datos de prueba incluidos son **completamente ficticios**. No introduzcas ni guardes datos reales en esta aplicación.
