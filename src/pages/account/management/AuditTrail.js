import React, { useState } from 'react';

const AuditTrail = () => {
  const [activities] = useState([
    {
      id: 'ACT-001',
      action: 'Payment Approved',
      user: 'John Doe',
      timestamp: '2025-05-15 14:30:00',
      details: 'Approved payment of ₦250,000.00 to Jane Smith',
      type: 'approval'
    },
    {
      id: 'ACT-002',
      action: 'Schedule Modified',
      user: 'Admin User',
      timestamp: '2025-05-15 13:45:00',
      details: 'Modified payment schedule SCH-001',
      type: 'modification'
    }
  ]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-xl font-semibold text-gray-900">Audit Trail</h2>
            <p className="mt-1 text-sm text-gray-500">
              Track all system activities and changes
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <i className="fas fa-filter mr-2"></i>
              Filter
            </button>
            <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              <i className="fas fa-download mr-2"></i>
              Export Log
            </button>
          </div>
        </div>
      </div>

      {/* Activity Log */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Activity ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timestamp
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {activities.map((activity) => (
                <tr key={activity.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                    {activity.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      activity.type === 'approval' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {activity.action}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {activity.user}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {activity.timestamp}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {activity.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-sm text-gray-500 mb-4 sm:mb-0">
              Showing {activities.length} activities
            </div>
            <div className="flex justify-center space-x-2">
              <button className="px-3 py-1 border rounded text-sm">Previous</button>
              <button className="px-3 py-1 border rounded text-sm bg-blue-600 text-white">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditTrail;