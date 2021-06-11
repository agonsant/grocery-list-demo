# Build Grocery List Web App

Un tutorial sobre cómo crear una web paso a paso para gestionar la lista de la compra.

## Introducción al desarrollo web

Antes de empezar a construir la web, necesitamos tener algun conocimiento de lo que estamos haciendo.

Si ya sabes lo que es HTML, CSS y JavaScript puedes empezar desde aquí.

### ¿Qué es una web?

Una página web es una forma de publicar información o interactuar con una empresa en internet y permite que sus usuarios puedan verla y consumirla desde cualquier dispositivo que se encuentre conectado a internet.

Para que un usuario pueda ver una web necesita tener instalada la aplicación que es capaz de interpretarla, el archi-conocido NAVEGADOR. Existen muchos navegadores en el mercado aunque los más conocidos y actuales son: [Microsoft Edge](https://www.microsoft.com/es-es/edge?r=1), [Google Chrome](https://www.google.com/intl/es/chrome/), [Mozilla Firefox](https://www.mozilla.org/es-ES/firefox/new/) y [Safari](https://www.apple.com/es/safari/).

En la siguiente imagen tenemos un ejemplo de mi perfil de Github ejecutandose en un navegador.

![Ejemplo del perfil de github agonsant](./docs-assets/ejemplo-web-navegador.png)

### ¿Cómo se construye una web?

Si bajamos un poquito a detalle una web son un conjunto de archivos o documentos, como un word, un pdf u otro tipo de documento, escritos en "idiomas" que el navegador es capaz de entender y procesar:

- [HTML](https://es.wikipedia.org/wiki/HTML): Es el que nos permite definir los contenidos y la estructura de una página web (títulos, párrafos, imagenes, enlaces, botones, etc). Son archivos con extensión `.html`.

Este sería un ejemplo de HTML que muestra un párrafo que pone hola mundo.

```HTML
<html>
 <head>
 </head>
 <body>
   <p>Hello World<p>
 </body>
</html>
```

El resultado al verlo en un navegador sería:

![Hola mundo HTML](./docs-assets/hello-world-html.png)

- [CSS](https://es.wikipedia.org/wiki/Hoja_de_estilos_en_cascada): Es el que nos permite dar una forma de presentación a los contenidos creados en HTML (colores, tamaños, posición en la página, etc). Son archivos con extensión `.css`. Para poder utilizar un archivo CSS hay que indicarlo en el documento HTML asociado.

Este sería un ejemplo de CSS para poner el color de todos los párrafos en rojo.

```CSS
p {
  color: red;
}
```

Si lo enlazamos en el HTML del ejemplo anterior (lo veremos más adelante), se visualizaría de la siguiente manera.

![Hola mundo CSS](./docs-assets/hello-world-css.png)

- [JavaScript](https://es.wikipedia.org/wiki/JavaScript): Es un lenguaje de programación que, cuando se ejecuta en un navegador, nos permite gestionar las acciones del usuario con la web (Cuando un usario hace click a un elemento, cuando quiere cambiar a otra página, etc). Son archivos con extensión `.js`. Para poder utilizar un archivo JS en un navegador, hay que indicarlo en el documento HTML asociado.

Este sería un ejemplo de JS que lance una alerta al usuario que pone Hola mundo.

```JS
alert( 'Hello, world!' );
```

Si lo enlazamos en el HTML del ejemplo anterior (lo veremos más adelante), se visualizaría de la siguiente manera.

![Hola mundo JS](./docs-assets/hello-world-js.png)

#### Similitud de una web con el mundo real

Por poner un ejemplo de similitud con el mundo real y asi poder entender mejor los diferentes elementos para construir una web, podríamos pensar en una casa.

Para construir una casa vamos a necesitar materiales (ladrillos, ventanas, suelo, cama, escritorio, etc). Esto es lo que sería el `HTML` en una página web.

Solo por tener estos materiales no tendríamos una casa, necesitamos indicar el tamaño y color de nuestras paredes, decidir en que posición de la casa ponemos la cama o el sofá. Esto vendría lo que haría el `CSS` en una página web.

Por ultimo una vez que la hemos constuido, interactuamos con ella (llamar al timbre, abrir una puerta, abrir el grifo). Todas esas acciones son las que gestionariamos utilizando `JavaScript` en una Web.

### ¿Que ocurre cuando un usuario solicita una página web a un navegador?

Una vez que construimos una web, la tenemos que publicar en internet para que cualquiera con conexión pueda acceder utilizando su navegador.

Para ello la persona responsable de esa web guarda los archivos en lo que se conoce como Servidor, un ordenador con el cual me puedo comunicar a utilizando internet.

Igual que las personas utilizamos un idioma para comunicarnos, para que el navegador pueda solicitar al servidor descargar el archivo HTML que da inicio a la página web, este utiliza un idioma que conocen ellos.

A este idioma o protocolo se le conoce como HTTP, protocolo de transferencia de hiper-texto en una red.

Estos sería lo que ocurre, de manera muy simplificada, cuando le pedimos al navegador que nos muestre una página web:

![Pasos de una solicitud de una página](./docs-assets/page-request.png)

## Prerrequisitos para el tutorial

Una vez que conocemos algunos conceptos básicos, vamos a empezar a construir nuestra lista de la compra.

Antes de empezar tenemos que saber con que programa podemos escribir esos archivos HTML, CSS y JS que se convertiran en nuestra web. Podemos usar cualquier editor de texto (el final estos archivos no dejan de ser texto en un formato específico), pero existen programas especiales para poder escribir aplicaciones y páginas web. A estos programas se les conoce como [IDE (Entorno de desarrollo integrado)](https://es.wikipedia.org/wiki/Entorno_de_desarrollo_integrado).

### Instalar un IDE

Existen muchos IDE's para el desarrollo web en el mercado, pero en este tutorial usaremos el que nos proporciona Microsoft (tanto para Windows, Linux y MacOS) llamado [VSCode](https://code.visualstudio.com/).

Tenemos que proceder a descargar e instalar el programa para usarlo en nuestro ordenador. Una vez que lo hayamos descargado, tendrá esta pinta:

![Visual Studio Code Pantalla de inicio](./docs-assets/vscode.png)

### Instalar la extensión "Live Server"

Para poder visualizar una web necesitamos tener un servidor. Como no tenemos un servidor en internet donde guardar los archivos, podemos crear un servidor en nuestra ordenador y que solo nuestro navegador pueda acceder a el.

Para ello existe una extensión que nos ayudará a conseguirlo utilizando VSCode.

Tenemos que ir al apartado de extensiones en el panel vertical izquierdo del IDE y en el buscador escribir `Live Server`. Le damos a instalar a la primera opción que nos sale.

Una vez instalado continuamos con el tutorial que lo usaremos en los siguienes pasos.

## Construir una Web de lista de la compra

Si has llegado hasta aqui ya estás list@ para poder empezar a desarrollar tu primera aplicación web que te ayudará a crear listas y compartirlas.

### Diseño de la Web

Para empezar a desarrollar, lo primero que tenemos que tener claro es como se va a ver nuestra web.
Este trabajo nos lo entregarán nuestros compañeros de UX/UI. Habitualmente ellos usan herramientas como Figma o Zeplin que contiene cómo tiene que ser el resultado cuando terminemos de construir la web.

En este caso para el tutorial lo que dispondremos es de una imagen de cómo tiene que quedar nuestra aplicación. **Este será el objetivo a conseguir**

![]()

### Creando la estructura de la página

Para crear la estructura de la página tendremos que escribir un documento HTML.

Para ello lo primero que tenemos que hacer es crear el documento. Seguiremos los siguientes pasos:

1. Crear una carpeta en el escritorio de nuestro SO con el nombre `grocery-list-app`
2. En el IDE VSCode pulsaremos en `Open Folder...` y seleccionaremos la carpeta que acabamos de crear.
3. En el IDE crearemos un archivo que se llamará `index.html`, que se abrirá automáticamente en el panel central del mismo.

Deberíamos tener algo así:

![Primer archivo HTML creado](./docs-assets/first-html-file.png)

A continuación vamos a proceder a escribir HTML, pero... ¿Cómo se escribe?

#### Aprendiendo HTML

HTML es un lenguaje de marcado que nos ayuda a crear textos, enlaces, botones, etc. Cada elemento visual está asociado a lo que se conoce como `etiqueta HTML`.

Algunos ejemplos serían:

- Párrafo = `p`
- Enlace = `a`
- Botón = `button`
- Lista sin ordenación = `ul`
- Título principal = `h1`
- Títulos secundarios = `h2`o `h3`... `h6`
- Caja para entrada de texto = `input`
- Contenedor o bloque = `div`
- Cabecera = `header`

...Y muchos más. Si quieres ver el listado completo, puedes ir a la documentación para el [desarrollador de mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

Para escribir una etiqueta en un archivo HTML hay que ponerla entre `<>`. Además como podrías necesitar elementos visuales dentro de otros elementos visuales (por ejemplo dentro de un párrafo podría poner un enlace), las etiquetas se pueden `abrir` y `cerrar`.

Para poner un párrafo que diga `hola` en HTML deberíamos escribir `<p>hola</p>`. El primer `p` es la apertura de la etiqueta, el segundo `p` es el cierre (igual que la apertura pero con el símbolo `/`) y lo que hay dentro de las etiquetas es el contenido (en este caso el texto del párrafo).

Por ultimo existen 3 etiquetas fundamentales que hay que poner en todo documento HTML.

- `<html></html>`: Indica que nos encontramos en con un documento HTML
- `<head></head>`: Sección inicial del documento HTML donde se especifican algunas configuraciones de la página web como por ejemplo los CSS y los JS a utilizar o la meta información de la página.
- `<body></body>`: Sección que indica el cuerpo de la página, es decir, donde vamos a crear nuestro contenido y lo que el navegador va a representar. Aqui dentro es donde escribiremos los `p`, `a`, etc..

Una vez que hemos entendido un poco el funcionamiento base de las etiquetas HTML vamos a crear nuestro famoso `HELLO WORLD` en HTML. Para ello:

1. Escribir en el archivo `index.html` que hemos creado antes el caracter `!` y darle al `intro`. Esto es un atajo que nos ayuda a escribir lo que necesitamos para empezar a crear nuestra página. Se podría también escribir a mano.
2. Dentro de la etiqueta `body` (entre su apertura y cierre) escribir `<p>HELLO WORLD!</p>`.
3. Guardar el archivo.

Si todo ha ido bien tendremos esto en nuestro archivo.

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>HELLO WORLD!</p>
</body>
</html>
```

Para poder verlo en el navegador, usaremos la extensión que instalamos previamente. Para ello:

1. Click derecho en el archivo `index.html` -> `Open With Live Server`

Esto nos abrirá el navegador y podremos ver nuestra primera página web que nos muestra HELLO WORLD.

NOTE: A partir de aquí cualquier cambio que ejecutemos en nuestro HTML se refrescará automáticamente en el navegador.

#### Dividir nuestra página

Antes de continuar escribiendo y creando la web, tenemos que analizar lo que hay en el diseño y pensar cuál sería la estructura HTML adecuada para la página.

Todas las webs se dividen en dos tipos de elemento: Contenedor y Contenido.

El `contenido` son todos los elementos que interactúan o muestran información al usuario. Por ejemplo botones, textos, enlaces, ...
Los `contenedores`son aquellos elementos nos ayudan a agrupar `contenido` dentro de la web, como si fuese una caja. Por ejemplo div, header, section, ...

Nuestro objetivo en esta parte es definir los diferentes contenedores o contenidos que hay en la imagen. Esta tarea nos ayudará mucho en el futuro a la hora de desarrollar la web.

Para nuestro ejemplo el análisis generará algo como esto:

![]()

#### Escribiendo nuestra página

Una vez que tenemos el análisis hecho es tan sencillo como ir escribiendo el código HTML dentro del `body`.

Lo primero que tenemos que hacer es el header. 

Para ello crearemos un elemento `header` y dentro de el un título `h1`. El código sería el siguiente:

```HTML
<header>
    <h1>Lista de la compra</h1>
</header>
```

A continuación crearemos la sección principal de nuestra página: `la lista de la compra`.

Por tanto escribiremos un elemento `main` despues del header (como elemento hermano):

```HTML
<main>
    
</main>
```

Dentro de nuestro contenedor `main` tenemos 3 partes: **el bloque con la caja de texto para añadir**, **la lista de elementos** y **el botón de compartir**

Empezamos creando el bloque donde podremos escribir nuestros productos y añadirlos. Para permitir al usuario introducir texto en la web usaremos el elemento `input` y para añadir crearemos un `button`. Todo esto estará dentro del un contenedor `div`, por lo que dentro de nuestro contenedor `main` escribiremos:

```HTML
<div>
    <input />
    <button>+</button>
</div>
```

Podemos jugar a escribir y a pulsar el botón, aunque de momento no pasará nada. Tendremos que esperar a `JavaScript`.

A continuación vamos a crear la lista. Para ello necesitamos el elemento `ul` (ya que no es una lista ordenada) como hermano del `div` anterior. Las listas se component de items, que en HTML son representados con el elemento `li`.

Cada elemento de la lista `li` tendrá un texto `p` y un botón de eliminar. Por tanto el código de nuestra lista de momento será:

```HTML
<ul>
    <li>
        <p>Tomates</p>
        <button>-</button>
    </li>
</ul>
```

De momento hemos creado un elemento de la lista de prueba (tomates). Con JavaScript podremos ir añadiendo elementos según el usuario los vaya introduciendo.

Por último crearemos el botón de compartir como hermano de nuestro `div` y nuestra lista `ul`

```HTML
<button>Compartir</button>
```

Ya tenemos todo nuestro código HTML necesario para nuestra web. Si has conseguido llegar hasta este punto deberías tener un archivo `index.html` de la siguiente manera:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <h1>Lista de la compra</h1>
    </header>
    <main>
        <div>
            <input />
            <button>+</button>
        </div>
        <ul>
            <li>
                <p>Prueba</p>
                <button>-</button>
            </li>
        </ul>
        <button>Compartir</button>
    </main>
</body>
</html>
```

En el navegador se debería visualizar lo siguiente:

![Lista de la compra solo HTML](./docs-assets/grocery-list-html.png)

### Estilizando con CSS


### Interactuando con el usuario

### Compartir la lista de la compra
