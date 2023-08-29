const express = require("express");

const { PORT = 3000, BASE_PATH } = process.env;

const app = express();

const userRouter = require("./routes/users");
const cardRouter = require("./routes/cards");

const users = require("./data/users");
const cards = require("./data/cards");

app.get("/", (req, res) => {
  res.send("<h1>Hello, World</h1>");
});

app.use("/users", userRouter);

app.use("/cards", cardRouter);

app.listen(PORT, () => {
  console.log(`The app is listening on PORT ${PORT}`);
});
