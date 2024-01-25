// importar operaciones y persona
const operaciones = require("./operaciones");
//si solo quiero usar una funcion
const { mult } = require("./operaciones");
const Persona = require("./persona");

const suma = operaciones.suma(2, 4);
console.log(suma);

const multi = mult(2, 4);
console.log(multi);

const p = new Persona("Sofia", "Ting", 23);
console.log(p.mostrar());
