import React, { useState } from 'react';

const ProcessInProgressReviews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [reviews, setReviews] = useState([]);
  const [sortBy, setSortBy] = useState('date');

  return (
    <div className="p-4 sm:p-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">In Progress Reviews</h1>
          <p className="text-sm text-gray-500 mt-1">Currently processing reviews</p>
        </div>
        <div className="w-full sm:w-auto mt-4 sm:mt-0 flex flex-col sm:flex-row gap-2">
          <input
            type="search"
            placeholder="Search reviews..."
            className="w-full sm:w-64 px-3 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full sm:w-auto px-3 py-2 border rounded-lg"
          >
            <option value="date">Sort by Date</option>
            <option value="priority">Sort by Priority</option>
            <option value="assignee">Sort by Assignee</option>
          </select>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Total In Progress</h3>
            <i className="fas fa-spinner text-blue-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">24</p>
          <p className="text-xs text-blue-500 mt-1">Active reviews</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Avg. Processing Time</h3>
            <i className="fas fa-clock text-yellow-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">2.3 days</p>
          <p className="text-xs text-green-500 mt-1">On target</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Need Attention</h3>
            <i className="fas fa-exclamation-triangle text-red-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">3</p>
          <p className="text-xs text-red-500 mt-1">Delayed reviews</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Near Completion</h3>
            <i className="fas fa-check text-green-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">8</p>
          <p className="text-xs text-green-500 mt-1">Ready for final review</p>
        </div>
      </div>

      {/* Reviews Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Review ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assignee
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                  Started Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                  Stage
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Example row - Replace with actual data mapping */}
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-4 whitespace-nowrap text-sm">REV-2023-001</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm">John Doe</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm hidden sm:table-cell">2023-05-15</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm hidden md:table-cell">Documentation Review</td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                    In Progress
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">
                    View
                  </button>
                  <button className="text-green-600 hover:text-green-800">
                    Update
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

export default ProcessInProgressReviews;