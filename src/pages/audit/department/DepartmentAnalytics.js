import React, { useState } from 'react';
import { Line, Bar, Radar, Doughnut } from 'react-chartjs-2';

const AuditDepartmentAnalytics = () => {
  const [dateRange, setDateRange] = useState('month');
  const [department, setDepartment] = useState('all');
  const [metrics] = useState({
    auditEfficiency: 87,
    completionRate: 92,
    avgProcessingTime: '2.3 days',
    qualityScore: 94,
    totalAudits: 156,
    pendingReviews: 23,
    trends: {
      efficiency: [85, 87, 82, 88, 87, 89],
      quality: [90, 92, 91, 93, 94, 94],
      volume: [145, 152, 148, 155, 156, 158]
    }
  });

  const performanceData = {
    labels: ['Accuracy', 'Speed', 'Compliance', 'Documentation', 'Communication'],
    datasets: [{
      label: 'Current Performance',
      data: [95, 87, 92, 88, 85],
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      borderColor: 'rgb(59, 130, 246)',
      borderWidth: 2
    }]
  };

  const trendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Efficiency',
        data: metrics.trends.efficiency,
        borderColor: 'rgb(59, 130, 246)',
        tension: 0.4
      },
      {
        label: 'Quality',
        data: metrics.trends.quality,
        borderColor: 'rgb(34, 197, 94)',
        tension: 0.4
      }
    ]
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Department Analytics</h1>
          <p className="mt-1 text-sm text-gray-500">Comprehensive performance metrics and analysis</p>
        </div>

        <div className="w-full sm:w-auto mt-4 sm:mt-0 flex flex-col sm:flex-row gap-2">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="all">All Teams</option>
            <option value="internal">Internal Audit</option>
            <option value="external">External Audit</option>
            <option value="compliance">Compliance</option>
          </select>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Audit Efficiency</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">{metrics.auditEfficiency}%</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <i className="fas fa-bolt text-blue-600 text-xl"></i>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500 mr-2">
              <i className="fas fa-arrow-up"></i> 2%
            </span>
            <span className="text-gray-500">vs last period</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Quality Score</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">{metrics.qualityScore}%</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <i className="fas fa-check-circle text-green-600 text-xl"></i>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500 mr-2">
              <i className="fas fa-arrow-up"></i> 1.5%
            </span>
            <span className="text-gray-500">improvement</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Processing Time</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">{metrics.avgProcessingTime}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <i className="fas fa-clock text-purple-600 text-xl"></i>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500 mr-2">
              <i className="fas fa-arrow-down"></i> 0.3 days
            </span>
            <span className="text-gray-500">faster</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Audits</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">{metrics.totalAudits}</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <i className="fas fa-file-alt text-yellow-600 text-xl"></i>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-yellow-500 mr-2">{metrics.pendingReviews} pending</span>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Performance Trends</h2>
          <div className="h-[300px]">
            <Line 
              data={trendData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: false,
                    min: 80,
                    max: 100
                  }
                }
              }}
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Performance Metrics</h2>
          <div className="h-[300px]">
            <Radar 
              data={performanceData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                      stepSize: 20
                    }
                  }
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Audit Volume Distribution</h2>
          <div className="h-[250px]">
            <Bar
              data={{
                labels: ['Internal', 'External', 'Compliance', 'Process', 'Risk'],
                datasets: [{
                  label: 'Number of Audits',
                  data: [45, 32, 28, 25, 26],
                  backgroundColor: 'rgba(59, 130, 246, 0.5)'
                }]
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Audit Status</h2>
          <div className="h-[250px]">
            <Doughnut
              data={{
                labels: ['Completed', 'In Progress', 'Pending', 'Delayed'],
                datasets: [{
                  data: [65, 20, 10, 5],
                  backgroundColor: [
                    'rgba(34, 197, 94, 0.6)',
                    'rgba(59, 130, 246, 0.6)',
                    'rgba(234, 179, 8, 0.6)',
                    'rgba(239, 68, 68, 0.6)'
                  ]
                }]
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditDepartmentAnalytics;