import React, { useState } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const HODAccountDepartment = () => {
  const [statistics] = useState({
    totalDisbursed: '₦45,678,900',
    pendingPayments: 15,
    avgProcessingTime: '2.1 days',
    monthlyDisbursement: '₦12,345,600',
    successRate: '98%'
  });

  const [recentTransactions] = useState([
    {
      id: 'TRX001',
      requestId: 'REQ156',
      amount: '₦2,500,000',
      status: 'Completed',
      date: '2025-05-14'
    },
    {
      id: 'TRX002',
      requestId: 'REQ155',
      amount: '₦1,800,000',
      status: 'Pending',
      date: '2025-05-13'
    }
  ]);

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Disbursements',
        data: [12000000, 15000000, 13500000, 14800000, 16200000, 15500000],
        borderColor: 'rgb(59, 130, 246)',
        tension: 0.1
      }
    ]
  };

  const doughnutChartData = {
    labels: ['Completed', 'Pending', 'Processing'],
    datasets: [
      {
        data: [65, 20, 15],
        backgroundColor: [
          'rgb(34, 197, 94)',
          'rgb(234, 179, 8)',
          'rgb(59, 130, 246)'
        ]
      }
    ]
  };

  return (
    <div className="p-2 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Account Department Overview</h1>
          <p className="mt-1 text-sm text-gray-500">Financial metrics and transaction analysis</p>
        </div>
        <div className="flex justify-end">
          <button className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            <i className="fas fa-download text-sm sm:text-base mr-2"></i>
            Export Report
          </button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-gray-600 truncate">Total Disbursed</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">{statistics.totalDisbursed}</p>
            </div>
            <div className="bg-blue-100 p-2 sm:p-3 rounded-full flex-shrink-0">
              <i className="fas fa-money-bill-wave text-blue-600 text-sm sm:text-base"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-gray-600 truncate">Pending Payments</p>
              <p className="text-lg sm:text-2xl font-bold text-yellow-600">{statistics.pendingPayments}</p>
            </div>
            <div className="bg-yellow-100 p-2 sm:p-3 rounded-full flex-shrink-0">
              <i className="fas fa-clock text-yellow-600 text-sm sm:text-base"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-gray-600 truncate">Avg. Processing Time</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">{statistics.avgProcessingTime}</p>
            </div>
            <div className="bg-purple-100 p-2 sm:p-3 rounded-full flex-shrink-0">
              <i className="fas fa-stopwatch text-purple-600 text-sm sm:text-base"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-gray-600 truncate">Monthly Disbursement</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">{statistics.monthlyDisbursement}</p>
            </div>
            <div className="bg-green-100 p-2 sm:p-3 rounded-full flex-shrink-0">
              <i className="fas fa-chart-line text-green-600 text-sm sm:text-base"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-gray-600 truncate">Success Rate</p>
              <p className="text-lg sm:text-2xl font-bold text-green-600">{statistics.successRate}</p>
            </div>
            <div className="bg-green-100 p-2 sm:p-3 rounded-full flex-shrink-0">
              <i className="fas fa-check-circle text-green-600 text-sm sm:text-base"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
          <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-4">Disbursement Trends</h3>
          <div className="h-48 sm:h-64">
            <Line 
              data={lineChartData} 
              options={{ 
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                  legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                      boxWidth: 10,
                      padding: 20
                    }
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      maxTicksLimit: 5
                    }
                  }
                }
              }} 
            />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
          <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-4">Transaction Status</h3>
          <div className="h-48 sm:h-64">
            <Doughnut 
              data={doughnutChartData} 
              options={{ 
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      boxWidth: 10,
                      padding: 20
                    }
                  }
                }
              }} 
            />
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <h3 className="text-base sm:text-lg font-medium text-gray-900">Recent Transactions</h3>
        </div>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Request
                  </th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentTransactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-blue-600">
                      {transaction.id}
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      {transaction.requestId}
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      {transaction.amount}
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                        transaction.status === 'Completed' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                      {transaction.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HODAccountDepartment;