# Plan técnico y de diseño — MVP Conecta
Leer `contitution.md` y `spec.md`. Este plan es el cómo. Cada bloque indica qué requisitos cubre.

## Estructura del sistema
**Objetivo Principal:** Crear una aplicación dirigida a personas adultas con TEA para ayudarles a facilitar y organizar su dia a dia (mantener rutinas, recordatorios, facilitar la comunicación...).

Además, el proyecto debe cumplir con los siguientes requisitos:
* **Claridad visual:** La aplicación debe ser intuitiva visualmente
* **Uso rápido e intuitivo:** Cada función en la aplicación debe ser fácil de usar

### Frontend (Interfaz de usuario)
La interfaz visual debe ser intuitiva y fácil de usar.

### Backend y persistencia de datos
El backend debe conectar correctamente los datos de los archivos `.json` con la interfaz.

## Modelo de datos (Estructuras JSON)
Cada entidad será almacenada en un archivo Json que guarde la información del usuario en los siguientes archivos:

| Contenido | Archivo |
| :---: | :---: |
| Actividades y Rutinas | actividades.json |
| Medicación | medicacion.json |
| Contactos de emergencia | contactos.json |


### Entidad: Actividades y Rutinas (actividades.json)
```json
{
    "Agenda":[
        {
            "id": 1,
            "descripcion": "Médico",
            "ubicacion": "Centro de Salud",
            "fecha": "09-10-2026",
            "hora": "10:30"
        },
        {
            "id": 2,
            "descripcion": "Visita familiar",
            "ubicacion": "Casa",
            "fecha": "09-10-2026",
            "hora": "16:00"
        },
        {
            "id": 3,
            "descripcion": "Compras",
            "ubicacion": "Supermercado",
            "fecha": "10-10-2026",
            "hora": "11:00"
        }
    ],

    "Rutina":[
        {
            "id": 1,
            "descripcion": "Desayunar",
            "status": "Completado",
            "hora": "09:00"
        },
        {
            "id": 2,
            "descripcion": "Pasear",
            "status": "Completado",
            "hora": "11:30"
        },
        {
            "id": 3,
            "descripcion": "Comer",
            "status": "Pendiente",
            "hora": "14:00"
        }
    ]

}
```

* `descripcion` indica qué se hace en la actividad.
* `ubicacion` indica dónde se hace la actividad.
* `fecha` y `hora` indican cuando se hace la actividad y estan en formato `dd-mm-yyyy` y `hh:mm` respectivamente.
* `status` indica si una actividad de la rutina está completada o no.

### Entidad: Medicación (medicacion.json)
```json
{
    "Medicacion":[
        {
            "id": 1,
            "nombre": "Paracetamol",
            "dosis": "500mg",
            "status": "Activa"
        },
        {
            "id": 2,
            "nombre": "Melatonina",
            "dosis": null,
            "status": "Activa"
        },
        {
            "id": 3,
            "nombre": "Sertralina",
            "dosis": "50mg",
            "status": "Inactiva"
        }
    ]
}
```

* `nombre` indica cual medicamento es.
* `dosis` indica la cantidad de medicamento en mg que se debe tomar. Si `dosis` es `null` quiere decir que el medicamento no tiene registrada una dosis específica.
* `status` indica si la medicación sigue estando activa o no.

### Entidad: Contactos de emergencia (contactos.json)
```json
{
    "Contactos":[
        {
            "id": 1,
            "nombre": "Javi (Hijo)",
            "telefono": "+34 600 123 456"
        },
        {
            "id": 2,
            "nombre": "Carlos (Nieto)",
            "telefono": "+34 600 999 970"
        },
        {
            "id": 3,
            "nombre": "Nuera",
            "telefono": "+34 600 123 485"
        }
    ]
}
```

* `nombre` indica quién es el contacto. Se pueden usar nombres reales o nombres descriptivos como: Hijo, Cuñado, Yerno...
* `telefono` indica a qué número se debe llamar en caso de emergencia.

-----------------------------------------------------------------------------
En todos, `id` es un entero que indentifica a cada entidad. El siguiente, siempre será `max(id) + 1` o `1` en caso de no haber una entidad.

