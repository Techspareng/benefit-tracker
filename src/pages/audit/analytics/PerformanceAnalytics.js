import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';

const AuditPerformanceAnalytics = () => {
  const [timeframe, setTimeframe] = useState('month');
  const [department, setDepartment] = useState('all');

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Performance Analytics</h1>
          <p className="mt-1 text-sm text-gray-500">Monitor audit performance metrics and KPIs</p>
        </div>
        
        {/* Filters */}
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

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Audits Completed</h3>
          <p className="text-3xl font-bold mt-2">157</p>
          <p className="text-xs text-green-500 mt-1">↑ 12% vs last period</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Avg Resolution Time</h3>
          <p className="text-3xl font-bold mt-2">2.4d</p>
          <p className="text-xs text-green-500 mt-1">↓ 0.5d improvement</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Success Rate</h3>
          <p className="text-3xl font-bold mt-2">94%</p>
          <p className="text-xs text-yellow-500 mt-1">↔ No change</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Pending Reviews</h3>
          <p className="text-3xl font-bold mt-2">23</p>
          <p className="text-xs text-red-500 mt-1">↑ 5 more than usual</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Audit Volume Trends */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Audit Volume Trends</h3>
          <div className="h-[300px]">
            <Line 
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                  label: 'Completed Audits',
                  data: [65, 78, 66, 89, 80, 95],
                  borderColor: '#3b82f6',
                  tension: 0.4
                }]
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>

        {/* Department Performance */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Department Performance</h3>
          <div className="h-[300px]">
            <Bar 
              data={{
                labels: ['Benefits', 'Process', 'Accounts', 'IT'],
                datasets: [{
                  label: 'Performance Score',
                  data: [85, 92, 78, 89],
                  backgroundColor: '#60a5fa'
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

      {/* Performance Table */}
      <div className="mt-6 bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Audits</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Success Rate</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Avg Time</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { dept: 'Benefits', audits: 45, rate: '92%', time: '2.1d', trend: 'up' },
                { dept: 'Process', audits: 38, rate: '88%', time: '2.4d', trend: 'down' },
                { dept: 'Accounts', audits: 41, rate: '95%', time: '1.9d', trend: 'up' }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm">{row.dept}</td>
                  <td className="px-4 py-4 text-sm">{row.audits}</td>
                  <td className="px-4 py-4 text-sm">{row.rate}</td>
                  <td className="px-4 py-4 text-sm">{row.time}</td>
                  <td className="px-4 py-4 text-sm">
                    <i className={`fas fa-arrow-${row.trend} text-${row.trend === 'up' ? 'green' : 'red'}-500`}></i>
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

export default AuditPerformanceAnalytics;