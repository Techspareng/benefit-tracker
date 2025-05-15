import React, { useState } from 'react';

const Reports = () => {
  const [dateRange, setDateRange] = useState({
    start: '',
    end: ''
  });
  const [reportType, setReportType] = useState('');
  const [generatedReports, setGeneratedReports] = useState([
    {
      id: 1,
      name: 'Monthly Processing Report - April 2023',
      date: '2023-05-01',
      type: 'Monthly',
      status: 'completed'
    },
    // Add more mock data as needed
  ]);

  const handleGenerateReport = (e) => {
    e.preventDefault();
    // Implement report generation logic
  };

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-6">Process Reports</h1>

      {/* Report Generation Form */}
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Generate New Report</h2>
        <form onSubmit={handleGenerateReport} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="date"
                value={dateRange.start}
                onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
                className="w-full rounded-lg border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="date"
                value={dateRange.end}
                onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
                className="w-full rounded-lg border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Report Type
              </label>
              <select
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                className="w-full rounded-lg border-gray-300 shadow-sm"
              >
                <option value="">Select type...</option>
                <option value="processing">Processing Time</option>
                <option value="volume">Request Volume</option>
                <option value="performance">Performance</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Generate Report
            </button>
          </div>
        </form>
      </div>

      {/* Generated Reports Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Report Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">
                  Generated Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {generatedReports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">
                        {report.name}
                      </span>
                      <span className="text-sm text-gray-500 sm:hidden">
                        {report.date}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap hidden sm:table-cell">
                    <span className="text-sm text-gray-900">{report.date}</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap hidden sm:table-cell">
                    <span className="text-sm text-gray-900">{report.type}</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <i className="fas fa-download mr-1"></i>
                        <span className="hidden sm:inline">Download</span>
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <i className="fas fa-trash-alt mr-1"></i>
                        <span className="hidden sm:inline">Delete</span>
                      </button>
                    </div>
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

export default Reports;