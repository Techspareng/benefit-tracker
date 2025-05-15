import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RequestOverview = () => {
  const requestData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Total Requests',
        data: [65, 59, 80, 81, 56],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
      {
        label: 'Approved Requests',
        data: [45, 49, 60, 71, 46],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
      }
    ]
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Request Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Total Requests</h3>
          <p className="text-2xl font-bold">341</p>
          <p className="text-xs text-green-500">+12% from last month</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Pending Requests</h3>
          <p className="text-2xl font-bold">45</p>
          <p className="text-xs text-yellow-500">5 high priority</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Approval Rate</h3>
          <p className="text-2xl font-bold">85%</p>
          <p className="text-xs text-green-500">+5% from last month</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Average Processing Time</h3>
          <p className="text-2xl font-bold">2.1 days</p>
          <p className="text-xs text-green-500">-0.3 days from average</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Request Trends</h2>
          <div className="h-[300px]">
            <Line data={requestData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Request Distribution</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Retirement Benefits</span>
                <span className="text-sm font-medium text-gray-700">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Death Benefits</span>
                <span className="text-sm font-medium text-gray-700">30%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Disability Benefits</span>
                <span className="text-sm font-medium text-gray-700">25%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestOverview;