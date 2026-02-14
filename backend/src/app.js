const express = require("express");
const cors = require("cors");

const monitorRoute = require("./routes/monitor.route");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    message: "API Observability Platform is running"
  });
});

// Monitoring routes
app.use("/monitor", monitorRoute);

module.exports = app;
