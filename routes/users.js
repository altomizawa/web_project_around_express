const router = require("express").Router();
const path = require('path');
const fsPromises = require('fs').promises

const userRoute = path.join(__dirname, '../data/users.json')

router.get("/", (req, res) => {
  fsPromises.readFile(userRoute, 'utf8')
  .then(users => res.send(users))
  .catch((err)=>{
    console.error(err);
    res.status(500).send('Error reading the file')
  })
});

module.exports = router;