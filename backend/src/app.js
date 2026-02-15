const express = require("express");
const cors = require("cors");

const monitorRoute = require("./routes/monitor.route");
const analyticsRoute = require("./routes/analytics.route");

const app = express();

// ======================
// Middleware
// ======================
app.use(cors());
app.use(express.json());

// ======================
// Health Check Route
// ======================
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    message: "API Observability Platform is running"
  });
});

// ======================
// Monitoring Routes
// ======================
app.use("/monitor", monitorRoute);

// ======================
// Analytics Routes (For Dashboard)
// ======================
app.use("/api", analyticsRoute);

module.exports = app;
