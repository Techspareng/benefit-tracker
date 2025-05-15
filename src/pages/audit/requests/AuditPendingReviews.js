import React, { useState, useEffect } from 'react';

const AuditPendingReviews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [filter, setFilter] = useState('all');

  const [requests] = useState([
    {
      id: "AUD-2023-001",
      type: "Medical Claim",
      submitter: "John Smith",
      department: "Benefits",
      amount: "$2,500",
      submittedDate: "2023-05-15",
      status: "Pending Audit",
      priority: "High",
      riskLevel: "Medium"
    },
    // Add more mock data as needed
  ]);

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [complianceChecklist, setComplianceChecklist] = useState([
    { id: 1, item: 'Age verification', checked: false },
    { id: 2, item: 'RSA balance validation', checked: false },
    { id: 3, item: 'Tax compliance', checked: false },
    { id: 4, item: 'Document completeness', checked: false },
    { id: 5, item: 'Regulatory requirements', checked: false }
  ]);
  const [auditComment, setAuditComment] = useState('');

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleComplianceCheck = (id) => {
    setComplianceChecklist(complianceChecklist.map(item => 
      item.id === id ? {...item, checked: !item.checked} : item
    ));
  };

  const handleApprove = () => {
    alert(`Request ${selectedRequest.id} approved and forwarded to Account`);
    setSelectedRequest(null);
    setAuditComment('');
    setComplianceChecklist(prev => prev.map(item => ({ ...item, checked: false })));
  };

  const handleReviewClick = (request) => {
    setSelectedRequest(request);
  };

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Pending Audit Reviews</h1>
          <p className="text-sm text-gray-500 mt-1">Manage and track pending audit requests</p>
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
            <option value="all">All Priorities</option>
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
          </select>
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
                  Submitter
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                  Risk Level
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
                    {request.submitter}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full 
                      ${request.priority === 'High' ? 'bg-red-100 text-red-800' :
                        request.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'}`}>
                      {request.priority}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm hidden lg:table-cell">
                    <span className={`px-2 py-1 text-xs rounded-full 
                      ${request.riskLevel === 'High' ? 'bg-red-100 text-red-800' :
                        request.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'}`}>
                      {request.riskLevel}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <div className="flex space-x-2">
                      <button 
                        className="text-blue-600 hover:text-blue-800"
                        onClick={() => handleReviewClick(request)}
                      >
                        <i className="fas fa-eye mr-1"></i>
                        Review
                      </button>
                      <button className="text-green-600 hover:text-green-800">
                        <i className="fas fa-check mr-1"></i>
                        Approve
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {windowWidth < 640 && (
          <div className="p-3 text-center text-sm text-gray-500">
            Swipe left to see more columns →
          </div>
        )}
      </div>

      {/* Audit Review Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-semibold">Audit Review: {selectedRequest.id}</h2>
              <button 
                onClick={() => setSelectedRequest(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Request Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Type</h3>
                  <p className="mt-1">{selectedRequest.type}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Submitter</h3>
                  <p className="mt-1">{selectedRequest.submitter}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Amount</h3>
                  <p className="mt-1">{selectedRequest.amount}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Risk Level</h3>
                  <span className={`mt-1 px-2 py-1 text-xs rounded-full inline-block
                    ${selectedRequest.riskLevel === 'High' ? 'bg-red-100 text-red-800' :
                      selectedRequest.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'}`}>
                    {selectedRequest.riskLevel}
                  </span>
                </div>
              </div>

              {/* Compliance Checklist */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Compliance Checklist:</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  {complianceChecklist.map((item) => (
                    <div key={item.id} className="flex items-center mb-3 last:mb-0">
                      <input
                        type="checkbox"
                        id={`check-${item.id}`}
                        checked={item.checked}
                        onChange={() => handleComplianceCheck(item.id)}
                        className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      />
                      <label htmlFor={`check-${item.id}`} className="ml-2 text-sm text-gray-700">
                        {item.item}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Audit Comments */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Audit Comments
                </label>
                <textarea
                  value={auditComment}
                  onChange={(e) => setAuditComment(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  rows="4"
                  placeholder="Enter your audit comments..."
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setSelectedRequest(null)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={handleApprove}
                  disabled={!complianceChecklist.every(item => item.checked)}
                  className={`px-4 py-2 rounded-lg text-white ${
                    complianceChecklist.every(item => item.checked)
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  <i className="fas fa-check mr-2"></i>
                  Approve & Forward
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuditPendingReviews;