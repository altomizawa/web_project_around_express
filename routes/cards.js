const router = require("express").Router();
const path = require("path");
const fsPromises = require("fs").promises;

const cardRoute = path.join(__dirname, "../data/cards.json");

router.get("/", (req, res) => {
  fsPromises
    .readFile(cardRoute, "utf8")
    .then((cards) => res.send(JSON.parse(cards)))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error reading the file");
    });
});

module.exports = router;
