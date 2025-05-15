import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import '../../styles/DashboardStyles.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HODBenefitDepartment = () => {
  const [statistics] = useState({
    totalRequests: 142,
    pendingApproval: 8,
    avgProcessingTime: '2.3 days',
    monthlyRequests: 45,
    totalAmount: '₦45,678,900'
  });

  const [recentActivities] = useState([
    {
      id: 'REQ001',
      type: 'Retirement Benefits',
      requestedBy: 'John Doe',
      status: 'Pending',
      amount: '₦2,500,000',
      submittedDate: '2025-05-14'
    },
    {
      id: 'REQ002',
      type: 'Death Benefits',
      requestedBy: 'Jane Smith',
      status: 'Approved',
      amount: '₦3,100,000',
      submittedDate: '2025-05-13'
    }
  ]);

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Request Volume',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'nearest',
      intersect: false,
      axis: 'x'
    },
    plugins: {
      legend: {
        position: window.innerWidth < 768 ? 'bottom' : 'top',
        labels: {
          boxWidth: window.innerWidth < 768 ? 8 : 12,
          padding: window.innerWidth < 768 ? 8 : 10,
          font: {
            size: window.innerWidth < 768 ? 10 : 12
          }
        }
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        padding: 8,
        bodyFont: {
          size: window.innerWidth < 768 ? 11 : 13
        },
        titleFont: {
          size: window.innerWidth < 768 ? 12 : 14
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: window.innerWidth < 768 ? 10 : 12
          },
          maxTicksLimit: 6
        },
        grid: {
          display: true,
          drawBorder: false
        }
      },
      x: {
        ticks: {
          font: {
            size: window.innerWidth < 768 ? 10 : 12
          },
          maxRotation: 45,
          minRotation: 45
        },
        grid: {
          display: false
        }
      }
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="text-xl md:text-2xl font-bold mb-6">Benefit Department Overview</h1>
      
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm">Total Requests</h3>
            <span className="text-blue-500 bg-blue-100 p-2 rounded-full">
              <i className="fas fa-file-alt"></i>
            </span>
          </div>
          <p className="text-2xl font-bold">{statistics.totalRequests}</p>
          <p className="text-sm text-green-600 mt-2">
            <i className="fas fa-arrow-up"></i> 12% from last month
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm">Pending Approval</h3>
            <span className="text-yellow-500 bg-yellow-100 p-2 rounded-full">
              <i className="fas fa-clock"></i>
            </span>
          </div>
          <p className="text-2xl font-bold">{statistics.pendingApproval}</p>
          <p className="text-sm text-yellow-600 mt-2">Needs attention</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm">Avg. Processing Time</h3>
            <span className="text-green-500 bg-green-100 p-2 rounded-full">
              <i className="fas fa-hourglass-half"></i>
            </span>
          </div>
          <p className="text-2xl font-bold">{statistics.avgProcessingTime}</p>
          <p className="text-sm text-green-600 mt-2">Within target range</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm">Total Amount</h3>
            <span className="text-purple-500 bg-purple-100 p-2 rounded-full">
              <i className="fas fa-money-bill-wave"></i>
            </span>
          </div>
          <p className="text-2xl font-bold">{statistics.totalAmount}</p>
          <p className="text-sm text-purple-600 mt-2">Total processed value</p>
        </div>
      </div>

      {/* Chart */}
      <div className="chart-container">
        <div className="chart-wrapper">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="table-container">
        <div className="p-4 border-b">
          <h2 className="text-lg md:text-xl font-semibold">Recent Activity</h2>
        </div>
        <div className="table-wrapper">
          <table className="responsive-table">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Request ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Requested By</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentActivities.map((activity) => (
                <tr key={activity.id}>
                  <td data-label="Request ID" className="px-6 py-4">
                    {activity.id}
                  </td>
                  <td data-label="Type" className="px-6 py-4">
                    {activity.type}
                  </td>
                  <td data-label="Requested By" className="px-6 py-4">
                    {activity.requestedBy}
                  </td>
                  <td data-label="Amount" className="px-6 py-4">
                    {activity.amount}
                  </td>
                  <td data-label="Status" className="px-6 py-4">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${activity.status === 'Approved' ? 'bg-green-100 text-green-800' : 
                      'bg-yellow-100 text-yellow-800'}`}>
                      {activity.status}
                    </span>
                  </td>
                  <td data-label="Date" className="px-6 py-4">
                    {activity.submittedDate}
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

export default HODBenefitDepartment;