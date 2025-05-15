import React, { useState } from 'react';

const AuditHODCompletedReviews = () => {
  const [dateRange, setDateRange] = useState('month');
  const [sortBy, setSortBy] = useState('recent');
  const [searchTerm, setSearchTerm] = useState('');

  const [completedReviews] = useState([
    {
      id: 'REV003',
      requestId: 'AUD158',
      type: 'Compliance Audit',
      completionDate: '2025-05-12',
      duration: '5 days',
      auditor: 'Sarah Wilson',
      department: 'Compliance',
      findings: 'No major issues',
      rating: 95,
      status: 'Approved',
      reviewedBy: 'John Smith'
    },
    {
      id: 'REV004',
      requestId: 'AUD159',
      type: 'Process Audit',
      completionDate: '2025-05-11',
      duration: '3 days',
      auditor: 'Mike Johnson',
      department: 'Process',
      findings: 'Minor improvements needed',
      rating: 88,
      status: 'Approved',
      reviewedBy: 'Jane Doe'
    }
  ]);

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Completed Reviews</h1>
          <p className="mt-1 text-sm text-gray-500">View and analyze completed audit reviews</p>
        </div>

        <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row gap-2">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
          </select>

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
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Completed</p>
              <p className="text-2xl font-bold">{completedReviews.length}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <i className="fas fa-check-circle text-green-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Average Rating</p>
              <p className="text-2xl font-bold">
                {Math.round(
                  completedReviews.reduce((acc, rev) => acc + rev.rating, 0) / 
                  completedReviews.length
                )}%
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <i className="fas fa-star text-blue-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Avg. Duration</p>
              <p className="text-2xl font-bold">4 days</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <i className="fas fa-clock text-purple-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Success Rate</p>
              <p className="text-2xl font-bold">96%</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <i className="fas fa-chart-line text-yellow-600"></i>
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
                  Performance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Auditor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Completion
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {completedReviews.map((review) => (
                <tr key={review.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-blue-600">{review.id}</div>
                    <div className="text-sm text-gray-500">{review.type}</div>
                    <div className="text-xs text-gray-400">{review.department}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className={`h-2.5 w-2.5 rounded-full mr-2 ${
                        review.rating >= 90 ? 'bg-green-500' :
                        review.rating >= 80 ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}></div>
                      <span className="text-sm font-medium text-gray-900">
                        {review.rating}%
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{review.findings}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{review.auditor}</div>
                    <div className="text-xs text-gray-500">Reviewed by: {review.reviewedBy}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{review.completionDate}</div>
                    <div className="text-xs text-gray-500">Duration: {review.duration}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3" title="View Details">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="text-green-600 hover:text-green-900 mr-3" title="Download Report">
                      <i className="fas fa-download"></i>
                    </button>
                    <button className="text-gray-600 hover:text-gray-900" title="Archive">
                      <i className="fas fa-archive"></i>
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

export default AuditHODCompletedReviews;