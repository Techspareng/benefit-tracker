import React, { useState, useEffect } from 'react';
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

const AuditManagerDashboard = () => {
  const [requests, setRequests] = useState([
    {
      id: 'BC-2023-001',
      type: 'Retirement',
      contributor: 'John Doe',
      status: 'pending_audit',
      processComments: 'All documents verified',
      submittedDate: '2023-05-15',
      amount: '$25,000',
      priority: 'High',
      complianceIssues: []
    },
    {
      id: 'BC-2023-002',
      type: 'Death Benefit',
      contributor: 'Jane Smith',
      status: 'pending_audit',
      processComments: 'Documentation complete',
      submittedDate: '2023-05-14',
      amount: '$35,000',
      priority: 'Medium',
      complianceIssues: []
    },
    // Add more mock data as needed
  ]);

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [statistics] = useState({
    totalPending: 15,
    completedToday: 8,
    complianceRate: "94%",
    avgProcessTime: "1.2 days"
  });

  // Audit performance data for chart
  const auditPerformanceData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      label: 'Audits Completed',
      data: [12, 15, 18, 14, 16],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
    }]
  };

  const [complianceChecklist, setComplianceChecklist] = useState([
    { id: 1, item: 'Age verification', checked: false },
    { id: 2, item: 'RSA balance validation', checked: false },
    { id: 3, item: 'Tax compliance', checked: false },
  ]);
  const [auditComment, setAuditComment] = useState('');

  const handleComplianceCheck = (id) => {
    setComplianceChecklist(complianceChecklist.map(item => 
      item.id === id ? {...item, checked: !item.checked} : item
    ));
  };

  const handleApprove = () => {
    // API call to approve and forward to Account
    alert(`Request ${selectedRequest.id} approved and forwarded to Account`);
    setSelectedRequest(null);
  };

  return (
    <div className="p-4 sm:p-6">
      {/* Dashboard Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Audit & Compliance Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">Manage and track audit reviews</p>
        </div>
        <div className="w-full sm:w-auto mt-4 sm:mt-0 flex flex-col sm:flex-row gap-2">
          <input
            type="search"
            placeholder="Search requests..."
            className="w-full sm:w-64 px-3 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full sm:w-auto px-3 py-2 border rounded-lg"
          >
            <option value="all">All Requests</option>
            <option value="pending">Pending Audit</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Pending Audits</h3>
            <i className="fas fa-clock text-blue-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">{statistics.totalPending}</p>
          <p className="text-xs text-blue-500 mt-1">Awaiting review</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Completed Today</h3>
            <i className="fas fa-check-circle text-green-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">{statistics.completedToday}</p>
          <p className="text-xs text-green-500 mt-1">+3 from yesterday</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Compliance Rate</h3>
            <i className="fas fa-chart-line text-purple-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">{statistics.complianceRate}</p>
          <p className="text-xs text-purple-500 mt-1">Above target</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Avg. Process Time</h3>
            <i className="fas fa-hourglass-half text-yellow-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">{statistics.avgProcessTime}</p>
          <p className="text-xs text-yellow-500 mt-1">Within SLA</p>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <h2 className="text-lg font-semibold mb-4">Audit Performance Trend</h2>
        <div className="h-[300px]">
          <Line 
            data={auditPerformanceData}
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

      {/* Requests Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Request ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                  Contributor
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                  Amount
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {requests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <div className="flex flex-col">
                      <span className="font-medium">{request.id}</span>
                      <span className="text-gray-500 text-xs sm:hidden">{request.type}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm hidden sm:table-cell">
                    {request.type}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm hidden md:table-cell">
                    {request.contributor}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                      Pending Audit
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm hidden lg:table-cell">
                    {request.amount}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <button
                      onClick={() => setSelectedRequest(request)}
                      className="text-blue-600 hover:text-blue-800 mr-3"
                    >
                      <i className="fas fa-eye mr-1"></i>
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Your existing review modal code */}
      {selectedRequest && (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Compliance Review: {selectedRequest.id}</h2>
          
          <div className="mb-4">
            <h3 className="font-medium mb-2">Process Manager Comments:</h3>
            <p className="bg-gray-100 p-3 rounded">{selectedRequest.processComments}</p>
          </div>
          
          <div className="mb-4">
            <h3 className="font-medium mb-2">PENCOM Compliance Checklist:</h3>
            <ul className="space-y-2">
              {complianceChecklist.map((item) => (
                <li key={item.id} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleComplianceCheck(item.id)}
                    className="mr-2"
                  />
                  <span>{item.item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Audit Comments</label>
            <textarea
              value={auditComment}
              onChange={(e) => setAuditComment(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              rows="3"
            />
          </div>
          
          <button
            onClick={handleApprove}
            disabled={!complianceChecklist.every(item => item.checked)}
            className={`py-2 px-4 rounded text-white ${
              complianceChecklist.every(item => item.checked) 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Approve & Forward to Account
          </button>
        </div>
      )}
    </div>
  );
};

export default AuditManagerDashboard;