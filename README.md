# Prueba Tecnica Front End  - Masiv

### Ambiente de Desarrollo

version de Node:  [Node.js](https://nodejs.org/)  v12.13.1 
version de React:  [React.js](https://reactjs.org/)  v17.0.1 
> Posteriormente de haber clonado el repositorio, proceder a instalar las dependencias necesarias 

```sh
$ cd masiv-test
$ npm install 
```

> Ejecutar el servidor, el cual abrira automaticamente el navegador

```sh
$ npm start
```

 > luego de haber realizado los anteriores pasos, la aplicacion estara lista para su uso 
 
 en la primera carga se mostrara por pantalla un **Comic** aleatorio el cual proviene de la API [https://xkcd.com/json.html](https://xkcd.com/json.html), en la parte inferior del comic se encuentran 5 estrellas para "calificar" el comic y a su derecha un boton **Clasificar** el cual al ser presionado desplegara un modal, el cual contiene una entrada de texto para darle una **descripccion** al comic. 
 una vez enviada la descripccion y la calificacion en estrellas, se mostrara un nuevo comic aleatorio, y el anterior comic sera agregado a una lista de comics, la cual puede ser ordenada por año y por calificacion.