const express = require("express");
const router = express.Router();

//trabaja junto con index.pug -> es muy estricto con la estructura
//comentario HTML
//- Comentario PUG
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express",
    available: false,
    herramientas: ["React", "NodeJs", "ExpressJs", "MongoDB"],
  });
});

module.exports = router;
