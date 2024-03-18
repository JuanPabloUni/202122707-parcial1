# Juan Pablo Hernández T. - 202122707

# Parcial 1 - Programación con Tecnologías Web

## Introducción

Repositorio público para el desarrollo del primer parcial de la asignatura de Programación con Tecnologías Web.

## Instalación

### Pre-requisitos
- REACT (Boostrap, Scripts, Router Dom)
- npm

### Paso a paso
1. Clonar el repositorio en la máquina local:
   ```bash
   git clone https://github.com/JuanPabloUni/202122707-parcial1
   ```
2. Navegar al directorio del proyecto:
   ```bash
   cd 202122707-parcial1
   ```
3. Instalar las dependencias del proyecto:
   ```bash
   npm install
   ```

4. Iniciar la aplicación:
   ```bash
   npm start
   ```

## Uso

La página principal de la aplicación es `http://localhost:3000/`. Ahí se puede ver una imitación de un perfil de Instagram, con una foto de perfil, información del usuario (nombre de usuario, biografía, seguidores, seguidos, publicaciones), y una lista de publicaciones. Toda la información presentada aquí es escogida aleatoriamente de un conjunto de datos predeteriminado, y las imágenes son traídas remotamente, también de forma aleatoria.

En esta vista, se puede dar click a una publicación para verla en mayor tamaño. Adicionalmente, hay un botón al superior derecho que permite cambiar el idioma de la página entre inglés y español. Al dar click en la foto de perfil, se navega a la dirección `http://localhost:3000/profile`.

En la vista de perfil, se puede ver la misma información que en la página principal, pero con un formato diferente. Aquí es posible editar el nombre de usuario y la biografía, y al dar click en el botón de "Guardar", se logea un mensaje en la consola con la información actualizada. En esta página también hay un botón para regresar a la página principal y otro para cambiar el idioma de la página. Adicionalmente, cada vez que se carga esta página, existe un 50% de probabilidad de que los campos de nombre de usuario y biografía no se puedan editar y por ende, no se muestre el botón de "Guardar".

## Decisiones de diseño y procesos de desarrollo

Describe the structure of your project's codebase, highlighting important directories and files related to components, routes, and data fetching.

## Tecnologías Utilizadas

- React.js
- React Router
- npm
- CSS
- Fetch API