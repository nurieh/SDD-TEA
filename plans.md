# Plan técnico y de diseño — MVP Conecta
Leer `contitution.md` y `spec.md`. Este plan es el cómo. Cada bloque indica qué requisitos cubre.

## Estructura del sistema
**Objetivo Principal:** Crear una aplicación dirigida a personas adultas con TEA para ayudarles a facilitar y organizar su dia a dia (mantener rutinas, recordatorios, facilitar la comunicación...).

Además, el proyecto debe cumplir con los siguientes requisitos:
* **Claridad visual:** La aplicación debe ser intuitiva visualmente
* **Uso rápido e intuitivo:** Cada función en la aplicación debe ser fácil de usar

### Frontend (Interfaz de usuario)


### Backend y persistencia de datos


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

* `nombre` 
* `dosis` indica la cantidad de medicamento en mg que se debe tomar. Si `dosis` es `null` quiere decir que el medicamento no tiene registrado una 
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
### Flujos secundarios: Medicación, citas y comunicación

## Estructura de vistas (Wireframes)
Las diferentes pantallas deben verse de manera clara 

### Pantalla 1 — Inicio

### Pantalla 2 — Agenda

### Pantalla 3 — Rutina

### Pantallas 4, 5 y 6 — Medicación, Citas médicas y Comunicación


## Decisiones técnicas y de diseño UX/UI
### Principios de simplicidad y claridad visual
### Prevención de riesgos (sobrecarga, notificaciones e infantilización)

## Estrategia de tests y validación
### Criterios de evaluación de usabilidad
### Ejecución de pruebas con usuarios reales