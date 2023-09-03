const router = require("express").Router();
const path = require("path");
const fsPromises = require("fs").promises;

const userRoute = path.join(__dirname, "../data/users.json");

router.get("/", (req, res) => {
  fsPromises
    .readFile(userRoute, { encoding: "utf8" })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error reading the file");
    });
});

router.get("/:id", (req, res) => {
  fsPromises
    .readFile(userRoute, "utf8")
    .then((users) => {
      const parsedUsers = JSON.parse(users);
      const user = parsedUsers.find((user) => user._id === req.params.id);
      if (!user) {
        res.status(404).send({ message: "Usuário não encontrado" });
      } else {
        res.send({ data: user });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error reading the file");
    });
});

module.exports = router;
