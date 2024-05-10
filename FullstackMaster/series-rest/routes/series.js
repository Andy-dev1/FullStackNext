const express = require("express");
const router = express.Router();
const Serie = require("../models/serie");
const jwt = require("jsonwebtoken");
const jwtSecret = "abc123abc123abc123";
router.use(async (req, res, next) => {
  const token =
    req.headers["x-access-token"] || req.body.token || req.query.token;

  if (token) {
    try {
      const payload = jwt.verify(token, jwtSecret);
      console.log(payload);
      if(payload.roles.indexOf("restrito")>=0){
        next();
      }else{
        res.send({ success: false });
      }
      
    } catch (error) {
      res.send({ success: false });
    }
  } else {
    res.send({ success: false, message: "Failed to auth" });
  }
  
});

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
