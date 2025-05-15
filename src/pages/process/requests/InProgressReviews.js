import React, { useState, useEffect } from 'react';

const InProgressReviews = () => {
  const [requests, setRequests] = useState([
    {
      id: "REQ-2023-051",
      contributor: "John Smith",
      currentStage: "Documentation Review",
      timeSpent: "2d 4h",
      status: "In Progress",
      priority: "High",
      lastUpdated: "2023-05-15"
    },
    {
      id: "REQ-2023-052",
      contributor: "Sarah Johnson",
      currentStage: "Financial Validation",
      timeSpent: "1d 6h",
      status: "In Progress",
      priority: "Medium",
      lastUpdated: "2023-05-15"
    },
    {
      id: "REQ-2023-053",
      contributor: "Mike Williams",
      currentStage: "Initial Review",
      timeSpent: "5h",
      status: "In Progress",
      priority: "Low",
      lastUpdated: "2023-05-15"
    },
    {
      id: "REQ-2023-054",
      contributor: "Emma Davis",
      currentStage: "Final Verification",
      timeSpent: "3d 2h",
      status: "In Progress",
      priority: "High",
      lastUpdated: "2023-05-14"
    },
    {
      id: "REQ-2023-055",
      contributor: "James Wilson",
      currentStage: "Documentation Review",
      timeSpent: "1d 3h",
      status: "In Progress",
      priority: "Medium",
      lastUpdated: "2023-05-14"
    }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [recentSubmissions] = useState([
    {
      id: "REQ-2023-001",
      type: "Medical Claim",
      amount: "$1,200",
      status: "In Progress",
      date: "2023-05-15",
      assignee: "John Smith",
      priority: "High",
      department: "Healthcare"
    },
    {
      id: "REQ-2023-002",
      type: "Travel Expense",
      amount: "$800",
      status: "Pending",
      date: "2023-05-14",
      assignee: "Sarah Johnson",
      priority: "Medium",
      department: "Operations"
    },
    {
      id: "REQ-2023-003",
      type: "Equipment Purchase",
      amount: "$2,500",
      status: "In Progress",
      date: "2023-05-13",
      assignee: "Mike Williams",
      priority: "High",
      department: "IT"
    },
    {
      id: "REQ-2023-004",
      type: "Training Program",
      amount: "$1,500",
      status: "In Progress",
      date: "2023-05-13",
      assignee: "Emma Davis",
      priority: "Medium",
      department: "HR"
    },
    {
      id: "REQ-2023-005",
      type: "Office Supplies",
      amount: "$350",
      status: "Pending",
      date: "2023-05-12",
      assignee: "James Wilson",
      priority: "Low",
      department: "Admin"
    }
  ]);
  const [statistics] = useState({
    totalInProgress: 28,
    avgProcessingTime: "1.8 days",
    criticalRequests: 5,
    completionRate: "92%"
  });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredRequests = requests.filter(request => 
    request.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.contributor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.currentStage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-2 sm:p-4 md:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 space-y-2 sm:space-y-0">
        <h1 className="text-xl sm:text-2xl font-bold">In Progress Reviews</h1>
        <div className="w-full sm:w-auto flex space-x-2">
          <input
            type="search"
            placeholder="Search by ID or contributor..."
            className="w-full sm:w-64 px-3 py-1 sm:px-4 sm:py-2 border rounded-lg text-sm sm:text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Total In Progress</h3>
            <i className="fas fa-tasks text-blue-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">{statistics.totalInProgress}</p>
          <p className="text-xs text-blue-500 mt-1">Active requests</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Avg. Processing Time</h3>
            <i className="fas fa-clock text-yellow-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">{statistics.avgProcessingTime}</p>
          <p className="text-xs text-green-500 mt-1">On target</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Critical Requests</h3>
            <i className="fas fa-exclamation-circle text-red-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">{statistics.criticalRequests}</p>
          <p className="text-xs text-red-500 mt-1">Need immediate attention</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Completion Rate</h3>
            <i className="fas fa-chart-line text-green-500"></i>
          </div>
          <p className="text-2xl font-bold mt-2">{statistics.completionRate}</p>
          <p className="text-xs text-green-500 mt-1">Above target</p>
        </div>
      </div>

      {/* Recent Submissions Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 sm:p-4">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold">Recent Submissions</h2>
          <button className="mt-2 sm:mt-0 text-blue-600 hover:text-blue-800 text-sm sm:text-base">
            View All <i className="fas fa-arrow-right ml-1"></i>
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Request ID
                </th>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                  Date
                </th>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentSubmissions.map((submission) => (
                <tr key={submission.id} className="hover:bg-gray-50">
                  <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                    {windowWidth < 640 ? (
                      <div className="flex flex-col">
                        <span className="font-medium">{submission.id}</span>
                        <span className="text-gray-500 text-xs">{submission.type}</span>
                      </div>
                    ) : (
                      submission.id
                    )}
                  </td>
                  {windowWidth >= 640 && (
                    <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                      {submission.type}
                    </td>
                  )}
                  <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                    {submission.amount}
                  </td>
                  <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                    <span className={`status-badge px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${submission.status === 'Approved' ? 'bg-green-100 text-green-800' :
                        submission.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'}`}>
                      {submission.status}
                    </span>
                  </td>
                  {windowWidth >= 640 && (
                    <>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                        {submission.date}
                      </td>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            <i className="fas fa-eye"></i>
                          </button>
                          <button className="text-green-600 hover:text-green-900">
                            <i className="fas fa-chart-line"></i>
                          </button>
                        </div>
                      </td>
                    </>
                  )}
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

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contributor</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">Stage</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">Time Spent</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredRequests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">{request.id}</td>
                  <td className="px-4 py-3 text-sm">{request.contributor}</td>
                  <td className="px-4 py-3 text-sm hidden sm:table-cell">{request.currentStage}</td>
                  <td className="px-4 py-3 text-sm hidden sm:table-cell">{request.timeSpent}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      In Progress
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-blue-600 hover:text-blue-800 text-sm">
                      Continue Review
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

export default InProgressReviews;