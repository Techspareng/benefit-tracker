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

const ProcessStaffPerformance = () => {
  const [timeFrame, setTimeFrame] = useState('weekly');
  const [selectedStaff, setSelectedStaff] = useState('all');

  const performanceData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      label: 'Reviews Completed',
      data: [12, 15, 18, 14, 16],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
    }]
  };

  return (
    <div className="p-4 sm:p-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Staff Performance</h1>
          <p className="text-sm text-gray-500 mt-1">Process Department Staff Metrics</p>
        </div>
        <div className="w-full sm:w-auto mt-4 sm:mt-0 flex flex-col sm:flex-row gap-2">
          <select
            value={selectedStaff}
            onChange={(e) => setSelectedStaff(e.target.value)}
            className="w-full sm:w-auto px-3 py-2 border rounded-lg"
          >
            <option value="all">All Staff</option>
            <option value="john">John Doe</option>
            <option value="jane">Jane Smith</option>
          </select>
          <select
            value={timeFrame}
            onChange={(e) => setTimeFrame(e.target.value)}
            className="w-full sm:w-auto px-3 py-2 border rounded-lg"
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
          </select>
        </div>
      </div>

      {/* Performance Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Reviews Completed</h3>
            <i className="fas fa-check-circle text-green-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">75</p>
          <p className="text-xs text-green-500 mt-1">+12% from last period</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Avg Processing Time</h3>
            <i className="fas fa-clock text-blue-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">1.8 days</p>
          <p className="text-xs text-green-500 mt-1">-0.3 days from average</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Quality Score</h3>
            <i className="fas fa-star text-yellow-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">4.8/5</p>
          <p className="text-xs text-green-500 mt-1">Top performer</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Current Load</h3>
            <i className="fas fa-tasks text-purple-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">85%</p>
          <p className="text-xs text-yellow-500 mt-1">Near capacity</p>
        </div>
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Reviews Completed Trend</h2>
          <div className="h-[300px]">
            <Line 
              data={performanceData}
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
          <h2 className="text-lg font-semibold mb-4">Processing Time Analysis</h2>
          <div className="h-[300px]">
            <Bar 
              data={performanceData}
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

export default ProcessStaffPerformance;