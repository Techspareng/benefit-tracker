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

const DepartmentAnalytics = () => {
  const [timeFrame, setTimeFrame] = useState('weekly');
  const [departmentMetrics] = useState({
    totalProcessed: 234,
    avgProcessingTime: '2.3 days',
    efficiency: '89%',
    staffUtilization: '78%'
  });

  const processingTrendData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Processing Time (days)',
      data: [2.5, 2.3, 2.1, 2.3],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
    }]
  };

  const requestVolumeData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Requests Processed',
      data: [45, 52, 68, 59],
      backgroundColor: 'rgba(34, 197, 94, 0.5)',
    }]
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Department Analytics</h1>
          <p className="text-sm text-gray-500 mt-1">Process Department Performance Overview</p>
        </div>
        <select
          value={timeFrame}
          onChange={(e) => setTimeFrame(e.target.value)}
          className="mt-2 sm:mt-0 px-3 py-2 border rounded-lg text-sm"
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
        </select>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Total Processed</h3>
            <i className="fas fa-tasks text-blue-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">{departmentMetrics.totalProcessed}</p>
          <p className="text-xs text-green-500 mt-1">+12% from last period</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Avg Processing Time</h3>
            <i className="fas fa-clock text-yellow-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">{departmentMetrics.avgProcessingTime}</p>
          <p className="text-xs text-green-500 mt-1">-0.2 days from target</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Efficiency Rate</h3>
            <i className="fas fa-chart-line text-green-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">{departmentMetrics.efficiency}</p>
          <p className="text-xs text-green-500 mt-1">+3% this period</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Staff Utilization</h3>
            <i className="fas fa-users text-purple-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">{departmentMetrics.staffUtilization}</p>
          <p className="text-xs text-yellow-500 mt-1">Near capacity</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Processing Time Trend</h2>
          <div className="h-[300px]">
            <Line 
              data={processingTrendData}
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
          <h2 className="text-lg font-semibold mb-4">Request Volume</h2>
          <div className="h-[300px]">
            <Bar 
              data={requestVolumeData}
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

export default DepartmentAnalytics;