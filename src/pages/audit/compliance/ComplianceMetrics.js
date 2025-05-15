import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';

const ComplianceMetrics = () => {
  const [timeFrame, setTimeFrame] = useState('monthly');
  const [department, setDepartment] = useState('all');
  const [riskLevel, setRiskLevel] = useState('all');

  const complianceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Compliance Score',
      data: [85, 88, 92, 95, 89],
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      borderColor: 'rgb(59, 130, 246)',
    }]
  };

  const riskTrendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Risk Level Trend',
      data: [4, 3, 2, 3, 2],
      borderColor: 'rgb(234, 88, 12)',
      tension: 0.1
    }]
  };

  return (
    <div className="p-4 sm:p-6">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Compliance Metrics</h1>
        <p className="mt-1 text-sm text-gray-500">Monitor compliance performance and risk levels</p>
      </div>

      {/* Filters Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <select
          value={timeFrame}
          onChange={(e) => setTimeFrame(e.target.value)}
          className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
        </select>

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Departments</option>
          <option value="benefits">Benefits</option>
          <option value="process">Process</option>
          <option value="accounts">Accounts</option>
        </select>

        <select
          value={riskLevel}
          onChange={(e) => setRiskLevel(e.target.value)}
          className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Risk Levels</option>
          <option value="high">High Risk</option>
          <option value="medium">Medium Risk</option>
          <option value="low">Low Risk</option>
        </select>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Overall Compliance</h3>
          <p className="mt-2 text-3xl font-bold text-green-600">92%</p>         <p className="text-xs text-green-500 mt-1">↑ 2.3% from last period</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Risk Score</h3>
          <p className="mt-2 text-3xl font-bold text-yellow-600">2.4</p>
          <p className="text-xs text-yellow-500 mt-1">↓ 0.3 from last period</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Audit Findings</h3>
          <p className="mt-2 text-3xl font-bold text-blue-600">15</p>
          <p className="text-xs text-blue-500 mt-1">12 resolved, 3 pending</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Policy Adherence</h3>
          <p className="mt-2 text-3xl font-bold text-purple-600">96%</p>
          <p className="text-xs text-purple-500 mt-1">Above target</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Compliance Trend Chart */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Compliance Trend</h3>
          <div className="h-[300px]">
            <Bar 
              data={complianceData}
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

        {/* Risk Trend Chart */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Risk Level Trend</h3>
          <div className="h-[300px]">
            <Line 
              data={riskTrendData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 5
                  }
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Compliance Issues Table */}
      <div className="mt-6 bg-white rounded-lg shadow-sm overflow-hidden">
        <h3 className="text-lg font-semibold p-4 border-b">Recent Compliance Issues</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Issue ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Risk Level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { id: 'CI-001', type: 'Documentation', department: 'Benefits', status: 'Resolved', risk: 'Medium' },
                { id: 'CI-002', type: 'Process', department: 'Accounts', status: 'Pending', risk: 'High' },
                { id: 'CI-003', type: 'Policy', department: 'Process', status: 'In Review', risk: 'Low' },
              ].map((issue) => (
                <tr key={issue.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">{issue.id}</td>
                  <td className="px-4 py-3 text-sm">{issue.type}</td>
                  <td className="px-4 py-3 text-sm">{issue.department}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      issue.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                      issue.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {issue.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      issue.risk === 'High' ? 'bg-red-100 text-red-800' :
                      issue.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {issue.risk}
                    </span>
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

export default ComplianceMetrics;