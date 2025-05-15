import React from 'react';

const Analytics = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl font-bold mb-6">Performance Analytics</h1>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Total Audits</h3>
          <p className="text-2xl font-bold">245</p>
          <span className="text-green-500 text-sm">+12% from last month</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Completion Rate</h3>
          <p className="text-2xl font-bold">87%</p>
          <span className="text-green-500 text-sm">+5% from last month</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Average Time</h3>
          <p className="text-2xl font-bold">3.2 days</p>
          <span className="text-red-500 text-sm">+0.5 days from last month</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Compliance Score</h3>
          <p className="text-2xl font-bold">92%</p>
          <span className="text-green-500 text-sm">+2% from last month</span>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Audit Timeline</h3>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            {/* Add Chart Component Here */}
            <p className="text-gray-500">Timeline Chart</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Issue Distribution</h3>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            {/* Add Chart Component Here */}
            <p className="text-gray-500">Distribution Chart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
