const express = require("express");
const router = express.Router();
const { runMonitoring } = require("../controllers/monitor.controller");

router.get("/run", runMonitoring);

module.exports = router;
