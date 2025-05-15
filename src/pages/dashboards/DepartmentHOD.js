import React, { useState } from 'react';
import { Chart } from 'react-chartjs-2';

const DepartmentHODDashboard = () => {
  const [departmentStats] = useState({
    totalStaff: 45,
    activeRequests: 8,
    completedRequests: 67,
    averageProcessingTime: "3.2 days"
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Department Dashboard</h1>
        <div className="flex space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            <i className="fas fa-download mr-2"></i>Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {/* Statistics Cards */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Total Staff</h3>
          <p className="text-2xl font-bold">{departmentStats.totalStaff}</p>
        </div>
        {/* Add more stat cards */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Request Status</h2>
          {/* Add pie chart */}
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Monthly Trends</h2>
          {/* Add line chart */}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Recent Department Requests</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Employee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Request Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Submitted
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Add table rows here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DepartmentHODDashboard;