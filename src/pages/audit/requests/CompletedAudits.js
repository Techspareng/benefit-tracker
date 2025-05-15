import React, { useState } from 'react';

const CompletedAudits = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState({
    start: '',
    end: ''
  });
  const [completedAudits, setCompletedAudits] = useState([
    {
      id: 'AUD-2023-001',
      type: 'Retirement Claim',
      submitter: 'John Doe',
      completedDate: '2023-05-15',
      outcome: 'Approved',
      auditor: 'Jane Smith',
      complianceScore: 98,
      findings: 'No major issues found'
    },
    // Add more mock data as needed
  ]);

  return (
    <div className="p-4 sm:p-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Completed Audits</h1>
          <p className="mt-1 text-sm text-gray-500">View and manage completed audit reviews</p>
        </div>
        <div className="w-full sm:w-auto mt-4 sm:mt-0 flex flex-col sm:flex-row gap-2">
          <input
            type="search"
            placeholder="Search audits..."
            className="w-full sm:w-64 px-3 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="date"
            className="w-full sm:w-auto px-3 py-2 border rounded-lg"
            value={dateRange.start}
            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
            placeholder="Start Date"
          />
          <input
            type="date"
            className="w-full sm:w-auto px-3 py-2 border rounded-lg"
            value={dateRange.end}
            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
            placeholder="End Date"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Total Completed</h3>
          <p className="mt-2 text-3xl font-bold text-blue-600">145</p>
          <p className="text-xs text-blue-500 mt-1">This month</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Avg. Compliance Score</h3>
          <p className="mt-2 text-3xl font-bold text-green-600">94%</p>
          <p className="text-xs text-green-500 mt-1">Above target</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Issues Found</h3>
          <p className="mt-2 text-3xl font-bold text-yellow-600">23</p>
          <p className="text-xs text-yellow-500 mt-1">All resolved</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Avg. Processing Time</h3>
          <p className="mt-2 text-3xl font-bold text-purple-600">2.4d</p>
          <p className="text-xs text-purple-500 mt-1">Within SLA</p>
        </div>
      </div>

      {/* Completed Audits Table */}
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
                  Auditor
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Outcome
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                  Score
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {completedAudits.map((audit) => (
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
                    {audit.auditor}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      audit.outcome === 'Approved' ? 'bg-green-100 text-green-800' :
                      audit.outcome === 'Rejected' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {audit.outcome}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm hidden lg:table-cell">
                    <span className={`font-medium ${
                      audit.complianceScore >= 90 ? 'text-green-600' :
                      audit.complianceScore >= 70 ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {audit.complianceScore}%
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-800 mr-3">
                      <i className="fas fa-file-alt mr-1"></i>
                      View Report
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

export default CompletedAudits;