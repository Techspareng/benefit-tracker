import React, { useState } from 'react';

const StaffOverview = () => {
  const [staff] = useState([
    // Add mock staff data
  ]);

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Staff Overview</h1>
          <p className="text-sm text-gray-500 mt-1">Process Department Staff Management</p>
        </div>
        <button className="mt-2 sm:mt-0 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add Staff Member
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Total Staff</h3>
            <i className="fas fa-users text-blue-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">12</p>
          <p className="text-xs text-green-500 mt-1">Full capacity</p>
        </div>
        
        {/* Add more metric cards */}
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">Current Load</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">Performance</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {/* Add staff table rows */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StaffOverview;