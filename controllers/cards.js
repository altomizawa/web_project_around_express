const router = require("express").Router();

const Card = require("../models/card");

//-----------GET ALL CARDS---------------
module.exports.getAllCards = (req, res) => {
  Card.find()
    .then((cards) => res.send({ data: cards }))
    .catch((err) => res.status(500).send({ message: "Error" }));
};

// //-----------GET CARD BY ID---------------
// module.exports.getcard = (req, res) => {
//   Card.findById(req.params.id)
//     .then((card) => res.send({ data: card }))
//     .catch((err) => res.status(500).send({ message: "Error" }));
// };

//------------CREATE CARD----------------
module.exports.createCard = (req, res) => {
  console.log(req.user._id);
  const { name, link, owner, likes, createdAt } = req.body;

  Card.create({ name, link, owner, likes, createdAt })
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(500).send({ message: "Error" }));
};

// //------------DELETE CARD----------------
// module.exports.deletecard = (req, res) => {
//   Card.findByIdAndRemove(req.params.id)
//     .then((card) => res.send({ data: card }))
//     .catch((err) => res.status(500).send({ message: "Error" }));
// };

// //-------------UPDATE CARD--------------
// module.exports.updatecard = (req, res) => {
//   const { name, about, avatar } = req.body;
//   Card.findByIdAndUpdate(req.params.id, { name, about, avatar })
//     .then((card) => res.send({ data: card }))
//     .catch((err) => res.status(500).send({ message: "Error" }));
// };

// module.exports = router;
