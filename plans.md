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
            "descripción": "Desayunar",
            "status": "Completado",
            "hora": "09:00"
        },
        {
            "id": 2,
            "descripción": "Pasear",
            "status": "Completado",
            "hora": "11:30"
        },
        {
            "id": 3,
            "descripción": "Comer",
            "status": "Pendiente",
            "hora": "14:00"
        }
    ]

}
```

### Entidad: Medicación (medicacion.json)
```json
{
    "Medicacion":[
        {
            "id": 1,
            "nombre": "Paracetamol"
        },
        {
            "id": 2,
            "nombre": "Melatonina"
        },
        {
            "id": 3,
            "nombre": "Sertralina"
        },
    ]
}
```

### Entidad: Contactos de emergencia (contactos.json)
```json
{
    "Contactos":[
        {
            "id": 1,
            "nombre": "Hijo",
            "telefono": "+34 600 123 456"
        },
        {
            "id": 2,
            "nombre": "Nieto",
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