const mongoose = require("mongoose");

const performanceLogSchema = new mongoose.Schema(
  {
    apiId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MonitoredAPI",
      required: true
    },
    statusCode: {
      type: Number
    },
    responseTime: {
      type: Number // milliseconds
    },
    isSuccess: {
      type: Boolean
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("PerformanceLog", performanceLogSchema);
