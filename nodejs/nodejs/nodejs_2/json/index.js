const http = require("http");
const path = require("path");

const data = require(path.join(__dirname, "producto.json"));

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(data));
  })
  .listen(3000, () => {
    console.log("servidor escuchando el puerto 3000");
  });
