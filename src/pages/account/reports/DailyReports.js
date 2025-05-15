import React, { useState } from 'react';

const DailyReports = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [summaryData] = useState({
    totalTransactions: 45,
    totalAmount: '₦2,850,000.00',
    successRate: '95%',
    averageAmount: '₦63,333.33'
  });

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-xl font-semibold text-gray-900">Daily Transaction Report</h2>
            <p className="mt-1 text-sm text-gray-500">
              Detailed overview of daily financial activities
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              <i className="fas fa-download mr-2"></i>
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Transactions</p>
              <p className="text-2xl font-bold text-gray-900">{summaryData.totalTransactions}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <i className="fas fa-exchange-alt text-blue-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Amount</p>
              <p className="text-2xl font-bold text-gray-900">{summaryData.totalAmount}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <i className="fas fa-money-bill-wave text-green-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Success Rate</p>
              <p className="text-2xl font-bold text-gray-900">{summaryData.successRate}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <i className="fas fa-chart-line text-purple-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Amount</p>
              <p className="text-2xl font-bold text-gray-900">{summaryData.averageAmount}</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <i className="fas fa-calculator text-yellow-600"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Charts would go here - You might want to add a charting library like Chart.js */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Transaction Volume by Hour</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
            <p className="text-gray-500">Chart placeholder</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Transaction Categories</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
            <p className="text-gray-500">Chart placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyReports;