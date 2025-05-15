import React, { useState } from 'react';

const GenerateReport = () => {
  const [loading, setLoading] = useState(false);
  const [reportType, setReportType] = useState('performance');
  const [dateRange, setDateRange] = useState('month');

  const handleGenerateReport = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Generate Department Reports</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Report Configuration</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Report Type
                </label>
                <select
                  value={reportType}
                  onChange={(e) => setReportType(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                >
                  <option value="performance">Staff Performance Report</option>
                  <option value="requests">Request Processing Report</option>
                  <option value="efficiency">Department Efficiency Report</option>
                  <option value="summary">Department Summary Report</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date Range
                </label>
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                >
                  <option value="week">Last Week</option>
                  <option value="month">Last Month</option>
                  <option value="quarter">Last Quarter</option>
                  <option value="year">Last Year</option>
                  <option value="custom">Custom Range</option>
                </select>
              </div>

              {dateRange === 'custom' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Start Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      End Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                </div>
              )}

              <div className="pt-4">
                <button
                  onClick={handleGenerateReport}
                  disabled={loading}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-blue-300"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Generating Report...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <i className="fas fa-file-alt mr-2"></i>
                      Generate Report
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Reports</h2>
          <div className="space-y-4">
            {[
              { name: 'May Performance Report', date: '2025-05-01', type: 'PDF' },
              { name: 'Q1 Efficiency Report', date: '2025-04-01', type: 'XLSX' },
              { name: 'March Processing Report', date: '2025-03-01', type: 'PDF' }
            ].map((report, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">{report.name}</p>
                  <p className="text-sm text-gray-500">{report.date}</p>
                </div>
                <button className="text-blue-600 hover:text-blue-800">
                  <i className={`fas fa-file-${report.type.toLowerCase()} mr-2`}></i>
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateReport;