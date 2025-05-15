import React, { useState } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const AccountPerformance = () => {
  const [selectedMetric, setSelectedMetric] = useState('processing_time');
  const [timeRange, setTimeRange] = useState('month');

  const performanceMetrics = {
    processing_time: {
      current: '1.8 days',
      previous: '2.1 days',
      trend: 'decrease',
      percentage: '14.3'
    },
    accuracy_rate: {
      current: '98.5%',
      previous: '97.8%',
      trend: 'increase',
      percentage: '0.7'
    },
    completion_rate: {
      current: '95.2%',
      previous: '94.5%',
      trend: 'increase',
      percentage: '0.7'
    }
  };

  const trendData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Processing Time (Days)',
        data: [2.1, 1.9, 1.8, 1.8],
        borderColor: 'rgb(59, 130, 246)',
        tension: 0.1
      }
    ]
  };

  const distributionData = {
    labels: ['< 1 Day', '1-2 Days', '2-3 Days', '> 3 Days'],
    datasets: [
      {
        data: [30, 45, 15, 10],
        backgroundColor: [
          'rgb(34, 197, 94)',
          'rgb(59, 130, 246)',
          'rgb(234, 179, 8)',
          'rgb(239, 68, 68)'
        ]
      }
    ]
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Performance Metrics</h1>
          <p className="mt-1 text-sm text-gray-500">Detailed analysis of account department efficiency</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            <i className="fas fa-download mr-2"></i>
            Export Report
          </button>
        </div>
      </div>

      {/* Metric Selector Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.entries(performanceMetrics).map(([key, metric]) => (
          <div
            key={key}
            onClick={() => setSelectedMetric(key)}
            className={`cursor-pointer p-4 rounded-lg shadow-sm ${
              selectedMetric === key ? 'bg-blue-50 border-2 border-blue-500' : 'bg-white'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </p>
                <p className="text-2xl font-bold text-gray-900">{metric.current}</p>
                <div className={`flex items-center text-sm ${
                  metric.trend === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}>
                  <i className={`fas fa-arrow-${metric.trend === 'increase' ? 'up' : 'down'} mr-1`}></i>
                  <span>{metric.percentage}%</span>
                </div>
              </div>
              <div className={`p-3 rounded-full ${
                selectedMetric === key ? 'bg-blue-100' : 'bg-gray-100'
              }`}>
                <i className={`fas fa-${
                  key === 'processing_time' ? 'clock' :
                  key === 'accuracy_rate' ? 'bullseye' : 'check-circle'
                } ${
                  selectedMetric === key ? 'text-blue-600' : 'text-gray-600'
                }`}></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Performance Trend</h3>
          <div className="h-64 sm:h-80">
            <Line 
              data={trendData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom'
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
          <h3 className="text-lg font-medium text-gray-900 mb-4">Processing Time Distribution</h3>
          <div className="h-64 sm:h-80">
            <Doughnut 
              data={distributionData}
              options={{
                responsive: true,
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
    </div>
  );
};

export default AccountPerformance;