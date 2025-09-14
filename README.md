# **_Buscaminas_**

## **_Cómo programar un Buscaminas usando JavaScript_**

**_Este artículo es sobre todo para aquellos que no saben nada, nada de programación, y quiere ver cómo se hace. En este artículo les voy a enseñar a hacer un juego muy simple de cero._**

## **_1. Introducción_**

**_¿Por qué un Buscaminas? es lo suficientemente conocido para que todo el mundo sepa cómo funciona, y su simplicidad no oculta los elementos básicos: habrá que pintar una pantalla y habrá eventos que desencadenan acciones que tendrán consecuencias sobre la pantalla._**

### **_Los ladrillos básicos que emplearemos serán HTML, CSS y JavaScript..._**

- **_HTML es la maquetación. Es como dentro de un periódico: defines las columnas, los titulares, la entradilla, los pies de foto, imágenes, etc…_**
- **_Con CSS le das estilos: tipo de letra, colores, márgenes, etc…_**
- **_Con JavaScript coges esos elementos básicos y haces cosas con ellos: los mueves, los transformas, les cambias su aspecto, etc…_**

### **_En este tutorial veremos cómo:_**

- **_Dibujar en pantalla el tablero con archivos HTML y CSS._**
- **_Implementar la lógica del juego utilizando JavaScript._**
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

- **_Si abre el archivo con un navegador verá una página en blanco y la pestaña tendrá el nombre del título. Le insto a que lo cambie, grabe el fichero, y recargue el navegador. Verá cómo cambia._**

## 3. **_Pintar el tablero_**

**_El buscaminas tiene un tablero con un número de filas y columnas. Tiene forma de tabla. Lo primero que vamos a hacer es añadir en el <body> un contenedor donde pintar el tablero._**
```
<!DOCTYPE html>
<html>
<head>
  ...
</head>
<body>
  <div id="tablero">
  </div>
</body>
</html>
```

**_Bien, vemos que un ```<div>``` es un contenedor, que se cierra con ```</div>```. Esta tiene un ```id=”tablero”```, para poder identificarlo luego y llamarlo por su nombre. Cada casilla del buscaminas podría ser un div ¿no?_**

<div id="tablero">
  <div></div> <div></div> <div></div> <div></div>
  <div></div> <div></div> <div></div> <div></div>
  <div></div> <div></div> <div></div> <div></div>
</div>
Aquí hay 12 casillas. Son pocas pero nos sirve para ilustrar nuestro ejemplo.

Si guardamos y refrescamos la pantalla, no vemos nada. Sigue todo blanco. Es normal, no he hemos indicado a cada div un fondo, ni un borde ni nada. Tampoco le hemos indicado al tablero si los debe pintar en fila, uno debajo del otro o en columna. Eso se hace en CSS.

Vamos a crearnos el subdirectorio css y dentro un archivo de texto llamado estilos.css

En él indicamos que el tablero se mostrará en forma de rejilla (grid) y que debe tener 3 filas y 4 columnas de 32 píxeles de ancho y alto.

#tablero{
  display:grid;
  grid-template-columns: repeat(4, 32px);
  grid-template-rows: repeat(3, 32px);
}
Además, de indicamos que todos los div dentro de tablero tendrán un color de fondo gris, y con un borde de 2 píxeles, arriba y a la izquierda un poco más claro y abajo y a la derecha un poco más oscuro, para dar sensación de bisel, de relieve.

#tablero div{
  background-color: #BBBBBB;
  border-left: 2px solid #D3D3D3;
  border-top: 2px solid #D3D3D3;
  border-right: 2px solid #A9A9A9;
  border-bottom: 2px solid #A9A9A9;
  text-align: center;
  line-height: 32px;
}
Esos #A9A9A9 son colores RGB.

Además le hemos indicado que el texto tiene que estar centrado y que la altura de la línea es 32 píxeles también.

Si guardáis los archivos de texto y recargáis el navegador deberías ver:

Tablero buscaminas de 4x3

Bien, y si en vez de una rejilla de 3×4 quisiéramos una rejilla de cualquier dimensión… Deberíamos poder pintar tantos div como casillas quisiéramos que tuviera nuestro buscaminas ¿no?

Para eso nos vamos a nuestro fichero HTML y vaciamos de DIVs el tablero. Ahora debemos rellenarlos programaticamente con los que queramos cada vez. Nos vamos al fichero js/funciones.js y creamos la función pintarTablero()

function pintarTablero(numFilas, numColumnas){
    let tablero = document.querySelector("#tablero");

    for(let f=0; f<numFilas; f++){
        for(let c=0; c<numColumnas; c++){
            let newDiv = document.createElement("div");
            tablero.appendChild(newDiv);
        }
    }
}
Esta función recibe el número de filas y el número de columnas por parámetro.

Vemos que lo primero que hace es obtener el elemento tablero por su id y lo guarda en una variable

    let tablero = document.querySelector("#tablero");
Luego para cada fila, para cada columna crea un div y se lo añade al tablero.