## Flujos de usuario
### Flujo principal: Gestión del día a día
El usuario seguirá el siguiente recorrido para su rutina diaria:
1. Inicio
2. Consultar el día
3. Ver agenda y rutina
4. Seleccionar una actividad
5. Realizar actividad
6. Marcar como completada
7. Siguiente actividad / recordatorio
8. Fin del día

### Flujos secundarios: Medicación, citas y comunicación
* **Medicación:** Inicio → Medicación → Ver medicamento → Recordatorio → Confirmar toma.
* **Cita médica:** Inicio → Agenda → Cita médica → Ver información → Recordatorio.
* **Comunicación:** Inicio → Comunicación → Seleccionar contacto → Enviar mensaje / realizar llamada.

## Estructura de vistas (Wireframes)
Las diferentes pantallas deben verse de manera clara y ser intuitivos de usar.

Esto debe mostrar cada pantalla:

### Pantalla 1 — Inicio
Vista general del día:
* Fecha y hora
* Próxima actividad
* Rutina del día
* Próximo medicamento
* Próxima cita
* Acceso rápido a comunicación

### Pantalla 2 — Agenda
Un calendario sencillo donde el usuario pueda consultar:
* Actividades
* Citas
* Medicación
* Eventos importantes

### Pantalla 3 — Rutina
Debe aparecer una lista de las actividades diarias que se repiten cada día.
Ejemplo:
- 08:15 - Desayunar
- 09:00 - Medicación
- 11:00 - Paseo
- 13:00 - Comida
- 21:00 - Dormir

### Pantalla 4 — Medicación
Información clara sobre:
* Nombre del medicamento
* Hora
* Dosis
* Próxima dosis
* Confirmación

### Pantalla 5 - Citas médicas
Lista de próximas citas con:
* Fecha
* Hora
* Médico/profesional
* Lugar
* Recordatorio

### Pantalla 6 - Comunicación
Acceso sencillo a personas importantes:
* Familiares
* Cuidadores
* Profesionales
* Contactos de emergencias

El usuario podrá seleccionar un contacto para hacer una llamada o enviar un mensaje

## Decisiones técnicas y de diseño UX/UI
### Principios de simplicidad y claridad visual
La aplicación utilizará una agenda visual con información clara y sencilla. Todo debe ser predecible para ofrecer una sensación de seguridad y tranquilidad al usuario. Las rutinas deben tener una estructura marcada, mostrando únicamente la información que sea relevante para su día a día y permitiendo la personalización de la interfaz. 

### Prevención de riesgos (sobrecarga, notificaciones e infantilización)
* **Sobrecarga y estrés:** Se evitará una app excesivamente compleja y la estimulación constante. Las notificaciones no deben ser molestas ni generar estrés.
* **Tono y autonomía:** No se debe hacer sentir al usuario dependiente ni infantilizado. No se les tratará como si no pudieran tomar decisiones, promoviendo siempre su autonomía y seguridad.

## Estrategia de tests y validación
### Criterios de evaluación de usabilidad
Las pruebas se centrarán en evaluar los siguientes aspectos clave:
* **Facilidad de navegación:** Comprobar si el usuario se pierde entre las opciones, le cuesta encontrar funciones o navega sin problemas.
* **Claridad de los textos e iconos:** Evaluar si no entiende algunos iconos, si los textos son confusos o si resultan claros e intuitivos.
* **Facilidad para organizar una actividad:** Observar si sabe cómo añadir actividades o si necesita ayuda para organizarse.
* **Comprensión de los recordatorios:** Analizar si entiende para qué sirven y si los utiliza correctamente.
* **Facilidad para encontrar la opción de ayuda:** Medir cuánto tarda en localizar el botón de contacto o ayuda.

### Ejecución de pruebas con usuarios reales
Se realizarán pruebas con distintos perfiles de usuario (Usuario 1, 2, 3, etc.) utilizando una tabla de observación directa. Se registrarán los bloqueos y aciertos en cada uno de los criterios de usabilidad mencionados para ajustar la interfaz y mejorar la experiencia antes de la versión final.