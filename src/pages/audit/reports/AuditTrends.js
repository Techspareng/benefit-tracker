import React, { useState } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

const AuditTrends = () => {
  const [timeframe, setTimeframe] = useState('month');
  const [department, setDepartment] = useState('all');

  const trendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Audit Findings',
      data: [65, 59, 80, 81, 56, 55],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  const categoryData = {
    labels: ['Documentation', 'Process', 'Compliance', 'Security', 'Other'],
    datasets: [{
      data: [30, 25, 20, 15, 10],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
      ],
      borderWidth: 1
    }]
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Header with Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Audit Trends</h1>
          <p className="mt-1 text-sm text-gray-500">Analysis of audit patterns and trends</p>
        </div>

        <div className="w-full sm:w-auto mt-4 sm:mt-0 flex flex-col sm:flex-row gap-2">
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="w-full sm:w-40 px-3 py-2 border rounded-lg"
          >
            <option value="week">Weekly</option>
            <option value="month">Monthly</option>
            <option value="quarter">Quarterly</option>
            <option value="year">Yearly</option>
          </select>

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full sm:w-40 px-3 py-2 border rounded-lg"
          >
            <option value="all">All Departments</option>
            <option value="benefits">Benefits</option>
            <option value="process">Process</option>
            <option value="accounts">Accounts</option>
          </select>
        </div>
      </div>

      {/* Trend Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Issue Resolution Time</h3>
          <div className="flex items-end space-x-2">
            <p className="text-2xl font-bold">-15%</p>
            <span className="text-green-500 text-sm">
              <i className="fas fa-arrow-down mr-1"></i>
              Improved
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Critical Findings</h3>
          <div className="flex items-end space-x-2">
            <p className="text-2xl font-bold">+8%</p>
            <span className="text-red-500 text-sm">
              <i className="fas fa-arrow-up mr-1"></i>
              Increased
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Compliance Rate</h3>
          <div className="flex items-end space-x-2">
            <p className="text-2xl font-bold">94%</p>
            <span className="text-green-500 text-sm">
              <i className="fas fa-equals mr-1"></i>
              Stable
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Avg Response Time</h3>
          <div className="flex items-end space-x-2">
            <p className="text-2xl font-bold">2.3d</p>
            <span className="text-green-500 text-sm">
              <i className="fas fa-arrow-down mr-1"></i>
              -0.5d
            </span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="space-y-6">
        {/* Main Trend Chart */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Historical Trend Analysis</h3>
          <div className="h-[400px]">
            <Line 
              data={trendData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Secondary Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Issue Categories</h3>
            <div className="h-[300px]">
              <Doughnut 
                data={categoryData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom'
                    }
                  }
                }}
              />
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Department Performance</h3>
            <div className="h-[300px]">
              <Bar 
                data={{
                  labels: ['Benefits', 'Process', 'Accounts', 'IT'],
                  datasets: [{
                    label: 'Performance Score',
                    data: [85, 92, 78, 89],
                    backgroundColor: 'rgba(59, 130, 246, 0.5)'
                  }]
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                      max: 100
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Trend Details Table */}
      <div className="mt-6 bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Current</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Previous</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Change</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { category: 'Documentation Issues', current: 24, previous: 29, change: '-17%', trend: 'down' },
                { category: 'Process Violations', current: 18, previous: 15, change: '+20%', trend: 'up' },
                { category: 'Compliance Gaps', current: 12, previous: 14, change: '-14%', trend: 'down' }
              ].map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">{item.category}</td>
                  <td className="px-4 py-4 text-sm text-gray-500">{item.current}</td>
                  <td className="px-4 py-4 text-sm text-gray-500">{item.previous}</td>
                  <td className="px-4 py-4 text-sm text-gray-500">{item.change}</td>
                  <td className="px-4 py-4 text-sm">
                    <i className={`fas fa-arrow-${item.trend} text-${item.trend === 'up' ? 'red' : 'green'}-500`}></i>
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

export default AuditTrends;