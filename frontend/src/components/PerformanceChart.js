import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const PerformanceChart = ({ logs }) => {
  const data = {
    labels: logs.map((log) =>
      new Date(log.createdAt).toLocaleTimeString()
    ),
    datasets: [
      {
        label: "Response Time (ms)",
        data: logs.map((log) => log.responseTime),
      },
    ],
  };

  return <Line data={data} />;
};

export default PerformanceChart;
