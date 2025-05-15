import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const [metrics] = useState({
    totalRequests: 156,
    approvalRate: '85%',
    avgProcessingTime: '2.3 days',
    staffPerformance: '92%'
  });

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Request Volume',
      data: [65, 59, 80, 81, 56, 55],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      fill: true
    }]
  };

  const barChartData = {
    labels: ['Retirement', 'Death', 'Disability', 'Withdrawal', 'Other'],
    datasets: [{
      label: 'Request Types',
      data: [30, 15, 20, 25, 10],
      backgroundColor: 'rgba(59, 130, 246, 0.8)'
    }]
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Department Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm mb-2">Total Requests</h3>
          <p className="text-2xl font-bold">{metrics.totalRequests}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm mb-2">Approval Rate</h3>
          <p className="text-2xl font-bold text-green-600">{metrics.approvalRate}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm mb-2">Avg Processing Time</h3>
          <p className="text-2xl font-bold">{metrics.avgProcessingTime}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm mb-2">Staff Performance</h3>
          <p className="text-2xl font-bold text-blue-600">{metrics.staffPerformance}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Request Trends</h2>
          <div className="h-[300px]">
            <Line data={lineChartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Request Distribution</h2>
          <div className="h-[300px]">
            <Bar data={barChartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;