const express = require("express");
const router = express.Router();

const MonitoredAPI = require("../models/MonitoredAPI");
const PerformanceLog = require("../models/PerformanceLog");
const ErrorLog = require("../models/ErrorLog");

// Get all monitored APIs
router.get("/list", async (req, res) => {
  const apis = await MonitoredAPI.find();
  res.json(apis);
});

// Get performance logs by API ID
router.get("/performance/:apiId", async (req, res) => {
  const logs = await PerformanceLog.find({
    apiId: req.params.apiId,
  }).sort({ createdAt: -1 });

  res.json(logs);
});

// Get error logs by API ID
router.get("/errors/:apiId", async (req, res) => {
  const logs = await ErrorLog.find({
    apiId: req.params.apiId,
  }).sort({ createdAt: -1 });

  res.json(logs);
});

module.exports = router;
