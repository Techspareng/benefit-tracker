import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AccountTransactions = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Transaction Management</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage and monitor all financial transactions
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Link
          to="pending"
          className="flex-1 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center">
            <div className="bg-orange-100 p-3 rounded-full">
              <i className="fas fa-clock text-orange-600"></i>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Pending</h3>
              <p className="text-sm text-gray-500">View pending transactions</p>
            </div>
          </div>
        </Link>

        <Link
          to="approved"
          className="flex-1 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-full">
              <i className="fas fa-check-circle text-green-600"></i>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Approved</h3>
              <p className="text-sm text-gray-500">View approved transactions</p>
            </div>
          </div>
        </Link>

        <Link
          to="history"
          className="flex-1 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-full">
              <i className="fas fa-history text-blue-600"></i>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">History</h3>
              <p className="text-sm text-gray-500">View transaction history</p>
            </div>
          </div>
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default AccountTransactions;