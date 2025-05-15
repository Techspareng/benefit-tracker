import React, { useState, useEffect } from 'react';
import { Line, Radar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const AuditHODPerformanceOverview = () => {
  const [timeRange, setTimeRange] = useState('week');
  const [teamMember, setTeamMember] = useState('all');
  const [loading, setLoading] = useState(false);

  const [performanceMetrics] = useState({
    overallScore: 92,
    taskCompletion: 88,
    qualityRating: 94,
    timeEfficiency: 87,
    teamCollaboration: 90,
    weeklyProgress: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      data: [85, 88, 92, 89, 91]
    },
    skillMatrix: {
      technical: 90,
      analytical: 85,
      communication: 88,
      problemSolving: 92,
      riskAssessment: 87
    },
    workloadDistribution: {
      inProgress: 8,
      completed: 45,
      upcoming: 12,
      onHold: 3
    }
  });

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      {/* Header with Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Performance Overview</h1>
          <p className="mt-1 text-sm text-gray-500">Team and individual performance metrics</p>
        </div>

        <div className="w-full sm:w-auto mt-4 sm:mt-0 flex flex-col sm:flex-row gap-2">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
          </select>

          <select
            value={teamMember}
            onChange={(e) => setTeamMember(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Members</option>
            <option value="auditors">Auditors</option>
            <option value="reviewers">Reviewers</option>
            <option value="specialists">Specialists</option>
          </select>
        </div>
      </div>

      {/* Performance Score Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Overall Score</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">{performanceMetrics.overallScore}%</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <i className="fas fa-star text-blue-600 text-xl"></i>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 rounded-full h-2" 
                style={{ width: `${performanceMetrics.overallScore}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Task Completion</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">{performanceMetrics.taskCompletion}%</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <i className="fas fa-tasks text-green-600 text-xl"></i>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-600 rounded-full h-2" 
                style={{ width: `${performanceMetrics.taskCompletion}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Quality Rating</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">{performanceMetrics.qualityRating}%</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <i className="fas fa-chart-line text-purple-600 text-xl"></i>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-purple-600 rounded-full h-2" 
                style={{ width: `${performanceMetrics.qualityRating}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Team Collaboration</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">{performanceMetrics.teamCollaboration}%</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <i className="fas fa-users text-yellow-600 text-xl"></i>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-yellow-600 rounded-full h-2" 
                style={{ width: `${performanceMetrics.teamCollaboration}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Weekly Progress Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Weekly Progress</h2>
          <div className="h-[300px]">
            <Line
              data={{
                labels: performanceMetrics.weeklyProgress.labels,
                datasets: [{
                  label: 'Performance Score',
                  data: performanceMetrics.weeklyProgress.data,
                  borderColor: 'rgb(59, 130, 246)',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  tension: 0.4,
                  fill: true
                }]
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: false,
                    min: 80,
                    max: 100
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Skill Matrix */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Skill Matrix</h2>
          <div className="h-[300px]">
            <Radar
              data={{
                labels: Object.keys(performanceMetrics.skillMatrix),
                datasets: [{
                  label: 'Skill Level',
                  data: Object.values(performanceMetrics.skillMatrix),
                  backgroundColor: 'rgba(59, 130, 246, 0.2)',
                  borderColor: 'rgb(59, 130, 246)',
                  borderWidth: 2
                }]
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                      stepSize: 20
                    }
                  }
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Workload Distribution */}
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Workload Distribution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-[250px]">
              <Doughnut
                data={{
                  labels: Object.keys(performanceMetrics.workloadDistribution),
                  datasets: [{
                    data: Object.values(performanceMetrics.workloadDistribution),
                    backgroundColor: [
                      'rgba(59, 130, 246, 0.6)',
                      'rgba(34, 197, 94, 0.6)',
                      'rgba(234, 179, 8, 0.6)',
                      'rgba(239, 68, 68, 0.6)'
                    ]
                  }]
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false
                }}
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="space-y-4">
                {Object.entries(performanceMetrics.workloadDistribution).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-2 ${
                        key === 'completed' ? 'bg-green-500' :
                        key === 'inProgress' ? 'bg-blue-500' :
                        key === 'upcoming' ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}></div>
                      <span className="capitalize">{key}</span>
                    </div>
                    <span className="font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditHODPerformanceOverview;