import React from 'react';

const AuditTrends = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl font-bold mb-6">Audit Trends</h1>

      {/* Trend Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm mb-2">Issue Resolution Time</h3>
          <div className="flex items-end space-x-2">
            <p className="text-2xl font-bold">-15%</p>
            <span className="text-green-500 text-sm">Improved</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm mb-2">Critical Findings</h3>
          <div className="flex items-end space-x-2">
            <p className="text-2xl font-bold">+8%</p>
            <span className="text-red-500 text-sm">Increased</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm mb-2">Compliance Rate</h3>
          <div className="flex items-end space-x-2">
            <p className="text-2xl font-bold">94%</p>
            <span className="text-green-500 text-sm">Stable</span>
          </div>
        </div>
      </div>

      {/* Trend Charts */}
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Historical Trend Analysis</h3>
          <div className="h-80 bg-gray-100 rounded flex items-center justify-center">
            {/* Add Trend Chart Component Here */}
            <p className="text-gray-500">Trend Chart</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Issue Categories</h3>
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
              {/* Add Category Chart Component Here */}
              <p className="text-gray-500">Categories Chart</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Department Performance</h3>
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
              {/* Add Performance Chart Component Here */}
              <p className="text-gray-500">Performance Chart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditTrends;
