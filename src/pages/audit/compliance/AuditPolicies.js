import React, { useState } from 'react';

const AuditPolicies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const policies = [
    {
      id: 'POL-001',
      title: 'Documentation Requirements',
      category: 'Documentation',
      lastUpdated: '2023-05-01',
      status: 'Active',
      description: 'Standard documentation requirements for all audit processes'
    },
    // Add more policies as needed
  ];

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Audit Policies</h1>
          <p className="mt-1 text-sm text-gray-500">View and manage audit policies and procedures</p>
        </div>
        
        {/* Search and Filter */}
        <div className="w-full sm:w-auto mt-4 sm:mt-0 flex flex-col sm:flex-row gap-2">
          <input
            type="search"
            placeholder="Search policies..."
            className="w-full sm:w-64 px-3 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full sm:w-auto px-3 py-2 border rounded-lg"
          >
            <option value="all">All Categories</option>
            <option value="documentation">Documentation</option>
            <option value="compliance">Compliance</option>
            <option value="process">Process</option>
          </select>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Total Policies</h3>
          <p className="text-3xl font-bold mt-2">24</p>
          <p className="text-xs text-gray-500 mt-1">Active policies</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Recent Updates</h3>
          <p className="text-3xl font-bold mt-2">5</p>
          <p className="text-xs text-blue-500 mt-1">Last 30 days</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Under Review</h3>
          <p className="text-3xl font-bold mt-2">3</p>
          <p className="text-xs text-yellow-500 mt-1">Pending approval</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Compliance Rate</h3>
          <p className="text-3xl font-bold mt-2">96%</p>
          <p className="text-xs text-green-500 mt-1">Above target</p>
        </div>
      </div>

      {/* Policies List */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Policy ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Category</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden lg:table-cell">Last Updated</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {policies.map((policy) => (
                <tr key={policy.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm font-medium">{policy.id}</td>
                  <td className="px-4 py-4 text-sm">{policy.title}</td>
                  <td className="px-4 py-4 text-sm hidden md:table-cell">{policy.category}</td>
                  <td className="px-4 py-4 text-sm hidden lg:table-cell">{policy.lastUpdated}</td>
                  <td className="px-4 py-4 text-sm">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                      {policy.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm">
                    <button className="text-blue-600 hover:text-blue-800 mr-3">
                      <i className="fas fa-eye mr-1"></i>
                      View
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                      <i className="fas fa-history mr-1"></i>
                      History
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

export default AuditPolicies;