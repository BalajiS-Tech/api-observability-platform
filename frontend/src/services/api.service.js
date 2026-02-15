import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const getAllApis = async () => {
  const res = await axios.get(`${BASE_URL}/api/list`);
  return res.data;
};

export const getPerformanceLogs = async (apiId) => {
  const res = await axios.get(`${BASE_URL}/api/performance/${apiId}`);
  return res.data;
};

export const getErrorLogs = async (apiId) => {
  const res = await axios.get(`${BASE_URL}/api/errors/${apiId}`);
  return res.data;
};
