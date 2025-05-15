import React, { useState } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';

const RiskAssessment = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [timeframe, setTimeframe] = useState('month');

  const riskData = {
    labels: ['High', 'Medium', 'Low'],
    datasets: [{
      data: [15, 25, 60],
      backgroundColor: ['#ef4444', '#f59e0b', '#10b981'],
    }]
  };

  const trendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Risk Score Trend',
      data: [4.2, 3.8, 3.5, 3.9, 3.2, 3.0],
      borderColor: '#ef4444',
      tension: 0.4
    }]
  };

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Risk Assessment</h1>
          <p className="mt-1 text-sm text-gray-500">Monitor and analyze risk levels across departments</p>
        </div>
        
        {/* Filters */}
        <div className="w-full sm:w-auto mt-4 sm:mt-0 flex flex-col sm:flex-row gap-2">
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="w-full sm:w-40 px-3 py-2 border rounded-lg"
          >
            <option value="all">All Departments</option>
            <option value="benefits">Benefits</option>
            <option value="process">Process</option>
            <option value="accounts">Accounts</option>
          </select>
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="w-full sm:w-32 px-3 py-2 border rounded-lg"
          >
            <option value="week">Weekly</option>
            <option value="month">Monthly</option>
            <option value="quarter">Quarterly</option>
          </select>
        </div>
      </div>

      {/* Risk Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Overall Risk Score</h3>
            <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Medium</span>
          </div>
          <p className="text-3xl font-bold mt-2">3.5</p>
          <p className="text-xs text-green-500 mt-1">↓ 0.3 from last period</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">High Risk Items</h3>
            <i className="fas fa-exclamation-triangle text-red-500"></i>
          </div>
          <p className="text-3xl font-bold mt-2">12</p>
          <p className="text-xs text-red-500 mt-1">Requires immediate attention</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Risk Mitigation Rate</h3>
            <i className="fas fa-shield-alt text-green-500"></i>
          </div>
          <p className="text-3xl font-bold mt-2">85%</p>
          <p className="text-xs text-green-500 mt-1">Above target</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Pending Reviews</h3>
            <i className="fas fa-clock text-blue-500"></i>
          </div>
          <p className="text-3xl font-bold mt-2">7</p>
          <p className="text-xs text-blue-500 mt-1">Within SLA</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Risk Distribution Chart */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Risk Distribution</h3>
          <div className="h-[300px] flex items-center justify-center">
            <Doughnut 
              data={riskData}
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

        {/* Risk Trend Chart */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Risk Score Trend</h3>
          <div className="h-[300px]">
            <Line 
              data={trendData}
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

      {/* Risk Items Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <h3 className="text-lg font-semibold p-4 border-b">High Risk Items</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Item ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Risk Level</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { id: 'R001', description: 'Incomplete documentation', department: 'Benefits', level: 'High', status: 'Open' },
                { id: 'R002', description: 'Policy violation', department: 'Process', level: 'High', status: 'In Progress' },
                { id: 'R003', description: 'Compliance breach', department: 'Accounts', level: 'High', status: 'Under Review' },
              ].map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm">{item.id}</td>
                  <td className="px-4 py-4 text-sm">{item.description}</td>
                  <td className="px-4 py-4 text-sm">{item.department}</td>
                  <td className="px-4 py-4 text-sm">
                    <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
                      {item.level}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm">
                    <button className="text-blue-600 hover:text-blue-800">
                      <i className="fas fa-eye mr-1"></i>
                      View Details
                    </button>
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

export default RiskAssessment;