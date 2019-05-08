'scrict use' /* ¿Supongo que se tiene que poner esta leyenda aquí también verdad? o no? jeje */

/* Como cambié la get de archivo, es necesario poner de nuevo las líneas 5, 5 y 7? */

const express = require('express');
const app = express();
const port = 3000;

app.get('/sumar', (request, response) => {
    const num1 = request.query.num1;
    const num2 = request.query.num2;
    const resultado = parseInt(num1) + parseInt(num2);
    response.send('Suma = ' + resultado);
});