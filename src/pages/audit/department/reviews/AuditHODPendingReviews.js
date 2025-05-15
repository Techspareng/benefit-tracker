import React, { useState, useEffect } from 'react';

const AuditHODPendingReviews = () => {
  const [pendingReviews, setPendingReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const [reviews] = useState([
    {
      id: 'REV001',
      requestId: 'AUD156',
      type: 'Benefit Review',
      submittedDate: '2025-05-14',
      priority: 'High',
      assignedTo: 'John Doe',
      department: 'Benefits',
      status: 'Pending',
      deadline: '2025-05-20'
    },
    // Add more mock data as needed
  ]);

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pending Reviews</h1>
          <p className="mt-1 text-sm text-gray-500">Manage and track pending audit reviews</p>
        </div>
        
        <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search reviews..."
              className="w-full sm:w-64 pl-10 pr-4 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
          </div>
          
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="all">All Priorities</option>
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Pending</p>
              <p className="text-2xl font-bold">{reviews.length}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <i className="fas fa-clock text-blue-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">High Priority</p>
              <p className="text-2xl font-bold">
                {reviews.filter(r => r.priority === 'High').length}
              </p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <i className="fas fa-exclamation text-red-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Due Today</p>
              <p className="text-2xl font-bold">5</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <i className="fas fa-calendar text-yellow-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Unassigned</p>
              <p className="text-2xl font-bold">3</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-full">
              <i className="fas fa-user-plus text-gray-600"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Review ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assigned To
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deadline
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reviews.map((review) => (
                <tr key={review.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-blue-600">{review.id}</div>
                    <div className="text-sm text-gray-500">{review.requestId}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{review.type}</div>
                    <div className="text-sm text-gray-500">{review.department}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      review.priority === 'High' 
                        ? 'bg-red-100 text-red-800'
                        : review.priority === 'Medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {review.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {review.assignedTo || 'Unassigned'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {review.deadline}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="text-green-600 hover:text-green-900 mr-3">
                      <i className="fas fa-user-plus"></i>
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <i className="fas fa-flag"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AuditHODPendingReviews;