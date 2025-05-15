import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AccountManagerDashboard = () => {
  const [summaryData] = useState({
    pendingTransactions: 12,
    approvedTransactions: 45,
    totalAmount: '₦15,420,380.00',
    monthlyTransactions: 57
  });

  const [recentTransactions] = useState([
    {
      id: 'BC-2023-001',
      type: 'Retirement',
      contributor: 'John Doe',
      amount: '₦5,420,380.00',
      status: 'pending',
      date: '2023-05-15'
    },
    // Add more transactions as needed
  ]);

  const [requests, setRequests] = useState([
    {
      id: 'BC-2023-001',
      type: 'Retirement',
      contributor: 'John Doe',
      rsaPin: '1234567890',
      approvedAmount: '₦5,420,380.00',
      taxDeduction: '₦542,038.00',
      netAmount: '₦4,878,342.00',
      bankDetails: {
        name: 'First Bank',
        account: '1234567890',
        nameOnAccount: 'John Doe'
      }
    },
    // More mock requests...
  ]);

  const [selectedRequest, setSelectedRequest] = useState(null);

  const generatePaymentSchedule = () => {
    // API call to generate and send to bank
    alert(`Payment schedule for ${selectedRequest.id} sent to bank`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Account Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Overview of financial transactions and account status
        </p>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Transactions</p>
              <p className="text-2xl font-bold text-gray-900">{summaryData.pendingTransactions}</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <i className="fas fa-clock text-orange-600"></i>
            </div>
          </div>
          <div className="mt-2">
            <Link to="/account/transactions/pending" className="text-sm text-blue-600 hover:text-blue-800">
              View all pending →
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Approved Transactions</p>
              <p className="text-2xl font-bold text-gray-900">{summaryData.approvedTransactions}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <i className="fas fa-check-circle text-green-600"></i>
            </div>
          </div>
          <div className="mt-2">
            <Link to="/account/transactions/approved" className="text-sm text-blue-600 hover:text-blue-800">
              View approved →
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Amount</p>
              <p className="text-2xl font-bold text-gray-900">{summaryData.totalAmount}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <i className="fas fa-money-bill-wave text-blue-600"></i>
            </div>
          </div>
          <div className="mt-2">
            <Link to="/account/reports/monthly" className="text-sm text-blue-600 hover:text-blue-800">
              View reports →
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Monthly Transactions</p>
              <p className="text-2xl font-bold text-gray-900">{summaryData.monthlyTransactions}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <i className="fas fa-chart-line text-purple-600"></i>
            </div>
          </div>
          <div className="mt-2">
            <Link to="/account/analytics" className="text-sm text-blue-600 hover:text-blue-800">
              View analytics →
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100">
              <i className="fas fa-plus-circle mr-2 text-blue-600"></i>
              <span className="text-sm font-medium">New Transaction</span>
            </button>
            <button className="flex items-center justify-center p-3 bg-green-50 rounded-lg hover:bg-green-100">
              <i className="fas fa-file-export mr-2 text-green-600"></i>
              <span className="text-sm font-medium">Export Report</span>
            </button>
            <button className="flex items-center justify-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100">
              <i className="fas fa-sync mr-2 text-purple-600"></i>
              <span className="text-sm font-medium">Reconciliation</span>
            </button>
            <button className="flex items-center justify-center p-3 bg-orange-50 rounded-lg hover:bg-orange-100">
              <i className="fas fa-calendar-alt mr-2 text-orange-600"></i>
              <span className="text-sm font-medium">Schedule</span>
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-900 mb-4">System Status</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Bank Integration</span>
              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                Active
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Payment Processing</span>
              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                Operational
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Last Sync</span>
              <span className="text-sm text-gray-600">5 minutes ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Recent Transactions</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contributor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {transaction.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.contributor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      transaction.status === 'pending' 
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-200">
          <Link to="/account/transactions/history" className="text-sm text-blue-600 hover:text-blue-800">
            View all transactions →
          </Link>
        </div>
      </div>

      {selectedRequest && (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Payment Schedule: {selectedRequest.id}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-medium mb-2">Payment Details</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Approved Amount:</span> {selectedRequest.approvedAmount}</p>
                <p><span className="font-medium">Tax Deduction:</span> {selectedRequest.taxDeduction}</p>
                <p><span className="font-medium">Net Amount:</span> {selectedRequest.netAmount}</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Bank Details</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Bank:</span> {selectedRequest.bankDetails.name}</p>
                <p><span className="font-medium">Account Number:</span> {selectedRequest.bankDetails.account}</p>
                <p><span className="font-medium">Account Name:</span> {selectedRequest.bankDetails.nameOnAccount}</p>
              </div>
            </div>
          </div>
          
          <button
            onClick={generatePaymentSchedule}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Generate & Send Payment Schedule
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountManagerDashboard;