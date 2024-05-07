const express = require("express");
const pessoasController = require("../controllers/pessoas");
const router = express.Router();
const model = require("../models/index")

router.get("/", pessoasController.index.bind(null,model.models));

module.exports = router;
