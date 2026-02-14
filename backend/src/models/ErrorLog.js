const mongoose = require("mongoose");

const errorLogSchema = new mongoose.Schema(
  {
    apiId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MonitoredAPI",
      required: true
    },
    errorType: {
      type: String // timeout, 4xx, 5xx
    },
    message: {
      type: String
    },
    statusCode: {
      type: Number
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("ErrorLog", errorLogSchema);
