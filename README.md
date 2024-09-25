### Sistema de Gestión de Usuarios

Este proyecto permite gestionar usuarios con Node.js mediante argumentos desde la línea de comandos. A continuación, se detallan las funcionalidades y cómo usarlas.

## Requisitos:
- Cada usuario tiene: id (UUID), nombre, apellido, email (único), contraseña (hasheada), isLoggedIn (booleano).
- Datos en: ./data/users.json
- Errores en: ./error/log.json

## Métodos:
1. Mostrar usuarios.
2. Buscar usuario por ID.
3. Agregar usuario.
4. Modificar usuario.
5. Eliminar usuario por ID.

## Instrucciones

1. Implementa cada uno de los métodos mencionados.
2. Usa `process.argv` para manejar los comandos desde la terminal (por ejemplo: `node index.js list` para mostrar los usuarios).
3. Crea funciones auxiliares para la y modificación de objetos de usuario.
4. Asegúrate de manejar los errores de manera adecuada yarlos en el archivo de logs.

## Contribuciones

Las contribuciones son bienvenidas.
Trabajo hecho en conjunto con Brian Veliz.