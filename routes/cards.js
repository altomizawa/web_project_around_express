const router = require("express").Router();
const path = require("path");
const fsPromises = require("fs").promises;

const cardRoute = path.join(__dirname, "data/cards.json");
console.log(cardRoute);

router.get("/", (req, res) => {
  fsPromises.readFile(cardRoute).then((data) => {
    res.send(data);
  });
});

router.get("/:");
module.exports = router;
