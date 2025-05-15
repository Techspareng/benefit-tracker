import React, { useState } from 'react';

const ApprovedRequest = () => {
  const [approvedRequests] = useState([
    {
      id: 'REQ001',
      beneficiary: 'John Doe',
      type: 'Retirement',
      approvalDate: '2025-05-01',
      amount: '₦2,500,000',
      status: 'Disbursed'
    },
    {
      id: 'REQ002',
      beneficiary: 'Jane Smith',
      type: 'Death Benefit',
      approvalDate: '2025-05-03',
      amount: '₦3,100,000',
      status: 'Disbursed'
    },
    {
      id: 'REQ003',
      beneficiary: 'Michael Johnson',
      type: 'Withdrawal',
      approvalDate: '2025-05-05',
      amount: '₦1,800,000',
      status: 'Pending Disbursement'
    }
  ]);

  return (
    <div className="p-2 sm:p-4 md:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 space-y-2 sm:space-y-0">
        <h1 className="text-xl sm:text-2xl font-bold">Approved Requests</h1>
        <div className="flex space-x-2 sm:space-x-4">
          <button className="bg-green-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base">
            <i className="fas fa-download mr-1 sm:mr-2"></i>Export
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase">
                  Request ID
                </th>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase">
                  Beneficiary
                </th>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase hidden sm:table-cell">
                  Type
                </th>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase hidden sm:table-cell">
                  Date
                </th>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase">
                  Amount
                </th>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {approvedRequests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                    {request.id}
                  </td>
                  <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm">
                    {request.beneficiary}
                  </td>
                  <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm hidden sm:table-cell">
                    {request.type}
                  </td>
                  <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm hidden sm:table-cell">
                    {request.approvalDate}
                  </td>
                  <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm">
                    {request.amount}
                  </td>
                  <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      request.status === 'Disbursed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm">
                    <button className="text-blue-600 hover:text-blue-900">
                      <i className="fas fa-eye"></i>
                      <span className="hidden sm:inline ml-1">View</span>
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

export default ApprovedRequest;