NOTA: vemos que el bucle for empieza en 0 y es que en JavaScript, los arrays, los vectores, empiezan en 0. Esta es propio de muchos lenguajes de programación.

Guardamos y recargamos el navegador. Y abrimos la consola del navegador con F12 o con Alt + Cmd + I para macOs.

En la consola, escribimos pintarTablero(5,6)



Pero se ve raro… Vemos un grid de 4×3 y unas pocas casillas debajo… ¿qué ha pasado? Realmente hemos creado 5×6 divs… 30 casillas, pero la hoja de estilos ha intentado repartirlas en una rejilla de 4×3. Lo que tenemos que cambiar es la definición de la rejilla.

Para eso usaremos variables de CSS y las inicializaremos a unos valores por defecto.

:root{
  --num-columnas: 10;
  --num-filas: 10;
  --size: 32px;
}

#tablero{
  display:grid;
  grid-template-columns: repeat(var(--num-columnas), var(--size));
  grid-template-rows: repeat(var(--num-filas), var(--size));
}

#tablero div{
  background-color: #BBBBBB;
  border-left: 2px solid #D3D3D3;
  border-top: 2px solid #D3D3D3;
  border-right: 2px solid #A9A9A9;
  border-bottom: 2px solid #A9A9A9;
  text-align: center;
  line-height: var(--size);
}
Ahora, nuestra función de JavaScript deberá poder cambiar el valor de esas variables CSS.

function pintarTablero(numFilas, numColumnas){
    let tablero = document.querySelector("#tablero");

    document.querySelector("html").style.setProperty("--num-filas",numFilas);
    document.querySelector("html").style.setProperty("--num-columnas",numColumnas);

    for(let f=0; f<numFilas; f++){
        for(let c=0; c<numColumnas; c++){
            let newDiv = document.createElement("div");
            tablero.appendChild(newDiv);
        }
    }
}
con eso, colocamos en las variables CSS lo que recibimos como parámetros de entrada de la función.

Si recargamos el navegador y en la consola ejecutamos pintarTablero(5,6) nos saldrá el tablero que le indiquemos.

Pintar tabler 5x12

Si le dais con el botón derecho encima del tablero y le dais a “inspeccionar” os mostrará el HTML que ha generado dinámicamente y todos los divs.



Vemos que todos los divs son iguales, y no sabemos en qué fila y columna están. Para ello vamos a hacer uso de los atributos de datos personalizados. Les daremos un id propio a cada uno, y les vincularemos un escuchador de evento.

function pintarTablero(numFilas, numColumnas){
...

    for(let f=0; f<numFilas; f++){
        for(let c=0; c<numColumnas; c++){
            let newDiv = document.createElement("div");
            newDiv.setAttribute("id","f" + f + "_c" + c );
            newDiv.dataset.fila = f;
            newDiv.dataset.columna = c;
            newDiv.addEventListener("contextmenu",marcar); //evento con el botón derecho del raton
            newDiv.addEventListener("click",destapar); //evento con el botón izquierdo del raton

            tablero.appendChild(newDiv);
        }
    }
}
Si refrescamos la pantalla y pintamos el tablero de nuevo nos dará un error, porque los escuchadores de eventos estamos intentando vincularlos a funciones que aún no hemos definido: marcar y destapar.

error-reference-error

function marcar(evento){

}

function destapar(evento){

}
Ya podemos recargar y comprobar el html generado.

html generado IDs

Vemos que se ha generado un id concatenando fila, guión bajo, y columna. Además se han creado unos atributos llamados data-fila y data-columna. A estos atributos llamados data- se les llama atributos personalizados y son un estándar de HTML.

Otra cosa que debemos darnos cuenta es que si llamamos de nuevo a pintar añadirá divs a los que ya había. De alguna forma debemos vaciar el tablero cada vez que lo repintemos.

//borramos el tablero actual
while (tablero.firstChild) {
  tablero.removeChild(tablero.firstChild);
}
NOTA: para los nóveles la solución anterior es suficiente, pero los más avezados se habrán dado cuenta que eso puede dar lugar a “pérdida de memoria”, llamado por los programadores memory leak.

Mientras el elemento tablero tenga hijo, lo borro. Esto lo saca del DOM, es decir lo quita de la pantalla, pero sigue ocupando espacio en la memoria del navegador. Porque antes hemos vinculado un escuchador de evento sobre ese objeto. A eso se le llama “bindar” un evento sobre ese objeto. Eso quiere decir que hay una referencia a ese objeto y por lo tanto no lo limpiará de la memoria.

Esta es una de las principales razones por las que las páginas web se degradan cuando llevan mucho tiempo funcionando. Y es que si no se hila fino, te vas dejando referencias a objetos. Ahora sí.

//borramos el tablero actual
while (tablero.firstChild) {
        tablero.firstChild.removeEventListener("contextmenu",marcar);
        tablero.firstChild.removeEventListener("click",destapar);
        tablero.removeChild(tablero.firstChild);
}
