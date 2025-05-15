import React, { useState } from 'react';

const PaymentSchedule = () => {
  const [schedules] = useState([
    {
      id: 'SCH-001',
      beneficiary: 'John Doe',
      amount: '₦250,000.00',
      frequency: 'Monthly',
      nextPayment: '2025-06-15',
      status: 'active'
    },
    {
      id: 'SCH-002',
      beneficiary: 'Jane Smith',
      amount: '₦180,000.00',
      frequency: 'Weekly',
      nextPayment: '2025-05-22',
      status: 'active'
    }
  ]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-xl font-semibold text-gray-900">Payment Schedule</h2>
            <p className="mt-1 text-sm text-gray-500">
              Manage recurring payments and schedules
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              <i className="fas fa-plus mr-2"></i>
              New Schedule
            </button>
          </div>
        </div>
      </div>

      {/* Schedule List */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-medium text-gray-900">Active Schedules</h3>
            <div className="mt-3 sm:mt-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search schedules..."
                  className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-search text-gray-400"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Schedule ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Beneficiary
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Frequency
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Next Payment
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {schedules.map((schedule) => (
                <tr key={schedule.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                    {schedule.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {schedule.beneficiary}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {schedule.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {schedule.frequency}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {schedule.nextPayment}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      {schedule.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="text-red-600 hover:text-red-900 mr-3">
                      <i className="fas fa-trash"></i>
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <i className="fas fa-ellipsis-v"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-sm text-gray-500 mb-4 sm:mb-0">
              Showing {schedules.length} schedules
            </div>
            <div className="flex justify-center space-x-2">
              <button className="px-3 py-1 border rounded text-sm">Previous</button>
              <button className="px-3 py-1 border rounded text-sm bg-blue-600 text-white">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSchedule;