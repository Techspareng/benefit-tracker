import React, { useState } from 'react';

const ComplianceReports = () => {
  const [dateRange, setDateRange] = useState('monthly');

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">Compliance Reports</h1>
        
        <div className="flex flex-wrap gap-3">
          <select 
            className="border rounded-md px-3 py-2"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
          
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Generate Report
          </button>
        </div>
      </div>

      {/* Reports List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Report Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Generated
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Sample report rows */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Q3 Compliance Report</td>
                <td className="px-6 py-4 whitespace-nowrap">2023-10-01</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">Download</button>
                  <button className="text-gray-600 hover:text-gray-900">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComplianceReports;
