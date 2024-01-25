const http = require("http");
const fs = require("fs");
const path = require("path");

//req: Es el objeto de solicitud (request)
//res: Es el objeto de respuesta (response).

http
  .createServer((req, res) => {
    if (req.method === "GET") {
      //retornar formulario
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream(
        path.join(__dirname, "formulario.html"),
        "utf-8"
      ).pipe(res);
      //método pipe para enviar ese contenido como respuesta a una solicitud HTTP.
    } else if (req.method === "POST") {
      //gestiona el valor de formulario
      let body = "";
      //esta llamando un evento
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", () => {
        res.end(body);
      });
    }
  })
  .listen(3000, () => {
    console.log("servidor escuchando puerto 3000");
  });
