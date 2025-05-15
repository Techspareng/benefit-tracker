import React, { useState } from 'react';

const ProcessCompletedReviews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState({
    start: '',
    end: ''
  });

  return (
    <div className="p-4 sm:p-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Completed Reviews</h1>
          <p className="text-sm text-gray-500 mt-1">Review completion history</p>
        </div>
        <div className="w-full sm:w-auto mt-4 sm:mt-0 flex flex-col sm:flex-row gap-2">
          <input
            type="search"
            placeholder="Search reviews..."
            className="w-full sm:w-64 px-3 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="date"
            className="w-full sm:w-auto px-3 py-2 border rounded-lg"
            value={dateRange.start}
            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
          />
          <input
            type="date"
            className="w-full sm:w-auto px-3 py-2 border rounded-lg"
            value={dateRange.end}
            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
          />
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Total Completed</h3>
            <i className="fas fa-check-circle text-green-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">156</p>
          <p className="text-xs text-green-500 mt-1">This month</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Avg Completion Time</h3>
            <i className="fas fa-clock text-blue-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">2.1 days</p>
          <p className="text-xs text-green-500 mt-1">-0.2 days from last month</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Approval Rate</h3>
            <i className="fas fa-percentage text-purple-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">92%</p>
          <p className="text-xs text-green-500 mt-1">+2% from target</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Quality Score</h3>
            <i className="fas fa-star text-yellow-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">4.8/5</p>
          <p className="text-xs text-green-500 mt-1">Above target</p>
        </div>
      </div>

      {/* Reviews Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Review ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Reviewer
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">
                  Completion Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden md:table-cell">
                  Processing Time
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Decision
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Example row - Replace with actual data mapping */}
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-4 whitespace-nowrap text-sm">REV-2023-001</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm">Jane Smith</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm hidden sm:table-cell">2023-05-14</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm hidden md:table-cell">1.8 days</td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                    Approved
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm">
                  <button className="text-blue-600 hover:text-blue-800">
                    View Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProcessCompletedReviews;