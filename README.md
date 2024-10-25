# Movie Platform: Plataforma con catálogo de peliculas y tv shows

Este es un proyecto de plataforma de información de películas y series de TV, diseñado para ofrecer una experiencia similar a plataformas como Netflix o Disney+. El proyecto consume la API de **The Movie Database (TMDb)** y está construido en **React** con un enfoque de **arquitectura hexagonal**, asegurando un código limpio, escalable y mantenible.

## Funcionalidades 🚀

- **Visualización de contenido**: Sección inicial con categorías como "Más populares", "Tendencias", y "Mejor valoradas" tanto para peliculas como tv shows.
- **Búsqueda avanzada**: Barra de búsqueda similar a la utilizada en plataformas de streaming.
- **Favoritos**: Posibilidad de agregar y eliminar películas y series de TV a una lista de favoritos (para usuarios registrados).
- **Autenticación**: Acceso como usuario registrado para personalizar la experiencia.
- **Paginación**: Navegación en las listas de contenido para facilitar la exploración.
- **Interfaz interactiva**: Uso de componentes interactivos como sliders y carruseles de cards.

## Tecnologías utilizadas 🛠️

- **Frontend**: React, Redux, React Router, React Icons
- **Estilos**: Bootstrap, Styled-Components
- **API**: Integración con The Movie Database (TMDb)
- **Estado global**: Redux Toolkit
- **Manejo de autenticación**: Autenticación con la API de TMDb, incluyendo gestión de tokens y sesiones.

## Arquitectura 🧱

El proyecto sigue una **arquitectura hexagonal** para asegurar modularidad y escalabilidad. La estructura de carpetas está organizada en:

- **Core**: Casos de uso que representan la lógica de negocio.
- **Adapters**: Interfaces de conexión con la API y la capa de almacenamiento (Redux).
- **UI**: Componentes de presentación, divididos en vistas, componentes comunes y específicos.

## Instalación y ejecución 🔧

1. Clonar el repositorio:
2. Posicionarse en directorio raiz
3. Agregar el archivo env.local enviado por correo
4. Ejecutar los siguientes comandos

```bash
npm install
npm start
```