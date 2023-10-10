const router = require("express").Router();
const {
  getAllCards,
  getCard,
  createCard,
  updateCard,
  deleteCard,
} = require("../controllers/cards");

//Route definitions
router.get("/", getAllCards);
//router.get("/:id", getCard);
router.post("/", createCard);
// router.patch("/:id", updateCard);
// router.delete("/:id", deleteCard);

module.exports = router;

// const router = require("express").Router();
// const path = require("path");
// const fsPromises = require("fs").promises;

// const cardRoute = path.join(__dirname, "../data/cards.json");

// router.get("/", (req, res) => {
//   fsPromises
//     .readFile(cardRoute, "utf8")
//     .then((cards) => res.send(JSON.parse(cards)))
//     .catch((err) => {
//       console.error(err);
//       res.status(500).send("Error reading the file");
//     });
// });

// router.get("/:id", (req, res) => {
//   fsPromises
//     .readFile(cardRoute, "utf8")
//     .then((cards) => {
//       const parsedCards = JSON.parse(cards);
//       const card = parsedCards.find((card) => card._id === req.params.id);
//       if (!card) {
//         res.status(404).send({ message: "card not found" });
//       } else {
//         res.send(card);
//       }
//     })

//     .catch((err) => {
//       console.error(err);
//       res.status(500).send("Error reading the file");
//     });
// });

// module.exports = router;
