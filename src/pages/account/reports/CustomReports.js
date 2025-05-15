import React, { useState } from 'react';

const CustomReports = () => {
  const [dateRange, setDateRange] = useState({
    startDate: '',
    endDate: ''
  });
  
  const [filters, setFilters] = useState({
    transactionType: 'all',
    category: 'all',
    status: 'all'
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-xl font-semibold text-gray-900">Custom Reports</h2>
            <p className="mt-1 text-sm text-gray-500">
              Generate customized financial reports
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Report Parameters</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              type="date"
              value={dateRange.startDate}
              onChange={(e) => setDateRange({...dateRange, startDate: e.target.value})}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <input
              type="date"
              value={dateRange.endDate}
              onChange={(e) => setDateRange({...dateRange, endDate: e.target.value})}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Transaction Type
            </label>
            <select
              value={filters.transactionType}
              onChange={(e) => setFilters({...filters, transactionType: e.target.value})}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Types</option>
              <option value="payment">Payments</option>
              <option value="transfer">Transfers</option>
              <option value="withdrawal">Withdrawals</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              value={filters.status}
              onChange={(e) => setFilters({...filters, status: e.target.value})}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex justify-end space-x-3">
          <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            Reset Filters
          </button>
          <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            Generate Report
          </button>
        </div>
      </div>

      {/* Report Preview */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-medium text-gray-900">Report Preview</h3>
            <div className="mt-3 sm:mt-0">
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
                <i className="fas fa-download mr-2"></i>
                Export Report
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2025-05-15</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">TRX-001</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Payment</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₦150,000.00</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    Completed
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500">
            <div>Showing 1 to 10 of 50 results</div>
            <div className="mt-2 sm:mt-0 flex justify-center space-x-2">
              <button className="px-3 py-1 border rounded hover:bg-gray-50">Previous</button>
              <button className="px-3 py-1 border rounded bg-blue-600 text-white">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomReports;