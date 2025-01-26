# Frontend de la Aplicación de Cancelados

## Descripción

Este es el frontend de la aplicación de cancelados. Permite al usuario:
- Descargar y guardar un archivo CSV.
- Eliminar todos los registros de la base de datos.
- Visualizar los registros de cancelación con paginación.

## Requisitos

Para ejecutar el proyecto frontend, asegúrate de tener instalados los siguientes requisitos:

- **Node.js**: versión 14.x o superior.
- **npm**: versión 6.x o superior.

## Instalación

Sigue estos pasos para configurar y ejecutar el frontend:

1. **Clonar el repositorio**:
   Si aún no has clonado el repositorio, utiliza el siguiente comando para hacerlo:
   ```bash
   git clone https://github.com/Audvis/appDataSatFront.git
Navegar a la carpeta del proyecto: Después de clonar el repositorio, entra en la carpeta del frontend:

bash
Copiar
cd frontend
Instalar las dependencias: Ejecuta el siguiente comando para instalar todas las dependencias necesarias para el proyecto:

bash
Copiar
npm install
Esto descargará todos los paquetes necesarios, como React, Axios, Bootstrap y otros.

Ejecución
Ejecutar la aplicación en modo de desarrollo: Para iniciar la aplicación en modo de desarrollo, utiliza el siguiente comando:

bash
Copiar
npm start
Esto iniciará un servidor de desarrollo y abrirá la aplicación en tu navegador en la siguiente dirección: http://localhost:3000.

Funcionalidades
El frontend de la aplicación tiene las siguientes funcionalidades:

Botón de Descargar y Guardar CSV: Permite al usuario descargar un archivo CSV desde el backend y guardarlo en la base de datos. Al presionar el botón, se realizará una solicitud al backend para obtener y almacenar el archivo CSV.

Botón para Borrar Todos los Registros: Permite al usuario borrar todos los registros almacenados en la base de datos. Este botón estará habilitado solo si existen registros en la base de datos.

Visualización de Datos: Los registros almacenados en la base de datos se muestran en una tabla con paginación. La paginación permite al usuario navegar a través de los registros sin sobrecargar la interfaz.

Dependencias
Este proyecto usa las siguientes dependencias:

React: Librería de JavaScript para construir interfaces de usuario.
Axios: Cliente HTTP para hacer peticiones al backend.
React Bootstrap: Componentes de Bootstrap para React.
React Paginate: Para agregar paginación a las tablas de datos.
Para instalar estas dependencias, puedes ejecutar el comando:

bash
Copiar
npm install axios react-bootstrap react-paginate
Notas
La aplicación está conectada al backend de la aplicación de cancelados que debe estar corriendo en http://127.0.0.1:5000. Si deseas cambiar la URL del backend, puedes hacerlo en el archivo de configuración correspondiente.
El frontend hace uso de la API proporcionada por el backend para realizar las acciones de descarga de CSV, eliminación de registros y obtener datos.
Si el backend no está en ejecución, los botones de descargar o borrar no tendrán efecto.

Licencia
Este proyecto está bajo la Licencia MIT. Puedes consultar el archivo LICENSE en la raíz del proyecto para más detalles.