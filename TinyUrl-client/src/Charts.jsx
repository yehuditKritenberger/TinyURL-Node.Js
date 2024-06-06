import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const Charts = ({ data }) => {
  const createChartConfig = (labels, label, dataset, backgroundColor, borderColor) => ({
    labels,
    datasets: [{
      label,
      data: dataset,
      backgroundColor,
      borderColor,
      borderWidth: 1,
    }],
  });

  const clicksPerSource = createChartConfig(
    Object.keys(data),
    'Clicks by Source',
    Object.values(data),
    'rgba(128, 128, 128, 0.2)',
    'rgba(128, 128, 128, 1)'
  );

  const totalClicksData = createChartConfig(
    Object.keys(data),
    "Total Clicks per URL",
    Object.values(data),
    [
      'rgba(54, 162, 235, 0.2)',
      'rgba(0, 128, 128, 0.2)',
      'rgba(255, 99, 132, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(128, 128, 128, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 192, 203, 0.2)',
      'rgba(165, 42, 42, 0.2)',
    ],
    [
      'rgba(54, 162, 235, 1)',
      'rgba(0, 128, 128, 1)',
      'rgba(255, 99, 132, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(128, 128, 128, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(255, 192, 203, 1)',
      'rgba(165, 42, 42, 1)',
    ]
  );

  const clicksPerDayData = createChartConfig(
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    'Clicks per Day of the Week',
    Object.values(data),
    'rgba(54, 162, 235, 0.2)',
    'rgba(54, 162, 235, 1)'
  );

  return (
    <section id="chartsSection">
      <div id="bar">
        <h2>Clicks by Source</h2>
        <Bar data={clicksPerSource} options={{ scales: { y: { beginAtZero: true } } }} />
      </div>
      <div id="pie">
        <h2>Total Clicks per URL</h2>
        <Pie data={totalClicksData} />
      </div>
      <div id="line">
        <h2>Clicks by Day of the Week</h2>
        <Line data={clicksPerDayData} options={{ scales: { y: { beginAtZero: true } } }} />
      </div>
    </section>
  );
};

export default Charts;
