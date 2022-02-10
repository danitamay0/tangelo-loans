# TangeloLoans

El proyecto esta generado en [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.
Tiene integrado  [JSON Server](https://github.com/typicode/json-server)

## Getting started

##### Dependencias de Node 
Ejecute `npm install` para installar las librerias de Node js

##### Servidor JSON 
Ejecute  `npm install -g json-server` para installar el servidor de JSON Server de manera GLOBAL.
En la carpeta raíz del proyecto se encuentra el archivo 'db.json', el cual hace referencia a la Base de datos.

## Servidor de desarrollo

##### Servidor JSON 
Dentro del proyecto ejecute `json-server --watch db.json`  para levantar el servidor de JSON Server. 
Ahora, si va a `http://localhost:3000`, obtendrá los End Points disponibles

#### Servidor de angular
Ejecute `ng serve` para un servidor de desarrollo de Angular. Navegue a `http://localhost:4200/`


## Build
Ejecute `ng build` para construir el proyecto. Los artefactos de compilación se almacenarán en el directorio `dist/`.
