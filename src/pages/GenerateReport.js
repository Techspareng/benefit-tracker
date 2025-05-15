import React, { useState } from 'react';

const GenerateReport = () => {
  const [reportParams, setReportParams] = useState({
    startDate: '',
    endDate: '',
    reportType: '',
    department: '',
    status: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle report generation
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Generate Reports</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Report Parameters</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Report Type
                </label>
                <select
                  className="w-full p-2 border rounded"
                  value={reportParams.reportType}
                  onChange={(e) => setReportParams({...reportParams, reportType: e.target.value})}
                  required
                >
                  <option value="">Select Report Type</option>
                  <option value="summary">Summary Report</option>
                  <option value="detailed">Detailed Report</option>
                  <option value="financial">Financial Report</option>
                  <option value="audit">Audit Report</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded"
                    value={reportParams.startDate}
                    onChange={(e) => setReportParams({...reportParams, startDate: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded"
                    value={reportParams.endDate}
                    onChange={(e) => setReportParams({...reportParams, endDate: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  className="w-full p-2 border rounded"
                  value={reportParams.status}
                  onChange={(e) => setReportParams({...reportParams, status: e.target.value})}
                >
                  <option value="">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Generate Report
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Saved Reports</h2>
          <div className="space-y-4">
            {/* List of previously generated reports */}
            <div className="border rounded p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Monthly Summary Report</h3>
                  <p className="text-sm text-gray-500">Generated on May 1, 2025</p>
                </div>
                <button className="text-blue-600 hover:text-blue-900">
                  <i className="fas fa-download"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateReport;