import React, { useState } from 'react';

const AuditHODInProgressReviews = () => {
  const [reviews] = useState([
    {
      id: 'REV002',
      requestId: 'AUD157',
      type: 'Process Audit',
      startDate: '2025-05-10',
      progress: 75,
      assignedTo: 'Jane Smith',
      department: 'Process',
      status: 'In Progress',
      estimatedCompletion: '2025-05-18'
    },
    // Add more mock data as needed
  ]);

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">In Progress Reviews</h1>
          <p className="mt-1 text-sm text-gray-500">Track active audit reviews</p>
        </div>
      </div>

      {/* Progress Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Reviews</p>
              <p className="text-2xl font-bold">{reviews.length}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <i className="fas fa-spinner text-blue-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">On Track</p>
              <p className="text-2xl font-bold">
                {reviews.filter(r => r.progress >= 50).length}
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <i className="fas fa-check text-green-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Delayed</p>
              <p className="text-2xl font-bold">2</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <i className="fas fa-exclamation-triangle text-red-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Average Progress</p>
              <p className="text-2xl font-bold">68%</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <i className="fas fa-chart-line text-purple-600"></i>
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
                  Review Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Progress
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assigned To
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timeline
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reviews.map((review) => (
                <tr key={review.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-blue-600">{review.id}</div>
                    <div className="text-sm text-gray-500">{review.type}</div>
                    <div className="text-xs text-gray-400">{review.department}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full mr-2">
                        <div 
                          className="h-2 bg-blue-600 rounded-full" 
                          style={{ width: `${review.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {review.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{review.assignedTo}</div>
                    <div className="text-xs text-gray-500">Lead Auditor</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Started: {review.startDate}</div>
                    <div className="text-xs text-gray-500">Due: {review.estimatedCompletion}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="text-green-600 hover:text-green-900 mr-3">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <i className="fas fa-pause"></i>
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

export default AuditHODInProgressReviews;