import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GenerateReport = () => {
  const [reportType, setReportType] = useState('performance');
  const [dateRange, setDateRange] = useState({
    start: '',
    end: ''
  });
  const [format, setFormat] = useState('pdf');
  const [loading, setLoading] = useState(false);
  const [generatedReports, setGeneratedReports] = useState([
    {
      id: 1,
      name: 'Process Performance Report - May 2023',
      type: 'Performance',
      date: '2023-05-15',
      format: 'PDF',
      size: '2.4 MB'
    }
  ]);

  const handleGenerateReport = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Handle report generation
    }, 2000);
  };

  const trendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Processing Time',
      data: [24, 28, 23, 25, 22],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
    }]
  };

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-bold">Generate Report</h1>
        <p className="text-sm text-gray-500 mt-1">Create customized process department reports</p>
      </div>

      {/* Report Generation Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <h2 className="text-lg font-semibold mb-4">Report Configuration</h2>
            <form onSubmit={handleGenerateReport} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Report Type
                  </label>
                  <select
                    value={reportType}
                    onChange={(e) => setReportType(e.target.value)}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="performance">Performance Report</option>
                    <option value="workload">Workload Analysis</option>
                    <option value="efficiency">Efficiency Metrics</option>
                    <option value="summary">Department Summary</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Format
                  </label>
                  <select
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="pdf">PDF</option>
                    <option value="excel">Excel</option>
                    <option value="csv">CSV</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={dateRange.start}
                    onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={dateRange.end}
                    onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                    flex items-center ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Generating...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-file-export mr-2"></i>
                      Generate Report
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Preview Section */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mt-6">
            <h2 className="text-lg font-semibold mb-4">Report Preview</h2>
            <div className="h-[300px]">
              <Line 
                data={trendData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'top',
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Reports</h2>
            <div className="space-y-4">
              {generatedReports.map((report) => (
                <div 
                  key={report.id}
                  className="p-3 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-sm">{report.name}</h3>
                      <p className="text-xs text-gray-500">{report.date}</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800">
                      <i className="fas fa-download"></i>
                    </button>
                  </div>
                  <div className="flex items-center mt-2 text-xs text-gray-500">
                    <span className="mr-3">
                      <i className="fas fa-file-alt mr-1"></i>
                      {report.type}
                    </span>
                    <span>
                      <i className="fas fa-weight-hanging mr-1"></i>
                      {report.size}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateReport;