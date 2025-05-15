import React from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const PerformanceMatrics = () => {
  const departmentMetrics = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Total Requests',
      data: [120, 150, 180, 165, 190],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
    }, {
      label: 'Approved Requests',
      data: [100, 130, 150, 145, 170],
      borderColor: 'rgb(16, 185, 129)',
      backgroundColor: 'rgba(16, 185, 129, 0.5)',
    }]
  };

  const requestTypeData = {
    labels: ['Retirement', 'Death', 'Disability', 'Medical', 'Others'],
    datasets: [{
      data: [35, 25, 20, 15, 5],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(251, 191, 36, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(107, 114, 128, 0.8)'
      ]
    }]
  };

  const staffPerformanceData = {
    labels: ['Processing Speed', 'Accuracy', 'Volume Handled', 'Client Satisfaction'],
    datasets: [{
      label: 'Department Average',
      data: [85, 92, 78, 88],
      backgroundColor: 'rgba(59, 130, 246, 0.8)',
    }]
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Department Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Total Requests</h3>
          <p className="text-2xl font-bold">805</p>
          <p className="text-xs text-green-500">+15.2% from last month</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Approval Rate</h3>
          <p className="text-2xl font-bold">89.5%</p>
          <p className="text-xs text-green-500">+2.3% from last month</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Processing Time</h3>
          <p className="text-2xl font-bold">1.8 days</p>
          <p className="text-xs text-green-500">-0.3 days improvement</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Department Efficiency</h3>
          <p className="text-2xl font-bold">92.4%</p>
          <p className="text-xs text-green-500">+1.8% from target</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Request Trends</h2>
          <div className="h-[300px]">
            <Line 
              data={departmentMetrics} 
              options={{ 
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom'
                  }
                }
              }} 
            />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Request Distribution</h2>
          <div className="h-[300px]">
            <Doughnut 
              data={requestTypeData}
              options={{ 
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom'
                  }
                }
              }} 
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Department Performance Metrics</h2>
          <div className="h-[300px]">
            <Bar 
              data={staffPerformanceData}
              options={{ 
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 100
                  }
                },
                plugins: {
                  legend: {
                    display: false
                  }
                }
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMatrics;