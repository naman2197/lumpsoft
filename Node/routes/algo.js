const express = require("express");
const router = express.Router();
const { algoController } = require("../controllers/algo");

router.get("/", algoController);

module.exports = router;
