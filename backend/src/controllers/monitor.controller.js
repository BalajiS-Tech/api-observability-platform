const MonitoredAPI = require("../models/MonitoredAPI");
const monitorAPI = require("../services/monitor.service");

const runMonitoring = async (req, res) => {
  const apis = await MonitoredAPI.find({ isActive: true });

  for (const api of apis) {
    await monitorAPI(api);
  }

  res.json({ message: "Monitoring completed" });
};

module.exports = { runMonitoring };
