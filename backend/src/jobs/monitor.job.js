const cron = require("node-cron");
const MonitoredAPI = require("../models/MonitoredAPI");
const monitorAPI = require("../services/monitor.service");

const startMonitoringJob = () => {
  // Runs every 5 minutes
  cron.schedule("*/5 * * * *", async () => {
    console.log("⏱ Running scheduled API monitoring job");

    const apis = await MonitoredAPI.find({ isActive: true });

    for (const api of apis) {
      await monitorAPI(api);
    }
  });
};

module.exports = startMonitoringJob;
