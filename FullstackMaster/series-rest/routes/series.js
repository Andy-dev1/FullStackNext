const express = require("express");
const router = express.Router();
const Serie = require("../models/serie");

router.get("/", async (req, res) => {
  const series = await Serie.find({});
  res.send(series);
});
router.post("/", async (req, res) => {
  const serie = new Serie(req.body);
  try {
    await serie.save();
    res.send(serie);
  } catch (e) {
    res.send({
      success: false,
      errors: e,
    });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const result = await Serie.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 1) {
      res.send({ success: true });
    } else {
      res.status(404).send({ success: false, message: "Document not found" });
    }
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
});
router.get("/:id", async (req, res) => {
  const serie = await Serie.findOne({ _id: req.params.id });
  res.send(serie);
});
router.put("/:id", async (req, res) => {
  const serie = await Serie.findOne({ _id: req.params.id });
  serie.name = req.body.name;
  serie.status = req.body.status;
  try {
    await serie.save();
    res.send(serie);
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
});
module.exports = router;
