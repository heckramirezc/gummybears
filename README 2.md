# ClaroGT

| Modulo | Inico | Fin | Observaciones |
| ------ | ------ | ------ | ------ |
| Facetas | Proceso | --- | Se rehace componente y se quiere reducir complejidad. |
| Buscador | Proceso | --- | Se quiere rehacer componente para reducir complejidad. |
| Header cart | Fin | Fin | N/A |
| Catalogo | Fin | Fin | Se rehace store. |
| Detalle de producto | Proceso | --- | Falta una sección visual. |
| Detalle de producto | Fin | Fin | Se reconstruye funcionaidad. |
| Detalle de producto | Fin | Fin | Se rehace store. |
| Agregar al carrito | Fin | Fin | Se crea store y se hace implementación de funcionalidad. |
| Consultar carrito | Fin | Fin | Se crea store para consulta de información. |
| Agregar billing address | Fin | Fin | |
| Agregar shipping address | Fin | Fin | Api retorna error 504. |
| Validación de formularios | Fin | Fin | N/A |
| Pantalla de pagos | Fin | Fin | Payment instruction retorna error 500. |
| Confirmación | Proceso | --- | Se crea mock para prepara template debido a que no se puede concluir una compra. |

| Dependencias | nueva | Observaciones|
| ------ | ------ | ------ |
| React v16 | Yes | Utilizar es6 |
| React Router 4 | Yes | Utilizar react router dom para interactuar entre paginas |
| Mobx | Yes | Reemplazo de Reflux |
| esLint | Yes | Mejorar calidad de código |
| webpack 4 | Yes | Compilar sass sin hace uso de ruby |
| babel | Yes | Uso de pollyfil |
| es6 | Yes | Mejorar calidad de codigo |


To run the project you must install [Node.js](https://nodejs.org/)

### You can run this project using npm:
```sh
$ npm install
$ npm start
```
### Install new dependency

```sh
$ npm i -S <dependency> or npm i -D <dependency>
* -S( save dependencies ).
* -D ( save devDependencies ).
```
### To delete node_modules

```sh
$ rm -rf node_modules
```

### Tips

```sh
$ To import a dependency not to use: var x require ('<dependency>'), use import x from '<dependency>'
```

To test build process, run:
```sh
$ docker run -it --rm --volume=`pwd`:/localDebugRepo --workdir="/localDebugRepo" --memory=1g --memory-swap=1g --entrypoint=/bin/bash docker.edgebound.net/builders/node-builder:latest
```
