# Constitución del proyecto

## 1. Propósito

Este documento establece los principios que deben orientar el diseño, la implementación y la validación del MVP de la aplicación destinada a favorecer la autonomía y el acompañamiento de personas mayores con trastorno del espectro autista (TEA), contribuyendo a reducir situaciones de aislamiento social.

Estos principios son de aplicación a todas las tareas del proyecto y deben respetarse también cuando se utilicen herramientas de inteligencia artificial.

## 2. Principios de desarrollo

### 2.1. Diseño centrado en las personas usuarias
- La interfaz priorizará la claridad, la previsibilidad y la facilidad de uso.
- Las pantallas presentarán una cantidad limitada de información y evitarán elementos decorativos que dificulten la comprensión.
- Las acciones principales utilizarán etiquetas explícitas y consistentes.
- La navegación deberá mantener una estructura coherente entre pantallas.

### 2.2. Accesibilidad y legibilidad
- El contenido utilizará lenguaje claro, frases breves y términos comprensibles.
- El texto y los controles deberán mantener un contraste suficiente y un tamaño legible.
- La información no se comunicará únicamente mediante colores o iconos.
- Los formularios indicarán qué información se solicita y mostrarán mensajes de validación comprensibles.
- La interfaz deberá adaptarse a distintos tamaños de pantalla, siempre que la tecnología seleccionada lo permita.

### 2.3. Alcance limitado del MVP
- Solo se implementarán las funcionalidades acordadas en `spec.md`.
- Cualquier funcionalidad nueva deberá justificarse, revisarse por el equipo y reflejarse en la especificación antes de incorporarse.
- Las funciones que requieran servicios externos, infraestructura compleja o información no disponible quedarán fuera del MVP, salvo aprobación expresa del equipo.

### 2.4. Privacidad y protección de datos
- Durante el desarrollo y las pruebas se utilizarán datos ficticios.
- No se incorporarán datos personales reales ni información médica identificable en repositorios, capturas o documentación.
- Solo se solicitarán los datos imprescindibles para las funciones incluidas en el MVP.
- Antes de almacenar información personal o médica, el equipo deberá acordar el mecanismo, la finalidad, el acceso y la eliminación de esos datos.
- La solución no se presentará como un sistema clínico ni sustituirá la valoración de profesionales sanitarios.

### 2.5. Calidad y mantenibilidad del código
- El código deberá organizarse en componentes o módulos con responsabilidades claras.
- Se utilizarán nombres descriptivos y convenciones coherentes en todo el proyecto.
- Se evitará duplicar lógica cuando pueda reutilizarse de forma sencilla.
- Los errores previsibles deberán gestionarse y comunicarse de manera comprensible.
- No se considerará terminada una funcionalidad hasta que se haya comprobado conforme a sus criterios de aceptación.

### 2.6. Uso responsable de la inteligencia artificial
- Las propuestas generadas por IA serán consideradas sugerencias y no decisiones definitivas.
- Una persona integrante del equipo revisará el código, los requisitos y la documentación generados con IA antes de aceptarlos.
- El equipo comprobará que cada propuesta respeta el alcance, la privacidad, la accesibilidad y las tecnologías acordadas.
- No se incorporarán cambios que el equipo no pueda explicar o mantener.
- Las decisiones relevantes y los usos significativos de IA se documentarán en `uso-ia.md`.

## 3. Criterios de cumplimiento

Una tarea se considerará conforme a esta constitución cuando:
1. Respete el alcance y los requisitos de `spec.md`.
2. No introduzca datos personales reales ni exponga información sensible.
3. Mantenga una interfaz comprensible y coherente con las personas usuarias previstas.
4. Incluya las comprobaciones necesarias para verificar su funcionamiento.
5. Haya sido revisada por una persona del equipo, incluso si se ha utilizado IA.

Si existe una contradicción entre una propuesta técnica y estos principios, el equipo deberá resolverla antes de continuar con la implementación.
