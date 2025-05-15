import React, { useState, useEffect, useRef } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
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
  ArcElement,
  Tooltip,
  Legend
);

const BenefitManagerDashboard = () => {
  const [documents, setDocuments] = useState([]);
  const [formData, setFormData] = useState({
    requestType: '',
    rsaPin: '',
    amount: ''
  });

  const [statistics] = useState({
    totalRequests: 156,
    pendingRequests: 23,
    approvedRequests: 120,
    rejectedRequests: 13,
    totalAmount: '₦45,678,900'
  });

  const [recentSubmissions] = useState([
    { id: 'REQ001', type: 'Retirement', status: 'Pending', date: '2025-05-14', amount: '₦2,500,000' },
    { id: 'REQ002', type: 'Death Benefit', status: 'Approved', date: '2025-05-13', amount: '₦3,100,000' },
    { id: 'REQ003', type: 'Withdrawal', status: 'Processing', date: '2025-05-12', amount: '₦1,800,000' },
  ]);

  const chartRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Request Volume',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: 'rgb(59, 130, 246)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: windowWidth < 768 ? 3 : 4,
        pointHoverRadius: windowWidth < 768 ? 4 : 6
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
        position: windowWidth < 768 ? 'bottom' : 'top',
        labels: {
          boxWidth: windowWidth < 768 ? 8 : 12,
          padding: windowWidth < 768 ? 8 : 10,
          font: {
            size: windowWidth < 768 ? 10 : 12
          }
        }
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        padding: windowWidth < 768 ? 6 : 8,
        bodyFont: {
          size: windowWidth < 768 ? 11 : 13
        },
        titleFont: {
          size: windowWidth < 768 ? 12 : 14
        },
        displayColors: windowWidth >= 768
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: windowWidth < 768 ? 10 : 12
          },
          maxTicksLimit: windowWidth < 768 ? 5 : 6,
          padding: windowWidth < 768 ? 5 : 10
        },
        grid: {
          display: true,
          drawBorder: false,
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      x: {
        ticks: {
          font: {
            size: windowWidth < 768 ? 10 : 12
          },
          maxRotation: windowWidth < 768 ? 45 : 0,
          minRotation: windowWidth < 768 ? 45 : 0,
          padding: windowWidth < 768 ? 5 : 10
        },
        grid: {
          display: false
        }
      }
    }
  };

  const doughnutData = {
    labels: ['Approved', 'Pending', 'Rejected'],
    datasets: [{
      data: [120, 23, 13],
      backgroundColor: ['#10B981', '#F59E0B', '#EF4444'],
      borderWidth: 0,
      hoverOffset: 4
    }]
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: windowWidth < 768 ? '60%' : '70%',
    plugins: {
      legend: {
        position: windowWidth < 768 ? 'bottom' : 'right',
        labels: {
          boxWidth: windowWidth < 768 ? 8 : 10,
          padding: windowWidth < 768 ? 10 : 20,
          font: {
            size: windowWidth < 768 ? 10 : 12
          },
          usePointStyle: windowWidth < 768
        }
      }
    },
    layout: {
      padding: windowWidth < 768 ? 10 : 20
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setDocuments(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate PENCOM rules here
    alert('Request submitted for validation!');
  };

  return (
    <div className="dashboard-container px-2 sm:px-4">
      {/* Statistics Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mb-6">
        {[
          { 
            title: 'Total Requests', 
            value: statistics.totalRequests, 
            icon: 'fas fa-file-alt', 
            color: 'blue',
            trend: '12% from last month',
            trendColor: 'green'
          },
          { 
            title: 'Pending', 
            value: statistics.pendingRequests, 
            icon: 'fas fa-clock', 
            color: 'yellow',
            trend: 'Awaiting Processing',
            trendColor: 'yellow'
          },
          { 
            title: 'Approved', 
            value: statistics.approvedRequests, 
            icon: 'fas fa-check-circle', 
            color: 'green',
            trend: 'Successfully Processed',
            trendColor: 'green'
          },
          { 
            title: 'Rejected', 
            value: statistics.rejectedRequests, 
            icon: 'fas fa-times-circle', 
            color: 'red',
            trend: 'Need Attention',
            trendColor: 'red'
          },
          { 
            title: 'Total Amount', 
            value: statistics.totalAmount, 
            icon: 'fas fa-money-bill-wave', 
            color: 'purple',
            trend: 'Total Processed Value',
            trendColor: 'purple'
          }
        ].map((stat, index) => (
          <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-gray-500 text-xs sm:text-sm">{stat.title}</h3>
              <span className={`text-${stat.color}-500 bg-${stat.color}-100 p-1 sm:p-2 rounded-full`}>
                <i className={`${stat.icon} text-sm sm:text-base`}></i>
              </span>
            </div>
            <p className="text-xl sm:text-2xl font-bold">{stat.value}</p>
            <div className={`mt-1 sm:mt-2 text-${stat.trendColor}-600 text-xs sm:text-sm`}>
              {stat.trend.startsWith('Awaiting') || stat.trend.startsWith('Successfully') || stat.trend.startsWith('Need') || stat.trend.startsWith('Total') ? 
                stat.trend : 
                <><i className="fas fa-arrow-up"></i> {stat.trend}</>
              }
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">Monthly Trend</h2>
          <div className="h-64 sm:h-80">
            <Line data={lineChartData} options={chartOptions} />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">Request Distribution</h2>
          <div className="h-64 sm:h-80">
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
        </div>
      </div>

      {/* Recent Submissions Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 sm:p-4">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold">Recent Submissions</h2>
          <button className="mt-2 sm:mt-0 text-blue-600 hover:text-blue-800 text-sm sm:text-base">
            View All <i className="fas fa-arrow-right ml-1"></i>
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Request ID
                </th>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                  Date
                </th>
                <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentSubmissions.map((submission) => (
                <tr key={submission.id} className="hover:bg-gray-50">
                  <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                    {windowWidth < 640 ? (
                      <div className="flex flex-col">
                        <span className="font-medium">{submission.id}</span>
                        <span className="text-gray-500 text-xs">{submission.type}</span>
                      </div>
                    ) : (
                      submission.id
                    )}
                  </td>
                  {windowWidth >= 640 && (
                    <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                      {submission.type}
                    </td>
                  )}
                  <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                    {submission.amount}
                  </td>
                  <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                    <span className={`status-badge px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${submission.status === 'Approved' ? 'bg-green-100 text-green-800' :
                        submission.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'}`}>
                      {submission.status}
                    </span>
                  </td>
                  {windowWidth >= 640 && (
                    <>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                        {submission.date}
                      </td>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            <i className="fas fa-eye"></i>
                          </button>
                          <button className="text-green-600 hover:text-green-900">
                            <i className="fas fa-chart-line"></i>
                          </button>
                        </div>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {windowWidth < 640 && (
          <div className="p-3 text-center text-sm text-gray-500">
            Swipe left to see more columns →
          </div>
        )}
      </div>
    </div>
  );
};

export default BenefitManagerDashboard;