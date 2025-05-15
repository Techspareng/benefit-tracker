import React, { useState } from 'react';

const AllRequests = () => {
  const [requests] = useState([
    {
      id: 'REQ001',
      type: 'Retirement Benefits',
      applicant: 'John Doe',
      submittedDate: '2025-05-14',
      amount: '₦2,500,000',
      status: 'Approved',
      priority: 'High'
    },
    {
      id: 'REQ002',
      type: 'Death Benefits',
      applicant: 'Sarah Wilson',
      submittedDate: '2025-05-13',
      amount: '₦3,200,000',
      status: 'Pending',
      priority: 'High'
    },
    {
      id: 'REQ003',
      type: 'Retirement Benefits',
      applicant: 'Mike Johnson',
      submittedDate: '2025-05-12',
      amount: '₦1,800,000',
      status: 'Rejected',
      priority: 'Medium'
    }
  ]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Benefit Requests</h1>
        <div className="flex space-x-2">
          <select className="px-3 py-2 border rounded-lg">
            <option value="">Filter by Status</option>
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
          </select>
          <select className="px-3 py-2 border rounded-lg">
            <option value="">Filter by Type</option>
            <option value="retirement">Retirement</option>
            <option value="death">Death Benefits</option>
            <option value="disability">Disability</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Request ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Applicant
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Submitted Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {requests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {request.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {request.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {request.applicant}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {request.submittedDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {request.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${request.status === 'Approved' ? 'bg-green-100 text-green-800' : 
                        request.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${request.priority === 'High' ? 'bg-red-100 text-red-800' : 
                        'bg-yellow-100 text-yellow-800'}`}>
                      {request.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="text-green-600 hover:text-green-900 mr-3">
                      <i className="fas fa-file-download"></i>
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

export default AllRequests;