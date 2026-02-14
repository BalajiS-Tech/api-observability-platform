const mongoose = require("mongoose");

const monitoredAPISchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    method: {
      type: String,
      default: "GET"
    },
    expectedStatus: {
      type: Number,
      default: 200
    },
    interval: {
      type: Number, // in minutes
      default: 5
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("MonitoredAPI", monitoredAPISchema);
