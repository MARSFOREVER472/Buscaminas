# **_Buscaminas_**

## **_Cómo programar un Buscaminas en JavaScript_**

**_Este artículo es sobre todo para aquellos que no saben nada, nada de programación, y quiere ver cómo se hace. En este artículo les voy a enseñar a hacer un juego muy simple de cero._**

## **_1. Introducción_**

**_¿Por qué un Buscaminas? es lo suficientemente conocido para que todo el mundo sepa cómo funciona, y su simplicidad no oculta los elementos básicos: habrá que pintar una pantalla y habrá eventos que desencadenan acciones que tendrán consecuencias sobre la pantalla._**

### **_Los ladrillos básicos que emplearemos serán HTML, CSS y JavaScript..._**

- **_HTML es la maquetación. Es como en un periódico: defines las columnas, los titulares, el la entradilla, los pies de foto, imágenes, etc…_**
- **_Con CSS le das estilos: tipo de letra, colores, márgenes, etc…_**
- **_Con JavaScript coges esos elementos básicos y haces cosas con ellos: los mueves, los transformas, les cambias su aspecto, etc…_**

### **_En este tutorial veremos cómo:_**

- **_Dibujar en pantalla el tablero con HTML y CSS._**
- **_Implementar la lógica del juego en JavaScript._**
- **_Vincular eventos del ratón a acciones concretas._**

## **_2. Nuestra página HTML_**

**_En un directorio, creamos un archivo de texto llamado ```buscaminas.html```_**

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buscaminas</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>

    <script src="buscaminas.js"></script>
    
</body>
</html>
```

- **_Éste es una página web vacía._**

- **_En la cabecera vemos que tenemos un título llamado Buscaminas._**

- **_Indicamos una hoja de estilos que está en un subdirectorio “```css/estilos.css```” y un archivo de JavaScript en otro subdirectorio “```js/funciones.js```”_**

- **_De momento esos archivos no existen, pero ahora los crearemos._**

- **_Si abre el archivo con un navegador verá una página en blanco y la pestaña tendrá el nombre del título. Le animo a que lo cambie, grabe el fichero, y recargue el navegador. Verá cómo cambia._**
