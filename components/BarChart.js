import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = () => {
//   const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
//   const studyData = [60, 25, 65, 45, 20];

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: 'Study',
//         data: studyData,
//         backgroundColor: '#6C1D5F',
//         borderRadius: 10,
//         barThickness: 20,
//         stack: 'Stack 0',
//       },
//       {
//         label: 'Remaining',
//         data: studyData.map(val => 100 - val),
//         backgroundColor: '#E6E6E6',
//         borderRadius: 10,
//         barThickness: 20,
//         stack: 'Stack 0',
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: 'top',
//         labels: {
//           boxWidth: 12,
//           boxHeight: 12,
//           padding: 20,
//         },
//       },
//     },
//     scales: {
//       x: {
//         stacked: true,
//         grid: {
//           display: false,
//         },
//       },
//       y: {
//         stacked: true,
//         beginAtZero: true,
//         max: 100,
//         ticks: {
//           callback: value => `${value} Hr`,
//         },
//         grid: {
//           color: '#e0e0e0',
//           borderDash: [5, 5],
//         },
//       },
//     },
//   };

//   return (
//     <div style={{ height: '300px', width: '100%' }}>
//       <Bar data={data} options={options} />
//     </div>
//   );
};

export default BarChart;
