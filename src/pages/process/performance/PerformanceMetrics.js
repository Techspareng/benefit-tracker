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
  Legend,
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

const PerformanceMetrics = () => {
  const [timeFrame, setTimeFrame] = useState('weekly');

  const metrics = {
    processingTime: '2.5 days',
    accuracy: '95%',
    completedRequests: '156',
    pendingRequests: '23'
  };

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Processing Time (hours)',
        data: [4, 3.5, 5, 2.5, 4.5, 3, 4],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      }
    ]
  };

  const completionData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Completed Requests',
        data: [25, 30, 22, 28, 35, 12, 4],
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
      }
    ]
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0">Performance Metrics</h1>
        <select
          value={timeFrame}
          onChange={(e) => setTimeFrame(e.target.value)}
          className="w-full sm:w-auto px-3 py-2 border rounded-lg text-sm"
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Avg. Processing Time</h3>
          <p className="text-2xl font-bold">{metrics.processingTime}</p>
          <p className="text-xs text-green-500">-0.5 days from target</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Review Accuracy</h3>
          <p className="text-2xl font-bold">{metrics.accuracy}</p>
          <p className="text-xs text-green-500">+2% from last month</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Completed Reviews</h3>
          <p className="text-2xl font-bold">{metrics.completedRequests}</p>
          <p className="text-xs text-blue-500">This month</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Pending Reviews</h3>
          <p className="text-2xl font-bold">{metrics.pendingRequests}</p>
          <p className="text-xs text-yellow-500">Needs attention</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Processing Time Trend</h2>
          <div className="h-[300px]">
            <Line 
              data={chartData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top',
                  }
                }
              }}
            />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Completion Rate</h2>
          <div className="h-[300px]">
            <Bar 
              data={completionData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top',
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;