var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const fs = require("fs").promises;

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
//añade aparte
const productRouter = require("./routes/products");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//uso de middleware
app.use((req, res, next) => {
  //esta aparece al principio de todos los query
  console.log(new Date());
  //de esta manera , en todos puntos del proyecto puede acceder
  req.currentDate = new Date();
  //importante esta linea para poder ejecutar siguiente instruccion
  next();
});

app.use((req, res, next) => {
  const random = Math.random();
  if (random > 0.5) {
    res.send("cannot access");
  } else {
    console.log("access");
    next();
  }
});

//middleware para operacion con fichero
const logFilePath = path.join(__dirname, "main.log");
app.use(async (req, res, next) => {
  try {
    await fs.appendFile(
      logFilePath,
      `Método: ${req.method}. Url:${req.url} \n`
    );
    next();
  } catch (error) {
    console.error("Error writing to log file:", error);
    next(error); // Pass the error to Express to handle it
  }
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
//añade aparte
app.use("/products", productRouter);

module.exports = app;
