import React, { useEffect, useState } from "react";
import APIList from "../components/APIList";
import PerformanceChart from "../components/PerformanceChart";
import ErrorChart from "../components/ErrorChart";
import SummaryCard from "../components/SummaryCard";
import {
  getAllApis,
  getPerformanceLogs,
  getErrorLogs,
} from "../services/api.service";

const Dashboard = () => {
  const [apis, setApis] = useState([]);
  const [selectedApi, setSelectedApi] = useState(null);
  const [performanceLogs, setPerformanceLogs] = useState([]);
  const [errorLogs, setErrorLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchApis = async () => {
      const data = await getAllApis();
      setApis(data);
    };
    fetchApis();
  }, []);

  const handleSelectApi = async (api) => {
    setLoading(true);
    setSelectedApi(api);

    const perf = await getPerformanceLogs(api._id);
    const errors = await getErrorLogs(api._id);

    setPerformanceLogs(perf);
    setErrorLogs(errors);
    setLoading(false);
  };

  const uptime =
    performanceLogs.length > 0
      ? (
          (performanceLogs.filter((log) => log.isSuccess).length /
            performanceLogs.length) *
          100
        ).toFixed(2)
      : 0;

  const status = uptime > 80 ? "UP" : "DOWN";

  return (
    <div className="dashboard-container">
      <h1>API Observability Dashboard</h1>

      <div className="api-list">
        <APIList apis={apis} onSelect={handleSelectApi} />
      </div>

      {loading && <p>Loading data...</p>}

      {selectedApi && !loading && (
        <>
          <div className="card-container">
            <SummaryCard title="Uptime %" value={`${uptime}%`} />
            <SummaryCard title="Total Requests" value={performanceLogs.length} />
            <SummaryCard title="Total Errors" value={errorLogs.length} />
            <SummaryCard title="Current Status" value={status} />
          </div>

          <div className="card">
            <h3>Response Time Trend</h3>
            <PerformanceChart logs={performanceLogs} />
          </div>

          <div className="card">
            <h3>Error Analytics</h3>
            <ErrorChart errors={errorLogs} />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
