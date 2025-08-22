import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function StatsChart({ data }) {
  const chartData = {
    labels: data.map(item => item.movie),
    datasets: [
      {
        label: "Продажі квитків",
        data: data.map(item => item.sales),
        backgroundColor: "rgba(75, 192, 192, 0.6)"
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Статистика продажів квитків" }
    }
  };

  return <Bar data={chartData} options={options} />;
}