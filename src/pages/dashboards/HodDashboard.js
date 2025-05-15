import React from 'react';

const HodDashboard = ({ department }) => {
  const stats = {
    benefit: {
      totalRequests: 142,
      pending: 8,
      avgProcessingTime: '2.3 days'
    },
    process: {
      totalRequests: 128,
      pending: 12,
      avgProcessingTime: '1.7 days'
    },
    // Other departments...
  };

  const departmentName = department.replace('_', ' ');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">{departmentName} Department Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Total Requests</h3>
          <p className="text-3xl font-bold">{stats[department].totalRequests}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Pending Approval</h3>
          <p className="text-3xl font-bold text-yellow-600">{stats[department].pending}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Avg. Processing Time</h3>
          <p className="text-3xl font-bold">{stats[department].avgProcessingTime}</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        {/* Activity timeline or table would go here */}
      </div>
    </div>
  );
};

export default HodDashboard;