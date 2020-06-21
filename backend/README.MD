# Backend del proyecto

## comandos corridos
Inicializamos este proyecto en el directorio raíz.
```
npm init
```
Instalar el framework a utilizar.
```
npm i express
```
Correr el proyecto (pero tirará un error).
```
node backend/server.js
```
Esto ocurre porque Node no reconoce Express. Lo solucionamos instalando una librería de trans-copilador y otra de auto-ejecución para facilitar pruebas con el servidor. Recordar añadirlo como dependencia de desarrollo unicamente.
```
npm install @babel/cli @babel/core @babel/node @babel/preset-env nodemon --save-dev
```
Una vez instalado crear una archivo en el directorio raíz con el nombre *".babelrc"* y añadir la siguiente configuración:
```
{
    "presets": [
        ["@babel/preset-env"]
    ] 
}
```
Para ahora utilizar estas herramientas debe crear en el *"package.json"* un nuevo Script.
```
"start-dev": "nodemon --watch backend --exec babel-node backend/server.js"
```
Ahora si podrás correr correctamente el servidor.