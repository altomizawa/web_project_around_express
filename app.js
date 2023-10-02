const express = require("express");

const { PORT = 3000, BASE_PATH } = process.env;

const app = express();

const userRouter = require("./routes/users");
const cardRouter = require("./routes/cards");

app.use("/users", userRouter);

app.use("/cards", cardRouter);

app.get("/", (req, res) => {
  res.send("<h1>Server listening on PORT 3000.</h1>");
});

// Middleware to handle invalid routes
app.use((req, res, next) => {
  res.status(404).send("Error: Page not found");
});

app.listen(PORT, () => {
  console.log(`The app is listening on PORT ${PORT}`);
});
