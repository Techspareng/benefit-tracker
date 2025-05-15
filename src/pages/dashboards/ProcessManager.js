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
  Legend
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

const ProcessManagerDashboard = () => {
  const [requests, setRequests] = useState([
    {
      id: 'BC-2023-001',
      type: 'Retirement',
      contributor: 'John Doe',
      rsaPin: '1234567890',
      status: 'pending',
      date: '2023-05-14',
      documents: ['id_proof.pdf', 'pencom_form.pdf']
    },
    // Add more mock data here
  ]);

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [comment, setComment] = useState('');
  const [reviewComment, setReviewComment] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [documentChecklist, setDocumentChecklist] = useState({});
  
  // Statistics for cards
  const statistics = {
    totalRequests: 156,
    pendingReview: 23,
    processed: 120,
    averageTime: '2.5 days'
  };

  // Chart data
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Processed Requests',
      data: [65, 59, 80, 81, 56],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4,
      fill: true
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: window.innerWidth < 768 ? 'bottom' : 'top',
        labels: {
          boxWidth: window.innerWidth < 768 ? 8 : 12,
          font: { size: window.innerWidth < 768 ? 10 : 12 }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: { size: window.innerWidth < 768 ? 10 : 12 }
        }
      }
    }
  };

  return (
    <div className="p-3 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-6">Process Manager Dashboard</h1>
      
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Total Requests</h3>
          <p className="text-2xl font-bold">{statistics.totalRequests}</p>
          <p className="text-xs text-green-500">+12% from last month</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Pending Review</h3>
          <p className="text-2xl font-bold">{statistics.pendingReview}</p>
          <p className="text-xs text-yellow-500">Needs attention</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Processed</h3>
          <p className="text-2xl font-bold">{statistics.processed}</p>
          <p className="text-xs text-green-500">On track</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Average Processing Time</h3>
          <p className="text-2xl font-bold">{statistics.averageTime}</p>
          <p className="text-xs text-green-500">-0.5 days from target</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <h2 className="text-lg font-semibold mb-4">Processing Trends</h2>
        <div className="h-[300px]">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* Requests Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Pending Requests</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Request ID
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                  Type
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                  Contributor
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {requests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <div className="text-sm font-medium text-gray-900">{request.id}</div>
                      <div className="text-sm text-gray-500 sm:hidden">{request.type}</div>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap hidden sm:table-cell">
                    <div className="text-sm text-gray-900">{request.type}</div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap hidden sm:table-cell">
                    <div className="text-sm text-gray-900">{request.contributor}</div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      request.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    <button 
                      onClick={() => setSelectedRequest(request)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Review Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-full max-w-4xl bg-white rounded-lg shadow-xl">
            {/* Header */}
            <div className="flex justify-between items-start border-b pb-4">
              <div>
                <h2 className="text-xl font-semibold">Review Request: {selectedRequest.id}</h2>
                <p className="text-sm text-gray-500 mt-1">Submitted on {selectedRequest.date}</p>
              </div>
              <button 
                onClick={() => setSelectedRequest(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              {/* Left Column - Request Details */}
              <div className="lg:col-span-2 space-y-6">
                {/* Request Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Request Summary</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500">Contributor</p>
                      <p className="text-sm font-medium">{selectedRequest.contributor}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">RSA PIN</p>
                      <p className="text-sm font-medium">{selectedRequest.rsaPin}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Type</p>
                      <p className="text-sm font-medium">{selectedRequest.type}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Status</p>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        selectedRequest.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-green-100 text-green-800'
                      }`}>
                        {selectedRequest.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Document Review */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Document Review</h3>
                  <div className="space-y-2">
                    {selectedRequest.documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            id={`doc-${index}`}
                            checked={documentChecklist[doc] || false}
                            onChange={(e) => setDocumentChecklist({
                              ...documentChecklist,
                              [doc]: e.target.checked
                            })}
                            className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                          />
                          <label htmlFor={`doc-${index}`} className="flex items-center text-sm">
                            <i className={`fas ${doc.endsWith('.pdf') ? 'fa-file-pdf' : 'fa-file'} text-red-500 mr-2`}></i>
                            {doc}
                          </label>
                        </div>
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-800 text-sm">
                            <i className="fas fa-eye mr-1"></i>
                            View
                          </button>
                          <button className="text-green-600 hover:text-green-800 text-sm">
                            <i className="fas fa-download mr-1"></i>
                            Download
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Review Form */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Review Decision
                    </label>
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                    >
                      <option value="">Select decision...</option>
                      <option value="approved">Approve</option>
                      <option value="rejected">Reject</option>
                      <option value="moreInfo">Request More Info</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Review Comments
                    </label>
                    <textarea
                      value={reviewComment}
                      onChange={(e) => setReviewComment(e.target.value)}
                      rows="4"
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                      placeholder="Enter your review comments..."
                    />
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <button
                      onClick={() => {
                        // Handle review submission
                        console.log({
                          requestId: selectedRequest.id,
                          status: selectedStatus,
                          comments: reviewComment,
                          documentChecklist
                        });
                        setSelectedRequest(null);
                      }}
                      disabled={!selectedStatus || !reviewComment}
                      className={`w-full py-2 px-4 rounded-lg text-white text-sm font-medium
                        ${!selectedStatus || !reviewComment
                          ? 'bg-blue-300 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                    >
                      Submit Review
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcessManagerDashboard;