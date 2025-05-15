import React, { useState } from 'react';

const Budgeting = () => {
  const [budgetData] = useState({
    totalBudget: '₦25,000,000.00',
    spent: '₦15,420,380.00',
    remaining: '₦9,579,620.00',
    categories: [
      { name: 'Operations', allocated: '₦10,000,000.00', spent: '₦6,500,000.00' },
      { name: 'Payroll', allocated: '₦8,000,000.00', spent: '₦5,420,380.00' },
      { name: 'Investment', allocated: '₦7,000,000.00', spent: '₦3,500,000.00' }
    ]
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-xl font-semibold text-gray-900">Budget Management</h2>
            <p className="mt-1 text-sm text-gray-500">
              Track and manage departmental budgets
            </p>
          </div>
          <div>
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              <i className="fas fa-plus mr-2"></i>
              New Budget
            </button>
          </div>
        </div>
      </div>

      {/* Budget Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Budget</p>
              <p className="text-2xl font-bold text-gray-900">{budgetData.totalBudget}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <i className="fas fa-wallet text-blue-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Spent</p>
              <p className="text-2xl font-bold text-red-600">{budgetData.spent}</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <i className="fas fa-chart-pie text-red-600"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Remaining</p>
              <p className="text-2xl font-bold text-green-600">{budgetData.remaining}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <i className="fas fa-piggy-bank text-green-600"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Budget Categories */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Budget Categories</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Allocated
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Spent
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Progress
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {budgetData.categories.map((category, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {category.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {category.allocated}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {category.spent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ 
                          width: `${(parseInt(category.spent.replace(/[^\d]/g, '')) / 
                          parseInt(category.allocated.replace(/[^\d]/g, '')) * 100)}%` 
                        }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <i className="fas fa-trash"></i>
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

export default Budgeting;