//objeto global
//ruta completa hasta l acarpeta donde trabajamos
console.log(__dirname);
//ruta completa hasta el fichero que trabajamos
console.log(__filename);

//control proceso de una app
console.log(process.argv);

function getParam(param) {
  const index = process.argv.indexOf(param);
  return index === -1 ? null : process.argv[index + 1];
}

// introdece --nombre sofia --edad 23
const nombre = getParam("--nombre");

const edad = getParam("--edad");

if (nombre && edad) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
} else {
  //cuando en terminal, ej: introduce --nombre sofia
  console.log("Algun valor es nulo");
}
