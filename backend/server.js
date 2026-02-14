require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");
const startMonitoringJob = require("./src/jobs/monitor.job");

const PORT = process.env.PORT || 5000;

// Connect database
connectDB();

// Start cron job
startMonitoringJob();

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
