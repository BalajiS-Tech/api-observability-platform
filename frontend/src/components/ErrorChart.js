import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const ErrorChart = ({ errors }) => {
  const errorCount = errors.length;

  const data = {
    labels: ["Errors"],
    datasets: [
      {
        label: "Total Errors",
        data: [errorCount],
      },
    ],
  };

  return <Bar data={data} />;
};

export default ErrorChart;
