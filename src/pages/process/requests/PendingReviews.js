import React, { useState, useEffect } from 'react';

// Add this after your existing imports
const ReviewModal = ({ isOpen, onClose, request }) => {
  if (!isOpen || !request) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Review Request {request.id}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4">
          {/* Request Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Contributor</h3>
              <p className="mt-1">{request.contributor}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Department</h3>
              <p className="mt-1">{request.department}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Type</h3>
              <p className="mt-1">{request.type}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Amount</h3>
              <p className="mt-1">{request.amount}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Submitted Date</h3>
              <p className="mt-1">{request.submittedDate}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Priority</h3>
              <span className={`mt-1 px-2 py-1 text-xs rounded-full inline-block
                ${request.priority === 'High' ? 'bg-red-100 text-red-800' :
                  request.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'}`}>
                {request.priority}
              </span>
            </div>
          </div>

          {/* Review Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Review Notes
              </label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your review notes..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Decision
              </label>
              <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                <option value="">Select decision...</option>
                <option value="approve">Approve</option>
                <option value="reject">Reject</option>
                <option value="more-info">Request More Information</option>
              </select>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end gap-2 p-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

const PendingReviews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Add statistics state
  const [statistics] = useState({
    totalPending: 32,
    avgWaitTime: "1.2 days",
    urgentRequests: 7,
    pendingRate: "18%"
  });

  // Add pending requests data
  const [requests] = useState([
    {
      id: "REQ-2023-061",
      contributor: "Alice Cooper",
      type: "Medical Claim",
      amount: "$2,300",
      status: "Pending",
      priority: "High",
      department: "Healthcare",
      submittedDate: "2023-05-15"
    },
    {
      id: "REQ-2023-062",
      contributor: "Bob Dylan",
      type: "Travel Expense",
      amount: "$950",
      status: "Pending",
      priority: "Medium",
      department: "Sales",
      submittedDate: "2023-05-15"
    },
    {
      id: "REQ-2023-063",
      contributor: "Carol King",
      type: "Equipment",
      amount: "$3,500",
      status: "Pending",
      priority: "High",
      department: "IT",
      submittedDate: "2023-05-14"
    },
    {
      id: "REQ-2023-064",
      contributor: "David Bowie",
      type: "Training",
      amount: "$1,800",
      status: "Pending",
      priority: "Low",
      department: "HR",
      submittedDate: "2023-05-14"
    }
  ]);

  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  
  // Add handler for opening the review modal
  const handleReviewClick = (request) => {
    setSelectedRequest(request);
    setIsReviewModalOpen(true);
  };

  // Add handler for closing the review modal
  const handleCloseModal = () => {
    setSelectedRequest(null);
    setIsReviewModalOpen(false);
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="p-2 sm:p-4 md:p-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Pending Reviews</h1>
          <p className="text-sm text-gray-500 mt-1">Review requests awaiting processing</p>
        </div>
        <div className="w-full sm:w-auto mt-4 sm:mt-0">
          <input
            type="search"
            placeholder="Search requests..."
            className="w-full sm:w-64 px-3 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Total Pending</h3>
            <i className="fas fa-clock text-yellow-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">{statistics.totalPending}</p>
          <p className="text-xs text-yellow-500 mt-1">Awaiting review</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Avg. Wait Time</h3>
            <i className="fas fa-hourglass-half text-blue-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">{statistics.avgWaitTime}</p>
          <p className="text-xs text-blue-500 mt-1">Within SLA</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Urgent Requests</h3>
            <i className="fas fa-exclamation-circle text-red-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">{statistics.urgentRequests}</p>
          <p className="text-xs text-red-500 mt-1">High priority</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Pending Rate</h3>
            <i className="fas fa-percentage text-green-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">{statistics.pendingRate}</p>
          <p className="text-xs text-green-500 mt-1">Of total requests</p>
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
                  Amount
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                  Department
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
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
                    {request.amount}
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
                    {request.department}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                      Pending
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800" onClick={() => handleReviewClick(request)}>
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

      {/* Review Modal */}
      <ReviewModal 
        isOpen={isReviewModalOpen} 
        onClose={handleCloseModal} 
        request={selectedRequest} 
      />
    </div>
  );
};

export default PendingReviews;