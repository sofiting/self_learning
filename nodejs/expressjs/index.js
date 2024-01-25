//para generar pakage.json -> npm init
//hay que poner algo en pakage.json ->script
//npm install express -> para poder usar expressjs
const express = require("express");
const app = express();

//Cofig.env -> reaer variables que esta en .env
require("dotenv").config();

// Ruta para la página de inicio
app.get("/", (req, res) => {
  res.send("Bienvenido a la página de inicio");
});

// Ruta para "/contactos"
app.get("/contactos", (req, res) => {
  res.send("Lista de contactos");
});

app.post("/usuarios/nuevo", (req, res) => {
  res.send("nuevo usuario");
});

const PORT = process.env.PORT || 3000; // || 3000 es valor por defecto

app.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto ", PORT);
});

//para ejecutar con servidor -> ejecuta script , lanza http , entra localhost
// usa extension thunderclient lanza get http://localhost:3000/contactos
//npm run dev

//libreria -> npm install dotenv -> leer ficheros uy colocar un variable para poder trabajar con ellos
