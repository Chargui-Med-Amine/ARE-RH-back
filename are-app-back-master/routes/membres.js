const express = require("express");
const md5 = require("md5");
const presence = require("../models/presence");

const router = express.Router();
const membres = require("../models/membres");
const reunion = require("../models/reunion");

router.get("/", (req, resp) => {
  membres
    .find()
    .then((data) => resp.json(data))
    .catch((e) => console.log(e));
});

router.post("/", (req, resp) => {
  const { name, groupe, photo, pole, id } = req.body;
  if (!name || !groupe || !photo || !pole || !id) {
    return resp.status(422).json({ error: "missing fields" });
  }

  const membres = new membres({
    name,
    groupe,
    photo,
    pole,
    id,
  });
  membres
    .save()
    .then((data) => resp.json(data))
    .catch((e) => console.log(e));
});

router.patch("/:id", (req, resp) => {
  const { name, groupe, photo, pole } = req.body;

  membres
    .updateOne(
      { _id: req.params.id },
      {
        $set: {
          name,
          groupe,
          photo,
          pole,
        },
      }
    )
    .then((data) => resp.json(data))
    .catch((e) => console.log(e));
});

router.delete("/:id", (req, resp) => {
  membres
    .remove({ _id: req.params.id })
    .then((data) => resp.json(data))
    .catch((e) => console.log(e));
});

router.get("/reunionList", (req, resp) => {
  const { membresId } = req.body;
  presence
    .find({ membres: membresId })
    .then((data) => resp.json(data))
    .catch((e) => console.log(e));
});

module.exports = router;
