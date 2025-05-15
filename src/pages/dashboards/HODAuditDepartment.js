import React, { useState, useEffect } from 'react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HODAuditDepartment = () => {
  const [timeframe, setTimeframe] = useState('month');
  const [statistics, setStatistics] = useState({
    totalRequests: 156,
    pendingAudit: 12,
    avgAuditTime: '1.5 days',
    complianceRate: 95,
    flaggedRequests: 8,
    completedAudits: 136,
    criticalIssues: 3
  });

  const [recentAudits] = useState([
    {
      id: 'AUD001',
      requestId: 'REQ156',
      type: 'Retirement Benefits',
      status: 'Pending',
      priority: 'High',
      flagged: false,
      auditDate: '2025-05-14',
      assignedTo: 'John Doe'
    },
    {
      id: 'AUD002',
      requestId: 'REQ155',
      type: 'Death Benefits',
      status: 'Completed',
      flagged: true,
      auditDate: '2025-05-13'
    }
  ]);

  const complianceData = {
    labels: ['Compliant', 'Non-Compliant', 'Under Review'],
    datasets: [{
      data: [statistics.complianceRate, 100 - statistics.complianceRate, 5],
      backgroundColor: [
        'rgba(34, 197, 94, 0.6)',
        'rgba(239, 68, 68, 0.6)',
        'rgba(234, 179, 8, 0.6)'
      ]
    }]
  };

  const trendsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Audit Completion Rate',
      data: [92, 95, 89, 93, 95, 94],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4,
      fill: true
    }]
  };

  const issuesByTypeData = {
    labels: ['Documentation', 'Process', 'Compliance', 'Technical', 'Other'],
    datasets: [{
      label: 'Issues by Type',
      data: [12, 19, 8, 5, 3],
      backgroundColor: [
        'rgba(99, 102, 241, 0.6)',
        'rgba(236, 72, 153, 0.6)',
        'rgba(34, 197, 94, 0.6)',
        'rgba(234, 179, 8, 0.6)',
        'rgba(156, 163, 175, 0.6)'
      ]
    }]
  };

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Audit Department Overview</h1>
          <p className="mt-1 text-sm text-gray-500">Real-time department analytics and metrics</p>
        </div>
        
        <div className="mt-4 sm:mt-0">
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Audit Progress</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                {Math.round((statistics.completedAudits / statistics.totalRequests) * 100)}%
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <i className="fas fa-chart-pie text-blue-600 text-xl"></i>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500 mr-2">
              <i className="fas fa-arrow-up"></i> 12%
            </span>
            <span className="text-gray-500">vs last period</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Reviews</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">{statistics.pendingAudit}</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <i className="fas fa-clock text-yellow-600 text-xl"></i>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-red-500 mr-2">
              <i className="fas fa-arrow-up"></i> 3
            </span>
            <span className="text-gray-500">new requests</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Compliance Rate</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">{statistics.complianceRate}%</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <i className="fas fa-shield-alt text-green-600 text-xl"></i>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500 mr-2">
              <i className="fas fa-check"></i> On Target
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Critical Issues</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">{statistics.criticalIssues}</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <i className="fas fa-exclamation-triangle text-red-600 text-xl"></i>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-red-500 mr-2">
              <i className="fas fa-arrow-up"></i> High Priority
            </span>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Audit Completion Trends</h2>
          <div className="h-[300px]">
            <Line data={trendsData} options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'bottom'
                }
              }
            }} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Compliance Overview</h2>
          <div className="h-[300px]">
            <Doughnut data={complianceData} options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'bottom'
                }
              }
            }} />
          </div>
        </div>
      </div>

      {/* Recent Audits Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Recent Audits</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Audit ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assigned To
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentAudits.map((audit) => (
                <tr key={audit.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                    {audit.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {audit.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      audit.status === 'Completed' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {audit.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      audit.priority === 'High'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {audit.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {audit.assignedTo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {audit.auditDate}
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

export default HODAuditDepartment;