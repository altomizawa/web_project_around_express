const express = require("express");

const { PORT = 3000 } = process.env;

const app = express();
const {users} = require('./users.js')

app.get('/', (req, res) =>{
  res.send('<h1>hello, World</h1>')
})

app.get('/users', (req, res) => {
  res.send('these are all the users,')
  
})

app.listen(PORT, () => {
  console.log("The app is listeening on PORT 300");
});
