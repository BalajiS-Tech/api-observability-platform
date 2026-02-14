const axios = require("axios");
const PerformanceLog = require("../models/PerformanceLog");
const ErrorLog = require("../models/ErrorLog");

const monitorAPI = async (api) => {
  const startTime = Date.now();

  try {
    const response = await axios({
      method: api.method,
      url: api.url,
      timeout: 5000
    });

    const responseTime = Date.now() - startTime;

    await PerformanceLog.create({
      apiId: api._id,
      statusCode: response.status,
      responseTime,
      isSuccess: response.status === api.expectedStatus
    });

    return { success: true };

  } catch (error) {
    const responseTime = Date.now() - startTime;

    await ErrorLog.create({
      apiId: api._id,
      errorType: error.code || "REQUEST_FAILED",
      message: error.message,
      statusCode: error.response?.status || 500
    });

    await PerformanceLog.create({
      apiId: api._id,
      statusCode: error.response?.status || 500,
      responseTime,
      isSuccess: false
    });

    return { success: false };
  }
};

module.exports = monitorAPI;
