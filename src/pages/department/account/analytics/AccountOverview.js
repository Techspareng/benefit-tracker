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

const AccountOverview = () => {
  const [timeframe, setTimeframe] = useState('monthly');

  const transactionData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Transaction Volume',
        data: [65000, 59000, 80000, 81000, 56000, 75000],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      }
    ]
  };

  const performanceData = {
    labels: ['Completed', 'Pending', 'Processing'],
    datasets: [
      {
        data: [70, 20, 10],
        backgroundColor: [
          'rgba(34, 197, 94, 0.6)',
          'rgba(234, 179, 8, 0.6)',
          'rgba(59, 130, 246, 0.6)'
        ]
      }
    ]
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Account Department Overview</h1>
          <p className="mt-1 text-sm text-gray-500">Comprehensive view of department performance</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="block w-full sm:w-auto rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            <i className="fas fa-download mr-2"></i>
            Export
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Transactions</p>
              <p className="text-2xl font-bold text-gray-900">₦4.5M</p>
              <p className="text-xs text-green-600">+12.5% from last month</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <i className="fas fa-chart-line text-blue-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Processing Time</p>
              <p className="text-2xl font-bold text-gray-900">2.3 days</p>
              <p className="text-xs text-green-600">-0.5 days from average</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <i className="fas fa-clock text-green-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Success Rate</p>
              <p className="text-2xl font-bold text-gray-900">98.5%</p>
              <p className="text-xs text-green-600">+1.2% from target</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <i className="fas fa-check-circle text-purple-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Items</p>
              <p className="text-2xl font-bold text-gray-900">15</p>
              <p className="text-xs text-yellow-600">Action required</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <i className="fas fa-hourglass-half text-yellow-600"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Transaction Trends</h3>
          <div className="h-64 sm:h-80">
            <Line 
              data={transactionData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      callback: value => `₦${value/1000}k`
                    }
                  }
                }
              }}
            />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Performance Distribution</h3>
          <div className="h-64 sm:h-80">
            <Bar 
              data={performanceData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false
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

export default AccountOverview;