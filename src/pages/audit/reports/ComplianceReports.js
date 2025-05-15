import React, { useState } from 'react';

const AuditComplianceReports = () => {
  const [filter, setFilter] = useState('all');
  const [dateRange, setDateRange] = useState({
    start: '',
    end: ''
  });

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Compliance Reports</h1>
          <p className="mt-1 text-sm text-gray-500">View and generate compliance reports</p>
        </div>
        
        {/* Filters */}
        <div className="w-full sm:w-auto mt-4 sm:mt-0 flex flex-col sm:flex-row gap-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full sm:w-40 px-3 py-2 border rounded-lg"
          >
            <option value="all">All Reports</option>
            <option value="regulatory">Regulatory</option>
            <option value="internal">Internal</option>
            <option value="external">External</option>
          </select>
          
          <input
            type="date"
            value={dateRange.start}
            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
            className="w-full sm:w-auto px-3 py-2 border rounded-lg"
          />
          
          <input
            type="date"
            value={dateRange.end}
            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
            className="w-full sm:w-auto px-3 py-2 border rounded-lg"
          />
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          {
            title: 'Q2 2023 Compliance Summary',
            type: 'Quarterly Report',
            date: '2023-06-30',
            status: 'Complete'
          },
          {
            title: 'Annual Regulatory Review',
            type: 'Annual Report',
            date: '2023-12-31',
            status: 'In Progress'
          },
          {
            title: 'Monthly Compliance Check',
            type: 'Monthly Report',
            date: '2023-05-31',
            status: 'Complete'
          }
          // Add more reports as needed
        ].map((report, idx) => (
          <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-medium text-gray-900">{report.title}</h3>
                <p className="text-sm text-gray-500">{report.type}</p>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${
                report.status === 'Complete' 
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {report.status}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">{report.date}</span>
              <div className="space-x-2">
                <button className="text-blue-600 hover:text-blue-800">
                  <i className="fas fa-download mr-1"></i>
                  Download
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                  <i className="fas fa-eye mr-1"></i>
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuditComplianceReports;