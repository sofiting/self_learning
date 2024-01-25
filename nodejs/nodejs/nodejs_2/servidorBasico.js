const http = require("http");

//esto es para crear un servidor y luego poner un funcion
//dentro , es para que cuando establezca el servidor
//ejecuta la funcion cuando recibe alguna peticion.

//funcion: 1 param:datos que me manda cliente ,
//2 param:objeto que gestiona la respuesta
const server = http.createServer((req, res) => {
  //console.log("Method", req.method);
  //console.log("Url", req.url);
  //console.log("Headers", req.headers);
  //console.log("Solicitud recibida");
  res.end("Hola server,sofia");
});

// **** navegador solo hacer peticion de GET ****
//en qué puerto escucha peticion -> este caso 3000
server.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});

//lanza GET http://localhost:3000
//or PUT http://localhost:3000/users/edit
