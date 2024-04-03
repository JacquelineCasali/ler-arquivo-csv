const express = require("express");
const router = express.Router();
const csvController = require("../controllers/csvController");
// pets

router.get("/", csvController.lista);

module.exports = router;
