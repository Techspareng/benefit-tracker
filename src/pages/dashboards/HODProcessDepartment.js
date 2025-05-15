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

const HODProcessDepartment = () => {
  const [timeFrame, setTimeFrame] = useState('weekly');
  const [statistics] = useState({
    totalRequests: 98,
    pendingApproval: 5,
    avgProcessingTime: '1.8 days',
    monthlyRequests: 32,
    totalProcessed: 93,
    efficiency: '94%',
    staffAvailable: 8,
    criticalPending: 3
  });

  const [recentActivity] = useState([
    { id: 1, action: 'Request Approved', staff: 'John Doe', time: '2 hours ago', requestId: 'REQ-2023-001' },
    { id: 2, action: 'New Request Assigned', staff: 'Jane Smith', time: '3 hours ago', requestId: 'REQ-2023-002' },
    { id: 3, action: 'Review Completed', staff: 'Mike Johnson', time: '5 hours ago', requestId: 'REQ-2023-003' }
  ]);

  const processingTrendData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Processing Time (hours)',
      data: [4.2, 3.8, 4.5, 3.2, 3.9, 3.5, 4.1],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
    }]
  };

  const requestVolumeData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Requests Processed',
      data: [12, 15, 18, 14, 16, 8, 10],
      backgroundColor: 'rgba(34, 197, 94, 0.5)',
    }]
  };

  return (
    <div className="p-4 sm:p-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Process Department Overview</h1>
          <p className="text-sm text-gray-500 mt-1">Monitor department performance and request processing</p>
        </div>
        <select
          value={timeFrame}
          onChange={(e) => setTimeFrame(e.target.value)}
          className="mt-2 sm:mt-0 px-3 py-2 border rounded-lg text-sm"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Total Requests</h3>
            <i className="fas fa-file-alt text-blue-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">{statistics.totalRequests}</p>
          <p className="text-xs text-green-500 mt-1">+8% from last month</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Pending Review</h3>
            <i className="fas fa-clock text-yellow-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">{statistics.pendingApproval}</p>
          <p className="text-xs text-yellow-500 mt-1">{statistics.criticalPending} critical</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Avg Processing Time</h3>
            <i className="fas fa-stopwatch text-purple-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">{statistics.avgProcessingTime}</p>
          <p className="text-xs text-green-500 mt-1">-0.3 days from target</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Department Efficiency</h3>
            <i className="fas fa-chart-line text-green-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">{statistics.efficiency}</p>
          <p className="text-xs text-green-500 mt-1">+2% this week</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
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

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Staff</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Request ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentActivity.map((activity) => (
                <tr key={activity.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{activity.action}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{activity.staff}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{activity.requestId}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{activity.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HODProcessDepartment;