import React, { useState, useEffect } from 'react';

const ActiveAudits = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [activeAudits, setActiveAudits] = useState([
    {
      id: 'AUD-2023-001',
      type: 'Retirement Claim',
      submitter: 'John Doe',
      startDate: '2023-05-10',
      status: 'In Review',
      progress: 75,
      assignedTo: 'Jane Smith',
      priority: 'High',
      dueDate: '2023-05-20'
    },
    // Add more mock data as needed
  ]);

  return (
    <div className="p-4 sm:p-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Active Audits</h1>
          <p className="mt-1 text-sm text-gray-500">Manage ongoing audit reviews</p>
        </div>
        <div className="w-full sm:w-auto mt-4 sm:mt-0 flex flex-col sm:flex-row gap-2">
          <input
            type="search"
            placeholder="Search audits..."
            className="w-full sm:w-64 px-3 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full sm:w-auto px-3 py-2 border rounded-lg"
          >
            <option value="all">All Priorities</option>
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
          </select>
        </div>
      </div>

      {/* Active Audits Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Audit ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                  Assigned To
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Progress
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                  Due Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {activeAudits.map((audit) => (
                <tr key={audit.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <div className="flex flex-col">
                      <span className="font-medium">{audit.id}</span>
                      <span className="text-gray-500 text-xs sm:hidden">{audit.type}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm hidden sm:table-cell">
                    {audit.type}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm hidden md:table-cell">
                    {audit.assignedTo}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: `${audit.progress}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-xs text-gray-500">{audit.progress}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm hidden lg:table-cell">
                    {audit.dueDate}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-800 mr-3">
                      <i className="fas fa-eye mr-1"></i>
                      Review
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

export default ActiveAudits;