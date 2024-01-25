const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("resupera todos los users");
});

router.get("/edit", (req, res) => {
  console.log("current date", req.currentDate);
  res.send("edit users");
});

router.post("/update", (req, res) => {
  res.send("update user .......");
});

module.exports = router;
