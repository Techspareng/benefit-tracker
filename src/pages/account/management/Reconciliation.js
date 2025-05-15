import React, { useState } from 'react';

const Reconciliation = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [reconciliationStatus] = useState({
    totalTransactions: 158,
    matched: 152,
    unmatched: 6,
    balance: '₦1,250,000.00'
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-xl font-semibold text-gray-900">Account Reconciliation</h2>
            <p className="mt-1 text-sm text-gray-500">
              Match and verify financial records
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              Start Reconciliation
            </button>
          </div>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Transactions</p>
              <p className="text-2xl font-bold text-gray-900">{reconciliationStatus.totalTransactions}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <i className="fas fa-file-alt text-blue-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Matched</p>
              <p className="text-2xl font-bold text-green-600">{reconciliationStatus.matched}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <i className="fas fa-check text-green-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Unmatched</p>
              <p className="text-2xl font-bold text-red-600">{reconciliationStatus.unmatched}</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <i className="fas fa-exclamation-circle text-red-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Balance Difference</p>
              <p className="text-2xl font-bold text-gray-900">{reconciliationStatus.balance}</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <i className="fas fa-balance-scale text-yellow-600"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Unmatched Transactions */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Unmatched Transactions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">TRX-001</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2025-05-15</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Payment Transfer</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₦150,000.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">Match</button>
                  <button className="text-red-600 hover:text-red-900">Flag</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reconciliation;