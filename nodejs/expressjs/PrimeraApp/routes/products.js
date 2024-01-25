const router = require("express").Router();
const path = require("path");

//cada handler solo puede tener una respuesta -> res !!!!
//hay que ver con ruta.md y añadir algo en app.js
//orden es importante
router.get("/", (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  console.log(page, limit);
  res.send("resupera todos los productos");
});

router.get("/new", (req, res) => {
  //devolver un json
  //res.json({ uno: "uno", dos: "dos" });

  //forzar descarga de fichero, si ejecuta en web(licalhost:3000)
  const filePath = path.join(__dirname, "path-to-your-file", "example.txt");
  // The second argument to res.download is the suggested filename for the client
  res.download(filePath, "downloaded-file.txt", (err) => {
    if (err) {
      // Handle error, such as file not found
      console.error("Error downloading file:", err);
      res.status(404).send("File not found");
    }
  });
});

//busca un dterminado producto con id
router.get("/:productId", (req, res) => {
  //req.params -> traer valor de parametro
  const { productId } = req.params;
  res.send(`recupera producto con ID: ${productId}`);
});

//usa junto recuperandi json
router.post("/create", (req, res) => {
  //saca todos los datos de json
  console.log(req.body);
  //sacar algunos
  const { nombre, precio } = req.body;
  console.log(nombre, precio);

  res.send("gestiona los datos de formulario");
});

module.exports = router;
