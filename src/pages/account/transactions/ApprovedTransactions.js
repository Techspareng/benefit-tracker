import React, { useState } from 'react';

const ApprovedTransactions = () => {
  const [transactions] = useState([
    {
      id: 'TRX-002',
      type: 'Payment',
      amount: '₦250,000.00',
      beneficiary: 'Jane Smith',
      date: '2025-05-14',
      approvedBy: 'Admin User',
      approvedDate: '2025-05-14'
    },
    // Add more mock data as needed
  ]);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Approved Transactions</h2>
          <div className="mt-3 sm:mt-0 flex gap-2">
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
              <i className="fas fa-download mr-2"></i>
              Export
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <i className="fas fa-filter mr-2"></i>
              Filter
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Beneficiary
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Approved By
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Approval Date
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                  {transaction.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {transaction.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                  {transaction.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {transaction.beneficiary}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {transaction.approvedBy}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {transaction.approvedDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="text-green-600 hover:text-green-900">
                    <i className="fas fa-download"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing 1 to 10 of 20 transactions
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded text-sm">Previous</button>
            <button className="px-3 py-1 border rounded text-sm bg-blue-600 text-white">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovedTransactions;