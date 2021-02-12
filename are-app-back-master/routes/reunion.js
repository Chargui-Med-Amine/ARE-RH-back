const express = require("express");
const presence = require("../models/presence");
const router = express.Router();
const reunion = require("../models/reunion");
const membres = require("../models/membres");
router.get("/", (req, resp) => {
  reunion
    .find()
    .then((data) => resp.json(data))
    .catch((e) => console.log(e));
});

router.post("/", (req, resp) => {
  const { type, date } = req.body;
  if (!type || !date) return resp.status(422).json({ error: "missing fields" });
  const mat = new reunion({
    type,
    date,
  });
  mat
    .save()
    .then((data) => resp.json(data))
    .catch((e) => console.log(e));
});

router.post("/addMembreAg", (req, resp) => {
  const { Membres, reunion } = req.body;
  membres
    .updateOne({ _id: Membres }, { $inc: { pre_ag: 1 } })
    .exec()
    .then((data) => resp.json(data))
    .catch((e) => console.log(e));
  const Presence = new presence({ membres: Membres, reunion: reunion });
  Presence.save()
    .then((data) => resp.json(data))
    .catch((e) => console.log(e));
});
router.post("/addMembreP", (req, resp) => {
  const { Membres, reunion } = req.body;
  const Presence = new presence({ membres: Membres, reunion: reunion });
  Presence.save()
    .then((data) => resp.json(data))
    .catch((e) => console.log(e));
  membres
    .updateOne({ _id: Membres }, { $inc: { pre_p: 1 } })
    .exec()
    .then((data) => resp.json(data))
    .catch((e) => console.log(e));
});

router.delete("/delete/:id", (req, resp) => {
  reunion
    .findByIdAndDelete(req.params.id)
    .then((data) => resp.json(data))
    .catch((e) => console.log(e));
});

router.get("/memberList", (req, resp) => {
  const { reunionId } = req.body;
  presence
    .find({ reunion: reunionId })
    .then((data) => resp.json(data))
    .catch((e) => console.log(e));
});

module.exports = router;
